# Tổng hợp các dạng bài Trả lời ngắn mức Vận dụng và Phương pháp giải (TN THPT 2026)

> Bám sát Ma trận mô tả nội dung, dạng thức câu hỏi, cấp độ tư duy và năng lực của Đề thi thử TN THPT 2026 (GDPT 2018).

---

## I. Phân tích Ma trận Dạng thức 3 (Trả lời ngắn – Mức Vận dụng)

Theo ma trận đề thi thử TN THPT 2026, phần **Dạng thức 3 (Trả lời ngắn – TLN)** gồm tổng cộng **6 câu hỏi** (tương ứng 6 lệnh hỏi), trong đó: **0 câu mức Biết**, **2 câu mức Hiểu** và **4 câu mức Vận dụng**. Bốn câu hỏi mức Vận dụng chiếm trọn trọng tâm phân hóa của đề thi, gồm **3 câu năng lực Mô hình hóa toán học (MHH2.2)** và **1 câu năng lực Giải quyết vấn đề toán học (GQ2.2)**:

| Câu | Chủ đề lớn | Nội dung kiến thức cụ thể | Mã năng lực | Cấp độ |
| :--- | :--- | :--- | :--- | :--- |
| **Câu 1** | 1. Ứng dụng đạo hàm | 1.2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số | `C1-MHH2.2` | Vận dụng |
| **Câu 2** | 1. Ứng dụng đạo hàm | 1.4. Khảo sát và vẽ đồ thị của hàm số | `C2-GQ2.2` | Vận dụng |
| **Câu 3** | 3. Tổ hợp – Xác suất | 3.2. Xác suất của biến cố & 3.3. Quy tắc tính xác suất | `C3-MHH2.2` | Vận dụng |
| **Câu 4** | 4. Vectơ trong không gian | 4.1. Vectơ và các phép toán về vectơ trong không gian | `C4-MHH2.2` | Vận dụng |

### Lưu ý phạm vi ma trận & Quy tắc phiếu tô
- Hai câu Trả lời ngắn còn lại trong ma trận là **`C5-GQ2.2`** (mục 4.2 Tọa độ của vectơ) và **`C6-GQ2.1`** (mục 5.1–5.2 Góc và Khoảng cách) thuộc mức **Hiểu**, không thuộc nhóm Vận dụng.
- Các nội dung `1.1 Tính đơn điệu – cực trị`, `1.3 Đường tiệm cận`, `2. Lượng giác – Dãy số – CSC – CSN – Logarit – Mũ`, `3.1 Nhị thức Newton` và `5. Quan hệ vuông góc` không xuất hiện câu Trả lời ngắn ở mức Vận dụng.
- **Quy tắc điền đáp án Trả lời ngắn**: Phiếu tô chỉ chứa tối đa **4 ký tự** (bao gồm cả dấu trừ `-` và dấu phẩy `,`). Cần đọc kỹ yêu cầu làm tròn (hàng đơn vị, hàng phần mười, hàng phần trăm) và kiểm tra đúng đơn vị đo trước khi ghi kết quả cuối cùng.

---

## II. Chuyên đề 1 (Câu 1 – `C1-MHH2.2`): Giá trị lớn nhất và giá trị nhỏ nhất của hàm số

> **Định hướng năng lực MHH2.2**: Chuyển hóa một tình huống thực tiễn (hình học, kỹ thuật, kinh tế, chuyển động) thành bài toán tìm GTLN/GTNN của hàm số một biến trên một đoạn hoặc khoảng xác định, sử dụng đạo hàm để giải quyết và đối chiếu lại điều kiện thực tế.

### Quy trình giải chuẩn 4 bước
1. **Bước 1 (Chọn ẩn và điều kiện)**: Đặt đại lượng thay đổi làm ẩn $x$ (kèm đơn vị) và xác định miền giá trị hợp lý của $x$ (ví dụ $x > 0$, $a \le x \le b$, hoặc $x \in \mathbb{N}^*$).
2. **Bước 2 (Xây dựng hàm mục tiêu)**: Dùng các hệ thức hình học (định lý Pytago, tam giác đồng dạng, công thức diện tích/thể tích), công thức kinh tế hoặc vật lý để biểu diễn đại lượng cần tối ưu thành hàm một biến $y = f(x)$.
3. **Bước 3 (Khảo sát bằng đạo hàm)**: Tính $f'(x)$, giải phương trình $f'(x) = 0$ để tìm các điểm tới hạn thuộc miền xác định; lập bảng biến thiên (trên khoảng mở) hoặc so sánh các giá trị $f(x_i)$ với hai đầu mút (trên đoạn đóng $[a; b]$).
4. **Bước 4 (Kết luận)**: Trả lời đúng đại lượng đề bài hỏi (phân biệt *giá trị tối ưu* hay *giá trị của biến để đạt tối ưu*) và làm tròn đúng yêu cầu.

