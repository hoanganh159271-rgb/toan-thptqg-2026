# Chủ đề 2: Lượng giác – Dãy số – CSC – CSN – Mũ, Logarit (6 lệnh: 3B, 2H, 1VD)

> Ánh xạ Ma trận 2026:
> - **2.1 Lượng giác**: TN `C7-TD1.2` (B)
> - **2.2 Dãy số – CSC – CSN**: TN `C8-TD1.2` (B)
> - **2.3 Mũ – Logarit**: ĐS `C3a,b,c,d-MHH` (1B, 2H, 1VD — Mô hình thực tế)

---

## 2.1. Phương trình lượng giác cơ bản

### a. Định nghĩa & Công thức
1. $\sin x = \sin \alpha \Leftrightarrow \left[\begin{array}{l} x = \alpha + k2\pi \\ x = \pi - \alpha + k2\pi \end{array}\right.$ ($k \in \mathbb{Z}$).
2. $\cos x = \cos \alpha \Leftrightarrow x = \pm \alpha + k2\pi$ ($k \in \mathbb{Z}$).
3. $\tan x = \tan \alpha \Leftrightarrow x = \alpha + k\pi$ ($k \in \mathbb{Z}$, ĐK: $\cos x \neq 0$).
4. $\cot x = \cot \alpha \Leftrightarrow x = \alpha + k\pi$ ($k \in \mathbb{Z}$, ĐK: $\sin x \neq 0$).
- Trường hợp đặc biệt cần nhớ ngay:
  - $\sin x = 1 \Leftrightarrow x = \frac{\pi}{2} + k2\pi$; $\sin x = -1 \Leftrightarrow x = -\frac{\pi}{2} + k2\pi$; $\sin x = 0 \Leftrightarrow x = k\pi$.
  - $\cos x = 1 \Leftrightarrow x = k2\pi$; $\cos x = -1 \Leftrightarrow x = \pi + k2\pi$; $\cos x = 0 \Leftrightarrow x = \frac{\pi}{2} + k\pi$.

### b. Điều kiện áp dụng & Bẫy thường gặp
- $\sin x = m$ hoặc $\cos x = m$ chỉ có nghiệm khi $|m| \le 1$.
- Khi đếm số nghiệm trên đoạn $[a; b]$ hoặc khoảng $(a; b)$: viết rõ bất phương trình $a \le x(k) \le b$ tìm $k \in \mathbb{Z}$, kiểm tra kỹ đầu mút ngoặc vuông `[]` hay ngoặc tròn `()`, và kiểm tra nghiệm trùng nhau giữa hai họ nghiệm (đặc biệt ở đầu mút $0$ và $2\pi$ với $\sin x = 0$ hoặc $\cos x = 1$).
- Nhầm đơn vị góc giữa **radian** và **độ** (không viết $\sin x = \sin 30^\circ \Rightarrow x = 30^\circ + k2\pi$).

---

## 2.2. Dãy số – Cấp số cộng (CSC) – Cấp số nhân (CSN)

### a. Công thức cốt lõi
1. **Cấp số cộng $(u_n)$** có số hạng đầu $u_1$, công sai $d = u_{n+1} - u_n$:
   - Số hạng tổng quát: $u_n = u_1 + (n - 1)d$.
   - Tổng $n$ số hạng đầu:
     $$S_n = \frac{n(u_1 + u_n)}{2} = \frac{n[2u_1 + (n - 1)d]}{2}$$
   - Tính chất 3 số hạng liên tiếp: $u_{k-1} + u_{k+1} = 2u_k$.
2. **Cấp số nhân $(u_n)$** có số hạng đầu $u_1$, công bội $q = \dfrac{u_{n+1}}{u_n}$ ($u_n \neq 0$):
   - Số hạng tổng quát: $u_n = u_1 \cdot q^{n-1}$.
   - Tổng $n$ số hạng đầu ($q \neq 1$):
     $$S_n = u_1 \cdot \frac{1 - q^n}{1 - q}$$
   - (Nếu $q = 1$ thì $S_n = n u_1$).
   - Tính chất 3 số hạng liên tiếp: $u_{k-1} \cdot u_{k+1} = u_k^2$.

### b. Bẫy thường gặp
- Quên chia $2$ trong công thức $S_n$ của CSC, hoặc quên nhân $2$ trước $u_1$ trong $\frac{n[2u_1 + (n-1)d]}{2}$.
- Nhầm công thức CSN thành $q^n$ trong $u_n$ (đúng phải là $q^{n-1}$) hoặc thay sai thành $q^{n-1}$ trong $S_n$ (đúng phải là $q^n$).
- Nhầm dấu của công sai âm $d < 0$ hoặc công bội âm $q < 0$.

---

## 2.3. Hàm số Mũ – Logarit & Mô hình thực tế (`C3a,b,c,d-MHH`)

### a. Công thức & Tính chất bắt buộc
- Lũy thừa với $a > 0, a \neq 1$:
  - $y = a^x$ xác định trên $\mathbb{R}$, đồng biến khi $a > 1$, nghịch biến khi $0 < a < 1$.
  - $y = \log_a x$ xác định trên $(0; +\infty)$, đồng biến khi $a > 1$, nghịch biến khi $0 < a < 1$.
- Phương trình và bất phương trình cơ bản:
  - $a^{f(x)} = b \Leftrightarrow f(x) = \log_a b$ (khi $b > 0$).
  - Với $a > 1$: $a^{f(x)} > a^{g(x)} \Leftrightarrow f(x) > g(x)$; $\log_a f(x) > \log_a g(x) \Leftrightarrow f(x) > g(x) > 0$.
  - Với $0 < a < 1$: dấu bất đẳng thức **đảo chiều** (và vẫn phải giữ điều kiện dương $f(x) > 0, g(x) > 0$).

### b. Các mô hình thực tế MHH trọng tâm GDPT 2018
1. **Tăng trưởng / Phân rã hàm mũ**:
   $$N(t) = N_0 \cdot e^{rt} \quad \text{hoặc} \quad N(t) = N_0 \cdot 2^{t/T} \quad \text{hoặc} \quad m(t) = m_0 \cdot 2^{-t/T}$$
2. **Lãi suất kép**:
   - Gửi 1 lần: $A_n = P(1 + r)^n$ (nếu ghép lãi $k$ lần/năm thì $A = P\left(1 + \frac{r}{k}\right)^{kn}$).
   - Gửi định kỳ đầu mỗi kỳ số tiền $M$: $S_n = M(1 + r)\dfrac{(1+r)^n - 1}{r}$.
3. **Độ pH dung dịch / Độ to âm thanh / Độ richter**:
   - $\text{pH} = -\log_{10}[H^+]$; $\;L = 10\log_{10}\frac{I}{I_0}\ (\text{dB})$; $\;M = \log_{10}\frac{A}{A_0}$.

### c. Bẫy thường gặp ở câu ĐS `C3-MHH`
- **Bẫy 1 (Đơn vị thời gian)**: Hằng số $r$ tính theo *giờ$^{-1}$* hoặc *năm$^{-1}$* nhưng câu hỏi c/d lại cho *phút* hoặc *tháng*.
- **Bẫy 2 (Điều kiện làm tròn số nguyên)**: Khi giải ra $t > 7{,}32$ và đề hỏi *"sau ít nhất bao nhiêu giờ/năm nguyên thì vượt ngưỡng..."* $\Rightarrow$ phải lấy trần $t = 8$, KHÔNG làm tròn xuống $7$.
- **Bẫy 3 (Quên ĐK logarit)**: Khi giải bất phương trình $\log_a f(x) \le k$, quên chặn $f(x) > 0$.