"""Kiểm tra cấu tạo, số liệu và quy tắc chấm của web Polymer."""
import json
import math
import re
import subprocess
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent
node = r"""
const fs=require('fs'), vm=require('vm');
const root=process.argv[1];
const fake={innerHTML:'',textContent:'',style:{},dataset:{},lastChild:{textContent:''},
 classList:{add(){},remove(){},toggle(){}},addEventListener(){},querySelectorAll(){return []}};
const sandbox={window:{},Map,Set,URLSearchParams,Number,Date,Math,JSON,Array,Object,
 location:{hash:'',protocol:'file:'},navigator:{onLine:true},setTimeout,clearTimeout,setInterval,clearInterval,
 document:{getElementById(){return fake},querySelector(){return fake},querySelectorAll(){return []},
 addEventListener(){},documentElement:{dataset:{}}},
 localStorage:{getItem(){return null},setItem(){}},confirm(){return true}};
sandbox.window=sandbox;
sandbox.addEventListener=()=>{};
vm.createContext(sandbox);
for(const file of ['data/content.js','assets/visuals.js']){
 vm.runInContext(fs.readFileSync(root+'/'+file,'utf8'),sandbox);
}
let app=fs.readFileSync(root+'/assets/app.js','utf8');
const end='  render();\n})();';
if(!app.endsWith(end+'\n'))throw new Error('Update verifier hook after changing app entry.');
app=app.slice(0,-(end.length+1))+
 'window.testAPI={correct,answerComplete,quizPoints,startTest,configs,normalize,learn,embedUrl,state:()=>store};})();';
vm.runInContext(app,sandbox);
const api=sandbox.testAPI, data=sandbox.POLYMER_DATA;
for(const q of data.questions){
 if(!sandbox.POLYMER_VISUALS.render(q.visual))throw Error('Missing figure '+q.id);
 if(q.type==='write')continue;
 const answer=q.type==='tf'?Object.fromEntries(q.items.map((s,i)=>[i,s.answer])):q.answer;
 if(!api.answerComplete(q,answer)||!api.correct(q,answer))throw Error('Correct answer rejected '+q.id);
 if(q.type==='num'&&!api.correct(q,String(answer).replace('.',',')))throw Error('Decimal comma '+q.id);
 if(api.correct(q,''))throw Error('Empty answer accepted '+q.id);
}
const pvc=data.questions.find(q=>q.id==='DC-DS1');
for(const kind of Object.keys(api.configs)){
 const c=api.configs[kind];
 const all=Object.fromEntries(pvc.items.map((s,i)=>[i,s.answer]));
 if(api.quizPoints(pvc,all,kind)!==c.weights.tf)throw Error('TF full points '+kind);
 delete all[0];
 if(api.quizPoints(pvc,all,kind)!==c.weights.tf*.75)throw Error('TF partial points '+kind);
 for(let trial=0;trial<30;trial++){
  api.startTest(kind);
  const s=api.state().quiz,chosen=s.ids.map(id=>data.questions.find(q=>q.id===id));
  const concepts=chosen.map(q=>q.concept||q.id);
  if(new Set(concepts).size!==concepts.length)throw Error('Duplicate concept');
  let full=0;
  for(const type of ['mc','tf','num']){
   if(chosen.filter(q=>q.type===type).length!==c[type])throw Error('Question count '+kind);
  }
  for(const q of chosen){
   const answer=q.type==='tf'?Object.fromEntries(q.items.map((s,i)=>[i,s.answer])):q.answer;
   full+=api.quizPoints(q,answer,kind);
  }
  if(Math.abs(full-10)>1e-9)throw Error('Exam maximum '+kind);
 }
}
for(const l of data.lessons){
 for(const p of l.parts)if(!sandbox.POLYMER_VISUALS.render(p.visual))throw Error('Lesson illustration');
 const html=api.learn(l.id);
 const clipCount=l.parts.reduce((n,p)=>n+p.clips.length,0);
 if(html.includes('<iframe'))throw Error('Video loaded before learner clicks '+l.id);
 if((html.match(/data-action="clip"/g)||[]).length!==clipCount)throw Error('Missing clip controls '+l.id);
 for(const p of l.parts)for(const c of p.clips){
  const url=new URL(api.embedUrl(c.video,c.start,c.end));
  if(url.hostname!=='www.youtube-nocookie.com'||!url.pathname.endsWith('/'+c.video))throw Error('Wrong video');
  if(Number(url.searchParams.get('start'))!==c.start||Number(url.searchParams.get('end'))!==c.end)throw Error('Wrong absolute timestamps');
  if(!html.includes('watch?v='+c.video+'&t='+c.start+'s'))throw Error('Missing YouTube fallback');
 }
}
if(new URL(api.embedUrl(data.videos[0].id)).searchParams.has('end'))throw Error('Full video cut short');
console.log(JSON.stringify(data));
"""
result = subprocess.run(["node", "-e", node, str(ROOT)], check=True, capture_output=True, text=True)
data = json.loads(result.stdout)
questions = {q["id"]: q for q in data["questions"]}
assert len(questions) == 72
assert Counter(q["source"] for q in questions.values()) == {"doc": 48, "extra": 24}
assert Counter(q["type"] for q in questions.values()) == {"mc": 43, "tf": 10, "num": 17, "write": 2}
assert len(data["lessons"]) == 8
durations = {
    v["id"]: sum(int(part) * 60 ** i for i, part in enumerate(reversed(v["duration"].split(":"))))
    for v in data["videos"]
}
clips = []
for lesson in data["lessons"]:
    for part in lesson["parts"]:
        assert part["clips"] and part["visual"], (lesson["id"], part["title"])
        for clip in part["clips"]:
            assert clip["title"] and clip["video"] in durations
            assert isinstance(clip["start"], int) and isinstance(clip["end"], int)
            assert 0 <= clip["start"] < clip["end"] <= durations[clip["video"]], clip
            clips.append(clip)
