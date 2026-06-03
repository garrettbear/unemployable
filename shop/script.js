/* ===========================================================
   UNEMPLOYABLE™ shop teaser
   =========================================================== */

/* ---------- Background collage ----------
   Add product shots here (relative paths). The grid repeats and
   scatters them; outer ones bleed off the viewport edges. */
const IMAGES = [
  "img/tee-freelance.jpg",
  "img/tee-tagline.jpg",
  "img/tee-survive.jpg",
  "img/mat-office.jpg"
];
(function () {
  const mosaic = document.getElementById("mosaic");
  if (!mosaic) return;
  const COLS = 3, N = IMAGES.length;
  const TILES = Math.max(N, 4);            // every column holds the full set (incl. the mat)
  const cols = [];
  for (let c = 0; c < COLS; c++) {
    const col = document.createElement("div"); col.className = "col";
    const set = [];
    // rotate the order per column so columns stagger and never line up on the same shot
    for (let t = 0; t < TILES; t++) set.push(IMAGES[(t + c) % N]);
    [...set, ...set].forEach((src) => {       // duplicate set → seamless vertical loop
      const tile = document.createElement("div"); tile.className = "tile";
      const img = new Image(); img.src = src; img.alt = ""; img.loading = "eager";
      tile.appendChild(img); col.appendChild(tile);
    });
    mosaic.appendChild(col);
    cols.push(col);
  }

  // Respect reduced-motion: leave it static.
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // JS-driven motion: gentle idle drift + scroll burst that eases back.
  const DIR = [-1, 1, -1];          // each column drifts (and scrolls) its own way
  const BASE = 16;                  // px/sec — the slow idle drift
  let half = cols.map(() => 1);
  const measure = () => { half = cols.map((c) => Math.max(1, c.scrollHeight / 2)); };
  measure();
  // stagger each column to a different vertical start so they don't align
  const offs = cols.map((c, k) => Math.random() * half[k]);
  window.addEventListener("load", measure);
  window.addEventListener("resize", measure);

  let impulse = 0, last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    impulse *= 0.90;                                  // ease the scroll burst back to idle
    if (Math.abs(impulse) < 0.008) impulse = 0;
    for (let k = 0; k < cols.length; k++) {
      const h = half[k];
      // scroll moves each column along ITS direction → not all the same way
      offs[k] = (((offs[k] + DIR[k] * (BASE * dt + impulse)) % h) + h) % h;
      cols[k].style.transform = `translate3d(0, ${(-offs[k]).toFixed(2)}px, 0)`;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // scroll / wheel / touch feed the impulse (capped so a big flick can't launch it)
  const clamp = (v) => Math.max(-60, Math.min(60, v));
  addEventListener("wheel", (e) => { impulse = clamp(impulse + e.deltaY * 0.10); }, { passive: true });
  let ty = 0;
  addEventListener("touchstart", (e) => { ty = e.touches[0].clientY; }, { passive: true });
  addEventListener("touchmove", (e) => {
    const y = e.touches[0].clientY; impulse = clamp(impulse + (ty - y) * 0.5); ty = y;
  }, { passive: true });
})();

/* ---------- Ticker ---------- */
(function () {
  const track = document.getElementById("tickerTrack"); if (!track) return;
  const phrases = ["COMING SOON", "● UNEMPLOYABLE™", "● WEAR THE LAYOFF", "● MOVING FORWARD WITH OTHER CANDIDATES", "● DROP 01", "● PRE-REJECTED"];
  const half = phrases.map((p) => `<span>${p}</span>`).join("");
  track.innerHTML = half + half;
})();

/* ---------- Year ---------- */
document.querySelectorAll("#yr").forEach((el) => { el.textContent = new Date().getFullYear(); });

/* ---------- "Get on the list" focuses the email field ---------- */
(function () {
  const cta = document.getElementById("navCta");
  const input = document.querySelector("#signupTop input[type=email]");
  if (cta && input) cta.addEventListener("click", (e) => { e.preventDefault(); input.focus(); input.scrollIntoView({ block: "center", behavior: "smooth" }); });
})();

/* ---------- Google Form email capture (+ anti-bot, friction-free) ---------- */
const GFORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScb5RaU6KfAhWmjYifP8sGAfHYI7xUYA14kFy-o8AaP4aoraw/formResponse";
const GFORM_ENTRY  = "entry.774890617";

/* OPTIONAL redundant capture — flip on in seconds, no other code changes.
   • Web3Forms (free, unlimited, no real account): get an access key at web3forms.com,
       ESP_ENDPOINT = "https://api.web3forms.com/submit";  ESP_KEY = "your-access-key";
   • Formspree / Apps Script / other: set ESP_ENDPOINT to its URL, leave ESP_KEY "".
   Leave both "" and it stays off (no-op). */
const ESP_ENDPOINT = "";
const ESP_KEY = "";
function postESP(email) {
  if (!ESP_ENDPOINT) return Promise.resolve();
  const body = new URLSearchParams();
  body.append("email", email);
  if (ESP_KEY) { body.append("access_key", ESP_KEY); body.append("subject", "New UNEMPLOYABLE waitlist signup"); }
  return fetch(ESP_ENDPOINT, { method: "POST", mode: "no-cors", keepalive: true, body }).catch(() => {});
}
const PAGE_LOADED = Date.now();

/* ---- Resilient delivery (no setup required) ----
   keepalive:true → the request still completes if the tab closes right after submit.
   localStorage outbox → a send that fails (flaky mobile signal, offline) is queued
   and retried on the next visit / when back online, so signups aren't silently lost. */
const OUTBOX = "ue-outbox";
function _ob() { try { return JSON.parse(localStorage.getItem(OUTBOX) || "[]"); } catch (e) { return []; } }
function _save(a) { try { localStorage.setItem(OUTBOX, JSON.stringify(a.slice(-2000))); } catch (e) {} }
function enqueue(email) { const o = _ob(); if (!o.includes(email)) { o.push(email); _save(o); } }
function dequeue(email) { _save(_ob().filter((e) => e !== email)); }
function postEmail(email) {
  if (GFORM_ACTION.includes("REPLACE_WITH")) return Promise.resolve();
  const body = new URLSearchParams(); body.append(GFORM_ENTRY, email);
  return fetch(GFORM_ACTION, { method: "POST", mode: "no-cors", body, keepalive: true });
}
function deliver(email) { enqueue(email); postESP(email); return postEmail(email).then(() => dequeue(email)).catch(() => {}); }
function flushOutbox() { _ob().forEach((email) => postEmail(email).then(() => dequeue(email)).catch(() => {})); }
flushOutbox();
setInterval(flushOutbox, 20000);
window.addEventListener("online", flushOutbox);

function validEmail(s) {
  if (s.length > 254) return false;
  if (!/^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/.test(s)) return false;
  if (/\.{2,}|@.*@|^[.@]|[.@]$|\.@|@\./.test(s)) return false;
  return true;
}
function track(name, data) { try { if (window.va) window.va("event", Object.assign({ name }, data || {})); } catch (e) {} }
function succeed(form, note, okText) {
  track("waitlist_signup");
  form.innerHTML = '<div style="height:44px;display:flex;align-items:center;justify-content:center;width:100%;color:#fff;font-weight:700;font-size:15px;">✓ You\'re on the list.</div>';
  if (note) { note.textContent = okText; note.classList.remove("err"); note.classList.add("ok"); }
}
function wireSignup(formId, noteId, okText) {
  const form = document.getElementById(formId); const note = document.getElementById(noteId);
  if (!form) return; const baseNote = note ? note.textContent : "";
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type=email]"); const hp = form.querySelector(".hp");
    const email = ((input && input.value) || "").trim();
    if (hp && hp.value) { succeed(form, note, okText); return; }                 // honeypot
    if (Date.now() - PAGE_LOADED < 600) { succeed(form, note, okText); return; } // too fast = bot
    if (!validEmail(email)) {
      if (note) { note.textContent = "Hmm — that doesn't look like a valid email. Mind double-checking?"; note.classList.remove("ok"); note.classList.add("err"); }
      if (input) { input.focus(); input.select(); } return;
    }
    if (note) { note.classList.remove("err"); note.textContent = baseNote; }
    deliver(email);
    succeed(form, note, okText);
  });
  const input = form.querySelector("input[type=email]");
  if (input && note) input.addEventListener("input", () => { if (note.classList.contains("err")) { note.classList.remove("err"); note.textContent = baseNote; } });
}
wireSignup("signupTop", "noteTop", "Done. We'll email you the moment the first drop lands.");
