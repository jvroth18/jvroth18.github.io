/* ============================================================
   THE EVENING POST — one living front page over Astoria.
   Content lives on the rooftops; the biplane is the paper's
   delivery mechanism, towing headlines. The real sky sets the
   edition. All editable content in the DATA section.
   ============================================================ */

/* ---------------- DATA — edit me ---------------- */

const SOCIALS = {
  email:    "mailto:jordan@gettalky.ai",
  github:   "https://github.com/jvroth18",
  linkedin: "https://www.linkedin.com/in/jordan-rothstein-862296161/",
  x:        "https://x.com/jordanroth_",
  talky:    "https://www.gettalky.ai",
};

const PROJECTS = [
  {
    dates: "2024 — PRESENT", title: "Relay", role: "Co-Founder & CTO · Talky AI",
    desc: "An agentic computer-use platform deployed in live insurance agencies — automating quoting, submissions, renewals, and intake across browser and desktop systems, with a secure runtime spanning browser automation, desktop control, document-processing workers, and human approval for high-risk actions.",
    link: SOCIALS.talky,
    banner: "NOW SHIPPING — RELAY",
    spec: [
      ["agents", "quoting · submissions · renewals · intake"],
      ["runtime", "browser + desktop control, doc workers"],
      ["safety", "human approval on high-risk actions"],
    ],
  },
  {
    dates: "2024 — PRESENT", title: "Talky Voice AI", role: "Co-Founder & CTO",
    desc: "Production voice AI running the front desk for healthcare and veterinary practices — tens of thousands of calls across dozens of locations, on HIPAA-compliant GCP infrastructure tuned for reliability, latency, and inference cost.",
    link: SOCIALS.talky,
    banner: "TALKY — THE AI FRONT DESK",
    spec: [
      ["scale", "tens of thousands of calls handled"],
      ["stack", "HIPAA-compliant GCP · voice pipeline"],
      ["tuned", "reliability · latency · inference cost"],
    ],
  },
  {
    dates: "2026", title: "Momentum Surface", role: "Independent Research",
    desc: "Quant research translating arXiv path-signature work into deterministic momentum features — point-in-time moving-average tensors, temporal z-score surfaces, and walk-forward evaluation with lagged execution and cost stress, on vectorized NumPy kernels.",
    link: SOCIALS.github,
    banner: "FRESH RESEARCH — MOMENTUM SURFACE",
    spec: [
      ["features", "order-2 signatures · z-score surfaces"],
      ["engine", "vectorized + chunked NumPy kernels"],
      ["eval", "walk-forward · lagged exec · cost stress"],
    ],
  },
  {
    dates: "OPEN SOURCE", title: "tracker", role: "Creator",
    desc: "A lightweight CLI wrapper that pins a rolling task-theme summary bar to the top of your terminal while running any agentic CLI tool — so you always know what your agent is actually doing.",
    link: "https://github.com/jvroth18/tracker",
    banner: "FREE TO A GOOD HOME — TRACKER",
    spec: [
      ["what", "pinned rolling summary bar"],
      ["wraps", "any agentic CLI tool"],
      ["install", "github.com/jvroth18/tracker"],
    ],
  },
  {
    dates: "2026", title: "AX", role: "Independent Build · on-device AI",
    desc: "A voice agent that lives entirely on the iPhone — hold the Action Button, talk to Qwen3 running locally through MLX, and watch it call tools. Ships with a library of local models, a live system monitor, and a faithful Windows-95 desktop for a face. No cloud, no API keys — the phone does the thinking.",
    link: SOCIALS.github,
    banner: "NEW ON THE BLOCK — AX",
    spec: [
      ["runtime", "Qwen3 via MLX · fully on-device"],
      ["measured", "45.6 tok/s · 1.8 GB peak · iPhone 17"],
      ["face", "windows-95 desktop, faithfully"],
    ],
  },
  {
    dates: "OPEN SOURCE", title: "agent-footprint", role: "Creator",
    desc: "A zero-dependency CLI that shows what AI coding agents are doing to your machine — the git worktrees they forgot, per-session scratch dirs, multi-gigabyte model caches, and processes that never exited — rendered as a self-contained local dashboard, with a deliberately conservative cleaner for the safe leftovers. Its first scan of my own Mac found 73 GB.",
    link: "https://github.com/jvroth18/agent-footprint",
    banner: "HOT OFF THE PRESS — AGENT-FOOTPRINT",
    spec: [
      ["finds", "orphaned worktrees · caches · scratch"],
      ["field test", "73 GB · 202 worktrees on my own mac"],
      ["install", "github.com/jvroth18/agent-footprint"],
    ],
  },
];

/* Long-form dispatches. `url` is the canonical LinkedIn post, or a
   relative path for essays printed here on the site itself;
   `x` is the optional X cross-post. Newest first. */
const POSTS = [
  {
    date: "2026-08-17",
    title: "The AI Layoff Trap Is a Choice, Not a Forecast",
    excerpt: "Math can make an argument more precise. It cannot make a chosen assumption inevitable.",
    url: "dispatches/ai-layoff-trap.html",
    banner: "NEW DISPATCH — THE AI LAYOFF TRAP",
  },
];

/* YTD GitHub contributions — refresh with: python3 update-activity.py */
const ACTIVITY = {"login":"jvroth18","start":"2026-01-01","updated":"2026-08-17","counts":[0,16,6,0,11,5,3,10,7,13,33,29,24,12,4,8,7,3,8,11,23,10,9,5,5,27,30,18,23,3,10,11,1,1,4,18,4,16,17,9,13,31,6,3,1,37,13,45,52,43,37,18,35,8,29,17,37,23,14,28,57,60,25,25,43,21,45,13,56,122,36,6,21,23,36,36,35,17,6,0,43,17,39,22,25,4,1,67,17,8,19,36,21,29,44,58,107,59,43,11,1,0,3,2,7,5,19,12,13,41,93,15,7,35,13,81,49,13,22,6,2,34,29,48,25,2,12,1,19,26,0,45,4,34,0,27,30,14,88,22,5,1,0,11,95,63,4,10,9,182,0,54,42,39,5,47,5,0,7,58,50,21,6,0,42,71,66,64,40,59,1,0,57,95,81,37,8,10,40,46,16,21,29,25,13,6,14,18,12,33,30,0,4,39,63,10,11,11,49,69,78,34,19,4,0,4,0,0,1,0,0,3,3,7,5,1,0,51,8,2,19,5,12,59,48,98,3,105,63]}; // ACTIVITY-DATA

/* the biplane's rotation of headlines; billboard clicks jump the queue */
const BANNER_ROTATION = [
  { text: "HEY, I'M JORDAN", open: "contact" },
  { text: `PRESSES RUNNING — ${ACTIVITY.counts.reduce((s, n) => s + n, 0).toLocaleString()} COMMITS YTD`, open: "activity" },
  // the newest dispatch always headlines: its `banner` field, or its title
  ...(POSTS.length
    ? [{ text: POSTS[0].banner || `NEW DISPATCH — ${POSTS[0].title.toUpperCase()}`, open: "writing" }]
    : []),
  { text: "NOW SHIPPING — RELAY", open: "project-0" },
  { text: "NEW ON THE BLOCK — AX", open: "project-4" },
  { text: "HOT OFF THE PRESS — AGENT-FOOTPRINT", open: "project-5" },
  { text: "READ THE DISPATCHES", open: "writing" },
  { text: "WRITE ME — JORDAN@GETTALKY.AI", open: "contact" },
];

/* ---------------- Toasts ---------------- */

const toastWrap = document.getElementById("toasts");
function toast(body, title, tag) {
  // tagged toasts are singletons: a new one replaces any still showing
  if (tag) toastWrap.querySelectorAll(`[data-tag="${tag}"]`).forEach((t) => t.remove());
  const el = document.createElement("div");
  el.className = "toast";
  if (tag) el.dataset.tag = tag;
  el.innerHTML = `${title ? `<div class="toast-title">${title}</div>` : ""}<div class="toast-body"></div>`;
  el.querySelector(".toast-body").textContent = body;
  toastWrap.appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 350); }, 5200);
}

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ---------------- The clipping (content panel) ---------------- */

