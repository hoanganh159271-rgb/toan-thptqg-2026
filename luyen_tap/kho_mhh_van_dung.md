# Kho Chuyên Sâu: Rèn Kỹ Năng Mô Hình Hóa Toán Học (4 Vị Trí MHH)

Ma trận Đề thi thử TN THPT 2026 dành **4 câu trọng điểm (2,5 điểm / 10)** cho năng lực **Mô hình hóa toán học (MHH)**:
1. **`C3-ĐS`** (Chủ đề 2 — Mũ & Logarit thực tế: 1,00 điểm tối đa)
2. **`C1-TLN`** (`C1-MHH2.2`, Chủ đề 1 — Tối ưu GTLN/GTNN thực tế: 0,50 điểm)
3. **`C3-TLN`** (`C3-MHH2.2`, Chủ đề 3 — Xác suất thực tế / Bayes: 0,50 điểm)
4. **`C4-TLN`** (`C4-MHH2.2`, Chủ đề 4 — Vectơ & Hợp lực 3D thực tế: 0,50 điểm)

---

## Khung Phương Pháp 5 Bước Bắt Buộc Cho Mọi Câu MHH

| Bước | Hành động | Kiểm tra chéo (tránh mất điểm oan) |
| :--- | :--- | :--- |
| **1. Đọc đề thực tế** | Gạch chân đại lượng đầu vào, ràng buộc hình học/kinh tế/xác suất và đại lượng đầu ra cần tìm. | Đọc kỹ **đơn vị đo** (phút vs giờ, cm vs m, % vs thập phân). |
| **2. Đặt ẩn & ĐK thực tế** | Đặt biến $x, t, T$ và ghi chặt miền giá trị có nghĩa thực tế ($x > 0$, $0 < x < \frac{a}{2}$, $t \ge 0$, $P \in [0;1]$). | Nếu có nhiều ẩn, phải tìm ngay phương trình liên kết để khử còn 1 ẩn. |
| **3. Lập hàm / Mô hình** | Chuyển ràng buộc ngôn ngữ sang hàm $f(x)$, $N(t)$, sơ đồ cây Bayes, hoặc phương trình vectơ $\sum \vec{F_i} = \vec{0}$. | Kiểm tra lại tính hợp lý khi thay một giá trị biên đơn giản. |
| **4. Giải toán** | Dùng đạo hàm/BBT (tối ưu), logarit (mũ), Bayes (xác suất), chiếu trục (vectơ 3D). | Giữ giá trị chính xác/phân số qua các bước trung gian. |
| **5. Đối chiếu thực tế** | Kiểm tra nghiệm thuộc ĐK bước 2, trả lời đúng đại lượng đề hỏi, làm tròn chuẩn 4 ký tự TLN. | Đề hỏi *"ít nhất bao nhiêu giờ nguyên"* $\Rightarrow$ luôn lấy **làm tròn lên**. |

---

## Từ điển Chuyển đổi Ngôn ngữ Thực tế $\to$ Mô hình Toán học

- *"Tăng trưởng liên tục với tốc độ tỉ lệ thuận số lượng hiện có"* $\Rightarrow N(t) = N_0 e^{rt}$.
- *"Chu kỳ bán rã / nhân đôi $T$"* $\Rightarrow N(t) = N_0 \cdot 2^{\pm t/T}$.
- *"Cắt 4 góc vuông cạnh $x$ từ tấm bìa chữ nhật $a \times b$ để gấp hộp không nắp"* $\Rightarrow V(x) = x(a-2x)(b-2x)$ với $0 < x < \frac{\min(a,b)}{2}$.
- *"Tỉ lệ phát hiện dương tính trong nhóm có bệnh..."* $\Rightarrow$ Xác suất có điều kiện $P(+|\text{Bệnh})$, ngược lại *"xác suất thực sự mắc bệnh khi xét nghiệm dương tính"* $\Rightarrow$ Dùng Công thức Bayes $P(\text{Bệnh}|+)$.
- *"Vật nặng $P$ treo cân bằng bởi $n$ dây đối xứng nghiêng góc $\alpha$ so với phương thẳng đứng"* $\Rightarrow n \cdot T \cos\alpha = P$.

---

## 4 Bài Luyện Tự Lập Mô Hình (Tự Nháp Trước — Không Giải Hộ)

> **Quy tắc chống học vẹt**: Trước khi xem gợi ý hay gọi `/toan-check`, hãy tự viết ra đủ **Bước 2 (Ẩn & ĐK)** và **Bước 3 (Hàm / Phương trình mô hình)**.

1. **[Luyện C1-TLN — Tối ưu bể chứa]**: Một bể nước hình hộp chữ nhật không nắp đáy vuông cạnh $x$ (m), thể tích cố định $32\ \text{m}^3$. Biết chi phí làm đáy là $400$ nghìn đồng/$\text{m}^2$ và thành bên là $200$ nghìn đồng/$\text{m}^2$. Hãy đặt ẩn và lập hàm tổng chi phí $C(x)$ theo $x$, tìm kích thước để chi phí nhỏ nhất.
2. **[Luyện C3-ĐS — Lãi kép & Lạm phát]**: Gửi tiết kiệm $100$ triệu đồng lãi suất kép $6\%/\text{năm}$ ghép lãi theo quý. Hãy lập công thức số tiền sau $n$ năm và kiểm tra sau ít nhất bao nhiêu quý thì số tiền vượt $120$ triệu đồng.
3. **[Luyện C3-TLN — Kiểm định chất lượng]**: Hai phân xưởng sản xuất $60\%$ và $40\%$ tổng sản lượng, tỉ lệ lỗi lần lượt là $1\%$ và $3\%$. Chọn ngẫu nhiên 1 sản phẩm thấy bị lỗi. Hãy vẽ sơ đồ cây và lập công thức Bayes tính xác suất sản phẩm đó từ phân xưởng thứ nhất.
4. **[Luyện C4-TLN — Trụ nâng 3 chân đối xứng]**: Một máy đo nặng $120\ \text{N}$ đặt trên giá ba chân đối xứng chạm sàn nằm ngang tạo thành tam giác đều bán kính ngoại tiếp $0{,}6\ \text{m}$, đỉnh trụ cao $0{,}8\ \text{m}$. Hãy lập phương trình cân bằng lực theo phương thẳng đứng để tính lực nén dọc mỗi chân trụ.