### Dạng 1.1. Bài toán tối ưu hóa hình học, chi phí lắp đặt và đường đi ngắn nhất
- **Nhận diện**: Cắt gấp vật liệu (hình hộp, hình trụ, hình nón) để tối đa hóa thể tích hoặc tối thiểu hóa diện tích toàn phần/chi phí nguyên liệu; chọn vị trí điểm trung gian nối đường dây điện, ống dẫn dầu, di chuyển giữa hai môi trường khác đơn giá/vận tốc.
- **Công thức hỗ trợ**:
  - Hình hộp chữ nhật kích thước $a, b, h$: $V = abh$; $\;S_{\text{xq}} = 2(a+b)h$; $\;S_{\text{đáy}} = ab$.
  - Hình trụ bán kính $r$, chiều cao $h$: $V = \pi r^2 h$; $\;S_{\text{xq}} = 2\pi rh$; $\;S_{\text{tp}} = 2\pi rh + 2\pi r^2$.
  - Hình nón bán kính $r$, chiều cao $h$, đường sinh $l = \sqrt{r^2 + h^2}$: $V = \frac{1}{3}\pi r^2 h$; $\;S_{\text{xq}} = \pi rl$.

**Ví dụ minh họa 1.1**: Một công ty cần xây dựng đường ống dẫn dầu từ điểm $A$ trên bờ biển đến giàn khoan ở điểm $C$ ngoài khơi. Biết $C$ cách bờ biển $CB = 6\ \text{km}$ ($B$ là hình chiếu vuông góc của $C$ trên bờ biển) và dọc bờ biển $AB = 9\ \text{km}$. Chi phí lắp đặt trên bờ là $100$ triệu đồng/km và dưới biển là $260$ triệu đồng/km. Chọn điểm $M$ nằm giữa $A$ và $B$ để lắp dọc $AM$ rồi đi thẳng dưới biển theo $MC$. Tính tổng chi phí nhỏ nhất (triệu đồng).
- **Lời giải**: Đặt $BM = x$ ($0 \le x \le 9$). Khi đó $AM = 9 - x$ và $MC = \sqrt{x^2 + 36}$.
  Hàm chi phí: $C(x) = 100(9 - x) + 260\sqrt{x^2 + 36}$.
  $C'(x) = -100 + \frac{260x}{\sqrt{x^2+36}} = 0 \Leftrightarrow 13x = 5\sqrt{x^2+36} \Leftrightarrow x = 2{,}5 \in [0; 9]$.
  So sánh $C(0) = 2460$, $C(2{,}5) = 650 + 260 \cdot 6{,}5 = 2340$, $C(9) = 260\sqrt{117} \approx 2812{,}3$.
- **Đáp số điền phiếu**: `2340`

### Dạng 1.2. Bài toán tối ưu kinh tế (doanh thu, lợi nhuận, chi phí trung bình)
- **Nhận diện**: Cho mối quan hệ tuyến tính giữa giá bán $p$ và lượng tiêu thụ $Q$, hoặc cho sẵn hàm tổng chi phí $C(x)$ và hàm cầu $p(x)$.
- **Công thức cốt lõi**:
  - Doanh thu: $R(x) = p(x) \cdot Q(x)$.
  - Lợi nhuận: $L(x) = R(x) - C(x) = (\text{Giá bán} - \text{Chi phí đơn vị})\cdot Q(x) - \text{Chi phí cố định}$.
  - Chi phí trung bình trên 1 sản phẩm: $\bar{C}(x) = \frac{C(x)}{x}$.
  - **Mẹo ẩn nguyên**: Nếu điểm cực trị $x_0$ không nguyên nhưng sản lượng phải là số nguyên, so sánh giá trị hàm tại $\lfloor x_0 \rfloor$ và $\lceil x_0 \rceil$.

**Ví dụ minh họa 1.2**: Bán giá $200$ nghìn/sp được $240$ sp/tháng. Cứ giảm $5$ nghìn đồng/sp thì lượng bán tăng $20$ sp/tháng. Chi phí sản xuất $120$ nghìn đồng/sp. Nên bán giá bao nhiêu nghìn đồng để lợi nhuận tháng lớn nhất?
- **Lời giải**: Gọi $x$ (nghìn đồng) là số tiền giảm giá ($0 \le x < 80$). Lợi nhuận đơn vị $80 - x$, sản lượng $Q(x) = 240 + 4x$.
  $L(x) = (80 - x)(240 + 4x) = -4x^2 + 80x + 19200 \Rightarrow L'(x) = -8x + 80 = 0 \Leftrightarrow x = 10$.
  Vì $L''(x) = -8 < 0$ nên $L$ đạt cực đại tại $x = 10$. Giá bán tối ưu $p = 200 - 10 = 190$.