const clipLayer = document.getElementById("clipping-layer");
const clipBody = document.getElementById("clip-body");

const ext = (url) => (url.startsWith("http") ? ' target="_blank" rel="noopener"' : "");
function chip(label, url) { return url ? `<a href="${url}"${ext(url)}>${label}</a>` : ""; }

function clipHtml(kind) {
  if (kind.startsWith("project-")) {
    const i = +kind.split("-")[1];
    const p = PROJECTS[i];
    return `
      <p class="clip-eyebrow">things i’ve built · <span style="white-space:nowrap">№ ${i + 1} of ${PROJECTS.length} · ${p.dates}</span></p>
      <h2 class="clip-title" id="clip-title">${p.title}</h2>
      <p class="clip-role">${p.role}</p>
      <p class="clip-desc">${p.desc}</p>
      <dl class="spec">${p.spec.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
      <a class="btn-solid" href="${p.link}" target="_blank" rel="noopener">view ↗</a>`;
  }
  if (kind === "writing") {
    const items = POSTS.length
      ? POSTS.map((p) => `
          <li class="log-item">
            <span class="log-date">${p.date}</span>
            <span><a class="log-title" href="${p.url}"${ext(p.url)}>${p.title}</a>
              <span class="log-excerpt">${p.excerpt ?? ""}</span></span>
            <span class="log-chips">${chip(p.url.startsWith("http") ? "linkedin" : "read", p.url)}${chip("x", p.x)}</span>
          </li>`).join("")
      : `<li class="log-placeholder">the first dispatch is at the printer —
           <a href="${SOCIALS.linkedin}" target="_blank" rel="noopener">follow on LinkedIn</a> to catch it.</li>`;
    return `
      <p class="clip-eyebrow">dispatches · from the water tower</p>
      <h2 class="clip-title" id="clip-title">Long-form, where you already read</h2>
      <p class="clip-desc">Essays on agents, operations, and building things that hold up — published on LinkedIn, syndicated to X.</p>
      <ol class="log-list">${items}</ol>
      <div class="subscribe-row"><a class="btn-solid" href="${SOCIALS.linkedin}" target="_blank" rel="noopener">follow on linkedin ↗</a></div>`;
  }
  if (kind === "activity") {
    const c = ACTIVITY.counts;
    const total = c.reduce((s, n) => s + n, 0);
    const active = c.filter(Boolean).length;
    let best = 0, cur = 0;
    c.forEach((n) => { cur = n ? cur + 1 : 0; if (cur > best) best = cur; });
    const peak = Math.max(0, ...c);
    const bucket = (n) => (n === 0 ? 0 : n < 10 ? 1 : n < 30 ? 2 : n < 80 ? 3 : 4);
    const startDow = new Date(ACTIVITY.start + "T12:00:00").getDay();
    const nWeeks = Math.ceil((startDow + c.length) / 7);
    const pad = Array.from({ length: startDow }, () => `<span class="act-cell" data-b="pad"></span>`);
    const cells = c.map((n, i) => {
      const d = new Date(ACTIVITY.start + "T12:00:00");
      d.setDate(d.getDate() + i);
      const label = `${d.toLocaleDateString([], { month: "short", day: "numeric" })} — ${n} contribution${n === 1 ? "" : "s"}`;
      return `<span class="act-cell" data-b="${bucket(n)}" title="${label}"></span>`;
    });
    const months = [];
    for (let i = 0; i < c.length; i++) {
      const d = new Date(ACTIVITY.start + "T12:00:00");
      d.setDate(d.getDate() + i);
      if (d.getDate() === 1 || i === 0) {
        months.push(`<span style="grid-column:${Math.floor((startDow + i) / 7) + 1}">${d.toLocaleDateString([], { month: "short" })}</span>`);
      }
    }
    return `
      <p class="clip-eyebrow">the composing room · development activity</p>
      <h2 class="clip-title" id="clip-title">Set in type, daily</h2>
      <p class="clip-desc">Every square is a day of ${new Date().getFullYear()}; the darker the ink,
        the heavier the print run. Live from GitHub, year to date.</p>
      <dl class="spec">
        <div><dt>commits</dt><dd>${total.toLocaleString()} contributions ytd</dd></div>
        <div><dt>cadence</dt><dd>${active} of ${c.length} days active (${Math.round((active / c.length) * 100)}%)</dd></div>
        <div><dt>streak</dt><dd>${best} consecutive days, longest</dd></div>
        <div><dt>peak</dt><dd>${peak} contributions in one day</dd></div>
      </dl>
      <div class="act-wrap">
        <div class="act-months" style="grid-template-columns:repeat(${nWeeks},14px)">${months.join("")}</div>
        <div class="act-grid">${pad.join("")}${cells.join("")}</div>
        <div class="act-legend">less
          <span class="act-cell" data-b="0"></span><span class="act-cell" data-b="1"></span><span class="act-cell" data-b="2"></span><span class="act-cell" data-b="3"></span><span class="act-cell" data-b="4"></span>
          more · updated ${ACTIVITY.updated}</div>
      </div>
      <a class="btn-solid" href="${SOCIALS.github}" target="_blank" rel="noopener">github/${ACTIVITY.login} ↗</a>`;
  }
  if (kind === "contact") {
    const rows = [
      ["email", "jordan@gettalky.ai", SOCIALS.email],
      ["github", "jvroth18", SOCIALS.github],
      ["linkedin", "/in/jordan-rothstein", SOCIALS.linkedin],
      ["x", "@jordanroth_", SOCIALS.x],
      ["work", "gettalky.ai", SOCIALS.talky],
    ];
    return `
      <p class="clip-eyebrow">the post · correspondence</p>
      <h2 class="clip-title" id="clip-title">Write to the editor</h2>
      <div class="whois-grid">${rows.map(([k, v, u]) => `
        <a class="whois-item" href="${u}" ${u.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
          <span class="whois-key">${k}</span><span class="whois-val">${v}</span>
        </a>`).join("")}</div>`;
  }
  return "";
}

function openClip(kind) {
  clipBody.innerHTML = clipHtml(kind);
  clipLayer.hidden = false;
  // the car drives over to whatever you're reading, however you got there
  const stopIdx = CAR_STOPS.findIndex((s) => s.open === kind);
  if (stopIdx >= 0) { car.touched = true; if (stopIdx !== car.idx) driveTo(stopIdx, false); }
  // the plane advertises what you're reading on its next pass
  if (kind.startsWith("project-")) queueBanner(PROJECTS[+kind.split("-")[1]].banner, kind);
  else if (kind === "writing") queueBanner("READ THE DISPATCHES", kind);
}

function closeClip() { clipLayer.hidden = true; }
document.getElementById("clip-close").addEventListener("click", closeClip);

/* rooftop targets */
document.querySelectorAll(".spot").forEach((g) => {
  const open = () => openClip(g.dataset.open);
  g.addEventListener("click", open);
  g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
});

/* ---------------- Command palette (the index) ---------------- */

const COMMANDS = [
  { id: "relay", glyph: "§", label: "Relay", desc: "agentic computer use for insurance", kw: "project work", run: () => openClip("project-0") },
  { id: "talky", glyph: "§", label: "Talky Voice AI", desc: "the AI front desk", kw: "project voice", run: () => openClip("project-1") },
  { id: "momentum", glyph: "§", label: "Momentum Surface", desc: "path-signature quant research", kw: "project quant", run: () => openClip("project-2") },
  { id: "tracker", glyph: "§", label: "tracker", desc: "open-source CLI", kw: "project oss", run: () => openClip("project-3") },
  { id: "ax", glyph: "§", label: "AX", desc: "on-device voice agent for iPhone", kw: "project phone voice local mlx qwen", run: () => openClip("project-4") },
  { id: "drive", glyph: "»", label: "Drive the Street", desc: "← → cruise building to building", kw: "car navigate street", run: () => driveCar(1) },
  { id: "writing", glyph: "✎", label: "Dispatches", desc: "essays from the water tower", kw: "blog essays writing", run: () => openClip("writing") },
  { id: "contact", glyph: "@", label: "The Post", desc: "write to the editor", kw: "email correspondence", run: () => openClip("contact") },
  { id: "activity", glyph: "▦", label: "The Composing Room", desc: "YTD commit activity, live from GitHub", kw: "commits contributions development github activity", run: () => openClip("activity") },
  { id: "fly", glyph: "✈", label: "Fly the Biplane", desc: "arrows steer · ↑↓ throttle · esc lands", kw: "plane game", run: () => takeControls() },
  { id: "weather", glyph: "☁", label: "Sky Report", desc: "live from astoria, n.y.", kw: "moon sun forecast", run: () => weatherReport() },
  { id: "github", glyph: "↗", label: "GitHub", desc: "github.com/jvroth18", kw: "code", run: () => window.open(SOCIALS.github, "_blank", "noopener") },
  { id: "linkedin", glyph: "↗", label: "LinkedIn", desc: "/in/jordan-rothstein", kw: "profile", run: () => window.open(SOCIALS.linkedin, "_blank", "noopener") },
];

const palLayer = document.getElementById("palette-layer");
const palInput = document.getElementById("palette-input");
const palList = document.getElementById("palette-list");
let palOpen = false, palIndex = 0, palMatches = COMMANDS;

function scoreCmd(cmd, q) {
  const hay = `${cmd.id} ${cmd.label} ${cmd.kw}`.toLowerCase();
  if (!q) return 1;
  if (hay.includes(q)) return 3 + (cmd.label.toLowerCase().startsWith(q) ? 2 : 0);
  let i = 0;
  for (const ch of hay) if (ch === q[i]) i++;
  return i === q.length ? 1 : 0;
}

function palRender() {
  const q = palInput.value.trim().toLowerCase();
  palMatches = COMMANDS.map((c) => [scoreCmd(c, q), c]).filter(([s]) => s > 0)
    .sort((a, b) => b[0] - a[0]).map(([, c]) => c);
  palIndex = Math.min(palIndex, Math.max(0, palMatches.length - 1));
  if (!palMatches.length) {
    palList.innerHTML = `<li class="palette-empty">nothing here — try relay, dispatches, or fly</li>`;
    return;
  }
  palList.innerHTML = palMatches.map((c, i) => `
    <li class="palette-item${i === palIndex ? " active" : ""}" data-i="${i}" role="option" aria-selected="${i === palIndex}">
      <span class="pi-glyph">${c.glyph}</span>
      <span><span class="pi-label">${c.label}</span><div class="pi-desc">${c.desc}</div></span>
      <span class="pi-kbd">${i === palIndex ? "↵" : ""}</span>
    </li>`).join("");
  palList.querySelector(".palette-item.active")?.scrollIntoView({ block: "nearest" });
}

function palShow(seed = "") {
  palOpen = true; palLayer.hidden = false;
  palInput.value = seed; palIndex = 0;
  palRender(); palInput.focus();
  palInput.setSelectionRange(seed.length, seed.length);
}
function palHide() { palOpen = false; palLayer.hidden = true; palInput.value = ""; palInput.blur(); }
function palRun() { const c = palMatches[palIndex]; if (!c) return; palHide(); c.run(); }

document.getElementById("palette-form").addEventListener("submit", (e) => { e.preventDefault(); palRun(); });
palInput.addEventListener("input", () => { palIndex = 0; palRender(); });
document.getElementById("palette-backdrop").addEventListener("click", palHide);
palList.addEventListener("click", (e) => { const r = e.target.closest(".palette-item"); if (r) { palIndex = +r.dataset.i; palRun(); } });
palList.addEventListener("mousemove", (e) => {
  const r = e.target.closest(".palette-item");
  if (r && +r.dataset.i !== palIndex) { palIndex = +r.dataset.i; palRender(); }
});

/* ---------------- Global keys ---------------- */

document.addEventListener("keydown", (e) => {
  if (palOpen) {
    if (e.key === "Escape") { e.preventDefault(); palHide(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); palIndex = Math.min(palIndex + 1, palMatches.length - 1); palRender(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); palIndex = Math.max(palIndex - 1, 0); palRender(); }
    return;
  }
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); palShow(); return; }
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  if (flight.active && flight.mode === "manual") {
    if (e.key === "Escape") { stopFlight(); return; }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
      e.preventDefault(); flight.keys[e.key] = true; return;
    }
  }
  if (e.key === "Escape") { closeClip(); return; }
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    e.preventDefault();
    // coalesce OS key-repeat so a held arrow steps stop by stop
    if (e.repeat && performance.now() - car.lastNudge < 220) return;
    car.lastNudge = performance.now();
    driveCar(e.key === "ArrowRight" ? 1 : -1);
    return;
  }
  if (e.key === "Enter" && document.activeElement === document.body) {
    e.preventDefault(); openClip(CAR_STOPS[car.idx].open);
    return;
  }
  if (e.key.length === 1 && !/\s/.test(e.key)) palShow(e.key);
});
document.addEventListener("keyup", (e) => { flight.keys[e.key] = false; });

