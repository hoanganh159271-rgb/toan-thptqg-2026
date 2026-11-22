/* Không gian Ôn thi Toán THPTQG 2026 — Tiện ích dùng chung 100% Offline */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'toan_thptqg_2026_v1';
  var THEME_KEY = 'toan_thptqg_2026_theme';

  var ERROR_GROUPS = [
    'Hổng kiến thức',
    'Hổng bản chất',
    'Thiếu ý tưởng',
    'Lỗi vận dụng',
    'Tính toán ẩu',
    'Đọc sót dữ kiện',
    'Quản lý thời gian',
    'Bất cẩn'
  ];

  var MATRIX = {
    meta: {
      ten_ma_tran: 'Ma trận Đề thi thử TN THPT môn Toán 2026 (GDPT 2018)',
      nam: 2026,
      tong_cau: 22,
      tong_lenh: 34,
      thoi_gian_phut: 90,
      thang_diem: 10
    },
    dang_thuc: {
      TN: { ten: 'Trắc nghiệm nhiều lựa chọn', so_cau: 12, so_lenh: 12, diem_moi_cau: 0.25, tong_diem: 3.0 },
      DS: { ten: 'Trắc nghiệm Đúng/Sai', so_cau: 4, so_lenh: 16, diem_luy_tien: [0, 0.1, 0.25, 0.5, 1.0], tong_diem: 4.0 },
      TLN: { ten: 'Trắc nghiệm Trả lời ngắn', so_cau: 6, so_lenh: 6, diem_moi_cau: 0.5, tong_diem: 3.0, max_chars: 4 }
    },
    nang_luc: {
      TD: { ma: 'TD', ten: 'Tư duy & Lập luận toán học', so_cau: 7, B: 6, H: 1, VD: 0 },
      GQ: { ma: 'GQ', ten: 'Giải quyết vấn đề toán học', so_cau: 11, B: 6, H: 4, VD: 1 },
      MHH: { ma: 'MHH', ten: 'Mô hình hóa toán học', so_cau: 4, B: 1, H: 0, VD: 3 }
    },
    chu_de: [
      {
        id: 1,
        ten: 'Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số',
        ngan: 'Chủ đề 1: Ứng dụng đạo hàm',
        file_kb: 'kb/01_ung_dung_dao_ham.md',
        lenh: { tong: 12, B: 5, H: 4, VD: 3 },
        ma_cau: 'TN C1–C6, ĐS C1 (a–d), TLN C1–C2'
      },
      {
        id: 2,
        ten: 'Lượng giác - Dãy số - CSC - CSN - Mũ, Logarit',
        ngan: 'Chủ đề 2: Lượng giác, Dãy số, Mũ–Log',
        file_kb: 'kb/02_luong_giac_day_so_mu_log.md',
        lenh: { tong: 6, B: 3, H: 2, VD: 1 },
        ma_cau: 'TN C7–C8, ĐS C3 (a–d)'
      },
      {
        id: 3,
        ten: 'Tổ hợp - Xác suất',
        ngan: 'Chủ đề 3: Tổ hợp – Xác suất',
        file_kb: 'kb/03_to_hop_xac_suat.md',
        lenh: { tong: 6, B: 2, H: 2, VD: 2 },
        ma_cau: 'TN C9, ĐS C4 (a–d), TLN C3'
      },
      {
        id: 4,
        ten: 'Vectơ trong không gian',
        ngan: 'Chủ đề 4: Vectơ không gian & Oxyz',
        file_kb: 'kb/04_vecto_khong_gian.md',
        lenh: { tong: 9, B: 3, H: 4, VD: 2 },
        ma_cau: 'TN C10–C12, ĐS C2 (a–d), TLN C4–C5'
      },
      {
        id: 5,
        ten: 'Quan hệ vuông góc',
        ngan: 'Chủ đề 5: Quan hệ vuông góc 3D',
        file_kb: 'kb/05_quan_he_vuong_goc.md',
        lenh: { tong: 1, B: 0, H: 1, VD: 0 },
        ma_cau: 'TLN C6'
      }
    ]
  };

  function defaultStore() {
    return {
      version: 1,
      topicDone: { '1': false, '2': false, '3': false, '4': false, '5': false },
      examHistory: [],
      errorLogs: []
    };
  }

  function loadStore() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultStore();
      var parsed = JSON.parse(raw);
      var base = defaultStore();
      return {
        version: 1,
        topicDone: Object.assign(base.topicDone, parsed.topicDone || {}),
        examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
        errorLogs: Array.isArray(parsed.errorLogs) ? parsed.errorLogs : []
      };
    } catch (e) {
      return defaultStore();
    }
  }

  function saveStore(store) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
      return true;
    } catch (e) {
      return false;
    }
  }

  function toggleTopicProgress(topicId, value) {
    var store = loadStore();
    store.topicDone[String(topicId)] = Boolean(value);
    saveStore(store);
    return store;
  }

  function recordExamResult(result) {
    var store = loadStore();
    store.examHistory.unshift({
      id: 'exam_' + Date.now(),
      createdAt: new Date().toISOString(),
      title: String(result.title || 'Đề thi thử chuẩn Ma trận 2026'),
      mode: String(result.mode || 'full'),
      totalScore: Number(result.totalScore || 0),
      maxScore: Number(result.maxScore || 10),
      p1Score: Number(result.p1Score || 0),
      p2Score: Number(result.p2Score || 0),
      p3Score: Number(result.p3Score || 0),
      elapsedSec: Number(result.elapsedSec || 0),
      byTopic: result.byTopic || {},
      byLevel: result.byLevel || {},
      byCompetency: result.byCompetency || {}
    });
    if (store.examHistory.length > 40) {
      store.examHistory = store.examHistory.slice(0, 40);
    }
    saveStore(store);
    return store;
  }

  function addErrorLog(entry) {
    var store = loadStore();
    var item = {
      id: 'err_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
      chu_de: Number(entry.chu_de || 1),
      ma_lenh: String(entry.ma_lenh || ''),
      cap_do: String(entry.cap_do || 'H'),
      nang_luc: String(entry.nang_luc || 'GQ'),
      tom_tat: String(entry.tom_tat || '').trim(),
      nhom_loi: ERROR_GROUPS.indexOf(entry.nhom_loi) >= 0 ? entry.nhom_loi : ERROR_GROUPS[4],
      ghi_chu: String(entry.ghi_chu || '').trim()
    };
    store.errorLogs.unshift(item);
    saveStore(store);
    return item;
  }

  function deleteErrorLog(id) {
    var store = loadStore();
    store.errorLogs = store.errorLogs.filter(function (x) { return x.id !== id; });
    saveStore(store);
    return store;
  }

  function getRepeatedErrorCounts() {
    var store = loadStore();
    var counts = {};
    store.errorLogs.forEach(function (item) {
      var key = item.nhom_loi + ' | CĐ' + item.chu_de + ' | ' + item.nang_luc;
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }

  function exportJSON() {
    var store = loadStore();
    var blob = new Blob([JSON.stringify(store, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'toan_thptqg_2026_backup_' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function importJSON(file, callback) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (ev) {
      try {
        var parsed = JSON.parse(String(ev.target.result || ''));
        if (!parsed || typeof parsed !== 'object') throw new Error('Tệp JSON không hợp lệ.');
        var base = defaultStore();
        var merged = {
          version: 1,
          topicDone: Object.assign(base.topicDone, parsed.topicDone || {}),
          examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
          errorLogs: Array.isArray(parsed.errorLogs) ? parsed.errorLogs : []
        };
        saveStore(merged);
        if (typeof callback === 'function') callback(null, merged);
      } catch (err) {
        if (typeof callback === 'function') callback(err);
      }
    };
    reader.readAsText(file, 'utf-8');
  }

  function exportErrorLogsMarkdown() {
    var store = loadStore();
    if (!store.errorLogs.length) {
      return '| *(Chưa có dữ liệu lỗi)* | — | — | — | — | — | — |';
    }
    return store.errorLogs.map(function (it) {
      var d = (it.createdAt || '').slice(0, 10);
      var msg = (it.tom_tat + (it.ghi_chu ? ' — ' + it.ghi_chu : '')).replace(/\|/g, '/');
      return '| ' + d + ' | ' + it.ma_lenh + ' (CĐ' + it.chu_de + ') | ' + it.cap_do + ' | ' + it.nang_luc + ' | ' + msg + ' | ' + it.nhom_loi + ' | Ôn lại quy trình 6 bước |';
    }).join('\n');
  }

  /* Theme */
  function getTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}
    return 'light';
  }

  function applyTheme(theme) {
    var t = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    var btns = document.querySelectorAll('[data-theme-toggle]');
    btns.forEach(function (btn) {
      btn.textContent = t === 'dark' ? 'Chế độ Sáng' : 'Chế độ Tối';
    });
    try {
      global.dispatchEvent(new CustomEvent('toan:themechange', { detail: { theme: t } }));
    } catch (e) {}
  }

  function initTheme() {
    applyTheme(getTheme());
    var btns = document.querySelectorAll('[data-theme-toggle]');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
      });
    });
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
      var manifestLink = document.querySelector('link[rel="manifest"]');
      if (manifestLink) {
        navigator.serviceWorker.register('./sw.js').catch(function () {});
      }
    }
  }

  function getCanvasPalette() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    return dark ? {
      bg: '#151821',
      panel: '#1D222E',
      grid: 'rgba(241, 245, 249, 0.08)',
      gridMajor: 'rgba(241, 245, 249, 0.16)',
      axis: '#94A3B8',
      ink: '#F1F5F9',
      muted: '#94A3B8',
      accent: '#60A5FA',
      secondary: '#F59E0B',
      ok: '#4ADE80',
      err: '#F87171',
      purple: '#C084FC',
      faceA: 'rgba(96, 165, 250, 0.18)',
      faceB: 'rgba(74, 222, 128, 0.16)',
      faceWarn: 'rgba(251, 191, 36, 0.22)'
    } : {
      bg: '#FFFFFF',
      panel: '#EFF2F6',
      grid: 'rgba(17, 24, 39, 0.06)',
      gridMajor: 'rgba(17, 24, 39, 0.14)',
      axis: '#475569',
      ink: '#111827',
      muted: '#64748B',
      accent: '#1D4ED8',
      secondary: '#D97706',
      ok: '#15803D',
      err: '#DC2626',
      purple: '#7E22CE',
      faceA: 'rgba(29, 78, 216, 0.12)',
      faceB: 'rgba(21, 128, 61, 0.12)',
      faceWarn: 'rgba(217, 119, 6, 0.16)'
    };
  }

  /* Chấm điểm chuẩn Toán THPTQG 2026 */
  function scorePart1(correctCount) {
    return Number((correctCount * 0.25).toFixed(2));
  }

  function scorePart2Question(correctSubCount) {
    var table = [0, 0.1, 0.25, 0.5, 1.0];
    var idx = Math.max(0, Math.min(4, Number(correctSubCount || 0)));
    return table[idx];
  }

  function scorePart3(correctCount) {
    return Number((correctCount * 0.5).toFixed(2));
  }

  function validateShortAnswer(raw) {
    var s = String(raw == null ? '' : raw).trim().replace(/\s+/g, '').replace(/\u2212/g, '-');
    if (!s) return { valid: true, empty: true, normalized: '', reason: '' };
    if (s.length > 4) {
      return { valid: false, empty: false, normalized: s, reason: 'Vượt quá 4 ký tự chuẩn phiếu tô.' };
    }
    if (!/^-?\d+(?:[.,]\d+)?$/.test(s) && !/^-?[.,]\d+$/.test(s)) {
      return { valid: false, empty: false, normalized: s, reason: 'Chỉ nhập số, dấu "-" và dấu phẩy/chấm thập phân.' };
    }
    return { valid: true, empty: false, normalized: s.replace('.', ','), reason: '' };
  }

  function compareShortAnswer(userRaw, expected) {
    var v = validateShortAnswer(userRaw);
    if (!v.valid || v.empty) return false;
    var uNum = Number(v.normalized.replace(',', '.'));
    var eStr = String(expected).trim().replace(/\u2212/g, '-').replace('.', ',');
    var eNum = Number(eStr.replace(',', '.'));
    if (v.normalized === eStr) return true;
    if (!isNaN(uNum) && !isNaN(eNum)) {
      return Math.abs(uNum - eNum) < 1e-9;
    }
    return false;
  }

  function formatNum(val, digits) {
    var d = digits == null ? 2 : digits;
    if (Math.abs(val) < 1e-9) val = 0;
    var fixed = Number(val).toFixed(d);
    if (d > 0) {
      fixed = fixed.replace(/\.?0+$/, '');
    }
    return fixed.replace('.', ',');
  }

  /* HiDPI Canvas helper */
  function setupCanvas(canvas) {
    var rect = canvas.getBoundingClientRect();
    var dpr = global.devicePixelRatio || 1;
    var w = Math.max(240, Math.round(rect.width));
    var h = Math.max(200, Math.round(rect.height));
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, width: w, height: h };
  }

  /* Bộ vẽ hệ trục tọa độ 2D */
  function createPlot2D(canvas, opts) {
    var state = Object.assign({
      xMin: -5,
      xMax: 5,
      yMin: -5,
      yMax: 5,
      xStep: 1,
      yStep: 1,
      equalAspect: false,
      xLabel: 'x',
      yLabel: 'y'
    }, opts || {});

    function getBounds(w, h) {
      var pad = { left: 46, right: 20, top: 20, bottom: 34 };
      var plotW = Math.max(80, w - pad.left - pad.right);
      var plotH = Math.max(80, h - pad.top - pad.bottom);
      var xMin = state.xMin, xMax = state.xMax, yMin = state.yMin, yMax = state.yMax;
      if (state.equalAspect) {
        var scaleX = plotW / (xMax - xMin);
        var scaleY = plotH / (yMax - yMin);
        var s = Math.min(scaleX, scaleY);
        var cx = (xMin + xMax) / 2;
        var cy = (yMin + yMax) / 2;
        xMin = cx - plotW / (2 * s);
        xMax = cx + plotW / (2 * s);
        yMin = cy - plotH / (2 * s);
        yMax = cy + plotH / (2 * s);
      }
      return { pad: pad, plotW: plotW, plotH: plotH, xMin: xMin, xMax: xMax, yMin: yMin, yMax: yMax };
    }

    function begin(customOpts) {
      if (customOpts) Object.assign(state, customOpts);
      var info = setupCanvas(canvas);
      var ctx = info.ctx;
      var w = info.width;
      var h = info.height;
      var pal = getCanvasPalette();
      var b = getBounds(w, h);

      ctx.fillStyle = pal.bg;
      ctx.fillRect(0, 0, w, h);

      function toPx(x) {
        return b.pad.left + ((x - b.xMin) / (b.xMax - b.xMin)) * b.plotW;
      }
      function toPy(y) {
        return b.pad.top + ((b.yMax - y) / (b.yMax - b.yMin)) * b.plotH;
      }

      // Lưới
      ctx.lineWidth = 1;
      var startX = Math.ceil(b.xMin / state.xStep) * state.xStep;
      for (var gx = startX; gx <= b.xMax + 1e-9; gx += state.xStep) {
        var px = toPx(gx);
        ctx.strokeStyle = Math.abs(gx) < 1e-9 ? pal.axis : pal.grid;
        ctx.beginPath();
        ctx.moveTo(px, b.pad.top);
        ctx.lineTo(px, b.pad.top + b.plotH);
        ctx.stroke();
      }
      var startY = Math.ceil(b.yMin / state.yStep) * state.yStep;
      for (var gy = startY; gy <= b.yMax + 1e-9; gy += state.yStep) {
        var py = toPy(gy);
        ctx.strokeStyle = Math.abs(gy) < 1e-9 ? pal.axis : pal.grid;
        ctx.beginPath();
        ctx.moveTo(b.pad.left, py);
        ctx.lineTo(b.pad.left + b.plotW, py);
        ctx.stroke();
      }

      // Trục tọa độ
      var ox = toPx(0);
      var oy = toPy(0);
      var clampedOy = Math.max(b.pad.top, Math.min(b.pad.top + b.plotH, oy));
      var clampedOx = Math.max(b.pad.left, Math.min(b.pad.left + b.plotW, ox));

      ctx.strokeStyle = pal.axis;
      ctx.lineWidth = 1.5;
      if (oy >= b.pad.top && oy <= b.pad.top + b.plotH) {
        ctx.beginPath();
        ctx.moveTo(b.pad.left, oy);
        ctx.lineTo(b.pad.left + b.plotW, oy);
        ctx.stroke();
        // Mũi tên x
        ctx.beginPath();
        ctx.moveTo(b.pad.left + b.plotW - 6, oy - 4);
        ctx.lineTo(b.pad.left + b.plotW, oy);
        ctx.lineTo(b.pad.left + b.plotW - 6, oy + 4);
        ctx.stroke();
      }
      if (ox >= b.pad.left && ox <= b.pad.left + b.plotW) {
        ctx.beginPath();
        ctx.moveTo(ox, b.pad.top + b.plotH);
        ctx.lineTo(ox, b.pad.top);
        ctx.stroke();
        // Mũi tên y
        ctx.beginPath();
        ctx.moveTo(ox - 4, b.pad.top + 6);
        ctx.lineTo(ox, b.pad.top);
        ctx.lineTo(ox + 4, b.pad.top + 6);
        ctx.stroke();
      }

      // Nhãn số trục
      ctx.fillStyle = pal.muted;
      ctx.font = '11px ' + '"Cascadia Mono", Consolas, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      for (var tx = startX; tx <= b.xMax + 1e-9; tx += state.xStep) {
        if (Math.abs(tx) < 1e-9) continue;
        var tpx = toPx(tx);
        if (tpx >= b.pad.left + 8 && tpx <= b.pad.left + b.plotW - 8) {
          ctx.fillText(formatNum(tx, 1), tpx, Math.min(b.pad.top + b.plotH + 4, clampedOy + 5));
        }
      }
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      for (var ty = startY; ty <= b.yMax + 1e-9; ty += state.yStep) {
        if (Math.abs(ty) < 1e-9) continue;
        var tpy = toPy(ty);
        if (tpy >= b.pad.top + 8 && tpy <= b.pad.top + b.plotH - 8) {
          var lblX = (ox >= b.pad.left + 32 && ox <= b.pad.left + b.plotW - 10) ? ox - 6 : b.pad.left - 6;
          ctx.fillText(formatNum(ty, 1), lblX, tpy);
        }
      }

      ctx.fillStyle = pal.ink;
      ctx.font = '600 12px "Segoe UI", sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText(state.xLabel, b.pad.left + b.plotW, Math.max(b.pad.top + 16, clampedOy - 6));
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(state.yLabel, Math.min(b.pad.left + b.plotW - 14, clampedOx + 8), b.pad.top + 2);

      // Clip vùng đồ thị
      ctx.save();
      ctx.beginPath();
      ctx.rect(b.pad.left, b.pad.top, b.plotW, b.plotH);
      ctx.clip();

      function plotFunction(fn, style) {
        var st = Object.assign({ color: pal.accent, width: 2.5, dashed: false, samples: 480 }, style || {});
        ctx.save();
        ctx.strokeStyle = st.color;
        ctx.lineWidth = st.width;
        if (st.dashed) ctx.setLineDash([6, 4]);
        var prevY = null;
        var drawing = false;
        ctx.beginPath();
        var spanY = b.yMax - b.yMin;
        for (var i = 0; i <= st.samples; i++) {
          var x = b.xMin + (i / st.samples) * (b.xMax - b.xMin);
          var y = fn(x);
          if (y === null || y === undefined || !isFinite(y)) {
            if (drawing) { ctx.stroke(); ctx.beginPath(); drawing = false; }
            prevY = null;
            continue;
          }
          if (prevY !== null && Math.abs(y - prevY) > spanY * 0.75) {
            if (drawing) { ctx.stroke(); ctx.beginPath(); drawing = false; }
          }
          var px = toPx(x);
          var py = toPy(y);
          if (!drawing) {
            ctx.moveTo(px, py);
            drawing = true;
          } else {
            ctx.lineTo(px, py);
          }
          prevY = y;
        }
        if (drawing) ctx.stroke();
        ctx.restore();
      }

      function drawVerticalLine(x0, color, label) {
        var px = toPx(x0);
        ctx.save();
        ctx.strokeStyle = color || pal.err;
        ctx.lineWidth = 1.6;
        ctx.setLineDash([6, 5]);
        ctx.beginPath();
        ctx.moveTo(px, b.pad.top);
        ctx.lineTo(px, b.pad.top + b.plotH);
        ctx.stroke();
        if (label) {
          ctx.setLineDash([]);
          ctx.fillStyle = color || pal.err;
          ctx.font = '600 11px "Segoe UI", sans-serif';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
          ctx.fillText(label, px + 5, b.pad.top + 6);
        }
        ctx.restore();
      }

      function drawHorizontalLine(y0, color, label, solid) {
        var py = toPy(y0);
        ctx.save();
        ctx.strokeStyle = color || pal.secondary;
        ctx.lineWidth = solid ? 2 : 1.6;
        if (!solid) ctx.setLineDash([6, 5]);
        ctx.beginPath();
        ctx.moveTo(b.pad.left, py);
        ctx.lineTo(b.pad.left + b.plotW, py);
        ctx.stroke();
        if (label) {
          ctx.setLineDash([]);
          ctx.fillStyle = color || pal.secondary;
          ctx.font = '600 11px "Segoe UI", sans-serif';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          ctx.fillText(label, b.pad.left + 6, py - 4);
        }
        ctx.restore();
      }

      function drawObliqueLine(a, bCoeff, color, label) {
        plotFunction(function (x) { return a * x + bCoeff; }, { color: color || pal.ok, width: 1.6, dashed: true, samples: 40 });
        if (label) {
          var lx = b.xMin + (b.xMax - b.xMin) * 0.72;
          var ly = a * lx + bCoeff;
          ctx.save();
          ctx.fillStyle = color || pal.ok;
          ctx.font = '600 11px "Segoe UI", sans-serif';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          ctx.fillText(label, toPx(lx) + 4, toPy(ly) - 4);
          ctx.restore();
        }
      }

      function drawPoint(x, y, color, label, radius) {
        if (!isFinite(x) || !isFinite(y)) return;
        var px = toPx(x);
        var py = toPy(y);
        ctx.save();
        ctx.fillStyle = color || pal.err;
        ctx.strokeStyle = pal.bg;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px, py, radius || 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        if (label) {
          ctx.fillStyle = pal.ink;
          ctx.font = '600 12px "Segoe UI", sans-serif';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          ctx.fillText(label, px + 7, py - 5);
        }
        ctx.restore();
      }

      function end() {
        ctx.restore();
      }

      return {
        ctx: ctx,
        pal: pal,
        bounds: b,
        toPx: toPx,
        toPy: toPy,
        plotFunction: plotFunction,
        drawVerticalLine: drawVerticalLine,
        drawHorizontalLine: drawHorizontalLine,
        drawObliqueLine: drawObliqueLine,
        drawPoint: drawPoint,
        end: end
      };
    }

    return { begin: begin };
  }

  /* Engine chiếu 3D nhẹ bằng Canvas thuần (chuột + cảm ứng/bút mượt mà) */
  function createEngine3D(canvas, opts, onRender) {
    var state = Object.assign({
      yaw: 0.72,
      pitch: 0.42,
      zoom: 1,
      scale: 42,
      center: [0, 0, 0],
      fov: 18
    }, opts || {});

    var dragging = false;
    var activePointerId = null;
    var lastX = 0;
    var lastY = 0;

    function project(pt) {
      var x = pt[0] - state.center[0];
      var y = pt[1] - state.center[1];
      var z = pt[2] - state.center[2];

      // Hệ trục toán học Oxyz chuẩn: x hướng ra trước-trái, y hướng sang phải, z hướng lên trên
      var cy = Math.cos(state.yaw);
      var sy = Math.sin(state.yaw);
      var cp = Math.cos(state.pitch);
      var sp = Math.sin(state.pitch);

      var xr = -x * sy + y * cy;
      var yr = x * cy + y * sy;

      var yCam = yr * cp + z * sp;
      var zCam = -yr * sp + z * cp;

      var dist = state.fov;
      var persp = dist / Math.max(3, dist - yCam);
      var s = state.scale * state.zoom * persp;
      return {
        px: state._w / 2 + xr * s,
        py: state._h / 2 - zCam * s,
        depth: yCam,
        scale: s
      };
    }

    function render() {
      var info = setupCanvas(canvas);
      state._w = info.width;
      state._h = info.height;
      var ctx = info.ctx;
      var pal = getCanvasPalette();

      ctx.fillStyle = pal.bg;
      ctx.fillRect(0, 0, info.width, info.height);

      var api = {
        ctx: ctx,
        pal: pal,
        width: info.width,
        height: info.height,
        setCenter: function (c) {
          state.center = c;
        },
        project: project,
        drawSegment: function (p1, p2, color, width, dashed) {
          var a = project(p1);
          var b = project(p2);
          ctx.save();
          ctx.strokeStyle = color || pal.ink;
          ctx.lineWidth = width || 2;
          if (dashed) ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.moveTo(a.px, a.py);
          ctx.lineTo(b.px, b.py);
          ctx.stroke();
          ctx.restore();
        },
        drawVector: function (p1, p2, color, width, label) {
          var a = project(p1);
          var b = project(p2);
          var dx = b.px - a.px;
          var dy = b.py - a.py;
          var len = Math.hypot(dx, dy);
          ctx.save();
          ctx.strokeStyle = color || pal.accent;
          ctx.fillStyle = color || pal.accent;
          ctx.lineWidth = width || 2.5;
          ctx.beginPath();
          ctx.moveTo(a.px, a.py);
          ctx.lineTo(b.px, b.py);
          ctx.stroke();
          if (len > 8) {
            var ang = Math.atan2(dy, dx);
            var head = Math.min(12, len * 0.35);
            ctx.beginPath();
            ctx.moveTo(b.px, b.py);
            ctx.lineTo(b.px - head * Math.cos(ang - 0.38), b.py - head * Math.sin(ang - 0.38));
            ctx.lineTo(b.px - head * Math.cos(ang + 0.38), b.py - head * Math.sin(ang + 0.38));
            ctx.closePath();
            ctx.fill();
          }
          if (label) {
            ctx.font = '600 13px "Segoe UI", sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            ctx.fillText(label, b.px + 6, b.py - 4);
          }
          ctx.restore();
        },
        drawPolygon: function (pts, fillColor, strokeColor, lineWidth) {
          if (!pts || pts.length < 3) return;
          var proj = pts.map(project);
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(proj[0].px, proj[0].py);
          for (var i = 1; i < proj.length; i++) ctx.lineTo(proj[i].px, proj[i].py);
          ctx.closePath();
          if (fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fill();
          }
          if (strokeColor) {
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = lineWidth || 1.2;
            ctx.stroke();
          }
          ctx.restore();
        },
        drawPoint: function (pt, color, label, radius) {
          var p = project(pt);
          ctx.save();
          ctx.fillStyle = color || pal.ink;
          ctx.strokeStyle = pal.bg;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(p.px, p.py, radius || 4.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          if (label) {
            ctx.fillStyle = pal.ink;
            ctx.font = '600 12px "Segoe UI", sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            ctx.fillText(label, p.px + 6, p.py - 4);
          }
          ctx.restore();
        },
        drawGridXY: function (range, step) {
          var r = range || 4;
          var st = step || 1;
          for (var i = -r; i <= r; i += st) {
            api.drawSegment([i, -r, 0], [i, r, 0], i === 0 ? pal.gridMajor : pal.grid, 1);
            api.drawSegment([-r, i, 0], [r, i, 0], i === 0 ? pal.gridMajor : pal.grid, 1);
          }
        },
        drawAxes3D: function (len) {
          var L = len || 4.5;
          api.drawVector([0, 0, 0], [L, 0, 0], '#DC2626', 1.8, 'x');
          api.drawVector([0, 0, 0], [0, L, 0], '#15803D', 1.8, 'y');
          api.drawVector([0, 0, 0], [0, 0, L], '#1D4ED8', 1.8, 'z');
          api.drawSegment([0, 0, 0], [-L * 0.65, 0, 0], pal.gridMajor, 1, true);
          api.drawSegment([0, 0, 0], [0, -L * 0.65, 0], pal.gridMajor, 1, true);
          api.drawSegment([0, 0, 0], [0, 0, -L * 0.55], pal.gridMajor, 1, true);
        }
      };

      if (typeof onRender === 'function') onRender(api);
    }

    canvas.addEventListener('pointerdown', function (e) {
      dragging = true;
      activePointerId = e.pointerId;
      lastX = e.clientX;
      lastY = e.clientY;
      if (canvas.setPointerCapture) {
        try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
      }
    });

    canvas.addEventListener('pointermove', function (e) {
      if (!dragging || e.pointerId !== activePointerId) return;
      var dx = e.clientX - lastX;
      var dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      state.yaw += dx * 0.009;
      state.pitch = Math.max(-1.45, Math.min(1.45, state.pitch + dy * 0.009));
      render();
    });

    function endDrag(e) {
      if (e.pointerId === activePointerId) {
        dragging = false;
        activePointerId = null;
      }
    }

    canvas.addEventListener('pointerup', endDrag);
    canvas.addEventListener('pointercancel', endDrag);
    canvas.addEventListener('wheel', function (e) {
      e.preventDefault();
      var factor = e.deltaY < 0 ? 1.08 : 0.92;
      state.zoom = Math.max(0.45, Math.min(2.6, state.zoom * factor));
      render();
    }, { passive: false });

    global.addEventListener('toan:themechange', render);
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(render).observe(canvas);
    } else {
      global.addEventListener('resize', render);
    }

    return {
      render: render,
      setView: function (yaw, pitch, zoom) {
        if (yaw != null) state.yaw = yaw;
        if (pitch != null) state.pitch = pitch;
        if (zoom != null) state.zoom = zoom;
        render();
      },
      setCenter: function (c) {
        state.center = c;
        render();
      }
    };
  }

  global.TOAN_MATRIX = MATRIX;
  global.TOAN_COMMON = {
    ERROR_GROUPS: ERROR_GROUPS,
    loadStore: loadStore,
    saveStore: saveStore,
    toggleTopicProgress: toggleTopicProgress,
    recordExamResult: recordExamResult,
    addErrorLog: addErrorLog,
    deleteErrorLog: deleteErrorLog,
    getRepeatedErrorCounts: getRepeatedErrorCounts,
    exportJSON: exportJSON,
    importJSON: importJSON,
    exportErrorLogsMarkdown: exportErrorLogsMarkdown,
    initTheme: initTheme,
    getTheme: getTheme,
    applyTheme: applyTheme,
    getCanvasPalette: getCanvasPalette,
    scorePart1: scorePart1,
    scorePart2Question: scorePart2Question,
    scorePart3: scorePart3,
    validateShortAnswer: validateShortAnswer,
    compareShortAnswer: compareShortAnswer,
    formatNum: formatNum,
    setupCanvas: setupCanvas,
    createPlot2D: createPlot2D,
    createEngine3D: createEngine3D
  };
})(window);