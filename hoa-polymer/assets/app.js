(function () {
  "use strict";
  const D = window.POLYMER_DATA,
    G = window.POLYMER_GUIDES,
    V = window.POLYMER_VISUALS,
    esc = V.escape;
  const main = document.getElementById("main");
  const questions = new Map(D.questions.map((q) => [q.id, q]));
  const lessons = new Map(D.lessons.map((l) => [l.id, l]));
  const KEY = "hoa_polymer_kntt_v1";
  let timer = null,
    toastTimer = null,
    storageWarning = false;
  function initial() {
    return {
      version: 1,
      done: [],
      attempts: {},
      bookmarks: [],
      history: [],
      quiz: null,
    };
  }
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      return normalize(s);
    } catch (e) {
      return initial();
    }
  }
  function normalize(s) {
    if (!s || s.version !== 1) return initial();
    const out = initial();
    out.done = Array.isArray(s.done)
      ? s.done.filter((id) => lessons.has(id))
      : [];
    out.bookmarks = Array.isArray(s.bookmarks)
      ? s.bookmarks.filter((id) => questions.has(id))
      : [];
    if (s.attempts && typeof s.attempts === "object")
      for (const id of Object.keys(s.attempts)) {
        const a = s.attempts[id];
        if (questions.has(id) && a && typeof a === "object")
          out.attempts[id] = {
            answer: a.answer,
            checked: Boolean(a.checked),
            lastCorrect:
              typeof a.lastCorrect === "boolean" ? a.lastCorrect : undefined,
            show: Boolean(a.show),
          };
      }
    out.history = Array.isArray(s.history)
      ? s.history
          .filter(
            (h) =>
              h &&
              typeof h.id === "string" &&
              typeof h.score === "number" &&
              h.score >= 0 &&
              h.score <= 10,
          )
          .slice(0, 30)
      : [];
    if (
      s.quiz &&
      Array.isArray(s.quiz.ids) &&
      s.quiz.ids.every(
        (id) => questions.has(id) && questions.get(id).type !== "write",
      ) &&
      new Set(s.quiz.ids).size === s.quiz.ids.length &&
      s.quiz.ids.length > 0 &&
      s.quiz.ids.length <= 20 &&
      typeof s.quiz.end === "number" &&
      s.quiz.end > 0 &&
      Number.isFinite(s.quiz.start) &&
      s.quiz.end > s.quiz.start &&
      (!s.quiz.submitted ||
        (Number.isFinite(s.quiz.score) &&
          s.quiz.score >= 0 &&
          s.quiz.score <= 10)) &&
      s.quiz.answers &&
      typeof s.quiz.answers === "object" &&
      ["quick", "class", "mixed", "regular45"].includes(s.quiz.kind) &&
      (s.quiz.kind !== "regular45" ||
        (s.quiz.ids.length === 20 &&
          s.quiz.ids
            .slice(0, 14)
            .every((id) => questions.get(id).type === "mc") &&
          s.quiz.ids
            .slice(14)
            .every((id) => questions.get(id).type === "num") &&
          s.quiz.end - s.quiz.start === 45 * 60000))
    )
      out.quiz = s.quiz;
    return out;
  }
  let store = load();
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(store));
      return true;
    } catch (e) {
      if (!storageWarning) {
        storageWarning = true;
        notify(
          "Trình duyệt chưa lưu được tiến độ. Bạn có thể xuất bản sao ở mục Tiến độ & sao lưu.",
        );
      }
      return false;
    }
  }
  function notify(message) {
    const el = document.getElementById("toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 4200);
  }
  function reviewIds() {
    return D.questions
      .filter(
        (q) =>
          store.attempts[q.id]?.lastCorrect === false ||
          store.bookmarks.includes(q.id),
      )
      .map((q) => q.id);
  }
  function status() {
    document.getElementById("learnCount").textContent =
      store.done.length + "/8";
    document.getElementById("learnProgress").style.width =
      (store.done.length / 8) * 100 + "%";
    document.getElementById("reviewCount").textContent = reviewIds().length;
  }
  function routeData() {
    const h = location.hash.slice(1) || "home";
    const [path, query = ""] = h.split("?");
    return { path, params: new URLSearchParams(query) };
  }
  function heading(title, desc, action = "") {
    return (
      '<div class="page-heading"><div><h1>' +
      title +
      "</h1>" +
      (desc ? "<p>" + desc + "</p>" : "") +
      "</div>" +
      action +
      "</div>"
    );
  }
  function button(text, href, primary = false) {
    return (
      '<a class="button ' +
      (primary ? "primary" : "") +
      '" href="' +
      href +
      '">' +
      text +
      "</a>"
    );
  }
  function lessonCard(l) {
    const icons = {
      basics: "C",
      synthesis: "⇌",
      properties: "n",
      plastics: "▱",
      fibers: "≋",
      rubber: "⌁",
      calculations: "÷",
      environment: "♧",
    };
    return (
      '<a class="card lesson-card" href="#learn/' +
      l.id +
      '"><span class="lesson-icon ' +
      (l.id === "rubber" ? "orange" : "") +
      '">' +
      icons[l.id] +
      "</span><h3>" +
      l.title +
      "</h3><p>" +
      l.kicker +
      '</p><div class="card-bottom"><span>' +
      l.parts.length +
      ' phần · Có minh họa</span><span class="' +
      (store.done.includes(l.id) ? "done" : "") +
      '">' +
      (store.done.includes(l.id) ? "✓ Đã học" : "Mở bài học") +
      "</span></div></a>"
    );
  }
  function home() {
    const next =
      D.lessons.find((l) => !store.done.includes(l.id)) || D.lessons[0];
    const mastered = Object.values(store.attempts).filter(
      (a) => a.lastCorrect === true,
    ).length;
    return (
      '<section class="home-hero"><div class="hero-copy"><div class="eyebrow">Hóa 12 · Kết nối tri thức</div><h1>Nhìn cấu trúc.<br><span>Hiểu polymer.</span></h1><p>Từ một mắt xích đến những vật liệu quanh ta. Học bằng sơ đồ, thử từng câu, hiểu vì sao đúng.</p><div class="actions">' +
      button(
        store.done.length ? "Tiếp tục học" : "Bắt đầu học",
        "#learn/" + next.id,
        true,
      ) +
      button("Luyện tập ngay", "#practice") +
      '</div></div><div class="hero-visual"><canvas data-hero role="img" aria-label="Minh họa một đoạn chuỗi carbon và các nguyên tử hydrogen"></canvas><div class="hero-element"><small>6</small><strong>C</strong><small>Carbon</small></div><span class="hero-caption">Từ phân tử nhỏ, thành mạch dài</span><div class="hero-formula">n CH₂=CH₂ &nbsp; ⟶ &nbsp; [–CH₂–CH₂–]ₙ</div></div></section>' +
      '<div class="hero-metrics"><div class="metric"><strong>8</strong><span>Bài học<br>có minh họa</span></div><div class="metric"><strong>' +
      D.questions.length +
      '</strong><span>Câu luyện tập<br>có giải thích</span></div><div class="metric"><strong>2</strong><span>Video bài giảng<br>theo từng phần</span></div><div class="metric"><strong>' +
      mastered +
      "</strong><span>Câu đã làm đúng<br>trong lần gần nhất</span></div></div>" +
      '<div class="section-heading"><h2>Học từ gốc, nhớ có hệ thống</h2><a class="button text" href="#learn">Xem 8 bài học</a></div><div class="grid three">' +
      D.lessons.slice(0, 3).map(lessonCard).join("") +
      "</div>" +
      '<div class="section-heading"><h2>Chọn phần bạn muốn luyện</h2><a class="button text" href="#atlas">Tra cứu 19 polymer</a></div><div class="grid three">' +
      D.lessons.slice(3, 6).map(lessonCard).join("") +
      "</div>" +
      '<div class="section-heading"><h2>Chuẩn bị cho bài kiểm tra thường xuyên</h2></div><div class="card study-banner"><div><h3>45 phút · 14 câu trắc nghiệm + 6 câu điền số.</h3><p>Mỗi câu 0,5 điểm. Nộp bài để xem lời giải, sơ đồ và mở đúng mục kiến thức cần ôn.</p></div>' +
      button("Vào kiểm tra nhanh", "#test") +
      "</div>" +
      '<div class="grid two" style="margin-top:18px"><a class="card" href="#sources"><h3>Tài liệu bạn đang học</h3><p>Đủ 9 trang đã gửi, câu hỏi có nhãn trang để đối chiếu với bản gốc.</p></a><a class="card" href="#review"><h3>Ôn đúng chỗ đang vướng</h3><p>' +
      reviewIds().length +
      " câu sai hoặc được bạn lưu lại. Mỗi câu có gợi ý và giải thích.</p></a></div>"
    );
  }
  function clipRange(clip) {
    return clock(clip.start * 1000) + "–" + clock(clip.end * 1000);
  }
  function embedUrl(id, start = 0, end = 0) {
    const params = new URLSearchParams({
      start: String(start),
      autoplay: "1",
      rel: "0",
      playsinline: "1",
    });
    if (end > start) params.set("end", String(end));
    return "https://www.youtube-nocookie.com/embed/" + id + "?" + params;
  }
  function videoFrame(id, start, end, title) {
    const iframe = document.createElement("iframe");
    iframe.className = "video";
    iframe.title = title;
    iframe.src = embedUrl(id, start, end);
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    return iframe;
  }
  function lessonMedia(lesson, part, index) {
    const stageId = "clip-" + lesson.id + "-" + index;
    return (
      '<div class="lesson-media"><h3>Xem đoạn giảng phần này</h3><div class="clip-options">' +
      part.clips
        .map(
          (clip, n) =>
            '<div class="clip-row"><button class="clip-play" data-action="clip" data-id="' +
            lesson.id +
            '" data-part="' +
            index +
            '" data-clip="' +
            n +
            '" aria-pressed="false" aria-controls="' +
            stageId +
            '"><span class="clip-icon" aria-hidden="true">▶</span><span class="clip-copy"><span>' +
            esc(clip.title) +
            "</span><small>" +
            clipRange(clip) +
            " · " +
            (clip.video === "EOyxtq2JKRU" ? "Bài 12" : "Bài 13") +
            '</small></span></button><a class="clip-external" target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=' +
            clip.video +
            "&t=" +
            clip.start +
            's" aria-label="Mở YouTube · ' +
            esc(clip.title) +
            '">YouTube ↗</a></div>',
        )
        .join("") +
      '</div><div class="clip-stage" id="' +
      stageId +
      '" hidden><p class="clip-now" role="status"></p><div class="clip-screen"></div><button class="button small" data-action="close-clip">Đóng video</button></div>' +
      (part.videoNote
        ? '<p class="clip-note">' + esc(part.videoNote) + "</p>"
        : "") +
      "</div>"
    );
  }
  function closeLessonVideos(restoreFocus = false) {
    const active = main.querySelector(
      '[data-action="clip"][aria-pressed="true"]',
    );
    main
      .querySelectorAll(".clip-screen")
      .forEach((screen) => screen.replaceChildren());
    main
      .querySelectorAll(".clip-stage")
      .forEach((stage) => (stage.hidden = true));
    main
      .querySelectorAll('[data-action="clip"]')
      .forEach((b) => b.setAttribute("aria-pressed", "false"));
    if (restoreFocus) active?.focus();
  }
  function lessonOverview(id) {
    const guide = G[id];
    return (
      '<section class="lesson-goals"><h2>Học xong, bạn làm được gì?</h2><ul>' +
      guide.goals.map((s) => "<li>" + esc(s) + "</li>").join("") +
      '</ul><details class="lesson-terms"><summary>Từ khóa cần nắm</summary><dl>' +
      guide.terms
        .map(
          ([name, meaning]) =>
            "<dt>" + esc(name) + "</dt><dd>" + esc(meaning) + "</dd>",
        )
        .join("") +
      "</dl></details></section>"
    );
  }
  function guidedPart(id, index) {
    const guide = G[id].parts[index];
    return (
      '<div class="explain-block"><h3>Hiểu từng bước</h3><ol>' +
      guide.explain.map((s) => "<li>" + esc(s) + "</li>").join("") +
      '</ol></div><details class="worked-example" open><summary>Ví dụ có lời giải từng bước</summary><p>' +
      esc(guide.worked.prompt) +
      "</p><ol>" +
      guide.worked.steps.map((s) => "<li>" + esc(s) + "</li>").join("") +
      '</ol></details><div class="trap lesson-trap"><strong>Chỗ dễ nhầm</strong><p>' +
      esc(guide.mistake) +
      '</p></div><fieldset class="checkpoint"><legend>Tự thử 20 giây</legend><p>' +
      esc(guide.checkpoint.question) +
      '</p><div class="checkpoint-choices">' +
      guide.checkpoint.choices
        .map(
          (s, i) =>
            '<button data-action="checkpoint" data-id="' +
            id +
            '" data-part="' +
            index +
            '" data-choice="' +
            i +
            '" aria-pressed="false">' +
            esc(s) +
            "</button>",
        )
        .join("") +
      '</div><p class="checkpoint-feedback" role="status" hidden></p></fieldset>'
    );
  }
  function lessonLink(q, label = "Xem lại đúng mục kiến thức") {
    const ref = q.lessonRef,
      l = lessons.get(ref.lesson);
    return (
      '<a class="button small lesson-back" href="#learn/' +
      ref.lesson +
      "?part=" +
      ref.part +
      '">' +
      esc(label) +
      " · " +
      esc(l.parts[ref.part].title) +
      "</a>"
    );
  }
  function focusLessonPart(index) {
    const part = document.getElementById("part-" + index);
    part?.scrollIntoView({ behavior: "instant", block: "start" });
    part?.querySelector("h2").focus({ preventScroll: true });
  }
  function learn(id) {
    if (!id)
      return (
        heading(
          "Học chương Polymer",
          "Đi từ cấu tạo đến tính chất và ứng dụng. Các bài đã học được lưu ngay trên thiết bị.",
        ) +
        '<div class="grid three">' +
        D.lessons.map(lessonCard).join("") +
        "</div>"
      );
    const l = lessons.get(id);
    if (!l)
      return empty(
        "Chưa có bài học này",
        "Chọn bài từ danh sách.",
        "#learn",
        "Mở bài học",
      );
    const index = D.lessons.indexOf(l),
      next = D.lessons[index + 1];
    return (
      '<div class="eyebrow">' +
      l.kicker +
      "</div>" +
      heading(l.title, "") +
      '<div class="reading-layout"><article><p class="lesson-intro">' +
      l.intro +
      "</p>" +
      lessonOverview(l.id) +
      '<nav class="part-nav" aria-label="Các mục trong bài">' +
      l.parts
        .map(
          (p, i) =>
            '<button data-action="lesson-part" data-id="' +
            i +
            '"><span>' +
            (i + 1) +
            "</span>" +
            esc(p.title) +
            "</button>",
        )
        .join("") +
      '</nav><p class="lesson-media-help">Mỗi mục có sơ đồ và đoạn giảng riêng. Bấm ▶ để xem ngay từ mốc đã chọn. Video cần Internet.</p>' +
      V.render(l.visual) +
      l.parts
        .map(
          (p, i) =>
            '<section class="lesson-part" id="part-' +
            i +
            '"><h2 tabindex="-1">' +
            p.title +
            "</h2><p>" +
            p.text +
            "</p>" +
            V.render(p.visual) +
            guidedPart(l.id, i) +
            lessonMedia(l, p, i) +
            "</section>",
        )
        .join("") +
      '<section class="card remember"><h3>Chốt lại để nhớ</h3><ul>' +
      l.summary.map((s) => "<li>" + s + "</li>").join("") +
      "</ul></section>" +
      '<div class="lesson-follow"><button class="button primary" data-action="complete" data-id="' +
      l.id +
      '">' +
      (store.done.includes(l.id) ? "✓ Đã hoàn thành bài" : "Đánh dấu đã học") +
      "</button>" +
      (next
        ? button("Bài tiếp theo", "#learn/" + next.id)
        : button("Làm một đề ngắn", "#test")) +
      "</div>" +
      '<div class="section-heading"><h2>Thử ngay phần vừa học</h2>' +
      button("Luyện theo chủ đề", "#practice?topic=" + l.id) +
      "</div>" +
      l.practice
        .slice(0, 2)
        .map((id) => questionHtml(questions.get(id)))
        .join("") +
      '<div class="source-links">Bài giảng liên quan · <a target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=' +
      l.video +
      "&t=" +
      l.time +
      's">Mở video ở phần này</a> · <a href="#sources">Tài liệu và phạm vi đối chiếu</a></div></article>' +
      '<aside class="reading-sidebar"><div class="card"><h3>Trong chương này</h3><nav class="toc" aria-label="Danh sách bài học">' +
      D.lessons
        .map(
          (a) =>
            "<a " +
            (a.id === id ? 'class="active" aria-current="page"' : "") +
            ' href="#learn/' +
            a.id +
            '">' +
            a.title +
            "</a>",
        )
        .join("") +
      "</nav></div></aside></div>"
    );
  }
  function sourceRef(q) {
    return q.source === "doc"
      ? '<a class="q-source" href="tai-lieu/trang-' +
          q.page +
          '.webp" target="_blank" rel="noopener">Tài liệu · trang ' +
          q.page +
          "</a>"
      : '<span class="pill orange">Bài bổ sung</span>';
  }
  function correct(q, answer) {
    if (q.type === "mc") return Number.isInteger(answer) && answer === q.answer;
    if (q.type === "tf")
      return q.items.every((s, i) => answer?.[i] === s.answer);
    if (q.type === "num") {
      const s = String(answer ?? "")
        .trim()
        .replace(/\s/g, "")
        .replace("−", "-")
        .replace(",", ".");
      return (
        /^-?(?:\d+(?:\.\d+)?|\.\d+)$/.test(s) &&
        Math.abs(Number(s) - Number(q.answer)) < 1e-8
      );
    }
    return false;
  }
  function answerComplete(q, a) {
    if (q.type === "mc")
      return Number.isInteger(a) && a >= 0 && a < q.choices.length;
    if (q.type === "tf")
      return q.items.every((_, i) => typeof a?.[i] === "boolean");
    if (q.type === "num")
      return /^-?(?:\d+(?:[.,]\d+)?|[.,]\d+)$/.test(
        String(a ?? "")
          .trim()
          .replace("−", "-"),
      );
    return false;
  }
  function solutionHtml(q, answer, checked) {
    let key = "";
    if (q.type === "mc")
      key =
        "<p><strong>Đáp án " +
        String.fromCharCode(65 + q.answer) +
        "</strong> · " +
        esc(q.choices[q.answer]) +
        "</p>";
    if (q.type === "num")
      key =
        "<p><strong>Đáp số</strong> · " +
        esc(q.answer.replace(".", ",")) +
        (q.unit ? " " + esc(q.unit) : "") +
        "</p>";
    if (q.type === "tf")
      key = checked
        ? "<p><strong>Đáp án</strong> · " +
          q.items
            .map(
              (s, i) =>
                String.fromCharCode(97 + i) +
                ") " +
                (s.answer ? "Đúng" : "Sai"),
            )
            .join(" · ") +
          "</p>"
        : q.items
            .map(
              (s, i) =>
                '<div class="tf-feedback"><strong>' +
                String.fromCharCode(97 + i) +
                ") " +
                (s.answer ? "Đúng" : "Sai") +
                "</strong> · " +
                s.why +
                "</div>",
            )
            .join("");
    return (
      '<div class="solution">' +
      key +
      "<ol>" +
      q.steps.map((s) => "<li>" + s + "</li>").join("") +
      "</ol>" +
      (q.trap
        ? '<div class="trap"><strong>Chỗ dễ nhầm</strong>' + q.trap + "</div>"
        : "") +
      lessonLink(q) +
      "</div>"
    );
  }
  function questionHtml(q, quiz = false, number) {
    const a = quiz
      ? {
          answer: store.quiz.answers[q.id],
          checked: store.quiz.submitted,
          show: store.quiz.submitted,
        }
      : store.attempts[q.id] || {};
    const lock = quiz && store.quiz.submitted;
    const typeLabel = {
      mc: "Chọn đáp án",
      num: "Trả lời ngắn",
      tf: "Đúng / Sai",
      write: "Viết phương trình",
    }[q.type];
    let html =
      '<article class="question" id="q-' +
      q.id +
      '" data-question="' +
      q.id +
      '" ' +
      (quiz ? 'data-quiz="true"' : "") +
      '><div class="q-top"><div class="q-ref"><span>' +
      esc(quiz ? "Câu " + number : q.label) +
      '</span><span class="pill">' +
      typeLabel +
      "</span>" +
      sourceRef(q) +
      "</div>" +
      (!quiz
        ? '<button class="bookmark" data-action="bookmark" data-id="' +
          q.id +
          '" aria-pressed="' +
          store.bookmarks.includes(q.id) +
          '">' +
          (store.bookmarks.includes(q.id) ? "✓ Đã lưu" : "☆ Lưu câu") +
          "</button>"
        : "") +
      "</div>" +
      "<h3>" +
      esc(q.text) +
      "</h3>";
    if (q.type === "mc")
      html +=
        '<div class="q-choices">' +
        q.choices
          .map((opt, i) => {
            const chosen = a.answer === i;
            const className =
              (chosen ? " selected" : "") +
              (a.checked && i === q.answer ? " correct" : "") +
              (a.checked && chosen && i !== q.answer ? " wrong" : "");
            return (
              '<button class="choice' +
              className +
              '" data-action="choice" data-id="' +
              q.id +
              '" data-choice="' +
              i +
              '" aria-pressed="' +
              chosen +
              '" ' +
              (lock ? "disabled" : "") +
              '><span class="choice-key">' +
              String.fromCharCode(65 + i) +
              "</span><span>" +
              esc(opt) +
              "</span></button>"
            );
          })
          .join("") +
        "</div>";
    if (q.type === "num")
      html +=
        '<div class="q-num"><label for="answer-' +
        q.id +
        '">Đáp số</label><input id="answer-' +
        q.id +
        '" data-number="' +
        q.id +
        '" inputmode="decimal" autocomplete="off" value="' +
        esc(a.answer ?? "") +
        '" ' +
        (lock ? "disabled" : "") +
        '><span class="muted">' +
        esc(q.unit || "") +
        '</span></div><p class="muted" style="font-size:.78rem">Dùng dấu phẩy hoặc dấu chấm thập phân. Nhập đúng độ làm tròn đề yêu cầu.</p>';
    if (q.type === "tf")
      html +=
        '<div class="tf-list">' +
        q.items
          .map(
            (s, i) =>
              '<div class="tf-row"><div><strong>' +
              String.fromCharCode(97 + i) +
              ")</strong> " +
              esc(s.text) +
              '</div><div class="tf-buttons">' +
              [true, false]
                .map(
                  (v) =>
                    '<button data-action="tf" data-id="' +
                    q.id +
                    '" data-index="' +
                    i +
                    '" data-value="' +
                    v +
                    '" aria-pressed="' +
                    (a.answer?.[i] === v) +
                    '" ' +
                    (lock ? "disabled" : "") +
                    ">" +
                    (v ? "Đúng" : "Sai") +
                    "</button>",
                )
                .join("") +
              "</div>" +
              (a.checked
                ? '<div class="tf-feedback"><strong>' +
                  (a.answer?.[i] === undefined
                    ? "Bỏ trống"
                    : a.answer[i] === s.answer
                      ? "✓ Đúng ý"
                      : "Chưa đúng") +
                  "</strong> · " +
                  (s.answer ? "Đúng" : "Sai") +
                  ". " +
                  s.why +
                  "</div>"
                : "") +
              "</div>",
          )
          .join("") +
        "</div>";
    if (q.type === "write")
      html +=
        '<label class="muted" for="answer-' +
        q.id +
        '">Bản nháp của bạn</label><textarea id="answer-' +
        q.id +
        '" data-draft="' +
        q.id +
        '" placeholder="Viết bằng chữ hoặc công thức thu gọn…">' +
        esc(a.answer || "") +
        "</textarea>";
    if (!quiz) {
      html +=
        "<details><summary>Gợi ý cách bắt đầu</summary><p>" +
        q.hint +
        "</p></details>";
      html +=
        '<details class="visual-detail" ' +
        (a.show ? "open" : "") +
        "><summary>Minh họa để hiểu</summary>" +
        V.render(q.visual) +
        "</details>";
      html +=
        '<div class="q-bottom">' +
        (q.type !== "write"
          ? '<button class="button primary small" data-action="check" data-id="' +
            q.id +
            '">Kiểm tra</button>'
          : "") +
        '<button class="button small" data-action="solution" data-id="' +
        q.id +
        '">' +
        (a.show ? "Ẩn lời giải" : "Xem lời giải") +
        "</button>" +
        lessonLink(q, "Ôn lại bài học") +
        "</div>";
    }
    html +=
      '<div class="feedback ' +
      (a.checked ? (correct(q, a.answer) ? "good" : "bad") : "") +
      '" role="status" id="feedback-' +
      q.id +
      '">' +
      (a.checked
        ? correct(q, a.answer)
          ? "✓ Chính xác."
          : "Cần xem lại. " +
            (q.type === "tf"
              ? "Đối chiếu các ý bên trên."
              : "Hãy rà cấu tạo, đơn vị hoặc phần hướng dẫn.")
        : "") +
      "</div>";
    if (a.show)
      html +=
        (quiz ? V.render(q.visual) : "") + solutionHtml(q, a.answer, a.checked);
    if (q.note && (!quiz || lock))
      html += '<p class="note">' + esc(q.note) + "</p>";
    return html + "</article>";
  }
  function empty(title, text, href, label) {
    return (
      '<div class="empty"><h2>' +
      title +
      "</h2><p>" +
      text +
      '</p><div style="margin-top:19px">' +
      button(label, href, true) +
      "</div></div>"
    );
  }
  function filters(params) {
    function option(v, label, key) {
      return (
        '<option value="' +
        v +
        '" ' +
        (params.get(key) === v ? "selected" : "") +
        ">" +
        label +
        "</option>"
      );
    }
    return (
      '<form id="practiceFilters" class="filterbar"><label>Chủ đề<select name="topic">' +
      option("", "Tất cả", "topic") +
      D.lessons.map((l) => option(l.id, l.title, "topic")).join("") +
      "</select></label>" +
      '<label>Nguồn<select name="source">' +
      option("", "Tất cả", "source") +
      option("doc", "Tài liệu đã gửi", "source") +
      option("extra", "Bài bổ sung", "source") +
      "</select></label>" +
      '<label>Dạng câu<select name="type">' +
      option("", "Tất cả", "type") +
      [
        ["mc", "Chọn đáp án"],
        ["tf", "Đúng / Sai"],
        ["num", "Trả lời ngắn"],
        ["write", "Viết phương trình"],
      ]
        .map(([v, t]) => option(v, t, "type"))
        .join("") +
      "</select></label>" +
      '<label class="search-label">Tìm trong câu hỏi<input name="search" type="search" placeholder="Ví dụ: capron, hiệu suất…" value="' +
      esc(params.get("search") || "") +
      '"></label><button class="button small" type="submit">Tìm</button></form>'
    );
  }
  function practice(params, review = false) {
    const ids = review ? new Set(reviewIds()) : null;
    const search = (params.get("search") || "").toLocaleLowerCase("vi");
    const filtered = D.questions.filter(
      (q) =>
        (!ids || ids.has(q.id)) &&
        (!params.get("topic") || q.topic === params.get("topic")) &&
        (!params.get("source") || q.source === params.get("source")) &&
        (!params.get("type") || q.type === params.get("type")) &&
        (!search ||
          (q.text + " " + q.label).toLocaleLowerCase("vi").includes(search)),
    );
    const size = 6,
      totalPages = Math.max(1, Math.ceil(filtered.length / size)),
      page = Math.max(1, Math.min(totalPages, Number(params.get("page")) || 1));
    const list = filtered.slice((page - 1) * size, page * size);
    function pageLink(n) {
      const p = new URLSearchParams(params);
      p.set("page", n);
      return "#" + (review ? "review" : "practice") + "?" + p.toString();
    }
    const title = review ? "Câu cần ôn lại" : "Luyện từng câu, hiểu từng bước";
    const desc = review
      ? "Các câu có lần làm gần nhất chưa đúng và những câu bạn đã lưu. Làm đúng lại để cập nhật tiến độ."
      : "48 câu từ tài liệu đã gửi và 24 câu bổ sung. Mở gợi ý, nhập đáp án rồi đối chiếu lời giải.";
    return (
      heading(title, desc) +
      filters(params) +
      '<div class="results-line"><span>' +
      filtered.length +
      " câu phù hợp</span><span>Trang " +
      page +
      " / " +
      totalPages +
      "</span></div>" +
      (list.length
        ? list.map((q) => questionHtml(q)).join("")
        : empty(
            "Chưa có câu phù hợp",
            review
              ? "Bạn có thể lưu một câu để quay lại hoặc làm thêm bài luyện."
              : "Thử đổi chủ đề, dạng câu hoặc từ khóa.",
            "#practice",
            "Mở kho luyện tập",
          )) +
      '<div class="actions" style="justify-content:center;margin-top:24px">' +
      (page > 1 ? button("Trang trước", pageLink(page - 1)) : "") +
      (page < totalPages
        ? button("Trang tiếp theo", pageLink(page + 1), true)
        : "") +
      "</div>"
    );
  }
  function atlas(params) {
    const group = params.get("group") || "",
      search = (params.get("search") || "").toLowerCase();
    const ps = D.polymers.filter(
      (p) =>
        (!group || p.group.includes(group)) &&
        (!search ||
          (p.id + " " + p.name + " " + p.monomer)
            .toLowerCase()
            .includes(search)),
    );
    return (
      heading(
        "Bản đồ 19 polymer",
        "Monomer, mắt xích, phương pháp và ứng dụng ở cùng một chỗ.",
      ) +
      '<form id="atlasFilters" class="filterbar"><label>Nhóm vật liệu<select name="group"><option value="">Tất cả</option>' +
      ["Chất dẻo", "Tơ", "Cao su", "Keo", "thiên nhiên"]
        .map(
          (g) =>
            "<option " +
            (g === group ? "selected" : "") +
            ">" +
            g +
            "</option>",
        )
        .join("") +
      '</select></label><label class="search-label">Tìm polymer<input name="search" type="search" value="' +
      esc(params.get("search") || "") +
      '" placeholder="PE, nylon, cellulose…"></label><button class="button small">Tìm</button></form><div class="grid two">' +
      ps
        .map(
          (p) =>
            '<article class="card atlas-card"><span class="pill green">' +
            p.group +
            "</span><h3>" +
            p.name +
            '</h3><div class="details-line"><strong>Monomer / nguồn</strong><div class="chemical">' +
            esc(p.monomer) +
            '</div></div><div class="details-line"><strong>Mắt xích / cấu trúc</strong><div class="chemical">' +
            esc(p.repeat) +
            "</div></div><p>" +
            p.note +
            '</p><div class="details-line"><strong>' +
            p.method +
            "</strong>" +
            (p.mass ? " · M₀ = " + String(p.mass).replace(".", ",") : "") +
            "</div><p>" +
            p.uses +
            "</p></article>",
        )
        .join("") +
      "</div>" +
      (!ps.length
        ? '<div class="empty">Không có polymer phù hợp. Thử từ khóa ngắn hơn.</div>'
        : "")
    );
  }
  const legacyConfigs = {
    quick: {
      title: "Ôn nhanh 10 phút",
      minutes: 10,
      mc: 8,
      tf: 0,
      num: 2,
      weights: { mc: 1, tf: 0, num: 1 },
      detail: "8 câu chọn đáp án × 1 điểm + 2 câu ngắn × 1 điểm.",
    },
    class: {
      title: "Kiểm tra 15 phút",
      minutes: 15,
      mc: 8,
      tf: 1,
      num: 2,
      weights: { mc: 0.5, tf: 2, num: 2 },
      detail:
        "8 câu chọn đáp án × 0,5 + 4 ý đúng/sai × 0,5 + 2 câu ngắn × 2 điểm.",
    },
    mixed: {
      title: "Tổng hợp 30 phút",
      minutes: 30,
      mc: 12,
      tf: 2,
      num: 4,
      weights: { mc: 0.5, tf: 1, num: 0.5 },
      detail:
        "12 câu chọn đáp án × 0,5 + 8 ý đúng/sai × 0,25 + 4 câu ngắn × 0,5 điểm.",
    },
  };
  const configs = {
    regular45: {
      title: "Kiểm tra thường xuyên · 45 phút",
      minutes: 45,
      mc: 14,
      tf: 0,
      num: 6,
      weights: { mc: 0.5, tf: 0, num: 0.5 },
      detail:
        "14 câu trắc nghiệm một đáp án + 6 câu điền số trả lời ngắn. Mỗi câu 0,5 điểm, tổng 10 điểm.",
      mcTopics: { basics: 3, synthesis: 3, plastics: 3, fibers: 3, rubber: 2 },
      numGroups: [
        "classification",
        "repeatMass",
        "degree",
        "yield",
        "composition",
        "multistep",
      ],
    },
  };
  function quizConfig(kind) {
    return configs[kind] || legacyConfigs[kind];
  }
  function testHome() {
    const active = store.quiz && !store.quiz.submitted;
    return (
      heading(
        "Kiểm tra thường xuyên · Polymer",
        "45 phút, 20 câu. Luyện đúng cấu trúc 14 câu trắc nghiệm và 6 câu điền số trả lời ngắn.",
      ) +
      (active
        ? '<div class="card remember" style="margin-bottom:22px"><h3>Bạn có bài đang làm</h3><p>' +
          esc(store.quiz.title) +
          '. Bài được giữ theo cấu trúc tại thời điểm bắt đầu. Đồng hồ tiếp tục tính khi đóng trang.</p><div class="actions" style="margin-top:14px">' +
          button("Tiếp tục bài đang làm", "#exam", true) +
          "</div></div>"
        : "") +
      '<div class="test-overview">' +
      Object.entries(configs)
        .map(
          ([id, c]) =>
            '<article class="card test-card"><span class="pill green">' +
            c.minutes +
            " phút · Thang 10</span><h3>" +
            c.title +
            "</h3><p>" +
            c.detail +
            '</p><div class="table-scroll"><table class="exam-structure"><caption>Cấu trúc đề và cách tính điểm</caption><thead><tr><th scope="col">Phần</th><th scope="col">Số câu</th><th scope="col">Điểm</th></tr></thead><tbody><tr><td>Trắc nghiệm · chọn một đáp án</td><td>14</td><td>7</td></tr><tr><td>Điền số · trả lời ngắn</td><td>6</td><td>3</td></tr><tr><th scope="row">Tổng</th><td>20</td><td>10</td></tr></tbody></table></div><p class="test-rules">Câu 1–14 chọn A, B, C hoặc D. Câu 15–20 nhập một số; chấp nhận dấu phẩy hoặc dấu chấm thập phân. Đơn vị và yêu cầu làm tròn nằm trong từng câu.</p><div class="actions"><button class="button primary" data-action="start-test" data-id="' +
            id +
            '">' +
            (active ? "Bắt đầu bài mới" : "Bắt đầu làm bài") +
            "</button></div></article>",
        )
        .join("") +
      '<aside class="card exam-prep"><h3>Chuẩn bị trước khi làm</h3><p>Đề chọn câu từ tài liệu đã gửi và các dạng bổ sung, bao quát đại cương, điều chế, chất dẻo, composite, tơ, cao su và keo dán.</p><h3>Chia 45 phút thế nào?</h3><ul><li>18 phút làm 14 câu trắc nghiệm.</li><li>22 phút làm 6 câu điền số.</li><li>5 phút kiểm tra đáp án, đơn vị và độ làm tròn.</li></ul><p>Sáu câu điền số gồm phân loại, khối lượng mắt xích, tính n, hiệu suất, thành phần vật liệu và chuyển hóa nhiều bước.</p><p>Đáp án được lưu khi làm. Hết giờ, bài tự nộp. Sau khi nộp, bạn xem được lời giải và mở đúng mục cần ôn.</p></aside></div>' +
      '<div class="section-heading"><h2>Các lần kiểm tra gần đây</h2>' +
      button("Xem tiến độ", "#settings") +
      "</div>" +
      historyHtml()
    );
  }
  function shuffle(items) {
    const array = items.slice();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function startTest(kind) {
    const config = configs[kind];
    if (!config) return;
    if (
      store.quiz &&
      !store.quiz.submitted &&
      !confirm(
        "Bạn đang có một bài chưa nộp. Bắt đầu bài mới sẽ thay bài đó. Tiếp tục?",
      )
    )
      return;
    const ids = [],
      used = new Set();
    function pick(pool, target) {
      let count = 0;
      for (const q of shuffle(pool)) {
        if (count === target) break;
        if (used.has(q.concept || q.id)) continue;
        used.add(q.concept || q.id);
        ids.push(q.id);
        count++;
      }
      return count === target;
    }
    for (const [topic, target] of Object.entries(config.mcTopics)) {
      if (
        !pick(
          D.questions.filter(
            (q) => q.type === "mc" && q.topic === topic && q.id !== "DC-5",
          ),
          target,
        )
      ) {
        notify(
          "Chưa đủ câu cho chủ đề này. Hãy tải lại trang để cập nhật ngân hàng.",
        );
        return;
      }
    }
    const mcIds = shuffle(ids);
    ids.length = 0;
    ids.push(...mcIds);
    for (const group of config.numGroups) {
      if (
        !pick(
          D.questions.filter((q) => q.type === "num" && q.examGroup === group),
          1,
        )
      ) {
        notify(
          "Chưa đủ dạng câu điền số. Hãy tải lại trang để cập nhật ngân hàng.",
        );
        return;
      }
    }
    const now = Date.now();
    store.quiz = {
      id: "quiz-" + now,
      title: config.title,
      kind,
      start: now,
      end: now + config.minutes * 60000,
      ids,
      answers: {},
      submitted: false,
    };
    save();
    if (location.hash === "#exam") render();
    else location.hash = "exam";
  }
  function quizPoints(q, answer, kind) {
    const w = quizConfig(kind).weights[q.type];
    if (q.type === "tf")
      return (
        (q.items.filter((s, i) => answer?.[i] === s.answer).length * w) / 4
      );
    return correct(q, answer) ? w : 0;
  }
  function finishQuiz(auto = false) {
    const quiz = store.quiz;
    if (!quiz || quiz.submitted) return;
    quiz.submitted = true;
    quiz.finished = Date.now();
    let score = 0;
    for (const id of quiz.ids) {
      const q = questions.get(id),
        answer = quiz.answers[id];
      score += quizPoints(q, answer, quiz.kind);
      store.attempts[id] = {
        answer,
        checked: true,
        lastCorrect: correct(q, answer),
        show: false,
      };
    }
    quiz.score = Math.round(score * 100) / 100;
    if (!store.history.some((h) => h.id === quiz.id))
      store.history.unshift({
        id: quiz.id,
        title: quiz.title,
        date: new Date().toISOString(),
        score: quiz.score,
      });
    store.history = store.history.slice(0, 30);
    save();
    status();
    render();
    if (auto) notify("Đã hết giờ. Bài được nộp và chấm tự động.");
  }
  function clock(ms) {
    const sec = Math.max(0, Math.ceil(ms / 1000));
    return (
      String(Math.floor(sec / 60)).padStart(2, "0") +
      ":" +
      String(sec % 60).padStart(2, "0")
    );
  }
  function exam() {
    const qz = store.quiz;
    if (!qz)
      return empty(
        "Bạn chưa bắt đầu bài kiểm tra",
        "Bắt đầu bài 45 phút gồm 14 câu trắc nghiệm và 6 câu điền số.",
        "#test",
        "Chọn bài kiểm tra",
      );
    const config = quizConfig(qz.kind);
    const answered = qz.ids.filter((id) =>
      answerComplete(questions.get(id), qz.answers[id]),
    ).length;
    let top = heading(qz.title, config.detail);
    if (qz.submitted) {
      const wrong = qz.ids.filter(
        (id) => !correct(questions.get(id), qz.answers[id]),
      ).length;
      top +=
        '<div class="score-card"><div class="eyebrow">Đã nộp bài</div><div class="score">' +
        String(qz.score).replace(".", ",") +
        "<small> / 10</small></div><p>" +
        wrong +
        ' câu còn cần ôn. Bên dưới có đáp án và giải thích cho từng ý.</p><div class="actions" style="margin-top:16px">' +
        button("Ôn câu cần sửa", "#review", true) +
        button("Chọn bài kiểm tra khác", "#test") +
        "</div></div>";
      if (qz.kind === "regular45") {
        const mcRight = qz.ids
          .slice(0, 14)
          .filter((id) => correct(questions.get(id), qz.answers[id])).length;
        const numRight = qz.ids
          .slice(14)
          .filter((id) => correct(questions.get(id), qz.answers[id])).length;
        top +=
          '<p class="exam-breakdown">Trắc nghiệm đúng ' +
          mcRight +
          "/14 · Điền số đúng " +
          numRight +
          "/6</p>";
      }
    }
    return (
      top +
      '<div class="quiz-layout"><section>' +
      qz.ids
        .map(
          (id, i) =>
            (qz.kind === "regular45" && [0, 14].includes(i)
              ? '<h2 class="exam-section">' +
                (i === 0
                  ? "Phần I · 14 câu trắc nghiệm (7 điểm)"
                  : "Phần II · 6 câu điền số (3 điểm)") +
                "</h2>"
              : "") + questionHtml(questions.get(id), true, i + 1),
        )
        .join("") +
      '</section><aside class="quiz-aside"><div class="card"><div><p class="muted">' +
      (qz.submitted ? "Kết quả" : "Thời gian còn lại") +
      '</p><div class="timer" id="timer">' +
      (qz.submitted
        ? String(qz.score).replace(".", ",") + " / 10"
        : clock(qz.end - Date.now())) +
      '</div></div><p class="muted" id="quizProgress">' +
      answered +
      "/" +
      qz.ids.length +
      ' câu đã trả lời</p><nav class="q-nav" aria-label="Điều hướng câu hỏi">' +
      qz.ids
        .map(
          (id, i) =>
            '<a href="#q-' +
            id +
            '" data-jump="' +
            id +
            '" class="' +
            (answerComplete(questions.get(id), qz.answers[id])
              ? "answered"
              : "") +
            '">' +
            (i + 1) +
            "</a>",
        )
        .join("") +
      "</nav>" +
      (!qz.submitted
        ? '<button class="button primary" data-action="submit-test">Nộp bài</button>'
        : "") +
      "</div></aside></div>"
    );
  }
  function historyHtml() {
    return store.history.length
      ? '<div class="card"><ul class="history">' +
          store.history
            .slice(0, 8)
            .map(
              (h) =>
                "<li><span>" +
                esc(h.title) +
                '<br><small class="muted">' +
                new Date(h.date).toLocaleString("vi-VN") +
                "</small></span><strong>" +
                String(h.score).replace(".", ",") +
                " / 10</strong></li>",
            )
            .join("") +
          "</ul></div>"
      : '<div class="card"><p class="muted">Chưa có bài kiểm tra đã nộp. Bắt đầu bài thường xuyên 45 phút để tự đánh giá.</p></div>';
  }
  function sources() {
    return (
      heading(
        "Video và tài liệu đang học",
        "Mở đúng phần bài giảng và đối chiếu từng câu với các trang tài liệu đã gửi.",
      ) +
      '<div class="grid two">' +
      D.videos
        .map(
          (v) =>
            '<article class="card"><div class="eyebrow">' +
            v.duration +
            " · " +
            v.channel +
            "</div><h2>" +
            v.title +
            '</h2><div data-video="' +
            v.id +
            '" class="video-placeholder"><button class="play-circle" data-action="video" data-id="' +
            v.id +
            '" aria-label="Phát ' +
            v.title +
            '">▶</button><p>Nhấn để tải video YouTube.<br>Video cần kết nối Internet.</p></div><div class="chapter-links">' +
            v.chapters
              .map(
                ([name, t]) =>
                  '<a class="button small" href="https://www.youtube.com/watch?v=' +
                  v.id +
                  "&t=" +
                  t +
                  's" target="_blank" rel="noopener">' +
                  name +
                  " · " +
                  clock(t * 1000) +
                  "</a>",
              )
              .join("") +
            "</div></article>",
        )
        .join("") +
      "</div>" +
      '<p class="source-links">32 mục bài học có 41 đoạn giảng mở đúng mốc, kèm sơ đồ ngay trong bài. Mốc nội dung được đối chiếu với các chương và bản chép lời tự động trên YouTube. Phụ đề tự động có thể nhận sai tên chất; công thức và lời giải trên web được biên soạn từ tài liệu bạn gửi, theo phạm vi Bài 12–14 Kết nối tri thức.</p>' +
      '<div class="section-heading"><h2>9 trang tài liệu gốc</h2>' +
      button("Luyện theo tài liệu", "#practice?source=doc") +
      '</div><p class="muted" style="margin-bottom:18px">Nhấn vào ảnh để phóng lớn. 48 câu được giữ theo nhóm và số câu của bản gửi; các chỗ làm rõ được ghi ngay dưới câu.</p>' +
      '<div class="docs-grid">' +
      Array.from(
        { length: 9 },
        (_, i) =>
          '<a class="doc-card" href="tai-lieu/trang-' +
          (i + 8) +
          '.webp" target="_blank" rel="noopener"><img loading="lazy" width="1152" height="1536" src="tai-lieu/trang-' +
          (i + 8) +
          '.webp" alt="Trang ' +
          (i + 8) +
          ' tài liệu ôn tập Polymer"><p>Trang ' +
          (i + 8) +
          " · " +
          (i < 2
            ? "Kiến thức và bảng tổng hợp"
            : i === 2
              ? "Bài SGK và đại cương"
              : i < 5
                ? "Đại cương, chất dẻo"
                : i < 7
                  ? "Composite và tơ"
                  : "Tơ, cao su, keo dán") +
          "</p></a>",
      ).join("") +
      "</div>" +
      '<section class="card" style="margin-top:25px"><h3>Nguồn đối chiếu kiến thức</h3><ul class="reference-list"><li><a href="https://www.sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-4-polymer-3698/bai-12-dai-cuong-ve-polymer-13536.html" target="_blank" rel="noopener">Bài 12 · Đại cương về polymer, bản SGK trực tuyến</a></li><li><a href="https://www.sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-4-polymer-3698/bai-13-vat-lieu-polymer-13537.html" target="_blank" rel="noopener">Bài 13 · Vật liệu polymer, bản SGK trực tuyến</a></li><li><a href="https://hero.epa.gov/reference/10974797/" target="_blank" rel="noopener">EPA · Sản phẩm phân hủy nhiệt PVC, dùng đối chiếu lưu ý ở câu đốt mẫu</a></li></ul></section>'
    );
  }
  function settings() {
    const right = Object.values(store.attempts).filter(
      (a) => a.lastCorrect === true,
    ).length;
    return (
      heading(
        "Tiến độ và bản sao của bạn",
        "Dữ liệu học được lưu trên trình duyệt của thiết bị đang dùng. Xuất một bản JSON để chuyển sang thiết bị khác.",
      ) +
      '<div class="grid three"><div class="card"><div class="muted">Bài học hoàn thành</div><div class="score">' +
      store.done.length +
      '<small> / 8</small></div></div><div class="card"><div class="muted">Câu đã làm đúng gần nhất</div><div class="score">' +
      right +
      '</div></div><div class="card"><div class="muted">Câu cần ôn hoặc đã lưu</div><div class="score">' +
      reviewIds().length +
      "</div></div></div>" +
      '<div class="card" style="margin-top:24px"><h2>Sao lưu và chuyển thiết bị</h2><p>Nhập bản sao sẽ thay tiến độ hiện tại trên thiết bị này. Bạn có thể xuất bản hiện tại trước khi nhập.</p><div class="actions" style="margin-top:18px"><button class="button primary" data-action="export">Xuất tiến độ JSON</button><label class="button file-label">Nhập tiến độ JSON<input id="importProgress" type="file" accept=".json,application/json" hidden></label></div><p class="source-links">Bản sao gồm trạng thái bài học, đáp án đã nhập, câu đã lưu, lịch sử và bài kiểm tra đang làm.</p></div>' +
      '<div class="section-heading"><h2>Lịch sử kiểm tra</h2></div>' +
      historyHtml()
    );
  }
  function render() {
    clearInterval(timer);
    timer = null;
    const { path, params } = routeData(),
      [page, id] = path.split("/");
    const allowed = [
      "home",
      "learn",
      "practice",
      "atlas",
      "test",
      "exam",
      "review",
      "sources",
      "settings",
    ];
    if (!allowed.includes(page)) {
      main.innerHTML = empty(
        "Chưa tìm thấy trang",
        "Quay về tổng quan để tiếp tục học.",
        "#home",
        "Mở tổng quan",
      );
      return;
    }
    if (
      page === "exam" &&
      store.quiz &&
      !store.quiz.submitted &&
      store.quiz.end <= Date.now()
    ) {
      finishQuiz(true);
      return;
    }
    const pages = {
      home: home,
      learn: () => learn(id),
      practice: () => practice(params),
      review: () => practice(params, true),
      atlas: () => atlas(params),
      test: testHome,
      exam: exam,
      sources: sources,
      settings: settings,
    };
    main.innerHTML = pages[page]();
    const navPage = page === "exam" ? "test" : page;
    document.querySelectorAll("[data-nav]").forEach((a) => {
      const active = a.dataset.nav === navPage;
      a.classList.toggle("active", active);
      if (active) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    document
      .querySelectorAll(".mobile-nav a")
      .forEach((a) => a.classList.toggle("active", a.hash === "#" + navPage));
    const names = {
      home: "Không gian học tập",
      learn: "Bài học",
      practice: "Luyện tập",
      atlas: "Tra cứu polymer",
      test: "Kiểm tra thường xuyên",
      exam: "Phòng kiểm tra",
      review: "Câu cần ôn",
      sources: "Video & tài liệu",
      settings: "Tiến độ & sao lưu",
    };
    document.getElementById("breadcrumb").textContent = names[page];
    document.title = names[page] + " · Polymer Hóa 12";
    status();
    V.mount(main);
    if (page === "learn" && id && /^\d+$/.test(params.get("part") || "")) {
      focusLessonPart(Number(params.get("part")));
    }
    if (page === "exam" && store.quiz && !store.quiz.submitted) {
      const tick = () => {
        const remaining = store.quiz.end - Date.now();
        const t = document.getElementById("timer");
        if (t) t.textContent = clock(remaining);
        if (remaining <= 0) finishQuiz(true);
      };
      timer = setInterval(tick, 1000);
    }
  }
  function replaceCard(q, quiz) {
    const el = document.getElementById("q-" + q.id);
    if (!el) return;
    const number = quiz ? store.quiz.ids.indexOf(q.id) + 1 : undefined;
    el.outerHTML = questionHtml(q, quiz, number);
    V.mount(document.getElementById("q-" + q.id));
  }
  function updateAnswer(q, value, quiz) {
    if (quiz) {
      if (store.quiz.submitted) return;
      store.quiz.answers[q.id] = value;
    } else {
      const prev = store.attempts[q.id] || {};
      store.attempts[q.id] = {
        ...prev,
        answer: value,
        checked: false,
        show: false,
      };
    }
    save();
    if (quiz) {
      const count = store.quiz.ids.filter((id) =>
        answerComplete(questions.get(id), store.quiz.answers[id]),
      ).length;
      document.getElementById("quizProgress").textContent =
        count + "/" + store.quiz.ids.length + " câu đã trả lời";
      const nav = main.querySelector('[data-jump="' + q.id + '"]');
      if (nav) nav.classList.toggle("answered", answerComplete(q, value));
    }
  }
  main.addEventListener("click", (event) => {
    const jump = event.target.closest("[data-jump]");
    if (jump) {
      event.preventDefault();
      document
        .getElementById("q-" + jump.dataset.jump)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const b = event.target.closest("[data-action]");
    if (!b) return;
    const action = b.dataset.action,
      id = b.dataset.id,
      q = questions.get(id),
      quiz = Boolean(b.closest("[data-quiz]"));
    if (q && quiz && store.quiz.submitted && ["choice", "tf"].includes(action))
      return;
    if (action === "choice") {
      updateAnswer(q, Number(b.dataset.choice), quiz);
      replaceCard(q, quiz);
    }
    if (action === "tf") {
      const answer = quiz ? store.quiz.answers[id] : store.attempts[id]?.answer;
      const updated = {
        ...(answer || {}),
        [b.dataset.index]: b.dataset.value === "true",
      };
      updateAnswer(q, updated, quiz);
      replaceCard(q, quiz);
    }
    if (action === "check") {
      const a = store.attempts[id] || {};
      if (!answerComplete(q, a.answer)) {
        document.getElementById("feedback-" + id).textContent =
          q.type === "tf"
            ? "Chọn Đúng hoặc Sai cho đủ bốn ý trước khi kiểm tra."
            : "Nhập hoặc chọn một đáp án hợp lệ trước khi kiểm tra.";
        return;
      }
      a.checked = true;
      a.lastCorrect = correct(q, a.answer);
      a.show = true;
      store.attempts[id] = a;
      save();
      status();
      replaceCard(q, false);
    }
    if (action === "solution") {
      const a = store.attempts[id] || {};
      a.show = !a.show;
      store.attempts[id] = a;
      save();
      replaceCard(q, false);
    }
    if (action === "bookmark") {
      store.bookmarks = store.bookmarks.includes(id)
        ? store.bookmarks.filter((x) => x !== id)
        : [...store.bookmarks, id];
      save();
      status();
      b.setAttribute("aria-pressed", store.bookmarks.includes(id));
      b.textContent = store.bookmarks.includes(id) ? "✓ Đã lưu" : "☆ Lưu câu";
    }
    if (action === "complete") {
      if (!store.done.includes(id)) {
        store.done.push(id);
        save();
        status();
        notify("Đã lưu bài học hoàn thành.");
      }
      b.textContent = "✓ Đã hoàn thành bài";
    }
    if (action === "start-test") startTest(id);
    if (action === "submit-test") {
      const n = store.quiz.ids.filter(
        (id) => !answerComplete(questions.get(id), store.quiz.answers[id]),
      ).length;
      if (
        n &&
        !confirm("Còn " + n + " câu chưa trả lời đầy đủ. Bạn vẫn muốn nộp bài?")
      )
        return;
      finishQuiz();
    }
    if (action === "video") {
      const holder = main.querySelector('[data-video="' + id + '"]');
      const video = D.videos.find((v) => v.id === id);
      if (holder && video)
        holder.replaceWith(videoFrame(id, 0, 0, video.title));
    }
    if (action === "lesson-part") {
      focusLessonPart(id);
    }
    if (action === "checkpoint") {
      const guide = G[id]?.parts[Number(b.dataset.part)]?.checkpoint;
      const chosen = Number(b.dataset.choice),
        box = b.closest(".checkpoint");
      if (!guide || !box || !Number.isInteger(chosen) || !guide.choices[chosen])
        return;
      const right = chosen === guide.answer;
      box.querySelectorAll("button").forEach((option) => {
        const selected = option === b;
        option.setAttribute("aria-pressed", String(selected));
        option.classList.toggle("checkpoint-right", selected && right);
        option.classList.toggle("checkpoint-wrong", selected && !right);
      });
      const feedback = box.querySelector(".checkpoint-feedback");
      feedback.hidden = false;
      feedback.className = "checkpoint-feedback " + (right ? "good" : "bad");
      feedback.textContent =
        (right ? "Đúng rồi. " : "Xem lại một chút. ") + guide.why;
    }
    if (action === "clip") {
      const lesson = lessons.get(id);
      const part = lesson?.parts[Number(b.dataset.part)];
      const clip = part?.clips[Number(b.dataset.clip)];
      const stage = document.getElementById(b.getAttribute("aria-controls"));
      if (!clip || !stage) return;
      closeLessonVideos();
      b.setAttribute("aria-pressed", "true");
      stage.hidden = false;
      stage.querySelector(".clip-now").textContent =
        clip.title + " · " + clipRange(clip);
      stage
        .querySelector(".clip-screen")
        .append(
          videoFrame(
            clip.video,
            clip.start,
            clip.end,
            part.title + " · " + clipRange(clip),
          ),
        );
      stage.scrollIntoView({ behavior: "instant", block: "nearest" });
    }
    if (action === "close-clip") closeLessonVideos(true);
    if (action === "export") {
      const a = document.createElement("a"),
        url = URL.createObjectURL(
          new Blob([JSON.stringify(store, null, 2)], {
            type: "application/json",
          }),
        );
      a.href = url;
      a.download = "polymer-tien-do.json";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  });
  main.addEventListener("input", (event) => {
    const input = event.target,
      id = input.dataset.number || input.dataset.draft;
    if (!id) return;
    const q = questions.get(id),
      quiz = Boolean(input.closest("[data-quiz]"));
    updateAnswer(q, input.value, quiz);
    const feedback = document.getElementById("feedback-" + id);
    feedback.textContent = "";
    feedback.className = "feedback";
    if (!quiz) {
      input.closest(".question").querySelector(".solution")?.remove();
      input
        .closest(".question")
        .querySelector("[data-action=solution]").textContent = "Xem lời giải";
    }
  });
  main.addEventListener("submit", (event) => {
    if (!["practiceFilters", "atlasFilters"].includes(event.target.id)) return;
    event.preventDefault();
    const params = new URLSearchParams();
    for (const [key, value] of new FormData(event.target))
      if (String(value).trim()) params.set(key, String(value).trim());
    const page =
      event.target.id === "atlasFilters" ? "atlas" : routeData().path;
    const hash = page + (params.size ? "?" + params : "");
    if (location.hash === "#" + hash) render();
    else location.hash = hash;
  });
  main.addEventListener("change", (event) => {
    if (event.target.matches("#practiceFilters select,#atlasFilters select")) {
      event.target.form.requestSubmit();
      return;
    }
    if (event.target.id !== "importProgress") return;
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 2000000) {
      notify("Bản sao quá lớn. Chọn tệp tiến độ JSON do web xuất.");
      return;
    }
    file
      .text()
      .then((text) => {
        let incoming;
        try {
          incoming = JSON.parse(text);
          if (
            incoming.version !== 1 ||
            !Array.isArray(incoming.done) ||
            !incoming.attempts
          )
            throw Error();
        } catch (e) {
          notify("Tệp không đúng định dạng tiến độ của web.");
          return;
        }
        if (!confirm("Thay tiến độ hiện tại bằng bản sao vừa chọn?")) return;
        store = normalize(incoming);
        save();
        render();
        notify("Đã nhập bản sao tiến độ.");
      })
      .catch(() => notify("Chưa đọc được tệp đã chọn."));
  });
  window.addEventListener("hashchange", () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    render();
  });
  document.querySelector(".skip").addEventListener("click", (event) => {
    event.preventDefault();
    main.focus();
    main.scrollIntoView();
  });
  document.addEventListener("visibilitychange", () => {
    if (
      !document.hidden &&
      routeData().path === "exam" &&
      store.quiz &&
      !store.quiz.submitted &&
      Date.now() >= store.quiz.end
    )
      finishQuiz(true);
  });
  document.getElementById("themeButton").addEventListener("click", () => {
    const value =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = value;
    try {
      localStorage.setItem("hoa_polymer_theme", value);
    } catch (e) {}
  });
  try {
    const theme = localStorage.getItem("hoa_polymer_theme");
    if (theme === "dark") document.documentElement.dataset.theme = theme;
  } catch (e) {}
  function connection() {
    document.getElementById("connectionState").lastChild.textContent =
      navigator.onLine ? "Sẵn sàng học" : "Đang ngoại tuyến";
  }
  window.addEventListener("online", connection);
  window.addEventListener("offline", connection);
  connection();
  if ("serviceWorker" in navigator && location.protocol !== "file:")
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  render();
})();