/* ============================================================
   FLIGHT — the paper's delivery mechanism. Ambient passes tow
   rotating headlines; billboard clicks jump the banner queue;
   `fly` hands over the controls.
   ============================================================ */

const sky = document.getElementById("sky");
const hud = document.getElementById("hud");
const ctx = sky.getContext("2d");

/* the flyby lane: the clear strip of sky between the masthead
   text (which prints above the plane) and the rooftops (which
   rise in front of it) — flybys must cross neither */
function flybyLane() {
  const mast = document.querySelector(".masthead");
  const town = document.getElementById("skyline");
  const top = (mast ? mast.getBoundingClientRect().bottom : innerHeight * 0.28) + 16;
  const bottom = (town ? town.getBoundingClientRect().top : innerHeight * 0.52) - 22;
  if (bottom - top < 24) {
    const mid = (top + bottom) / 2;
    return { top: mid - 12, bottom: mid + 12 };
  }
  return { top, bottom };
}

const flight = {
  active: false, mode: "auto", raf: 0, t: 0,
  x: 0, y: 0, angle: 0, speed: 2.4, throttle: 0.45, roll: 0, baseY: 160,
  keys: {}, trail: [], particles: [], rope: [],
  bannerText: "", bannerOpen: null, bannerBox: null,
};

const PHYS = { thrust: 0.075, drag: 0.003, grav: 0.05, vMin: 1.1, vMax: 6.5, vStall: 1.7, vRecover: 2.7 };
const ROPE_SEGS = 9, ROPE_SP = 7, TAIL = 30;
const bannerQueue = [];
/* the rotation continues across visits, so each page load leads with a
   different headline instead of always starting from the top */
let rotationIdx = (+localStorage.getItem("bannerIdx") || 0) % BANNER_ROTATION.length;

function queueBanner(text, open) {
  bannerQueue.push({ text, open });
}

function nextBanner() {
  if (bannerQueue.length) return bannerQueue.shift();
  const b = BANNER_ROTATION[rotationIdx % BANNER_ROTATION.length];
  rotationIdx++;
  localStorage.setItem("bannerIdx", rotationIdx % BANNER_ROTATION.length);
  return b;
}

