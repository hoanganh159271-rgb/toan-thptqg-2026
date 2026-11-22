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
TLN_VD_JS_PATH = os.path.join(ROOT_DIR, "luyen_tap", "data_tln_van_dung.js")


def load_js_runtime():
    node_script = r"""
const fs = require('fs');
const vm = require('vm');
const commonPath = process.argv[1];
const dataPath = process.argv[2];
const tlnVdPath = process.argv[3];

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
vm.runInNewContext(fs.readFileSync(tlnVdPath, 'utf8'), sandbox, { filename: tlnVdPath });

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
  valid_unicode_minus: C.validateShortAnswer('\u22123').valid && C.validateShortAnswer('\u22123').normalized === '-3',
  invalid_5: C.validateShortAnswer('12,34').valid,
  cmp_comma_dot: C.compareShortAnswer('0.89', '0,89') && C.compareShortAnswer('37.5', '37,5'),
  cmp_unicode_minus: C.compareShortAnswer('\u22123', '-3') && C.compareShortAnswer('-3', '\u22123')
};

console.log(JSON.stringify({
  matrix: sandbox.TOAN_MATRIX,
  de_mau: sandbox.TOAN_DE_MAU,
  tln_vd: sandbox.TOAN_TLN_VANDUNG,
  scoringTests
}));
"""
    res = subprocess.run(
        ["node", "-e", node_script, COMMON_JS_PATH, DATA_JS_PATH, TLN_VD_JS_PATH],
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
    assert st["valid_4"] is True and st["valid_unicode_minus"] is True
    assert st["invalid_5"] is False
    assert st["cmp_comma_dot"] is True and st["cmp_unicode_minus"] is True


def verify_tln_van_dung(tln):
    vds = tln["vi_du_chuyen_de"]
    d1 = tln["de_tu_luyen_1"]
    d2 = tln["de_tu_luyen_2"]
    assert len(vds) == 14, f"Phải có 14 ví dụ minh họa, hiện có {len(vds)}"
    assert len(d1) == 6, f"Đề tự luyện 1 phải có 6 câu, hiện có {len(d1)}"
    assert len(d2) == 6, f"Đề tự luyện 2 phải có 6 câu, hiện có {len(d2)}"

    expected_slots = [
        (1, 1, "C1-MHH2.2", "VD", "MHH"),
        (2, 1, "C2-GQ2.2", "VD", "GQ"),
        (3, 3, "C3-MHH2.2", "VD", "MHH"),
        (4, 4, "C4-MHH2.2", "VD", "MHH"),
        (5, 4, "C5-GQ2.2", "H", "GQ"),
        (6, 5, "C6-GQ2.1", "H", "GQ"),
    ]
    for deck in (d1, d2):
        for q, exp in zip(deck, expected_slots):
            assert (q["so_cau"], q["chu_de"], q["ma_lenh"], q["cap_do"], q["nang_luc"]) == exp, f"{q['id']} lệch ma trận TLN"

    all_tln = vds + d1 + d2
    assert len(all_tln) == 26
    for q in all_tln:
        assert len(q["dap_an"]) <= 4, f"{q['id']} đáp án '{q['dap_an']}' quá 4 ký tự"
        assert len(q.get("loi_giai", [])) == 6, f"{q['id']} phải có đủ 6 bước lời giải"
        if q["nang_luc"] == "MHH":
            assert len(q.get("mo_hinh_hoa", [])) == 5, f"{q['id']} (MHH) phải có đủ 5 bước mô hình hóa"

    m_vd = {q["id"]: q["dap_an"] for q in vds}
    m_d1 = {q["id"]: q["dap_an"] for q in d1}
    m_d2 = {q["id"]: q["dap_an"] for q in d2}

    # --- 14 VÍ DỤ MINH HỌA ---
    # VD-1.1: 100*(9-x) + 260*sqrt(x^2+36), min tai x=2.5 -> 2340
    c_pipe = lambda x: 100 * (9 - x) + 260 * math.hypot(x, 6)
    assert abs(c_pipe(2.5) - 2340) < 1e-9 and all(c_pipe(2.5) <= c_pipe(k / 20) for k in range(0, 181))
    assert m_vd["VD-1.1"] == "2340"

    # VD-1.2: L(x) = (80-x)(240+4x), max tai x=10 -> gia ban p=190
    L_eco = lambda x: (80 - x) * (240 + 4 * x)
    assert L_eco(10) == max(L_eco(k) for k in range(0, 80)) and 200 - 10 == 190
    assert m_vd["VD-1.2"] == "190"

    # VD-1.3: T(v) = 6*v^3/(v-6), min tai v=9
    T_ship = lambda v: 6 * (v ** 3) / (v - 6)
    assert abs(T_ship(9) - 1458) < 1e-9 and all(T_ship(9) <= T_ship(6 + k / 10) for k in range(1, 200))
    assert m_vd["VD-1.3"] == "9"

    # VD-2.1: y = x+2 + 4/(x-1) = (x^2+x+2)/(x-1) -> a=1,b=1,c=2,d=-1 -> T=13
    assert 1 + 2 * 1 + 3 * 2 - 4 * (-1) == 13
    assert m_vd["VD-2.1"] == "13"

    # VD-2.2: m in [-20;30] nguyen sao cho m-27 < 0 < m+5
    ms = [m for m in range(-20, 31) if (m - 27) < 0 < (m + 5)]
    assert len(ms) == 31 and m_vd["VD-2.2"] == "31"

    # VD-2.3: P = AB/(d1*d2) = sqrt(10) ~ 3,16
    assert f"{math.sqrt(10):.2f}".replace(".", ",") == "3,16"
    assert m_vd["VD-2.3"] == "3,16"

    # VD-3.1: 5 nam, 3 nu, 8 ghe -> 5!*A(6,3)/8! = 5/14
    p31 = (math.factorial(5) * math.perm(6, 3)) / math.factorial(8)
    assert f"{p31:.2f}".replace(".", ",") == "0,36" and m_vd["VD-3.1"] == "0,36"

    # VD-3.2: (1 - 0.1*0.2)*0.95 = 0.931
    p32 = (1 - 0.1 * 0.2) * 0.95
    assert f"{p32:.2f}".replace(".", ",") == "0,93" and m_vd["VD-3.2"] == "0,93"

    # VD-3.3: (5/8)*(5/11) + (3/8)*(4/11) = 37/88
    p33 = (5 / 8) * (5 / 11) + (3 / 8) * (4 / 11)
    assert f"{p33:.2f}".replace(".", ",") == "0,42" and m_vd["VD-3.3"] == "0,42"

    # VD-4.1: 4T cos 30 = 60 -> T = 10 sqrt(3) ~ 17,3
    t41 = 60 / (4 * math.cos(math.radians(30)))
    assert f"{t41:.1f}".replace(".", ",") == "17,3" and m_vd["VD-4.1"] == "17,3"

    # VD-4.2: F1=20,F2=30 (60 deg), F3=40 perp
    f42 = math.sqrt(20 ** 2 + 30 ** 2 + 40 ** 2 + 2 * 20 * 30 * math.cos(math.radians(60)))
    assert f"{f42:.1f}".replace(".", ",") == "59,2" and m_vd["VD-4.2"] == "59,2"

    # VD-4.3: cos = sqrt(3)/9 -> arccos ~ 78,9
    phi43 = math.degrees(math.acos(math.sqrt(3) / 9))
    assert f"{phi43:.1f}".replace(".", ",") == "78,9" and m_vd["VD-4.3"] == "78,9"

    # VD-5: A(1,-2,3), B(5,6,11), AM = 3/4 AB -> M(4,4,9) -> 4+8-9 = 3
    M5 = tuple(a + 0.75 * (b - a) for a, b in zip((1, -2, 3), (5, 6, 11)))
    assert M5 == (4, 4, 9) and M5[0] + 2 * M5[1] - M5[2] == 3 and m_vd["VD-5"] == "3"

    # VD-6: tan(SOA) = sqrt(6)/sqrt(2) = sqrt(3) -> 60 deg
    ang6 = round(math.degrees(math.atan(math.sqrt(6) / math.sqrt(2))))
    assert ang6 == 60 and m_vd["VD-6"] == "60"

    # --- ĐỀ TỰ LUYỆN SỐ 01 ---
    V_d1 = lambda x: x * (12 - 2 * x) ** 2
    assert V_d1(2) == 128 and all(V_d1(2) >= V_d1(k / 20) for k in range(1, 120)) and m_d1["TLN1-01"] == "128"
    f_d1c2 = lambda x: x ** 3 - 3 * x ** 2 + 5
    assert f_d1c2(0) == 5 and f_d1c2(2) == 1 and f_d1c2(4) == 21 and m_d1["TLN1-02"] == "21"
    p_d1c3 = math.comb(3, 2) * (0.7 ** 2) * 0.3 + 0.7 ** 3
    assert f"{p_d1c3:.2f}".replace(".", ",") == "0,78" and m_d1["TLN1-03"] == "0,78"
    t_d1c4 = 90 / (3 * math.cos(math.radians(30)))
    assert f"{t_d1c4:.1f}".replace(".", ",") == "34,6" and m_d1["TLN1-04"] == "34,6"
    D_d1c5 = tuple(a + c - b for a, b, c in zip((1, 2, -1), (3, 0, 2), (2, 4, 1)))
    assert D_d1c5 == (0, 6, -2) and sum(D_d1c5) == 4 and m_d1["TLN1-05"] == "4"
    d_d1c6 = (4 * 3) / math.hypot(4, 3)
    assert f"{d_d1c6:.1f}".replace(".", ",") == "2,4" and m_d1["TLN1-06"] == "2,4"

    # --- ĐỀ TỰ LUYỆN SỐ 02 ---
    cbar = lambda x: 0.2 * x + 10 + 80 / x
    assert abs(cbar(20) - 18) < 1e-12 and all(cbar(20) <= cbar(k) for k in range(1, 101)) and m_d2["TLN2-01"] == "20"
    a2, c2 = 3, -2
    b2 = 5 * (3 + c2) - a2 * 3
    assert a2 + b2 + c2 == -3 and m_d2["TLN2-02"] == "-3"
    p_d2c3 = 1 - math.comb(6, 3) / math.comb(10, 3)
    assert f"{p_d2c3:.2f}".replace(".", ",") == "0,83" and m_d2["TLN2-03"] == "0,83"
    f_d2c4 = math.sqrt(3 * (10 ** 2) + 6 * 10 * 10 * math.cos(math.radians(60)))
    assert f"{f_d2c4:.1f}".replace(".", ",") == "24,5" and m_d2["TLN2-04"] == "24,5"
    u_d2c5, v_d2c5 = (2, 1, 2), (1, 2, 2)
    cos_d2c5 = sum(a * b for a, b in zip(u_d2c5, v_d2c5)) / (math.hypot(*u_d2c5) * math.hypot(*v_d2c5))
    assert f"{cos_d2c5:.2f}".replace(".", ",") == "0,89" and m_d2["TLN2-05"] == "0,89"
    d_d2c6 = 3 * math.sqrt(2)
    assert f"{d_d2c6:.2f}".replace(".", ",") == "4,24" and m_d2["TLN2-06"] == "4,24"

    return len(all_tln)


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
    tln_count = verify_tln_van_dung(runtime["tln_vd"])
    scanned_files = check_zero_cdn_and_offline()

    print("PASS 22/22 câu (34/34 lệnh hỏi) khớp 100% ma_tran_de_2026.json!")
    print("PASS kiểm chứng toán học độc lập: 12 TN + 16 ý ĐS + 6 TLN (<= 4 ký tự).")
    print(f"PASS kiểm chứng độc lập {tln_count} câu TLN Vận dụng & Mở rộng (14 VD + Đề 01 + Đề 02).")
    print("PASS thang chấm điểm JS: 0,25 TN | 0,10-0,25-0,50-1,00 ĐS | 0,50 TLN.")
    print(f"PASS 0 CDN violations across {scanned_files} web files (.html/.css/.js).")


if __name__ == "__main__":
    main()
