/* ===========================================================
   UNEMPLOYABLE™ shop teaser
   =========================================================== */

/* ---------- Google Form email capture ----------
   To change the destination form: create a Google Form with one
   short-answer "Email" question, grab the "Get pre-filled link"
   (it contains entry.XXXXX), and update the two values below.
   ACTION must end in /formResponse. Make sure the form is NOT
   restricted to a Workspace org, or public signups silently fail. */
const GFORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScb5RaU6KfAhWmjYifP8sGAfHYI7xUYA14kFy-o8AaP4aoraw/formResponse";
const GFORM_ENTRY  = "entry.774890617";

const PAGE_LOADED = Date.now();
// Pragmatic email format check — lenient enough to never reject a real address,
// strict enough to catch typos and junk. (Deliverability needs a backend; this is format only.)
function validEmail(s) {
  if (s.length > 254) return false;
  if (!/^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/.test(s)) return false;
  if (/\.{2,}|@.*@|^[.@]|[.@]$|\.@|@\./.test(s)) return false;
  return true;
}
function succeed(form, note, okText) {
  form.innerHTML = '<div class="signup-done" style="height:52px;display:flex;align-items:center;justify-content:center;width:100%;color:#fff;font-weight:700;font-size:15px;">✓ You\'re on the list.</div>';
  if (note) { note.textContent = okText; note.classList.remove("err"); note.classList.add("ok"); }
}
function wireSignup(formId, noteId, okText) {
  const form = document.getElementById(formId);
  const note = document.getElementById(noteId);
  if (!form) return;
  const baseNote = note ? note.textContent : "";
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type=email]");
    const hp = form.querySelector(".hp");
    const email = ((input && input.value) || "").trim();

    // bot trap 1: honeypot filled → silently "succeed", never record
    if (hp && hp.value) { succeed(form, note, okText); return; }
    // bot trap 2: submitted implausibly fast (scripts, not humans)
    if (Date.now() - PAGE_LOADED < 600) { succeed(form, note, okText); return; }

    // real-human validation: gentle inline nudge, no hard gate
    if (!validEmail(email)) {
      if (note) { note.textContent = "Hmm — that doesn't look like a valid email. Mind double-checking?"; note.classList.remove("ok"); note.classList.add("err"); }
      if (input) { input.focus(); input.select(); }
      return;
    }
    if (note) { note.classList.remove("err"); note.textContent = baseNote; }

    if (!GFORM_ACTION.includes("REPLACE_WITH")) {
      const body = new URLSearchParams();
      body.append(GFORM_ENTRY, email);
      fetch(GFORM_ACTION, { method: "POST", mode: "no-cors", body }).catch(() => {});
    }
    succeed(form, note, okText);
  });
  // clear the error the moment they start fixing it
  const input = form.querySelector("input[type=email]");
  if (input && note) input.addEventListener("input", () => {
    if (note.classList.contains("err")) { note.classList.remove("err"); note.textContent = baseNote; }
  });
}
wireSignup("signupTop", "noteTop", "Done. We'll email you the moment the first drop lands.");
wireSignup("signupBottom", "noteBottom", "You're in. Early access incoming — no recruiters involved.");

/* ---------- Ticker ---------- */
(function () {
  const track = document.getElementById("tickerTrack");
  if (!track) return;
  const phrases = ["COMING SOON", "● UNEMPLOYABLE™", "● WEAR THE LAYOFF", "● NOT MOVING FORWARD WITH OTHER CANDIDATES", "● DROP 01", "● PRE-REJECTED"];
  const half = phrases.map((p) => `<span>${p}</span>`).join("");
  track.innerHTML = half + half; // duplicate for seamless -50% loop
})();

/* ---------- Year ---------- */
document.querySelectorAll("#yr").forEach((el) => { el.textContent = new Date().getFullYear(); });

/* ---------- Scroll-jack deck: dots, auto-advance, cue ---------- */
(function () {
  const deck = document.getElementById("deck");
  const dotsWrap = document.getElementById("dots");
  if (!deck) return;
  const panels = Array.from(deck.querySelectorAll(".panel"));

  // build progress dots
  panels.forEach((p, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Go to " + (p.dataset.label || ("section " + (i + 1))));
    if (i === 0) b.classList.add("on");
    b.addEventListener("click", () => { go(i); bumpPause(); });
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function currentIndex() { return Math.round(deck.scrollTop / deck.clientHeight); }
  function go(i) {
    i = Math.max(0, Math.min(panels.length - 1, i));
    deck.scrollTo({ top: i * deck.clientHeight, behavior: "smooth" });
  }
  function setActive(i) { dots.forEach((d, n) => d.classList.toggle("on", n === i)); }

  // sync active dot on scroll
  let raf = 0;
  deck.addEventListener("scroll", () => {
    if (raf) return;
    raf = requestAnimationFrame(() => { setActive(currentIndex()); raf = 0; });
  }, { passive: true });

  // auto-advance, paused on interaction / typing
  let paused = false, resumeT = 0, holding = false;
  function bumpPause() {
    paused = true;
    clearTimeout(resumeT);
    if (!holding) resumeT = setTimeout(() => { paused = false; }, 9000);
  }
  ["wheel", "touchstart", "mousedown", "keydown"].forEach((ev) =>
    deck.addEventListener(ev, bumpPause, { passive: true }));
  // never scroll away while someone is typing their email
  deck.addEventListener("focusin", (e) => { if (e.target.tagName === "INPUT") { holding = true; paused = true; clearTimeout(resumeT); } });
  deck.addEventListener("focusout", (e) => { if (e.target.tagName === "INPUT") { holding = false; bumpPause(); } });

  setInterval(() => {
    if (paused || document.hidden) return;
    const next = (currentIndex() + 1) % panels.length;
    go(next);
  }, 5200);

  // scroll cue
  const cue = document.getElementById("scrollCue");
  if (cue) cue.addEventListener("click", () => { go(currentIndex() + 1); bumpPause(); });

  // keyboard arrows
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "PageDown") { go(currentIndex() + 1); bumpPause(); }
    if (e.key === "ArrowUp" || e.key === "PageUp") { go(currentIndex() - 1); bumpPause(); }
  });
})();