function cssVar(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

function sizeSky() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  sky.width = innerWidth * dpr;
  sky.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function initRope(f) {
  f.rope = Array.from({ length: ROPE_SEGS }, (_, i) => ({ x: f.x - TAIL - (i + 1) * ROPE_SP, y: f.y }));
}

function beginFlight(mode) {
  const f = flight;
  const b = nextBanner();
  f.bannerText = b.text; f.bannerOpen = b.open;
  f.active = true; f.mode = mode;
  f.x = -220 - bannerWidth(b.text);
  const lane = flybyLane();
  f.baseY = lane.top + (lane.bottom - lane.top) * (0.25 + Math.random() * 0.5);
  f.y = f.baseY;
  f.angle = 0; f.speed = 2.4; f.throttle = 0.45; f.roll = 0; f.t = 0; f.stalled = false;
  f.trail = []; f.particles = [];
  initRope(f);
  sizeSky();
  sky.hidden = false;
  // generation guard: a stopped flight's pending frame must not resurrect the loop
  f.gen = (f.gen || 0) + 1;
  const gen = f.gen;
  const loop = () => {
    if (!f.active || f.gen !== gen) return;
    stepFlight(); drawFlight();
    f.raf = requestAnimationFrame(loop);
  };
  f.raf = requestAnimationFrame(loop);
}

function startFlyby() {
  if (flight.active || prefersReduced() || document.hidden) return;
  beginFlight("auto");
}

function takeControls() {
  const f = flight;
  if (f.active && f.mode === "manual") { toast("already airborne — esc to land.", "flight deck", "flight"); return; }
  if (f.active) f.mode = "manual";
  else { beginFlight("manual"); f.x = -160; }
  hud.hidden = false;
  hud.textContent = "✈  ← → steer · ↑ ↓ throttle · esc to land";
  toast("engines on — arrows to steer, esc to land.", "flight deck", "flight");
}

function stopFlight(silent) {
  const f = flight;
  f.active = false; f.bannerBox = null;
  cancelAnimationFrame(f.raf);
  sky.hidden = true; hud.hidden = true;
  if (!silent && f.mode === "manual") toast("landed.", "flight deck", "flight");
}

function stepFlight() {
  const f = flight;
  f.t++;

  if (f.mode === "auto") {
    f.speed = 2.2;
    f.angle = Math.sin(f.t * 0.015) * 0.03;
    f.x += f.speed;
    f.y = f.baseY + Math.sin(f.t * 0.02) * 6;
    if (f.x > innerWidth + 260) { stopFlight(true); return; }
  } else {
    const turn = (f.keys.ArrowRight ? 1 : 0) - (f.keys.ArrowLeft ? 1 : 0);
    // a stalled wing has almost no control authority
    const authority = f.stalled ? 0.22 : 1;
    const turnRate = 0.05 * Math.min(1.6, Math.max(0.55, 3.4 / f.speed)) * authority;
    f.angle += turn * turnRate;
    f.roll += (turn - f.roll) * 0.08;
    if (f.keys.ArrowUp) f.throttle = Math.min(1, f.throttle + 0.02);
    if (f.keys.ArrowDown) f.throttle = Math.max(0, f.throttle - 0.02);
    f.speed += f.throttle * PHYS.thrust - PHYS.drag * f.speed * f.speed + PHYS.grav * Math.sin(f.angle);
    f.speed = Math.max(PHYS.vMin, Math.min(PHYS.vMax, f.speed));

    const climb = -Math.sin(f.angle);   // y is down: positive while climbing
    if (!f.stalled) {
      // pre-stall buffet: slow and nose-high, the airframe shudders
      if (f.speed < PHYS.vStall * 1.18 && climb > 0.15) {
        f.angle += Math.sin(f.t * 0.9) * 0.008;
      }
      // the stall: too slow with the nose up — the wing quits
      if (f.speed < PHYS.vStall && climb > 0.2) {
        f.stalled = true;
        hud.textContent = "✈  STALL — nose down, build airspeed";
        toast("stall! the wing quit — nose down to recover.", "flight deck", "flight");
      }
    }
    if (f.stalled) {
      // nose drops toward the dive, the plane sinks and shudders
      f.angle += (Math.cos(f.angle) >= 0 ? 1 : -1) * 0.05;
      f.angle += Math.sin(f.t * 1.3) * 0.012;
      f.y += 2.2 * Math.max(0, 1 - climb);
      if (f.speed > PHYS.vRecover && climb < 0.1) {
        f.stalled = false;
        hud.textContent = "✈  ← → steer · ↑ ↓ throttle · esc to land";
      }
    }

    f.x += Math.cos(f.angle) * f.speed;
    f.y += Math.sin(f.angle) * f.speed;
    const M = 200;
    const shift = (dx, dy) => {
      f.rope.forEach((p) => { p.x += dx; p.y += dy; });
      f.trail.forEach((p) => { p.x += dx; p.y += dy; });
      f.particles.forEach((p) => { p.x += dx; p.y += dy; });
    };
    if (f.x < -M) { f.x += innerWidth + 2 * M; shift(innerWidth + 2 * M, 0); }
    if (f.x > innerWidth + M) { f.x -= innerWidth + 2 * M; shift(-(innerWidth + 2 * M), 0); }
    if (f.y < -M) { f.y += innerHeight + 2 * M; shift(0, innerHeight + 2 * M); }
    if (f.y > innerHeight + M) { f.y -= innerHeight + 2 * M; shift(0, -(innerHeight + 2 * M)); }

    // a long manual flight tows the whole rotation, one headline at a time
    if (f.t % 360 === 0) {
      const b = nextBanner();
      f.bannerText = b.text; f.bannerOpen = b.open;
    }
  }

  let prev = { x: f.x - Math.cos(f.angle) * TAIL, y: f.y - Math.sin(f.angle) * TAIL };
  f.rope.forEach((p) => {
    p.y += 0.25;
    const dx = p.x - prev.x, dy = p.y - prev.y;
    const d = Math.hypot(dx, dy) || 1;
    p.x = prev.x + (dx / d) * ROPE_SP;
    p.y = prev.y + (dy / d) * ROPE_SP;
    prev = p;
  });

  f.trail.push({ x: f.x - Math.cos(f.angle) * TAIL, y: f.y - Math.sin(f.angle) * TAIL, a: 1 });
  if (f.trail.length > 70) f.trail.shift();
  f.trail.forEach((t) => (t.a *= 0.965));

  if (f.t % Math.max(5, Math.round(16 - f.throttle * 10)) === 0) {
    f.particles.push({
      x: f.x - Math.cos(f.angle) * 6 + (Math.random() - 0.5) * 3,
      y: f.y - Math.sin(f.angle) * 6 + 5,
      vx: -Math.cos(f.angle) * 0.7, vy: -0.15, life: 0.7, r: 1.6,
    });
  }
  f.particles.forEach((p) => {
    p.x += p.vx; p.y += p.vy; p.vx *= 0.96; p.vy *= 0.96;
    p.life -= 0.018; p.r += 0.14;
  });
  f.particles = f.particles.filter((p) => p.life > 0);
}

/* clicking the banner opens what it advertises */
document.addEventListener("click", (e) => {
  const f = flight;
  if (!f.active || !f.bannerBox || !f.bannerOpen) return;
  const b = f.bannerBox;
  if (e.clientX >= b.x && e.clientX <= b.x + b.w && e.clientY >= b.y && e.clientY <= b.y + b.h) {
    openClip(f.bannerOpen);
  }
});

const bannerWidths = new Map();
function bannerWidth(text) {
  if (!bannerWidths.has(text)) {
    ctx.font = "600 13px 'JetBrains Mono', monospace";
    bannerWidths.set(text, ctx.measureText(text).width);
  }
  return bannerWidths.get(text);
}

function drawFlight() {
  const f = flight;
  const accent = cssVar("--accent");
  const faint = cssVar("--ink-faint");
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ctx.lineCap = "round";
  for (let i = 1; i < f.trail.length; i++) {
    const t = f.trail[i];
    ctx.strokeStyle = faint;
    ctx.globalAlpha = t.a * 0.4;
    ctx.lineWidth = 1 + t.a * 2;
    ctx.beginPath();
    ctx.moveTo(f.trail[i - 1].x, f.trail[i - 1].y);
    ctx.lineTo(t.x, t.y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  f.particles.forEach((p) => {
    ctx.fillStyle = faint;
    ctx.globalAlpha = p.life * 0.45;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
  });
  ctx.globalAlpha = 1;

  drawBannerRope(f);
  drawBiplane(f, accent);
}

function drawBannerRope(f) {
  const EDGE = "rgba(58, 48, 38, .65)";
  const CREAM = "#f6ecda";
  const DARK = "#3a3028";

  ctx.strokeStyle = EDGE;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(f.x - Math.cos(f.angle) * TAIL, f.y - Math.sin(f.angle) * TAIL);
  f.rope.forEach((p) => ctx.lineTo(p.x, p.y));
  ctx.stroke();

  const n = f.rope.length;
  const end = f.rope[n - 1], back = f.rope[n - 3];
  let ang = Math.atan2(end.y - back.y, end.x - back.x);
  const upright = Math.cos(ang) >= 0;

  ctx.save();
  ctx.font = "600 13px 'JetBrains Mono', monospace";
  const bw = bannerWidth(f.bannerText) + 30, bh = 26;
  const cx = end.x + Math.cos(ang) * (bw / 2 + 3);
  const cy = end.y + Math.sin(ang) * (bw / 2 + 3);
  f.bannerBox = { x: cx - bw / 2 - 8, y: cy - bh / 2 - 8, w: bw + 16, h: bh + 16 };
  ctx.translate(cx, cy);
  ctx.rotate(upright ? ang : ang + Math.PI);
  ctx.rotate(Math.sin(f.t * 0.16) * 0.04);
  ctx.transform(1, 0, -0.06, 1, 0, 0);

  const lead = upright ? -bw / 2 : bw / 2;
  const tail = -lead;
  const notch = upright ? -9 : 9;
  ctx.fillStyle = CREAM;
  ctx.strokeStyle = EDGE;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(lead, -bh / 2); ctx.lineTo(tail, -bh / 2);
  ctx.lineTo(tail + notch, 0);
  ctx.lineTo(tail, bh / 2); ctx.lineTo(lead, bh / 2);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = DARK;
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(f.bannerText, upright ? -4 : 4, 1);
  ctx.restore();
}

function drawBiplane(f, accent) {
  const CREAM = "#f3e7d3";
  const EDGE = "rgba(58, 48, 38, .6)";
  const DARK = "#3a3028";

  ctx.save();
  ctx.translate(f.x, f.y);
  ctx.rotate(f.angle);
  if (Math.cos(f.angle) < 0) ctx.scale(1, -1);
  ctx.scale(1.35, 1.35 * (1 - Math.abs(f.roll) * 0.18));
  ctx.lineWidth = 1.1;

  ctx.fillStyle = CREAM; ctx.strokeStyle = EDGE;
  roundRect(-27, -1.6, 10, 3.2, 1.6); ctx.fill(); ctx.stroke();

  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.moveTo(-27, 0); ctx.quadraticCurveTo(-25, -8, -20.5, -8.5);
  ctx.lineTo(-16, -1); ctx.closePath();
  ctx.fill(); ctx.stroke();

  ctx.strokeStyle = DARK;
  ctx.beginPath(); ctx.moveTo(2, 4); ctx.lineTo(0, 11); ctx.moveTo(8, 4); ctx.lineTo(10, 11); ctx.stroke();
  ctx.fillStyle = DARK;
  ctx.beginPath(); ctx.arc(0, 12, 2.6, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(10, 12, 2.6, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = accent; ctx.strokeStyle = EDGE;
  ctx.beginPath();
  ctx.moveTo(17, -1.5);
  ctx.quadraticCurveTo(6, -5.5, -6, -4.5);
  ctx.quadraticCurveTo(-20, -3.2, -27, -1);
  ctx.lineTo(-27, 1);
  ctx.quadraticCurveTo(-16, 4.2, -4, 4.6);
  ctx.quadraticCurveTo(9, 4.8, 17, 2);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = DARK;
  ctx.beginPath();
  ctx.moveTo(13, -3.4); ctx.quadraticCurveTo(18.5, -2.4, 18.5, 0);
  ctx.quadraticCurveTo(18.5, 2.6, 13, 3.6); ctx.closePath();
  ctx.fill();

  ctx.fillStyle = DARK;
  ctx.beginPath(); ctx.arc(-1.5, -4.6, 1.8, Math.PI, 0); ctx.fill();
  ctx.strokeStyle = DARK;
  ctx.beginPath(); ctx.moveTo(1.5, -4.2); ctx.lineTo(2.6, -6.6); ctx.stroke();

  ctx.fillStyle = CREAM; ctx.strokeStyle = EDGE;
  roundRect(-8, 3.2, 22, 3, 1.5); ctx.fill(); ctx.stroke();

  ctx.strokeStyle = DARK;
  ctx.beginPath();
  ctx.moveTo(-5, 3.5); ctx.lineTo(-3.5, -10);
  ctx.moveTo(11, 3.5); ctx.lineTo(12.5, -10);
  ctx.moveTo(-5, 3.5); ctx.lineTo(12.5, -10);
  ctx.moveTo(1, -4.5); ctx.lineTo(1.5, -10);
  ctx.moveTo(6, -4.5); ctx.lineTo(6.5, -10);
  ctx.stroke();

  roundRect(-11, -13.4, 30, 3.4, 1.7); ctx.fill(); ctx.stroke();

  ctx.fillStyle = DARK;
  ctx.beginPath(); ctx.arc(19.5, 0, 1.6, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = EDGE;
  ctx.globalAlpha = 0.22;
  ctx.beginPath(); ctx.ellipse(19.5, 0, 2.2, 13, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = 0.75;
  const blade = 12 * Math.abs(Math.sin(f.t * 0.55));
  ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.moveTo(19.5, -blade); ctx.lineTo(19.5, blade); ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.restore();
}

function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

window.addEventListener("resize", () => { if (flight.active) sizeSky(); });

setTimeout(startFlyby, 500);
setInterval(startFlyby, 8000);

/* ============================================================
   LIVE SKY — full-viewport, and it IS the design system: the
   real sun sets the edition, the edition sets the tokens.
   ============================================================ */

const wxCanvas = document.getElementById("weather");
const wctx = wxCanvas.getContext("2d");
const root = document.documentElement;

const WX = {
  lat: 40.772, lon: -73.93,
  code: 0, cover: 30, temp: null, desc: "clear sky",
  sunrise: null, sunset: null,
  clouds: [], drops: [], flakes: [], stars: [],
  t: 0, ready: false,
};

const WMO = {
  0: "clear sky", 1: "mostly clear", 2: "partly cloudy", 3: "overcast",
  45: "fog", 48: "icy fog",
  51: "light drizzle", 53: "drizzle", 55: "heavy drizzle",
  56: "freezing drizzle", 57: "freezing drizzle",
  61: "light rain", 63: "rain", 65: "heavy rain",
  66: "freezing rain", 67: "freezing rain",
  71: "light snow", 73: "snow", 75: "heavy snow", 77: "snow grains",
  80: "light showers", 81: "showers", 82: "violent showers",
  85: "snow showers", 86: "snow showers",
  95: "thunderstorm", 96: "thunderstorm", 99: "thunderstorm",
};
const isSnowy = (c) => (c >= 71 && c <= 77) || c === 85 || c === 86;
const isRainy = (c) => (c >= 51 && c <= 67) || (c >= 80 && c <= 82) || c >= 95;
const isFoggy = (c) => c === 45 || c === 48;

function sizeWx() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  wxCanvas.width = innerWidth * dpr;
  wxCanvas.height = innerHeight * dpr;
  wctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

async function fetchWeather() {
  try {
    const u = `https://api.open-meteo.com/v1/forecast?latitude=${WX.lat}&longitude=${WX.lon}` +
      "&current=temperature_2m,weather_code,cloud_cover&daily=sunrise,sunset" +
      "&temperature_unit=fahrenheit&timezone=America%2FNew_York&forecast_days=1";
    const j = await (await fetch(u)).json();
    WX.code = j.current.weather_code;
    WX.cover = j.current.cloud_cover;
    WX.temp = Math.round(j.current.temperature_2m);
    WX.sunrise = new Date(j.daily.sunrise[0]);
    WX.sunset = new Date(j.daily.sunset[0]);
    WX.desc = WMO[WX.code] ?? "—";
    document.getElementById("sb-wx").textContent = `${WX.temp}°F ${WX.desc}`;
    document.getElementById("mast-wx").textContent = `${WX.temp}°F · ${WX.desc}`;
  } catch {
    document.getElementById("sb-wx").textContent = "astoria, ny";
    document.getElementById("mast-wx").textContent = "astoria, n.y.";
  }
  WX.ready = true;
  buildSkyBits();
  setEdition();
}

function weatherReport() {
  if (!WX.ready || WX.temp == null) { toast("the sky desk is warming up — try again in a moment.", "sky report"); return; }
  const fmt = (d) => d ? d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "—";
  const now = new Date();
  const p = moonPhase(now);
  const { rise, set } = moonRiseSet(now);
  const up = moonHorizontal(now).altitude > 0;
  const moonLine = up
    ? `moon up now · sets ${fmt(set)}`
    : `moonrise ${fmt(rise)}`;
  toast(
    `astoria, n.y. — ${WX.temp}°F · ${WX.desc} · clouds ${WX.cover}%\n` +
    `sunrise ${fmt(WX.sunrise)} · sunset ${fmt(WX.sunset)}\n` +
    `moon ${moonPhaseName(p)} · ${Math.round(moonIllum(p) * 100)}% lit · ${moonLine}`,
    "sky report"
  );
}

/* ---- editions: the real sun edits the paper ---- */

function setEdition() {
  const now = Date.now();
  const { sr, ss } = sunTimes(new Date());
  const H = 3600000;
  let ed;
  if (now < sr - 40 * 60000 || now > ss + 40 * 60000) ed = "night";
  else if (now < sr + 3 * H) ed = "morning";
  else if (now > ss - 3 * H) ed = "evening";
  else ed = "midday";
  if (root.dataset.edition !== ed) {
    root.dataset.edition = ed;
    document.getElementById("edition").textContent = `the ${ed} edition`;
    lightWindows(ed);
  }
}
setInterval(setEdition, 60000);

/* ---- windows: generated per building, lit by edition ---- */

const WINDOW_BUILDINGS = {
  1: { x: 30, y: 215, w: 190, h: 165 },
  2: { x: 260, y: 112, w: 200, h: 268 },
  3: { x: 520, y: 168, w: 230, h: 212 },
  4: { x: 800, y: 152, w: 185, h: 228 },
  5: { x: 1030, y: 225, w: 170, h: 155 },
  6: { x: 1240, y: 250, w: 180, h: 130 },
  7: { x: 1460, y: 190, w: 175, h: 190 },
  8: { x: 1690, y: 200, w: 190, h: 180 },
};

function buildWindows() {
  const SVG_NS = "http://www.w3.org/2000/svg";
  document.querySelectorAll(".win").forEach((g) => {
    const b = WINDOW_BUILDINGS[g.dataset.b];
    if (!b) return;
    for (let x = b.x + 18; x < b.x + b.w - 24; x += 30) {
      for (let y = b.y + 18; y < b.y + b.h - 26; y += 34) {
        const r = document.createElementNS(SVG_NS, "rect");
        r.setAttribute("x", x); r.setAttribute("y", y);
        r.setAttribute("width", 12); r.setAttribute("height", 16);
        g.appendChild(r);
      }
    }
  });
}

function lightWindows(edition) {
  const chance = edition === "night" ? 0.65 : edition === "evening" ? 0.35 : edition === "morning" ? 0.15 : 0;
  document.querySelectorAll(".win rect").forEach((r) => {
    r.classList.toggle("lit", Math.random() < chance);
  });
}

/* ---- sky palettes: bolder than a tint — this IS the scene ---- */

const SKY_DAY = { top: [116, 172, 228], bot: [196, 222, 244], a: 0.5 };
const SKY_DUSK = { top: [234, 138, 82], bot: [248, 198, 148], a: 0.55 };
const SKY_NIGHT = { top: [20, 26, 56], bot: [44, 52, 86], a: 0.62 };

function sunTimes(now) {
  const sr = WX.sunrise ? WX.sunrise.getTime() : new Date(now).setHours(6, 15, 0, 0);
  const ss = WX.sunset ? WX.sunset.getTime() : new Date(now).setHours(19, 45, 0, 0);
  return { sr, ss };
}

function skyState(now) {
  const { sr, ss } = sunTimes(now);
  const T = 40 * 60 * 1000, n = now.getTime();
  const lerp = (a, b, t) => a + (b - a) * t;
  const mix = (A, B, t) => ({
    top: A.top.map((v, i) => lerp(v, B.top[i], t)),
    bot: A.bot.map((v, i) => lerp(v, B.bot[i], t)),
    a: lerp(A.a, B.a, t),
  });
  if (n < sr - T || n > ss + T) return SKY_NIGHT;
  if (n < sr + T) {
    const t = (n - (sr - T)) / (2 * T);
    return t < 0.5 ? mix(SKY_NIGHT, SKY_DUSK, t * 2) : mix(SKY_DUSK, SKY_DAY, (t - 0.5) * 2);
  }
  if (n > ss - T) {
    const t = (n - (ss - T)) / (2 * T);
    return t < 0.5 ? mix(SKY_DAY, SKY_DUSK, t * 2) : mix(SKY_DUSK, SKY_NIGHT, (t - 0.5) * 2);
  }
  return SKY_DAY;
}

const SYNODIC_DAYS = 29.53058867;
const NEW_MOON_EPOCH = Date.UTC(2000, 0, 6, 18, 14);
function moonPhase(now) {
  const days = (now.getTime() - NEW_MOON_EPOCH) / 86400000;
  return ((days % SYNODIC_DAYS) + SYNODIC_DAYS) % SYNODIC_DAYS / SYNODIC_DAYS;
}
function moonIllum(p) { return (1 - Math.cos(2 * Math.PI * p)) / 2; }
function moonPhaseName(p) {
  const names = ["new moon", "waxing crescent", "first quarter", "waxing gibbous",
                 "full moon", "waning gibbous", "last quarter", "waning crescent"];
  return names[Math.round(p * 8) % 8];
}

/* ---- true lunar position: low-precision ephemeris (Meeus-style,
   the same math SunCalc uses). Gives the moon's real altitude and
   azimuth over Astoria, so it only appears when it's actually up,
   where it actually is. ---- */

const RAD = Math.PI / 180;
const OBLIQUITY = RAD * 23.4397;

function toDays(date) {
  return date.valueOf() / 86400000 - 0.5 + 2440588 - 2451545;   // days since J2000
}
function eclRightAscension(l, b) {
  return Math.atan2(Math.sin(l) * Math.cos(OBLIQUITY) - Math.tan(b) * Math.sin(OBLIQUITY), Math.cos(l));
}
function eclDeclination(l, b) {
  return Math.asin(Math.sin(b) * Math.cos(OBLIQUITY) + Math.cos(b) * Math.sin(OBLIQUITY) * Math.sin(l));
}
function moonEcliptic(d) {
  const L = RAD * (218.316 + 13.176396 * d);   // mean longitude
  const M = RAD * (134.963 + 13.064993 * d);   // mean anomaly
  const F = RAD * (93.272 + 13.229350 * d);    // mean distance from node
  const l = L + RAD * 6.289 * Math.sin(M);     // longitude
  const b = RAD * 5.128 * Math.sin(F);         // latitude
  return { ra: eclRightAscension(l, b), dec: eclDeclination(l, b) };
}
function moonHorizontal(date) {
  const lw = RAD * -WX.lon, phi = RAD * WX.lat;
  const d = toDays(date);
  const c = moonEcliptic(d);
  const H = RAD * (280.16 + 360.9856235 * d) - lw - c.ra;       // hour angle
  return {
    altitude: Math.asin(Math.sin(phi) * Math.sin(c.dec) + Math.cos(phi) * Math.cos(c.dec) * Math.cos(H)),
    azimuth: Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(c.dec) * Math.cos(phi)),
  };
}

/* scan the next 24h for the real rise/set crossings */
function moonRiseSet(now) {
  let rise = null, set = null;
  let prev = moonHorizontal(now).altitude;
  for (let m = 5; m <= 24 * 60 && (!rise || !set); m += 5) {
    const t = new Date(now.getTime() + m * 60000);
    const alt = moonHorizontal(t).altitude;
    if (prev <= 0 && alt > 0 && !rise) rise = t;
    if (prev > 0 && alt <= 0 && !set) set = t;
    prev = alt;
  }
  return { rise, set };
}

/* map the real sky onto the scene: azimuth (east→west) spans the
   viewport like the sun's arc; altitude climbs from the horizon */
function moonScreenPos(pos) {
  const horizon = innerHeight * 0.58;
  const az = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pos.azimuth)); // east..west
  const x = innerWidth * (0.5 + 0.44 * (az / (Math.PI / 2)));
  const y = horizon - Math.sin(Math.max(0, pos.altitude)) * innerHeight * 0.5;
  return { x, y: Math.max(50, y) };
}

function drawMoon(x, y, r, p, night) {
  const lit = moonIllum(p);
  const glow = wctx.createRadialGradient(x, y, 4, x, y, 80);
  glow.addColorStop(0, `rgba(228, 234, 248, ${0.14 + lit * 0.3})`);
  glow.addColorStop(1, "rgba(228, 234, 248, 0)");
  wctx.fillStyle = glow;
  wctx.beginPath(); wctx.arc(x, y, 80, 0, Math.PI * 2); wctx.fill();

  wctx.fillStyle = "rgba(212, 220, 238, .2)";
  wctx.beginPath(); wctx.arc(x, y, r, 0, Math.PI * 2); wctx.fill();

  const A = 2 * Math.PI * p;
  const rx = Math.cos(A) * r;
  wctx.fillStyle = "rgba(236, 240, 248, .95)";
  wctx.save();
  wctx.translate(x, y);
  if (p > 0.5) wctx.scale(-1, 1);
  wctx.beginPath();
  wctx.arc(0, 0, r, -Math.PI / 2, Math.PI / 2, false);
  wctx.ellipse(0, 0, Math.abs(rx), r, 0, Math.PI / 2, -Math.PI / 2, rx > 0);
  wctx.fill();
  wctx.restore();
}

/* the arc keeps the sun/moon in the open sky above the skyline */
function celestialPos(frac) {
  const horizon = innerHeight * 0.58;
  const x = innerWidth * (0.06 + 0.88 * frac);
  const y = horizon - Math.sin(Math.min(1, Math.max(0, frac)) * Math.PI) * innerHeight * 0.42;
  return { x, y };
}

function buildSkyBits() {
  const n = Math.round((WX.cover / 100) * 8) + (WX.code === 3 ? 2 : 0);
  WX.clouds = Array.from({ length: n }, () => ({
    x: Math.random() * innerWidth,
    y: 24 + Math.random() * innerHeight * 0.4,
    s: 0.6 + Math.random() * 0.9,
    v: 0.1 + Math.random() * 0.18,
  }));
  WX.drops = Array.from({ length: 90 }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    l: 8 + Math.random() * 10, v: 7 + Math.random() * 5,
  }));
  WX.flakes = Array.from({ length: 70 }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    r: 1.2 + Math.random() * 1.8, v: 0.7 + Math.random() * 0.9,
    ph: Math.random() * Math.PI * 2,
  }));
  WX.stars = Array.from({ length: 110 }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight * 0.55,
    r: 0.6 + Math.random() * 1, ph: Math.random() * Math.PI * 2,
  }));
}

