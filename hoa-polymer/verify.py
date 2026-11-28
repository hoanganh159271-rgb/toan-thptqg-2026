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
for(const file of ['data/content.js','data/guides.js','assets/visuals.js']){
 vm.runInContext(fs.readFileSync(root+'/'+file,'utf8'),sandbox);
}
let app=fs.readFileSync(root+'/assets/app.js','utf8');
const end='  render();\n})();';
if(!app.endsWith(end+'\n'))throw new Error('Update verifier hook after changing app entry.');
app=app.slice(0,-(end.length+1))+
 'window.testAPI={correct,answerComplete,quizPoints,startTest,finishQuiz,configs,legacyConfigs,quizConfig,normalize,learn,embedUrl,exam,render,state:()=>store};})();';
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
for(const kind of Object.keys(api.legacyConfigs)){
 const c=api.legacyConfigs[kind];
 const all=Object.fromEntries(pvc.items.map((s,i)=>[i,s.answer]));
 if(api.quizPoints(pvc,all,kind)!==c.weights.tf)throw Error('TF full points '+kind);
 delete all[0];
 if(api.quizPoints(pvc,all,kind)!==c.weights.tf*.75)throw Error('TF partial points '+kind);
 if(api.quizConfig(kind).minutes!==c.minutes)throw Error('Legacy duration changed');
}
const c=api.configs.regular45;
if(c.minutes!==45||c.mc!==14||c.num!==6||c.tf!==0)throw Error('Wrong requested format');
for(let trial=0;trial<100;trial++){
  api.startTest('regular45');
  const s=api.state().quiz,chosen=s.ids.map(id=>data.questions.find(q=>q.id===id));
  if(s.ids.length!==20||s.end-s.start!==45*60000)throw Error('Duration/count');
  if(chosen.slice(0,14).some(q=>q.type!=='mc')||chosen.slice(14).some(q=>q.type!=='num'))throw Error('Wrong section order');
  const concepts=chosen.map(q=>q.concept||q.id);
  if(new Set(concepts).size!==concepts.length)throw Error('Duplicate concept');
  let full=0;
  for(const type of ['mc','tf','num']){
   if(chosen.filter(q=>q.type===type).length!==c[type])throw Error('Question count '+type);
  }
  for(const [topic,count] of Object.entries(c.mcTopics)){
   if(chosen.filter(q=>q.type==='mc'&&q.topic===topic).length!==count)throw Error('Topic coverage');
  }
  for(const group of c.numGroups){
   if(chosen.filter(q=>q.type==='num'&&q.examGroup===group).length!==1)throw Error('Missing numeric form');
  }
  for(const q of chosen){
   const answer=q.type==='tf'?Object.fromEntries(q.items.map((s,i)=>[i,s.answer])):q.answer;
   s.answers[q.id]=answer;
   full+=api.quizPoints(q,answer,'regular45');
   if(api.quizPoints(q,'','regular45')!==0)throw Error('Blank scored');
   const wrong=q.type==='mc'?(answer+1)%q.choices.length:String(Number(answer)+1);
   if(api.quizPoints(q,wrong,'regular45')!==0)throw Error('Wrong answer scored');
  }
  if(Math.abs(full-10)>1e-9)throw Error('Exam maximum');
  const restored=api.normalize(JSON.parse(JSON.stringify(api.state())));
  if(restored.quiz?.end!==s.end||restored.quiz?.ids.length!==20)throw Error('Resume changed exam');
  const wrongTime=JSON.parse(JSON.stringify(api.state()));
  wrongTime.quiz.end=wrongTime.quiz.start+15*60000;
  if(api.normalize(wrongTime).quiz)throw Error('Invalid new duration accepted');
  if(/class="solution"|data-action="solution"|class="lesson-back"/.test(api.exam()))throw Error('Answer leaked during exam');
}
const last=api.state().quiz;
delete last.answers[last.ids[19]];
api.finishQuiz();
if(last.score!==9.5)throw Error('19/20 should score 9.5');
api.finishQuiz();
if(api.state().history.filter(h=>h.id===last.id).length!==1)throw Error('Duplicate submission');
if(!api.exam().includes('class="solution"'))throw Error('Solutions missing after submission');
const old=JSON.parse(JSON.stringify(api.state()));
old.quiz={id:'legacy',kind:'class',title:'Kiểm tra 15 phút',start:1000,end:901000,ids:data.questions.filter(q=>q.type==='mc').slice(0,8).map(q=>q.id).concat([pvc.id],data.questions.filter(q=>q.type==='num').slice(0,2).map(q=>q.id)),answers:{},submitted:false};
if(api.normalize(old).quiz?.end!==901000||api.quizConfig('class').weights.num!==2)throw Error('Legacy exam migration');
api.startTest('regular45');
const expired=api.state().quiz;
for(const id of expired.ids)expired.answers[id]=data.questions.find(q=>q.id===id).answer;
expired.start=Date.now()-45*60000-1000;
expired.end=expired.start+45*60000;
sandbox.location.hash='#exam';
api.render();
if(!expired.submitted||expired.score!==10)throw Error('Expired 45-minute exam not auto-submitted');
api.render();
if(api.state().history.filter(h=>h.id===expired.id).length!==1)throw Error('Expired exam submitted twice');
for(const l of data.lessons){
 for(const p of l.parts)if(!sandbox.POLYMER_VISUALS.render(p.visual))throw Error('Lesson illustration');
 const html=api.learn(l.id);
 const clipCount=l.parts.reduce((n,p)=>n+p.clips.length,0);
 if(html.includes('<iframe'))throw Error('Video loaded before learner clicks '+l.id);
 if((html.match(/data-action="clip"/g)||[]).length!==clipCount)throw Error('Missing clip controls '+l.id);
 if((html.match(/class="checkpoint"/g)||[]).length!==4)throw Error('Missing lesson checkpoints '+l.id);
 for(const p of l.parts)for(const c of p.clips){
  const url=new URL(api.embedUrl(c.video,c.start,c.end));
  if(url.hostname!=='www.youtube-nocookie.com'||!url.pathname.endsWith('/'+c.video))throw Error('Wrong video');
  if(Number(url.searchParams.get('start'))!==c.start||Number(url.searchParams.get('end'))!==c.end)throw Error('Wrong absolute timestamps');
  if(!html.includes('watch?v='+c.video+'&t='+c.start+'s'))throw Error('Missing YouTube fallback');
 }
}
if(new URL(api.embedUrl(data.videos[0].id)).searchParams.has('end'))throw Error('Full video cut short');
data.guides=sandbox.POLYMER_GUIDES;
console.log(JSON.stringify(data));
"""
result = subprocess.run(["node", "-e", node, str(ROOT)], check=True, capture_output=True, text=True)
data = json.loads(result.stdout)
questions = {q["id"]: q for q in data["questions"]}
assert len(questions) == 84
assert Counter(q["source"] for q in questions.values()) == {"doc": 48, "extra": 36}
assert Counter(q["type"] for q in questions.values()) == {"mc": 43, "tf": 10, "num": 29, "write": 2}
assert len(data["lessons"]) == 8
durations = {
    v["id"]: sum(int(part) * 60 ** i for i, part in enumerate(reversed(v["duration"].split(":"))))
    for v in data["videos"]
}
clips = []
for lesson in data["lessons"]:
    guide = data["guides"][lesson["id"]]
    assert len(guide["goals"]) >= 3 and len(guide["terms"]) >= 3
    assert len(guide["parts"]) == len(lesson["parts"]) == 4
    for part in guide["parts"]:
        assert len(part["explain"]) >= 3 and len(part["worked"]["steps"]) >= 3
        assert part["worked"]["prompt"] and part["mistake"]
        check = part["checkpoint"]
        assert len(check["choices"]) >= 3 and 0 <= check["answer"] < len(check["choices"]) and check["why"]
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
    ref = q["lessonRef"]
    assert ref["lesson"] in data["guides"] and 0 <= ref["part"] < 4
    if q["type"] == "num":
        assert q["examGroup"] in {"classification", "degree", "repeatMass", "yield", "composition", "multistep"}

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
    "TX-N1": 28000 / (2 * 12 + 4),
    "TX-N2": 53000 / (3 * 12 + 3 + 14),
    "TX-N3": 6 * 12 + 11 + 14 + 16,
    "TX-N4": 62 + 166 - 2 * 18,
    "TX-N5": 40 * .8,
    "TX-N6": 60 / .75,
    "TX-N7": 230 * 54 / 92 * .5 * .6,
    "TX-N8": 74370 / 24.79 / 2 * 62.5 * .8 / 1000,
    "TX-N9": round(14 / 53 * 100, 1),
    "TX-N10": 3.2 * .375 * 1000,
    "TX-N11": 4,
    "TX-N12": 2,
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
print("PASS 48 câu tài liệu + 36 câu bổ sung, đủ lời giải, minh họa và liên kết đúng mục.")
print("PASS 19 cấu tạo/khối lượng mắt xích và 29 đáp án số được kiểm tra độc lập.")
print("PASS 8 bài, 32 mục đủ giải thích, ví dụ từng bước, lỗi hay nhầm và câu tự thử.")
print("PASS 41 đoạn video cho 32 mục, đúng ID/mốc đầu/mốc cuối, có liên kết dự phòng, chỉ tải khi bấm.")
print("PASS 100 lượt sinh đề: 45 phút, 14 MC + 6 số, đủ chủ đề và sáu dạng số; mỗi câu 0,5.")
print("PASS điểm 19/20 = 9,5; hết 45 phút tự nộp một lần; khôi phục bài, không lộ lời giải, giữ điểm cũ.")
print("PASS bộ nhớ đệm chứa đủ tệp cục bộ và không có script CDN.")
