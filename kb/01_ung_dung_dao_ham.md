# Chủ đề 1: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số (12 lệnh: 5B, 4H, 3VD)

> Ánh xạ Ma trận 2026:
> - **1.1 Tính đơn điệu, cực trị**: TN `C1-TD1.2` (B), TN `C2-TD2.1` (H)
> - **1.2 GTLN và GTNN của hàm số**: TN `C3-TD1.2` (B); TLN `C1-MHH2.2` (VD — Tối ưu thực tế)
> - **1.3 Đường tiệm cận của đồ thị**: TN `C4-GQ1.2` (B), TN `C5-GQ2.1` (H)
> - **1.4 Khảo sát và vẽ đồ thị hàm số**: TN `C6-GQ1.4` (B); TLN `C2-GQ2.2` (VD)
> - **Tổng hợp 1.1–1.4**: ĐS `C1a,b,c,d-GQ` (1B, 2H, 1VD)

---

## 1.1. Tính đơn điệu và Cực trị của hàm số

### a. Định nghĩa & Công thức
- Giả sử hàm số $y = f(x)$ có đạo hàm trên khoảng $K$:
  - $f'(x) > 0, \forall x \in K \Rightarrow f(x)$ đồng biến trên $K$.
  - $f'(x) < 0, \forall x \in K \Rightarrow f(x)$ nghịch biến trên $K$.
  - Mở rộng: Nếu $f'(x) \ge 0$ (hoặc $\le 0$) trên $K$ và $f'(x) = 0$ chỉ tại **hữu hạn điểm** thì $f(x)$ vẫn đồng biến (hoặc nghịch biến) trên $K$.
- **Cực trị**: Nếu $f'(x)$ đổi dấu khi đi qua $x_0 \in D$ thì $x_0$ là điểm cực trị của hàm số:
  - Đổi dấu từ $+$ sang $-$: $x_0$ là điểm cực đại ($x_{\text{CĐ}}$), giá trị cực đại $y_{\text{CĐ}} = f(x_0)$, điểm cực đại của đồ thị $M(x_0; y_{\text{CĐ}})$.
  - Đổi dấu từ $-$ sang $+$: $x_0$ là điểm cực tiểu ($x_{\text{CT}}$), giá trị cực tiểu $y_{\text{CT}} = f(x_0)$.
- Với hàm bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \neq 0$):
  - $y' = 3ax^2 + 2bx + c$. Hàm số có 2 cực trị $\Leftrightarrow \Delta' = b^2 - 3ac > 0$.

### b. Điều kiện áp dụng
- Luôn tìm tập xác định $D$ trước khi xét dấu $f'(x)$ hoặc kết luận khoảng đơn điệu.
- Điểm $x_0$ chỉ là điểm cực trị nếu $f(x)$ liên tục tại $x_0$ (tức $x_0 \in D$) và $f'(x)$ đổi dấu qua $x_0$ (không nhất thiết $f'(x_0)$ tồn tại, ví dụ hàm chứa giá trị tuyệt đối, nhưng phải thuộc $D$).

### c. Nhận diện câu ma trận
- `C1-TD1.2 (B)`: Cho $f'(x)$ dạng tích hoặc bảng xét dấu / đồ thị $f'(x)$, hỏi khoảng đồng biến/nghịch biến.
- `C2-TD2.1 (H)`: Cho biểu thức $y = f(x)$ cụ thể (hoặc chứa tham số đơn giản), hỏi $x_{\text{CĐ}}$, $y_{\text{CĐ}}$, số điểm cực trị.

### d. Bẫy thường gặp
- **Gộp khoảng qua điểm gián đoạn**: Với hàm phân thức có TCĐ $x = x_0$, không được viết $y$ nghịch biến trên $(a; b)$ nếu $x_0 \in (a; b)$, cũng KHÔNG dùng ký hiệu hợp $\cup$ giữa hai khoảng đơn điệu.
- **Nhầm nghiệm kép của $f'(x)$**: Ví dụ $f'(x) = x^2(x-1)$ thì $x=0$ là nghiệm bội chẵn nên $f'(x)$ không đổi dấu qua $0$ $\Rightarrow x=0$ không phải cực trị.
- **Nhầm câu hỏi**: Đọc kỹ đề hỏi **điểm cực đại của hàm số** ($x_0$), **giá trị cực đại** ($y_{\text{CĐ}}$), hay **điểm cực đại của đồ thị** ($(x_0; y_{\text{CĐ}})$).