function drawWx() {
  WX.t++;
  const now = new Date();
  const { sr, ss } = sunTimes(now);
  const n = now.getTime();
  wctx.clearRect(0, 0, innerWidth, innerHeight);

  const st = skyState(now);
  const g = wctx.createLinearGradient(0, 0, 0, innerHeight * 0.85);
  g.addColorStop(0, `rgba(${st.top.map(Math.round).join(",")},${st.a})`);
  g.addColorStop(1, `rgba(${st.bot.map(Math.round).join(",")},${st.a * 0.4})`);
  wctx.fillStyle = g;
  wctx.fillRect(0, 0, innerWidth, innerHeight);

  const night = n < sr || n > ss;

  if (night) {
    WX.stars.forEach((s) => {
      wctx.globalAlpha = 0.3 + 0.35 * Math.abs(Math.sin(WX.t * 0.01 + s.ph));
      wctx.fillStyle = "#e8ecf4";
      wctx.beginPath(); wctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); wctx.fill();
    });
    wctx.globalAlpha = 1;
  }

  if (!night) {
    const { x, y } = celestialPos((n - sr) / (ss - sr));
    const glow = wctx.createRadialGradient(x, y, 8, x, y, 120);
    glow.addColorStop(0, "rgba(255, 205, 110, .6)");
    glow.addColorStop(1, "rgba(255, 205, 110, 0)");
    wctx.fillStyle = glow;
    wctx.beginPath(); wctx.arc(x, y, 120, 0, Math.PI * 2); wctx.fill();
    wctx.fillStyle = "rgba(255, 190, 85, .92)";
    wctx.beginPath(); wctx.arc(x, y, 24, 0, Math.PI * 2); wctx.fill();
  }

  /* the moon appears only when it is really above Astoria's horizon —
     bright at night, a faint ghost by day */
  const mpos = moonHorizontal(now);
  if (mpos.altitude > 0.02) {
    const { x, y } = moonScreenPos(mpos);
    wctx.save();
    wctx.globalAlpha = night ? 1 : 0.35;
    drawMoon(x, y, night ? 20 : 15, moonPhase(now), night);
    wctx.restore();
  }

  const cCol = WX.code === 3 ? "150,158,172" : "196,204,216";
  WX.clouds.forEach((c) => {
    c.x += c.v;
    if (c.x - 180 * c.s > innerWidth) c.x = -180 * c.s;
    wctx.fillStyle = `rgba(${cCol}, .4)`;
    for (let i = 0; i < 5; i++) {
      const ox = (i - 2) * 36 * c.s, oy = Math.sin(i * 2.1) * 10 * c.s;
      wctx.beginPath();
      wctx.ellipse(c.x + ox, c.y + oy, 50 * c.s, 24 * c.s, 0, 0, Math.PI * 2);
      wctx.fill();
    }
  });

  if (isFoggy(WX.code)) {
    for (let i = 0; i < 4; i++) {
      const y = innerHeight * (0.2 + i * 0.18) + Math.sin(WX.t * 0.004 + i * 2) * 12;
      const fg = wctx.createLinearGradient(0, y - 40, 0, y + 40);
      fg.addColorStop(0, "rgba(205,208,214,0)");
      fg.addColorStop(0.5, "rgba(205,208,214,.28)");
      fg.addColorStop(1, "rgba(205,208,214,0)");
      wctx.fillStyle = fg;
      wctx.fillRect(0, y - 40, innerWidth, 80);
    }
  }

  if (isRainy(WX.code) && !isSnowy(WX.code)) {
    wctx.strokeStyle = "rgba(105, 135, 175, .4)";
    wctx.lineWidth = 1.1;
    WX.drops.forEach((d) => {
      d.y += d.v; d.x -= d.v * 0.18;
      if (d.y > innerHeight) { d.y = -12; d.x = Math.random() * (innerWidth + 60); }
      wctx.beginPath();
      wctx.moveTo(d.x, d.y);
      wctx.lineTo(d.x - d.l * 0.18, d.y - d.l);
      wctx.stroke();
    });
  }
  if (isSnowy(WX.code)) {
    wctx.fillStyle = "rgba(240, 243, 248, .85)";
    WX.flakes.forEach((f) => {
      f.y += f.v; f.x += Math.sin(WX.t * 0.02 + f.ph) * 0.4;
      if (f.y > innerHeight) { f.y = -6; f.x = Math.random() * innerWidth; }
      wctx.beginPath(); wctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); wctx.fill();
    });
  }
}

