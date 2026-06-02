/* ===========================================================
   UNEMPLOYABLE™ shop teaser
   =========================================================== */

/* ---------- Google Form email capture ----------
   Create a Google Form with ONE short-answer question ("Email"),
   then:
   1) Send → <> (embed) OR click the form's "Get pre-filled link",
      enter a test value, copy link. The URL contains entry.XXXXXXX.
   2) Paste the form ID + that entry id below. Action URL ends in
      /formResponse (NOT /viewform).
   Until then the form still shows success, but nothing is recorded. */
const GFORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScb5RaU6KfAhWmjYifP8sGAfHYI7xUYA14kFy-o8AaP4aoraw/formResponse";
const GFORM_ENTRY  = "entry.774890617";

function wireSignup(formId, noteId, okText) {
  const form = document.getElementById(formId);
  const note = document.getElementById(noteId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type=email]");
    const email = (input && input.value || "").trim();
    if (!email) return;
    if (!GFORM_ACTION.includes("REPLACE_WITH_FORM_ID")) {
      const body = new URLSearchParams();
      body.append(GFORM_ENTRY, email);
      fetch(GFORM_ACTION, { method: "POST", mode: "no-cors", body }).catch(() => {});
    } else {
      console.warn("[shop] Google Form not configured yet — set GFORM_ACTION and GFORM_ENTRY in script.js.");
    }
    form.innerHTML = '<div class="signup-done" style="height:52px;display:flex;align-items:center;justify-content:center;width:100%;color:#fff;font-weight:700;font-size:15px;">✓ You\'re on the list.</div>';
    if (note) { note.textContent = okText; note.classList.add("ok"); }
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