- **Đáp số điền phiếu**: `190`

### Dạng 1.3. Bài toán tối ưu vật lý, chuyển động, nhiên liệu và sinh học
- **Nhận diện**: Quãng đường–vận tốc–gia tốc ($v(t)=s'(t), a(t)=v'(t)$), tàu chạy ngược/xuôi dòng tối thiểu chi phí nhiên liệu, thời điểm nồng độ/tốc độ tăng trưởng cực đại.
- **Lưu ý phân biệt**:
  - *"Đại lượng $f(t)$ đạt GTLN/GTNN"* $\Rightarrow$ giải $f'(t) = 0$.
  - *"Đại lượng $f(t)$ tăng nhanh nhất (tốc độ thay đổi lớn nhất)"* $\Rightarrow$ tìm GTLN của $f'(t)$, tức giải $f''(t) = 0$.

**Ví dụ minh họa 1.3**: Tàu chạy ngược dòng $120\ \text{km}$ với vận tốc nước yên lặng $v\ (\text{km/h})$, vận tốc nước $6\ \text{km/h}$, chi phí nhiên liệu mỗi giờ $P(v) = 0{,}05v^3$ (triệu đồng/giờ). Tìm $v$ để tổng chi phí nhỏ nhất.
- **Lời giải**: ĐK $v > 6$. Thời gian $t = \frac{120}{v-6}$. Chi phí $T(v) = \frac{120}{v-6}\cdot 0{,}05v^3 = \frac{6v^3}{v-6}$.
  $T'(v) = \frac{12v^2(v - 9)}{(v - 6)^2} = 0 \Leftrightarrow v = 9$. Lập bảng xét dấu trên $(6; +\infty)$ suy ra $T(v)$ đạt GTNN tại $v = 9$.
- **Đáp số điền phiếu**: `9`

---

## III. Chuyên đề 2 (Câu 2 – `C2-GQ2.2`): Khảo sát và vẽ đồ thị của hàm số

> **Định hướng năng lực GQ2.2**: Vận dụng tổng hợp các đặc trưng của đồ thị ba lớp hàm trọng tâm GDPT 2018 (bậc ba, nhất biến, bậc hai/bậc nhất) để khôi phục hàm số, giải bài toán tham số/tương giao/trị tuyệt đối và tính chất hình học trên đồ thị.

### Dạng 2.1. Khôi phục công thức hàm số từ đồ thị, BBT hoặc dữ kiện tiệm cận – cực trị
- **Hàm bậc ba $y = ax^3 + bx^2 + cx + d$**: đọc $d = y(0)$ từ giao $Oy$; biết 2 cực trị $x_1, x_2$ viết $y' = 3a(x-x_1)(x-x_2)$; tâm đối xứng $I(-\frac{b}{3a}; y_I)$ là trung điểm đoạn nối 2 cực trị.
- **Hàm bậc hai trên bậc nhất $y = \frac{ax^2+bx+c}{mx+n}$ ($am \neq 0$)**: tách phần nguyên $y = px + q + \frac{k}{mx+n}$ ($k \neq 0$); khai thác TCĐ $x = -\frac{n}{m}$, TCX $y = px+q$, tâm đối xứng $I$ và điểm cực trị/điểm đi qua.

**Ví dụ minh họa 2.1**: Cho $y = \frac{ax^2+bx+c}{x+d}$ có TCĐ $x = 1$, TCX $y = x + 2$ và đạt cực đại tại $x = -1$. Tính $T = a + 2b + 3c - 4d$.
- **Lời giải**: TCĐ $x = 1 \Rightarrow d = -1$. TCX $y = x + 2 \Rightarrow y = x + 2 + \frac{k}{x-1}$ ($k \neq 0$).
  $y' = 1 - \frac{k}{(x-1)^2}$; $y'(-1) = 0 \Leftrightarrow k = 4$. Kiểm tra $y' = \frac{(x+1)(x-3)}{(x-1)^2}$ đổi dấu $+$ sang $-$ qua $x = -1$ (nhận).
  Quy đồng $y = \frac{x^2 + x + 2}{x - 1} \Rightarrow a=1, b=1, c=2, d=-1 \Rightarrow T = 1 + 2 + 6 - 4(-1) = 13$.