let wxFrame = 0;
function wxLoop() {
  wxFrame++;
  const fast = isRainy(WX.code) || isSnowy(WX.code);
  if (!document.hidden && (fast || wxFrame % 2 === 0)) drawWx();
  requestAnimationFrame(wxLoop);
}

/* ---------------- Boot ---------------- */

sizeWx();
buildWindows();
buildSkyBits();
setEdition();
fetchWeather();
setInterval(fetchWeather, 15 * 60 * 1000);
window.addEventListener("resize", () => { sizeWx(); buildSkyBits(); });
if (prefersReduced()) drawWx(); else wxLoop();

/* on phones the street is swipeable — start it framing the car, and
   make the hint line a big friendly way into the index */
const skylineEl = document.getElementById("skyline");
setTimeout(followCar, 300);
window.addEventListener("orientationchange", () => setTimeout(followCar, 400));

/* ============================================================
   THE CAR — the paper's street car. ← → drives it building to
   building; arriving parks under a rooftop and opens it. Tapping
   the car drives on to the next stop. Clicking a rooftop directly
   sends the car over quietly, so it is always parked at whatever
   you are reading.
   ============================================================ */

const CAR_STOPS = [
  { open: "project-0", x: 125 },
  { open: "project-1", x: 360 },
  { open: "writing",   x: 635 },
  { open: "project-2", x: 892 },
  { open: "project-3", x: 1115 },
  { open: "contact",   x: 1330 },
  { open: "project-4", x: 1547 },
  { open: "project-5", x: 1785 },
];
const VB_W = 1660;    // the skyline viewBox (camera frame) width
const SCENE_W = 2200; // the street runs past the frame, east to the river

