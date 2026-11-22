# Chủ đề 4: Vectơ trong không gian (9 lệnh: 3B, 4H, 2VD)

> Ánh xạ Ma trận 2026:
> - **4.1 Vectơ và các phép toán về vectơ trong không gian**: TN `C10-TD1.2` (B), TN `C11-GQ2.1` (H); TLN `C4-MHH2.2` (VD — Hợp lực 3D)
> - **4.2 Tọa độ của vectơ**: TN `C12-TD1.2` (B); TLN `C5-GQ2.2` (H)
> - **Tổng hợp 4.1–4.2**: ĐS `C2a,b,c,d-GQ` (1B, 2H, 1VD)

---

## 4.1. Vectơ và các phép toán về vectơ trong không gian

### a. Định nghĩa & Công thức cốt lõi
1. **Quy tắc ba điểm & Quy tắc hình bình hành**:
   - $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$; $\;\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$.
   - Với hình bình hành $ABCD$: $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$.
2. **Quy tắc hình hộp** (`C10-TD1.2`): Với hình hộp $ABCD.A'B'C'D'$:
   $$\overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AA'} = \overrightarrow{AC'}$$
3. **Tính chất trung điểm & trọng tâm**:
   - $I$ là trung điểm $AB \Leftrightarrow \overrightarrow{IA} + \overrightarrow{IB} = \vec{0} \Leftrightarrow \overrightarrow{MA} + \overrightarrow{MB} = 2\overrightarrow{MI}$.
   - $G$ là trọng tâm $\triangle ABC \Leftrightarrow \overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0} \Leftrightarrow \overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3\overrightarrow{MG}$.
4. **Tích vô hướng hai vectơ trong không gian**:
   $$\vec{u} \cdot \vec{v} = |\vec{u}| \cdot |\vec{v}| \cdot \cos(\vec{u}, \vec{v})$$
   - $\vec{u} \perp \vec{v} \Leftrightarrow \vec{u} \cdot \vec{v} = 0$.
   - Tính độ dài bằng bình phương vô hướng: $|\vec{u} + \vec{v}|^2 = |\vec{u}|^2 + |\vec{v}|^2 + 2\vec{u}\cdot\vec{v}$.

### b. Ứng dụng thực tế MHH — Hợp lực 3D (`C4-MHH2.2`)
- Quy trình 5 bước:
  1. **Đọc đề thực tế**: Vật đứng yên cân bằng dưới tác dụng của trọng lực $\vec{P}$ và các lực căng dây $\vec{T_1}, \vec{T_2}, \vec{T_3}$.
  2. **Đặt hệ trục / ẩn lực**: Chọn $O$ tại tâm treo trên trần hoặc tại điểm treo $S$; độ lớn lực căng $T > 0$.
  3. **Lập mô hình vectơ cân bằng**: $\vec{T_1} + \vec{T_2} + \vec{T_3} + \vec{P} = \vec{0}$. Viết $\vec{T_i} = T \cdot \frac{\overrightarrow{SA_i}}{SA_i}$ hoặc chiếu lên trục thẳng đứng $Oz$: $\sum T_i \cos\alpha_i = P$.
  4. **Giải toán**: Tính chiều dài dây $l = \sqrt{R^2 + h^2}$, tìm $\cos\alpha = \frac{h}{l}$, suy ra $T$.
  5. **Đối chiếu thực tế**: Kiểm tra $T > 0$, đơn vị Newton (N), làm tròn đúng yêu cầu.

### c. Bẫy thường gặp
- Nhầm góc giữa hai vectơ với góc hình học khi hai vectơ chưa chung gốc (ví dụ $\overrightarrow{AB}$ và $\overrightarrow{BC}$ tạo góc $180^\circ - \widehat{ABC}$, không phải $\widehat{ABC}$).
- Nhầm quy tắc hình hộp $\overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AA'}$ thành $\overrightarrow{CA'}$ (ngược chiều) hoặc $\overrightarrow{BD'}$.

---

## 4.2. Hệ trục tọa độ $Oxyz$ & Tọa độ của vectơ

### a. Công thức tọa độ chuẩn
Cho $A(x_A; y_A; z_A)$, $B(x_B; y_B; z_B)$, $\vec{u} = (u_1; u_2; u_3)$, $\vec{v} = (v_1; v_2; v_3)$:
1. **Tọa độ vectơ**: $\overrightarrow{AB} = (x_B - x_A;\; y_B - y_A;\; z_B - z_A)$.
2. **Độ dài**: $|\vec{u}| = \sqrt{u_1^2 + u_2^2 + u_3^2}$; $\;AB = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$.
3. **Trung điểm & Trọng tâm**:
   - Trung điểm $M$ của $AB$: $M\left(\frac{x_A+x_B}{2};\; \frac{y_A+y_B}{2};\; \frac{z_A+z_B}{2}\right)$.
   - Trọng tâm $G$ của $\triangle ABC$: $G\left(\frac{x_A+x_B+x_C}{3};\; \frac{y_A+y_B+y_C}{3};\; \frac{z_A+z_B+z_C}{3}\right)$.
4. **Tích vô hướng & Góc giữa hai vectơ** (`C5-GQ2.2`):
   $$\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3$$
   $$\cos(\vec{u}, \vec{v}) = \frac{u_1 v_1 + u_2 v_2 + u_3 v_3}{\sqrt{u_1^2+u_2^2+u_3^2}\cdot\sqrt{v_1^2+v_2^2+v_3^2}}$$
5. **Tọa độ hình chiếu trên trục/mặt phẳng tọa độ**:
   - Lên $(Oxy)$: $(x; y; 0)$; lên trục $Oy$: $(0; y; 0)$ *(thiếu thành phần nào cho thành phần đó bằng $0$)*.

### b. Bẫy thường gặp (`ĐS C2` và `TLN C5`)
- **Sai thứ tự điểm $D$ của hình bình hành $ABCD$**: Phải giải $\overrightarrow{AB} = \overrightarrow{DC}$ (tức $D = A + C - B$), nhiều bạn viết nhầm thành $\overrightarrow{AB} = \overrightarrow{CD}$ ($D = B + C - A$).
- **Nhầm góc hai vectơ với góc hai đường thẳng**:
  - Góc hai vectơ $(\vec{u}, \vec{v}) \in [0^\circ; 180^\circ]$ nên $\cos(\vec{u}, \vec{v})$ **có thể âm** (góc tù!).
  - Chỉ dùng trị tuyệt đối $|\vec{u}\cdot\vec{v}|$ khi tính góc giữa **hai đường thẳng** $[0^\circ; 90^\circ]$.
- **Cực trị tổng bình phương $T = MA^2 + MB^2 + MC^2$ (`C2d-GQ`)**: Phân tích qua trọng tâm $G$: $T = 3MG^2 + (GA^2 + GB^2 + GC^2)$, nên $T_{\min}$ đạt được khi $M$ là hình chiếu vuông góc của $G$ lên trục/mặt phẳng (nhớ cộng cả hằng số $GA^2+GB^2+GC^2$, không chỉ dừng ở $3MG^2$).