- **Đáp số điền phiếu**: `13`

### Dạng 2.2. Bài toán tham số, tương giao và số điểm cực trị của hàm trị tuyệt đối / hàm hợp
- **Cô lập tham số**: Biến đổi $F(x,m) = 0 \Leftrightarrow f(x) = g(m)$ hoặc đặt ẩn phụ $t = u(x)$.
- **Cực trị hàm trị tuyệt đối**:
  - $y = |f(x)|$ có số điểm cực trị là $a + b$ ($a$: số cực trị của $f$; $b$: số giao điểm cắt ngang bội lẻ của $f$ với $Ox$).
  - $y = f(|x|)$ có số điểm cực trị là $2k + 1$ ($k$: số điểm cực trị dương của $f$, với $f$ liên tục tại $0$).

**Ví dụ minh họa 2.2**: Cho $f(x) = x^3 - 3x^2 - 9x + m$. Có bao nhiêu giá trị nguyên $m \in [-20; 30]$ để $y = |f(x)|$ có đúng 5 điểm cực trị?
- **Lời giải**: $f'(x) = 3x^2 - 6x - 9 = 0 \Leftrightarrow x = -1; x = 3$ ($a = 2$). Cần $b = 3$ nên $y_{\text{CT}} < 0 < y_{\text{CĐ}} \Leftrightarrow m - 27 < 0 < m + 5 \Leftrightarrow -5 < m < 27$. Vì $m \in \mathbb{Z} \cap [-20; 30]$ nên $m \in \{-4; \dots; 26\}$, có $26 - (-4) + 1 = 31$ giá trị.
- **Đáp số điền phiếu**: `31`

### Dạng 2.3. Tính chất hình học của đồ thị hàm số (khoảng cách, cực trị, đối xứng, tiếp tuyến)
- Với hàm phân thức, đặt $M(x_0; y_0) \in (C)$, biểu diễn khoảng cách theo biến phụ $t = |mx_0 + n| > 0$, áp dụng AM-GM $At + \frac{B}{t} \ge 2\sqrt{AB}$.
- Với hàm bậc ba, đường thẳng đi qua 2 điểm cực trị là phần dư $r(x)$ khi chia $f(x)$ cho $f'(x)$.

**Ví dụ minh họa 2.3**: Cho $y = \frac{x^2-2x+5}{x-1}$ có 2 cực trị $A, B$. Gọi $d_1, d_2$ là khoảng cách từ $M \in (C)$ bất kỳ đến TCĐ và TCX. Tính $P = \frac{AB}{d_1 \cdot d_2}$ (làm tròn hàng phần trăm).
- **Lời giải**: $y = x - 1 + \frac{4}{x-1}$; TCĐ $\Delta_1: x - 1 = 0$, TCX $\Delta_2: x - y - 1 = 0$.
  $d_1 \cdot d_2 = |x_0 - 1| \cdot \frac{4}{\sqrt{2}|x_0 - 1|} = 2\sqrt{2}$. Cực trị tại $x=3 \Rightarrow A(3;4)$, $x=-1 \Rightarrow B(-1;-4) \Rightarrow AB = \sqrt{80} = 4\sqrt{5}$.
  $P = \frac{4\sqrt{5}}{2\sqrt{2}} = \sqrt{10} \approx 3{,}16$.
- **Đáp số điền phiếu**: `3,16`

---

## IV. Chuyên đề 3 (Câu 3 – `C3-MHH2.2`): Xác suất của biến cố và Quy tắc tính xác suất

> **Định hướng năng lực MHH2.2**: Mô hình hóa tình huống ngẫu nhiên thực tế (xếp chỗ, nhân sự, kiểm tra chất lượng, hệ thống kỹ thuật, thí nghiệm nhiều bước) bằng không gian mẫu, tổ hợp hoặc hệ biến cố rồi tính xác suất.

### Dạng 3.1. Xác suất cổ điển kết hợp bài toán đếm có ràng buộc
- Phân biệt chọn có thứ tự ($P_n = n!$, $A_n^k$) và không thứ tự ($C_n^k$).
- Ba kỹ thuật đếm chủ lực: **bó buộc** (gom nhóm kề nhau nhân hoán vị nội bộ), **vách ngăn** (xếp nhóm còn lại tạo khoảng trống trước), **biến cố đối** $P(A) = 1 - P(\overline{A})$.