/* ---- the camera: the frame follows the car down the block, the
   back ranks sliding slower than the street — a paper diorama ---- */
const cam = {
  x: 0, target: 0, raf: 0,
  far: document.getElementById("cam-far"),
  mid: document.getElementById("cam-mid"),
  near: document.getElementById("cam-near"),
};
function camApply() {
  if (!cam.near) return;   // stale cached markup without the camera groups
  cam.far.setAttribute("transform", `translate(${(-cam.x * 0.35).toFixed(2)} 0)`);
  cam.mid.setAttribute("transform", `translate(${(-cam.x * 0.6).toFixed(2)} 0)`);
  cam.near.setAttribute("transform", `translate(${(-cam.x).toFixed(2)} 0)`);
}
function camLoop() {
  const d = cam.target - cam.x;
  if (Math.abs(d) < 0.4) { cam.x = cam.target; camApply(); cam.raf = 0; return; }
  cam.x += d * 0.07;
  camApply();
  cam.raf = requestAnimationFrame(camLoop);
}
function camFollow() {
  cam.target = Math.max(0, Math.min(SCENE_W - VB_W, car.x - VB_W / 2));
  if (prefersReduced()) { cam.x = cam.target; camApply(); return; }
  if (!cam.raf) cam.raf = requestAnimationFrame(camLoop);
}

