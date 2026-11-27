/* Đề thi thử TN THPT môn Toán 2026 — Khớp 100% Ma trận 22 câu / 34 lệnh hỏi */
(function (global) {
  'use strict';

  var svgC6 = (function () {
    var pts = [];
    for (var i = -21; i <= 21; i++) {
      var x = i / 10;
      var y = x * x * x - 3 * x + 1;
      var px = (130 + x * 36).toFixed(1);
      var py = (105 - y * 18).toFixed(1);
      if (y >= -4.5 && y <= 4.8) pts.push(px + ',' + py);
    }
    return '<svg width="260" height="210" viewBox="0 0 260 210" role="img" aria-label="Đồ thị hàm bậc ba y = x^3 - 3x + 1">' +
      '<line x1="20" y1="105" x2="245" y2="105" stroke="var(--ink-muted)" stroke-width="1.3"/>' +
      '<line x1="130" y1="195" x2="130" y2="12" stroke="var(--ink-muted)" stroke-width="1.3"/>' +
      '<line x1="94" y1="51" x2="130" y2="51" stroke="var(--border-strong)" stroke-dasharray="4 3"/>' +
      '<line x1="94" y1="51" x2="94" y2="105" stroke="var(--border-strong)" stroke-dasharray="4 3"/>' +
      '<line x1="166" y1="123" x2="130" y2="123" stroke="var(--border-strong)" stroke-dasharray="4 3"/>' +
      '<line x1="166" y1="123" x2="166" y2="105" stroke="var(--border-strong)" stroke-dasharray="4 3"/>' +
      '<polyline fill="none" stroke="var(--accent)" stroke-width="2.4" points="' + pts.join(' ') + '"/>' +
      '<circle cx="94" cy="51" r="3.5" fill="var(--err)"/>' +
      '<circle cx="130" cy="87" r="3.5" fill="var(--ok)"/>' +
      '<circle cx="166" cy="123" r="3.5" fill="var(--err)"/>' +
      '<text x="236" y="100" fill="var(--ink)" font-size="12">x</text>' +
      '<text x="136" y="20" fill="var(--ink)" font-size="12">y</text>' +
      '<text x="118" y="118" fill="var(--ink-muted)" font-size="11">O</text>' +
      '<text x="86" y="118" fill="var(--ink)" font-size="11">-1</text>' +
      '<text x="163" y="118" fill="var(--ink)" font-size="11">1</text>' +
      '<text x="135" y="54" fill="var(--ink)" font-size="11">3</text>' +
      '<text x="135" y="90" fill="var(--ink)" font-size="11">1</text>' +
      '<text x="112" y="128" fill="var(--ink)" font-size="11">-1</text>' +
      '</svg>';
  })();

  function frac(num, den) {
    return '<span class="mfrac"><span class="mnum">' + num + '</span><span class="mden">' + den + '</span></span>';
  }
  function vec(txt) {
    return '<span class="mvec">' + txt + '</span>';
  }
  function sqrt(txt) {
    return '<span class="msqrt"><span class="mrad">' + txt + '</span></span>';
  }

  var DATA = {
    meta: {
      ten_de: 'Đề thi thử chuẩn Ma trận THPTQG 2026 — Số 01',
      thoi_gian_phut: 90,
      tong_cau: 22,
      tong_lenh: 34
    },
    phan_1: [
      {
        id: 'TN-01', so_cau: 1, chu_de: 1, tieu_muc: '1.1', ma_lenh: 'C1-TD1.2', cap_do: 'B', nang_luc: 'TD',
        de_bai: 'Cho hàm số <span class="m">y = f(x)</span> có đạo hàm <span class="m">f\'(x) = (x − 1)(x + 2)</span> với mọi <span class="m">x ∈ ℝ</span>. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
        lua_chon: { A: '(−∞; −2)', B: '(−2; 1)', C: '(1; +∞)', D: '(−1; 2)' },
        dap_an: 'B',
        loi_giai: [
          'Dữ kiện: Đạo hàm f\'(x) = (x − 1)(x + 2) xác định trên ℝ.',
          'Yêu cầu: Tìm khoảng nghịch biến của hàm số f(x).',
          'Điều kiện: f(x) xác định và có đạo hàm trên ℝ nên không có điểm gián đoạn.',
          'Ý tưởng: Hàm số nghịch biến trên khoảng K khi f\'(x) < 0 với mọi x ∈ K.',
          'Biến đổi: f\'(x) = 0 ⇔ x = −2 hoặc x = 1. Bảng xét dấu tam thức bậc hai hệ số a = 1 > 0 cho f\'(x) < 0 trên (−2; 1).',
          'Kiểm chứng: Thử x = 0 ∈ (−2; 1) ⇒ f\'(0) = (−1)(2) = −2 < 0 (thỏa mãn). Chọn B.'
        ]
      },
      {
        id: 'TN-02', so_cau: 2, chu_de: 1, tieu_muc: '1.1', ma_lenh: 'C2-TD2.1', cap_do: 'H', nang_luc: 'TD',
        de_bai: 'Cho hàm số <span class="m">y = x³ − 3x² − 9x + 5</span>. Giá trị cực đại của hàm số đã cho bằng bao nhiêu?',
        lua_chon: { A: '−1', B: '−22', C: '10', D: '3' },
        dap_an: 'C',
        loi_giai: [
          'Dữ kiện: Hàm đa thức bậc ba y = x³ − 3x² − 9x + 5.',
          'Yêu cầu: Tính giá trị cực đại y_CĐ (chú ý không nhầm sang x_CĐ).',
          'Điều kiện: Tập xác định D = ℝ.',
          'Ý tưởng: Giải y\' = 0, lập bảng biến thiên xác định điểm cực đại x_CĐ rồi thay vào y.',
          'Biến đổi: y\' = 3x² − 6x − 9 = 3(x + 1)(x − 3) = 0 ⇔ x = −1 hoặc x = 3. Vì hệ số a = 1 > 0 nên y\' đổi dấu từ + sang − qua x = −1 ⇒ x_CĐ = −1. Suy ra y_CĐ = (−1)³ − 3(−1)² − 9(−1) + 5 = −1 − 3 + 9 + 5 = 10.',
          'Kiểm chứng: y(3) = 27 − 27 − 27 + 5 = −22 (giá trị cực tiểu). Chọn C.'
        ]
      },
      {
        id: 'TN-03', so_cau: 3, chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C3-TD1.2', cap_do: 'B', nang_luc: 'TD',
        de_bai: 'Giá trị lớn nhất của hàm số <span class="m">f(x) = x³ − 3x + 2</span> trên đoạn <span class="m">[0; 2]</span> bằng bao nhiêu?',
        lua_chon: { A: '0', B: '2', C: '1', D: '4' },
        dap_an: 'D',
        loi_giai: [
          'Dữ kiện: Hàm số f(x) = x³ − 3x + 2 xét trên đoạn [0; 2].',
          'Yêu cầu: Tìm max f(x) trên [0; 2].',
          'Điều kiện: f(x) liên tục trên đoạn [0; 2].',
          'Ý tưởng: Tìm nghiệm của f\'(x) = 0 thuộc (0; 2) rồi so sánh các giá trị tại đó và hai đầu mút.',
          'Biến đổi: f\'(x) = 3x² − 3 = 0 ⇔ x = ±1. Chỉ có x = 1 ∈ (0; 2). Tính f(0) = 2, f(1) = 0, f(2) = 8 − 6 + 2 = 4.',
          'Kiểm chứng: Trong {2, 0, 4}, giá trị lớn nhất là 4 tại x = 2. Chọn D.'
        ]
      },
      {
        id: 'TN-04', so_cau: 4, chu_de: 1, tieu_muc: '1.3', ma_lenh: 'C4-GQ1.2', cap_do: 'B', nang_luc: 'GQ',
        de_bai: 'Đường tiệm cận đứng và đường tiệm cận ngang của đồ thị hàm số <span class="m">y = ' + frac('2x − 1', 'x + 3') + '</span> lần lượt là:',
        lua_chon: { A: 'x = −3 và y = 2', B: 'x = 3 và y = 2', C: 'x = −3 và y = −1/3', D: 'x = 2 và y = −3' },
        dap_an: 'A',
        loi_giai: [
          'Dữ kiện: Hàm phân thức bậc nhất/bậc nhất y = (2x − 1)/(x + 3).',
          'Yêu cầu: Xác định đúng thứ tự TCĐ rồi TCN.',
          'Điều kiện: TXĐ D = ℝ\\{−3}, tử thức tại x = −3 là −7 ≠ 0.',
          'Ý tưởng: Với y = (ax + b)/(cx + d) không suy biến, TCĐ x = −d/c và TCN y = a/c.',
          'Biến đổi: Mẫu x + 3 = 0 ⇔ x = −3 (TCĐ); lim(x→±∞) (2x − 1)/(x + 3) = 2 ⇒ y = 2 (TCN).',
          'Kiểm chứng: Đúng thứ tự TCĐ x = −3, TCN y = 2. Chọn A.'
        ]
      },
      {
        id: 'TN-05', so_cau: 5, chu_de: 1, tieu_muc: '1.3', ma_lenh: 'C5-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Đường tiệm cận xiên của đồ thị hàm số <span class="m">y = ' + frac('2x² − 3x + 4', 'x − 1') + '</span> có phương trình là:',
        lua_chon: { A: 'y = 2x + 1', B: 'y = 2x − 1', C: 'y = 2x − 3', D: 'y = x − 1' },
        dap_an: 'B',
        loi_giai: [
          'Dữ kiện: Hàm phân thức bậc hai/bậc nhất y = (2x² − 3x + 4)/(x − 1).',
          'Yêu cầu: Tìm phương trình tiệm cận xiên.',
          'Điều kiện: TXĐ D = ℝ\\{1}.',
          'Ý tưởng: Chia đa thức tử cho mẫu thức để tách thành phần đa thức bậc nhất cộng phần dư phân thức.',
          'Biến đổi: 2x² − 3x + 4 = (2x − 1)(x − 1) + 3 ⇒ y = 2x − 1 + 3/(x − 1). Khi x → ±∞ thì 3/(x − 1) → 0.',
          'Kiểm chứng: Thử x = 100 ⇒ y ≈ 199,03 và 2(100) − 1 = 199. Vậy TCX là y = 2x − 1. Chọn B.'
        ]
      },
      {
        id: 'TN-06', so_cau: 6, chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C6-GQ1.4', cap_do: 'B', nang_luc: 'GQ',
        de_bai: 'Đường cong trong hình vẽ bên dưới là đồ thị của hàm số nào trong bốn hàm số được liệt kê?',
        hinh_svg: svgC6,
        lua_chon: { A: 'y = x³ − 3x + 1', B: 'y = −x³ + 3x + 1', C: 'y = x³ + 3x + 1', D: 'y = x³ − 3x − 1' },
        dap_an: 'A',
        loi_giai: [
          'Dữ kiện: Đồ thị đi lên khi x → +∞, cắt Oy tại (0; 1), đạt cực đại tại (−1; 3) và cực tiểu tại (1; −1).',
          'Yêu cầu: Nhận diện đúng công thức hàm số bậc ba.',
          'Điều kiện: Đồ thị đa thức bậc ba xác định trên ℝ.',
          'Ý tưởng: Dựa vào dấu hệ số a, giao điểm trục Oy và tọa độ hai điểm cực trị.',
          'Biến đổi: Nhánh phải đi lên ⇒ a > 0 (loại B). Giao Oy tại (0; 1) ⇒ hệ số tự do d = 1 (loại D). Có 2 cực trị x = ±1 ⇒ loại C (vì y\' = 3x² + 3 > 0 vô nghiệm).',
          'Kiểm chứng: Với y = x³ − 3x + 1, ta có y(−1) = 3, y(0) = 1, y(1) = −1 khớp hoàn toàn hình vẽ. Chọn A.'
        ]
      },
      {
        id: 'TN-07', so_cau: 7, chu_de: 2, tieu_muc: '2.1', ma_lenh: 'C7-TD1.2', cap_do: 'B', nang_luc: 'TD',
        de_bai: 'Số nghiệm của phương trình <span class="m">sin x = ' + frac('1', '2') + '</span> trên đoạn <span class="m">[0; 2π]</span> là:',
        lua_chon: { A: '1', B: '2', C: '3', D: '4' },
        dap_an: 'B',
        loi_giai: [
          'Dữ kiện: Phương trình sin x = 1/2 xét trên đoạn [0; 2π].',
          'Yêu cầu: Đếm số nghiệm phân biệt thuộc [0; 2π].',
          'Điều kiện: |1/2| ≤ 1 nên phương trình có nghiệm, x tính theo radian.',
          'Ý tưởng: Viết 2 họ nghiệm cơ bản của sin x = sin(π/6) rồi chặn trên [0; 2π].',
          'Biến đổi: x = π/6 + k2π (k=0 ⇒ x = π/6) hoặc x = 5π/6 + k2π (k=0 ⇒ x = 5π/6). Với k khác 0 đều vượt ngoài [0; 2π].',
          'Kiểm chứng: Trên vòng tròn lượng giác 1 vòng [0; 2π], đường thẳng y = 1/2 cắt tại 2 điểm ở góc phần tư I và II. Chọn B.'
        ]
      },
      {
        id: 'TN-08', so_cau: 8, chu_de: 2, tieu_muc: '2.2', ma_lenh: 'C8-TD1.2', cap_do: 'B', nang_luc: 'TD',
        de_bai: 'Cho cấp số cộng <span class="m">(uₙ)</span> có <span class="m">u₁ = 3</span> và công sai <span class="m">d = −2</span>. Tổng <span class="m">10</span> số hạng đầu tiên <span class="m">S₁₀</span> bằng:',
        lua_chon: { A: '−15', B: '120', C: '−60', D: '−70' },
        dap_an: 'C',
        loi_giai: [
          'Dữ kiện: Cấp số cộng u₁ = 3, công sai d = −2, n = 10.',
          'Yêu cầu: Tính tổng S₁₀.',
          'Điều kiện: n = 10 ∈ ℕ*.',
          'Ý tưởng: Áp dụng công thức tổng n số hạng đầu cấp số cộng Sₙ = n[2u₁ + (n − 1)d]/2.',
          'Biến đổi: S₁₀ = 10·[2·3 + 9·(−2)] / 2 = 5·(6 − 18) = 5·(−12) = −60.',
          'Kiểm chứng: u₁₀ = 3 + 9·(−2) = −15 ⇒ S₁₀ = 10·(3 + (−15))/2 = −60. Chọn C.'
        ]
      },
      {
        id: 'TN-09', so_cau: 9, chu_de: 3, tieu_muc: '3.1', ma_lenh: 'C9-GQ1.2', cap_do: 'B', nang_luc: 'GQ',
        de_bai: 'Hệ số của số hạng chứa <span class="m">x³</span> trong khai triển nhị thức <span class="m">(2x − 1)⁵</span> bằng bao nhiêu?',
        lua_chon: { A: '−80', B: '40', C: '−40', D: '80' },
        dap_an: 'D',
        loi_giai: [
          'Dữ kiện: Nhị thức (2x − 1)⁵ với n = 5, a = 2x, b = −1.',
          'Yêu cầu: Tìm hệ số của số hạng chứa x³.',
          'Điều kiện: k ∈ ℤ, 0 ≤ k ≤ 5.',
          'Ý tưởng: Dùng số hạng tổng quát T_(k+1) = C(5,k)·(2x)^(5−k)·(−1)^k.',
          'Biến đổi: Số mũ của x là 5 − k = 3 ⇔ k = 2. Hệ số là C(5,2)·2³·(−1)² = 10·8·1 = 80.',
          'Kiểm chứng: (−1)² = +1 nên hệ số mang dấu dương (+80). Chọn D.'
        ]
      },
      {
        id: 'TN-10', so_cau: 10, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C10-TD1.2', cap_do: 'B', nang_luc: 'TD',
        de_bai: 'Cho hình hộp <span class="m">ABCD.A\'B\'C\'D\'</span>. Tổng vectơ <span class="m">' + vec('AB') + ' + ' + vec('AD') + ' + ' + vec('AA\'') + '</span> bằng vectơ nào dưới đây?',
        lua_chon: {
          A: vec('AC\''),
          B: vec('CA\''),
          C: vec('BD\''),
          D: vec('AC')
        },
        dap_an: 'A',
        loi_giai: [
          'Dữ kiện: Hình hộp ABCD.A\'B\'C\'D\' với 3 cạnh chung gốc A là AB, AD, AA\'.',
          'Yêu cầu: Xác định vectơ tổng theo quy tắc hình hộp.',
          'Điều kiện: Các mặt đối của hình hộp là hình bình hành.',
          'Ý tưởng: Áp dụng quy tắc hình bình hành tại đáy rồi nối tiếp theo quy tắc ba điểm.',
          'Biến đổi: ' + vec('AB') + ' + ' + vec('AD') + ' = ' + vec('AC') + '; mà ' + vec('AA\'') + ' = ' + vec('CC\'') + ' nên tổng = ' + vec('AC') + ' + ' + vec('CC\'') + ' = ' + vec('AC\'') + '.',
          'Kiểm chứng: Điểm đầu A, điểm cuối là đỉnh đối diện C\'. Chọn A.'
        ]
      },
      {
        id: 'TN-11', so_cau: 11, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C11-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Cho hình lập phương <span class="m">ABCD.A\'B\'C\'D\'</span> có cạnh bằng <span class="m">a</span>. Tích vô hướng <span class="m">' + vec('AB') + ' · ' + vec('AC\'') + '</span> bằng:',
        lua_chon: { A: 'a²√3', B: 'a²', C: 'a²√2', D: '0' },
        dap_an: 'B',
        loi_giai: [
          'Dữ kiện: Hình lập phương cạnh a (> 0).',
          'Yêu cầu: Tính tích vô hướng ' + vec('AB') + ' · ' + vec('AC\'') + '.',
          'Điều kiện: Các cạnh AB, AD, AA\' đôi một vuông góc và có độ dài bằng a.',
          'Ý tưởng: Phân tích ' + vec('AC\'') + ' theo quy tắc hình hộp rồi nhân phân phối.',
          'Biến đổi: ' + vec('AC\'') + ' = ' + vec('AB') + ' + ' + vec('AD') + ' + ' + vec('AA\'') + '. Suy ra ' + vec('AB') + ' · ' + vec('AC\'') + ' = AB² + ' + vec('AB') + '·' + vec('AD') + ' + ' + vec('AB') + '·' + vec('AA\'') + ' = a² + 0 + 0 = a².',
          'Kiểm chứng: Gắn tọa độ A(0;0;0), B(a;0;0), C\'(a;a;a) ⇒ (a;0;0)·(a;a;a) = a². Chọn B.'
        ]
      },
      {
        id: 'TN-12', so_cau: 12, chu_de: 4, tieu_muc: '4.2', ma_lenh: 'C12-TD1.2', cap_do: 'B', nang_luc: 'TD',
        de_bai: 'Trong không gian <span class="m">Oxyz</span>, cho hai điểm <span class="m">A(1; −2; 3)</span> và <span class="m">B(3; 2; −1)</span>. Tọa độ trung điểm <span class="m">M</span> của đoạn thẳng <span class="m">AB</span> là:',
        lua_chon: { A: '(2; 4; −4)', B: '(4; 0; 2)', C: '(2; 0; 1)', D: '(1; 2; −2)' },
        dap_an: 'C',
        loi_giai: [
          'Dữ kiện: A(1; −2; 3), B(3; 2; −1).',
          'Yêu cầu: Tìm tọa độ trung điểm M của đoạn AB.',
          'Điều kiện: Hệ tọa độ Oxyz chuẩn.',
          'Ý tưởng: Trung điểm lấy trung bình cộng từng hoành, tung, cao độ.',
          'Biến đổi: x_M = (1+3)/2 = 2; y_M = (−2+2)/2 = 0; z_M = (3−1)/2 = 1 ⇒ M(2; 0; 1).',
          'Kiểm chứng: Vectơ ' + vec('AM') + ' = (1; 2; −2) bằng đúng ' + vec('MB') + ' = (1; 2; −2). Chọn C.'
        ]
      }
    ],

    phan_2: [
      {
        id: 'DS-01', so_cau: 1, chu_de: 1, tieu_muc: '1.1-1.4', ma_lenh: 'C1-GQ', cap_do: 'B-H-VD', nang_luc: 'GQ',
        de_bai: 'Cho hàm số <span class="m">y = f(x) = ' + frac('x² − 2x + 2', 'x − 1') + '</span> có đồ thị <span class="m">(C)</span>.',
        cac_y: [
          {
            y: 'a', ma_lenh: 'C1a-GQ', cap_do: 'B', nang_luc: 'GQ',
            noi_dung: 'Tập xác định của hàm số là <span class="m">D = ℝ\\{1}</span> và đồ thị <span class="m">(C)</span> có tiệm cận đứng <span class="m">x = 1</span>.',
            dap_an: true,
            giai_thich: 'x = 1 làm mẫu bằng 0 nhưng tử bằng 1. Giá trị của phân thức tăng hoặc giảm vô hạn khi x tiến tới 1 từ hai phía.'
          },
          {
            y: 'b', ma_lenh: 'C1b-GQ', cap_do: 'H', nang_luc: 'GQ',
            noi_dung: 'Hàm số nghịch biến trên khoảng <span class="m">(0; 2)</span>.',
            dap_an: false,
            giai_thich: 'Khoảng (0; 2) chứa x = 1, nơi hàm số không xác định. Chỉ có thể xét riêng (0; 1) và (1; 2).'
          },
          {
            y: 'c', ma_lenh: 'C1c-GQ', cap_do: 'H', nang_luc: 'GQ',
            noi_dung: 'Đồ thị <span class="m">(C)</span> có đường tiệm cận xiên là <span class="m">y = x − 1</span> và tâm đối xứng là <span class="m">I(1; 0)</span>.',
            dap_an: true,
            giai_thich: 'Viết f(x) = x − 1 + 1/(x − 1). Hai tiệm cận x = 1 và y = x − 1 cắt nhau tại tâm (1; 0).'
          },
          {
            y: 'd', ma_lenh: 'C1d-GQ', cap_do: 'VD', nang_luc: 'GQ',
            noi_dung: 'Phương trình <span class="m">f(x) = m</span> có đúng hai nghiệm phân biệt lớn hơn <span class="m">1</span> khi và chỉ khi <span class="m">m > 2</span>.',
            dap_an: true,
            giai_thich: 'Đặt t = x − 1 > 0. Hàm t + 1/t giảm từ +∞ xuống 2 tại t = 1 rồi tăng tới +∞, nên mỗi mức m > 2 cho hai nghiệm.'
          }
        ],
        loi_giai: [
          'Dữ kiện: f(x) = (x² − 2x + 2)/(x − 1) = x − 1 + 1/(x − 1).',
          'Yêu cầu: Thẩm định 4 mệnh đề a, b, c, d về TXĐ, đơn điệu, tiệm cận, tâm đối xứng và tương giao.',
          'Điều kiện: x ≠ 1 (D = ℝ\\{1}).',
          'Ý tưởng: Khảo sát f\'(x) = 1 − 1/(x − 1)² = (x² − 2x)/(x − 1)² và xét nhánh đồ thị với x > 1.',
          'Biến đổi: (a) x = 1 làm mẫu bằng 0, tử bằng 1 ≠ 0 ⇒ ĐÚNG. (b) f\'(x) < 0 trên (0; 1) và (1; 2), nhưng hàm không xác định tại x = 1 nên KHÔNG thể nói nghịch biến trên (0; 2) ⇒ SAI. (c) Phần đa thức là y = x − 1 cắt TCĐ x = 1 tại I(1; 0) ⇒ ĐÚNG. (d) Với x > 1, đặt t = x − 1 > 0 thì f(x) = t + 1/t ≥ 2, đạt GTNN bằng 2 tại t = 1 (x = 2); khi m > 2 đường y = m cắt nhánh (1; +∞) tại 2 điểm phân biệt ⇒ ĐÚNG.',
          'Kiểm chứng: Thử m = 2,5 ⇒ t + 1/t = 2,5 cho t = 2 (x = 3) và t = 0,5 (x = 1,5), đều lớn hơn 1. Kết quả: Đ-S-Đ-Đ.'
        ]
      },
      {
        id: 'DS-02', so_cau: 2, chu_de: 4, tieu_muc: '4.1-4.2', ma_lenh: 'C2-GQ', cap_do: 'B-H-VD', nang_luc: 'GQ',
        de_bai: 'Trong không gian <span class="m">Oxyz</span>, cho ba điểm <span class="m">A(1; 0; 2)</span>, <span class="m">B(3; 2; 0)</span>, <span class="m">C(1; 4; 2)</span>.',
        cac_y: [
          {
            y: 'a', ma_lenh: 'C2a-GQ', cap_do: 'B', nang_luc: 'GQ',
            noi_dung: 'Vectơ <span class="m">' + vec('AB') + ' = (2; 2; −2)</span> và độ dài đoạn thẳng <span class="m">AB = 2' + sqrt('3') + '</span>.',
            dap_an: true,
            giai_thich: 'Lấy B trừ A được (2; 2; −2). Tổng bình phương ba thành phần bằng 12 nên độ dài là 2√3.'
          },
          {
            y: 'b', ma_lenh: 'C2b-GQ', cap_do: 'H', nang_luc: 'GQ',
            noi_dung: '<span class="m">' + vec('AB') + ' · ' + vec('AC') + ' = 8</span> và <span class="m">cos(∠BAC) = ' + frac(sqrt('3'), '3') + '</span>.',
            dap_an: true,
            giai_thich: 'AC = (0; 4; 0) nên AB · AC = 8. Chia cho tích hai độ dài 2√3 và 4 được √3/3.'
          },
          {
            y: 'c', ma_lenh: 'C2c-GQ', cap_do: 'H', nang_luc: 'GQ',
            noi_dung: 'Điểm <span class="m">D(1; 2; 4)</span> thỏa mãn <span class="m">ABCD</span> là hình bình hành.',
            dap_an: false,
            giai_thich: 'Hai đường chéo của hình bình hành có cùng trung điểm. Từ A + C = B + D được D = (−1; 2; 4), khác hoành độ đã nêu.'
          },
          {
            y: 'd', ma_lenh: 'C2d-GQ', cap_do: 'VD', nang_luc: 'GQ',
            noi_dung: 'Khi điểm <span class="m">M</span> di động trên trục <span class="m">Oy</span>, giá trị nhỏ nhất của biểu thức <span class="m">T = MA² + MB² + MC²</span> bằng <span class="m">30</span>.',
            dap_an: false,
            giai_thich: 'Với M = (0; y; 0), tổng bình phương khoảng cách là 3(y − 2)² + 27. Giá trị 27 đạt được tại y = 2.'
          }
        ],
        loi_giai: [
          'Dữ kiện: A(1; 0; 2), B(3; 2; 0), C(1; 4; 2).',
          'Yêu cầu: Kiểm tra tọa độ vectơ, độ dài, tích vô hướng, đỉnh thứ 4 hình bình hành và cực trị trên Oy.',
          'Điều kiện: M ∈ Oy có dạng M(0; y; 0).',
          'Ý tưởng: Tính trực tiếp theo tọa độ Oxyz; với ý d dùng hàm bậc hai theo y (hoặc tâm tỉ cự G).',
          'Biến đổi: (a) AB = (2; 2; −2) ⇒ |AB| = √(4+4+4) = 2√3 ⇒ ĐÚNG. (b) AC = (0; 4; 0), |AC| = 4 ⇒ AB·AC = 8, cos(BAC) = 8/(2√3·4) = √3/3 ⇒ ĐÚNG. (c) ABCD là HBH ⇔ AB = DC ⇔ D = A + C − B = (−1; 2; 4) ≠ (1; 2; 4) ⇒ SAI. (d) G = (5/3; 2; 4/3). T(y) = (1+y²+4) + (9+(y−2)²+0) + (1+(y−4)²+4) = 3y² − 12y + 39 = 3(y − 2)² + 27 ≥ 27 tại M(0; 2; 0) ⇒ SAI.',
          'Kiểm chứng: Thay M(0; 2; 0): MA² = 9, MB² = 9, MC² = 9 ⇒ T_min = 27 ≠ 30. Kết quả: Đ-Đ-S-S.'
        ]
      },
      {
        id: 'DS-03', so_cau: 3, chu_de: 2, tieu_muc: '2.3', ma_lenh: 'C3-MHH', cap_do: 'B-H-VD', nang_luc: 'MHH',
        de_bai: 'Số lượng vi khuẩn trong một mẫu nuôi cấy tại thời điểm <span class="m">t</span> giờ (<span class="m">t ≥ 0</span>) tuân theo mô hình tăng trưởng <span class="m">N(t) = N₀·e^(rt)</span>. Ban đầu (<span class="m">t = 0</span>) có <span class="m">500</span> con, sau <span class="m">2</span> giờ số lượng đo được là <span class="m">2 000</span> con.',
        cac_y: [
          {
            y: 'a', ma_lenh: 'C3a-MHH', cap_do: 'B', nang_luc: 'MHH',
            noi_dung: 'Giá trị <span class="m">N₀ = 500</span> và hàm số <span class="m">N(t)</span> đồng biến trên nửa khoảng <span class="m">[0; +∞)</span>.',
            dap_an: true,
            giai_thich: 'N(0) = 500. Sau hai giờ lượng đo được tăng gấp bốn nên tốc độ tăng trưởng r dương và hàm tăng.'
          },
          {
            y: 'b', ma_lenh: 'C3b-MHH', cap_do: 'H', nang_luc: 'MHH',
            noi_dung: 'Hằng số tốc độ tăng trưởng là <span class="m">r = ln 2</span> (giờ⁻¹).',
            dap_an: true,
            giai_thich: 'Tỉ số N(2)/N(0) = 4 cho e^(2r) = 4, tức r = ln(4)/2 = ln(2).'
          },
          {
            y: 'c', ma_lenh: 'C3c-MHH', cap_do: 'H', nang_luc: 'MHH',
            noi_dung: 'Sau <span class="m">5</span> giờ kể từ thời điểm ban đầu, mẫu có đúng <span class="m">12 000</span> con vi khuẩn.',
            dap_an: false,
            giai_thich: 'Mỗi giờ số lượng tăng gấp đôi. Năm giờ sau có 500·2⁵ = 16 000.'
          },
          {
            y: 'd', ma_lenh: 'C3d-MHH', cap_do: 'VD', nang_luc: 'MHH',
            noi_dung: 'Để số lượng vi khuẩn trong mẫu vượt quá <span class="m">100 000</span> con thì cần ít nhất <span class="m">8</span> giờ nguyên.',
            dap_an: true,
            giai_thich: 'Sau 7 giờ có 64 000, còn sau 8 giờ có 128 000. Vì số lượng tăng liên tục, mốc giờ nguyên đầu tiên vượt ngưỡng là 8.'
          }
        ],
        mo_hinh_hoa: [
          'Đọc đề thực tế: Mô hình tăng trưởng liên tục theo thời gian t (giờ), biết mốc t = 0 và t = 2.',
          'Đặt ẩn & điều kiện thực tế: t ≥ 0 (giờ), N₀ > 0, tốc độ r > 0.',
          'Lập mô hình toán học: N(0) = N₀ = 500; N(2) = 500·e^(2r) = 2000.',
          'Giải toán: e^(2r) = 4 ⇒ r = (ln 4)/2 = ln 2; suy ra N(t) = 500·2^t.',
          'Đối chiếu thực tế: Kiểm tra N(5) = 500·32 = 16 000; bất phương trình 500·2^t > 100 000 ⇔ 2^t > 200 ⇒ t > log₂(200) ≈ 7,64 ⇒ ít nhất 8 giờ nguyên.'
        ],
        loi_giai: [
          'Dữ kiện: N(t) = N₀·e^(rt), N(0) = 500, N(2) = 2000.',
          'Yêu cầu: Đánh giá Đúng/Sai cả 4 phát biểu a, b, c, d.',
          'Điều kiện: t ≥ 0, N(t) > 0.',
          'Ý tưởng: Tìm r từ N(2) để rút gọn hàm mũ về dạng 500·2^t.',
          'Biến đổi: (a) N₀ = 500, N\'(t) = N₀·r·e^(rt) > 0 với r > 0 ⇒ đồng biến ⇒ ĐÚNG. (b) e^(2r) = 4 ⇒ r = ln 2 ⇒ ĐÚNG. (c) N(5) = 500·2⁵ = 16 000 ≠ 12 000 ⇒ SAI. (d) N(7) = 64 000 < 100 000 < 128 000 = N(8) ⇒ cần ít nhất 8 giờ nguyên ⇒ ĐÚNG.',
          'Kiểm chứng: log₂(200) ≈ 7,6439 nên 8 là số giờ nguyên nhỏ nhất thỏa 2^t > 200. Kết quả: Đ-Đ-S-Đ.'
        ]
      },
      {
        id: 'DS-04', so_cau: 4, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C4-GQ', cap_do: 'B-H-VD', nang_luc: 'GQ',
        de_bai: 'Một hộp chứa <span class="m">10</span> tấm thẻ cùng loại được đánh số từ <span class="m">1</span> đến <span class="m">10</span>. Lấy ngẫu nhiên đồng thời <span class="m">2</span> thẻ từ hộp. Gọi <span class="m">A</span> là biến cố "cả hai thẻ đều ghi số chẵn", <span class="m">B</span> là biến cố "tổng hai số ghi trên hai thẻ là số chẵn", <span class="m">C</span> là biến cố "tích hai số ghi trên hai thẻ là số chẵn".',
        cac_y: [
          {
            y: 'a', ma_lenh: 'C4a-GQ', cap_do: 'B', nang_luc: 'GQ',
            noi_dung: 'Số phần tử của không gian mẫu là <span class="m">n(Ω) = 90</span>.',
            dap_an: false,
            giai_thich: 'Hai thẻ được lấy đồng thời nên thứ tự không được ghi nhận. C(10,2) = 45 cặp.'
          },
          {
            y: 'b', ma_lenh: 'C4b-GQ', cap_do: 'H', nang_luc: 'GQ',
            noi_dung: 'Xác suất của biến cố <span class="m">B</span> là <span class="m">P(B) = ' + frac('4', '9') + '</span>.',
            dap_an: true,
            giai_thich: 'Tổng chẵn khi hai thẻ cùng chẵn hoặc cùng lẻ. Có 2·C(5,2) = 20 cặp như vậy trong 45 cặp.'
          },
          {
            y: 'c', ma_lenh: 'C4c-GQ', cap_do: 'H', nang_luc: 'GQ',
            noi_dung: 'Hai biến cố <span class="m">A</span> và <span class="m">B</span> độc lập với nhau.',
            dap_an: false,
            giai_thich: 'Nếu A xảy ra thì chắc chắn B xảy ra. Khi đó P(B | A) = 1 khác với P(B) = 4/9.'
          },
          {
            y: 'd', ma_lenh: 'C4d-GQ', cap_do: 'VD', nang_luc: 'GQ',
            noi_dung: 'Biết rằng tích hai số ghi trên hai thẻ là số chẵn, xác suất để tổng hai số đó cũng là số chẵn bằng <span class="m">' + frac('2', '7') + '</span>.',
            dap_an: true,
            giai_thich: 'Có 35 cặp cho tích chẵn sau khi loại 10 cặp toàn lẻ. Trong đó chỉ 10 cặp toàn chẵn có tổng chẵn, cho xác suất 10/35 = 2/7.'
          }
        ],
        loi_giai: [
          'Dữ kiện: 10 thẻ (5 chẵn, 5 lẻ), rút đồng thời 2 thẻ.',
          'Yêu cầu: Thẩm định n(Ω), P(B), tính độc lập A–B và xác suất có điều kiện P(B|C).',
          'Điều kiện: Rút đồng thời không tính thứ tự nên dùng tổ hợp C(n, k).',
          'Ý tưởng: Đếm chính xác số cặp (chẵn-chẵn), (lẻ-lẻ), (chẵn-lẻ) rồi kiểm tra công thức P(A∩B) = P(A)P(B) và P(B|C) = n(B∩C)/n(C).',
          'Biến đổi: (a) n(Ω) = C(10,2) = 45 ≠ 90 ⇒ SAI (bẫy chỉnh hợp A(10,2)). (b) Tổng chẵn gồm 2 chẵn hoặc 2 lẻ ⇒ n(B) = C(5,2) + C(5,2) = 20 ⇒ P(B) = 20/45 = 4/9 ⇒ ĐÚNG. (c) A ⊂ B nên P(A∩B) = P(A) = 10/45 = 2/9, trong khi P(A)·P(B) = (2/9)·(4/9) = 8/81 ≠ 2/9 ⇒ không độc lập ⇒ SAI. (d) Tích chẵn C là biến cố đối của "cả 2 số lẻ" ⇒ n(C) = 45 − C(5,2) = 35; B∩C chính là "cả 2 số chẵn" (A) ⇒ n(B∩C) = 10 ⇒ P(B|C) = 10/35 = 2/7 ⇒ ĐÚNG.',
          'Kiểm chứng: Tổng 10 cặp chẵn-chẵn + 10 cặp lẻ-lẻ + 25 cặp chẵn-lẻ = 45 cặp. Kết quả: S-Đ-S-Đ.'
        ]
      }
    ],

    phan_3: [
      {
        id: 'TLN-01', so_cau: 1, chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Từ một tấm bìa hình vuông có cạnh bằng <span class="m">18 cm</span>, người ta cắt bỏ ở bốn góc bốn hình vuông nhỏ bằng nhau có cạnh bằng <span class="m">x</span> (cm) rồi gập lại thành một chiếc hộp hình hộp chữ nhật không có nắp. Tính thể tích lớn nhất của chiếc hộp tạo thành (đơn vị: <span class="m">cm³</span>).',
        dap_an: '432',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Tấm bìa vuông cạnh 18 cm, cắt 4 góc vuông cạnh x cm, tìm thể tích hộp tối đa.',
          'Đặt ẩn & điều kiện thực tế: Cạnh đáy còn lại là 18 − 2x > 0 và chiều cao x > 0 ⇒ 0 < x < 9.',
          'Lập hàm mục tiêu: V(x) = x·(18 − 2x)² = 4x³ − 72x² + 324x (cm³).',
          'Giải toán: V\'(x) = 12x² − 144x + 324 = 0 ⇔ x = 3 (nhận) hoặc x = 9 (loại). Lập BBT trên (0; 9) thấy V đạt GTLN tại x = 3.',
          'Đối chiếu thực tế: V_max = V(3) = 3·(18 − 6)² = 3·144 = 432 (cm³).'
        ],
        loi_giai: [
          'Dữ kiện: Tấm bìa vuông cạnh a = 18 cm.',
          'Yêu cầu: Tính thể tích lớn nhất (cm³).',
          'Điều kiện: 0 < x < 9.',
          'Ý tưởng: Biểu diễn V(x) theo 1 biến x rồi khảo sát cực trị trên (0; 9).',
          'Biến đổi: V(x) = x(18 − 2x)² ⇒ V\'(x) = 12(x − 3)(x − 9). Với x ∈ (0; 3), V\'(x) > 0; với x ∈ (3; 9), V\'(x) < 0 ⇒ V_max = V(3) = 3·12² = 432.',
          'Kiểm chứng: Công thức nhanh x* = a/6 = 18/6 = 3, V_max = 2·18³/27 = 432 (3 ký tự). Đáp số: 432.'
        ]
      },
      {
        id: 'TLN-02', so_cau: 2, chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Cho hàm số <span class="m">y = ' + frac('x² − 2x + 5', 'x − 1') + '</span> có đồ thị <span class="m">(C)</span> với hai điểm cực trị <span class="m">A</span> và <span class="m">B</span>. Tính khoảng cách từ gốc tọa độ <span class="m">O(0; 0)</span> đến đường thẳng <span class="m">AB</span> (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '0,89',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm, dùng dấu phẩy (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: y = (x² − 2x + 5)/(x − 1).',
          'Yêu cầu: Tính d(O, AB) với A, B là 2 điểm cực trị, làm tròn hàng phần trăm.',
          'Điều kiện: x ≠ 1.',
          'Ý tưởng: Tìm trực tiếp hai điểm cực trị A, B rồi viết phương trình đường thẳng AB và áp dụng công thức khoảng cách.',
          'Biến đổi: y = x − 1 + 4/(x − 1) ⇒ y\' = 1 − 4/(x − 1)² = 0 ⇔ (x − 1)² = 4 ⇔ x = −1 hoặc x = 3. Suy ra A(−1; −4) và B(3; 4). Đường thẳng AB: (y + 4)/8 = (x + 1)/4 ⇔ 2x − y − 2 = 0. Khoảng cách d(O, AB) = |0 − 0 − 2|/√(2² + (−1)²) = 2/√5 ≈ 0,8944.',
          'Kiểm chứng: Đường thẳng qua 2 cực trị nhanh là y = (2x − 2)/1 = 2x − 2; thay A(−1; −4), B(3; 4) đều thỏa. Làm tròn hàng phần trăm: 0,89 (4 ký tự).'
        ]
      },
      {
        id: 'TLN-03', so_cau: 3, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một nhà máy có hai dây chuyền sản xuất. Dây chuyền I sản xuất <span class="m">70%</span> tổng sản lượng với tỉ lệ phế phẩm là <span class="m">2%</span>; dây chuyền II sản xuất <span class="m">30%</span> tổng sản lượng với tỉ lệ phế phẩm là <span class="m">4%</span>. Lấy ngẫu nhiên một sản phẩm của nhà máy thì thấy đó là phế phẩm. Tính xác suất để sản phẩm đó do dây chuyền II sản xuất (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '0,46',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Phân hoạch nguồn sản phẩm (70% dây chuyền I, 30% dây chuyền II) và tỉ lệ phế phẩm từng nguồn.',
          'Đặt biến cố & điều kiện: A₁: "từ dây chuyền I" (P(A₁)=0,7); A₂: "từ dây chuyền II" (P(A₂)=0,3); B: "là phế phẩm".',
          'Lập mô hình Bayes: P(B) = P(A₁)P(B|A₁) + P(A₂)P(B|A₂); cần tính P(A₂|B) = P(A₂)P(B|A₂)/P(B).',
          'Giải toán: P(B) = 0,7·0,02 + 0,3·0,04 = 0,014 + 0,012 = 0,026. Suy ra P(A₂|B) = 0,012 / 0,026 = 6/13 ≈ 0,4615.',
          'Đối chiếu thực tế: 0 < 0,46 < 1, làm tròn đến hàng phần trăm là 0,46.'
        ],
        loi_giai: [
          'Dữ kiện: P(A₁) = 0,7; P(B|A₁) = 0,02; P(A₂) = 0,3; P(B|A₂) = 0,04.',
          'Yêu cầu: Tính P(A₂|B) làm tròn đến hàng phần trăm.',
          'Điều kiện: A₁, A₂ xung khắc và P(A₁) + P(A₂) = 1.',
          'Ý tưởng: Áp dụng công thức xác suất toàn phần và công thức Bayes.',
          'Biến đổi: P(B) = 0,014 + 0,012 = 0,026 ⇒ P(A₂|B) = 0,012/0,026 = 6/13 ≈ 0,461538.',
          'Kiểm chứng: Làm tròn hàng phần trăm: 0,46 (4 ký tự).'
        ]
      },
      {
        id: 'TLN-04', so_cau: 4, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một chiếc đèn chùm nặng <span class="m">90 N</span> được treo đứng yên cân bằng tại điểm <span class="m">S</span> bởi ba sợi dây cáp không dãn có độ dài bằng nhau <span class="m">SA, SB, SC</span> gắn vào trần nhà nằm ngang tại ba điểm <span class="m">A, B, C</span> sao cho tam giác <span class="m">ABC</span> đều nội tiếp đường tròn tâm <span class="m">O</span> bán kính <span class="m">3 m</span>, đồng thời điểm <span class="m">S</span> nằm thẳng đứng bên dưới <span class="m">O</span> và cách trần nhà <span class="m">4 m</span>. Tính độ lớn lực căng của mỗi sợi dây cáp (đơn vị: <span class="m">N</span>).',
        dap_an: '37,5',
        quy_tac_lam_tron: 'Nhập số thập phân chính xác dùng dấu phẩy (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Trọng lực P = 90 N giữ cân bằng bởi 3 lực căng dây bằng nhau đối xứng trục SO.',
          'Đặt ẩn & điều kiện: T > 0 (N) là độ lớn lực căng mỗi dây; OA = OB = OC = R = 3 m, SO = h = 4 m.',
          'Lập mô hình vectơ: ' + vec('T₁') + ' + ' + vec('T₂') + ' + ' + vec('T₃') + ' + ' + vec('P') + ' = ' + vec('0') + ', với mỗi ' + vec('Tᵢ') + ' hợp với phương thẳng đứng SO góc α thỏa cos α = SO/SA.',
          'Giải toán: Chiều dài dây SA = √(OA² + SO²) = √(3² + 4²) = 5 m ⇒ cos α = 4/5. Chiếu phương trình vectơ lên trục thẳng đứng hướng lên: 3·T·cos α = P ⇔ 3·T·(4/5) = 90 ⇒ T = 450/12 = 37,5 N.',
          'Đối chiếu thực tế: Lực căng tổng hợp hướng lên 3·37,5·(4/5) = 90 N cân bằng hoàn toàn trọng lực.'
        ],
        loi_giai: [
          'Dữ kiện: P = 90 N, R = OA = 3 m, h = SO = 4 m.',
          'Yêu cầu: Tính độ lớn lực căng T mỗi dây.',
          'Điều kiện: T > 0, đèn ở trạng thái cân bằng tĩnh.',
          'Ý tưởng: Do tính đối xứng của tam giác đều ABC và SO ⊥ (ABC), các thành phần nằm ngang tự triệt tiêu, chiếu phương trình hợp lực lên phương SO.',
          'Biến đổi: SA = √(3² + 4²) = 5 m ⇒ cos(∠OSA) = 4/5. Phương trình cân bằng: 3·T·(4/5) = 90 ⇔ T = 37,5 N.',
          'Kiểm chứng: Kiểm tra lại bằng tọa độ: đặt S(0;0;0), O(0;0;4) ⇒ thành phần Oz của mỗi lực căng là T·(4/5), tổng 3 dây là 12T/5 = 90 ⇒ T = 37,5 (4 ký tự).'
        ]
      },
      {
        id: 'TLN-05', so_cau: 5, chu_de: 4, tieu_muc: '4.2', ma_lenh: 'C5-GQ2.2', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Trong không gian <span class="m">Oxyz</span>, tính số đo góc giữa hai vectơ <span class="m">' + vec('u') + ' = (1; −2; 2)</span> và <span class="m">' + vec('v') + ' = (2; 1; −2)</span> (đơn vị: độ, làm tròn kết quả đến hàng đơn vị).',
        dap_an: '116',
        quy_tac_lam_tron: 'Nhập số nguyên độ (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: u = (1; −2; 2), v = (2; 1; −2).',
          'Yêu cầu: Tính góc (u, v) theo độ, làm tròn đến hàng đơn vị.',
          'Điều kiện: u ≠ 0, v ≠ 0; góc giữa hai vectơ thuộc [0°; 180°] nên KHÔNG lấy trị tuyệt đối ở tử số.',
          'Ý tưởng: Áp dụng công thức cos(u, v) = (u·v)/(|u|·|v|).',
          'Biến đổi: u·v = 1·2 + (−2)·1 + 2·(−2) = −4; |u| = √(1+4+4) = 3; |v| = √(4+1+4) = 3. Suy ra cos(u, v) = −4/9 ⇒ (u, v) = arccos(−4/9) ≈ 116,3878°.',
          'Kiểm chứng: Góc tù vì tích vô hướng âm. Làm tròn hàng đơn vị được 116 (3 ký tự).'
        ]
      },
      {
        id: 'TLN-06', so_cau: 6, chu_de: 5, tieu_muc: '5.1-5.2', ma_lenh: 'C6-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Cho hình chóp <span class="m">S.ABCD</span> có đáy <span class="m">ABCD</span> là hình vuông cạnh <span class="m">2</span>, cạnh bên <span class="m">SA</span> vuông góc với mặt phẳng đáy và <span class="m">SA = 2' + sqrt('3') + '</span>. Tính khoảng cách từ điểm <span class="m">A</span> đến mặt phẳng <span class="m">(SBD)</span> (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '1,31',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: Đáy vuông ABCD cạnh a = 2, SA ⊥ (ABCD), SA = 2√3.',
          'Yêu cầu: Tính d(A, (SBD)) làm tròn đến hàng phần trăm.',
          'Điều kiện: A là chân đường cao của hình chóp.',
          'Ý tưởng: Gọi O = AC ∩ BD; vì đáy là hình vuông nên AO ⊥ BD, dựng AH ⊥ SO ⇒ AH ⊥ (SBD).',
          'Biến đổi: AO = AC/2 = (2√2)/2 = √2. Áp dụng hệ thức lượng trong tam giác vuông SAO: 1/AH² = 1/SA² + 1/AO² = 1/12 + 1/2 = 7/12 ⇒ AH = √(12/7) ≈ 1,3093.',
          'Kiểm chứng: 1,3093 nhỏ hơn min(SA, AO) = √2 ≈ 1,414 (hợp lý). Làm tròn hàng phần trăm: 1,31 (4 ký tự).'
        ]
      }
    ]
  };

  global.TOAN_DE_MAU = DATA;
})(window);