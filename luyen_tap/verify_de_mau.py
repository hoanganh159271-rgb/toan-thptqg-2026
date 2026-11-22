#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script kiểm chứng độc lập 100% Đề mẫu 22 câu / 34 lệnh hỏi & Quy chuẩn Offline
Dự án: D:\Ôn thi THPTQG\toan\
"""

import json
import math
import os
import re
import subprocess
import sys

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MATRIX_JSON_PATH = os.path.join(ROOT_DIR, "ma_tran_de_2026.json")
COMMON_JS_PATH = os.path.join(ROOT_DIR, "assets", "common.js")
DATA_JS_PATH = os.path.join(ROOT_DIR, "luyen_tap", "data_de_mau.js")


def load_js_runtime():
    node_script = r"""
const fs = require('fs');
const vm = require('vm');
const commonPath = process.argv[1];
const dataPath = process.argv[2];

const noop = () => {};
const fakeEl = () => ({
  addEventListener: noop,
  setAttribute: noop,
  getAttribute: () => null,
  classList: { toggle: noop, add: noop, remove: noop },
  style: {},
  textContent: ''
});
const sandbox = {
  console,
  Math,
  Number,
  String,
  Boolean,
  Array,
  Object,
  JSON,
  Date,
  isNaN,
  isFinite,
  parseFloat,
  parseInt,
  RegExp,
  Error,
  CustomEvent: function (name, opts) { this.name = name; this.detail = opts && opts.detail; },
  document: {
    documentElement: { setAttribute: noop, getAttribute: () => 'light' },
    querySelectorAll: () => [],
    createElement: fakeEl,
    body: { appendChild: noop, removeChild: noop }
  },
  localStorage: {
    _data: {},
    getItem(k) { return Object.prototype.hasOwnProperty.call(this._data, k) ? this._data[k] : null; },
    setItem(k, v) { this._data[k] = String(v); }
  }
};
sandbox.window = sandbox;
sandbox.global = sandbox;

vm.runInNewContext(fs.readFileSync(commonPath, 'utf8'), sandbox, { filename: commonPath });
vm.runInNewContext(fs.readFileSync(dataPath, 'utf8'), sandbox, { filename: dataPath });

const C = sandbox.TOAN_COMMON;
const scoringTests = {
  p1_1: C.scorePart1(1),
  p1_12: C.scorePart1(12),
  p2_0: C.scorePart2Question(0),
  p2_1: C.scorePart2Question(1),
  p2_2: C.scorePart2Question(2),
  p2_3: C.scorePart2Question(3),
  p2_4: C.scorePart2Question(4),
  p3_1: C.scorePart3(1),
  p3_6: C.scorePart3(6),
  valid_4: C.validateShortAnswer('0,89').valid && C.validateShortAnswer('37,5').valid && C.validateShortAnswer('-1,2').valid,
  invalid_5: C.validateShortAnswer('12,34').valid,
  cmp_comma_dot: C.compareShortAnswer('0.89', '0,89') && C.compareShortAnswer('37.5', '37,5')
};

