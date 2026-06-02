/* =============================================================
   UNEMPLOYABLE — endless inbox engine
   Satire by Garrett Bear. Not affiliated with Google or any
   company shown. All emails fictional + auto-generated.
   ============================================================= */

/* ---------- Companies ------------------------------------------------
   The bulk of these are REAL companies Garrett actually applied to
   (pulled from a 250-email "Job Applications" Gmail label), shuffled
   together with a few famous names for recognizability.
   Add a name to REAL_COMPANIES and it just works — domain + avatar
   color are generated automatically. Override the look for specific
   brands in the BRAND map below.                                       */
const REAL_COMPANIES = [
  "Google", "Facebook", "Amazon", "Microsoft", "Mozilla", "IBM", "Intuit",
  "Disney", "PlayStation", "Roku", "Vimeo", "Yelp", "Nextdoor", "Reddit",
  "Snap", "Shopify", "Stripe", "Coinbase", "Plaid", "Mercury", "Ramp",
  "Klaviyo", "Figma", "Figure", "Frame.io", "InVision", "Webflow", "Vercel",
  "Netlify", "GitLab", "HashiCorp", "ClickHouse", "ClickUp", "Cursor", "Loom",
  "Calendly", "Linktree", "ReadMe", "Hightouch", "Metronome", "Movable Ink",
  "Sprinklr", "Podium", "NerdWallet", "Instacart", "DoorDash", "Instabase",
  "Anthropic", "OpenAI", "Luma AI", "Nominal", "Cribl", "HackerOne", "Socure",
  "Transcend", "ID.me", "Kajabi", "Anchorage Digital", "Altruist", "Square",
  "Opendoor", "Open Listings", "Peerspace", "Whatnot", "GOAT", "StubHub",
  "PrizePicks", "Gametime", "Sweetgreen", "Ritual", "Headspace", "Equinox",
  "FIGS", "Bird", "Rivian", "Tesla", "Faraday Future", "Hyperloop One",
  "Cubic", "Esri", "Experian", "Symantec", "NortonLifeLock", "Cylance",
  "Anduril", "Epirus", "CHAOS Industries", "BuildOps", "ServiceTitan",
  "Fetch Rewards", "System1", "Revature", "Atticus", "JOANY", "Fair",
  "Foundation", "Chariot", "PushPress", "Moss", "MomentFeed", "Smarkets",
  "SteelHouse", "Sidebench", "Hawke Media", "Fullscreen", "We Are Envoy",
  "UTA", "CBS Interactive", "AOL", "VSCO", "Ghost", "Girlboss", "Jumpcut",
  "Runway", "TP-Link", "BMW", "Cast & Crew", "Freshworks", "a16z", "CX2",
  "Airtable", "Zoox", "Yum Brands", "BCG Digital Ventures",
  // a few famous names mixed in for the laugh
  "Apple", "Netflix", "Spotify", "Uber", "Lyft", "Adobe", "Dropbox", "Notion",
  "Linear", "Datadog", "Robinhood", "Brex", "Canva", "Duolingo", "Nike",
  "Patreon", "Substack", "Etsy", "Asana", "Zendesk", "Pinterest", "Discord",
  // and the house favorite
  "Ironically Still Hiring Inc."
];

/* Optional per-brand overrides: name -> [domain, avatarColor]. Anything
   not listed gets a slugged domain and a stable auto-generated color.   */
