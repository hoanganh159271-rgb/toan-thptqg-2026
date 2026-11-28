(function () {
  "use strict";
  const data = window.POLYMER_DATA;
  const polymers = new Map(data.polymers.map((p) => [p.id, p]));
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  function panels(title, items, caption) {
    return (
      '<figure class="visual"><div class="visual-title">' +
      title +
      '</div><div class="diagram-panels">' +
      items
        .map(
          ([head, text]) =>
            '<div class="diagram-panel"><strong>' +
            head +
            "</strong><p>" +
            text +
            "</p></div>",
        )
        .join("") +
      "</div><figcaption>" +
      caption +
      "</figcaption></figure>"
    );
  }
  function flow(title, start, end, condition, caption) {
    return (
      '<figure class="visual"><div class="visual-title">' +
      title +
      '</div><div class="reaction-flow">' +
      '<div class="molecule chemical">' +
      start +
      '</div><div class="chem-step"><span>' +
      condition +
      '</span><b aria-label="tạo thành">⟶</b></div>' +
      '<div class="molecule product chemical">' +
      end +
      "</div></div><figcaption>" +
      caption +
      "</figcaption></figure>"
    );
  }
  function render(key) {
    if (Array.isArray(key)) return key.map(render).join("");
    if (polymers.has(key)) {
      const p = polymers.get(key);
      return flow(
        escape(p.name),
        escape(p.monomer),
        p.mass ? "[" + escape(p.repeat) + "]ₙ" : escape(p.repeat),
        escape(p.method),
        escape(p.note),
      );
    }
    if (key === "addition")
      return flow(
        "Mở nối đôi để nối mạch",
        "n CH₂=CH–R",
        "[–CH₂–CH(R)–]ₙ",
        "Trùng hợp",
        "R là nhóm thế và được giữ lại. Với monomer vinyl, mắt xích giữ thành phần nguyên tố của monomer.",
      );
    if (key === "condensation")
      return flow(
        "Nối hai nhóm chức",
        "–COOH + H₂N–",
        "–CO–NH– + H₂O",
        "Tạo liên kết amide",
        "OH của COOH và H của NH₂ góp thành phân tử nước. Khi monomer có đủ hai đầu phản ứng, mạch tiếp tục lớn lên.",
      );
    if (key === "thermal")
      return panels(
        "Cấu trúc ảnh hưởng cách gia công",
        [
          [
            "Nhiệt dẻo",
            "Gia nhiệt → mềm/chảy trong điều kiện phù hợp → tạo hình → để nguội.",
          ],
          [
            "Nhiệt rắn",
            "Đóng rắn thành mạng → giữ hình → thường phân hủy khi gia nhiệt mạnh.",
          ],
          [
            "Chọn theo vật liệu",
            "PE, PP là ví dụ nhiệt dẻo. PPF đóng rắn là ví dụ mạng nhiệt rắn.",
          ],
        ],
        "Đây là cách phân nhóm khái quát. Nhiệt độ và phương pháp gia công phụ thuộc từng sản phẩm.",
      );
    if (key === "hydrolysis")
      return flow(
        "Thủy phân hoàn toàn cellulose",
        "(C₆H₁₀O₅)ₙ + n H₂O",
        "n C₆H₁₂O₆",
        "H⁺, nhiệt hoặc enzyme",
        "Cắt liên kết giữa các gốc và thêm nước. M của một gốc là 162, còn M glucose là 180.",
      );
    if (key === "retained")
      return flow(
        "Biến đổi nối đôi, giữ mạch chính",
        "[–CH₂–CH=CH–CH₂–]ₙ + n Br₂",
        "[–CH₂–CHBr–CHBr–CH₂–]ₙ",
        "Phản ứng cộng",
        "Hai Br gắn vào hai C của nối đôi. Chuỗi carbon vẫn liên tục trong mô hình này.",
      );
    if (key === "degree")
      return '<figure class="visual"><div class="visual-title">Từ mắt xích đến mạch dài</div><div class="polymer-chain" data-chain></div><div class="visual-controls"><label>Số mắt xích minh họa <input data-chain-count type="range" min="2" max="9" value="5"><output>5</output></label><span class="pill">n ≈ M / M₀</span></div><figcaption>Ô minh họa đại diện một mắt xích. Phân tử thực thường có số mắt xích lớn hơn nhiều.</figcaption></figure>';
    if (key === "crosslink")
      return '<figure class="visual canvas-figure"><div class="visual-title">Mạch cao su và cầu nối</div><canvas data-drawing="crosslink" role="img" aria-label="Ba chuỗi cao su có thể kéo giãn, với các cầu nối sulfur giữa chúng"></canvas><div class="visual-controls"><label>Mức kéo <input data-stretch type="range" min="0" max="100" value="0"><output>0%</output></label><button class="button small" data-crosslink aria-pressed="true">Có cầu nối sulfur</button></div><figcaption>Các đoạn màu cam biểu diễn cầu nối sulfur. Đây là sơ đồ cấu trúc, không mô phỏng định lượng lực hay độ giãn thực.</figcaption></figure>';
    if (key === "composite")
      return '<figure class="visual canvas-figure"><div class="visual-title">Hai vai trò trong một vật liệu</div><canvas data-drawing="composite" role="img" aria-label="Các sợi carbon đậm nằm trong khối nền polymer màu xanh"></canvas><div class="visual-controls"><span class="pill green">Xanh nhạt · nền polymer</span><span class="pill">Đường đậm · cốt sợi</span></div><figcaption>Nền bao bọc và liên kết. Cốt góp gia cường. Phương sợi có ảnh hưởng tới tính chất cơ học.</figcaption></figure>';
    if (key === "fibers")
      return panels(
        "Phân loại theo nguồn gốc",
        [
          ["Thiên nhiên", "Bông · len · tơ tằm"],
          ["Bán tổng hợp", "Cellulose → visco, cellulose acetate"],
          ["Tổng hợp", "Capron · nylon-6,6 · PAN · PET"],
        ],
        "Trong phân loại phổ thông, visco thuộc tơ nhân tạo/bán tổng hợp dù sợi cuối là cellulose tái sinh.",
      );
    if (key === "origin")
      return panels(
        "Nguồn gốc polymer",
        [
          [
            "Có sẵn trong tự nhiên",
            "Tinh bột · cellulose · protein · cao su thiên nhiên",
          ],
          ["Chế biến polymer tự nhiên", "Tơ visco · cellulose acetate"],
          ["Tổng hợp từ monomer", "PE · PVC · PAN · nylon · cao su buna"],
        ],
        "Phân loại nguồn gốc khác với phân loại theo tính dẻo, tính đàn hồi hoặc khả năng kéo sợi.",
      );
    if (key === "plastics")
      return panels(
        "Cấu tạo gợi ứng dụng",
        [
          ["Chất dẻo", "PE · PP · PVC · PS · PMMA · PTFE · PPF"],
          ["Cao su", "Buna · isoprene · buna-S · buna-N"],
          ["Tơ tổng hợp", "Capron · nylon-6,6 · PAN · PET"],
        ],
        "Đây là nhóm ứng dụng tiêu biểu của chương. Một polymer trong kỹ thuật có thể dùng cho nhiều loại sản phẩm.",
      );
    if (key === "glue")
      return panels(
        "Ba loại keo, ba cách nhận diện",
        [
          ["Nhựa vá săm", "Cao su + dung môi hữu cơ"],
          [
            "Epoxy hai thành phần",
            "Nhựa epoxy + chất đóng rắn amine → mạng polymer",
          ],
          ["Urea–formaldehyde", "Urea + HCHO → polymer + H₂O"],
        ],
        "Keo tạo lớp liên kết bề mặt. Lựa chọn vật liệu, tỉ lệ và điều kiện sử dụng phụ thuộc sản phẩm cụ thể.",
      );
    if (key === "ethanol")
      return flow(
        "Theo dõi tỉ lệ và hiệu suất",
        "2 C₂H₅OH<br><small>92 g · H₁ = 50%</small>",
        "1 C₄H₆ → 1 mắt xích buna<br><small>54 g · H₂ = 80%</small>",
        "H toàn bộ = 0,40",
        "C₂H₅OH chuyển hóa theo 2C₂H₅OH → C₄H₆ + 2H₂O + H₂. Đọc hệ số mol trước khi tính khối lượng.",
      );
    if (key === "methane")
      return flow(
        "Tỉ lệ carbon qua các bước",
        "2 CH₄<br><small>2 mol khí methane</small>",
        "1 C₂H₂ → 1 C₂H₃Cl → 1 mắt xích PVC",
        "Tỉ lệ 2 : 1",
        "Hiệu suất toàn quá trình áp dụng một lần lên lượng lý thuyết. Với Vₘ = 24,79 L/mol cần đổi m³ sang L.",
      );
    if (key === "environment")
      return panels(
        "Vật liệu sau sử dụng",
        [
          ["Giảm phát sinh", "Chọn lượng dùng phù hợp, giảm đồ dùng một lần."],
          [
            "Tái sử dụng đúng thiết kế",
            "Đối chiếu hướng dẫn sử dụng của sản phẩm.",
          ],
          ["Phân loại và thu gom", "Làm theo hệ thống thu gom tại địa phương."],
        ],
        "Phân mảnh là chia vật liệu thành mảnh nhỏ. Phân hủy hoàn toàn là một quá trình khác.",
      );
    if (key === "comparison")
      return panels(
        "Bài nhận biết lí thuyết",
        [
          ["Da thật", "Thành phần có protein, khác PVC về cấu tạo."],
          [
            "Giả da PVC",
            "Có polymer mang Cl, thường có thêm các lớp và phụ gia.",
          ],
          [
            "Quan sát có hướng dẫn",
            "Chỉ dùng mô tả hoặc thí nghiệm do giáo viên tổ chức.",
          ],
        ],
        "Không tự đốt hoặc hít khói mẫu. Nhiệt phân PVC có thể tạo HCl và các sản phẩm phân hủy khác.",
      );
    return "";
  }
  function canvasContext(canvas) {
    const width = Math.max(240, canvas.getBoundingClientRect().width);
    const height = canvas.getBoundingClientRect().height || 180;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const c = canvas.getContext("2d");
    c.scale(dpr, dpr);
    return { c, w: width, h: height };
  }
  function drawComposite(canvas) {
    const { c, w, h } = canvasContext(canvas);
    const x = w * 0.07,
      y = 25,
      bw = w * 0.86,
      bh = h - 54;
    c.fillStyle = "#d4eadd";
    c.beginPath();
    c.roundRect(x, y, bw, bh, 14);
    c.fill();
    c.save();
    c.beginPath();
    c.roundRect(x, y, bw, bh, 14);
    c.clip();
    for (let i = -4; i < 18; i++) {
      c.strokeStyle = i % 2 ? "#235946" : "#3e795e";
      c.lineWidth = 4;
      c.beginPath();
      c.moveTo(x + (i * bw) / 10, y + bh + 20);
      c.lineTo(x + (i * bw) / 10 + 52, y - 20);
      c.stroke();
      c.strokeStyle = "#88ac95";
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(x + (i * bw) / 10 + 5, y + bh + 20);
      c.lineTo(x + (i * bw) / 10 + 57, y - 20);
      c.stroke();
    }
    c.restore();
    c.strokeStyle = "#a5cdb5";
    c.lineWidth = 1;
    c.strokeRect(x + 8, y + 8, bw - 16, bh - 16);
  }
  function drawCrosslink(canvas) {
    const { c, w, h } = canvasContext(canvas),
      figure = canvas.closest("figure");
    const stretch = Number(figure.querySelector("[data-stretch]").value) / 100;
    const linked =
      figure.querySelector("[data-crosslink]").getAttribute("aria-pressed") ===
      "true";
    const pad = 20,
      step = (w - 2 * pad) / 18,
      amp = 10 * (1 - stretch * 0.7);
    const ys = [h * 0.25, h * 0.5, h * 0.75];
    c.strokeStyle = "#238669";
    c.lineWidth = 3;
    c.lineCap = "round";
    for (const base of ys) {
      c.beginPath();
      for (let i = 0; i <= 18; i++) {
        let x = pad + i * step,
          y = base + Math.sin(i * 1.15) * amp;
        if (!i) c.moveTo(x, y);
        else c.lineTo(x, y);
      }
      c.stroke();
    }
    if (linked)
      for (let j = 0; j < 2; j++)
        for (let i = 3; i < 18; i += 5) {
          let x = pad + i * step;
          c.strokeStyle = "#cd7a42";
          c.lineWidth = 2;
          c.beginPath();
          c.moveTo(x, ys[j] + Math.sin(i * 1.15) * amp);
          c.lineTo(x + 10, ys[j + 1] + Math.sin(i * 1.15) * amp);
          c.stroke();
          c.fillStyle = "#cd7a42";
          c.beginPath();
          c.arc(
            x + 5,
            (ys[j] + ys[j + 1]) / 2 + Math.sin(i * 1.15) * amp,
            3,
            0,
            Math.PI * 2,
          );
          c.fill();
        }
  }
  function hero(canvas) {
    const { c, w, h } = canvasContext(canvas);
    const points = [];
    for (let i = 0; i < 13; i++) {
      const t = i / 12;
      points.push([
        w * 0.1 + t * w * 0.78,
        h * 0.56 + Math.sin(i * 0.85) * h * 0.2 - i * 3,
        12 + Math.cos(i * 0.85) * 3,
      ]);
    }
    c.lineCap = "round";
    c.lineWidth = 7;
    c.strokeStyle = "#64927e";
    for (let i = 1; i < points.length; i++) {
      c.beginPath();
      c.moveTo(points[i - 1][0], points[i - 1][1]);
      c.lineTo(points[i][0], points[i][1]);
      c.stroke();
    }
    const atoms = [];
    points.forEach(([x, y, r], i) => {
      for (let j = 0; j < 2; j++) {
        const ax = x + (j ? 12 : -8),
          ay = y + (j ? -1 : 1) * (26 + 6 * Math.sin(i));
        c.strokeStyle = "#acc9b7";
        c.lineWidth = 3;
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(ax, ay);
        c.stroke();
        atoms.push([ax, ay, 6, "#dce9df", "#fafffc"]);
      }
      atoms.push([x, y, r, "#0c624d", "#60b390"]);
    });
    for (const [x, y, r, dark, light] of atoms) {
      c.shadowColor = "#1c4f3d33";
      c.shadowBlur = 8;
      c.shadowOffsetY = 6;
      const g = c.createRadialGradient(x - r * 0.3, y - r * 0.4, 1, x, y, r);
      g.addColorStop(0, light);
      g.addColorStop(1, dark);
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
      c.shadowBlur = 0;
      c.shadowOffsetY = 0;
    }
  }
  function mount(root = document) {
    root.querySelectorAll("[data-chain]").forEach((chain) => {
      const figure = chain.closest("figure"),
        slider = figure.querySelector("input");
      const update = () => {
        figure.querySelector("output").textContent = slider.value;
        chain.innerHTML = Array.from(
          { length: Number(slider.value) },
          (_, i) =>
            (i ? '<span class="chain-link"></span>' : "") +
            '<span class="unit">CH₂–CH₂</span>',
        ).join("");
      };
      slider.addEventListener("input", update);
      update();
    });
    root.querySelectorAll("[data-drawing]").forEach((canvas) => {
      const draw = () => {
        if (canvas.getBoundingClientRect().width > 0)
          (canvas.dataset.drawing === "composite"
            ? drawComposite
            : drawCrosslink)(canvas);
      };
      if (canvas.dataset.drawing === "crosslink") {
        const fig = canvas.closest("figure");
        fig.querySelector("[data-stretch]").addEventListener("input", (e) => {
          fig.querySelector("output").textContent = e.target.value + "%";
          draw();
        });
        fig.querySelector("[data-crosslink]").addEventListener("click", (e) => {
          const b = e.currentTarget;
          const active = b.getAttribute("aria-pressed") !== "true";
          b.setAttribute("aria-pressed", active);
          b.textContent = active ? "Có cầu nối sulfur" : "Mạch chưa nối ngang";
          draw();
        });
      }
      draw();
      canvas.closest("details")?.addEventListener("toggle", draw);
      const observer = new ResizeObserver(draw);
      observer.observe(canvas);
    });
    root.querySelectorAll("[data-hero]").forEach((canvas) => {
      hero(canvas);
      new ResizeObserver(() => hero(canvas)).observe(canvas);
    });
  }
  window.POLYMER_VISUALS = { render, mount, escape };
})();
