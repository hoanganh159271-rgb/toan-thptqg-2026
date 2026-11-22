# Chủ đề 3: Tổ hợp – Xác suất (6 lệnh: 2B, 2H, 2VD)

> Ánh xạ Ma trận 2026:
> - **3.1 Nhị thức Newton**: TN `C9-GQ1.2` (B)
> - **3.2 Xác suất của biến cố & 3.3 Quy tắc tính xác suất**: ĐS `C4a,b,c,d-GQ` (1B, 2H, 1VD); TLN `C3-MHH2.2` (VD — Bài toán thực tế)

---

## 3.1. Nhị thức Newton (`C9-GQ1.2`)

### a. Công thức & Điều kiện áp dụng
- Theo GDPT 2018 (lớp 10, $n \in \{4, 5\}$) và công thức tổng quát với $n \in \mathbb{N}^*$:
  $$(a + b)^n = \sum_{k=0}^{n} C_n^k \, a^{n-k} \, b^k$$
- **Số hạng tổng quát** thứ $k+1$ (đếm từ $k = 0$):
  $$T_{k+1} = C_n^k \, a^{n-k} \, b^k$$
- Ví dụ chuẩn: $(2x - 1)^5 = \sum_{k=0}^{5} C_5^k (2x)^{5-k} (-1)^k$.

### b. Bẫy thường gặp
- **Quên dấu âm của $b$**: Trong $(2x - 1)^5$, $b = -1$ nên hệ số phải nhân với $(-1)^k$, nhiều bạn bỏ quên dấu trừ.
- **Nhầm "hệ số" với "số hạng"**:
  - *Hệ số của $x^3$*: chỉ lấy phần số (không gồm $x^3$), ví dụ $80$.
  - *Số hạng chứa $x^3$*: gồm cả lũy thừa của $x$, ví dụ $80x^3$.
- **Quên lũy thừa của hệ số đi kèm $x$**: Viết $2 \cdot C_5^2$ thay vì $2^3 \cdot C_5^2$.

---

## 3.2. Xác suất của biến cố & Các quy tắc tính xác suất (`C4a,b,c,d-GQ`)

### a. Công thức cốt lõi
1. **Xác suất cổ điển** (các kết quả đồng khả năng, $n(\Omega) > 0$):
   $$P(A) = \frac{n(A)}{n(\Omega)}$$
2. **Biến cố đối** $\overline{A}$: $P(\overline{A}) = 1 - P(A)$.
3. **Quy tắc cộng xác suất**:
   - Tổng quát: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
   - Nếu $A, B$ xung khắc ($A \cap B = \varnothing$): $P(A \cup B) = P(A) + P(B)$.
4. **Quy tắc nhân & Biến cố độc lập**:
   - $A$ và $B$ độc lập $\Leftrightarrow P(A \cap B) = P(A) \cdot P(B)$.
   - Tổng quát (có điều kiện): $P(A \cap B) = P(A) \cdot P(B|A) = P(B) \cdot P(A|B)$.

### b. Điều kiện áp dụng & Bẫy thường gặp
- **Nhầm chỉnh hợp $A_n^k$ và tổ hợp $C_n^k$**: Rút *đồng thời* hoặc chọn không phân biệt thứ tự $\Rightarrow$ dùng $C_n^k$; rút có thứ tự hoặc xếp hàng $\Rightarrow$ dùng $A_n^k$ (hoặc phải nhất quán cả tử và mẫu cùng có thứ tự hoặc cùng không thứ tự).
- **Nhầm "xung khắc" và "độc lập"**:
  - Xung khắc: $P(A \cap B) = 0$.
  - Độc lập (với $P(A), P(B) > 0$): $P(A \cap B) = P(A)P(B) > 0$ (hai biến cố xung khắc có xác suất dương thì KHÔNG thể độc lập!).

---

## 3.3. Xác suất có điều kiện, Xác suất toàn phần & Công thức Bayes (`C4d-GQ`, `C3-MHH2.2`)

### a. Công thức bắt buộc (GDPT 2018 — Lớp 12)
1. **Xác suất có điều kiện** (với $P(B) > 0$):
   $$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{n(A \cap B)}{n(B)}$$
2. **Công thức xác suất toàn phần**: Cho hệ biến cố đầy đủ $(A_1, A_2)$ xung khắc và $P(A_1) + P(A_2) = 1$:
   $$P(B) = P(A_1)\cdot P(B|A_1) + P(A_2)\cdot P(B|A_2)$$
3. **Công thức Bayes**:
   $$P(A_2 | B) = \frac{P(A_2) \cdot P(B|A_2)}{P(B)} = \frac{P(A_2)\cdot P(B|A_2)}{P(A_1)\cdot P(B|A_1) + P(A_2)\cdot P(B|A_2)}$$

### b. Quy trình 5 bước MHH cho câu `C3-MHH2.2 (TLN)`
1. **Đọc đề thực tế**: Phân biệt rõ biến cố phân hoạch $A_1, A_2$ (ví dụ dây chuyền I/II, mắc bệnh/không bệnh) và biến cố quan sát/kết quả $B$ (phế phẩm, dương tính).
2. **Đặt biến cố & ghi điều kiện**: Ghi rõ $P(A_1), P(A_2) \in [0; 1], P(A_1)+P(A_2)=1$ và các xác suất điều kiện $P(B|A_i)$.
3. **Lập sơ đồ cây / mô hình Bayes**: Tính $P(B)$ theo công thức xác suất toàn phần, rồi lập tỉ lệ $P(A_i | B)$.
4. **Giải toán**: Thay số chính xác bằng phân số trước khi bấm thập phân.
5. **Đối chiếu thực tế & làm tròn**: Kiểm tra $0 \le P \le 1$, làm tròn đúng số chữ số thập phân (tối đa 4 ký tự trên phiếu tô).

### c. Bẫy thường gặp
- **Đảo ngược điều kiện**: Nhầm $P(A_2 | B)$ với $P(B | A_2)$ (ví dụ nhầm *"tỉ lệ phế phẩm của máy II"* với *"tỉ lệ phế phẩm đến từ máy II"*).
- **Làm tròn sớm ở bước trung gian**: Nếu làm tròn $P(B)$ rồi mới chia cho công thức Bayes sẽ bị sai số chữ số cuối; luôn giữ phân số $P(B)$ chính xác rồi mới chia một lần ở bước cuối.