const BRAND = {
  "Google": ["google.com", "#4285F4"], "Facebook": ["facebook.com", "#0866FF"],
  "Amazon": ["amazon.com", "#FF9900"], "Microsoft": ["microsoft.com", "#0078D4"],
  "Apple": ["apple.com", "#555555"], "Netflix": ["netflix.com", "#E50914"],
  "Stripe": ["stripe.com", "#635BFF"], "Figma": ["figma.com", "#A259FF"],
  "Shopify": ["shopify.com", "#5E8E3E"], "Coinbase": ["coinbase.com", "#0052FF"],
  "DoorDash": ["doordash.com", "#FF3008"], "Reddit": ["reddit.com", "#FF4500"],
  "Snap": ["snap.com", "#111111"], "Tesla": ["tesla.com", "#CC0000"],
  "Rivian": ["rivian.com", "#0E1B2C"], "Adobe": ["adobe.com", "#FF0000"],
  "Dropbox": ["dropbox.com", "#0061FF"], "Spotify": ["spotify.com", "#1DB954"],
  "Klaviyo": ["klaviyo.com", "#1D1D1D"], "Ramp": ["ramp.com", "#E8B23A"],
  "Mercury": ["mercury.com", "#5266EB"], "OpenAI": ["openai.com", "#10A37F"],
  "Anthropic": ["anthropic.com", "#D97757"], "GitLab": ["gitlab.com", "#FC6D26"],
  "Vercel": ["vercel.com", "#111111"], "Vimeo": ["vimeo.com", "#1AB7EA"],
  "Yelp": ["yelp.com", "#FF1A1A"], "IBM": ["ibm.com", "#1F70C1"],
  "Intuit": ["intuit.com", "#236CFF"], "Disney": ["disney.com", "#1A3FA0"],
  "PlayStation": ["playstation.com", "#003791"], "Roku": ["roku.com", "#6F1AB1"],
  "Plaid": ["plaid.com", "#111111"], "Instacart": ["instacart.com", "#43B02A"],
  "Headspace": ["headspace.com", "#FF7E1D"], "ID.me": ["id.me", "#2B7DE9"],
  "Frame.io": ["frame.io", "#111111"], "Notion": ["notion.so", "#2F2F2F"],
  "Linear": ["linear.app", "#5E6AD2"], "Datadog": ["datadoghq.com", "#632CA6"],
  "Robinhood": ["robinhood.com", "#00C805"], "Brex": ["brex.com", "#F46A35"],
  "Canva": ["canva.com", "#00C4CC"], "Etsy": ["etsy.com", "#F45800"],
  "Nike": ["nike.com", "#111111"], "Uber": ["uber.com", "#111111"],
  "Lyft": ["lyft.com", "#EA0B8C"], "Duolingo": ["duolingo.com", "#58CC02"],
  "Patreon": ["patreon.com", "#FF424D"], "Substack": ["substack.com", "#FF6719"],
  "Asana": ["asana.com", "#F06A6A"], "Zendesk": ["zendesk.com", "#03363D"],
  "Anduril": ["anduril.com", "#1A1A1A"], "Whatnot": ["whatnot.com", "#111111"],
  "Webflow": ["webflow.com", "#4353FF"], "Pinterest": ["pinterest.com", "#E60023"],
  "Discord": ["discord.com", "#5865F2"], "Loom": ["loom.com", "#625DF5"],
  "Calendly": ["calendly.com", "#006BFF"], "Airtable": ["airtable.com", "#FCB400"],
  "Ironically Still Hiring Inc.": ["stillno.com", "#777777"]
};

/* Slug a name into a domain: "Cast & Crew" -> "castandcrew.com" */
function slugDomain(name) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "") + ".com";
}
/* Stable, pleasant avatar color from a name (Gmail-style). */
function autoColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  const sat = 55 + (h % 20);   // 55–74%
  const lit = 38 + (h % 10);   // 38–47%  (dark enough for white text)
  return `hsl(${hue} ${sat}% ${lit}%)`;
}
/* Normalize into { name, domain, color } */
const COMPANIES = REAL_COMPANIES.map((name) => {
  const o = BRAND[name];
  return { name, domain: o ? o[0] : slugDomain(name), color: o ? o[1] : autoColor(name) };
});

/* Roles to cycle through — Garrett's actual world (product design,
   front-end, design systems, UX) plus a few playful ones to keep the
   endless scroll from feeling repetitive. Add whatever you want.       */