assert len(clips) == 41
for q in questions.values():
    assert q["hint"] and len(q["steps"]) >= 3 and q["visual"]
    if q["source"] == "doc":
        assert (ROOT / "tai-lieu" / f"trang-{q['page']}.webp").exists()
    if q["type"] == "tf":
        assert len(q["items"]) == 4 and all(i["why"] for i in q["items"])

atomic = {"C": 12, "H": 1, "O": 16, "N": 14, "Cl": 35.5, "F": 19}
for polymer in data["polymers"]:
    if polymer["formula"]:
        formula = re.findall(r"([A-Z][a-z]?)([0-9]*)", polymer["formula"])
        mass = sum(atomic[element] * int(count or 1) for element, count in formula)
        assert mass == polymer["mass"], (polymer["id"], mass)

def number(id):
    return float(questions[id]["answer"])

expected = {
    "DC-S1": 4,
    "DC-S2": 400000 / (2 * 12 + 4 * 19),
    "DC-S3": 54 * (2 * 46) / (54 * .5 * .8),
    "CD-S1": 4,
    "CD-S2": 35000 / (2 * 12 + 3 + 35.5),
    "CD-S3": 495.8 * .8 * 1000 / 24.79 / 2 * 62.5 * .5 / 1000,
    "TC-S1": 2,
    "TC-S2": 5,
    "TC-S3": round(590000 / (6 * 12 + 10 + 5 * 16)),
    "KT-S1": 26000 / 104,
    "KT-S2": 120000 / 100,
    "KT-S3": 28 * .75,
    "KT-S4": 100 / .8,
    "KT-S5": round(35.5 / 62.5 * 100, 1),
    "KT-S6": 146 + 116 - 2 * 18,
    "KT-S7": 2 * .6 * 1000,
    "KT-S8": 2,
}
for id, value in expected.items():
    assert math.isclose(number(id), value), (id, value)

# Kiểm tra đáp án gốc theo thứ tự lựa chọn trên các trang đã gửi.
for id, answer in {
    "SGK-1": 1, "SGK-2": 3, "SGK-3": 0, "SGK-5": 3,
    **{f"DC-{i}": a for i, a in enumerate([0, 1, 0, 2, 1, 0, 0, 0, 0], 1)},
    **{f"CD-{i}": a for i, a in enumerate([0, 2, 0, 1, 3, 3, 0, 2, 3], 1)},
    **{f"TC-{i}": a for i, a in enumerate([1, 0, 0, 3, 1, 1, 1, 1, 1], 1)},
}.items():
    assert questions[id]["answer"] == answer, id

sw = (ROOT / "sw.js").read_text()
for path in re.findall(r"""["'](\./[^"']*)["']""", sw):
    if path != "./":
        assert (ROOT / path).is_file(), path
assert len(list((ROOT / "tai-lieu").glob("*.webp"))) == 9
for file in ROOT.rglob("*.html"):
    source = file.read_text()
    assert not re.search(r'<script[^>]+src=["\']https?://', source)
    for path in re.findall(r'(?:src|href)="([^"#]+)"', source):
        if "://" not in path:
            assert (file.parent / path).exists(), path
print("PASS 48 câu tài liệu + 24 câu bổ sung, đủ lời giải và minh họa.")
print("PASS 19 cấu tạo/khối lượng mắt xích và 17 đáp án số được kiểm tra độc lập.")
print("PASS 8 bài, 32 phần có minh họa và 9 trang tài liệu gốc.")
print("PASS 41 đoạn video cho 32 mục, đúng ID/mốc đầu/mốc cuối, có liên kết dự phòng, chỉ tải khi bấm.")
print("PASS điểm tối đa 10, điểm từng ý, nhập dấu phẩy/chấm và 90 lượt sinh đề.")
print("PASS bộ nhớ đệm chứa đủ tệp cục bộ và không có script CDN.")
