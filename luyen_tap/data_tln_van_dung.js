/* Ngân hàng Chuyên đề Trả lời ngắn Mức Vận dụng & Mở rộng — TN THPT 2026 (100% Offline) */
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
      tieu_de: 'Tổng hợp các dạng bài Trả lời ngắn mức Vận dụng & Phương pháp giải (TN THPT 2026)',
      so_cau_tln: 6,
      so_cau_vd: 4,
      so_cau_hieu: 2,
      so_ky_tu_toi_da: 4
    },

    ma_tran_tln: [
      { cau: 'Câu 1', chu_de: '1. Ứng dụng đạo hàm', noi_dung: '1.2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số', ma_lenh: 'C1-MHH2.2', cap_do: 'Vận dụng', nang_luc: 'MHH' },
      { cau: 'Câu 2', chu_de: '1. Ứng dụng đạo hàm', noi_dung: '1.4. Khảo sát và vẽ đồ thị của hàm số', ma_lenh: 'C2-GQ2.2', cap_do: 'Vận dụng', nang_luc: 'GQ' },
      { cau: 'Câu 3', chu_de: '3. Tổ hợp – Xác suất', noi_dung: '3.2. Xác suất của biến cố & 3.3. Quy tắc tính xác suất', ma_lenh: 'C3-MHH2.2', cap_do: 'Vận dụng', nang_luc: 'MHH' },
      { cau: 'Câu 4', chu_de: '4. Vectơ trong không gian', noi_dung: '4.1. Vectơ và các phép toán về vectơ trong không gian', ma_lenh: 'C4-MHH2.2', cap_do: 'Vận dụng', nang_luc: 'MHH' },
      { cau: 'Câu 5', chu_de: '4. Vectơ trong không gian', noi_dung: '4.2. Tọa độ của vectơ trong không gian Oxyz', ma_lenh: 'C5-GQ2.2', cap_do: 'Hiểu', nang_luc: 'GQ' },
      { cau: 'Câu 6', chu_de: '5. Quan hệ vuông góc', noi_dung: '5.1. Góc & 5.2. Khoảng cách trong không gian', ma_lenh: 'C6-GQ2.1', cap_do: 'Hiểu', nang_luc: 'GQ' }
    ],

    pham_vi_luu_y: [
      'Hai câu TLN còn lại là C5-GQ2.2 (Tọa độ vectơ) và C6-GQ2.1 (Góc và Khoảng cách) thuộc mức Hiểu, không thuộc nhóm Vận dụng.',
      'Các nội dung 1.1 Tính đơn điệu – cực trị, 1.3 Đường tiệm cận, 2. Lượng giác – Dãy số – CSC – CSN – Mũ – Logarit, 3.1 Nhị thức Newton và 5. Quan hệ vuông góc không xuất hiện câu Trả lời ngắn ở mức Vận dụng.',
      'Phiếu tô Phần III chỉ chứa tối đa 4 ký tự (kể cả dấu trừ "−" và dấu phẩy ","). Cần đọc kỹ yêu cầu làm tròn (hàng đơn vị, phần mười, phần trăm) và kiểm tra đúng đơn vị đo.'
    ],

    chien_luoc_bay: [
      {
        ma_cau: 'C1-MHH2.2 (GTLN – GTNN)',
        cong_cu: 'Quy về hàm 1 biến, đạo hàm f\'(x) = 0, so sánh hai đầu mút hoặc lập BBT.',
        bay_can_tranh: 'Quên kiểm tra điều kiện nguyên của sản lượng; trả lời nhầm giữa x₀ và f(x₀); quên đổi đơn vị (tấn ↔ kg, dm ↔ m); nhầm cực đại hàm f(t) với tốc độ tăng lớn nhất (f"(t) = 0).'
      },
      {
        ma_cau: 'C2-GQ2.2 (Khảo sát hàm số)',
        cong_cu: 'Viết dạng tách phần nguyên cho hàm phân thức; công thức a + b cho |f(x)|; cô lập tham số m.',
        bay_can_tranh: 'Quên loại điểm tiếp xúc bậc chẵn khi đếm nghiệm cắt trục Ox; quên điều kiện a ≠ 0 hoặc ĐKXĐ mẫu số; nhầm dấu của cực đại và cực tiểu khi đọc đồ thị.'
      },
      {
        ma_cau: 'C3-MHH2.2 (Xác suất)',
        cong_cu: 'Phân biệt chỉnh hợp A(n,k) và tổ hợp C(n,k); kỹ thuật bó buộc/vách ngăn; biến cố đối; sơ đồ cây.',
        bay_can_tranh: 'Nhầm lẫn giữa biến cố xung khắc và biến cố độc lập; đếm lặp hoặc thiếu trường hợp khi chia nhánh; quên trừ P(A∩B) khi dùng quy tắc cộng mở rộng; không cập nhật lại mẫu số khi rút không hoàn lại.'
      },
      {
        ma_cau: 'C4-MHH2.2 (Vectơ 3D)',
        cong_cu: 'Cân bằng T = P/(n·cos α); bình phương vô hướng |∑Fᵢ|²; phân tích theo bộ 3 vectơ cơ sở.',
        bay_can_tranh: 'Nhầm góc giữa hai vectơ (không đưa về cùng điểm đầu) dẫn đến sai dấu cos(u, v); quên dấu giá trị tuyệt đối khi tính cos góc giữa hai đường thẳng; dùng sai gia tốc trọng trường (g = 9,8 hay g = 10 m/s²).'
      }
    ],

    chuyen_de: [
      {
        key: 'cd1',
        tabLabel: 'CĐ 1: GTLN–GTNN (C1-MHH2.2)',
        tieu_de: 'Chuyên đề 1 (Câu 1 – C1-MHH2.2): Giá trị lớn nhất và giá trị nhỏ nhất của hàm số',
        dinh_huong: 'Chuyển hóa một tình huống thực tiễn (hình học, kỹ thuật, kinh tế, chuyển động) thành bài toán tìm GTLN/GTNN của hàm số một biến trên một đoạn hoặc khoảng xác định, sử dụng đạo hàm để giải quyết và đối chiếu lại điều kiện thực tế.',
        quy_trinh: [
          'Bước 1 (Chọn ẩn & điều kiện): Đặt đại lượng thay đổi làm ẩn x (kèm đơn vị) và xác định miền giá trị hợp lý (x > 0, a ≤ x ≤ b, hoặc x ∈ ℕ*).',
          'Bước 2 (Xây dựng hàm mục tiêu): Dùng hệ thức hình học (Pytago, tam giác đồng dạng, diện tích/thể tích), công thức kinh tế hoặc vật lý đưa về 1 biến y = f(x).',
          'Bước 3 (Khảo sát bằng đạo hàm): Tính f\'(x), giải f\'(x) = 0, lập BBT (khoảng mở) hoặc so sánh f(xᵢ) với hai đầu mút (đoạn [a; b]).',
          'Bước 4 (Kết luận): Trả lời đúng đại lượng đề hỏi (giá trị tối ưu hay giá trị biến x*) và làm tròn chuẩn 4 ký tự.'
        ],
        dang_bai: [
          {
            ten: 'Dạng 1.1. Tối ưu hóa hình học, chi phí lắp đặt và đường đi ngắn nhất',
            nhan_dien: 'Cắt gấp vật liệu (hình hộp, hình trụ, hình nón) để tối đa hóa thể tích hoặc tối thiểu hóa diện tích toàn phần/chi phí; bài toán chọn điểm trung gian nối dây điện, đường ống dẫn dầu qua hai môi trường khác đơn giá/vận tốc.',
            cong_thuc: 'Hình hộp chữ nhật: V = abh; S_xq = 2(a+b)h; S_đáy = ab. Hình trụ: V = πr²h; S_xq = 2πrh; S_tp = 2πrh + 2πr². Hình nón: l = √(r²+h²); V = (1/3)πr²h; S_xq = πrl.'
          },
          {
            ten: 'Dạng 1.2. Bài toán tối ưu kinh tế (doanh thu, lợi nhuận, chi phí trung bình)',
            nhan_dien: 'Cho quan hệ tuyến tính giữa giá bán p và sản lượng Q (giảm/tăng giá kéo theo lượng tiêu thụ thay đổi), hoặc cho sẵn hàm tổng chi phí C(x) và hàm cầu p(x).',
            cong_thuc: 'Doanh thu R(x) = p(x)·Q(x). Lợi nhuận L(x) = (Giá bán − Chi phí đơn vị)·Q(x) − Chi phí cố định. Chi phí trung bình C̄(x) = C(x)/x. Mẹo ẩn nguyên: so sánh giá trị hàm tại ⌊x₀⌋ và ⌈x₀⌉.'
          },
          {
            ten: 'Dạng 1.3. Bài toán tối ưu vật lý, chuyển động, nhiên liệu và sinh học',
            nhan_dien: 'Mô hình hóa v(t) = s\'(t), a(t) = v\'(t); tàu chạy ngược/xuôi dòng tối thiểu chi phí nhiên liệu; thời điểm nồng độ/tốc độ tăng trưởng cực đại.',
            cong_thuc: 'Phân biệt kỹ: "Đại lượng f(t) đạt GTLN/GTNN" ⇒ giải f\'(t) = 0; "f(t) tăng nhanh nhất (tốc độ thay đổi lớn nhất)" ⇒ tìm GTLN của f\'(t), tức giải f"(t) = 0.'
          }
        ],
        truc_quan_link: '../truc_quan/02_phong_lab_toi_uu_mhh.html',
        truc_quan_label: 'Mở Phòng Lab 2: Tối ưu Gấp hộp, Rào vườn & Đường ống dẫn dầu'
      },
      {
        key: 'cd2',
        tabLabel: 'CĐ 2: Khảo sát & Đồ thị (C2-GQ2.2)',
        tieu_de: 'Chuyên đề 2 (Câu 2 – C2-GQ2.2): Khảo sát và vẽ đồ thị của hàm số',
        dinh_huong: 'Vận dụng tổng hợp các đặc trưng đồ thị ba lớp hàm trọng tâm GDPT 2018 (bậc ba, bậc 1/bậc 1, bậc 2/bậc 1) để khôi phục công thức hàm số, giải bài toán tham số/tương giao/trị tuyệt đối và tính chất hình học trên đồ thị.',
        quy_trinh: [],
        dang_bai: [
          {
            ten: 'Dạng 2.1. Khôi phục công thức hàm số từ đồ thị, BBT hoặc dữ kiện tiệm cận – cực trị',
            nhan_dien: 'Cho hình dáng đồ thị, bảng biến thiên hoặc giả thiết tiệm cận đứng/ngang/xiên, điểm cực trị để xác định hệ số a, b, c, d.',
            cong_thuc: 'Bậc ba: đọc d = y(0) từ giao Oy; từ 2 cực trị x₁, x₂ viết y\' = 3a(x−x₁)(x−x₂); tâm đối xứng I(−b/(3a); y_I) là trung điểm 2 cực trị. Bậc 2/Bậc 1: tách y = px + q + k/(mx+n), khai thác TCĐ x = −n/m, TCX y = px+q và điểm cực trị.'
          },
          {
            ten: 'Dạng 2.2. Tham số, tương giao và số điểm cực trị hàm trị tuyệt đối / hàm hợp',
            nhan_dien: 'Đếm số giá trị nguyên tham số m để phương trình có k nghiệm hoặc đồ thị y = |f(x)|, y = f(|x|) có đúng số cực trị cho trước.',
            cong_thuc: 'Cô lập tham số f(x) = g(m). Đồ thị y = |f(x)| có (a + b) điểm cực trị (a: số cực trị của f; b: số nghiệm bội lẻ của f(x) = 0). Đồ thị y = f(|x|) có (2k + 1) cực trị (k: số cực trị dương của f).'
          },
          {
            ten: 'Dạng 2.3. Tính chất hình học của đồ thị (khoảng cách, cực trị, đối xứng, tiếp tuyến)',
            nhan_dien: 'Tính tích/tổng khoảng cách từ M ∈ (C) đến các tiệm cận, độ dài đoạn nối 2 cực trị, hoặc viết đường thẳng qua 2 cực trị.',
            cong_thuc: 'Đặt M(x₀; y₀) theo biến phụ t = |mx₀ + n| > 0 và dùng AM-GM At + B/t ≥ 2√(AB). Với hàm bậc ba, đường thẳng qua 2 cực trị là phần dư r(x) khi chia f(x) cho f\'(x).'
          }
        ],
        truc_quan_link: '../truc_quan/01_khao_sat_va_tuong_giao.html',
        truc_quan_label: 'Mở Phòng 1: Khảo sát 3 họ hàm, Tiệm cận & Tương giao tham số m'
      },
      {
        key: 'cd3',
        tabLabel: 'CĐ 3: Xác suất (C3-MHH2.2)',
        tieu_de: 'Chuyên đề 3 (Câu 3 – C3-MHH2.2): Xác suất của biến cố và Quy tắc tính xác suất',
        dinh_huong: 'Mô hình hóa một tình huống ngẫu nhiên thực tế (xếp chỗ, chọn nhân sự, kiểm tra chất lượng, hệ thống kỹ thuật, thí nghiệm nhiều bước) bằng không gian mẫu, tổ hợp hoặc hệ biến cố rồi vận dụng linh hoạt các quy tắc tính xác suất.',
        quy_trinh: [],
        dang_bai: [
          {
            ten: 'Dạng 3.1. Xác suất cổ điển kết hợp bài toán đếm có ràng buộc',
            nhan_dien: 'Bài toán xếp hàng ghế, chọn đoàn công tác, chia tổ có điều kiện đứng kề hoặc không đứng cạnh nhau.',
            cong_thuc: 'Phân biệt có thứ tự (Pₙ = n!, chỉnh hợp A(n,k)) và không thứ tự (tổ hợp C(n,k)). Kỹ thuật bó buộc (gom nhóm đứng kề); kỹ thuật vách ngăn (xếp nhóm còn lại tạo khoảng trống trước); biến cố đối P(A) = 1 − P(Ā).'
          },
          {
            ten: 'Dạng 3.2. Quy tắc nhân biến cố độc lập & quy tắc cộng mở rộng',
            nhan_dien: 'Hệ thống cảm biến/linh kiện mắc nối tiếp – song song, xạ thủ bắn độc lập vào bia, bài toán thi đấu.',
            cong_thuc: 'Độc lập: P(A∩B) = P(A)P(B). Cộng tổng quát: P(A∪B) = P(A) + P(B) − P(A∩B). Hệ nối tiếp: P = P(A₁)...P(Aₙ). Hệ song song (ít nhất 1 hoạt động): P = 1 − P(Ā₁)...P(Āₙ).'
          },
          {
            ten: 'Dạng 3.3. Phép thử nhiều bước phụ thuộc (Sơ đồ cây & chia trường hợp xung khắc)',
            nhan_dien: 'Rút vật từ hộp I bỏ sang hộp II rồi rút từ hộp II; chọn dây chuyền sản xuất rồi kiểm định phế phẩm.',
            cong_thuc: 'Liệt kê hệ kịch bản đầy đủ đôi một xung khắc (H₁, H₂, ..., Hₖ) ở bước 1; cập nhật lại tử/mẫu thực tế ở bước 2; cộng xác suất các nhánh thuận lợi P(B) = ∑P(Hᵢ∩B).'
          }
        ],
        truc_quan_link: '../truc_quan/04_mu_log_va_xac_suat_mhh.html',
        truc_quan_label: 'Mở Phòng 4: Sơ đồ cây Bayes & Mô phỏng Monte Carlo Xác suất'
      },
      {
        key: 'cd4',
        tabLabel: 'CĐ 4: Vectơ 3D (C4-MHH2.2)',
        tieu_de: 'Chuyên đề 4 (Câu 4 – C4-MHH2.2): Vectơ và các phép toán về vectơ trong không gian',
        dinh_huong: 'Chuyển hóa hiện tượng cơ học – kỹ thuật trong không gian 3D (vật treo cân bằng nhiều dây cáp, tổng hợp lực đồng quy, công cơ học, kết cấu khung giàn) thành phép cộng/trừ vectơ, nhân số với vectơ và tích vô hướng.',
        quy_trinh: [],
        dang_bai: [
          {
            ten: 'Dạng 4.1. Cân bằng lực vật treo đối xứng trong không gian (đèn chùm, cần cẩu, dây cáp)',
            nhan_dien: 'Vật nặng khối lượng m (P = mg) treo cân bằng bởi 3 dây (tạo chóp tam giác đều) hoặc 4 dây (tạo chóp tứ giác đều).',
            cong_thuc: 'Điều kiện cân bằng: F₁ + ... + Fₙ + P = 0. Trọng tâm đáy G (3 dây): AS + BS + CS = 3GS; tâm O (4 dây): AS + BS + CS + DS = 4OS. Công thức nhanh n dây nghiêng góc α: T = P / (n·cos α).'
          },
          {
            ten: 'Dạng 4.2. Tổng hợp nhiều lực không đồng phẳng & công cơ học của lực',
            nhan_dien: 'Tính độ lớn hợp lực F = F₁ + F₂ + F₃ khi biết độ lớn từng lực và các góc đôi một; tính công cơ học dịch chuyển theo vectơ d.',
            cong_thuc: '|F|² = F₁² + F₂² + F₃² + 2F₁F₂cos(F₁,F₂) + 2F₂F₃cos(F₂,F₃) + 2F₃F₁cos(F₃,F₁). Công cơ học: A = F·d = |F||d|cos(F, d) (đưa về cùng điểm đầu trước khi lấy góc).'
          },
          {
            ten: 'Dạng 4.3. Tính góc & độ dài trong mô hình không gian bằng bộ 3 vectơ cơ sở',
            nhan_dien: 'Khung giàn lập phương, hình hộp, lăng trụ đứng, tứ diện đều hỏi góc giữa hai thanh giằng hoặc khoảng cách giữa hai nút.',
            cong_thuc: 'Chọn bộ 3 vectơ cơ sở x, y, z không đồng phẳng, biểu diễn chỉ phương u, v theo x, y, z rồi tính cos(d₁, d₂) = |u·v| / (|u|·|v|). Mẹo: gắn hệ trục Oxyz tạm cho hình hộp/lập phương để đối chiếu nhanh.'
          }
        ],
        truc_quan_link: '../truc_quan/03_vecto_va_hinh_hoc_3d.html',
        truc_quan_label: 'Mở Phòng 3: Vectơ Oxyz & Hợp lực không gian 3D'
      },
      {
        key: 'cd56',
        tabLabel: 'Mở rộng Hiểu: C5 & C6',
        tieu_de: 'Mở rộng: 2 câu Trả lời ngắn mức Hiểu theo Ma trận (C5-GQ2.2 và C6-GQ2.1)',
        dinh_huong: 'Hoàn thiện trọn vẹn cả 6 câu Trả lời ngắn của Ma trận TN THPT 2026: C5-GQ2.2 (Tọa độ vectơ Oxyz) và C6-GQ2.1 (Góc và Khoảng cách trong không gian).',
        quy_trinh: [],
        dang_bai: [
          {
            ten: 'Câu 5 (C5-GQ2.2 – Hiểu): Tọa độ của vectơ trong không gian Oxyz',
            nhan_dien: 'Tìm đỉnh thứ tư hình bình hành/hình hộp, trung điểm, trọng tâm, điểm chia đoạn theo tỉ số; tính độ dài, tích vô hướng u·v = x₁x₂+y₁y₂+z₁z₂; định vị flycam/mục tiêu thực tiễn.',
            cong_thuc: 'AB = (x_B−x_A; y_B−y_A; z_B−z_A); hình bình hành ABCD ⇔ AB = DC (D = A + C − B); cos(u, v) = (u·v)/(|u|·|v|) có thể âm khi góc tù.'
          },
          {
            ten: 'Câu 6 (C6-GQ2.1 – Hiểu): Góc và Khoảng cách trong không gian (Quan hệ vuông góc)',
            nhan_dien: 'Góc đường – mặt, góc phẳng nhị diện [P, d, Q]; khoảng cách từ chân đường cao (kẻ 2 nét) hoặc dời điểm qua tỉ số khoảng cách; khoảng cách hai đường thẳng chéo nhau.',
            cong_thuc: 'Kẻ 2 nét từ chân đường cao A: kẻ AK ⊥ d, trong ΔSAK kẻ AH ⊥ SK ⇒ d(A, (S, d)) = AH = (SA·AK)/√(SA²+AK²).'
          }
        ],
        truc_quan_link: '../truc_quan/03_vecto_va_hinh_hoc_3d.html',
        truc_quan_label: 'Mở Phòng 3: Hình chóp S.ABCD, Góc nhị diện [S, BD, A] & Khoảng cách 3D'
      }
    ],

    vi_du_chuyen_de: [
      {
        id: 'VD-1.1', chuyen_de_key: 'cd1', nhan: 'Ví dụ minh họa 1.1', so_cau: 1, chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một công ty cần xây dựng một đường ống dẫn dầu từ điểm <span class="m">A</span> trên bờ biển đến một giàn khoan ở điểm <span class="m">C</span> ngoài khơi. Biết điểm <span class="m">C</span> cách bờ biển một khoảng <span class="m">CB = 6 km</span> (với <span class="m">B</span> là hình chiếu vuông góc của <span class="m">C</span> trên bờ biển) và khoảng cách dọc bờ biển <span class="m">AB = 9 km</span>. Chi phí lắp đặt đường ống trên bờ là <span class="m">100</span> triệu đồng/km và dưới biển là <span class="m">260</span> triệu đồng/km. Người ta chọn một điểm <span class="m">M</span> nằm giữa <span class="m">A</span> và <span class="m">B</span> để lắp ống dọc theo <span class="m">AM</span> rồi đi thẳng dưới biển theo <span class="m">MC</span>. Tính tổng chi phí lắp đặt nhỏ nhất (đơn vị: triệu đồng).',
        dap_an: '2340',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Cần chọn điểm nối M trên đoạn AB (dài 9 km) để tối thiểu tổng chi phí lắp trên bờ (100 tr/km) và dưới biển (260 tr/km), biết CB = 6 km vuông góc bờ.',
          'Đặt ẩn & điều kiện thực tế: Đặt BM = x (km) với 0 ≤ x ≤ 9.',
          'Lập hàm mục tiêu: Trên bờ AM = 9 − x (km); dưới biển MC = ' + sqrt('x² + 36') + ' (km). Tổng chi phí C(x) = 100(9 − x) + 260' + sqrt('x² + 36') + ' (triệu đồng).',
          'Giải toán: C\'(x) = −100 + ' + frac('260x', sqrt('x² + 36')) + ' = 0 ⇔ 13x = 5' + sqrt('x² + 36') + ' ⇒ 169x² = 25(x² + 36) ⇔ x = 2,5 ∈ [0; 9].',
          'Đối chiếu thực tế: So sánh C(0) = 2460, C(2,5) = 650 + 260·6,5 = 2340, C(9) ≈ 2812,3 ⇒ chi phí nhỏ nhất là 2340 triệu đồng.'
        ],
        loi_giai: [
          'Dữ kiện: AB = 9 km, CB = 6 km (CB ⊥ AB), đơn giá bờ 100 tr/km, biển 260 tr/km.',
          'Yêu cầu: Tính tổng chi phí lắp đặt nhỏ nhất (triệu đồng).',
          'Điều kiện: Đặt BM = x (km), 0 ≤ x ≤ 9.',
          'Ý tưởng: Biểu diễn chiều dài AM và MC (Pytago) theo x để đưa C(x) về hàm 1 biến trên đoạn đóng [0; 9].',
          'Biến đổi: C(x) = 900 − 100x + 260' + sqrt('x² + 36') + '; C\'(x) = 0 ⇔ 144x² = 900 ⇔ x = 2,5. Tính C(0) = 2460, C(2,5) = 2340, C(9) = 260' + sqrt('117') + ' ≈ 2812,3.',
          'Kiểm chứng: x = 2,5 cho tam giác vuông CBM bộ ba Pitago 2,5–6–6,5 (MC = 6,5 km); AM = 6,5 km ⇒ C = 650 + 1690 = 2340 (4 ký tự).'
        ]
      },
      {
        id: 'VD-1.2', chuyen_de_key: 'cd1', nhan: 'Ví dụ minh họa 1.2', so_cau: 2, chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một xưởng sản xuất nhận thấy nếu bán một sản phẩm với giá <span class="m">200</span> nghìn đồng thì mỗi tháng bán được <span class="m">240</span> sản phẩm. Theo khảo sát thị trường, cứ giảm giá bán đi <span class="m">5</span> nghìn đồng cho mỗi sản phẩm thì số lượng sản phẩm bán ra mỗi tháng tăng thêm <span class="m">20</span> sản phẩm. Biết chi phí sản xuất mỗi sản phẩm là <span class="m">120</span> nghìn đồng. Hỏi xưởng nên bán mỗi sản phẩm với giá bao nhiêu nghìn đồng để lợi nhuận thu được mỗi tháng là lớn nhất?',
        dap_an: '190',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự (chú ý đề hỏi GIÁ BÁN p).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Giá gốc 200k bán 240 sp; giảm 5k tăng 20 sp; giá vốn 120k/sp. Tìm giá bán p để lợi nhuận tháng lớn nhất.',
          'Đặt ẩn & điều kiện thực tế: Gọi x (nghìn đồng) là số tiền giảm giá mỗi sp (0 ≤ x < 80 để có lãi).',
          'Lập hàm mục tiêu: Giá bán mới p = 200 − x; lãi mỗi sp là (200 − x) − 120 = 80 − x; sản lượng Q(x) = 240 + ' + frac('x', '5') + '·20 = 240 + 4x. Hàm lợi nhuận L(x) = (80 − x)(240 + 4x).',
          'Giải toán: L(x) = −4x² + 80x + 19200 ⇒ L\'(x) = −8x + 80 = 0 ⇔ x = 10 (thỏa mãn). Do L"(x) = −8 < 0 nên L max tại x = 10.',
          'Đối chiếu thực tế: Đề hỏi GIÁ BÁN tối ưu nên p = 200 − 10 = 190 (nghìn đồng).'
        ],
        loi_giai: [
          'Dữ kiện: p₀ = 200k, Q₀ = 240, giảm 5k tăng 20 sp, vốn 120k/sp.',
          'Yêu cầu: Tìm giá bán tối ưu (nghìn đồng) để lợi nhuận tháng đạt GTLN.',
          'Điều kiện: Số tiền giảm giá x thỏa 0 ≤ x < 80.',
          'Ý tưởng: Lập hàm bậc hai lợi nhuận L(x) = (Lãi 1 sp)·(Sản lượng) rồi tìm đỉnh cực đại.',
          'Biến đổi: L(x) = (80 − x)(240 + 4x) = −4x² + 80x + 19200; L\'(x) = −8x + 80 = 0 ⇔ x = 10. Giá bán p = 200 − 10 = 190.',
          'Kiểm chứng: Thử p = 190: lãi 70k × 280 sp = 19.600k; p = 185: lãi 65k × 300 = 19.500k < 19.600k. Đáp số: 190 (3 ký tự).'
        ]
      },
      {
        id: 'VD-1.3', chuyen_de_key: 'cd1', nhan: 'Ví dụ minh họa 1.3', so_cau: 3, chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một con tàu chạy ngược dòng trên một đoạn sông dài <span class="m">120 km</span> với vận tốc khi nước yên lặng là <span class="m">v</span> (km/h). Biết vận tốc dòng nước là <span class="m">6 km/h</span> và chi phí nhiên liệu cho mỗi giờ tàu chạy được tính theo công thức <span class="m">P(v) = 0,05v³</span> (triệu đồng/giờ). Tìm vận tốc <span class="m">v</span> (km/h) để tổng chi phí nhiên liệu cho cả chuyến đi là nhỏ nhất.',
        dap_an: '9',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Quãng đường ngược dòng S = 120 km, vận tốc nước 6 km/h, chi phí mỗi giờ P(v) = 0,05v³ (tr/giờ).',
          'Đặt ẩn & điều kiện thực tế: Tàu đi được ngược dòng khi vận tốc v > 6 (km/h).',
          'Lập hàm mục tiêu: Vận tốc ngược dòng v − 6 ⇒ thời gian t = ' + frac('120', 'v − 6') + '. Tổng chi phí T(v) = t·P(v) = ' + frac('6v³', 'v − 6') + ', v ∈ (6; +∞).',
          'Giải toán: T\'(v) = 6·' + frac('3v²(v − 6) − v³', '(v − 6)²') + ' = ' + frac('12v²(v − 9)', '(v − 6)²') + ' = 0 ⇔ v = 9.',
          'Đối chiếu thực tế: T\'(v) < 0 trên (6; 9) và T\'(v) > 0 trên (9; +∞) nên T(v) nhỏ nhất tại v = 9 (km/h).'
        ],
        loi_giai: [
          'Dữ kiện: S = 120 km, v_nước = 6 km/h, P(v) = 0,05v³ tr/giờ.',
          'Yêu cầu: Tìm v (km/h) để tổng chi phí nhiên liệu T(v) nhỏ nhất.',
          'Điều kiện: v > 6.',
          'Ý tưởng: Viết T(v) = (Quãng đường / Vận tốc thực) · P(v) rồi khảo sát trên khoảng mở (6; +∞).',
          'Biến đổi: T(v) = 6v³/(v − 6) ⇒ T\'(v) = 12v²(v − 9)/(v − 6)² = 0 ⇒ v = 9 (vì v > 6). Qua v = 9 đạo hàm đổi dấu từ − sang +.',
          'Kiểm chứng: T(8) = 1536; T(9) = 1458; T(10) = 1500 ⇒ đúng GTNN tại v = 9 (1 ký tự).'
        ]
      },
      {
        id: 'VD-2.1', chuyen_de_key: 'cd2', nhan: 'Ví dụ minh họa 2.1', so_cau: 4, chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Cho hàm số <span class="m">y = ' + frac('ax² + bx + c', 'x + d') + '</span> có đồ thị <span class="m">(C)</span>. Biết <span class="m">(C)</span> có tiệm cận đứng là đường thẳng <span class="m">x = 1</span>, tiệm cận xiên là đường thẳng <span class="m">y = x + 2</span> và hàm số đạt cực đại tại <span class="m">x = −1</span>. Tính giá trị biểu thức <span class="m">T = a + 2b + 3c − 4d</span>.',
        dap_an: '13',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        loi_giai: [
          'Dữ kiện: y = (ax² + bx + c)/(x + d) có TCĐ x = 1, TCX y = x + 2, cực đại tại x = −1.',
          'Yêu cầu: Tính T = a + 2b + 3c − 4d.',
          'Điều kiện: x + d ≠ 0; hàm đạt cực đại tại x = −1 ⇒ y\'(−1) = 0 và y\' đổi dấu + sang − qua −1.',
          'Ý tưởng: Tách phần nguyên từ giả thiết TCĐ và TCX thành y = x + 2 + k/(x − 1) (k ≠ 0), tìm k rồi quy đồng đọc hệ số.',
          'Biến đổi: TCĐ x = 1 ⇒ 1 + d = 0 ⇒ d = −1. TCX y = x + 2 ⇒ y = x + 2 + k/(x − 1). Đạo hàm y\' = 1 − k/(x − 1)²; y\'(−1) = 0 ⇔ k = 4 (thử lại y\' = (x+1)(x−3)/(x−1)² đạt CĐ tại x = −1). Quy đồng: y = (x² + x + 2)/(x − 1) ⇒ a = 1, b = 1, c = 2, d = −1.',
          'Kiểm chứng: T = 1 + 2(1) + 3(2) − 4(−1) = 1 + 2 + 6 + 4 = 13 (2 ký tự).'
        ]
      },
      {
        id: 'VD-2.2', chuyen_de_key: 'cd2', nhan: 'Ví dụ minh họa 2.2', so_cau: 5, chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Cho hàm số <span class="m">y = f(x) = x³ − 3x² − 9x + m</span> với <span class="m">m</span> là tham số thực. Có bao nhiêu giá trị nguyên của <span class="m">m</span> thuộc đoạn <span class="m">[−20; 30]</span> để đồ thị hàm số <span class="m">y = |f(x)|</span> có đúng <span class="m">5</span> điểm cực trị?',
        dap_an: '31',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        loi_giai: [
          'Dữ kiện: f(x) = x³ − 3x² − 9x + m, m ∈ ℤ ∩ [−20; 30].',
          'Yêu cầu: Tìm số giá trị nguyên của m để y = |f(x)| có đúng 5 điểm cực trị.',
          'Điều kiện: Số cực trị của |f(x)| bằng a + b, với a là số cực trị của f(x) và b là số nghiệm bội lẻ của f(x) = 0.',
          'Ý tưởng: Tìm cực trị của f(x) để xác định a = 2, suy ra điều kiện b = 3 (đồ thị f cắt Ox tại 3 điểm phân biệt).',
          'Biến đổi: f\'(x) = 3x² − 6x − 9 = 0 ⇔ x = −1 hoặc x = 3 ⇒ a = 2, y_CĐ = f(−1) = m + 5, y_CT = f(3) = m − 27. Để b = 3 thì y_CT < 0 < y_CĐ ⇔ m − 27 < 0 < m + 5 ⇔ −5 < m < 27.',
          'Kiểm chứng: Với m ∈ ℤ ∩ [−20; 30] ⇒ m ∈ {−4; −3; ...; 26} ⇒ có 26 − (−4) + 1 = 31 giá trị. Đáp số: 31 (2 ký tự).'
        ]
      },
      {
        id: 'VD-2.3', chuyen_de_key: 'cd2', nhan: 'Ví dụ minh họa 2.3', so_cau: 6, chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Cho hàm số <span class="m">y = ' + frac('x² − 2x + 5', 'x − 1') + '</span> có đồ thị <span class="m">(C)</span> với hai điểm cực trị là <span class="m">A</span> và <span class="m">B</span>. Gọi <span class="m">M</span> là một điểm bất kỳ thuộc <span class="m">(C)</span>; gọi <span class="m">d₁, d₂</span> lần lượt là khoảng cách từ <span class="m">M</span> đến tiệm cận đứng và tiệm cận xiên của <span class="m">(C)</span>. Tính giá trị của biểu thức <span class="m">P = ' + frac('AB', 'd₁ · d₂') + '</span> (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '3,16',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm, dùng dấu phẩy (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: y = (x² − 2x + 5)/(x − 1) = x − 1 + 4/(x − 1); hai cực trị A, B; M ∈ (C).',
          'Yêu cầu: Tính P = AB / (d₁·d₂) làm tròn đến hàng phần trăm.',
          'Điều kiện: x ≠ 1.',
          'Ý tưởng: Biểu diễn d₁, d₂ theo x₀ − 1 để chứng minh d₁·d₂ là hằng số, đồng thời tìm tọa độ A, B để tính độ dài AB.',
          'Biến đổi: TCĐ Δ₁: x − 1 = 0; TCX Δ₂: x − y − 1 = 0. d₁ = |x₀ − 1|; d₂ = |−4/(x₀ − 1)| / ' + sqrt('2') + ' ⇒ d₁·d₂ = 4/' + sqrt('2') + ' = 2' + sqrt('2') + '. Ta có y\' = 1 − 4/(x−1)² = 0 ⇔ x = 3 (y = 4) hoặc x = −1 (y = −4) ⇒ A(3;4), B(−1;−4) ⇒ AB = ' + sqrt('16 + 64') + ' = 4' + sqrt('5') + '.',
          'Kiểm chứng: P = 4' + sqrt('5') + ' / (2' + sqrt('2') + ') = ' + sqrt('10') + ' ≈ 3,1622 ⇒ làm tròn hàng phần trăm được 3,16 (4 ký tự).'
        ]
      },
      {
        id: 'VD-3.1', chuyen_de_key: 'cd3', nhan: 'Ví dụ minh họa 3.1', so_cau: 7, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một đoàn công tác gồm <span class="m">5</span> bác sĩ nam và <span class="m">3</span> bác sĩ nữ được xếp ngẫu nhiên vào một hàng ghế dài gồm <span class="m">8</span> chỗ ngồi đánh số từ <span class="m">1</span> đến <span class="m">8</span>. Tính xác suất để không có hai bác sĩ nữ nào ngồi cạnh nhau (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '0,36',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: 5 bác sĩ nam + 3 bác sĩ nữ xếp vào 8 ghế hàng ngang, không có 2 bác sĩ nữ ngồi cạnh nhau.',
          'Đặt biến cố & điều kiện: Ω là các cách xếp 8 người có thứ tự ⇒ n(Ω) = 8!. Biến cố A: "Không có 2 nữ cạnh nhau".',
          'Lập mô hình đếm (kỹ thuật vách ngăn): Xếp 5 bác sĩ nam trước tạo 6 khoảng trống (4 giữa + 2 đầu), rồi chọn có thứ tự 3 khoảng cho 3 nữ.',
          'Giải toán: n(A) = 5! · A(6, 3) = 5! · 120 ⇒ P(A) = (5! · 120)/8! = 120/(8·7·6) = 5/14 ≈ 0,3571.',
          'Đối chiếu thực tế: 0 < 0,36 < 1, làm tròn đến hàng phần trăm là 0,36.'
        ],
        loi_giai: [
          'Dữ kiện: 5 nam, 3 nữ, 8 ghế đánh số từ 1 đến 8.',
          'Yêu cầu: Tính xác suất không có 2 bác sĩ nữ ngồi cạnh nhau (làm tròn phần trăm).',
          'Điều kiện: Các chỗ ngồi phân biệt nên dùng hoán vị và chỉnh hợp.',
          'Ý tưởng: Dùng kỹ thuật vách ngăn (xếp 5 nam làm vách ngăn tạo 6 khe, sau đó đặt 3 nữ vào 3 trong 6 khe).',
          'Biến đổi: n(Ω) = 8!. Bước 1 xếp 5 nam: 5! cách; Bước 2 xếp 3 nữ vào 6 khoảng trống: A(6,3) = 120 cách ⇒ P(A) = (5!·120)/8! = 5/14 ≈ 0,35714.',
          'Kiểm chứng: 5/14 ≈ 0,3571 ⇒ làm tròn hàng phần trăm: 0,36 (4 ký tự).'
        ]
      },
      {
        id: 'VD-3.2', chuyen_de_key: 'cd3', nhan: 'Ví dụ minh họa 3.2', so_cau: 8, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một hệ thống báo cháy gồm hai cảm biến hoạt động độc lập <span class="m">A, B</span> mắc song song với nhau, sau đó cả cụm cảm biến này được mắc nối tiếp với một chuông báo <span class="m">C</span> (độc lập với <span class="m">A</span> và <span class="m">B</span>). Hệ thống hoạt động bình thường khi và chỉ khi có ít nhất một cảm biến hoạt động và chuông báo hoạt động. Biết xác suất hoạt động bình thường trong một năm của <span class="m">A, B, C</span> lần lượt là <span class="m">0,9; 0,8</span> và <span class="m">0,95</span>. Tính xác suất để hệ thống báo cháy hoạt động bình thường trong năm đó (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '0,93',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Cụm song song (A, B) nối tiếp chuông C; độc lập; hoạt động ⇔ (A∪B) ∩ C.',
          'Đặt biến cố & điều kiện: P(A) = 0,9 ⇒ P(' + ovl('A') + ') = 0,1; P(B) = 0,8 ⇒ P(' + ovl('B') + ') = 0,2; P(C) = 0,95.',
          'Lập mô hình mạch xác suất: E = A∪B ⇒ ' + ovl('E') + ' = ' + ovl('A') + '∩' + ovl('B') + '; hệ thống hoạt động H = E∩C.',
          'Giải toán: P(' + ovl('E') + ') = 0,1·0,2 = 0,02 ⇒ P(E) = 0,98 ⇒ P(H) = P(E)·P(C) = 0,98·0,95 = 0,931.',
          'Đối chiếu thực tế: 0,931 làm tròn đến hàng phần trăm là 0,93.'
        ],
        loi_giai: [
          'Dữ kiện: A, B, C độc lập; P(A)=0,9; P(B)=0,8; P(C)=0,95; (A ∥ B) nối tiếp C.',
          'Yêu cầu: Tính P(H) làm tròn đến hàng phần trăm.',
          'Điều kiện: A, B, C đôi một độc lập nên ' + ovl('A') + ', ' + ovl('B') + ' cũng độc lập.',
          'Ý tưởng: Tính xác suất cụm song song E = A ∪ B qua biến cố đối, rồi nhân độc lập với P(C).',
          'Biến đổi: P(E) = 1 − P(' + ovl('A') + ')·P(' + ovl('B') + ') = 1 − 0,1·0,2 = 0,98 ⇒ P(H) = 0,98·0,95 = 0,931.',
          'Kiểm chứng: Tính trực tiếp P(E) = 0,9 + 0,8 − 0,72 = 0,98; 0,98·0,95 = 0,931 ≈ 0,93 (4 ký tự).'
        ]
      },
      {
        id: 'VD-3.3', chuyen_de_key: 'cd3', nhan: 'Ví dụ minh họa 3.3', so_cau: 9, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Có hai hộp đựng thẻ giống nhau. Hộp I có <span class="m">5</span> thẻ xanh và <span class="m">3</span> thẻ đỏ; hộp II có <span class="m">4</span> thẻ xanh và <span class="m">6</span> thẻ đỏ. Lấy ngẫu nhiên một thẻ từ hộp I bỏ sang hộp II, sau đó lấy ngẫu nhiên một thẻ từ hộp II. Tính xác suất để thẻ lấy ra cuối cùng từ hộp II là thẻ màu xanh (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '0,42',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Phép thử 2 bước phụ thuộc: chuyển 1 thẻ từ Hộp I (5X, 3Đ) sang Hộp II (4X, 6Đ), rồi rút 1 thẻ ở Hộp II.',
          'Đặt biến cố & điều kiện: A₁: "thẻ chuyển là xanh" (P(A₁) = 5/8); A₂: "thẻ chuyển là đỏ" (P(A₂) = 3/8); B: "rút thẻ xanh ở Hộp II".',
          'Lập mô hình sơ đồ cây: Chia 2 nhánh xung khắc (A₁ ∩ B) và (A₂ ∩ B) với tổng số thẻ Hộp II tăng từ 10 lên 11.',
          'Giải toán: P(A₁∩B) = ' + frac('5', '8') + '·' + frac('5', '11') + ' = ' + frac('25', '88') + '; P(A₂∩B) = ' + frac('3', '8') + '·' + frac('4', '11') + ' = ' + frac('12', '88') + ' ⇒ P(B) = ' + frac('37', '88') + ' ≈ 0,4205.',
          'Đối chiếu thực tế: Làm tròn đến hàng phần trăm là 0,42.'
        ],
        loi_giai: [
          'Dữ kiện: Hộp I (5X, 3Đ), Hộp II (4X, 6Đ); chuyển 1 thẻ I → II rồi rút 1 thẻ ở II.',
          'Yêu cầu: Tính xác suất thẻ cuối cùng màu xanh (hàng phần trăm).',
          'Điều kiện: A₁, A₂ xung khắc và P(A₁) + P(A₂) = 1.',
          'Ý tưởng: Áp dụng sơ đồ cây / công thức xác suất toàn phần cập nhật số thẻ hộp II lên 11 thẻ.',
          'Biến đổi: P(B) = (5/8)·(5/11) + (3/8)·(4/11) = 25/88 + 12/88 = 37/88 ≈ 0,42045.',
          'Kiểm chứng: Hợp lý (nằm giữa 4/11 ≈ 0,364 và 5/11 ≈ 0,455). Làm tròn: 0,42 (4 ký tự).'
        ]
      },
      {
        id: 'VD-4.1', chuyen_de_key: 'cd4', nhan: 'Ví dụ minh họa 4.1', so_cau: 10, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một chiếc đèn chùm có khối lượng <span class="m">m = 6 kg</span> được treo cân bằng trên trần nhà bởi <span class="m">4</span> đoạn xích không dãn <span class="m">SA, SB, SC, SD</span> có độ dài bằng nhau sao cho <span class="m">S.ABCD</span> là hình chóp tứ giác đều có góc <span class="m">' + hat('ASC') + ' = 60°</span>. Lấy gia tốc trọng trường <span class="m">g = 10 m/s²</span>. Tính độ lớn lực căng của mỗi sợi xích (đơn vị: <span class="m">N</span>, làm tròn kết quả đến hàng phần mười).',
        dap_an: '17,3',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần mười (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Trọng lực P = mg = 60 N giữ cân bằng bởi 4 xích đối xứng SA, SB, SC, SD, góc ASC = 60°.',
          'Đặt ẩn & điều kiện: T > 0 (N) là lực căng mỗi xích; viết ' + vec('Fᵢ') + ' = k' + vec('AS') + '... với T = k·SA.',
          'Lập mô hình vectơ cân bằng: ' + vec('F₁') + ' + ' + vec('F₂') + ' + ' + vec('F₃') + ' + ' + vec('F₄') + ' = −' + vec('P') + '. Tâm vuông O cho (' + vec('AS') + ' + ' + vec('CS') + ') + (' + vec('BS') + ' + ' + vec('DS') + ') = 4' + vec('OS') + '.',
          'Giải toán: Góc ASO = ½ ASC = 30° ⇒ SO = SA·cos 30° = ' + frac(sqrt('3'), '2') + 'SA ⇒ 4k·SO = 60 ⇔ 2' + sqrt('3') + 'T = 60 ⇒ T = 10' + sqrt('3') + ' ≈ 17,32.',
          'Đối chiếu thực tế: T = 17,3 N (hợp lý: lớn hơn 60/4 = 15 N do dây nghiêng).'
        ],
        loi_giai: [
          'Dữ kiện: m = 6 kg, g = 10 m/s² ⇒ P = 60 N; chóp đều S.ABCD có góc ASC = 60°.',
          'Yêu cầu: Tính độ lớn lực căng T mỗi sợi xích (N, hàng phần mười).',
          'Điều kiện: T > 0, 4 dây có cùng độ lớn lực căng T do tính đối xứng.',
          'Ý tưởng: Rút gọn tổng 4 vectơ lực căng theo tâm O của đáy vuông ABCD rồi chiếu lấy độ dài.',
          'Biến đổi: 4·T·cos 30° = 60 ⇔ 4·T·(' + sqrt('3') + '/2) = 60 ⇔ T = 30/' + sqrt('3') + ' = 10' + sqrt('3') + ' ≈ 17,3205.',
          'Kiểm chứng: Làm tròn đến hàng phần mười được 17,3 (4 ký tự).'
        ]
      },
      {
        id: 'VD-4.2', chuyen_de_key: 'cd4', nhan: 'Ví dụ minh họa 4.2', so_cau: 11, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Tại một nút chịu lực <span class="m">O</span> của khung giàn không gian, có ba lực <span class="m">' + vec('F₁') + ', ' + vec('F₂') + ', ' + vec('F₃') + '</span> cùng tác động có độ lớn lần lượt là <span class="m">F₁ = 20 N</span>, <span class="m">F₂ = 30 N</span> và <span class="m">F₃ = 40 N</span>. Biết góc giữa hai lực <span class="m">' + vec('F₁') + '</span> và <span class="m">' + vec('F₂') + '</span> bằng <span class="m">60°</span>, đồng thời lực <span class="m">' + vec('F₃') + '</span> vuông góc với mặt phẳng chứa hai lực <span class="m">' + vec('F₁') + ', ' + vec('F₂') + '</span>. Tính độ lớn của hợp lực <span class="m">' + vec('F') + ' = ' + vec('F₁') + ' + ' + vec('F₂') + ' + ' + vec('F₃') + '</span> (đơn vị: <span class="m">N</span>, làm tròn kết quả đến hàng phần mười).',
        dap_an: '59,2',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần mười (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: 3 lực đồng quy F₁ = 20 N, F₂ = 30 N (tạo góc 60°), F₃ = 40 N vuông góc mặt phẳng (F₁, F₂).',
          'Đặt ẩn & điều kiện: Cần tính độ lớn |' + vec('F') + '| > 0.',
          'Lập mô hình vô hướng: |' + vec('F') + '|² = |' + vec('F₁') + ' + ' + vec('F₂') + ' + ' + vec('F₃') + '|² = F₁² + F₂² + F₃² + 2' + vec('F₁') + '·' + vec('F₂') + ' + 2' + vec('F₂') + '·' + vec('F₃') + ' + 2' + vec('F₃') + '·' + vec('F₁') + '.',
          'Giải toán: F₁·F₃ = F₂·F₃ = 0; F₁·F₂ = 20·30·cos 60° = 300 ⇒ |' + vec('F') + '|² = 400 + 900 + 1600 + 600 = 3500 ⇒ |' + vec('F') + '| = 10' + sqrt('35') + ' ≈ 59,16.',
          'Đối chiếu thực tế: Làm tròn đến hàng phần mười là 59,2 (N).'
        ],
        loi_giai: [
          'Dữ kiện: F₁ = 20, F₂ = 30, F₃ = 40; (F₁, F₂) = 60°; F₃ ⊥ (F₁, F₂).',
          'Yêu cầu: Tính độ lớn hợp lực |F| (N, hàng phần mười).',
          'Điều kiện: Lực F₃ vuông góc cả F₁ và F₂ nên tích vô hướng bằng 0.',
          'Ý tưởng: Dùng bình phương vô hướng tổng ba vectơ.',
          'Biến đổi: |F|² = 20² + 30² + 40² + 2·(20·30·cos 60°) + 0 + 0 = 2900 + 600 = 3500 ⇒ |F| = ' + sqrt('3500') + ' = 10' + sqrt('35') + ' ≈ 59,1608.',
          'Kiểm chứng: Hợp lực F₁+F₂ có độ lớn √(400+900+600)=√1900, vuông góc F₃ ⇒ √(1900+1600)=√3500 ≈ 59,2 (4 ký tự).'
        ]
      },
      {
        id: 'VD-4.3', chuyen_de_key: 'cd4', nhan: 'Ví dụ minh họa 4.3', so_cau: 12, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một khung gian trưng bày có dạng hình lập phương <span class="m">ABCD.A\'B\'C\'D\'</span> cạnh <span class="m">a</span>. Kỹ sư lắp hai thanh giằng thép thẳng đi theo hai đoạn <span class="m">AM</span> và <span class="m">BD\'</span>, trong đó <span class="m">M</span> là trung điểm của cạnh <span class="m">CC\'</span>. Tính góc giữa hai thanh giằng <span class="m">AM</span> và <span class="m">BD\'</span> (đơn vị: độ, làm tròn kết quả đến hàng phần mười).',
        dap_an: '78,9',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần mười độ (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Khung lập phương cạnh a, M là trung điểm CC\', tìm góc giữa hai đường thẳng AM và BD\'.',
          'Đặt hệ vectơ cơ sở: Chọn ' + vec('x') + ' = ' + vec('AB') + ', ' + vec('y') + ' = ' + vec('AD') + ', ' + vec('z') + ' = ' + vec('AA\'') + ' đôi một vuông góc cùng độ dài a > 0.',
          'Lập mô hình vectơ: ' + vec('AM') + ' = ' + vec('x') + ' + ' + vec('y') + ' + ½' + vec('z') + '; ' + vec('BD\'') + ' = −' + vec('x') + ' + ' + vec('y') + ' + ' + vec('z') + '.',
          'Giải toán: |' + vec('AM') + '| = ' + frac('3', '2') + 'a, |' + vec('BD\'') + '| = ' + sqrt('3') + 'a, ' + vec('AM') + '·' + vec('BD\'') + ' = −a² + a² + ½a² = ½a² ⇒ cos φ = ' + frac(sqrt('3'), '9') + ' ⇒ φ ≈ 78,904°.',
          'Đối chiếu thực tế: Góc giữa hai đường thẳng ∈ [0°; 90°], làm tròn đến hàng phần mười là 78,9°.'
        ],
        loi_giai: [
          'Dữ kiện: Lập phương ABCD.A\'B\'C\'D\' cạnh a, M là trung điểm CC\'.',
          'Yêu cầu: Tính góc giữa hai đường thẳng AM và BD\' (độ, hàng phần mười).',
          'Điều kiện: Góc giữa hai đường thẳng thuộc [0°; 90°] nên tử số phải lấy trị tuyệt đối.',
          'Ý tưởng: Biểu diễn AM và BD\' qua bộ 3 vectơ cơ sở đôi một vuông góc AB, AD, AA\'.',
          'Biến đổi: AM = x + y + 0,5z (độ dài 1,5a); BD\' = −x + y + z (độ dài a√3); AM·BD\' = 0,5a². Suy ra cos φ = 0,5 / (1,5√3) = √3 / 9 ⇒ φ = arccos(√3/9) ≈ 78,904°.',
          'Kiểm chứng: Gắn trục A(0;0;0) ⇒ M(1;1;0,5), B(1;0;0), D\'(0;1;1) cho kết quả y hệt. Đáp số: 78,9 (4 ký tự).'
        ]
      },
      {
        id: 'VD-5', chuyen_de_key: 'cd56', nhan: 'Ví dụ minh họa 5 (C5-GQ2.2)', so_cau: 13, chu_de: 4, tieu_muc: '4.2', ma_lenh: 'C5-GQ2.2', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Trong không gian <span class="m">Oxyz</span> (đơn vị trên mỗi trục là mét), một thiết bị bay không người lái xuất phát từ vị trí <span class="m">A(1; −2; 3)</span> bay thẳng đến vị trí <span class="m">B(5; 6; 11)</span>. Khi thiết bị đi được <span class="m">' + frac('3', '4') + '</span> quãng đường từ <span class="m">A</span> đến <span class="m">B</span>, nó ở vị trí <span class="m">M(a; b; c)</span>. Tính giá trị biểu thức <span class="m">T = a + 2b − c</span>.',
        dap_an: '3',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        loi_giai: [
          'Dữ kiện: A(1; −2; 3), B(5; 6; 11), M nằm trên đoạn AB sao cho AM = (3/4)AB.',
          'Yêu cầu: Tìm M(a; b; c) và tính T = a + 2b − c.',
          'Điều kiện: M cùng hướng AB nên ' + vec('AM') + ' = ' + frac('3', '4') + vec('AB') + '.',
          'Ý tưởng: Tính tọa độ vectơ AB rồi nhân 3/4 để suy ra tọa độ M.',
          'Biến đổi: ' + vec('AB') + ' = (4; 8; 8) ⇒ ' + vec('AM') + ' = (3; 6; 6). Do đó a = 1 + 3 = 4, b = −2 + 6 = 4, c = 3 + 6 = 9.',
          'Kiểm chứng: T = 4 + 2(4) − 9 = 3 (1 ký tự).'
        ]
      },
      {
        id: 'VD-6', chuyen_de_key: 'cd56', nhan: 'Ví dụ minh họa 6 (C6-GQ2.1)', so_cau: 14, chu_de: 5, tieu_muc: '5.1-5.2', ma_lenh: 'C6-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Cho hình chóp <span class="m">S.ABCD</span> có đáy <span class="m">ABCD</span> là hình vuông cạnh bằng <span class="m">2</span>, cạnh bên <span class="m">SA</span> vuông góc với mặt phẳng đáy và <span class="m">SA = ' + sqrt('6') + '</span>. Tính số đo góc nhị diện <span class="m">[S, BD, A]</span> (đơn vị: độ).',
        dap_an: '60',
        quy_tac_lam_tron: 'Nhập số nguyên độ (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: Đáy vuông ABCD cạnh 2, SA ⊥ (ABCD), SA = ' + sqrt('6') + '.',
          'Yêu cầu: Tính góc phẳng nhị diện [S, BD, A] (độ).',
          'Điều kiện: Giao tuyến là BD.',
          'Ý tưởng: Gọi O = AC ∩ BD; chứng minh OA ⊥ BD và OS ⊥ BD suy ra góc nhị diện là ' + hat('SOA') + '.',
          'Biến đổi: ABCD vuông cạnh 2 ⇒ AO = AC/2 = ' + sqrt('2') + '. Ta có SA ⊥ BD và AO ⊥ BD ⇒ BD ⊥ (SAO) ⇒ BD ⊥ SO. Tam giác SAO vuông tại A có tan(' + hat('SOA') + ') = SA/AO = ' + sqrt('6') + '/' + sqrt('2') + ' = ' + sqrt('3') + ' ⇒ ' + hat('SOA') + ' = 60°.',
          'Kiểm chứng: Góc nhọn vì SA > 0 ⇒ đáp số 60 (2 ký tự).'
        ]
      }
    ],

    de_tu_luyen_1: [
      {
        id: 'TLN1-01', so_cau: 1, chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Từ một tấm bìa hình vuông cạnh <span class="m">12 cm</span>, người ta cắt bỏ ở bốn góc bốn hình vuông bằng nhau có cạnh <span class="m">x</span> (cm) rồi gập phần còn lại thành một chiếc hộp không nắp dạng hình hộp chữ nhật. Thể tích lớn nhất của chiếc hộp tạo thành là bao nhiêu <span class="m">cm³</span>?',
        dap_an: '128',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Tấm bìa vuông 12 cm cắt 4 góc vuông cạnh x cm tạo hộp không nắp.',
          'Đặt ẩn & điều kiện thực tế: Cạnh đáy 12 − 2x > 0 và chiều cao x > 0 ⇒ 0 < x < 6.',
          'Lập hàm mục tiêu: V(x) = x(12 − 2x)² (cm³).',
          'Giải toán: V\'(x) = (12 − 2x)² − 4x(12 − 2x) = 12(x − 2)(x − 6) = 0 ⇔ x = 2 (nhận).',
          'Đối chiếu thực tế: V_max = V(2) = 2·8² = 128 (cm³).'
        ],
        loi_giai: [
          'Dữ kiện: Tấm bìa vuông cạnh 12 cm.',
          'Yêu cầu: Tính thể tích lớn nhất (cm³).',
          'Điều kiện: 0 < x < 6.',
          'Ý tưởng: Biểu diễn V(x) = x(12 − 2x)² rồi tìm cực đại trên (0; 6).',
          'Biến đổi: V\'(x) = 12(x − 2)(x − 6) = 0 ⇒ x = 2. Trên (0; 2) có V\' > 0, trên (2; 6) có V\' < 0 ⇒ V_max = 2·(12 − 4)² = 128.',
          'Kiểm chứng: Công thức nhanh x* = 12/6 = 2 ⇒ V_max = 2·12³/27 = 128 (3 ký tự).'
        ]
      },
      {
        id: 'TLN1-02', so_cau: 2, chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Cho hàm số bậc ba <span class="m">y = f(x) = ax³ + bx² + cx + d</span> đạt cực đại tại <span class="m">x = 0</span> với giá trị cực đại <span class="m">y_CĐ = 5</span> và đạt cực tiểu tại <span class="m">x = 2</span> với giá trị cực tiểu <span class="m">y_CT = 1</span>. Tính giá trị <span class="m">f(4)</span>.',
        dap_an: '21',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        loi_giai: [
          'Dữ kiện: f(x) bậc ba có CĐ (0; 5) và CT (2; 1).',
          'Yêu cầu: Tính f(4).',
          'Điều kiện: Hàm bậc ba có 2 cực trị nên a > 0 (vì x_CĐ < x_CT).',
          'Ý tưởng: Viết f\'(x) = 3ax(x − 2), lấy nguyên hàm cộng hằng số d rồi thế 2 điểm cực trị.',
          'Biến đổi: f\'(x) = 3ax² − 6ax ⇒ f(x) = ax³ − 3ax² + d. Vì f(0) = 5 ⇒ d = 5; f(2) = 8a − 12a + 5 = 1 ⇒ a = 1. Vậy f(x) = x³ − 3x² + 5 ⇒ f(4) = 64 − 48 + 5 = 21.',
          'Kiểm chứng: f\'(x) = 3x(x−2) ⇒ f(0)=5 (CĐ), f(2)=1 (CT), f(4)=21 (2 ký tự).'
        ]
      },
      {
        id: 'TLN1-03', so_cau: 3, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một xạ thủ bắn độc lập <span class="m">3</span> viên đạn vào bia, xác suất bắn trúng bia ở mỗi lần bắn đều là <span class="m">0,7</span>. Xạ thủ đạt yêu cầu nếu có ít nhất <span class="m">2</span> viên đạn trúng bia. Tính xác suất để xạ thủ đạt yêu cầu (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '0,78',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: 3 phép thử độc lập, mỗi lần trúng p = 0,7; đạt yêu cầu khi trúng 2 hoặc 3 viên.',
          'Đặt biến cố & điều kiện: H₂: "trúng đúng 2 viên", H₃: "trúng cả 3 viên" (xung khắc).',
          'Lập mô hình Bernoulli / nhân độc lập: P = C(3,2)·(0,7)²·(0,3) + (0,7)³.',
          'Giải toán: P = 3·0,49·0,3 + 0,343 = 0,441 + 0,343 = 0,784.',
          'Đối chiếu thực tế: Làm tròn đến hàng phần trăm là 0,78.'
        ],
        loi_giai: [
          'Dữ kiện: 3 phát bắn độc lập, p = 0,7, 1 − p = 0,3.',
          'Yêu cầu: Tính P(X ≥ 2) làm tròn đến hàng phần trăm.',
          'Điều kiện: Các lần bắn độc lập; trường hợp trúng 2 viên và 3 viên xung khắc.',
          'Ý tưởng: Cộng xác suất hai trường hợp trúng 2 viên và trúng 3 viên.',
          'Biến đổi: P = C(3,2)·0,7²·0,3 + C(3,3)·0,7³ = 0,441 + 0,343 = 0,784.',
          'Kiểm chứng: Biến cố đối 1 − (0,3³ + 3·0,7·0,3²) = 1 − (0,027 + 0,189) = 0,784 ≈ 0,78 (4 ký tự).'
        ]
      },
      {
        id: 'TLN1-04', so_cau: 4, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một vật nặng có trọng lượng <span class="m">P = 90 N</span> được treo cân bằng bằng <span class="m">3</span> sợi dây không dãn <span class="m">SA, SB, SC</span> có độ dài bằng nhau sao cho <span class="m">S.ABC</span> là hình chóp tam giác đều, biết mỗi sợi dây hợp với phương thẳng đứng một góc <span class="m">30°</span>. Tính độ lớn lực căng của mỗi sợi dây (đơn vị: <span class="m">N</span>, làm tròn kết quả đến hàng phần mười).',
        dap_an: '34,6',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần mười (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Trọng lực P = 90 N giữ cân bằng bởi 3 dây đối xứng nghiêng góc α = 30° so với trục đứng.',
          'Đặt ẩn & điều kiện: T > 0 (N) là lực căng mỗi dây.',
          'Lập mô hình vectơ: ' + vec('T₁') + ' + ' + vec('T₂') + ' + ' + vec('T₃') + ' + ' + vec('P') + ' = ' + vec('0') + ' ⇒ 3·T·cos 30° = P.',
          'Giải toán: 3·T·' + frac(sqrt('3'), '2') + ' = 90 ⇒ T = ' + frac('60', sqrt('3')) + ' = 20' + sqrt('3') + ' ≈ 34,641.',
          'Đối chiếu thực tế: Làm tròn đến hàng phần mười được 34,6 N.'
        ],
        loi_giai: [
          'Dữ kiện: P = 90 N, 3 dây đối xứng nghiêng 30° so với phương thẳng đứng.',
          'Yêu cầu: Tính lực căng T mỗi dây (N, hàng phần mười).',
          'Điều kiện: T > 0, vật cân bằng tĩnh.',
          'Ý tưởng: Chiếu phương trình cân bằng 3 dây lên phương thẳng đứng: 3T cos 30° = P.',
          'Biến đổi: T = 90 / (3 · ' + sqrt('3') + '/2) = 60 / ' + sqrt('3') + ' = 20' + sqrt('3') + ' ≈ 34,641.',
          'Kiểm chứng: 3·34,641·0,8660 ≈ 90 N. Làm tròn hàng phần mười: 34,6 (4 ký tự).'
        ]
      },
      {
        id: 'TLN1-05', so_cau: 5, chu_de: 4, tieu_muc: '4.2', ma_lenh: 'C5-GQ2.2', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Trong không gian <span class="m">Oxyz</span>, cho ba điểm <span class="m">A(1; 2; −1), B(3; 0; 2)</span> và <span class="m">C(2; 4; 1)</span>. Biết điểm <span class="m">D(x_D; y_D; z_D)</span> thỏa mãn tứ giác <span class="m">ABCD</span> là hình bình hành. Tính giá trị biểu thức <span class="m">S = x_D + y_D + z_D</span>.',
        dap_an: '4',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        loi_giai: [
          'Dữ kiện: A(1; 2; −1), B(3; 0; 2), C(2; 4; 1).',
          'Yêu cầu: Tìm D để ABCD là hình bình hành và tính S = x_D + y_D + z_D.',
          'Điều kiện: Chú ý đúng thứ tự đỉnh hình bình hành ABCD ⇒ ' + vec('AB') + ' = ' + vec('DC') + '.',
          'Ý tưởng: Dùng công thức D = A + C − B.',
          'Biến đổi: ' + vec('AB') + ' = (2; −2; 3), ' + vec('DC') + ' = (2 − x_D; 4 − y_D; 1 − z_D) ⇒ x_D = 0, y_D = 6, z_D = −2 ⇒ S = 0 + 6 + (−2) = 4.',
          'Kiểm chứng: Trung điểm AC là (1,5; 3; 0), trung điểm BD là (1,5; 3; 0) khớp nhau. Đáp số: 4 (1 ký tự).'
        ]
      },
      {
        id: 'TLN1-06', so_cau: 6, chu_de: 5, tieu_muc: '5.1-5.2', ma_lenh: 'C6-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Cho hình chóp <span class="m">S.ABC</span> có đáy <span class="m">ABC</span> là tam giác vuông cân tại <span class="m">B</span>, cạnh <span class="m">AB = 3</span>. Cạnh bên <span class="m">SA</span> vuông góc với mặt phẳng đáy và <span class="m">SA = 4</span>. Tính khoảng cách từ điểm <span class="m">A</span> đến mặt phẳng <span class="m">(SBC)</span>.',
        dap_an: '2,4',
        quy_tac_lam_tron: 'Nhập số thập phân chính xác dùng dấu phẩy (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: ΔABC vuông cân tại B, AB = 3; SA ⊥ (ABC), SA = 4.',
          'Yêu cầu: Tính d(A, (SBC)).',
          'Điều kiện: A là chân đường cao của hình chóp.',
          'Ý tưởng: Chứng minh BC ⊥ (SAB), suy ra chỉ cần kẻ AH ⊥ SB thì AH ⊥ (SBC).',
          'Biến đổi: Ta có BC ⊥ AB và BC ⊥ SA ⇒ BC ⊥ (SAB) ⇒ BC ⊥ AH; lại có AH ⊥ SB ⇒ AH ⊥ (SBC). Hệ thức lượng ΔSAB vuông tại A: AH = ' + frac('SA · AB', sqrt('SA² + AB²')) + ' = ' + frac('4·3', '5') + ' = ' + frac('12', '5') + ' = 2,4.',
          'Kiểm chứng: Bộ 3 Pitago 3–4–5 quen thuộc; 12/5 = 2,4 (3 ký tự).'
        ]
      }
    ],

    de_tu_luyen_2: [
      {
        id: 'TLN2-01', so_cau: 1, chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một nhà máy sản xuất <span class="m">x</span> sản phẩm mỗi ngày (<span class="m">1 ≤ x ≤ 100</span>) với tổng chi phí sản xuất được mô tả bởi hàm số <span class="m">C(x) = 0,2x² + 10x + 80</span> (triệu đồng). Hỏi nhà máy cần sản xuất bao nhiêu sản phẩm mỗi ngày để chi phí trung bình cho mỗi sản phẩm là nhỏ nhất?',
        dap_an: '20',
        quy_tac_lam_tron: 'Nhập số nguyên tối đa 4 ký tự.',
        mo_hinh_hoa: [
          'Đọc đề thực tế: Tổng chi phí sản xuất x sp là C(x) = 0,2x² + 10x + 80 (tr/ngày). Cần tối thiểu chi phí trung bình 1 sp.',
          'Đặt ẩn & điều kiện thực tế: 1 ≤ x ≤ 100, x ∈ ℕ*.',
          'Lập hàm mục tiêu: Chi phí trung bình C̄(x) = ' + frac('C(x)', 'x') + ' = 0,2x + 10 + ' + frac('80', 'x') + '.',
          'Giải toán: C̄\'(x) = 0,2 − ' + frac('80', 'x²') + ' = 0 ⇔ x² = 400 ⇔ x = 20 ∈ [1; 100].',
          'Đối chiếu thực tế: Kiểm tra C̄(20) = 18 (tr/sp) là GTNN; số sản phẩm nguyên là 20.'
        ],
        loi_giai: [
          'Dữ kiện: C(x) = 0,2x² + 10x + 80, 1 ≤ x ≤ 100.',
          'Yêu cầu: Tìm x để C̄(x) = C(x)/x nhỏ nhất.',
          'Điều kiện: x ∈ [1; 100] và x nguyên dương.',
          'Ý tưởng: Chia C(x) cho x rồi lấy đạo hàm (hoặc áp dụng AM-GM cho 0,2x + 80/x).',
          'Biến đổi: C̄(x) = 0,2x + 10 + 80/x ⇒ C̄\'(x) = 0,2 − 80/x² = 0 ⇔ x² = 400 ⇔ x = 20.',
          'Kiểm chứng: Theo AM-GM, 0,2x + 80/x ≥ 2√(16) = 8, dấu bằng tại 0,2x = 80/x ⇔ x = 20 (2 ký tự).'
        ]
      },
      {
        id: 'TLN2-02', so_cau: 2, chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', cap_do: 'VD', nang_luc: 'GQ',
        de_bai: 'Cho hàm số <span class="m">y = ' + frac('ax + b', 'x + c') + '</span> có đồ thị <span class="m">(C)</span>. Biết <span class="m">(C)</span> có tiệm cận đứng là đường thẳng <span class="m">x = 2</span>, tiệm cận ngang là đường thẳng <span class="m">y = 3</span> và đi qua điểm <span class="m">A(3; 5)</span>. Tính giá trị biểu thức <span class="m">K = a + b + c</span>.',
        dap_an: '-3',
        quy_tac_lam_tron: 'Nhập số nguyên có cả dấu trừ (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: y = (ax + b)/(x + c) có TCĐ x = 2, TCN y = 3, qua A(3; 5).',
          'Yêu cầu: Tính K = a + b + c.',
          'Điều kiện: x + c ≠ 0 và ac − b ≠ 0 (không suy biến).',
          'Ý tưởng: Từ TCĐ suy ra c, từ TCN suy ra a, thế điểm A(3; 5) tìm b.',
          'Biến đổi: TCĐ x = −c = 2 ⇒ c = −2. TCN y = a/1 = 3 ⇒ a = 3. Thay A(3; 5): (3·3 + b)/(3 − 2) = 5 ⇔ 9 + b = 5 ⇔ b = −4. Vậy K = 3 + (−4) + (−2) = −3.',
          'Kiểm chứng: Hàm số y = (3x − 4)/(x − 2) có ad−bc = −6+4 = −2 ≠ 0, TCĐ x=2, TCN y=3, qua A(3;5). K = -3 (2 ký tự).'
        ]
      },
      {
        id: 'TLN2-03', so_cau: 3, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Một hộp có <span class="m">6</span> viên bi đỏ và <span class="m">4</span> viên bi xanh. Lấy ngẫu nhiên đồng thời <span class="m">3</span> viên bi từ hộp. Tính xác suất để trong <span class="m">3</span> viên bi lấy ra có ít nhất <span class="m">1</span> viên bi xanh (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '0,83',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: 6 đỏ + 4 xanh (10 bi), lấy đồng thời 3 bi, cần có ít nhất 1 bi xanh.',
          'Đặt biến cố & điều kiện: Ω gồm các tập 3 bi không thứ tự ⇒ n(Ω) = C(10,3). Dùng biến cố đối ' + ovl('A') + ': "cả 3 bi đều màu đỏ".',
          'Lập mô hình xác suất đối: P(A) = 1 − ' + frac('C(6, 3)', 'C(10, 3)') + '.',
          'Giải toán: C(6,3) = 20, C(10,3) = 120 ⇒ P(A) = 1 − ' + frac('20', '120') + ' = ' + frac('5', '6') + ' ≈ 0,8333.',
          'Đối chiếu thực tế: Làm tròn đến hàng phần trăm được 0,83.'
        ],
        loi_giai: [
          'Dữ kiện: 6 bi đỏ, 4 bi xanh; lấy đồng thời 3 bi.',
          'Yêu cầu: Tính xác suất có ít nhất 1 bi xanh (hàng phần trăm).',
          'Điều kiện: Chọn đồng thời không tính thứ tự nên dùng tổ hợp C(n, k).',
          'Ý tưởng: Dùng biến cố đối "cả 3 viên đều là bi đỏ".',
          'Biến đổi: n(Ω) = C(10,3) = 120; n(' + ovl('A') + ') = C(6,3) = 20 ⇒ P(A) = 1 − 20/120 = 5/6 ≈ 0,8333.',
          'Kiểm chứng: Cộng trực tiếp: (C(4,1)C(6,2) + C(4,2)C(6,1) + C(4,3))/120 = (60 + 36 + 4)/120 = 100/120 = 5/6 ≈ 0,83 (4 ký tự).'
        ]
      },
      {
        id: 'TLN2-04', so_cau: 4, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', cap_do: 'VD', nang_luc: 'MHH',
        de_bai: 'Trong không gian, tại một điểm <span class="m">O</span> có ba lực <span class="m">' + vec('F₁') + ', ' + vec('F₂') + ', ' + vec('F₃') + '</span> đôi một tạo với nhau góc <span class="m">60°</span> và có cùng độ lớn <span class="m">F₁ = F₂ = F₃ = 10 N</span>. Tính độ lớn của hợp lực <span class="m">' + vec('F') + ' = ' + vec('F₁') + ' + ' + vec('F₂') + ' + ' + vec('F₃') + '</span> (đơn vị: <span class="m">N</span>, làm tròn kết quả đến hàng phần mười).',
        dap_an: '24,5',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần mười (tối đa 4 ký tự).',
        mo_hinh_hoa: [
          'Đọc đề thực tế: 3 lực đồng quy cùng độ lớn 10 N, mọi cặp góc đôi một đều bằng 60°.',
          'Đặt ẩn & điều kiện: |' + vec('F') + '| > 0 (N).',
          'Lập mô hình bình phương vô hướng: |' + vec('F') + '|² = F₁² + F₂² + F₃² + 2(' + vec('F₁') + '·' + vec('F₂') + ' + ' + vec('F₂') + '·' + vec('F₃') + ' + ' + vec('F₃') + '·' + vec('F₁') + ').',
          'Giải toán: |' + vec('F') + '|² = 3·10² + 6·10·10·cos 60° = 300 + 300 = 600 ⇒ |' + vec('F') + '| = ' + sqrt('600') + ' = 10' + sqrt('6') + ' ≈ 24,495.',
          'Đối chiếu thực tế: Làm tròn đến hàng phần mười là 24,5 (N).'
        ],
        loi_giai: [
          'Dữ kiện: F₁ = F₂ = F₃ = 10 N; góc đôi một bằng 60°.',
          'Yêu cầu: Tính độ lớn hợp lực |F| (N, hàng phần mười).',
          'Điều kiện: Mỗi cặp lực có tích vô hướng Fᵢ·Fⱼ = 10·10·cos 60° = 50.',
          'Ý tưởng: Khai triển bình phương vô hướng |F₁ + F₂ + F₃|².',
          'Biến đổi: |F|² = 3·10² + 2·3·50 = 600 ⇒ |F| = 10' + sqrt('6') + ' ≈ 24,4949.',
          'Kiểm chứng: Nhỏ hơn giới hạn cùng chiều 30 N và lớn hơn cạnh tứ diện đều 10 N. Làm tròn: 24,5 (4 ký tự).'
        ]
      },
      {
        id: 'TLN2-05', so_cau: 5, chu_de: 4, tieu_muc: '4.2', ma_lenh: 'C5-GQ2.2', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Trong không gian <span class="m">Oxyz</span>, cho hai vectơ <span class="m">' + vec('u') + ' = (2; 1; 2)</span> và <span class="m">' + vec('v') + ' = (1; 2; 2)</span>. Tính côsin của góc giữa hai vectơ <span class="m">' + vec('u') + '</span> và <span class="m">' + vec('v') + '</span> (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '0,89',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: u = (2; 1; 2), v = (1; 2; 2).',
          'Yêu cầu: Tính cos(u, v) làm tròn đến hàng phần trăm.',
          'Điều kiện: u ≠ 0, v ≠ 0.',
          'Ý tưởng: Áp dụng trực tiếp công thức cos(u, v) = (u·v)/(|u|·|v|).',
          'Biến đổi: u·v = 2·1 + 1·2 + 2·2 = 8; |u| = ' + sqrt('2²+1²+2²') + ' = 3; |v| = ' + sqrt('1²+2²+2²') + ' = 3 ⇒ cos(u, v) = 8/9 ≈ 0,8889.',
          'Kiểm chứng: 8/9 = 0,888... làm tròn hàng phần trăm được 0,89 (4 ký tự).'
        ]
      },
      {
        id: 'TLN2-06', so_cau: 6, chu_de: 5, tieu_muc: '5.1-5.2', ma_lenh: 'C6-GQ2.1', cap_do: 'H', nang_luc: 'GQ',
        de_bai: 'Cho hình lập phương <span class="m">ABCD.A\'B\'C\'D\'</span> có cạnh bằng <span class="m">6</span>. Tính khoảng cách giữa hai đường thẳng chéo nhau <span class="m">AA\'</span> và <span class="m">BD</span> (làm tròn kết quả đến hàng phần trăm).',
        dap_an: '4,24',
        quy_tac_lam_tron: 'Làm tròn đến hàng phần trăm (tối đa 4 ký tự).',
        loi_giai: [
          'Dữ kiện: Hình lập phương ABCD.A\'B\'C\'D\' cạnh 6.',
          'Yêu cầu: Tính khoảng cách hai đường thẳng chéo nhau d(AA\', BD).',
          'Điều kiện: AA\' ⊥ (ABCD), đáy ABCD là hình vuông.',
          'Ý tưởng: Tìm đoạn vuông góc chung bằng cách gọi O = AC ∩ BD rồi xét đoạn AO.',
          'Biến đổi: Ta có AO ⊥ BD (2 đường chéo hình vuông) và AA\' ⊥ AO (vì AA\' ⊥ (ABCD)). Vậy AO là đoạn vuông góc chung của AA\' và BD ⇒ d(AA\', BD) = AO = ' + frac('6' + sqrt('2'), '2') + ' = 3' + sqrt('2') + ' ≈ 4,2426.',
          'Kiểm chứng: 3·1,4142 = 4,2426 ⇒ làm tròn hàng phần trăm: 4,24 (4 ký tự).'
        ]
      }
    ]
  };

  global.TOAN_TLN_VANDUNG = DATA;
})(window);