const ROLES = [
  // product design
  "Senior Product Designer", "Product Designer", "Staff Product Designer",
  "Lead Product Designer", "Principal Product Designer", "Product Designer II",
  "Senior UX/UI Designer", "UX/UI Designer", "UX Designer", "Senior UX Designer",
  "Product Design Lead", "Senior Interaction Designer", "Visual Designer",
  "Senior Visual Designer", "Brand & Product Designer", "Designer, Growth",
  // design systems
  "Design Systems Engineer", "Design Systems Designer", "Design Systems Lead",
  "Senior Design Systems Engineer", "Design Technologist", "UX Engineer",
  // front-end / dev
  "Front-End Engineer", "Senior Front-End Engineer", "Front-End Developer",
  "UI Engineer", "Senior UI Engineer", "Web Developer", "Full-Stack Designer",
  "Creative Developer", "Senior Web Engineer", "Front-End Engineer, Design Systems",
  // a wink to the rest of Garrett's world
  "Head of Design (you, specifically, no)", "Founding Designer",
  "Design Engineer", "Senior Designer, Anything Really"
];

/* Sender personas */
const SENDERS = [
  ["Talent Acquisition", "talent"], ["Recruiting Team", "recruiting"],
  ["People Operations", "people"], ["No Reply", "no-reply"],
  ["University Recruiting", "careers"], ["Candidate Experience", "candidates"],
  ["The Hiring Team", "jobs"], ["Workday Notifications", "notifications"],
  ["Greenhouse", "no-reply"], ["Recruitment", "talent-acquisition"]
];

/* The genre. Sharp, sarcastic, but unmistakably the real thing.
   {label} = role, {company} = company, {first} = first name.        */
const TEMPLATES = [
  {
    label: "rejected",
    subject: "Update on your application for {label}",
    body: [
      "Hi {first},",
      "Thank you for your interest in the {label} position at {company} and for taking the time to apply.",
      "After careful consideration, we've decided to move forward with other candidates whose qualifications more closely align with our current needs. This was a difficult decision, as we received many strong applications.",
      "We were genuinely impressed by your background and encourage you to apply for future openings that match your skills.",
      "We wish you the very best in your job search.",
      "Warm regards,"
    ]
  },
  {
    label: "rejected",
    subject: "Your application to {company}",
    body: [
      "Dear {first},",
      "Thank you for applying to the {label} role at {company}.",
      "We've completed our review and, while your experience is impressive, we will not be moving forward with your application at this time.",
      "Please don't take this as a reflection of your abilities. We had an exceptionally competitive pool.",
      "We'll keep your resume on file should a suitable opportunity arise.",
      "Best,"
    ]
  },
  {
    label: "final",
    subject: "Regarding your candidacy — {label}",
    body: [
      "Hello {first},",
      "We appreciate you taking the time to interview with the team for the {label} position.",
      "It was a tough call, but we've chosen to proceed with another candidate whose experience was a slightly better fit for what we're looking for right now.",
      "We really enjoyed getting to know you and hope our paths cross again.",
      "Thank you again for your interest in {company}.",
      "Sincerely,"
    ]
  },
  {
    label: "rejected",
    subject: "Thank you for your interest in {company}",
    body: [
      "Hi {first},",
      "Thanks so much for your application for {label}.",
      "We received an overwhelming number of qualified applicants, and unfortunately we are unable to move forward with your candidacy at this time.",
      "We know job searching is hard, and we don't take your effort for granted.",
      "We wish you success in your search and hope you'll consider {company} again in the future.",
      "Kind regards,"
    ]
  },
  {
    label: "ghosted",
    subject: "Your application status has been updated",
    body: [
      "Hi {first},",
      "This is an automated message regarding your application for {label} at {company}.",
      "The status of your application has changed to: Not Selected.",
      "No further action is required on your part. Please do not reply to this message, as this inbox is not monitored.",
      "Thank you for your interest in {company}.",
      "— This is an automated notification —"
    ]
  },
  {
    label: "rejected",
    subject: "An update from the {company} hiring team",
    body: [
      "Dear {first},",
      "Thank you for the time and energy you invested in applying for the {label} role.",
      "After much deliberation, we have decided not to proceed with your application. We were fortunate to connect with several candidates and have moved forward with someone whose profile most closely matched the role.",
      "This decision is not a judgment of your talent or potential.",
      "We genuinely wish you all the best.",
      "Warmly,"
    ]
  },
  {
    label: "final",
    subject: "Following up on your {label} interview",
    body: [
      "Hi {first},",
      "Thank you again for interviewing for the {label} position at {company}.",
      "We want to be transparent: we've decided to pause hiring for this role and will not be extending an offer at this time.",
      "Budgets change, priorities shift, and unfortunately the timing didn't work out.",
      "We'd love to stay in touch for when things open back up.",
      "All the best,"
    ]
  },
  {
    label: "rejected",
    subject: "Re: {label} — application outcome",
    body: [
      "Hello {first},",
      "We hope this message finds you well.",
      "After reviewing your application for {label}, we've determined that we will not be advancing your candidacy. We were particularly impressed by many aspects of your background, but ultimately selected a candidate with a more specific skill set.",
      "We encourage you to keep an eye on our careers page for roles that may be a stronger match.",
      "Thank you for considering {company}.",
      "Respectfully,"
    ]
  },
  {
    label: "ghosted",
    subject: "We've reviewed your application",
    body: [
      "Hi {first},",
      "Thank you for applying to {company} for the {label} position.",
      "We're reaching out to let you know that we won't be moving forward. We received your application along with hundreds of others, and the bar this cycle was incredibly high.",
      "While this isn't the outcome you were hoping for, we hope you'll keep us in mind down the road.",
      "Take care,"
    ]
  },
  {
    label: "rejected",
    subject: "Important update regarding your {company} application",
    body: [
      "Dear {first},",
      "Thank you for your patience throughout our process for the {label} role.",
      "We know waiting is the hardest part, so we won't bury the news: we've decided to go in a different direction.",
      "We were genuinely torn, and we hope this isn't goodbye.",
      "Wishing you the best of luck, truly.",
      "On behalf of everyone at {company},"
    ]
  }
];