const car = {
  el: document.getElementById("car"),
  rig: document.getElementById("car-rig"),
  spokes: document.querySelectorAll("#car .spokes"),
  idx: 2, x: CAR_STOPS[2].x,
  dir: 1, vDir: 1, wheel: 0, lean: 0,
  raf: 0, driving: false, touched: false,
  tapDir: 1, lastNudge: 0, endToastAt: 0, userScrollAt: 0,
};

function placeCar() {
  // vDir eases through zero on a turn, so the flip reads as a quick
  // three-point turn instead of an instant mirror
  const d = Math.max(0.08, Math.abs(car.vDir)) * (car.vDir < 0 ? -1 : 1);
  car.el.setAttribute("transform", `translate(${car.x} 354)`);
  car.rig.setAttribute("transform", `scale(${d} 1) rotate(${car.lean})`);
  car.spokes.forEach((s) => s.setAttribute("transform", `rotate(${car.wheel})`));
}

/* keep the car in view when the street scrolls (phones), but never
   fight a swipe the user is making themselves */
function followCar() {
  camFollow();
  if (!car.driving && performance.now() - car.userScrollAt < 400) return;
  if (skylineEl.scrollWidth <= skylineEl.clientWidth + 4) return;
  const svg = skylineEl.querySelector("svg");
  const px = ((car.x - cam.x) / VB_W) * svg.clientWidth;
  skylineEl.scrollLeft = Math.max(0, Math.min(px - skylineEl.clientWidth / 2,
    skylineEl.scrollWidth - skylineEl.clientWidth));
}
skylineEl.addEventListener("scroll", () => {
  if (!car.driving) car.userScrollAt = performance.now();
}, { passive: true });

function markCarStop(stop) {
  document.querySelectorAll(".spot").forEach((s) =>
    s.classList.toggle("car-here", s.dataset.open === stop.open));
}

const easeDrive = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function spawnPuffs() {
  if (prefersReduced()) return;
  const NS = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 2; i++) {
    const p = document.createElementNS(NS, "circle");
    p.setAttribute("class", "puff");
    p.setAttribute("cx", car.x - car.dir * (31 + i * 6));
    p.setAttribute("cy", 348);
    p.setAttribute("r", 2 + i);
    car.el.parentNode.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}

function driveTo(idx, closeFirst) {
  idx = Math.max(0, Math.min(CAR_STOPS.length - 1, idx));
  const stop = CAR_STOPS[idx];
  car.idx = idx;
  cancelAnimationFrame(car.raf); car.raf = 0;
  if (closeFirst) closeClip();
  const from = car.x, dist = stop.x - from;
  if (dist) car.dir = dist > 0 ? 1 : -1;
  markCarStop(stop);   // the highlight tracks intent, not arrival
  const arrive = () => {
    car.x = stop.x; car.lean = 0; car.vDir = car.dir;
    car.driving = false; car.raf = 0;
    car.el.classList.remove("driving");
    placeCar(); followCar();
    if (closeFirst && !localStorage.getItem("carHint")) {
      localStorage.setItem("carHint", "1");
      toast("parked. click the rooftop — or press ↵ — to step inside.", "the street", "car");
    }
  };
  if (!dist || prefersReduced()) { arrive(); return; }
  car.driving = true;
  car.el.classList.add("driving");
  spawnPuffs();
  const flipFrom = car.vDir;
  // leisurely: roughly the biplane's cruising pace, not a sports car
  const dur = Math.min(3000, 600 + Math.abs(dist) * 2.2);
  const t0 = performance.now();
  let lastStep = 0;
  const loop = (now) => {
    const t = Math.min(1, (now - t0) / dur);
    const prev = car.x;
    car.x = from + dist * easeDrive(t);
    const step = Math.abs(car.x - prev);
    car.wheel = (car.wheel + step * 9.55) % 360;   // slip-free roll for r=6
    car.lean = Math.max(-3.5, Math.min(3.5, -(step - lastStep) * 4.5));
    lastStep = step;
    car.vDir = flipFrom + (car.dir - flipFrom) * Math.min(1, (now - t0) / 140);
    if (t >= 1) { arrive(); return; }
    placeCar(); followCar();
    car.raf = requestAnimationFrame(loop);
  };
  car.raf = requestAnimationFrame(loop);
}

function driveCar(step) {
  car.touched = true;
  const next = Math.max(0, Math.min(CAR_STOPS.length - 1, car.idx + step));
  if (next === car.idx) {
    const now = performance.now();
    if (now - car.endToastAt > 1500) {
      car.endToastAt = now;
      toast(step < 0
        ? "that's the end of the block — nothing west but the bridge."
        : "end of the street — nothing past here but the river.", "the street", "car");
    }
    return;
  }
  driveTo(next, true);
}

/* tapping the car cruises down the street, turning around at the ends */
function nudgeCar() {
  if (car.idx + car.tapDir < 0 || car.idx + car.tapDir >= CAR_STOPS.length) car.tapDir *= -1;
  driveCar(car.tapDir);
}
/* press-and-hold keeps it rolling stop to stop; a quick tap is one nudge.
   taps land mid-drive too — each one sends the car a stop further. */
let carHoldT = 0, carWasHeld = false;
car.el.addEventListener("pointerdown", () => {
  carWasHeld = false;
  clearTimeout(carHoldT);
  carHoldT = setTimeout(function cruise() {
    carWasHeld = true;
    nudgeCar();
    carHoldT = setTimeout(cruise, 520);
  }, 320);
});
["pointerup", "pointercancel", "pointerleave"].forEach((ev) =>
  car.el.addEventListener(ev, () => clearTimeout(carHoldT)));
car.el.addEventListener("click", () => { if (!carWasHeld) nudgeCar(); });
car.el.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); nudgeCar(); }
});

window.addEventListener("resize", () => { if (!car.driving) followCar(); });

placeCar();
markCarStop(CAR_STOPS[car.idx]);
camFollow();

/* first visit only: one roll down the block and back, so the hint
   line's "drive the street" is a demonstration, not a claim */
if (!prefersReduced() && !localStorage.getItem("carSeen")) {
  localStorage.setItem("carSeen", "1");
  setTimeout(() => { if (!car.touched && !car.driving) driveTo(car.idx + 1, false); }, 1800);
  setTimeout(() => { if (!car.touched) driveTo(2, false); }, 3200);
}

const hintLine = document.getElementById("hint-line");
hintLine.addEventListener("click", () => palShow());
hintLine.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); palShow(); }
});

const sbClock = document.getElementById("sb-clock");
function tickClock() {
  sbClock.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}
tickClock();
setInterval(tickClock, 15000);

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("folio-date").textContent = new Date().toLocaleDateString([], {
  weekday: "long", month: "long", day: "numeric", year: "numeric",
});