---

## 1.2. Giá trị lớn nhất (GTLN) và Giá trị nhỏ nhất (GTNN) — Tối ưu MHH

### a. Định nghĩa & Công thức
- Trên đoạn $[a; b]$, nếu $f(x)$ liên tục trên $[a; b]$:
  1. Tìm các điểm $x_i \in (a; b)$ tại đó $f'(x_i) = 0$ hoặc $f'(x_i)$ không xác định.
  2. Tính $f(a), f(b)$ và các $f(x_i)$.
  3. $\max_{[a;b]} f(x) = \max\{f(a), f(b), f(x_i)\}$; $\min_{[a;b]} f(x) = \min\{f(a), f(b), f(x_i)\}$.
- Trên khoảng $(a; b)$ hoặc tập thực tế $D$: phải lập bảng biến thiên (xét thêm giới hạn tại các đầu mút).

### b. Điều kiện áp dụng & Quy trình 5 bước MHH (`C1-MHH2.2`)
1. **Đọc đề thực tế**: Xác định đại lượng cần tối ưu (diện tích, thể tích, chi phí, lợi nhuận, thời gian).
2. **Đặt ẩn & điều kiện thực tế**: Ví dụ chiều dài $x > 0$, cạnh cắt góc hộp vuông cạnh $a$ phải thỏa $0 < x < \frac{a}{2}$.
3. **Lập hàm mục tiêu**: Biểu diễn đại lượng cần tối ưu về 1 biến $f(x)$ thông qua ràng buộc đề bài.
4. **Giải toán**: Tính $f'(x)$, giải $f'(x) = 0$, lập BBT trên miền điều kiện để khẳng định cực trị là GTLN/GTNN.
5. **Đối chiếu thực tế**: Kiểm tra đơn vị, yêu cầu làm tròn tối đa 4 ký tự nếu là câu TLN.

### c. Nhận diện câu ma trận
- `C3-TD1.2 (B)`: Tìm $\max/\min$ của hàm đa thức hoặc phân thức đơn giản trên đoạn $[a; b]$.
- `C1-MHH2.2 (VD — TLN)`: Bài toán thực tế tối ưu hình học/kinh tế/vật lí (gấp hộp, rào vườn, tối ưu chi phí dây dẫn, tối ưu lợi nhuận).

### d. Bẫy thường gặp
- Quên tính giá trị tại hai đầu mút $a, b$ hoặc chọn nhầm điểm $x_i \notin [a; b]$.
- Trong bài toán MHH: nhầm giữa ẩn $x$ đạt tối ưu với giá trị tối ưu $f(x_{\max})$ mà đề hỏi.

---

## 1.3. Đường tiệm cận của đồ thị hàm số

### a. Định nghĩa & Công thức
- **Tiệm cận đứng (TCĐ)**: Đường thẳng $x = x_0$ nếu ít nhất một trong các giới hạn $\lim_{x \to x_0^+} f(x)$ hoặc $\lim_{x \to x_0^-} f(x)$ bằng $+\infty$ hoặc $-\infty$.
- **Tiệm cận ngang (TCN)**: Đường thẳng $y = y_0$ nếu $\lim_{x \to +\infty} f(x) = y_0$ hoặc $\lim_{x \to -\infty} f(x) = y_0$.
- **Tiệm cận xiên (TCX)** *(trọng tâm GDPT 2018)*: Đường thẳng $y = ax + b$ ($a \neq 0$) nếu:
  $$\lim_{x \to +\infty} [f(x) - (ax + b)] = 0 \quad \text{hoặc} \quad \lim_{x \to -\infty} [f(x) - (ax + b)] = 0$$
  Cách tính hệ số khi có dạng $f(x)$ tổng quát:
  $$a = \lim_{x \to \pm\infty} \frac{f(x)}{x}, \qquad b = \lim_{x \to \pm\infty} [f(x) - ax]$$
  Với hàm hữu tỉ $y = \dfrac{P(x)}{Q(x)}$ ($\deg P = \deg Q + 1$): chia đa thức $P(x)$ cho $Q(x)$ được $y = ax + b + \dfrac{r}{Q(x)}$, khi đó TCX chính là $y = ax + b$.