/* Snippets shown in the row (just the gut-punch sentence) */
const SNIPPETS = [
  "After careful consideration, we've decided to move forward with other candidates…",
  "Unfortunately, we will not be moving forward with your application at this time…",
  "This was a difficult decision, as we received many strong applications…",
  "We'll keep your resume on file should a suitable opportunity arise…",
  "While your experience is impressive, we've chosen another candidate…",
  "We were genuinely impressed, but the timing didn't work out…",
  "The status of your application has changed to: Not Selected…",
  "We've decided to pause hiring for this role at this time…",
  "We received an overwhelming number of qualified applicants…",
  "Please don't take this as a reflection of your abilities…"
];

const FIRST_NAME = "Garrett";

/* ---------- Deterministic RNG so each row is stable ---------- */
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];

/* ---------- Build one email from its index ---------- */
const START = new Date();          // today
const STEP_HOURS_MIN = 5;          // emails get older as you scroll
const STEP_HOURS_MAX = 34;

let cursorDate = new Date(START);

function buildEmail(i) {
  const rng = mulberry32(i * 2654435761 + 12345);
  const c = pick(rng, COMPANIES);
  const cName = c.name, cDomain = c.domain, cColor = c.color;
  const role = pick(rng, ROLES);
  const [senderName, senderUser] = pick(rng, SENDERS);
  const tpl = TEMPLATES[Math.floor(rng() * TEMPLATES.length)];
  const snippet = pick(rng, SNIPPETS);

  // walk the date backwards by a pseudo-random gap
  if (i > 0) {
    const gap = STEP_HOURS_MIN + rng() * (STEP_HOURS_MAX - STEP_HOURS_MIN);
    cursorDate = new Date(cursorDate.getTime() - gap * 3600 * 1000);
  }
  const date = new Date(cursorDate);

  const fill = (s) => s.replaceAll("{label}", role).replaceAll("{company}", cName).replaceAll("{first}", FIRST_NAME);

  return {
    i,
    company: cName,
    domain: cDomain,
    color: cColor,
    role,
    senderName: `${cName} ${senderName}`,
    senderEmail: `${senderUser}@${cDomain}`,
    subject: fill(tpl.subject),
    body: tpl.body.map(fill),
    sigCompany: cName,
    label: tpl.label,
    snippet,
    date,
    unread: rng() > 0.45,
    starred: false,
    egg: false
  };
}

