/* Tuyển tập 20 câu Trả lời ngắn từ các đề thi "HOT" 2026 — TN THPT 2026 (100% Offline) */
(function (global) {
  'use strict';

  function frac(num, den) {
    return '<span class="mfrac"><span class="mnum">' + num + '</span><span class="mden">' + den + '</span></span>';
  }
  function vec(txt) {
    return '<span class="mvec">' + txt + '</span>';
  }
  function hat(txt) {
    return '<span class="mhat">' + txt + '</span>';
  }
  function sqrt(txt) {
    return '<span class="msqrt"><span class="mrad">' + txt + '</span></span>';
  }
  function ovl(txt) {
    return '<span style="text-decoration: overline;">' + txt + '</span>';
  }

  var DATA = {
    meta: {
      tieu_de: 'Tuyển tập 20 câu Trả lời ngắn từ các đề thi "HOT" 2026',
      so_cau: 20,
      so_cau_vd: 15,
      so_cau_hieu: 5,
      nguon_tong_hop: 'Đề chính thức TN THPT 2026 (Mã 101), Liên trường THPT Nghệ An (Lần 1), Sở GD&ĐT Vĩnh Long, Sở GD&ĐT Lạng Sơn (Lần 1), THPT Cửa Lò – Nghệ An (Lần 1), THPT Nguyễn Trung Thiên – Hà Tĩnh, THPT Nguyễn Thị Minh Khai – Khánh Hòa và các trường Chuyên 2025–2026.'
    },

    danh_sach_cau: [
      /* ==================== 1. C1-MHH2.2 (CÂU 1–4) ==================== */
      {
        id: 'HOT-01', so_cau: 1, nhan: 'Câu 1',
        nguon: 'Đề chính thức TN THPT 2026 – Mã 101',
        chuyen_de_key: 'cd1', chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một công ty nông sản có công suất chế biến không quá <span class="m">200</span> tấn nguyên liệu một tháng. Nếu công ty chế biến <span class="m">x</span> tấn nguyên liệu trong một tháng (<span class="m">1 ≤ x ≤ 200</span>) thì chi phí sản xuất và doanh thu lần lượt là <span class="m">C(x) = 0,001x³ + 30x + 10</span> (triệu đồng) và <span class="m">R(x) = 60x</span> (triệu đồng). Lợi nhuận lớn nhất mà công ty đạt được trong một tháng là bao nhiêu triệu đồng?',
        dap_an: '1990',
        quy_tac_lam_tron: 'Nhập số nguyên (triệu đồng), tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Công suất tối đa 200 tấn/tháng; chi phí C(x) = 0,001x³ + 30x + 10 (tr.đ) và doanh thu R(x) = 60x (tr.đ).',
          'Đặt ẩn & điều kiện thực tế: Khối lượng nguyên liệu x (tấn) thỏa 1 ≤ x ≤ 200.',
          'Lập hàm mục tiêu: Lợi nhuận P(x) = R(x) − C(x) = 60x − (0,001x³ + 30x + 10) = −0,001x³ + 30x − 10 (tr.đ).',
          'Giải toán: P\'(x) = −0,003x² + 30 = 0 ⇔ x² = 10000 ⇔ x = 100 ∈ [1; 200]. So sánh P(1) = 19,999; P(100) = 1990; P(200) = −2010.',
          'Đối chiếu thực tế: Giá trị lớn nhất trên [1; 200] là P(100) = 1990 triệu đồng.'
        ],
        loi_giai: [
          'Dữ kiện: 1 ≤ x ≤ 200, C(x) = 0,001x³ + 30x + 10 (triệu đồng), R(x) = 60x (triệu đồng).',
          'Yêu cầu: Tìm lợi nhuận lớn nhất (triệu đồng) đạt được trong một tháng.',
          'Điều kiện: Miền xác định đóng x ∈ [1; 200].',
          'Ý tưởng: Lập hàm lợi nhuận P(x) = R(x) − C(x) và tìm max trên [1; 200].',
          'Biến đổi: P(x) = −0,001x³ + 30x − 10; P\'(x) = −0,003x² + 30 = 0 ⇔ x = 100 (nhận). Tính P(1) = 19,999; P(100) = −1000 + 3000 − 10 = 1990; P(200) = −2010.',
          'Kiểm chứng: x = 100 nằm trong [1; 200] và P"(100) = −0,006·100 < 0. Đáp số điền phiếu: 1990 (4 ký tự).'
        ]
      },
      {
        id: 'HOT-02', so_cau: 2, nhan: 'Câu 2',
        nguon: 'Sở GD&ĐT Vĩnh Long – 2026',
        chuyen_de_key: 'cd1', chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một nghệ nhân làm gốm thủ công sản xuất mỗi ngày <span class="m">x</span> chiếc bình hoa (<span class="m">1 ≤ x ≤ 18, x ∈ ℕ</span>). Tổng chi phí sản xuất <span class="m">x</span> bình hoa trong một ngày (đơn vị: nghìn đồng) là <span class="m">C(x) = x³ − 3x² + 40x + 500</span>. Toàn bộ số bình hoa sản xuất ra trong ngày đều được bán hết với giá cố định <span class="m">280</span> nghìn đồng/bình. Để đạt lợi nhuận cao nhất, nghệ nhân nên sản xuất bao nhiêu bình hoa mỗi ngày?',
        dap_an: '10',
        quy_tac_lam_tron: 'Nhập số nguyên x ∈ ℕ (số bình hoa), tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Bán hết x bình với giá 280 nghìn/bình; tổng chi phí C(x) = x³ − 3x² + 40x + 500 (nghìn đồng). Hỏi số bình x.',
          'Đặt ẩn & điều kiện thực tế: x ∈ ℕ, 1 ≤ x ≤ 18.',
          'Lập hàm mục tiêu: Lợi nhuận mỗi ngày L(x) = 280x − (x³ − 3x² + 40x + 500) = −x³ + 3x² + 240x − 500 (nghìn đồng).',
          'Giải toán: L\'(x) = −3x² + 6x + 240 = −3(x − 10)(x + 8) = 0 ⇒ x = 10 ∈ [1; 18].',
          'Đối chiếu thực tế: Trên [1; 18], L\'(x) đổi dấu + sang − qua x = 10 và 10 ∈ ℕ nên sản xuất tối ưu 10 bình hoa mỗi ngày.'
        ],
        loi_giai: [
          'Dữ kiện: Giá bán 280 nghìn/bình, C(x) = x³ − 3x² + 40x + 500, 1 ≤ x ≤ 18, x ∈ ℕ.',
          'Yêu cầu: Tìm số bình hoa x để lợi nhuận cao nhất.',
          'Điều kiện: x ∈ {1; 2; ...; 18}.',
          'Ý tưởng: Khảo sát hàm lợi nhuận L(x) = 280x − C(x) trên [1; 18].',
          'Biến đổi: L(x) = −x³ + 3x² + 240x − 500 ⇒ L\'(x) = −3x² + 6x + 240 = 0 ⇔ x = 10 hoặc x = −8 (loại). L\' > 0 trên [1; 10) và L\' < 0 trên (10; 18].',
          'Kiểm chứng: L(10) = −1000 + 300 + 2400 − 500 = 1200 nghìn đồng; L(9) = 1174; L(11) = 1172. Đáp số: 10 (2 ký tự).'
        ]
      },
      {
        id: 'HOT-03', so_cau: 3, nhan: 'Câu 3',
        nguon: 'Sở GD&ĐT Lạng Sơn lần 1 – 2026 & THPT Cửa Lò lần 1 – 2026',
        chuyen_de_key: 'cd1', chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một nhà máy dự định sản xuất không quá <span class="m">300</span> sản phẩm mỗi tháng (<span class="m">1 ≤ x ≤ 300, x ∈ ℕ*</span>). Chi phí sản xuất <span class="m">x</span> sản phẩm là <span class="m">C(x) = 16000 + 500x − 1,6x² + 0,004x³</span> (nghìn đồng). Giá bán mỗi sản phẩm phụ thuộc vào số lượng <span class="m">x</span> theo công thức <span class="m">p(x) = 1700 − 7x</span> (nghìn đồng). Giả sử sản phẩm sản xuất ra được tiêu thụ hết. Hỏi lợi nhuận lớn nhất mà nhà máy thu được trong một tháng là bao nhiêu <strong>triệu đồng</strong>?',
        dap_an: '46',
        quy_tac_lam_tron: 'Đổi từ nghìn đồng sang TRIỆU đồng, nhập số nguyên tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: C(x) và p(x) cho theo NGHÌN đồng, nhưng câu hỏi yêu cầu lợi nhuận theo TRIỆU đồng.',
          'Đặt ẩn & điều kiện thực tế: Số sản phẩm x ∈ ℕ*, 1 ≤ x ≤ 300.',
          'Lập hàm mục tiêu: Doanh thu R(x) = x(1700 − 7x) = 1700x − 7x² (nghìn đồng). Lợi nhuận L(x) = R(x) − C(x) = −0,004x³ − 5,4x² + 1200x − 16000 (nghìn đồng).',
          'Giải toán: L\'(x) = −0,012x² − 10,8x + 1200 = 0 ⇔ x² + 900x − 100000 = 0 ⇒ x = 100 (do x > 0).',
          'Đối chiếu thực tế: L(100) = −4000 − 54000 + 120000 − 16000 = 46000 nghìn đồng = 46 triệu đồng.'
        ],
        loi_giai: [
          'Dữ kiện: 1 ≤ x ≤ 300 (x ∈ ℕ*), C(x) = 16000 + 500x − 1,6x² + 0,004x³ (nghìn đồng), p(x) = 1700 − 7x (nghìn đồng).',
          'Yêu cầu: Tính lợi nhuận lớn nhất (đơn vị: triệu đồng).',
          'Điều kiện: 1 ≤ x ≤ 300.',
          'Ý tưởng: Viết L(x) = x·p(x) − C(x), tìm cực đại trên [1; 300] rồi chia cho 1000 để đổi ra triệu đồng.',
          'Biến đổi: L(x) = −0,004x³ − 5,4x² + 1200x − 16000; L\'(x) = −0,012(x² + 900x − 100000) = 0 ⇔ (x − 100)(x + 1000) = 0 ⇒ x = 100 ∈ [1; 300]. L\' đổi dấu + sang − qua x = 100 nên max L(x) = L(100) = 46000 nghìn đồng = 46 triệu đồng.',
          'Kiểm chứng: L(1) = −14805,404; L(300) = −250000; L(100) = 46000 nghìn đồng ⇒ 46 triệu đồng. Đáp số: 46 (2 ký tự).'
        ]
      },
      {
        id: 'HOT-04', so_cau: 4, nhan: 'Câu 4',
        nguon: 'THPT Nguyễn Trung Thiên – Hà Tĩnh – 2026',
        chuyen_de_key: 'cd1', chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một đại lý nhập khẩu trái cây tươi để phân phối cho các cửa hàng. Mỗi lần nhập hàng, khoản chi phí vận chuyển cố định là <span class="m">25</span> triệu đồng. Chi phí bảo quản mỗi tạ trái cây dự trữ trong kho là <span class="m">80</span> nghìn đồng/ngày. Thời gian bảo quản tối đa là <span class="m">10</span> ngày. Biết rằng kể từ ngày đầu tiên nhập hàng, đại lý phân phối tới các cửa hàng <span class="m">25</span> tạ trái cây mỗi ngày. Mỗi lần nhập hàng, đại lý cần nhập đủ trái cây cho bao nhiêu ngày phân phối để chi phí trung bình mỗi ngày thấp nhất?',
        dap_an: '5',
        quy_tac_lam_tron: 'Nhập số ngày nguyên dương, tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Mỗi ngày xuất 25 tạ; phí vận chuyển cố định 25 triệu/lần; phí bảo quản 80 nghìn = 0,08 triệu/tạ/ngày; giữ kho tối đa 10 ngày.',
          'Đặt ẩn & điều kiện thực tế: Gọi x là số ngày phân phối cho mỗi lần nhập hàng (1 ≤ x ≤ 10, x ∈ ℕ*).',
          'Lập hàm mục tiêu: Lượng lưu kho cuối các ngày lần lượt là 25(x − 1), 25(x − 2), ..., 25, 0 (tổng 25·' + frac('x(x − 1)', '2') + ' tạ·ngày). Phí bảo quản: 0,08·25·' + frac('x(x − 1)', '2') + ' = x(x − 1) triệu đồng. Chi phí TB mỗi ngày: f(x) = ' + frac('25 + x(x − 1)', 'x') + ' = x + ' + frac('25', 'x') + ' − 1.',
          'Giải toán: Áp dụng AM-GM (hoặc f\'(x) = 1 − ' + frac('25', 'x²') + ' = 0): f(x) ≥ 2' + sqrt('x · ' + frac('25', 'x')) + ' − 1 = 9, dấu bằng khi x = ' + frac('25', 'x') + ' ⇔ x = 5.',
          'Đối chiếu thực tế: x = 5 thỏa mãn 1 ≤ x ≤ 10 và chi phí trung bình thấp nhất đạt 9 triệu đồng/ngày.'
        ],
        loi_giai: [
          'Dữ kiện: Phí cố định 25 tr/lần; bảo quản 0,08 tr/tạ/ngày; xuất 25 tạ/ngày ngay từ ngày 1; tối đa 10 ngày.',
          'Yêu cầu: Tìm số ngày x để chi phí trung bình mỗi ngày thấp nhất.',
          'Điều kiện: x ∈ ℕ*, 1 ≤ x ≤ 10.',
          'Ý tưởng: Cộng lượng hàng tồn kho qua x ngày thành cấp số cộng để lập hàm f(x) = (Phí cố định + Phí kho)/x.',
          'Biến đổi: Tổng tồn kho = 25[(x−1) + ... + 1 + 0] = 25·x(x−1)/2 tạ·ngày ⇒ phí kho = 0,08·25·x(x−1)/2 = x(x−1) triệu. Do đó f(x) = x + 25/x − 1; f\'(x) = 1 − 25/x² = 0 ⇔ x = 5.',
          'Kiểm chứng: f(4) = 9,25; f(5) = 9; f(6) ≈ 9,17. Nhỏ nhất tại x = 5 ngày. Đáp số: 5 (1 ký tự).'
        ]
      },

      /* ==================== 2. C2-GQ2.2 (CÂU 5–7) ==================== */
      {
        id: 'HOT-05', so_cau: 5, nhan: 'Câu 5',
        nguon: 'Liên trường THPT Nghệ An lần 1 – 2026',
        chuyen_de_key: 'cd2', chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Người ta bơm xăng vào bình xăng của một chiếc xe ô tô. Biết thể tích <span class="m">V</span> (lít) của xăng trong bình phụ thuộc theo thời gian <span class="m">t</span> (phút) theo công thức <span class="m">V(t) = ' + frac('35', '4') + '(3t − t² + t³) + 4</span> với <span class="m">0 ≤ t ≤ 1</span>. Gọi <span class="m">V\'(t)</span> là tốc độ bơm xăng vào bình. Xác định thể tích (lít) của xăng trong bình tại thời điểm mà tốc độ bơm đạt nhỏ nhất <em>(làm tròn kết quả đến hàng phần chục)</em>.',
        dap_an: '12,1',
        quy_tac_lam_tron: 'Làm tròn kết quả V(t₀) đến hàng phần chục (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: V(t) = (35/4)(3t − t² + t³) + 4 trên [0; 1]; tốc độ bơm là v(t) = V\'(t).',
          'Yêu cầu: Tính V(t₀) tại t₀ làm v(t) = V\'(t) đạt giá trị nhỏ nhất (hàng phần chục).',
          'Điều kiện: 0 ≤ t ≤ 1.',
          'Ý tưởng: Tính v(t) = V\'(t) là hàm bậc hai, tìm đỉnh cực tiểu t₀ ∈ [0; 1] rồi thay vào V(t₀) (KHÔNG trả lời nhầm sang t₀ hay V\'(t₀)).',
          'Biến đổi: v(t) = V\'(t) = ' + frac('35', '4') + '(3t² − 2t + 3). Tam thức bậc hai 3t² − 2t + 3 có a = 3 > 0 nên đạt GTNN tại t₀ = −' + frac('−2', '2·3') + ' = ' + frac('1', '3') + ' ∈ [0; 1]. Thay vào V(' + frac('1', '3') + ') = ' + frac('35', '4') + '(1 − ' + frac('1', '9') + ' + ' + frac('1', '27') + ') + 4 = ' + frac('875', '108') + ' + 4 ≈ 12,102.',
          'Kiểm chứng: 875/108 + 4 = 1307/108 = 12,10185... làm tròn hàng phần chục được 12,1 lít (4 ký tự).'
        ]
      },
      {
        id: 'HOT-06', so_cau: 6, nhan: 'Câu 6',
        nguon: 'Liên trường THPT Nghệ An lần 1 – 2026',
        chuyen_de_key: 'cd2', chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Tính tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số <span class="m">y = (x² + x + 1)e<sup>−x</sup></span> trên đoạn <span class="m">[−1; 0]</span> <em>(làm tròn kết quả đến hàng phần chục)</em>.',
        dap_an: '3,7',
        quy_tac_lam_tron: 'Làm tròn M + m đến hàng phần chục (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: Hàm số y = (x² + x + 1)e^(−x) liên tục trên [−1; 0].',
          'Yêu cầu: Tính M + m với M = max y, m = min y trên [−1; 0] (hàng phần chục).',
          'Điều kiện: x ∈ [−1; 0].',
          'Ý tưởng: Tính đạo hàm y\' = [(2x + 1) − (x² + x + 1)]e^(−x) để xét chiều biến thiên trên [−1; 0].',
          'Biến đổi: y\' = (−x² + x)e^(−x) = x(1 − x)e^(−x). Với mọi x ∈ (−1; 0): x < 0, 1 − x > 0 và e^(−x) > 0 ⇒ y\' < 0. Hàm số nghịch biến trên [−1; 0] ⇒ M = y(−1) = e, m = y(0) = 1. Vậy M + m = e + 1 ≈ 2,71828 + 1 = 3,71828.',
          'Kiểm chứng: Làm tròn đến hàng phần chục được 3,7 (3 ký tự).'
        ]
      },
      {
        id: 'HOT-07', so_cau: 7, nhan: 'Câu 7',
        nguon: 'THPT Nguyễn Thị Minh Khai – Khánh Hòa – 2026',
        chuyen_de_key: 'cd2', chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Một cơ sở sản xuất nước ép xoài đóng chai dự kiến mỗi tháng sản xuất và bán hết <span class="m">x</span> chai (<span class="m">x ∈ ℕ*, 1 ≤ x ≤ 5000</span>). Doanh thu (nghìn đồng) ước tính bởi <span class="m">F(x) = −0,02x² + 320x</span>. Chi phí sản xuất trung bình cho mỗi chai (nghìn đồng) là <span class="m">G(x) = ' + frac('24000', 'x') + ' + 180</span>. Hỏi trong một tháng, cơ sở phải sản xuất <strong>ít nhất</strong> bao nhiêu chai nước ép để lợi nhuận thu được không ít hơn <span class="m">120</span> triệu đồng?',
        dap_an: '1253',
        quy_tac_lam_tron: 'Lấy số nguyên dương nhỏ nhất x ∈ ℕ* (lấy trần), tối đa 4 ký tự.',
        loi_giai: [
          'Dữ kiện: F(x) = −0,02x² + 320x (nghìn đồng), chi phí TB G(x) = 24000/x + 180 (nghìn đồng/chai), ngưỡng lợi nhuận ≥ 120 triệu = 120000 nghìn đồng.',
          'Yêu cầu: Tìm giá trị nguyên nhỏ nhất của x ∈ [1; 5000] sao cho lợi nhuận L(x) ≥ 120000.',
          'Điều kiện: x ∈ ℕ*, 1 ≤ x ≤ 5000.',
          'Ý tưởng: Tổng chi phí là C(x) = x·G(x); giải bất phương trình bậc hai L(x) = F(x) − C(x) ≥ 120000.',
          'Biến đổi: C(x) = 24000 + 180x ⇒ L(x) = −0,02x² + 140x − 24000. Cần −0,02x² + 140x − 144000 ≥ 0 ⇔ x² − 7000x + 7200000 ≤ 0 ⇔ 3500 − 100' + sqrt('505') + ' ≤ x ≤ 3500 + 100' + sqrt('505') + '.',
          'Kiểm chứng: 3500 − 100√505 ≈ 1252,78 ⇒ với x ∈ ℕ*, lấy x = 1253 (tại x = 1252 lợi nhuận 119879,92k < 120000k; tại x = 1253 đạt 120009,78k). Đáp số: 1253.'
        ]
      },

      /* ==================== 3. C3-MHH2.2 (CÂU 8–12) ==================== */
      {
        id: 'HOT-08', so_cau: 8, nhan: 'Câu 8',
        nguon: 'Đề chính thức TN THPT 2026 – Mã 101',
        chuyen_de_key: 'cd3', chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một khung hình trang trí có dạng đa giác đều <span class="m">12</span> cạnh <span class="m">A₁A₂…A₁₂</span> gắn cố định trên trần nhà. Bạn Dũng có <span class="m">12</span> bóng đèn gồm <span class="m">4</span> bóng màu đỏ và <span class="m">8</span> bóng màu xanh có công suất đôi một khác nhau, lắp ngẫu nhiên vào <span class="m">12</span> đỉnh sao cho mỗi đỉnh có đúng một bóng. Gọi <span class="m">P</span> là xác suất để <strong>mỗi hình vuông</strong> (có <span class="m">4</span> đỉnh là các đỉnh của đa giác đã cho) đều có ít nhất một bóng đèn màu đỏ. Tính giá trị của <span class="m">3190P</span>.',
        dap_an: '1856',
        quy_tac_lam_tron: 'Nhập số nguyên đúng của 3190P, tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: 12 bóng (4 đỏ, 8 xanh) khác công suất lắp vào 12 đỉnh đa giác đều. Cần tìm xác suất P để cả 3 hình vuông nội tiếp đều có bóng đỏ.',
          'Đặt không gian mẫu: Do tính đối xứng đồng khả năng, xác suất chỉ phụ thuộc vào tập vị trí 4 đỉnh lắp bóng đỏ ⇒ n(Ω) = C(12, 4) = 495 (hoặc tính đủ 12! hoán vị đều cho cùng P).',
          'Lập mô hình phân hoạch 12 đỉnh: 12 đỉnh chia thành đúng 3 hình vuông rời nhau gồm V₁={A₁,A₄,A₇,A₁₀}, V₂={A₂,A₅,A₈,A₁₁}, V₃={A₃,A₆,A₉,A₁₂}.',
          'Giải toán: Có 4 bóng đỏ đặt vào 3 hình vuông sao cho mỗi hình có ≥ 1 bóng ⇒ bộ số lượng bóng đỏ ở 3 hình phải là hoán vị của (2, 1, 1). Số cách: n(A) = C(3,1)·C(4,2)·C(4,1)·C(4,1) = 3·6·4·4 = 288.',
          'Đối chiếu & tính: P = 288/495 = 32/55 ⇒ 3190P = 3190·(32/55) = 58·32 = 1856.'
        ],
        loi_giai: [
          'Dữ kiện: Đa giác đều 12 cạnh; 4 bóng đỏ + 8 bóng xanh công suất đôi một khác nhau.',
          'Yêu cầu: Tính 3190P với P là xác suất mỗi hình vuông từ 12 đỉnh có ít nhất 1 bóng đỏ.',
          'Điều kiện: Vì chọn vị trí cho 4 bóng đỏ rồi hoán vị nội bộ (4!·8!) bị triệt tiêu giữa tử và mẫu, xét không gian vị trí C(12, 4) = 495.',
          'Ý tưởng: Phân hoạch 12 đỉnh thành 3 hình vuông rời nhau từng 4 đỉnh cách đều nhau 3 bước.',
          'Biến đổi: 3 hình vuông là {A₁,A₄,A₇,A₁₀}, {A₂,A₅,A₈,A₁₁}, {A₃,A₆,A₉,A₁₂}. Phân bổ 4 bóng đỏ vào 3 nhóm (không nhóm nào rỗng) theo bộ (2; 1; 1): n(A) = C(3,1)·C(4,2)·C(4,1)·C(4,1) = 288 ⇒ P = 288/495 = 32/55 ⇒ 3190P = 1856.',
          'Kiểm chứng: Dùng biến cố đối (ít nhất 1 hình vuông toàn xanh): 3·C(8,4) − 3·C(4,4) = 3·70 − 3 = 207 ⇒ 495 − 207 = 288. Đáp số: 1856 (4 ký tự).'
        ]
      },
      {
        id: 'HOT-09', so_cau: 9, nhan: 'Câu 9',
        nguon: 'Liên trường THPT Nghệ An lần 1 – 2026',
        chuyen_de_key: 'cd3', chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Bạn Tiến làm bài kiểm tra gồm <span class="m">20</span> câu trắc nghiệm nhiều lựa chọn (mỗi câu <span class="m">4</span> phương án, chỉ có <span class="m">1</span> phương án đúng, đúng mỗi câu được <span class="m">0,5</span> điểm). Tiến đã làm chắc chắn đúng <span class="m">15</span> câu; trong <span class="m">5</span> câu còn lại có <span class="m">2</span> câu bạn loại được <span class="m">1</span> phương án sai rồi chọn ngẫu nhiên trong <span class="m">3</span> phương án còn lại, và <span class="m">3</span> câu kia chọn ngẫu nhiên hoàn toàn. Tính xác suất để Tiến đạt đúng <span class="m">9</span> điểm <em>(làm tròn kết quả đến hàng phần trăm)</em>.',
        dap_an: '0,12',
        quy_tac_lam_tron: 'Làm tròn kết quả đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Cần đúng tổng cộng 9 : 0,5 = 18 câu. Đã chắc chắn 15 câu ⇒ cần đúng ĐÚNG 3 câu nữa trong 5 câu cuối.',
          'Đặt biến cố: Chia 5 câu cuối thành Nhóm I (2 câu, p₁ = 1/3) và Nhóm II (3 câu, p₂ = 1/4).',
          'Lập mô hình 3 trường hợp xung khắc theo số câu đúng ở (Nhóm I; Nhóm II): (2; 1), (1; 2), (0; 3).',
          'Giải toán: P = C(2,2)(1/3)²·C(3,1)(1/4)(3/4)² + C(2,1)(1/3)(2/3)·C(3,2)(1/4)²(3/4) + C(2,0)(2/3)²·C(3,3)(1/4)³ = ' + frac('3', '64') + ' + ' + frac('4', '64') + ' + ' + frac('4', '576') + ' = ' + frac('67', '576') + '.',
          'Đối chiếu thực tế: 67/576 ≈ 0,11632 làm tròn đến hàng phần trăm bằng 0,12.'
        ],
        loi_giai: [
          'Dữ kiện: 20 câu (0,5đ/câu), đúng 15 câu (7,5đ); 2 câu nhóm I đúng mỗi câu 1/3; 3 câu nhóm II đúng mỗi câu 1/4.',
          'Yêu cầu: Tính xác suất đạt đúng 9 điểm (tức đúng thêm 3 câu).',
          'Điều kiện: Các câu chọn ngẫu nhiên độc lập nhau.',
          'Ý tưởng: Cộng xác suất 3 kịch bản xung khắc (2;1), (1;2), (0;3) dùng công thức Bernoulli cho từng nhóm.',
          'Biến đổi: P(2;1) = (1/9)·3·(1/4)(9/16) = 27/576; P(1;2) = (4/9)·3·(1/16)(3/4) = 36/576; P(0;3) = (4/9)·(1/64) = 4/576 ⇒ P = 67/576 ≈ 0,1163.',
          'Kiểm chứng: (27 + 36 + 4)/576 = 67/576 ≈ 0,1163 ⇒ hàng phần trăm: 0,12 (4 ký tự).'
        ]
      },
      {
        id: 'HOT-10', so_cau: 10, nhan: 'Câu 10',
        nguon: 'THPT Nguyễn Trung Thiên – Hà Tĩnh – 2026',
        chuyen_de_key: 'cd3', chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một người môi giới bất động sản có <span class="m">8</span> chìa khóa mở <span class="m">8</span> ngôi nhà mới (mỗi chìa chỉ mở đúng <span class="m">1</span> ngôi nhà). Biết rằng trong <span class="m">8</span> ngôi nhà có <span class="m">3</span> ngôi nhà không khóa cửa. Người môi giới chọn ngẫu nhiên <span class="m">3</span> chìa khóa mang theo rồi chọn ngẫu nhiên <span class="m">1</span> ngôi nhà để vào. Tính xác suất để người đó vào được ngôi nhà đã chọn <em>(làm tròn kết quả đến hàng phần trăm)</em>.',
        dap_an: '0,61',
        quy_tac_lam_tron: 'Làm tròn kết quả đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: 8 nhà (3 nhà mở sẵn, 5 nhà khóa), mang ngẫu nhiên 3 chìa trong 8 chìa và chọn 1 nhà bất kỳ.',
          'Đặt hệ biến cố đầy đủ cho ngôi nhà được chọn: H₁ = "chọn trúng nhà không khóa" (P(H₁) = 3/8); H₂ = "chọn trúng nhà có khóa" (P(H₂) = 5/8).',
          'Lập mô hình xác suất toàn phần: Nếu H₁ xảy ra, P(Vào | H₁) = 1. Nếu H₂ xảy ra, cần chọn đúng chìa của nhà đó trong bộ 3 chìa mang theo: P(Vào | H₂) = C(7,2)/C(8,3) = 21/56 = 3/8.',
          'Giải toán: P = ' + frac('3', '8') + '·1 + ' + frac('5', '8') + '·' + frac('3', '8') + ' = ' + frac('24 + 15', '64') + ' = ' + frac('39', '64') + '.',
          'Đối chiếu thực tế: 39/64 = 0,609375, làm tròn hàng phần trăm là 0,61.'
        ],
        loi_giai: [
          'Dữ kiện: 8 nhà (3 không khóa, 5 có khóa), 8 chìa tương ứng, mang ngẫu nhiên 3 chìa, chọn 1 nhà.',
          'Yêu cầu: Tính xác suất vào được ngôi nhà đã chọn (hàng phần trăm).',
          'Điều kiện: Việc mang 3 chìa và chọn 1 nhà là độc lập.',
          'Ý tưởng: Chia 2 trường hợp xung khắc: chọn nhà không khóa (3/8) hoặc chọn nhà có khóa (5/8) rồi dùng quy tắc xác suất toàn phần.',
          'Biến đổi: P(Vào) = (3/8)·1 + (5/8)·(C(7,2)/C(8,3)) = 3/8 + (5/8)·(3/8) = 39/64 ≈ 0,6094.',
          'Kiểm chứng: Dùng biến cố đối (không vào được = trúng 5 nhà khóa VÀ 3 chìa không trúng chìa đó): 1 − (5/8)·(5/8) = 1 − 25/64 = 39/64 ≈ 0,61 (4 ký tự).'
        ]
      },
      {
        id: 'HOT-11', so_cau: 11, nhan: 'Câu 11',
        nguon: 'THPT Cửa Lò – Nghệ An lần 1 – 2026',
        chuyen_de_key: 'cd3', chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một hộp đựng <span class="m">9</span> quả cầu giống hệt nhau được đánh số từ <span class="m">1</span> đến <span class="m">9</span>. Lấy ngẫu nhiên lần lượt (không hoàn lại) <span class="m">4</span> quả cầu. Tính xác suất để tổng các chữ số ghi trên <span class="m">4</span> quả cầu lấy ra bằng <span class="m">15</span> <em>(làm tròn kết quả đến hàng phần trăm)</em>.',
        dap_an: '0,05',
        quy_tac_lam_tron: 'Làm tròn kết quả đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Rút lần lượt không hoàn lại 4 quả từ tập {1; 2; ...; 9}, yêu cầu tổng 4 số bằng 15.',
          'Đặt không gian mẫu: Tổng không phụ thuộc thứ tự rút (mỗi tập 4 số đều hoán vị 4! cách ở cả tử và mẫu), nên quy về chọn tập con 4 phần tử: |Ω| = C(9, 4) = 126.',
          'Lập mô hình liệt kê có hệ thống: Liệt kê các bộ tăng dần a < b < c < d trong {1..9} sao cho a + b + c + d = 15.',
          'Giải toán: Có đúng 6 bộ: {1,2,3,9}, {1,2,4,8}, {1,2,5,7}, {1,3,4,7}, {1,3,5,6}, {2,3,4,6}. Suy ra P = ' + frac('6', '126') + ' = ' + frac('1', '21') + '.',
          'Đối chiếu thực tế: 1/21 ≈ 0,04762, làm tròn hàng phần trăm bằng 0,05.'
        ],
        loi_giai: [
          'Dữ kiện: 9 quả đánh số 1..9, lấy lần lượt không hoàn lại 4 quả.',
          'Yêu cầu: Tính xác suất tổng 4 số bằng 15 (hàng phần trăm).',
          'Điều kiện: Vì 4 số đôi một phân biệt và phép cộng giao hoán, có thể đếm bằng tổ hợp C(9,4) (hoặc chỉnh hợp đều cho kết quả A(9,4) = 126·4!).',
          'Ý tưởng: Liệt kê triệt để theo thứ tự từ điển (từ a = 1 rồi đến a = 2; chú ý a ≥ 3 thì tổng nhỏ nhất là 3+4+5+6 = 18 > 15).',
          'Biến đổi: Với a=1: {1,2,3,9}, {1,2,4,8}, {1,2,5,7}, {1,3,4,7}, {1,3,5,6} (5 bộ); với a=2: {2,3,4,6} (1 bộ). Tổng n(A) = 6 bộ ⇒ P = 6/126 = 1/21 ≈ 0,0476.',
          'Kiểm chứng: Tổng 4 số nhỏ nhất từ 3..6 đã bằng 18 > 15 nên không bỏ sót bộ nào. Làm tròn: 0,05 (4 ký tự).'
        ]
      },
      {
        id: 'HOT-12', so_cau: 12, nhan: 'Câu 12',
        nguon: 'THPT Nguyễn Thị Minh Khai – Khánh Hòa – 2026',
        chuyen_de_key: 'cd3', chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một hộp chứa <span class="m">9</span> tấm thẻ đánh số từ <span class="m">1</span> đến <span class="m">9</span>. Rút ngẫu nhiên <span class="m">5</span> tấm thẻ rồi sắp xếp các số theo thứ tự tăng dần thành <span class="m">a &lt; b &lt; c &lt; d &lt; e</span>. Người chơi thắng nếu trong <span class="m">5</span> số đã xếp tồn tại <span class="m">4</span> số đứng liên tiếp tạo thành một cấp số cộng. Biết xác suất để người chơi thắng là <span class="m">A</span>. Tính <span class="m">' + frac('1', 'A') + '</span>.',
        dap_an: '4,2',
        quy_tac_lam_tron: 'Nhập số thập phân đúng của 1/A (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Rút 5 thẻ từ {1..9}, xếp tăng dần a < b < c < d < e. Thắng nếu (a,b,c,d) là CSC HOẶC (b,c,d,e) là CSC.',
          'Đặt không gian mẫu: |Ω| = C(9, 5) = 126.',
          'Lập mô hình hợp biến cố (nguyên lý bù trừ): Đặt S₁ = {(a,b,c,d) là CSC}, S₂ = {(b,c,d,e) là CSC}. Cần |S₁ ∪ S₂| = |S₁| + |S₂| − |S₁ ∩ S₂|.',
          'Giải toán: Nếu công sai d ≥ 3 thì số thứ tư ≥ 1 + 3·3 = 10 > 9 (loại). Xét d ∈ {1, 2}:\n• |S₁|: d=1 có (1,2,3,4)..(5,6,7,8) kéo theo e lần lượt 5+4+3+2+1 = 15 bộ; d=2 có (1,3,5,7) với 2 cách chọn e và (2,4,6,8) với 1 cách chọn e ⇒ |S₁| = 18. Tương tự đối xứng |S₂| = 18.\n• |S₁ ∩ S₂| (cả 5 số là CSC): 5 bộ d=1 và 1 bộ (1,3,5,7,9) với d=2 ⇒ |S₁ ∩ S₂| = 6.',
          'Đối chiếu & tính: |S₁ ∪ S₂| = 18 + 18 − 6 = 30 ⇒ A = 30/126 = 5/21 ⇒ 1/A = 21/5 = 4,2.'
        ],
        loi_giai: [
          'Dữ kiện: Chọn 5 thẻ từ {1..9}, xếp a < b < c < d < e.',
          'Yêu cầu: Tính 1/A với A là xác suất tồn tại 4 số đứng liên tiếp lập thành cấp số cộng.',
          'Điều kiện: Vì 5 số sắp tăng dần trong 1..9 nên công sai d của 4 số liên tiếp chỉ có thể bằng 1 hoặc 2.',
          'Ý tưởng: Dùng công thức cộng |S₁ ∪ S₂| = |S₁| + |S₂| − |S₁ ∩ S₂| tránh đếm trùng khi cả 5 số lập thành CSC.',
          'Biến đổi: |Ω| = C(9,5) = 126; |S₁| = 15 + 3 = 18; |S₂| = 18; |S₁ ∩ S₂| = 5 + 1 = 6 ⇒ n(Thắng) = 18 + 18 − 6 = 30 ⇒ A = 30/126 = 5/21 ⇒ 1/A = 21/5 = 4,2.',
          'Kiểm chứng: Tổng kết đúng 30/126 tập 5 phần tử; nghịch đảo 126/30 = 4,2 (3 ký tự).'
        ]
      },

      /* ==================== 4. C4-MHH2.2 (CÂU 13–15) ==================== */
      {
        id: 'HOT-13', so_cau: 13, nhan: 'Câu 13',
        nguon: 'Liên trường THPT Nghệ An lần 1 – 2026',
        chuyen_de_key: 'cd4', chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Trong không gian <span class="m">Oxyz</span> (đơn vị trên mỗi trục là <span class="m">1 cm</span>), mắt người quan sát đặt tại <span class="m">M(1; 2; 3)</span> và vật cần quan sát đặt tại <span class="m">N(3; 6; −12)</span>. Một tấm bìa cứng hình tròn tâm tại gốc tọa độ <span class="m">O</span>, bán kính <span class="m">R = 2</span> nằm trong mặt phẳng <span class="m">(Oxy)</span> bắt đầu di chuyển thẳng theo hướng vectơ <span class="m">' + vec('j') + ' = (0; 1; 0)</span> với tốc độ không đổi <span class="m">v = 5 cm/s</span>. Tính khoảng thời gian mà trong quá trình di chuyển, tấm bìa che khuất tầm nhìn của người quan sát <em>(làm tròn kết quả đến hàng phần trăm)</em>.',
        dap_an: '0,57',
        quy_tac_lam_tron: 'Làm tròn khoảng thời gian (giây) đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Tia nhìn từ M(1;2;3) đến N(3;6;−12) đâm xuyên qua (Oxy). Hình tròn bán kính R = 2 trượt trên (Oxy) theo trục Oy tốc độ 5 cm/s.',
          'Đặt ẩn & điều kiện thực tế: Tại thời điểm t ≥ 0 (giây), tâm hình tròn ở vị trí I(0; 5t; 0) trong (Oxy).',
          'Lập mô hình giao điểm & điều kiện che khuất: Giao điểm K(x; y; 0) của đoạn MN với (Oxy) thỏa ' + vec('MK') + ' = k·' + vec('MN') + '. Tấm bìa che khuất tầm nhìn khi và chỉ khi K thuộc hình tròn tâm I bán kính 2, tức IK ≤ 2.',
          'Giải toán: ' + vec('MN') + ' = (2; 4; −15), ' + vec('MK') + ' = (x − 1; y − 2; −3) ⇒ k = −3/(−15) = 1/5 ⇒ K(1,4; 2,8; 0). Khi đó IK² ≤ 4 ⇔ (1,4)² + (5t − 2,8)² ≤ 4 ⇔ (5t − 2,8)² ≤ 2,04 ⇔ ' + frac('2,8 − ' + sqrt('2,04'), '5') + ' ≤ t ≤ ' + frac('2,8 + ' + sqrt('2,04'), '5') + '.',
          'Đối chiếu thực tế: Do 2,8 − √2,04 > 0 nên cả khoảng thời gian bắt đầu lẫn kết thúc đều sau t = 0. Tổng thời gian che khuất: Δt = ' + frac('2' + sqrt('2,04'), '5') + ' ≈ 0,5713 ≈ 0,57 giây.'
        ],
        loi_giai: [
          'Dữ kiện: M(1; 2; 3), N(3; 6; −12), hình tròn trong (Oxy) tâm ban đầu O(0;0;0), R = 2, trượt hướng j = (0;1;0) với v = 5 cm/s.',
          'Yêu cầu: Tính thời gian che khuất tầm nhìn (giây, hàng phần trăm).',
          'Điều kiện: M ở z = 3 > 0 và N ở z = −12 < 0 nên đoạn MN chắc chắn cắt (Oxy) tại đúng 1 điểm K.',
          'Ý tưởng: Tìm giao điểm K = MN ∩ (Oxy) bằng vectơ cùng phương, rồi giải bất phương trình IK(t) ≤ R = 2.',
          'Biến đổi: MK = (1/5)MN ⇒ K(1,4; 2,8; 0). Tâm I(0; 5t; 0) cách K một khoảng ≤ 2 ⇔ 1,96 + (5t − 2,8)² ≤ 4 ⇔ |5t − 2,8| ≤ √2,04 ⇒ Δt = 2√2,04 / 5 ≈ 0,5713.',
          'Kiểm chứng: Đầu mút t₁ ≈ 0,274 s > 0, t₂ ≈ 0,846 s ⇒ Δt = 0,5713 ≈ 0,57 s (4 ký tự).'
        ]
      },
      {
        id: 'HOT-14', so_cau: 14, nhan: 'Câu 14',
        nguon: 'THPT Cửa Lò – Nghệ An lần 1 – 2026',
        chuyen_de_key: 'cd4', chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Trong hệ thống định vị GPS gắn hệ tọa độ <span class="m">Oxyz</span>, bốn vệ tinh đặt tại <span class="m">A(0; 4; 5)</span>, <span class="m">B(3; 0; 5)</span>, <span class="m">C(3; 4; 0)</span> và <span class="m">D(3; 4; 5)</span>. Xét điểm <span class="m">M(a; b; c)</span> thuộc đoạn thẳng <span class="m">AB</span> sao cho tổng khoảng cách từ ba điểm <span class="m">A, B, C</span> đến đường thẳng <span class="m">MD</span> đạt giá trị lớn nhất. Tính giá trị của <span class="m">a + b + c</span>.',
        dap_an: '8,64',
        quy_tac_lam_tron: 'Nhập giá trị đúng của a + b + c (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: 4 vệ tinh tạo hình đặc biệt quanh D(3; 4; 5). Cần định vị M(a; b; c) ∈ AB để d(A, MD) + d(B, MD) + d(C, MD) lớn nhất.',
          'Đặt ẩn & nhận dạng hình học: Tính ' + vec('DA') + '=(−3;0;0), ' + vec('DB') + '=(0;−4;0), ' + vec('DC') + '=(0;0;−5) ⇒ DA, DB, DC đôi một vuông góc tại D với DA=3, DB=4, DC=5.',
          'Lập mô hình lượng giác hóa khoảng cách: Do M ∈ AB ⊂ (DAB) và DC ⊥ (DAB) nên DC ⊥ MD ⇒ d(C, MD) = DC = 5 không đổi. Đặt α = ' + hat('ADM') + ' ∈ [0; π/2] ⇒ ' + hat('BDM') + ' = π/2 − α. Khi đó T = d(A,MD) + d(B,MD) + 5 = 3sin α + 4cos α + 5.',
          'Giải toán: Áp dụng Bunhiacopxki: 3sin α + 4cos α ≤ ' + sqrt('3² + 4²') + ' = 5; dấu bằng xảy ra khi tan α = ' + frac('3', '4') + '. Trên mặt phẳng z = 5, M(a;b;5) ∈ AB nên 4a + 3b = 12, đồng thời tan α = ' + frac('4 − b', '3 − a') + ' = ' + frac('3', '4') + ' ⇔ 3a − 4b = −7.',
          'Đối chiếu & tính: Giải hệ 4a + 3b = 12 và 3a − 4b = −7 được a = 27/25 = 1,08; b = 64/25 = 2,56; c = 5 ⇒ a + b + c = 8,64.'
        ],
        loi_giai: [
          'Dữ kiện: A(0;4;5), B(3;0;5), C(3;4;0), D(3;4;5); M(a;b;c) ∈ đoạn AB.',
          'Yêu cầu: Tìm a + b + c khi d(A,MD) + d(B,MD) + d(C,MD) lớn nhất.',
          'Điều kiện: M thuộc đoạn AB nên c = 5 và 4a + 3b = 12 (0 ≤ a ≤ 3, 0 ≤ b ≤ 4).',
          'Ý tưởng: Nhận ra tứ diện vuông D.ABC tại D; DC ⊥ MD nên d(C,MD) = 5 không đổi; trong mặt phẳng (DAB) biểu diễn tổng hai khoảng cách kia theo góc α = ∠ADM.',
          'Biến đổi: d(A,MD) + d(B,MD) = 3sin α + 4cos α ≤ 5, đạt 5 khi tan α = 3/4 ⇔ (4−b)/(3−a) = 3/4 ⇔ 3a − 4b = −7. Kết hợp 4a + 3b = 12 ⇒ a = 1,08; b = 2,56; c = 5.',
          'Kiểm chứng: DA² + DB² = 9 + 16 = 25 = AB²; M(1,08; 2,56; 5) nằm giữa A và B (do 0 < 1,08 < 3) và a + b + c = 8,64 (4 ký tự).'
        ]
      },
      {
        id: 'HOT-15', so_cau: 15, nhan: 'Câu 15',
        nguon: 'Dạng kinh điển các trường Chuyên 2025–2026',
        chuyen_de_key: 'cd4', chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một chiếc đèn tròn được treo song song với mặt phẳng nằm ngang bởi <span class="m">3</span> sợi dây không dãn cùng độ dài <span class="m">L = 1 m</span> xuất phát từ điểm <span class="m">O</span> trên trần nhà, buộc vào <span class="m">3</span> điểm <span class="m">A, B, C</span> trên vành đèn sao cho tam giác <span class="m">ABC</span> đều và các góc <span class="m">' + hat('AOB') + ' = ' + hat('BOC') + ' = ' + hat('COA') + ' = 60°</span>. Biết lực căng của mỗi sợi dây đều có độ lớn <span class="m">20 N</span>. Tính trọng lượng của chiếc đèn tròn đó <em>(đơn vị Newton, làm tròn đến hàng phần chục)</em>.',
        dap_an: '49',
        quy_tac_lam_tron: '20√6 ≈ 48,99 ≈ 49,0 N (trên phiếu tô 4 ký tự viết gọn là 49 hoặc 49,0 đều được chấp nhận).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Đèn tròn cân bằng bởi 3 dây đối xứng OA = OB = OC = 1 m, các góc ở đỉnh đều 60° (tức O.ABC là tứ diện đều!), lực căng mỗi dây 20 N.',
          'Đặt ẩn & phân tích lực: Đèn chịu trọng lực ' + vec('P') + ' hướng xuống và 3 lực căng ' + vec('F₁') + ', ' + vec('F₂') + ', ' + vec('F₃') + ' dọc theo ' + vec('AO') + ', ' + vec('BO') + ', ' + vec('CO') + '.',
          'Lập mô hình cân bằng lực: Đèn đứng yên cân bằng nên ' + vec('F₁') + ' + ' + vec('F₂') + ' + ' + vec('F₃') + ' + ' + vec('P') + ' = ' + vec('0') + ' ⇒ P = |' + vec('F₁') + ' + ' + vec('F₂') + ' + ' + vec('F₃') + '|.',
          'Giải toán: Bình phương vô hướng với F₁=F₂=F₃=20 N và mọi góc cặp đôi bằng 60°: P² = 3·20² + 2·3·20·20·cos 60° = 1200 + 1200 = 2400 ⇒ P = ' + sqrt('2400') + ' = 20' + sqrt('6') + '.',
          'Đối chiếu thực tế: 20√6 ≈ 48,9898 N, làm tròn đến hàng phần chục bằng 49,0 N (ghi phiếu gọn: 49).'
        ],
        loi_giai: [
          'Dữ kiện: 3 dây OA = OB = OC = 1 m, góc đôi một 60°, F₁ = F₂ = F₃ = 20 N.',
          'Yêu cầu: Tính trọng lượng P của đèn (N, hàng phần chục).',
          'Điều kiện: Vật ở trạng thái cân bằng tĩnh nên hợp lực các lực căng triệt tiêu trọng lực.',
          'Ý tưởng: Dùng bình phương vô hướng tổng 3 vectơ lực căng (hoặc tính chiều cao O.ABC có góc α với cạnh bên thỏa cos α = √6/3 ⇒ P = 3F·cos α).',
          'Biến đổi: P² = F₁² + F₂² + F₃² + 2(F₁F₂cos60° + F₂F₃cos60° + F₃F₁cos60°) = 3·400 + 6·400·(1/2) = 2400 ⇒ P = 20√6 ≈ 48,99.',
          'Kiểm chứng: Cách hình học: tứ diện đều cạnh 1 có h = √(2/3), cos α = h/1 = √(2/3) ⇒ P = 3·20·√(2/3) = 20√6 ≈ 49,0 N. Đáp số phiếu tô: 49.'
        ]
      },

      /* ==================== 5. C5-GQ2.2 HIỂU (CÂU 16–17) ==================== */
      {
        id: 'HOT-16', so_cau: 16, nhan: 'Câu 16',
        nguon: 'Chuyển hóa từ Đề THPT Cửa Lò – Nghệ An lần 1 – 2026',
        chuyen_de_key: 'cd56', chu_de: 4, tieu_muc: '4.2', ma_lenh: 'C5-GQ2.2', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Trong không gian <span class="m">Oxyz</span> (đơn vị trên mỗi trục là <span class="m">km</span>), mặt phẳng <span class="m">(Oxy)</span> trùng với mặt đất. Một tên lửa phóng từ gốc tọa độ <span class="m">O(0; 0; 0)</span> chuyển động thẳng với vận tốc không đổi, sau <span class="m">8</span> phút đi đến điểm <span class="m">A(140; 60; 6)</span>. Hỏi sau <span class="m">10</span> phút tiếp theo kể từ vị trí <span class="m">A</span>, tên lửa đạt độ cao bao nhiêu <span class="m">km</span> so với mặt đất?',
        dap_an: '13,5',
        quy_tac_lam_tron: 'Nhập số thập phân đúng (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: Chuyển động thẳng đều từ O(0;0;0); sau 8 phút đến A(140; 60; 6); xét tiếp 10 phút kể từ A.',
          'Yêu cầu: Tính độ cao z_B (km) so với (Oxy) sau 10 phút tiếp theo.',
          'Điều kiện: Chuyển động thẳng vận tốc không đổi nên vectơ độ dời tỉ lệ thuận với thời gian.',
          'Ý tưởng: Tổng thời gian kể từ O là 8 + 10 = 18 phút nên OB = (18/8)OA.',
          'Biến đổi: ' + vec('OB') + ' = ' + frac('18', '8') + vec('OA') + ' = ' + frac('9', '4') + vec('OA') + ' ⇒ độ cao z_B = ' + frac('9', '4') + '·z_A = ' + frac('9', '4') + '·6 = 13,5 (km).',
          'Kiểm chứng: Tốc độ tăng độ cao theo phút là 6/8 = 0,75 km/phút; sau 18 phút đạt 18·0,75 = 13,5 km (4 ký tự).'
        ]
      },
      {
        id: 'HOT-17', so_cau: 17, nhan: 'Câu 17',
        nguon: 'Chuyển hóa từ Đề THPT Nguyễn Trung Thiên – Hà Tĩnh – 2026',
        chuyen_de_key: 'cd56', chu_de: 4, tieu_muc: '4.2', ma_lenh: 'C5-GQ2.2', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Trong không gian <span class="m">Oxyz</span>, cho hai điểm <span class="m">A(2; −2; 1)</span> và <span class="m">B(0; 1; 2)</span>. Biết điểm <span class="m">M(a; b; 0)</span> thuộc mặt phẳng <span class="m">(Oxy)</span> sao cho ba điểm <span class="m">A, B, M</span> thẳng hàng. Tính giá trị của <span class="m">a − 2b</span>.',
        dap_an: '14',
        quy_tac_lam_tron: 'Nhập số nguyên đúng (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: A(2; −2; 1), B(0; 1; 2), M(a; b; 0) ∈ (Oxy), ba điểm A, B, M thẳng hàng.',
          'Yêu cầu: Tính giá trị biểu thức a − 2b.',
          'Điều kiện: Không có điểm nào trùng nhau; vectơ AB có 3 thành phần đều khác 0.',
          'Ý tưởng: Ba điểm A, B, M thẳng hàng khi và chỉ khi hai vectơ AM và AB cùng phương (lập tỉ số tọa độ tương ứng).',
          'Biến đổi: ' + vec('AB') + ' = (−2; 3; 1) và ' + vec('AM') + ' = (a − 2; b + 2; −1). Để ' + vec('AM') + ' = k·' + vec('AB') + ': ' + frac('a − 2', '−2') + ' = ' + frac('b + 2', '3') + ' = ' + frac('−1', '1') + ' = −1 ⇒ a − 2 = 2 ⇔ a = 4; b + 2 = −3 ⇔ b = −5. Vậy a − 2b = 4 − 2(−5) = 14.',
          'Kiểm chứng: Với M(4; −5; 0) thì AM = (2; −3; −1) = −AB đúng thẳng hàng. Đáp số: 14 (2 ký tự).'
        ]
      },

      /* ==================== 6. C6-GQ2.1 HIỂU (CÂU 18–20) ==================== */
      {
        id: 'HOT-18', so_cau: 18, nhan: 'Câu 18',
        nguon: 'Đề chính thức TN THPT 2026 – Mã 101',
        chuyen_de_key: 'cd56', chu_de: 5, tieu_muc: '5.1-5.2', ma_lenh: 'C6-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Cho hình lập phương <span class="m">ABCD.MNPQ</span> có cạnh bằng <span class="m">6</span>. Gọi <span class="m">E</span> là trung điểm của đoạn thẳng <span class="m">AB</span>. Tính khoảng cách từ điểm <span class="m">P</span> đến mặt phẳng <span class="m">(MED)</span> <em>(làm tròn kết quả cuối cùng đến hàng phần trăm)</em>.',
        dap_an: '7,35',
        quy_tac_lam_tron: 'Làm tròn kết quả đến hàng phần trăm (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: Hình lập phương ABCD.MNPQ cạnh 6; E là trung điểm AB.',
          'Yêu cầu: Tính khoảng cách d(P, (MED)) làm tròn hàng phần trăm.',
          'Điều kiện: Chú ý thứ tự đỉnh mặt trên: M trên A, N trên B, P trên C, Q trên D.',
          'Ý tưởng: Chọn một trong hai cách chuẩn: Cách 1 quy đổi d(P, (MED)) về chân A của tứ diện vuông AMED; Cách 2 tọa độ hóa nhanh với gốc A(0;0;0).',
          'Biến đổi:\n• Cách 1 (Hình học cổ điển): Tứ diện AMED có AE, AD, AM đôi một vuông góc với AE = 3, AD = AM = 6 ⇒ ' + frac('1', 'd²(A,(MED))') + ' = ' + frac('1', '3²') + ' + ' + frac('1', '6²') + ' + ' + frac('1', '6²') + ' = ' + frac('1', '6') + ' ⇒ d(A,(MED)) = ' + sqrt('6') + '. Vì ' + vec('AP') + ' = 2' + vec('AE') + ' + ' + vec('AD') + ' + ' + vec('AM') + ' nên tỉ số khoảng cách từ P và A tới (MED) là |2 + 1 + 1 − 1| = 3 ⇒ d(P,(MED)) = 3' + sqrt('6') + ' ≈ 7,3485.\n• Cách 2 (Tọa độ hóa nhanh): Gắn A(0;0;0), E(3;0;0), D(0;6;0), M(0;0;6), P(6;6;6). Mặt phẳng theo đoạn chắn (MED): ' + frac('x', '3') + ' + ' + frac('y', '6') + ' + ' + frac('z', '6') + ' = 1 ⇔ 2x + y + z − 6 = 0 ⇒ d(P,(MED)) = ' + frac('|2·6 + 6 + 6 − 6|', sqrt('2² + 1² + 1²')) + ' = ' + frac('18', sqrt('6')) + ' = 3' + sqrt('6') + ' ≈ 7,35.',
          'Kiểm chứng: Cả hai cách đều cho 3√6 ≈ 7,34847; làm tròn hàng phần trăm được 7,35 (4 ký tự).'
        ]
      },
      {
        id: 'HOT-19', so_cau: 19, nhan: 'Câu 19',
        nguon: 'Sở GD&ĐT Vĩnh Long – 2026',
        chuyen_de_key: 'cd56', chu_de: 5, tieu_muc: '5.1-5.2', ma_lenh: 'C6-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Một khối đá có dạng hình lăng trụ tam giác đều <span class="m">ABC.A\'B\'C\'</span> với cạnh đáy bằng <span class="m">2 dm</span>, khoảng cách từ điểm <span class="m">A\'</span> đến mặt phẳng <span class="m">(AB\'C\')</span> bằng <span class="m">' + frac(sqrt('3'), '2') + ' dm</span>. Tìm khoảng cách giữa hai mặt phẳng đáy của khối đá hình lăng trụ đã cho <em>(đơn vị dm)</em>.',
        dap_an: '1',
        quy_tac_lam_tron: 'Nhập số nguyên đúng (đơn vị dm), tối đa 4 ký tự.',
        loi_giai: [
          'Dữ kiện: Lăng trụ tam giác đều ABC.A\'B\'C\' cạnh đáy 2 dm; d(A\', (AB\'C\')) = √3/2 dm.',
          'Yêu cầu: Tính khoảng cách giữa hai mặt đáy, chính là chiều cao h = AA\' (dm).',
          'Điều kiện: AA\' ⊥ (A\'B\'C\') và ΔA\'B\'C\' đều cạnh 2.',
          'Ý tưởng: Từ A\' dựng trung điểm M\' của B\'C\' để kẻ 2 nét vuông góc từ chân A\' đến mặt nghiêng (AB\'C\').',
          'Biến đổi: Gọi M\' là trung điểm B\'C\' ⇒ A\'M\' ⊥ B\'C\' và A\'M\' = ' + frac('2' + sqrt('3'), '2') + ' = ' + sqrt('3') + '. Mặt khác AA\' ⊥ B\'C\' ⇒ B\'C\' ⊥ (AA\'M\'). Trong ΔAA\'M\' vuông tại A\', đường cao từ A\' chính là d(A\', (AB\'C\')): ' + frac('1', 'd²') + ' = ' + frac('1', 'h²') + ' + ' + frac('1', 'A\'M\'²') + ' ⇔ ' + frac('4', '3') + ' = ' + frac('1', 'h²') + ' + ' + frac('1', '3') + ' ⇔ ' + frac('1', 'h²') + ' = 1 ⇒ h = 1 (dm).',
          'Kiểm chứng: Kiểm tra lại 1/√(1 + 1/3) = √3/2 đúng giả thiết. Đáp số: 1 (1 ký tự).'
        ]
      },
      {
        id: 'HOT-20', so_cau: 20, nhan: 'Câu 20',
        nguon: 'Sở GD&ĐT Lạng Sơn lần 1 – 2026',
        chuyen_de_key: 'cd56', chu_de: 5, tieu_muc: '5.1-5.2', ma_lenh: 'C6-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Cho hình lăng trụ đứng <span class="m">ABC.A\'B\'C\'</span> có đáy <span class="m">ABC</span> là tam giác vuông tại <span class="m">A</span>, biết <span class="m">AB = 2</span>, <span class="m">AC = 3</span>, <span class="m">AA\' = 4</span>. Gọi <span class="m">M</span> là trung điểm của <span class="m">AB</span>. Tính khoảng cách giữa hai đường thẳng <span class="m">A\'B</span> và <span class="m">CM</span> <em>(làm tròn kết quả đến hàng phần trăm)</em>.',
        dap_an: '0,86',
        quy_tac_lam_tron: 'Làm tròn kết quả đến hàng phần trăm (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: Lăng trụ đứng ABC.A\'B\'C\', đáy vuông tại A, AB = 2, AC = 3, AA\' = 4; M trung điểm AB.',
          'Yêu cầu: Tính khoảng cách d(A\'B, CM) làm tròn hàng phần trăm.',
          'Điều kiện: AM = 1, AA\' ⊥ (ABC).',
          'Ý tưởng: Lấy N là trung điểm AA\' để tạo mặt phẳng (CMN) song song A\'B, đưa về khoảng cách từ chân vuông góc A tới (CMN).',
          'Biến đổi: Vì MN là đường trung bình ΔAA\'B nên MN ∥ A\'B ⇒ A\'B ∥ (CMN) ⇒ d(A\'B, CM) = d(B, (CMN)). Mặt khác M là trung điểm AB và M ∈ (CMN) nên d(B, (CMN)) = d(A, (CMN)). Xét tứ diện AMCN vuông tại A (AM = 1, AC = 3, AN = 2): ' + frac('1', 'd²(A,(CMN))') + ' = ' + frac('1', '1²') + ' + ' + frac('1', '3²') + ' + ' + frac('1', '2²') + ' = 1 + ' + frac('1', '9') + ' + ' + frac('1', '4') + ' = ' + frac('49', '36') + ' ⇒ d(A\'B, CM) = ' + frac('6', '7') + ' ≈ 0,8571.',
          'Kiểm chứng: (6/7) = 0,85714... làm tròn đến hàng phần trăm được 0,86 (4 ký tự).'
        ]
      }
    ]
  };

  global.TOAN_TLN_HOT_2026 = DATA;
})(window);