**Ví dụ minh họa 3.1**: Xếp ngẫu nhiên 5 bác sĩ nam và 3 bác sĩ nữ vào 8 ghế hàng ngang. Tính xác suất không có hai bác sĩ nữ nào ngồi cạnh nhau (làm tròn hàng phần trăm).
- **Lời giải**: $n(\Omega) = 8!$. Xếp 5 nam có $5!$ cách tạo $6$ khoảng trống; xếp 3 nữ vào 3 khoảng trống có $A_6^3 = 120$ cách $\Rightarrow P(A) = \frac{5!\cdot 120}{8!} = \frac{5}{14} \approx 0{,}36$.
- **Đáp số điền phiếu**: `0,36`

### Dạng 3.2. Quy tắc nhân biến cố độc lập và quy tắc cộng mở rộng
- $A, B$ độc lập $\Rightarrow P(A \cap B) = P(A)\cdot P(B)$; quy tắc cộng: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- Hệ thống kỹ thuật: **Mắc nối tiếp** $P = P(A_1)P(A_2)\cdots P(A_n)$; **Mắc song song** (ít nhất 1 hoạt động) $P = 1 - P(\overline{A_1})P(\overline{A_2})\cdots P(\overline{A_n})$.

**Ví dụ minh họa 3.2**: Hai cảm biến $A, B$ mắc song song nối tiếp với chuông $C$ (độc lập). Biết $P(A)=0{,}9; P(B)=0{,}8; P(C)=0{,}95$. Tính xác suất hệ thống hoạt động bình thường (hàng phần trăm).
- **Lời giải**: $P(E) = 1 - (1-0{,}9)(1-0{,}8) = 1 - 0{,}02 = 0{,}98$; $P(H) = 0{,}98 \cdot 0{,}95 = 0{,}931 \approx 0{,}93$.
- **Đáp số điền phiếu**: `0,93`

### Dạng 3.3. Phép thử nhiều bước phụ thuộc (sơ đồ cây & chia trường hợp xung khắc)
- Phân hoạch đầy đủ bước 1 ($H_1, \dots, H_k$), cập nhật lại mẫu số/tử số trên mỗi nhánh ở bước 2, rồi cộng xác suất $P(B) = \sum P(H_i \cap B)$.

**Ví dụ minh họa 3.3**: Hộp I có 5 xanh, 3 đỏ; hộp II có 4 xanh, 6 đỏ. Chuyển ngẫu nhiên 1 thẻ từ hộp I sang hộp II rồi rút 1 thẻ ở hộp II. Tính xác suất rút được thẻ xanh (hàng phần trăm).
- **Lời giải**: $P(B) = \frac{5}{8}\cdot\frac{5}{11} + \frac{3}{8}\cdot\frac{4}{11} = \frac{37}{88} \approx 0{,}4205 \approx 0{,}42$.
- **Đáp số điền phiếu**: `0,42`

---

## V. Chuyên đề 4 (Câu 4 – `C4-MHH2.2`): Vectơ và các phép toán về vectơ trong không gian

> **Định hướng năng lực MHH2.2**: Chuyển hóa hiện tượng cơ học – kỹ thuật 3D (treo cân bằng, hợp lực đồng quy, công cơ học, kết cấu không gian) thành phép toán vectơ và tích vô hướng.

### Dạng 4.1. Bài toán cân bằng lực của vật treo đối xứng (đèn chùm, cần cẩu, dây cáp)
- Điều kiện cân bằng: $\vec{F_1} + \dots + \vec{F_n} + \vec{P} = \vec{0}$ ($P = mg$).
- Treo bằng 3 dây (tâm $G$): $\overrightarrow{AS}+\overrightarrow{BS}+\overrightarrow{CS} = 3\overrightarrow{GS}$; treo bằng 4 dây (tâm $O$): $\overrightarrow{AS}+\overrightarrow{BS}+\overrightarrow{CS}+\overrightarrow{DS} = 4\overrightarrow{OS}$.
- Công thức nhanh $n$ dây đối xứng nghiêng góc $\alpha$ so với phương thẳng đứng: $T = \frac{P}{n\cos\alpha}$.

**Ví dụ minh họa 4.1**: Đèn chùm $m = 6\ \text{kg}$ treo bởi 4 xích $SA, SB, SC, SD$ thành chóp tứ giác đều có $\widehat{ASC} = 60^\circ$, $g = 10\ \text{m/s}^2$. Tính lực căng mỗi xích (hàng phần mười).
- **Lời giải**: $P = 60\ \text{N}$, $\alpha = \widehat{ASO} = 30^\circ$. $4T\cos 30^\circ = 60 \Leftrightarrow 2\sqrt{3}T = 60 \Leftrightarrow T = 10\sqrt{3} \approx 17{,}3\ \text{N}$.
- **Đáp số điền phiếu**: `17,3`