/* ---------- The one (1) good email: the Easter egg ---------- */
const EGG_INDEX = 6; // appears near the top, a glimmer of hope. it is not.
function buildEgg() {
  const date = new Date(cursorDate);
  return {
    i: EGG_INDEX,
    company: "CVS",
    domain: "cvs.com",
    color: "#CC0000",
    role: "Loyal Customer",
    senderName: "CVS Pharmacy ExtraCare",
    senderEmail: "receipts@cvs.com",
    subject: "🧾 Your receipt is ready (and it's longer than your career)",
    body: [
      "Hi {first},".replace("{first}", FIRST_NAME),
      "Thank you for shopping at CVS. Your receipt has printed.",
      "It is currently 14 feet long and still going. We've attached 47 coupons for things you'll never buy, 3 surveys, and a $0.25 ExtraBucks reward that expires before you reach the parking lot.",
      "Unlike every employer you've contacted, CVS will never stop sending you things. We see you. We print for you.",
      "This receipt is a tribute to the one that started it all.",
      "Forever yours (literally, this receipt does not end),"
    ],
    sigCompany: "CVS",
    label: "final",
    snippet: "Your receipt is ready and it is longer than your entire career. A tribute…",
    date,
    unread: true,
    starred: true,
    egg: true
  };
}

/* ---------- Rendering ---------- */
const list = document.getElementById("emailList");
const loader = document.getElementById("loader");
let index = 0;
const BATCH = 25;

