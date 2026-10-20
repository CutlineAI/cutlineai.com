/* Cutline home: the live edit demo, the scroll timecode ruler and the middle-lane cut.
   Plain JS, no libraries. Everything degrades to a readable static page without it. */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches || /[?&]still\b/.test(location.search);
  const $ = (s, r = document) => r.querySelector(s);
  const FPS = 25, DUR = 40; // the demo sequence shows 0 to 40 seconds
  const tc = (sec) => { const f = Math.round(sec * FPS); const s = Math.floor(f / FPS); return `00:00:${String(s).padStart(2, "0")}:${String(f % FPS).padStart(2, "0")}`; };
  const pct = (s) => (s / DUR * 100) + "%";
  const wait = (ms) => new Promise(r => setTimeout(r, reduce ? 0 : ms));

  /* ---------------------------------------------------------------- the demo */
  const demo = $("#demo");
  if (demo) {
    const lanes = { V2: $("#lane-V2"), V1: $("#lane-V1"), A1: $("#lane-A1"), A2: $("#lane-A2") };
    const ruler = $("#ruler"), playhead = $("#playhead"), marks = $("#marks"), seqMarkers = $("#seq-markers");
    const typed = $("#typed"), strap = $("#strap"), strapCmd = $("#strap-cmd"), strapRes = $("#strap-res"), resMark = $("#res-mark");
    const monName = $("#mon-name"), monTc = $("#mon-tc"), undoBtn = $("#undo"), status = $("#demo-status");
    const buttons = [...document.querySelectorAll("[data-cmd]")];

    // ruler ticks
    for (let s = 0; s <= DUR; s++) {
      const t = document.createElement("i");
      t.className = s % 5 === 0 ? "maj" : "";
      t.style.left = pct(s);
      if (s % 10 === 0 && s < DUR) t.dataset.tc = tc(s);
      ruler.appendChild(t);
    }

    const music = { track: "A2", s: 0, e: 40, name: "Score_v3.wav", music: true };
    const SCENES = {
      cut: {
        cmd: "cut 0:12 to 0:18 and close the gap",
        res: "done. 6 seconds gone, audio still in sync",
        before: [
          { track: "V1", s: 0, e: 9, name: "A001_C002" }, { track: "V1", s: 9, e: 30, name: "A001_C004" }, { track: "V1", s: 30, e: 40, name: "A001_C007" },
          { track: "A1", s: 0, e: 9, name: "A001_C002" }, { track: "A1", s: 9, e: 30, name: "A001_C004" }, { track: "A1", s: 30, e: 40, name: "A001_C007" },
          { track: "V2", s: 31, e: 36, name: "Lower third" }, music],
        playTo: 12,
        async run() {
          await moveHead(12); cutAt(12); await wait(260); await moveHead(18); cutAt(18); await wait(260);
          removeRange(12, 18); await wait(380); rippleFrom(18, -6); await moveHead(12, 260); await wait(260);
          showStrap(); await wait(160); drawCut(12);
        }
      },
      gaps: {
        cmd: "remove every gap in this sequence",
        res: "3 gaps closed. 4.5 seconds removed",
        before: [
          { track: "V1", s: 0, e: 7, name: "B002_C011" }, { track: "V1", s: 8.5, e: 17, name: "B002_C014" }, { track: "V1", s: 19, e: 28, name: "B002_C015" }, { track: "V1", s: 29, e: 40, name: "B002_C019" },
          { track: "A1", s: 0, e: 7, name: "B002_C011" }, { track: "A1", s: 8.5, e: 17, name: "B002_C014" }, { track: "A1", s: 19, e: 28, name: "B002_C015" }, { track: "A1", s: 29, e: 40, name: "B002_C019" },
          music],
        playTo: 7,
        async run() {
          await moveHead(7); rippleFrom(8.5, -1.5); await wait(420);
          await moveHead(15.5); rippleFrom(17.5, -2); await wait(420);
          await moveHead(24.5); rippleFrom(25.5, -1); await wait(520);
          showStrap(true);
        }
      },
      duck: {
        cmd: "duck the music under the dialogue",
        res: "music down 12 dB under 2 interviews, with 10-frame ramps",
        before: [
          { track: "V1", s: 0, e: 14, name: "INT_Ana_01" }, { track: "V1", s: 14, e: 22, name: "Broll_Street" }, { track: "V1", s: 22, e: 37, name: "INT_Ana_02" },
          { track: "A1", s: 0, e: 14, name: "INT_Ana_01" }, { track: "A1", s: 22, e: 37, name: "INT_Ana_02" }, music],
        playTo: 0,
        async run() {
          await moveHead(3); duck([[0, 14], [22, 37]]); await wait(900); showStrap(true);
        }
      },
      markers: {
        cmd: "add a marker at every scene change",
        res: "7 markers added at the cuts it found",
        before: [{ track: "V1", s: 0, e: 40, name: "Wedding_Highlights_MASTER" }, { track: "A1", s: 0, e: 40, name: "Wedding_Highlights_MASTER" }],
        playTo: 0,
        async run() {
          for (const t of [4.2, 9.8, 13.1, 19.6, 24.0, 31.4, 36.7]) { await moveHead(t, 160); addSeqMarker(t); await wait(90); }
          showStrap(true);
        }
      }
    };

    let clips = [], busy = false, current = "cut";

    function render() {
      Object.values(lanes).forEach(l => l.replaceChildren());
      for (const c of clips) {
        if (!c.el) {
          c.el = document.createElement("div");
          c.el.className = "clip" + (c.track.startsWith("A") ? " audio" : "") + (c.track === "V2" ? " gfx" : "") + (c.music ? " music" : "");
          const n = document.createElement("span"); n.textContent = c.name; c.el.appendChild(n);
          if (c.track.startsWith("A")) { const w = document.createElement("b"); w.className = "wave"; c.el.appendChild(w); }
          if (c.music) { c.el.insertAdjacentHTML("beforeend", '<svg class="band" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,8 400,8"/></svg>'); }
        }
        c.el.style.left = pct(c.s); c.el.style.width = pct(c.e - c.s);
        c.el.classList.toggle("gone", !!c.gone);
        lanes[c.track].appendChild(c.el);
      }
      updateMonitor();
    }
    let head = 0, lastShot = null;
    const picture = $("#picture");
    function updateMonitor() {
      playhead.style.left = pct(head);
      const v = clips.find(c => !c.gone && (c.track === "V1") && head >= c.s && head < c.e);
      monName.textContent = v ? v.name : "";
      const key = v ? v.name : "";
      if (key !== lastShot) { lastShot = key; let h = 0; for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
        picture.style.backgroundPosition = `${h % 100}% ${30 + (h >> 7) % 50}%`; picture.style.backgroundSize = `${150 + (h >> 3) % 120}% auto`;
        picture.style.backgroundImage = key ? "" : "none"; }
      monTc.textContent = tc(head);
    }
    async function moveHead(t, ms = 320) {
      if (reduce) { head = t; updateMonitor(); return; }
      const from = head, start = performance.now();
      await new Promise(res => { const step = (now) => { const k = Math.min(1, (now - start) / ms); head = from + (t - from) * (1 - Math.pow(1 - k, 3)); updateMonitor(); k < 1 ? requestAnimationFrame(step) : res(); }; requestAnimationFrame(step); });
    }
    function cutAt(t) {
      const out = [];
      for (const c of clips) {
        if (!c.music && !c.gone && c.track !== "V2" && t > c.s && t < c.e) {
          const a = { ...c, e: t, el: null }, b = { ...c, s: t, el: null };
          c.el && c.el.remove(); out.push(a, b);
        } else out.push(c);
      }
      clips = out; render();
    }
    function removeRange(a, b) { clips.forEach(c => { if (!c.music && c.track !== "V2" && c.s >= a && c.e <= b) c.gone = true; }); render(); }
    function rippleFrom(t, d) { clips.forEach(c => { if (!c.music && !c.gone && c.s >= t) { c.s += d; c.e += d; } }); clips = clips.filter(c => { if (c.gone) { c.el && c.el.remove(); return false; } return true; }); render(); }
    function duck(ranges) {
      const m = clips.find(c => c.music); if (!m || !m.el) return;
      const y = (lo) => lo ? 30 : 8, pts = ["0," + y(ranges.some(r => r[0] <= 0))];
      for (const [a, b] of ranges) { const r = 0.4; pts.push(`${Math.max(0, a - r) * 10},8`, `${a * 10},30`, `${b * 10},30`, `${Math.min(40, b + r) * 10},8`); }
      pts.push("400,8");
      m.el.querySelector("polyline").setAttribute("points", pts.join(" "));
      m.el.classList.add("ducked");
    }
    function addSeqMarker(t) { const i = document.createElement("i"); i.style.left = pct(t); seqMarkers.appendChild(i); }
    function showStrap(underline) {
      strapCmd.textContent = SCENES[current].cmd; strapRes.textContent = SCENES[current].res;
      strap.hidden = false; status.textContent = "Done: " + SCENES[current].res + ".";
      if (underline) { resMark.hidden = false; drawStroke(resMark); }
      undoBtn.hidden = false;
    }
    function drawCut(t) {
      const v1 = lanes.V1.parentElement, a1 = lanes.A1.parentElement;
      marks.style.top = (v1.offsetTop - 10) + "px"; marks.style.height = (a1.offsetTop + a1.offsetHeight - v1.offsetTop + 20) + "px";
      marks.innerHTML = `<svg viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path pathLength="100" d="M${t * 25 - 9} 2 L${t * 25 + 9} 2 M${t * 25} 2 L${t * 25 + 0.6} 98 M${t * 25 - 8.4} 98 L${t * 25 + 9.6} 98"/></svg>`;
      drawStroke(marks.querySelector("svg"));
    }
    function drawStroke(svg) { if (reduce) return; svg.classList.remove("draw"); void svg.getBoundingClientRect(); svg.classList.add("draw"); }

    function setScene(key) {
      current = key; const sc = SCENES[key];
      clips.forEach(c => c.el && c.el.remove());
      clips = sc.before.map(c => ({ ...c, el: null })); if (sc.before.includes(music)) { const m = clips.find(c => c.music); m.el = null; }
      marks.innerHTML = ""; seqMarkers.replaceChildren(); strap.hidden = true; resMark.hidden = true; undoBtn.hidden = true;
      head = 0; render();
      buttons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cmd === key)));
    }
    async function type(text) {
      typed.textContent = "";
      if (reduce) { typed.textContent = text; return; }
      for (const ch of text) { typed.textContent += ch; await wait(28 + Math.random() * 30); }
      await wait(380);
    }
    async function play(key) {
      if (busy) return; busy = true; demo.classList.add("busy");
      setScene(key); status.textContent = "Typing: " + SCENES[key].cmd;
      await type(SCENES[key].cmd);
      typed.classList.add("sent"); await wait(160); typed.classList.remove("sent");
      await SCENES[key].run();
      busy = false; demo.classList.remove("busy");
    }
    undoBtn.addEventListener("click", () => { if (busy) return; setScene(current); typed.textContent = SCENES[current].cmd; status.textContent = "Undone. The sequence is back as it was."; });
    buttons.forEach(b => b.addEventListener("click", () => play(b.dataset.cmd)));

    // start when the demo is first on screen
    setScene("cut");
    typed.textContent = "";
    const io = new IntersectionObserver((es) => { if (es.some(e => e.isIntersecting)) { io.disconnect(); setTimeout(() => play("cut"), reduce ? 0 : 500); } }, { threshold: 0.15 });
    io.observe(demo);
  }

  /* ---------------------------------------------------------------- the middle-lane cut */
  const lane = $("#lane");
  if (lane && !reduce) {
    const onScroll = () => {
      const r = lane.getBoundingClientRect(), span = r.height - innerHeight;
      const k = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
      lane.dataset.shot = k < 0.5 ? "a" : "b";
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
  } else if (lane) lane.dataset.shot = "static";

  /* ---------------------------------------------------------------- scroll timecode */
  const seq = $("#seq");
  if (seq) {
    const head2 = $("#seq-head"), out = $("#seq-tc");
    const marksEl = $("#seq-marks");
    const sections = [...document.querySelectorAll("[data-marker]")];
    const place = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      marksEl.replaceChildren();
      for (const s of sections) {
        const y = s.getBoundingClientRect().top + scrollY;
        const i = document.createElement("i"); i.style.left = (Math.min(1, y / Math.max(1, max)) * 100) + "%"; i.title = s.dataset.marker;
        marksEl.appendChild(i);
      }
    };
    const tick = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const k = max > 0 ? scrollY / max : 0;
      head2.style.left = (k * 100) + "%";
      const frames = Math.round(scrollY); // one pixel scrolled is one frame
      const s = Math.floor(frames / FPS), m = Math.floor(s / 60);
      out.textContent = `00:${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}:${String(frames % FPS).padStart(2, "0")}`;
    };
    addEventListener("scroll", tick, { passive: true }); addEventListener("resize", () => { place(); tick(); });
    addEventListener("load", () => { place(); tick(); }); place(); tick();
  }
})();
