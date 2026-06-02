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

function wireSignup(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type=email]");
    const email = ((input && input.value) || "").trim();
    if (!email) return;
    if (!GFORM_ACTION.includes("REPLACE_WITH")) {
      const body = new URLSearchParams();
      body.append(GFORM_ENTRY, email);
      fetch(GFORM_ACTION, { method: "POST", mode: "no-cors", body }).catch(() => {});
    }
    // mirror success to BOTH signup spots
    document.querySelectorAll(".signup").forEach((f) => {
      f.classList.add("done");
      f.innerHTML = "✓ You're on the list.";
    });
  });
}
wireSignup("signupTop");
wireSignup("signupDock");

/* ---------- Year ---------- */
document.querySelectorAll("#yr").forEach((el) => { el.textContent = new Date().getFullYear(); });

/* ---------- Mosaic: scroll-reveal with cascade ---------- */
(function () {
  const tiles = Array.from(document.querySelectorAll(".mosaic .tile"));
  if (!tiles.length) return;
  if (!("IntersectionObserver" in window)) { tiles.forEach((t) => t.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        const t = en.target;
        t.style.transitionDelay = (Math.random() * 0.18).toFixed(2) + "s";
        t.classList.add("in");
        io.unobserve(t);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  tiles.forEach((t) => io.observe(t));
})();

/* ---------- Cycling text tiles ---------- */
(function () {
  const cyclers = Array.from(document.querySelectorAll(".tile.cycle"));
  cyclers.forEach((tile, idx) => {
    const span = tile.querySelector("span");
    const words = (tile.dataset.cycle || "").split("|").map((s) => s.trim()).filter(Boolean);
    if (!span || words.length < 2) return;
    let i = 0;
    setInterval(() => {
      tile.classList.add("fade");
      setTimeout(() => {
        i = (i + 1) % words.length;
        span.textContent = words[i];
        tile.classList.remove("fade");
      }, 360);
    }, 3200 + idx * 600);
  });
})();