### b. Điều kiện áp dụng
- Nghiệm $x_0$ của mẫu thức chỉ tạo TCĐ nếu tử thức khác $0$ tại $x_0$, hoặc sau khi rút gọn nhân tử chung $(x - x_0)$ thì $x_0$ vẫn làm mẫu bằng $0$ và bậc ở mẫu còn dương.
- Một đồ thị có tối đa 2 TCN (khi $x \to +\infty$ và $x \to -\infty$), và có thể không có TCX nếu đã có TCN ở cả hai đầu $\pm\infty$.

### c. Nhận diện câu ma trận
- `C4-GQ1.2 (B)`: Cho hàm nhất biến $y = \dfrac{ax+b}{cx+d}$ ($c \neq 0, ad - bc \neq 0$), hỏi TCĐ $x = -\dfrac{d}{c}$ và TCN $y = \dfrac{a}{c}$.
- `C5-GQ2.1 (H)`: Cho hàm bậc hai/bậc nhất $y = \dfrac{ax^2+bx+c}{mx+n}$, tìm phương trình tiệm cận xiên.

### d. Bẫy thường gặp
- Không kiểm tra điều kiện triệt tiêu nghiệm mẫu với tử (ví dụ $\dfrac{x^2-1}{x-1}$ rút gọn thành $x+1$ nên không có TCĐ $x=1$).
- Quên chia hệ số bậc cao nhất khi xác định $a$ trong TCX hoặc viết nhầm dấu của hằng số $b$.

---

## 1.4. Khảo sát và vẽ đồ thị hàm số

### a. Ba họ hàm chuẩn GDPT 2018 & Tâm đối xứng
1. **Hàm bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \neq 0$)**:
   - Đuôi đồ thị khi $x \to +\infty$ cùng dấu với $a$ ($a > 0$ nhánh phải đi lên).
   - Luôn có tâm đối xứng $I(x_I; y_I)$ là nghiệm của $y'' = 0 \Leftrightarrow x_I = -\dfrac{b}{3a}$.
2. **Hàm nhất biến $y = \dfrac{ax+b}{cx+d}$ ($c \neq 0, ad - bc \neq 0$)**:
   - $y' = \dfrac{ad-bc}{(cx+d)^2}$ luôn cùng dấu trên từng khoảng xác định.
   - Tâm đối xứng là giao điểm 2 tiệm cận: $I\left(-\dfrac{d}{c}; \dfrac{a}{c}\right)$.
3. **Hàm bậc hai trên bậc nhất $y = \dfrac{ax^2+bx+c}{mx+n} = px + q + \dfrac{r}{mx+n}$ ($am \neq 0, r \neq 0$)**:
   - Tâm đối xứng là giao điểm của TCĐ $x = -\dfrac{n}{m}$ và TCX $y = px + q$.
   - **Đường thẳng đi qua hai điểm cực trị** (khi có 2 cực trị): lấy đạo hàm tử chia đạo hàm mẫu:
     $$y_{\text{đt}} = \frac{(ax^2+bx+c)'}{(mx+n)'} = \frac{2ax+b}{m}$$

### b. Nhận diện câu ma trận & Bẫy thường gặp
- `C6-GQ1.4 (B)`: Nhận diện hàm số từ đồ thị (kiểm tra lần lượt: dạng đồ thị $\to$ dấu $a$ / chiều biến thiên $\to$ giao điểm trục $Oy$ $(0; y_0)$ $\to$ điểm cực trị hoặc tiệm cận).
- `C2-GQ2.2 (VD — TLN)`: Tính khoảng cách, diện tích tam giác hoặc tham số liên quan đến đường thẳng qua hai cực trị / tâm đối xứng của hàm bậc 3 hoặc bậc 2/bậc 1.
- **Bẫy**: Áp dụng công thức đường thẳng qua hai cực trị $\dfrac{P'(x)}{Q'(x)}$ nhưng quên kiểm tra xem hàm số có thực sự tồn tại hai cực trị hay không!