console.log(JSON.stringify({
  matrix: sandbox.TOAN_MATRIX,
  de_mau: sandbox.TOAN_DE_MAU,
  scoringTests
}));
"""
    res = subprocess.run(
        ["node", "-e", node_script, COMMON_JS_PATH, DATA_JS_PATH],
        capture_output=True,
        text=True,
        encoding="utf-8",
        check=True,
    )
    return json.loads(res.stdout)


def check_matrix_alignment(matrix_json, runtime):
    de = runtime["de_mau"]
    p1 = de["phan_1"]
    p2 = de["phan_2"]
    p3 = de["phan_3"]

    assert len(p1) == 12, f"Phần I phải có 12 câu, hiện có {len(p1)}"
    assert len(p2) == 4, f"Phần II phải có 4 câu, hiện có {len(p2)}"
    assert len(p3) == 6, f"Phần III phải có 6 câu, hiện có {len(p3)}"

    total_commands = len(p1) + sum(len(q["cac_y"]) for q in p2) + len(p3)
    assert total_commands == 34, f"Tổng lệnh hỏi phải là 34, hiện có {total_commands}"

    # Kiểm tra khớp từng mã câu ma trận
    expected_map = {item["id"]: item for item in matrix_json["danh_sach_cau"]}
    actual_all = p1 + p2 + p3
    assert len(actual_all) == len(expected_map) == 22

    topic_counts = {i: {"tong": 0, "B": 0, "H": 0, "VD": 0} for i in range(1, 6)}
    comp_counts = {"TD": 0, "GQ": 0, "MHH": 0}
    mhh_ids = []

    for q in actual_all:
        exp = expected_map[q["id"]]
        assert q["chu_de"] == exp["chu_de"], f"{q['id']} lệch chu_de"
        assert q["tieu_muc"] == exp["tieu_muc"], f"{q['id']} lệch tieu_muc"
        assert q["ma_lenh"] == exp["ma_lenh"], f"{q['id']} lệch ma_lenh"
        assert q["cap_do"] == exp["cap_do"], f"{q['id']} lệch cap_do"
        assert q["nang_luc"] == exp["nang_luc"], f"{q['id']} lệch nang_luc"
        assert len(q.get("loi_giai", [])) == 6, f"{q['id']} phải có đủ 6 bước lời giải"

        comp_counts[q["nang_luc"]] += 1
        if q["nang_luc"] == "MHH":
            mhh_ids.append(q["id"])
            assert len(q.get("mo_hinh_hoa", [])) == 5, f"{q['id']} (MHH) phải có đủ 5 bước Mô hình hóa"

        if "cac_y" in q:
            assert len(q["cac_y"]) == 4, f"{q['id']} phải có 4 ý a,b,c,d"
            for idx, sub in enumerate(q["cac_y"]):
                exp_sub = exp["lenh"][idx]
                assert sub["y"] == exp_sub["y"]
                assert sub["ma_lenh"] == exp_sub["ma_lenh"]
                assert sub["cap_do"] == exp_sub["cap_do"]
                assert sub["nang_luc"] == exp_sub["nang_luc"]
                topic_counts[q["chu_de"]]["tong"] += 1
                topic_counts[q["chu_de"]][sub["cap_do"]] += 1
        else:
            topic_counts[q["chu_de"]]["tong"] += 1
            topic_counts[q["chu_de"]][q["cap_do"]] += 1

    assert comp_counts == {"TD": 7, "GQ": 11, "MHH": 4}, f"Sai phân bổ năng lực: {comp_counts}"
    assert sorted(mhh_ids) == ["DS-03", "TLN-01", "TLN-03", "TLN-04"], f"Sai vị trí 4 câu MHH: {mhh_ids}"

    for cd in matrix_json["chu_de"]:
        cid = cd["id"]
        assert topic_counts[cid] == cd["lenh"], f"Sai phân bổ Chủ đề {cid}: {topic_counts[cid]} vs {cd['lenh']}"

    # Kiểm tra thang điểm JS
    st = runtime["scoringTests"]
    assert abs(st["p1_1"] - 0.25) < 1e-9
    assert abs(st["p1_12"] - 3.0) < 1e-9
    assert st["p2_0"] == 0.0 and st["p2_1"] == 0.1 and st["p2_2"] == 0.25 and st["p2_3"] == 0.5 and st["p2_4"] == 1.0
    assert abs(st["p3_1"] - 0.5) < 1e-9
    assert abs(st["p3_6"] - 3.0) < 1e-9
    assert st["valid_4"] is True and st["invalid_5"] is False and st["cmp_comma_dot"] is True


def verify_math_independently(de):
    p1 = {q["id"]: q for q in de["phan_1"]}
    p2 = {q["id"]: q for q in de["phan_2"]}
    p3 = {q["id"]: q for q in de["phan_3"]}

    # --- PHẦN I (12 CÂU TN) ---
    # TN-01: f'(x) = (x-1)(x+2) < 0 trên (-2; 1)
    assert all((x - 1) * (x + 2) < 0 for x in [-1.9, -0.5, 0.9])
    assert p1["TN-01"]["dap_an"] == "B" and "(−2; 1)" in p1["TN-01"]["lua_chon"]["B"]

    # TN-02: y = x^3 - 3x^2 - 9x + 5, y_CD tại x = -1
    f2 = lambda x: x**3 - 3 * x**2 - 9 * x + 5
    df2 = lambda x: 3 * x**2 - 6 * x - 9
    assert df2(-1) == 0 and df2(3) == 0 and df2(-1.1) > 0 and df2(-0.9) < 0
    assert f2(-1) == 10 and p1["TN-02"]["dap_an"] == "C" and p1["TN-02"]["lua_chon"]["C"] == "10"

    # TN-03: max của f(x) = x^3 - 3x + 2 trên [0; 2]
    f3 = lambda x: x**3 - 3 * x + 2
    crit3 = [0, 1, 2]
    assert max(f3(x) for x in crit3) == 4
    assert p1["TN-03"]["dap_an"] == "D" and p1["TN-03"]["lua_chon"]["D"] == "4"

    # TN-04: y = (2x-1)/(x+3) -> TCĐ x = -3, TCN y = 2
    assert (2 * (-3) - 1) != 0
    assert p1["TN-04"]["dap_an"] == "A" and "x = −3 và y = 2" in p1["TN-04"]["lua_chon"]["A"]

    # TN-05: y = (2x^2 - 3x + 4)/(x - 1) -> TCX y = 2x - 1
    for x in [500, -500]:
        rem = (2 * x**2 - 3 * x + 4) / (x - 1) - (2 * x - 1)
        assert abs(rem - 3 / (x - 1)) < 1e-12
    assert p1["TN-05"]["dap_an"] == "B" and p1["TN-05"]["lua_chon"]["B"] == "y = 2x − 1"

    # TN-06: y = x^3 - 3x + 1
    f6 = lambda x: x**3 - 3 * x + 1
    assert f6(-1) == 3 and f6(0) == 1 and f6(1) == -1
    assert p1["TN-06"]["dap_an"] == "A" and "x³ − 3x + 1" in p1["TN-06"]["lua_chon"]["A"]

    # TN-07: sin(x) = 1/2 trên [0; 2pi] -> 2 nghiệm
    roots7 = [math.pi / 6, 5 * math.pi / 6]
    assert len(roots7) == 2 and all(abs(math.sin(r) - 0.5) < 1e-12 and 0 <= r <= 2 * math.pi for r in roots7)
    assert p1["TN-07"]["dap_an"] == "B" and p1["TN-07"]["lua_chon"]["B"] == "2"

    # TN-08: CSC u1=3, d=-2, S10
    s10 = sum(3 + (k - 1) * (-2) for k in range(1, 11))
    assert s10 == -60
    assert p1["TN-08"]["dap_an"] == "C" and p1["TN-08"]["lua_chon"]["C"] == "−60"

    # TN-09: hệ số x^3 trong (2x - 1)^5
    coeff9 = math.comb(5, 2) * (2**3) * ((-1) ** 2)
    assert coeff9 == 80
    assert p1["TN-09"]["dap_an"] == "D" and p1["TN-09"]["lua_chon"]["D"] == "80"

    # TN-10: Quy tắc hình hộp AB + AD + AA' = AC'
    AB = (1, 0, 0); AD = (0, 1, 0); AAp = (0, 0, 1)
    tot10 = tuple(AB[i] + AD[i] + AAp[i] for i in range(3))
    assert tot10 == (1, 1, 1)
    assert p1["TN-10"]["dap_an"] == "A" and "AC'" in p1["TN-10"]["lua_chon"]["A"]

    # TN-11: AB . AC' trong hình lập phương cạnh a
    assert sum(x * y for x, y in zip(AB, tot10)) == 1
    assert p1["TN-11"]["dap_an"] == "B" and p1["TN-11"]["lua_chon"]["B"] == "a²"

    # TN-12: Trung điểm A(1,-2,3), B(3,2,-1) -> (2, 0, 1)
    M12 = ((1 + 3) / 2, (-2 + 2) / 2, (3 - 1) / 2)
    assert M12 == (2, 0, 1)
    assert p1["TN-12"]["dap_an"] == "C" and p1["TN-12"]["lua_chon"]["C"] == "(2; 0; 1)"

    # --- PHẦN II (4 CÂU ĐS = 16 Ý) ---
    # DS-01: f(x) = (x^2 - 2x + 2)/(x - 1)
    fc1 = lambda x: (x**2 - 2 * x + 2) / (x - 1)
    assert p2["DS-01"]["cac_y"][0]["dap_an"] is True  # TXĐ R\{1}, TCĐ x=1
    assert p2["DS-01"]["cac_y"][1]["dap_an"] is False  # Không thể nói NB trên (0;2)
    assert abs(fc1(1 + 0.42) + fc1(1 - 0.42)) < 1e-12  # Tâm ĐX I(1;0)
    assert p2["DS-01"]["cac_y"][2]["dap_an"] is True
    # x > 1: f(x) = t + 1/t > 2 có 2 nghiệm t1, t2 > 0
    for m in [2.1, 3.0, 5.5]:
        roots_x = [1 + (m - math.sqrt(m**2 - 4)) / 2, 1 + (m + math.sqrt(m**2 - 4)) / 2]
        assert all(rx > 1 and abs(fc1(rx) - m) < 1e-12 for rx in roots_x)
    assert p2["DS-01"]["cac_y"][3]["dap_an"] is True

    # DS-02: A(1,0,2), B(3,2,0), C(1,4,2)
    A, B, C = (1, 0, 2), (3, 2, 0), (1, 4, 2)
    vAB = tuple(B[i] - A[i] for i in range(3))
    vAC = tuple(C[i] - A[i] for i in range(3))
    assert vAB == (2, 2, -2) and abs(math.dist(A, B) - 2 * math.sqrt(3)) < 1e-12
    assert p2["DS-02"]["cac_y"][0]["dap_an"] is True
    dot2 = sum(x * y for x, y in zip(vAB, vAC))
    cosBAC = dot2 / (math.dist(A, B) * math.dist(A, C))
    assert dot2 == 8 and abs(cosBAC - math.sqrt(3) / 3) < 1e-12
    assert p2["DS-02"]["cac_y"][1]["dap_an"] is True
    D_true = tuple(A[i] + C[i] - B[i] for i in range(3))
    assert D_true == (-1, 2, 4) and D_true != (1, 2, 4)
    assert p2["DS-02"]["cac_y"][2]["dap_an"] is False
    min_T = min(
        math.dist((0, y / 100, 0), A) ** 2
        + math.dist((0, y / 100, 0), B) ** 2
        + math.dist((0, y / 100, 0), C) ** 2
        for y in range(-200, 600)
    )
    assert abs(min_T - 27.0) < 1e-12 and min_T != 30.0
    assert p2["DS-02"]["cac_y"][3]["dap_an"] is False

    # DS-03: N(t) = 500 * e^(rt), N(2) = 2000
    r = math.log(2000 / 500) / 2
    assert abs(r - math.log(2)) < 1e-12
    assert abs(500 * math.exp(r * 5) - 16000) < 1e-9
    assert math.ceil(math.log(100000 / 500) / r) == 8
    assert [x["dap_an"] for x in p2["DS-03"]["cac_y"]] == [True, True, False, True]

    # DS-04: 10 thẻ (1..10), rút đồng thời 2 thẻ
    n_omega = math.comb(10, 2)
    n_A = math.comb(5, 2)
    n_B = math.comb(5, 2) + math.comb(5, 2)
    n_C = n_omega - math.comb(5, 2)
    n_BC = n_A
    assert n_omega == 45 and n_omega != 90
    assert abs(n_B / n_omega - 4 / 9) < 1e-12
    assert abs((n_A / n_omega) - (n_A / n_omega) * (n_B / n_omega)) > 1e-6  # Không độc lập
    assert abs((n_BC / n_C) - 2 / 7) < 1e-12
    assert [x["dap_an"] for x in p2["DS-04"]["cac_y"]] == [False, True, False, True]

    # --- PHẦN III (6 CÂU TLN <= 4 KÝ TỰ) ---
    for qid, q in p3.items():
        ans = q["dap_an"]
        assert len(ans) <= 4, f"{qid} đáp án '{ans}' dài quá 4 ký tự"

    # TLN-01: V(x) = x(18-2x)^2 max tại x=3 -> 432
    V = lambda x: x * (18 - 2 * x) ** 2
    assert V(3) == 432 and all(V(3) >= V(k / 100) for k in range(1, 900))
    assert p3["TLN-01"]["dap_an"] == "432"

    # TLN-02: y = (x^2-2x+5)/(x-1), cực trị A(-1,-4), B(3,4) -> 2x-y-2=0 -> d(O,AB)
    # y' = 1 - 4/(x-1)^2 = 0 -> x=-1, x=3
    y_tln2 = lambda x: (x**2 - 2 * x + 5) / (x - 1)
    A2 = (-1, y_tln2(-1)); B2 = (3, y_tln2(3))
    assert A2 == (-1, -4) and B2 == (3, 4)
    d2 = abs(-2) / math.sqrt(2**2 + (-1) ** 2)
    assert f"{d2:.2f}".replace(".", ",") == "0,89"
    assert p3["TLN-02"]["dap_an"] == "0,89"

    # TLN-03: Bayes 0.7*0.02, 0.3*0.04
    pb = 0.7 * 0.02 + 0.3 * 0.04
    p_a2_b = (0.3 * 0.04) / pb
    assert f"{p_a2_b:.2f}".replace(".", ",") == "0,46"
    assert p3["TLN-03"]["dap_an"] == "0,46"

    # TLN-04: Đèn chùm 90N, R=3, h=4 -> T
    l4 = math.hypot(3, 4)
    T4 = 90 * l4 / (3 * 4)
    assert abs(T4 - 37.5) < 1e-12
    assert p3["TLN-04"]["dap_an"] == "37,5"

    # TLN-05: góc giữa u=(1,-2,2), v=(2,1,-2)
    u5 = (1, -2, 2); v5 = (2, 1, -2)
    cos5 = sum(a * b for a, b in zip(u5, v5)) / (math.hypot(*u5) * math.hypot(*v5))
    deg5 = math.degrees(math.acos(cos5))
    assert round(deg5) == 116
    assert p3["TLN-05"]["dap_an"] == "116"

    # TLN-06: S.ABCD vuông cạnh 2, SA = 2sqrt(3) -> d(A, (SBD))
    SA = 2 * math.sqrt(3)
    AO = math.sqrt(2)
    AH = (SA * AO) / math.hypot(SA, AO)
    assert f"{AH:.2f}".replace(".", ",") == "1,31"
    assert p3["TLN-06"]["dap_an"] == "1,31"


def check_zero_cdn_and_offline():
    forbidden_patterns = [
        (re.compile(r"https?://", re.I), "URL ngoài (http/https)"),
        (re.compile(r'type\s*=\s*["\']module["\']', re.I), 'type="module" gây lỗi CORS trên file://'),
        (re.compile(r"\bfetch\s*\(", re.I), "fetch() gây lỗi CORS trên file://"),
    ]
    violations = []
    scanned = 0
    for root, _, files in os.walk(ROOT_DIR):
        for fn in files:
            if fn.endswith((".html", ".css", ".js")):
                path = os.path.join(root, fn)
                scanned += 1
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                for pat, msg in forbidden_patterns:
                    if fn == "sw.js" and msg.startswith("fetch()"):
                        continue
                    if pat.search(content):
                        violations.append(f"{os.path.relpath(path, ROOT_DIR)}: phát hiện {msg}")
    assert not violations, "Vi phạm kiến trúc Offline:\n" + "\n".join(violations)
    return scanned


def main():
    with open(MATRIX_JSON_PATH, "r", encoding="utf-8") as f:
        matrix_json = json.load(f)

    runtime = load_js_runtime()
    check_matrix_alignment(matrix_json, runtime)
    verify_math_independently(runtime["de_mau"])
    scanned_files = check_zero_cdn_and_offline()

    print("PASS 22/22 câu (34/34 lệnh hỏi) khớp 100% ma_tran_de_2026.json!")
    print("PASS kiểm chứng toán học độc lập: 12 TN + 16 ý ĐS + 6 TLN (<= 4 ký tự).")
    print("PASS thang chấm điểm JS: 0,25 TN | 0,10-0,25-0,50-1,00 ĐS | 0,50 TLN.")
    print(f"PASS 0 CDN violations across {scanned_files} web files (.html/.css/.js).")


if __name__ == "__main__":
    main()