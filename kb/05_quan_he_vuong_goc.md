# Chủ đề 5: Quan hệ vuông góc trong không gian (1 lệnh: 0B, 1H, 0VD)

> Ánh xạ Ma trận 2026:
> - **5.1 Góc & 5.2 Khoảng cách**: TLN `C6-GQ2.1` (H)

---

## 5.1. Góc trong không gian (GDPT 2018)

### a. Góc giữa đường thẳng $d$ và mặt phẳng $(P)$
- Nếu $d \perp (P)$ thì $(d, (P)) = 90^\circ$.
- Nếu $d$ không vuông góc với $(P)$: gọi $d'$ là hình chiếu vuông góc của $d$ lên $(P)$, khi đó:
  $$(d, (P)) = (d, d') \in [0^\circ; 90^\circ]$$
- Quy trình tìm góc $(SA, (P))$ khi $S \notin (P)$ và $A \in (P)$:
  1. Tìm giao điểm $A = SA \cap (P)$.
  2. Dựng hình chiếu vuông góc $H$ của $S$ xuống $(P)$ ($SH \perp (P)$).
  3. Góc cần tìm là $\widehat{SAH}$, tính bằng $\tan\widehat{SAH} = \frac{SH}{AH}$ hoặc $\sin\widehat{SAH} = \frac{SH}{SA}$.

### b. Góc phẳng nhị diện $[P, d, Q]$ *(thuật ngữ chuẩn GDPT 2018)*
- Cho hai nửa mặt phẳng $(P)$ và $(Q)$ chung bờ $d$. Lấy điểm $O \in d$, trong $(P)$ dựng $Ox \perp d$, trong $(Q)$ dựng $Oy \perp d$.
- Góc $\widehat{xOy}$ là **góc phẳng nhị diện** của góc nhị diện $[P, d, Q]$, có số đo từ $0^\circ$ đến $180^\circ$.
- **Mô hình chóp $S.ABCD$ có $SA \perp (ABCD)$**: Muốn tìm góc nhị diện $[S, BD, A]$:
  1. Từ chân đường cao $A$, kẻ $AK \perp BD$ ($K \in BD$).
  2. Chứng minh $BD \perp (SAK) \Rightarrow BD \perp SK$.
  3. Góc phẳng nhị diện chính là $\widehat{SKA}$ (nhọn vì $\triangle SAK$ vuông tại $A$), với $\tan\widehat{SKA} = \frac{SA}{AK}$.

---

## 5.2. Khoảng cách trong không gian (`C6-GQ2.1`)

### a. Khoảng cách từ chân đường cao $A$ đến mặt phẳng $(SBD)$
Với hình chóp có $SA \perp (ABCD)$:
1. Từ $A$ kẻ $AK \perp BD$ tại $K \in BD$.
2. Trong $\triangle SAK$ vuông tại $A$, kẻ đường cao $AH \perp SK$ tại $H \in SK$.
3. Vì $BD \perp (SAK) \Rightarrow BD \perp AH$; mà $AH \perp SK \Rightarrow AH \perp (SBD) \Rightarrow d(A, (SBD)) = AH$.
4. **Công thức tính nhanh**:
   $$\frac{1}{AH^2} = \frac{1}{SA^2} + \frac{1}{AK^2} \quad \text{hay} \quad AH = \frac{SA \cdot AK}{\sqrt{SA^2 + AK^2}}$$
   - Nếu đáy $ABCD$ là hình vuông cạnh $a$: $AK = AO = \frac{a\sqrt{2}}{2}$.
   - Nếu đáy $ABCD$ là hình chữ nhật kích thước $a \times b$: $AK = \frac{ab}{\sqrt{a^2 + b^2}}$.

### b. Quy đổi khoảng cách từ điểm bất kỳ $M$ về chân đường cao $A$
- **TH1 ($MA \parallel (P)$)**: $d(M, (P)) = d(A, (P))$.
- **TH2 ($MA \cap (P) = I$)**: $\dfrac{d(M, (P))}{d(A, (P))} = \dfrac{MI}{AI}$.

### c. Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$
- **Cách 1 (Vuông góc chung)**: Dựng đoạn $MN$ vừa vuông góc $a$ vừa vuông góc $b$ ($M \in a, N \in b$).
- **Cách 2 (Mặt phẳng song song)**: Dựng $(P)$ chứa $b$ và song song $a$, khi đó $d(a, b) = d(A, (P))$ với $A \in a$ bất kỳ (thường chọn $A$ là chân đường cao).

### d. Bẫy thường gặp (`TLN C6-GQ2.1`)
- **Kẻ nhầm chân vuông góc $K$**: Với đáy là hình chữ nhật ($AB \neq AD$) hoặc hình thoi không vuông, hai đường chéo không vuông góc (hoặc chân đường cao không nằm tại giao điểm $O$ của hai đường chéo), KHÔNG được dùng $AK = AO$ khi chưa chứng minh $AO \perp BD$.
- **Quên quy đổi khoảng cách**: Đề hỏi $d(C, (SBD))$ hoặc $d(M, (SBD))$ với $M$ là trung điểm $AC$ hay $AB$, quên nhân hệ số tỉ lệ $\frac{MI}{AI}$.
- **Lỗi làm tròn TLN**: Kết quả căn thức như $\sqrt{\frac{12}{7}} \approx 1{,}3093$ làm tròn đến hàng phần trăm là `1,31` (vừa khít 4 ký tự).