const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fmtDate(d) {
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  if (sameDay) {
    let h = d.getHours(), m = d.getMinutes();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2,"0")} ${ampm}`;
  }
  if (d.getFullYear() === now.getFullYear()) return `${monthNames[d.getMonth()]} ${d.getDate()}`;
  return `${d.getMonth()+1}/${d.getDate()}/${String(d.getFullYear()).slice(2)}`;
}
function fmtFull(d) {
  return d.toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" });
}
const labelClass = { rejected: "lbl-rejected", ghosted: "lbl-ghosted", final: "lbl-final" };
const labelText  = { rejected: "Rejected", ghosted: "Auto-reply", final: "So close" };

const store = {}; // index -> email object

function renderRow(email) {
  const li = document.createElement("li");
  li.className = "email-row " + (email.unread ? "unread" : "read");
  li.dataset.i = email.i;
  if (email.egg) li.classList.add("egg-row");

  li.innerHTML = `
    <input type="checkbox" class="er-check" aria-label="Select" />
    <span class="er-star ${email.starred ? "on" : ""}" role="button" aria-label="Star" title="Star">${email.starred ? "★" : "☆"}</span>
    <span class="er-avatar" style="background:${email.color}">${email.company[0]}</span>
    <span class="er-sender">${email.senderName}</span>
    <span class="er-main">
      <span class="er-label ${labelClass[email.label]}">${labelText[email.label]}</span>
      <span class="er-subject">${email.subject}</span>
      <span class="er-snippet"> — ${email.snippet}</span>
    </span>
    <span class="er-date">${fmtDate(email.date)}</span>
  `;

  // star toggle (doesn't open modal)
  li.querySelector(".er-star").addEventListener("click", (e) => {
    e.stopPropagation();
    email.starred = !email.starred;
    const s = e.currentTarget;
    s.classList.toggle("on", email.starred);
    s.textContent = email.starred ? "★" : "☆";
  });
  li.querySelector(".er-check").addEventListener("click", (e) => e.stopPropagation());

  li.addEventListener("click", () => openEmail(email.i));
  return li;
}

function loadBatch() {
  const frag = document.createDocumentFragment();
  for (let n = 0; n < BATCH; n++) {
    const email = (index === EGG_INDEX) ? buildEgg() : buildEmail(index);
    // keep the egg from also advancing cursor weirdly: buildEgg used current cursorDate
    if (index === EGG_INDEX) {
      // nudge cursor back a little so following emails keep descending
      cursorDate = new Date(cursorDate.getTime() - 8 * 3600 * 1000);
    }
    store[index] = email;
    frag.appendChild(renderRow(email));
    index++;
  }
  list.appendChild(frag);
}

/* ---------- Modal ---------- */
const overlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");

function openEmail(i) {
  const e = store[i];
  if (!e) return;
  e.unread = false;
  const row = list.querySelector(`.email-row[data-i="${i}"]`);
  if (row) { row.classList.remove("unread"); row.classList.add("read"); }

  modalBody.parentElement.classList.toggle("egg", !!e.egg);

  modalBody.innerHTML = `
    <h1 class="mb-subject">
      <span class="er-label ${labelClass[e.label]}">${labelText[e.label]}</span>
      ${e.subject}
    </h1>
    <div class="mb-head">
      <span class="mb-avatar" style="background:${e.color}">${e.company[0]}</span>
      <div class="mb-meta">
        <div class="mb-from">${e.senderName} <span class="mb-email">&lt;${e.senderEmail}&gt;</span></div>
        <div class="mb-to">to me</div>
      </div>
      <div class="mb-date">${fmtFull(e.date)}</div>
    </div>
    <div class="mb-content">
      ${e.body.map((p, idx) => idx === e.body.length - 1
        ? `<p class="sig">${p}<br>The ${e.sigCompany} Team${e.egg ? "" : " · This inbox is not monitored"}</p>`
        : `<p>${p}</p>`).join("")}
    </div>
    <div class="mb-cta">
      <p>${e.egg
        ? "At least someone wants you around. Wear it with pride:"
        : "Rejected again? You're not unemployed. You're <strong>UNEMPLOYABLE™</strong>."}</p>
      <a href="https://garrettbear.com" target="_blank" rel="noopener">Shop the brand →</a>
    </div>
    <div class="mb-actions">
      <button class="mb-btn" id="replyBtn">↩ Reply</button>
      <button class="mb-btn" id="fwdBtn">↪ Forward to mom</button>
    </div>
  `;

  modalBody.querySelector("#replyBtn").addEventListener("click", () => {
    alert("This inbox is not monitored. It never was.");
  });
  modalBody.querySelector("#fwdBtn").addEventListener("click", () => {
    alert("Forwarded. She still thinks you should 'just call the manager.'");
  });

  overlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.hidden = true;
  document.body.style.overflow = "";
}
document.getElementById("modalBack").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });

/* ---------- About / disclaimer ---------- */
const aboutOverlay = document.getElementById("aboutOverlay");
document.getElementById("aboutBtn").addEventListener("click", () => {
  aboutOverlay.hidden = false; document.body.style.overflow = "hidden";
});
function closeAbout() { aboutOverlay.hidden = true; document.body.style.overflow = ""; }
document.getElementById("aboutClose").addEventListener("click", closeAbout);
aboutOverlay.addEventListener("click", (e) => { if (e.target === aboutOverlay) closeAbout(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); closeAbout(); }
});

/* ---------- Infinite scroll ---------- */
const sentinel = loader;
const io = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadBatch();
    updateCounter();
  }
}, { rootMargin: "600px" });
io.observe(sentinel);

/* fallback for browsers/scroll containers */
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 800) {
    loadBatch(); updateCounter();
  }
});

function updateCounter() {
  document.getElementById("counter").textContent = `1–${index} of many, many more`;
}

/* ---------- Mobile sidebar ---------- */
const sidebar = document.getElementById("sidebar");
document.getElementById("menuBtn").addEventListener("click", () => sidebar.classList.toggle("open"));

/* ---------- Refresh = false hope ---------- */
document.getElementById("refreshBtn").addEventListener("click", function () {
  this.style.transition = "transform .6s"; this.style.transform = "rotate(360deg)";
  setTimeout(() => { this.style.transform = "none"; }, 600);
});

/* ---------- Search does nothing, beautifully ---------- */
const search = document.getElementById("searchInput");
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const ph = ["No results.", "Still no results.", "Have you tried being a culture fit?", "0 matches for hope.", "Did you mean: unemployable?"];
    search.value = "";
    search.placeholder = ph[Math.floor(Math.random() * ph.length)];
  }
});

/* ---------- Go ---------- */
loadBatch();
loadBatch();
updateCounter();

/* Konami-ish: type "hire" anywhere for a surprise */
let buf = "";
document.addEventListener("keydown", (e) => {
  if (e.key.length === 1) buf = (buf + e.key.toLowerCase()).slice(-4);
  if (buf === "hire") {
    buf = "";
    alert("LOL. No.\n\n— Every company, 2024–2026");
  }
});