### Dạng 4.2. Tổng hợp nhiều lực không đồng phẳng và công cơ học của lực
- Độ lớn 3 lực đồng quy: $|\vec{F}|^2 = F_1^2 + F_2^2 + F_3^2 + 2F_1F_2\cos(\vec{F_1},\vec{F_2}) + 2F_2F_3\cos(\vec{F_2},\vec{F_3}) + 2F_3F_1\cos(\vec{F_3},\vec{F_1})$.
- Công cơ học: $A = \vec{F}\cdot\vec{d} = |\vec{F}||\vec{d}|\cos(\vec{F}, \vec{d})$ (đưa về cùng điểm đầu trước khi lấy góc).

**Ví dụ minh họa 4.2**: Tại nút $O$ có 3 lực $F_1=20\ \text{N}, F_2=30\ \text{N}, F_3=40\ \text{N}$; góc $(\vec{F_1},\vec{F_2})=60^\circ$ và $\vec{F_3}$ vuông góc mặt phẳng chứa $\vec{F_1}, \vec{F_2}$. Tính $|\vec{F}|$ (hàng phần mười).
- **Lời giải**: $\vec{F_1}\cdot\vec{F_3} = \vec{F_2}\cdot\vec{F_3} = 0$, $\vec{F_1}\cdot\vec{F_2} = 20\cdot 30\cdot\frac{1}{2} = 300$.
  $|\vec{F}|^2 = 20^2 + 30^2 + 40^2 + 2\cdot 300 = 3500 \Rightarrow |\vec{F}| = 10\sqrt{35} \approx 59{,}2\ \text{N}$.
- **Đáp số điền phiếu**: `59,2`

### Dạng 4.3. Tính góc và độ dài trong mô hình không gian bằng phương pháp vectơ cơ sở
- Chọn 3 vectơ cơ sở $\vec{x}, \vec{y}, \vec{z}$ không đồng phẳng đã biết độ dài và góc, biểu diễn $\vec{u}, \vec{v}$ qua $\vec{x}, \vec{y}, \vec{z}$, suy ra $\cos(d_1, d_2) = \frac{|\vec{u}\cdot\vec{v}|}{|\vec{u}||\vec{v}|}$.

