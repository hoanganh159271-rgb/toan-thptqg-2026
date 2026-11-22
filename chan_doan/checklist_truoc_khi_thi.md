# Checklist Cảnh Báo Trước Khi Thi (Các Lỗi Lặp >= 2 Lần)

Quy tắc tự động: bất kỳ loại lỗi nào trong `chan_doan/nhat_ky_loi_sai.md` lặp lại **từ 2 lần trở lên** sẽ được đẩy lên đầu tệp này kèm **1 bài tập vá lỗ hổng nhỏ** thông qua lệnh `/toan-loi`.

---

## Danh sách cảnh báo ưu tiên cao (Đọc 3 phút trước giờ G)

*(Hiện chưa có lỗi lặp >= 2 lần từ nhật ký cá nhân. 5 chốt kiểm tra nền tảng dưới đây khóa chặt các bẫy mất điểm phổ biến nhất của Ma trận Toán 2026 — sẽ tự động nhường vị trí đầu cho các lỗi cá nhân khi bạn nạp nhật ký mới.)*

1. **[Chốt 1 — Không gộp khoảng đơn điệu & Quên ĐKXĐ]**: Với hàm phân thức có TCĐ $x = x_0$ hoặc hàm logarit $\log_a f(x)$, luôn tìm TXĐ trước; tuyệt đối không dùng dấu $\cup$ khi kết luận khoảng đồng biến/nghịch biến.
2. **[Chốt 2 — Đọc đúng đại lượng cực trị & đạo hàm]**: Phân biệt $x_{\text{CĐ}}$ (điểm cực đại hàm số), $y_{\text{CĐ}}$ (giá trị cực đại), và điểm cực đại đồ thị $(x_0; y_0)$; nghiệm bội chẵn của $f'(x)$ không tạo cực trị.
3. **[Chốt 3 — Điều kiện thực tế & làm tròn nguyên ở 4 câu MHH]**: Kiểm tra miền giá trị $x$ ($0 < x < a/2$, $t \ge 0$), quy đổi đơn vị thời gian trước khi thế vào $N_0 e^{rt}$, và khi đề hỏi *"ít nhất bao nhiêu giờ/năm nguyên vượt ngưỡng"* thì lấy trần.
4. **[Chốt 4 — Dấu tích vô hướng & Góc nhị diện 3D]**: Góc hai vectơ $(\vec{u},\vec{v}) \in [0^\circ; 180^\circ]$ nên $\cos$ có thể âm (không lấy trị tuyệt đối như hai đường thẳng); với hình bình hành $ABCD$, dùng $\overrightarrow{AB} = \overrightarrow{DC}$ ($D = A + C - B$); tìm góc nhị diện $[S, BD, A]$ phải dựng chân $AK \perp BD$ chứ không lấy đại trung điểm $O$ nếu đáy không phải hình vuông/thoi.
5. **[Chốt 5 — Chuẩn phiếu tô Phần III (tối đa 4 ký tự)]**: Mọi đáp số TLN chỉ dài tối đa **4 ký tự** (kể cả dấu `-` và dấu `,`/`.`), giữ nguyên phân số trong các bước trung gian và chỉ làm tròn đúng yêu cầu ở bước cuối.

---

## Bẫy trọng tâm Dạng thức 3 (Trả lời ngắn Mức Vận dụng — Cập nhật 2026)

1. **`C1-MHH2.2` (GTLN – GTNN)**: Quên kiểm tra điều kiện nguyên của sản lượng (cần so sánh tại $\lfloor x_0 \rfloor$ và $\lceil x_0 \rceil$); trả lời nhầm giữa $x_0$ và $f(x_0)$; quên đổi đơn vị ($\text{tấn} \leftrightarrow \text{kg}$, $\text{dm} \leftrightarrow \text{m}$); nhầm cực đại hàm $f(t)$ ($f'(t)=0$) với tốc độ tăng lớn nhất ($f''(t)=0$).
2. **`C2-GQ2.2` (Khảo sát & đồ thị)**: Quên loại điểm tiếp xúc bậc chẵn khi đếm nghiệm cắt trục $Ox$ của $|f(x)|$ (công thức $a + b$); quên điều kiện $a \neq 0$ hoặc điều kiện xác định mẫu số; nhầm dấu của cực đại và cực tiểu khi đọc đồ thị.
3. **`C3-MHH2.2` (Xác suất)**: Nhầm lẫn giữa *biến cố xung khắc* và *biến cố độc lập*; đếm lặp hoặc thiếu trường hợp khi chia nhánh; quên trừ $P(A \cap B)$ khi dùng quy tắc cộng mở rộng; không cập nhật lại mẫu số ở bước rút không hoàn lại.
4. **`C4-MHH2.2` (Vectơ 3D)**: Nhầm góc giữa hai vectơ (không đưa về cùng điểm đầu) dẫn đến sai dấu $\cos(\vec{u}, \vec{v})$; quên dấu giá trị tuyệt đối khi tính $\cos$ góc giữa hai đường thẳng; dùng sai gia tốc trọng trường đề cho ($g = 9{,}8$ hay $g = 10\ \text{m/s}^2$).