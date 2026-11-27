/* Hai bộ bài theo tám vị trí vận dụng của ma_tran_de_2026.json. */
(function (global) {
  'use strict';

  var sources = {
    nk378: {
      ten: 'Nguyễn Khuyến & Lê Thánh Tông · 24/05/2026 · mã 378',
      pdf: 'https://toanmath.com/toanmath-pdf/de-thi-thu-tn-thpt-2026-mon-toan-truong-nguyen-khuyen-le-thanh-tong-tp-hcm.pdf'
    },
    nk423: {
      ten: 'Nguyễn Khuyến · 11/01/2026 · mã 423',
      pdf: 'https://toanmath.com/toanmath-pdf/de-thi-thu-tn-thpt-2026-mon-toan-truong-thcs-thpt-nguyen-khuyen-tp-hcm.pdf'
    },
    pbc1: {
      ten: 'Chuyên Phan Bội Châu & Chuyên Hà Tĩnh · đợt tháng 1/2026 · mã 0101',
      pdf: 'https://toanmath.com/toanmath-pdf/de-thi-thu-tn-thpt-2026-mon-toan-truong-thpt-chuyen-phan-boi-chau-nghe-an.pdf'
    },
    pbc2: {
      ten: 'Chuyên Phan Bội Châu & Chuyên Hà Tĩnh · 05/03/2026 · mã 0101',
      pdf: 'https://toanmath.com/toanmath-pdf/de-thi-thu-tn-thpt-2026-mon-toan-lan-2-truong-chuyen-phan-boi-chau-nghe-an.pdf'
    },
    phumy: {
      ten: 'THPT Phú Mỹ · giữa học kỳ II lớp 11 · 2025–2026',
      pdf: 'https://toanmath.com/toanmath-pdf/de-giua-hoc-ky-2-toan-11-nam-2025-2026-truong-thpt-phu-my-tp-hcm.pdf'
    }
  };

  var slots = {
    DS1:  { phan: 'DS', so_cau: 1, chu_de: 1, tieu_muc: '1.1-1.4', ma_lenh: 'C1-GQ', nang_luc: 'GQ' },
    DS2:  { phan: 'DS', so_cau: 2, chu_de: 4, tieu_muc: '4.1-4.2', ma_lenh: 'C2-GQ', nang_luc: 'GQ' },
    DS3:  { phan: 'DS', so_cau: 3, chu_de: 2, tieu_muc: '2.3', ma_lenh: 'C3-MHH', nang_luc: 'MHH' },
    DS4:  { phan: 'DS', so_cau: 4, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C4-GQ', nang_luc: 'GQ' },
    TLN1: { phan: 'TLN', so_cau: 1, chu_de: 1, tieu_muc: '1.2', ma_lenh: 'C1-MHH2.2', nang_luc: 'MHH' },
    TLN2: { phan: 'TLN', so_cau: 2, chu_de: 1, tieu_muc: '1.4', ma_lenh: 'C2-GQ2.2', nang_luc: 'GQ' },
    TLN3: { phan: 'TLN', so_cau: 3, chu_de: 3, tieu_muc: '3.2-3.3', ma_lenh: 'C3-MHH2.2', nang_luc: 'MHH' },
    TLN4: { phan: 'TLN', so_cau: 4, chu_de: 4, tieu_muc: '4.1', ma_lenh: 'C4-MHH2.2', nang_luc: 'MHH' }
  };

  function statement(text, correct, reason) {
    return { noi_dung: text, dap_an: correct, giai_thich: reason };
  }

  function makeSet(letter, questions) {
    return questions.map(function (item) {
      var q = Object.assign({}, slots[item.vi_tri], item);
      var source = sources[q.de_nguon];
      q.id = 'TR-' + letter + '-' + q.vi_tri;
      q.nguon = source.ten + ' · ' + q.cau_goc;
      q.lien_nguon = source.pdf + '#page=' + q.trang;
      if (q.phan === 'DS') {
        q.cap_do = 'B-H-VD';
        q.cac_y = q.cac_y.map(function (sub, i) {
          var y = 'abcd'[i];
          return Object.assign({}, sub, {
            y: y, ma_lenh: 'C' + q.so_cau + y + '-' + q.nang_luc,
            cap_do: ['B', 'H', 'H', 'VD'][i], nang_luc: q.nang_luc
          });
        });
      } else {
        q.cap_do = 'VD';
        q.chuyen_de_key = 'cd' + q.so_cau;
      }
      return q;
    });
  }

  var setA = makeSet('A', [
    {
      vi_tri: 'DS1', nhan: 'Hai tiếp tuyến song song', de_nguon: 'nk378', cau_goc: 'II.1', trang: 2, ban: 'Phát triển từ đề',
      de_bai: 'Xét đồ thị của hàm số f(x) = (3x + 2)/(x − 2).',
      goi_y: 'Chia tử cho mẫu. Với một hệ số góc cho trước, hãy tìm tất cả hoành độ tiếp điểm trước khi viết phương trình tiếp tuyến.',
      cac_y: [
        statement('Hàm số nhận mọi giá trị thực của x ngoại trừ 2.', true, 'Mẫu bằng 0 tại x = 2, còn tử tại đó bằng 8.'),
        statement('Trên nhánh x > 2, khi x tăng thì f(x) tăng.', false, 'Với x > 2, số 8/(x − 2) giảm khi x tăng. Cũng có thể xét f′(x) = −8/(x − 2)² < 0.'),
        statement('Hai đường tiệm cận gặp nhau ở điểm (2; 3).', true, 'Cách viết f(x) = 3 + 8/(x − 2) cho hai tiệm cận x = 2 và y = 3.'),
        statement('Hai tiếp tuyến có hệ số góc −2 cách nhau một khoảng bằng 16/√5.', true, 'Tại x = 0 và x = 4, hai tiếp tuyến là 2x + y + 1 = 0 và 2x + y − 15 = 0. Khoảng cách bằng |1 − (−15)|/√5.')
      ],
      loi_giai: [
        'Đồ thị được xác định bởi một phân thức có mẫu x − 2.',
        'Cần nhận diện hai nhánh và tìm khoảng cách giữa các tiếp tuyến cùng phương.',
        'Xét riêng hai khoảng x < 2 và x > 2.',
        'Viết f(x) = 3 + 8/(x − 2). Đạo hàm cho biết cả chiều biến thiên lẫn độ dốc tiếp tuyến.',
        'Giải −8/(x − 2)² = −2 được x = 0 hoặc x = 4. Thay vào f được hai tiếp điểm (0; −1), (4; 7).',
        'Viết tiếp tuyến qua từng điểm. Chênh lệch tung độ gốc bằng 16, còn khoảng cách vuông góc giữa hai đường bằng 16/√5.'
      ],
      bay: 'Hai đường thẳng xiên có thể cách nhau theo phương thẳng đứng 16 đơn vị. Công thức khoảng cách còn chia cho độ dài vectơ pháp tuyến.'
    },
    {
      vi_tri: 'DS2', nhan: 'Chọn đường thẳng gần B nhất', de_nguon: 'pbc2', cau_goc: 'II.4', trang: 3, ban: 'Phát triển từ đề',
      de_bai: 'Cho A(4; 5; 6), B(2; 4; 9) và mặt phẳng (P) có phương trình 2x + y − z + 3 = 0. Đường thẳng d đi qua A và song song với (P).',
      goi_y: 'Mọi đường d đều nằm trong cùng một mặt phẳng qua A. Hãy chiếu B vuông góc xuống mặt phẳng đó.',
      cac_y: [
        statement('Vectơ AB có tọa độ (−2; −1; 3).', true, 'Lấy tọa độ B trừ tọa độ A theo từng trục.'),
        statement('Với n = (2; 1; −1), tích vô hướng AB · n bằng 8.', false, 'Ba tích thành phần là −4, −1 và −3, có tổng −8.'),
        statement('Mặt phẳng qua A song song với (P) có phương trình 2x + y − z = 7.', true, 'Tại A, vế trái bằng 2·4 + 5 − 6 = 7. Hai mặt phẳng có cùng pháp tuyến.'),
        statement('Giá trị nhỏ nhất của khoảng cách từ B tới d bằng 8/√6.', true, 'Gọi H là hình chiếu của B lên mặt phẳng qua A. Mọi điểm X trên d thỏa BX² = BH² + HX². Chọn d = AH thì đạt BH = 8/√6.')
      ],
      loi_giai: [
        'Ta có AB = (−2; −1; 3) và pháp tuyến n = (2; 1; −1).',
        'Tìm cận dưới cho khoảng cách tới mọi đường d và chỉ ra một đường đạt cận đó.',
        'Vì d đi qua A và song song với (P), d nằm trong mặt phẳng (Q) có phương trình 2x + y − z = 7.',
        'Tách độ dời từ B thành thành phần vuông góc và thành phần nằm trong (Q).',
        'Tại B, 2x + y − z = −1. Độ dài hình chiếu lên phương pháp tuyến là |−1 − 7|/√6 = 8/√6.',
        'AB không cùng phương với n nên chân chiếu H khác A. Đường AH nằm trong (Q), song song với (P) và đạt đúng cận dưới.'
      ],
      bay: 'Một cận dưới mới chỉ cho biết khoảng cách có thể nhỏ đến đâu. Cần chỉ ra đường đi qua chân chiếu để kết luận giá trị nhỏ nhất.'
    },
    {
      vi_tri: 'DS3', nhan: 'Hai cách tăng lương', de_nguon: 'pbc1', cau_goc: 'III.3', trang: 5, ban: 'Chuyển thành bốn ý đúng/sai',
      de_bai: 'Hai hợp đồng cùng trả 10 triệu đồng mỗi tháng lúc bắt đầu. Sau mỗi 3 năm trọn vẹn, hợp đồng A cộng thêm 6 triệu vào lương tháng, còn hợp đồng B tăng lương tháng thêm 40% so với kỳ liền trước. Xét 20 năm làm việc liên tục.',
      goi_y: 'Đánh số các kỳ ba năm từ k = 0. Vẽ riêng đoạn cuối của 20 năm trên trục thời gian trước khi cộng tiền.',
      cac_y: [
        statement('Mỗi kỳ ba năm đầy đủ có 36 lần nhận lương tháng.', true, 'Mỗi năm có 12 tháng nên một kỳ đủ dài 3·12 = 36 tháng.'),
        statement('Lương tháng theo B ở kỳ có số thứ tự k, đếm từ k = 0, là 10·1,4<sup>k</sup> triệu đồng.', true, 'Mỗi lần tăng, toàn bộ mức lương hiện tại được nhân với 1,4.'),
        statement('Ngay đầu năm làm việc thứ 10, lương tháng theo B đã cao hơn theo A.', false, 'Đầu năm 10 thuộc kỳ k = 3. Theo B được 27,44 triệu, còn A được 28 triệu.'),
        statement('Tổng tiền theo B vượt tổng tiền theo A khoảng 1 180 triệu đồng, làm tròn đến triệu đồng.', true, 'Sáu kỳ đầu tính đủ 36 tháng. Kỳ k = 6 chỉ tính 24 tháng. Hai tổng lần lượt là 7 683,67104 và 6 504 triệu đồng.')
      ],
      mo_hinh_hoa: [
        'Mỗi hợp đồng áp dụng một mức lương cố định trong ba năm.',
        'Gọi k là số lần đã tăng lương, k = 0 ở năm đầu.',
        'Mức lương tháng lần lượt là Aₖ = 10 + 6k và Bₖ = 10·1,4<sup>k</sup>, tính bằng triệu đồng.',
        'Nhân lương tháng với số tháng thực nhận của từng kỳ rồi cộng.',
        'Sáu kỳ đủ và kỳ cuối 24 tháng cho tổng cộng 240 tháng, đúng bằng 20 năm.'
      ],
      loi_giai: [
        'Mức khởi điểm là 10. Quy tắc tăng của A là cộng một lượng cố định, của B là nhân cùng một hệ số.',
        'Cần đối chiếu mức lương tại một thời điểm và so sánh tổng tiền thực nhận.',
        'Kỳ k = 0 đến k = 5 đều dài 36 tháng. Kỳ k = 6 bắt đầu ở năm 19.',
        'Dùng cấp số cộng cho A và tổng cấp số nhân cho B.',
        'Tổng A là 36·(10 + 16 + 22 + 28 + 34 + 40) + 24·46 = 6 504. Tổng B là 360·(1,4⁶ − 1)/0,4 + 240·1,4⁶ = 7 683,67104.',
        'Chênh lệch 1 179,67104 triệu làm tròn thành 1 180 triệu. Có thể kiểm tra bằng cách cộng tiền của từng năm.'
      ],
      bay: 'Lần tăng thứ sáu vẫn diễn ra. Từ lúc đó tới hết hợp đồng chỉ còn hai năm hưởng mức lương mới.'
    },
    {
      vi_tri: 'DS4', nhan: 'Hoán vị tám con tem', de_nguon: 'nk378', cau_goc: 'II.2', trang: 2, ban: 'Diễn đạt lại đề gốc',
      de_bai: 'Ghép ngẫu nhiên tám tem với tám phong bì, mỗi bên mang các số 1 đến 8. Mọi cách ghép một đối một có cùng xác suất. Gọi X là biến cố có đúng ba tem sai số, Y là tem 1 đúng số, Z là cả tem 2 và tem 3 sai số.',
      goi_y: 'Khi đã chọn ba tem sai, thử liệt kê các cách chúng đổi chỗ cho nhau. Với điều kiện Y và Z, hãy đếm lại số hoán vị được phép.',
      cac_y: [
        statement('P(Y) = 1/8.', true, 'Trong tám vị trí đồng khả năng của tem 1 chỉ một vị trí đúng.'),
        statement('P(X) = 1/180.', false, 'Chọn ba số sai có C(8,3) cách. Ba tem chỉ có hai hoán vị đều sai nên P(X) = 112/8! = 1/360.'),
        statement('P(X | Y) = 1/36.', false, 'Giữ cố định tem 1. Còn 7! hoán vị và 2·C(7,3) hoán vị thỏa X, cho xác suất 1/72.'),
        statement('Khi đồng thời biết Y và Z xảy ra, xác suất của X bằng 1/372.', true, 'Có 7! − 2·6! + 5! = 3 720 cách thỏa điều kiện. Tem sai thứ ba có 5 lựa chọn, mỗi lựa chọn cho 2 chu trình. Tỉ số là 10/3 720.')
      ],
      loi_giai: [
        'Một kết quả là một hoán vị của tám số, gồm các vị trí đúng và sai.',
        'Tính xác suất đúng ba vị trí sai trước và sau khi thêm thông tin.',
        'Khi biết Y, tem 1 rời khỏi bài đếm. Khi biết thêm Z, cả hai vị trí 2 và 3 đều bị cấm ghép đúng.',
        'Đếm số cách chọn các tem sai rồi sắp chúng theo chu trình. Dùng nguyên lý bao hàm – loại trừ cho mẫu số có điều kiện.',
        'Từ 7! bỏ các cách tem 2 đúng và các cách tem 3 đúng. Hai nhóm có 5! cách chung nên phải cộng trả lại một lần.',
        'Trong 3 720 cách còn lại, chỉ 10 cách có đúng ba tem sai. Đảo vòng ba tem có đúng hai chiều, kiểm tra được ngay bằng ba thẻ giấy.'
      ],
      bay: 'Nếu lấy 7! làm mẫu số ở ý d, phép tính mới xét thông tin về tem 1 và bỏ mất thông tin về tem 2, 3.'
    },
    {
      vi_tri: 'TLN1', nhan: 'Ngân sách quảng cáo', de_nguon: 'nk378', cau_goc: 'III.1', trang: 4, ban: 'Diễn đạt lại đề gốc',
      de_bai: 'Với ngân sách quảng cáo x từ 2 đến 10 triệu đồng, một cửa hàng ước tính lợi nhuận ngày là L(x) = (−x² + 24x + m)/(x + 3), tính bằng triệu đồng. Một ngày chi 4 triệu đem lại 14 triệu lợi nhuận. Tìm lợi nhuận lớn nhất theo mô hình.',
      dap_an: '14,1', quy_tac_lam_tron: 'Điền số triệu đồng, làm tròn đến hàng phần mười.',
      goi_y: 'Dùng ngày đã khảo sát để xác định m. Sau đó chia đa thức để dấu của đạo hàm dễ đọc hơn.',
      mo_hinh_hoa: [
        'Ngân sách là đại lượng có thể điều chỉnh, còn lợi nhuận là đại lượng cần tối đa.',
        'Đặt x là số triệu đồng chi mỗi ngày, 2 ≤ x ≤ 10.',
        'Dữ kiện khảo sát tạo ra phương trình L(4) = 14 để xác định mô hình duy nhất.',
        'Khảo sát L trên cả đoạn, kể cả hai mức ngân sách biên.',
        'Kết quả phải mang đơn vị triệu đồng lợi nhuận trong một ngày.'
      ],
      loi_giai: [
        'Tại x = 4 ta có (80 + m)/7 = 14, suy ra m = 18.',
        'Cần giá trị lớn nhất của L(x). Hoành độ đạt cực đại chỉ là ngân sách nên chưa phải đáp số.',
        'Trên [2; 10], mẫu x + 3 luôn dương.',
        'Phép chia cho L(x) = 27 − x − 63/(x + 3). Do đó L′(x) = −1 + 63/(x + 3)².',
        'L′ đổi từ dương sang âm tại x = √63 − 3, thuộc đoạn khảo sát. Thay vào được L lớn nhất bằng 30 − 2√63.',
        'Giá trị này xấp xỉ 14,12549. Hai đầu đoạn cho 12,4 và khoảng 12,15 triệu. Điền 14,1.'
      ],
      bay: 'Số gần 4,94 là ngân sách tối ưu. Đề hỏi lợi nhuận ứng với ngân sách đó.'
    },
    {
      vi_tri: 'TLN2', nhan: 'Khôi phục hàm số từ đạo hàm', de_nguon: 'pbc1', cau_goc: 'II.3', trang: 4, ban: 'Phát triển từ đề',
      de_bai: 'Hàm f(x) = (ax + b)/(x + c) có đồ thị đạo hàm với tiệm cận đứng x = 2 và f′(0) = −2. Giá trị lớn nhất của f trên [3; 4] bằng 7. Có bao nhiêu số nguyên m từ 0 đến 12 để đường y = −x + m cắt nhánh x > 2 của đồ thị f tại hai điểm phân biệt?',
      dap_an: '6', quy_tac_lam_tron: 'Điền số nguyên.',
      goi_y: 'Đưa hàm về dạng a + k/(x − 2). Ở nhánh phải, dùng t = x − 2 để biến câu hỏi giao điểm thành câu hỏi về một hàm của t > 0.',
      loi_giai: [
        'Tiệm cận xác định c = −2. Viết f(x) = a + k/(x − 2), với k khác 0.',
        'Cần đếm các m nguyên cho đúng hai giao điểm trên cùng nhánh phải.',
        'f′(0) = −k/4 = −2 cho k = 8. Hàm giảm trên [3; 4] nên f(3) = 7, suy ra a = −1.',
        'Đặt t = x − 2 > 0. Phương trình giao điểm trở thành m = 1 + t + 8/t.',
        'Hàm bên phải giảm từ +∞ đến 1 + 2√8 rồi tăng tới +∞ vì đạo hàm là 1 − 8/t². Có hai nghiệm khi m > 1 + 2√8.',
        'Ngưỡng xấp xỉ 6,657. Các số 7, 8, 9, 10, 11, 12 cho 6 giá trị. Với m = 7, hai nghiệm t là 2 và 4.'
      ],
      bay: 'Tại ngưỡng nhỏ nhất có một tiếp điểm. Dấu bất đẳng thức để có hai giao điểm phải là dấu nghiêm ngặt.'
    },
    {
      vi_tri: 'TLN3', nhan: 'Đèn trên đa giác đều', de_nguon: 'nk378', cau_goc: 'III.5', trang: 6, ban: 'Diễn đạt lại đề gốc',
      de_bai: 'Một biển đèn có 32 vị trí cách đều trên đường tròn, ghi số liên tiếp từ 1 đến 32 theo vòng tròn. Bật ngẫu nhiên đồng thời bốn đèn. Đã biết có đèn số lẻ sáng. Gọi m/n là xác suất tối giản để bốn vị trí tạo thành hình thang (kể cả hình chữ nhật). Tính n − m.',
      dap_an: '7756', quy_tac_lam_tron: 'Điền số nguyên n − m.',
      goi_y: 'Trước hết đếm hình thang bằng các cặp dây song song. Hình chữ nhật có thể xuất hiện mấy lần trong phép đếm đó? Các đèn số chẵn tự tạo thành một đa giác đều nhỏ hơn.',
      mo_hinh_hoa: [
        'Bốn đèn sáng tương ứng duy nhất với một tập bốn đỉnh.',
        'Đặt E là biến cố có ít nhất một số lẻ, H là biến cố tạo hình thang.',
        'P(H | E) bằng số bộ thỏa cả H và E chia cho số bộ thỏa E.',
        'Trừ các bộ toàn chẵn ở cả tử lẫn mẫu. Mười sáu đỉnh chẵn tạo thành một đa giác đều.',
        'Kiểm tra tử nhỏ hơn mẫu rồi rút gọn trước khi lấy hiệu.'
      ],
      loi_giai: [
        'Số bộ thỏa điều kiện là C(32,4) − C(16,4) = 34 140. Mỗi bộ vẫn đồng khả năng sau khi biết E.',
        'Gọi T(N) là số hình thang từ N đỉnh đều. Số bộ thuận lợi cần tìm là T(32) − T(16).',
        'Với N = 2k, hai dây có cùng phương khi tổng chỉ số hai đầu bằng nhau theo modulo N. Thật vậy, bán kính qua trung điểm cung vuông góc với dây, có góc phương bằng trung bình góc của hai đầu.',
        'Ở mỗi tổng lẻ có k dây. Ở mỗi tổng chẵn có k − 1 dây vì phải bỏ hai trường hợp hai đầu trùng nhau. Có k tổng mỗi loại. Hai dây khác nhau cùng phương không chung đầu nên tạo hai đáy.',
        'Đếm cặp dây cho k·[C(k,2) + C(k−1,2)]. Mỗi hình chữ nhật đã được tính hai lần và tương ứng với hai đường kính, nên trừ C(k,2). Thay k = 16 và 8 được T(32) = 3 480, T(16) = 364.',
        'Xác suất bằng 3 116/34 140 = 779/8 535. Hiệu cần điền là 8 535 − 779 = 7 756.'
      ],
      bay: 'Bộ bốn đỉnh toàn chẵn vẫn có thể tạo hình thang. Phải loại chúng khỏi cả số trường hợp thuận lợi lẫn không gian mẫu.'
    },
    {
      vi_tri: 'TLN4', nhan: 'Khoảng cách giữa hai khinh khí cầu', de_nguon: 'pbc1', cau_goc: 'II.4d', trang: 4, ban: 'Chuyển từ đúng/sai sang trả lời ngắn',
      de_bai: 'Trên bản đồ Oxyz, mỗi đơn vị dài 10 km. Lúc đầu hai khinh khí cầu lần lượt ở (5; 4; 2) và (6; 5; 3). Trong 10 giờ tiếp theo, vectơ vận tốc của chúng theo các trục lần lượt là (1; 2; 0) và (−2; 3; 0) km/h. Trong thời gian đó, chúng tới gần nhau nhất bao nhiêu kilômét?',
      dap_an: '16,1', quy_tac_lam_tron: 'Điền số kilômét, làm tròn đến hàng phần mười.',
      goi_y: 'Hãy đổi vị trí ban đầu sang kilômét trước khi cộng vận tốc nhân với thời gian. Hai vị trí phải được xét ở cùng một thời điểm.',
      mo_hinh_hoa: [
        'Hai vật chuyển động đều, bài toán hỏi độ dài vectơ nối chúng.',
        'Gọi t là thời gian tính bằng giờ, 0 ≤ t ≤ 10. Từ đây đo mọi độ dài bằng kilômét.',
        'Lấy vị trí thứ hai trừ vị trí thứ nhất ở thời điểm t để có vectơ tương đối.',
        'Tối thiểu hóa bình phương độ dài của vectơ đó trên đoạn thời gian.',
        'Kiểm tra thời điểm tìm được thuộc 10 giờ bay và đổi kết quả về độ dài.'
      ],
      loi_giai: [
        'Lúc đầu vectơ nối hai khí cầu là (10; 10; 10) km. Hiệu hai vận tốc là (−3; 1; 0) km/h.',
        'Cần tìm độ dài nhỏ nhất của r(t) = (10 − 3t; 10 + t; 10).',
        'Vì độ dài không âm, bình phương độ dài nhỏ nhất tại cùng thời điểm.',
        'Khai triển d² = (10 − 3t)² + (10 + t)² + 100 = 10(t − 2)² + 260.',
        'Điểm gần nhất ứng với t = 2 giờ. Khi đó r = (4; 12; 10) và d = √260 km.',
        '√260 ≈ 16,1245 km. Tích vô hướng (4; 12; 10) · (−3; 1; 0) bằng 0, xác nhận vectơ tương đối vuông góc với hướng thay đổi.'
      ],
      bay: 'Thang 10 km áp dụng cho tọa độ trên bản đồ. Vectơ vận tốc trong đề đã có đơn vị km/h.'
    }
  ]);

  var setB = makeSet('B', [
    {
      vi_tri: 'DS1', nhan: 'Đọc số giao điểm từ hai cực trị', de_nguon: 'pbc2', cau_goc: 'II.3', trang: 2, ban: 'Biến thể về số giao điểm',
      de_bai: 'Cho f(x) = x²(3 − x). Xét đồ thị trên toàn bộ trục số.',
      goi_y: 'Xác định các khoảng đơn điệu. Với m > 0, số nghiệm của |f(x)| = m bằng tổng số giao điểm với hai đường ngang y = m và y = −m.',
      cac_y: [
        statement('Đồ thị đi qua gốc tọa độ.', true, 'Thay x = 0 được f(0) = 0.'),
        statement('Hàm giảm trên khoảng (0; 2).', false, 'Đạo hàm 3x(2 − x) dương trên khoảng này.'),
        statement('Đường ngang y = 4 gặp đồ thị ở đúng hai điểm phân biệt.', true, 'f(x) − 4 = −(x − 2)²(x + 1). Nghiệm kép 2 chỉ ứng với một điểm của đồ thị.'),
        statement('Có bốn số nguyên m để phương trình |f(x)| = m có đúng bốn nghiệm phân biệt.', false, 'Bốn nghiệm chỉ xuất hiện khi 0 < m < 4. Có đúng ba số nguyên thỏa điều kiện này.')
      ],
      loi_giai: [
        'Đồ thị có các mốc f(0) = 0, f(2) = 4 và f(3) = 0.',
        'Cần đếm giao điểm phân biệt, kể cả khi đường ngang đi qua một cực trị.',
        'Nếu m < 0 thì |f(x)| = m vô nghiệm. Với m = 0 chỉ xét f(x) = 0 một lần.',
        'f′(x) = 3x(2 − x). Khi x tăng, hàm lần lượt giảm từ +∞ về 0, tăng lên 4 rồi giảm về −∞.',
        'Khi 0 < m < 4, mức m cho ba giao điểm và mức −m cho một. Với m = 4 có 2 + 1 giao điểm. Với m > 4 có 1 + 1.',
        'Với m = 0 chỉ có x = 0 và x = 3. Vì vậy chỉ m = 1, 2, 3 cho đủ bốn nghiệm.'
      ],
      bay: 'Một nghiệm kép vẫn chỉ cho một giao điểm. Khi m = 0, hai đường y = m và y = −m trùng nhau.'
    },
    {
      vi_tri: 'DS2', nhan: 'Hai thiết bị cùng qua cổng', de_nguon: 'nk378', cau_goc: 'II.4', trang: 3, ban: 'Phát triển từ đề',
      de_bai: 'Tính tọa độ theo mét. Thiết bị A xuất phát ở (2; −6; 3), bay theo hướng (3; 4; 0) với tốc độ 5 m/s. Cùng lúc, B rời (58; 10; 11) với vận tốc (−4; −1; 0) m/s. Cả hai chuyển động thẳng đều về cổng x = 26.',
      goi_y: 'Viết vị trí từng thiết bị theo cùng biến t. Với ý d, có thể đếm số lần khoảng cách bằng 22 bằng cách so sánh ở hai đầu đoạn và điểm gần nhất.',
      cac_y: [
        statement('Vectơ vận tốc của A là (3; 4; 0) m/s.', true, 'Vectơ hướng có độ dài 5. Nhân vectơ đơn vị cùng hướng với tốc độ 5 cho chính (3; 4; 0).'),
        statement('Khi A qua cổng, tung độ của A bằng 32 m.', false, 'A qua cổng ở t = 8. Tung độ lúc ấy bằng −6 + 4·8 = 26 m.'),
        statement('Hai thiết bị cùng đến mặt phẳng cổng sau 8 giây.', true, 'Hai phương trình 2 + 3t = 26 và 58 − 4t = 26 cùng cho t = 8.'),
        statement('Trong 8 giây đầu, có đúng hai thời điểm khoảng cách giữa hai thiết bị bằng 22 m.', true, 'Bình phương khoảng cách là hàm bậc hai lồi. Giá trị tại t = 0 và t = 8 đều lớn hơn 484, còn tại t = 6 bằng 456. Vì thế mức 484 được cắt đúng hai lần.')
      ],
      loi_giai: [
        'Sau t giây, A ở (2 + 3t; −6 + 4t; 3), B ở (58 − 4t; 10 − t; 11).',
        'Kiểm tra thời điểm qua cổng và số lần khoảng cách đạt mức đã cho.',
        'Hai thiết bị tới cổng cùng lúc nên khoảng khảo sát là 0 ≤ t ≤ 8.',
        'Hiệu tọa độ B − A là (56 − 7t; 16 − 5t; 8). So sánh bình phương độ dài với 22² = 484.',
        'Ta được D²(t) = 74t² − 944t + 3 456. Các giá trị ở t = 0, 6, 8 lần lượt là 3 456, 456, 640.',
        'Tính liên tục cho một nghiệm trước và một nghiệm sau giây thứ sáu. Phương trình bậc hai có nhiều nhất hai nghiệm nên phép đếm đã đủ.'
      ],
      bay: 'Tại cổng hai thiết bị chỉ có cùng hoành độ. Tung độ và cao độ vẫn ảnh hưởng tới khoảng cách.'
    },
    {
      vi_tri: 'DS3', nhan: 'Quỹ học tập gửi cuối năm', de_nguon: 'phumy', cau_goc: 'Tự luận 4', trang: 11, ban: 'Phát triển từ đề',
      de_bai: 'Một gia đình bắt đầu với tài khoản trống. Cuối mỗi năm, sau khi ngân hàng nhập lãi, gia đình góp 50 triệu đồng. Lãi suất theo mô hình là 12% một năm. Gọi Sₙ là số dư tính bằng triệu đồng ngay sau lần góp cuối năm n. Mục tiêu là 320 triệu đồng.',
      goi_y: 'Viết số dư ngay sau hai lần góp đầu tiên. Nếu bỏ một khoản góp, hãy đếm riêng số kỳ sinh lãi mà khoản đó lẽ ra được hưởng.',
      cac_y: [
        statement('Số dư ngay sau lần góp đầu tiên là 56 triệu đồng.', false, 'Khoản 50 triệu mới được góp vào cuối năm đầu nên khi đó S₁ = 50.'),
        statement('Với lịch góp đủ, Sₙ₊₁ = 1,12Sₙ + 50.', true, 'Số dư cũ sinh lãi một năm, sau đó mới cộng khoản góp mới.'),
        statement('Góp đủ năm lần đã đạt mục tiêu 320 triệu đồng.', false, 'Tổng sau lần góp thứ năm là 317,642368 triệu, vẫn thấp hơn 320.'),
        statement('Nếu chỉ bỏ lần góp cuối năm thứ ba, rồi tiếp tục lịch cũ, cuối năm thứ sáu vẫn đạt mục tiêu.', true, 'Từ số dư đủ sáu lần là 405,75945 triệu, trừ 50·1,12³ cho khoản bị thiếu. Còn khoảng 335,51 triệu đồng.')
      ],
      mo_hinh_hoa: [
        'Tiền được góp đều vào cuối kỳ, sau thời điểm tính lãi.',
        'Lấy S₀ = 0, n nguyên không âm, một kỳ bằng một năm.',
        'Trong năm góp đủ, dùng Sₙ₊₁ = 1,12Sₙ + 50. Riêng năm bỏ góp chỉ nhân số dư cũ với 1,12.',
        'Cộng cấp số nhân và trừ giá trị cuối kỳ của khoản góp thiếu.',
        'So sánh số dư chưa làm tròn với mốc 320 triệu đồng.'
      ],
      loi_giai: [
        'Sau hai kỳ gửi đủ, S₁ = 50 và S₂ = 50·1,12 + 50 = 106.',
        'Xét thời điểm chạm ngưỡng theo cả hai lịch gửi.',
        'Khoản mới góp ở cuối kỳ có số mũ 0. Khoản cuối năm thứ ba tới cuối năm thứ sáu có ba kỳ sinh lãi.',
        'Tổng n khoản là Sₙ = 50·(1,12ⁿ − 1)/0,12.',
        'Theo lịch đủ, S₅ ≈ 317,64 và S₆ ≈ 405,76. Theo lịch thiếu, S₆ giảm đi 50·1,12³, còn khoảng 335,51.',
        'Có thể tính lại từng năm với cùng công thức truy hồi và đặt tiền góp của năm 3 bằng 0. Cả hai lịch đều vượt mốc ở năm 6.'
      ],
      bay: 'Nếu nhân cả khoản góp cuối năm với 1,12 ngay trong năm đó, mọi khoản tiền đều hưởng thừa một kỳ lãi.'
    },
    {
      vi_tri: 'DS4', nhan: 'Nhận diện hộp qua hai lượt rút', de_nguon: 'nk423', cau_goc: 'II.2', trang: 3, ban: 'Phát triển từ đề',
      de_bai: 'Chọn một trong ba hộp A, B, C với cơ hội bằng nhau. Các bóng trong mỗi hộp được đánh số liên tiếp từ 1, lần lượt đến 4, 3 và 2. Trong hộp đã chọn, mỗi bóng có cùng xác suất được rút. Sau mỗi lần đọc số, trả bóng về đúng hộp và trộn đều.',
      goi_y: 'Cả hai lượt dùng cùng một hộp. Lập bảng theo ba hộp, mỗi dòng ghi xác suất quan sát được đúng thứ tự hai số.',
      cac_y: [
        statement('Nếu hộp được chọn là A thì xác suất đọc số 1 ở lượt đầu bằng 1/4.', true, 'Trong bốn bóng của A chỉ có một bóng mang số 1.'),
        statement('Khi chưa biết hộp, xác suất đọc số 3 ở lượt đầu bằng 5/36.', false, 'Chỉ A và B có bóng số 3. Xác suất là (1/4 + 1/3)/3 = 7/36.'),
        statement('Nếu lượt đầu đọc số 1, xác suất hộp đã chọn là A bằng 3/13.', true, 'Ba khả năng A, B, C có trọng số 1/4, 1/3, 1/2 sau quan sát. Chuẩn hóa trọng số của A cho 3/13.'),
        statement('Nếu lần lượt đọc được 1 rồi 3, xác suất đã chọn hộp B bằng 16/27.', false, 'Dưới A xác suất chuỗi là 1/16, dưới B là 1/9, còn C cho 0. Tỉ trọng của B là (1/9)/(1/16 + 1/9) = 16/25.')
      ],
      loi_giai: [
        'Mỗi hộp có xác suất ban đầu 1/3 nhưng số lượng bóng trong ba hộp khác nhau.',
        'Cần suy ngược nguồn sau khi biết kết quả rút.',
        'Với một hộp đã xác định, hoàn lại bóng và trộn đều làm hai lượt rút độc lập.',
        'Dùng xác suất toàn phần để tính khả năng quan sát rồi lấy tỉ trọng của hộp cần hỏi.',
        'Với một lần thấy số 1, tổng các trọng số là 13/12. Với chuỗi 1 rồi 3, tổng còn 1/16 + 1/9 do C thiếu bóng số 3.',
        'Sau hai lượt, trọng số nguyên của A và B tỉ lệ 9 với 16. Hai xác suất hậu nghiệm 9/25 và 16/25 cộng lại bằng 1.'
      ],
      bay: 'Hoàn lại bóng giúp nhân xác suất từng lượt khi đã cố định hộp. Chọn lại hộp ở lượt hai sẽ tạo ra một mô hình khác.'
    },
    {
      vi_tri: 'TLN1', nhan: 'Tuyến cáp ra đảo', de_nguon: 'pbc2', cau_goc: 'III.5', trang: 4, ban: 'Diễn đạt lại đề gốc',
      de_bai: 'Một đảo A cách bờ biển thẳng 3 km. Trạm B trên bờ cách A đúng 5 km. Cáp đi trên bờ từ B đến điểm C rồi nối thẳng dưới nước tới A. Mỗi kilômét trên bờ tốn 30 triệu đồng, mỗi kilômét dưới nước tốn 50 triệu. Tìm chi phí nhỏ nhất, theo triệu đồng.',
      dap_an: '240', quy_tac_lam_tron: 'Điền số triệu đồng.',
      goi_y: 'Gọi H là hình chiếu của đảo trên bờ. Nếu đặt x = HC, hãy viết riêng chiều dài hai phần cáp trước khi cộng chi phí.',
      mo_hinh_hoa: [
        'Vị trí chuyển từ cáp trên bờ sang dưới nước quyết định tổng chi phí.',
        'H nằm trên bờ, AH = 3. Có thể chọn C trong đoạn BH vì đi ra ngoài đoạn làm tuyến đắt hơn.',
        'Đặt x = HC. Khi đó BC = 4 − x và CA = √(9 + x²).',
        'Tối thiểu hóa tiền cho hai đoạn có đơn giá khác nhau.',
        'So sánh phương án tìm được với hai phương án chuyển tuyến ngay tại B hoặc tại H.'
      ],
      loi_giai: [
        'Tam giác AHB vuông tại H nên BH = √(5² − 3²) = 4 km.',
        'Cần tối thiểu hóa chi phí, mỗi phần tuyến được nhân với đơn giá riêng.',
        'Trên đoạn BH, 0 ≤ x ≤ 4. Nếu C nằm ngoài đoạn này, dịch C về đầu đoạn gần nhất sẽ giảm tổng chi phí.',
        'Hàm chi phí là F(x) = 30(4 − x) + 50√(9 + x²). Đạo hàm bằng −30 + 50x/√(9 + x²).',
        'Giải F′(x) = 0 được x = 9/4. Tỉ số x/√(9 + x²) tăng nên F′ đổi từ âm sang dương. Chiều dài hai phần lần lượt là 7/4 và 15/4 km.',
        'Tổng tiền là 30·7/4 + 50·15/4 = 240 triệu. Hai phương án biên lần lượt tốn 270 và 250 triệu.'
      ],
      bay: 'Đoạn cáp dưới nước là cạnh huyền CA. Lấy HC làm chiều dài cáp dưới nước sẽ bỏ mất khoảng cách từ đảo tới bờ.'
    },
    {
      vi_tri: 'TLN2', nhan: 'Đếm cực trị của hàm hợp', de_nguon: 'pbc2', cau_goc: 'I.5', trang: 1, ban: 'Phát triển thành câu vận dụng',
      de_bai: 'Cho f′(u) = (u − 1)(u − 2)²(u − 3)³ với mọi u thực. Hàm số g(x) = f(x³ − 3x) có bao nhiêu điểm cực trị trên ℝ?',
      dap_an: '6', quy_tac_lam_tron: 'Điền số điểm cực trị.',
      goi_y: 'Đặt h(x) = x³ − 3x. Hãy đánh dấu hai điểm quay đầu của h, sau đó xét các mức h = 1, 2, 3 và kiểm tra chỗ đổi dấu của g′.',
      loi_giai: [
        'Với h = x³ − 3x, ta có g′(x) = (h − 1)(h − 2)²(h − 3)³·3(x − 1)(x + 1).',
        'Cần đếm nghiệm mà g′ đổi dấu. Nghiệm bội chẵn của đa thức g′ không gây đổi dấu.',
        'h tăng đến h(−1) = 2, giảm đến h(1) = −2 rồi lại tăng tới +∞. Ở đầu trái h tiến tới −∞.',
        'Mức h = 1 cắt cả ba nhánh ở ba nghiệm đơn. Mức h = 3 chỉ cắt nhánh phải ở một nghiệm đơn của h − 3. Bốn vị trí này đều cho g′ đổi dấu vì số mũ tương ứng lẻ.',
        'h − 2 = (x + 1)²(x − 2). Tại −1, thừa số (h − 2)² cho bội 4, cộng thêm bội 1 của h′ thành bội 5. Tại x = 2 bội là 2. Tại x = 1 chỉ h′ triệt tiêu với bội 1.',
        'Thêm hai vị trí đổi dấu x = −1 và x = 1 vào bốn vị trí đã đếm, tổng bằng 6. Vị trí x = 2 có tiếp tuyến ngang nhưng g′ giữ dấu.'
      ],
      bay: 'x = −1 đồng thời là nghiệm của h′ và h − 2. Phải cộng các bội tại cùng vị trí trước khi xét đổi dấu.'
    },
    {
      vi_tri: 'TLN3', nhan: 'Bốn số cách đều', de_nguon: 'pbc2', cau_goc: 'III.2', trang: 3, ban: 'Diễn đạt lại đề gốc',
      de_bai: 'Rút đồng thời bốn viên bi từ một hộp gồm 20 viên đánh số khác nhau từ 1 đến 20, mọi bộ bốn viên đều đồng khả năng. Xác suất để khi xếp theo thứ tự tăng dần, bốn số cách đều nhau, có dạng 1/a. Tìm a.',
      dap_an: '85', quy_tac_lam_tron: 'Điền mẫu số a.',
      goi_y: 'Viết bốn số dưới dạng u, u + d, u + 2d, u + 3d. Với mỗi d cố định, có bao nhiêu cách chọn u?',
      mo_hinh_hoa: [
        'Kết quả một lần rút là một tập bốn số phân biệt.',
        'Gọi u là số nhỏ nhất và d là hiệu hai số liên tiếp sau khi sắp xếp.',
        'Điều kiện chính xác là u ≥ 1, d ≥ 1 nguyên và u + 3d ≤ 20.',
        'Đếm số cặp (u, d) hợp lệ rồi chia cho số tổ hợp chọn bốn viên.',
        'Một bộ đạt yêu cầu chỉ cho một cặp (u, d), nên mỗi kết quả được tính đúng một lần.'
      ],
      loi_giai: [
        'Mỗi bộ bốn viên là một trong C(20,4) = 4 845 kết quả có thể xảy ra.',
        'Đề hỏi mẫu số của xác suất sau khi rút gọn.',
        'Từ 1 + 3d ≤ 20 suy ra d nhận các giá trị 1 đến 6.',
        'Với d cố định, u chạy từ 1 đến 20 − 3d, kể cả hai đầu.',
        'Số bộ thuận lợi là 17 + 14 + 11 + 8 + 5 + 2 = 57. Vậy P = 57/4 845 = 1/85.',
        'Với d = 6 chỉ có các bộ bắt đầu bằng 1 và 2. Điều này kiểm tra được số hạng cuối. Điền 85.'
      ],
      bay: 'Tăng d thêm 1 làm số cuối tăng thêm 3. Nhân số bộ thuận lợi với 4! sẽ tính thêm thứ tự mà phép rút không ghi nhận.'
    },
    {
      vi_tri: 'TLN4', nhan: 'Hình chiếu của tâm tấm chắn', de_nguon: 'nk378', cau_goc: 'III.4', trang: 5, ban: 'Biến thể về phép chiếu bằng vectơ',
      de_bai: 'Trong hệ tọa độ tính bằng mét, nguồn sáng S(4; −2; 3) chiếu qua điểm I(x; 2; 1) trên thanh ray, với 4 < x < 36. Tia SI gặp màn x = 36 tại J. Gọi H(36; −2; 3) là hình chiếu vuông góc của S lên màn. Khi SI = 18 m, J cách H bao nhiêu mét?',
      dap_an: '8,21', quy_tac_lam_tron: 'Điền số mét, làm tròn đến hàng phần trăm.',
      goi_y: 'Hai vectơ SJ và SI cùng hướng. Tìm hệ số tỉ lệ bằng tọa độ x, sau đó dùng hai thành phần song song với màn để tính HJ.',
      mo_hinh_hoa: [
        'Tâm của vệt chiếu nằm trên tia đi từ nguồn sáng qua I.',
        'Đặt u = x − 4 > 0, là độ dời theo phương vuông góc với màn.',
        'Viết vectơ SI = (u; 4; −2) và SJ = k·SI.',
        'Dùng độ dài SI để tìm u, rồi dùng hoành độ của J để tìm k.',
        'Khoảng lệch HJ nằm trong màn nên chỉ phụ thuộc vào hai thành phần theo y và z.'
      ],
      loi_giai: [
        'Khoảng cách theo phương x từ nguồn tới màn là 36 − 4 = 32 m.',
        'Cần tính khoảng cách từ tâm chiếu J tới chân vuông góc H trên màn.',
        'Vì SI = 18 và x > 4, ta có u² + 4² + (−2)² = 324, suy ra u = √304.',
        'Từ J = S + k(u; 4; −2) và J có hoành độ 36, được k = 32/√304.',
        'Lấy J trừ H, vectơ HJ = (0; 4k; −2k). Do đó HJ = k√20 = 32√(20/304).',
        'Giá trị xấp xỉ 8,20783 m, điền 8,21. Vì k > 1 nên độ lệch trên màn lớn hơn độ lệch √20 m tại I.'
      ],
      bay: 'Tỉ số phóng đại dùng độ dời theo phương vuông góc với màn. Độ dài xiên SI = 18 m khác với độ dời u trên trục x.'
    }
  ]);

  global.TOAN_DE_TRUONG = { a: setA, b: setB };
})(window);