**Ví dụ minh họa 4.3**: Hình lập phương $ABCD.A'B'C'D'$ cạnh $a$, $M$ là trung điểm $CC'$. Tính góc giữa $AM$ và $BD'$ (độ, hàng phần mười).
- **Lời giải**: $\overrightarrow{AM} = \vec{x} + \vec{y} + \frac{1}{2}\vec{z}$, $\overrightarrow{BD'} = -\vec{x} + \vec{y} + \vec{z}$.
  $|\overrightarrow{AM}| = \frac{3}{2}a$, $|\overrightarrow{BD'}| = \sqrt{3}a$, $\overrightarrow{AM}\cdot\overrightarrow{BD'} = \frac{1}{2}a^2$.
  $\cos\varphi = \frac{1/2}{(3/2)\sqrt{3}} = \frac{\sqrt{3}}{9} \Rightarrow \varphi \approx 78{,}9^\circ$.
- **Đáp số điền phiếu**: `78,9`

---

## VI. Bảng tổng kết chiến lược làm bài và các bẫy cần tránh

| Mã câu | Công cụ giải nhanh cốt lõi | Bẫy sai lầm thường gặp cần tránh |
| :--- | :--- | :--- |
| **`C1-MHH2.2`** (GTLN–GTNN) | Quy về hàm 1 biến, $f'(x) = 0$, so sánh hai đầu mút hoặc lập BBT. | Quên kiểm tra ĐK nguyên của sản lượng; trả lời nhầm giữa $x_0$ và $f(x_0)$; quên đổi đơn vị ($\text{tấn} \leftrightarrow \text{kg}$, $\text{dm} \leftrightarrow \text{m}$); nhầm cực đại hàm $f(t)$ với tốc độ tăng lớn nhất ($f''(t)=0$). |
| **`C2-GQ2.2`** (Khảo sát hàm số) | Tách phần nguyên hàm phân thức; công thức $a+b$ cho $\lvert f(x) \rvert$; cô lập $m$. | Quên loại điểm tiếp xúc bậc chẵn khi đếm nghiệm cắt $Ox$; quên ĐK $a \neq 0$ hoặc ĐKXĐ mẫu số; nhầm dấu cực đại và cực tiểu trên đồ thị. |
| **`C3-MHH2.2`** (Xác suất) | Phân biệt $A_n^k$ và $C_n^k$; bó buộc/vách ngăn; biến cố đối; sơ đồ cây. | Nhầm xung khắc với độc lập; đếm lặp/thiếu nhánh; quên trừ $P(A\cap B)$ khi dùng quy tắc cộng; quên cập nhật mẫu số khi rút không hoàn lại. |
| **`C4-MHH2.2`** (Vectơ 3D) | Cân bằng $T = \frac{P}{n\cos\alpha}$; bình phương vô hướng $\lvert\sum\vec{F_i}\rvert^2$; 3 vectơ cơ sở. | Nhầm góc hai vectơ (chưa chung gốc) dẫn đến sai dấu $\cos(\vec{u},\vec{v})$; quên trị tuyệt đối cho góc hai đường thẳng; dùng nhầm $g=9{,}8$ hay $g=10\ \text{m/s}^2$. |

---

## VII. Mở rộng: 2 câu Trả lời ngắn mức Hiểu theo Ma trận (`C5-GQ2.2` và `C6-GQ2.1`)

1. **Câu 5 (`C5-GQ2.2`) — Tọa độ vectơ trong không gian $Oxyz$**:
   - **Ví dụ minh họa 5**: Flycam bay thẳng từ $A(1; -2; 3)$ đến $B(5; 6; 11)$, đi được $\frac{3}{4}$ quãng đường thì ở $M(a;b;c)$. Tính $T = a + 2b - c$.
   - **Lời giải**: $\overrightarrow{AB} = (4; 8; 8) \Rightarrow \overrightarrow{AM} = (3; 6; 6) \Rightarrow M(4; 4; 9) \Rightarrow T = 4 + 2(4) - 9 = 3$. **Đáp số**: `3`
2. **Câu 6 (`C6-GQ2.1`) — Góc và Khoảng cách trong không gian**:
   - **Ví dụ minh họa 6**: Chóp $S.ABCD$ đáy vuông cạnh $2$, $SA \perp (ABCD)$, $SA = \sqrt{6}$. Tính góc nhị diện $[S, BD, A]$ (độ).
   - **Lời giải**: $O = AC \cap BD \Rightarrow AO \perp BD$ và $SO \perp BD$, nên góc nhị diện là $\widehat{SOA}$; $\tan\widehat{SOA} = \frac{\sqrt{6}}{\sqrt{2}} = \sqrt{3} \Rightarrow 60^\circ$. **Đáp số**: `60`

---

## VIII. Bộ đề tự luyện Trả lời ngắn chuẩn Ma trận TN THPT 2026

> Thực hành trực tiếp với bấm giờ & chấm điểm tự động tại `luyen_tap/phong_thi_toan.html` (`?mode=tln_de1` hoặc `?mode=tln_de2`).

### Đề tự luyện số 01
1. **(`C1-MHH2.2` – VD)**: Tấm bìa vuông cạnh $12\ \text{cm}$, cắt 4 góc vuông cạnh $x$ (cm) gập thành hộp không nắp. Tính thể tích lớn nhất ($\text{cm}^3$).
2. **(`C2-GQ2.2` – VD)**: Hàm bậc ba $y = f(x) = ax^3+bx^2+cx+d$ đạt CĐ tại $x=0$ ($y_{\text{CĐ}}=5$) và CT tại $x=2$ ($y_{\text{CT}}=1$). Tính $f(4)$.
3. **(`C3-MHH2.2` – VD)**: Bắn độc lập 3 viên đạn, xác suất trúng mỗi lần là $0{,}7$. Tính xác suất có ít nhất 2 viên trúng (hàng phần trăm).
4. **(`C4-MHH2.2` – VD)**: Vật nặng $P = 90\ \text{N}$ treo cân bằng bởi 3 dây đối xứng tạo chóp tam giác đều $S.ABC$, mỗi dây nghiêng $30^\circ$ so với phương thẳng đứng. Tính lực căng mỗi dây (hàng phần mười).
5. **(`C5-GQ2.2` – H)**: Trong $Oxyz$, cho $A(1;2;-1)$, $B(3;0;2)$, $C(2;4;1)$. Tìm $S = x_D+y_D+z_D$ để $ABCD$ là hình bình hành.
6. **(`C6-GQ2.1` – H)**: Chóp $S.ABC$ đáy vuông cân tại $B$, $AB=3$, $SA \perp (ABC)$, $SA=4$. Tính $d(A, (SBC))$.

### Đề tự luyện số 02
1. **(`C1-MHH2.2` – VD)**: Chi phí sản xuất $x$ sản phẩm ($1 \le x \le 100$) là $C(x) = 0{,}2x^2 + 10x + 80$ (triệu đồng). Cần sản xuất bao nhiêu sp mỗi ngày để chi phí trung bình nhỏ nhất?
2. **(`C2-GQ2.2` – VD)**: Cho $y = \frac{ax+b}{x+c}$ có TCĐ $x=2$, TCN $y=3$ và qua $A(3;5)$. Tính $K = a+b+c$.
3. **(`C3-MHH2.2` – VD)**: Hộp có 6 bi đỏ và 4 bi xanh, lấy ngẫu nhiên 3 bi. Tính xác suất có ít nhất 1 bi xanh (hàng phần trăm).
4. **(`C4-MHH2.2` – VD)**: Tại $O$ có 3 lực $\vec{F_1},\vec{F_2},\vec{F_3}$ đôi một tạo góc $60^\circ$ cùng độ lớn $10\ \text{N}$. Tính độ lớn hợp lực $|\vec{F}|$ (N, hàng phần mười).
5. **(`C5-GQ2.2` – H)**: Trong $Oxyz$, cho $\vec{u}=(2;1;2)$, $\vec{v}=(1;2;2)$. Tính $\cos(\vec{u},\vec{v})$ (hàng phần trăm).
6. **(`C6-GQ2.1` – H)**: Hình lập phương $ABCD.A'B'C'D'$ cạnh $6$. Tính $d(AA', BD)$ (hàng phần trăm).

### Bảng đáp số & hướng dẫn giải vắn tắt
| Đề – Câu | Đáp số | Hướng dẫn giải vắn tắt |
| :--- | :--- | :--- |
| Đề 1 – C1 | **`128`** | $V(x)=x(12-2x)^2\ (0<x<6)$; $V'(x)=12(x-2)(x-6)=0 \Rightarrow x=2 \Rightarrow V_{\max}=128$. |
| Đề 1 – C2 | **`21`** | $f'(x)=3ax(x-2) \Rightarrow f(x)=ax^3-3ax^2+d$. $f(0)=5 \Rightarrow d=5$; $f(2)=5-4a=1 \Rightarrow a=1 \Rightarrow f(4)=21$. |
| Đề 1 – C3 | **`0,78`** | $P = C_3^2(0{,}7)^2(0{,}3) + (0{,}7)^3 = 0{,}441 + 0{,}343 = 0{,}784 \approx 0{,}78$. |
| Đề 1 – C4 | **`34,6`** | $3T\cos 30^\circ = 90 \Rightarrow T = 20\sqrt{3} \approx 34{,}6$. |
| Đề 1 – C5 | **`4`** | $\overrightarrow{AB}=\overrightarrow{DC} \Leftrightarrow (2;-2;3)=(2-x_D;4-y_D;1-z_D) \Rightarrow D(0;6;-2) \Rightarrow S=4$. |
| Đề 1 – C6 | **`2,4`** | $BC \perp (SAB)$, kẻ $AH \perp SB \Rightarrow d(A,(SBC))=AH=\frac{SA\cdot AB}{\sqrt{SA^2+AB^2}}=\frac{12}{5}=2{,}4$. |
| Đề 2 – C1 | **`20`** | $\bar{C}(x)=0{,}2x+10+\frac{80}{x}$; $\bar{C}'(x)=0{,}2-\frac{80}{x^2}=0 \Rightarrow x=20 \in [1;100]$. |
| Đề 2 – C2 | **`-3`** | TCĐ $x=2 \Rightarrow c=-2$; TCN $y=3 \Rightarrow a=3$; qua $A(3;5) \Rightarrow 9+b=5 \Rightarrow b=-4 \Rightarrow K=-3$. |
| Đề 2 – C3 | **`0,83`** | Biến cố đối (3 bi đỏ): $P = 1 - \frac{C_6^3}{C_{10}^3} = 1 - \frac{20}{120} = \frac{5}{6} \approx 0{,}83$. |
| Đề 2 – C4 | **`24,5`** | $\lvert\vec{F}\rvert^2 = 3\cdot 10^2 + 6\cdot 10\cdot 10\cdot\cos 60^\circ = 600 \Rightarrow \lvert\vec{F}\rvert = 10\sqrt{6} \approx 24{,}5$. |
| Đề 2 – C5 | **`0,89`** | $\cos(\vec{u},\vec{v}) = \frac{2\cdot 1 + 1\cdot 2 + 2\cdot 2}{\sqrt{2^2+1^2+2^2}\cdot\sqrt{1^2+2^2+2^2}} = \frac{8}{9} \approx 0{,}89$. |
| Đề 2 – C6 | **`4,24`** | $O=AC\cap BD$, có $AO \perp AA'$ và $AO \perp BD \Rightarrow d(AA',BD)=AO=3\sqrt{2}\approx 4{,}24$. |