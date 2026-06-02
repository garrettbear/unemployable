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
  "Google", "Meta", "Facebook", "X", "Amazon", "Microsoft", "Mozilla", "IBM", "Intuit",
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
  // more real ones pulled from the forwarded emails
  "LaunchDarkly", "Addepar", "Second Nature", "Premier Lacrosse League",
  "Taco Bell", "Zoo", "Gametime United",
  "Monarch Money", "Era", "Parachute Home", "JPL", "Dave", "Ring",
  // a few famous names mixed in for the laugh
  "Airbnb", "Apple", "Netflix", "Spotify", "Uber", "Lyft", "Adobe", "Dropbox", "Notion",
  "Linear", "Datadog", "Robinhood", "Brex", "Canva", "Duolingo", "Nike",
  "Patreon", "Substack", "Etsy", "Asana", "Zendesk", "Pinterest", "Discord",
  // and the house favorite
  "Ironically Still Hiring Inc."
];

/* Optional per-brand overrides: name -> [domain, avatarColor]. Anything
   not listed gets a slugged domain and a stable auto-generated color.   */
const BRAND = {
  "Google": ["google.com", "#4285F4"], "Facebook": ["facebook.com", "#0866FF"],
  "Meta": ["meta.com", "#0866FF"], "X": ["x.com", "#000000"],
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
  "Airbnb": ["airbnb.com", "#FF5A5F"], "Taco Bell": ["tacobell.com", "#702082"],
  "LaunchDarkly": ["launchdarkly.com", "#3D3D3D"], "Addepar": ["addepar.com", "#1B6FB3"],
  "Zoo": ["zoo.dev", "#111111"], "Premier Lacrosse League": ["premierlacrosseleague.com", "#0A1A2F"],
  "JPL": ["jpl.nasa.gov", "#1A3A6B"], "Ring": ["ring.com", "#1B97E0"],
  "Monarch Money": ["monarchmoney.com", "#5A31F4"], "Dave": ["dave.com", "#111111"],
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
  },
  {
    label: "rejected",
    subject: "An update on the {label} role",
    body: [
      "Hi {first},",
      "Thank you for applying to the {label} position at {company}.",
      "After careful consideration, we've decided to move forward with an AI tool that does about 80% of this role for 0% of the salary. It works weekends, never asks about equity, and doesn't read these emails either.",
      "We were genuinely impressed by how human you are. Unfortunately, that's no longer one of the requirements.",
      "We'll keep your resume in a training dataset somewhere.",
      "Warm regards,"
    ]
  },
  {
    label: "ghosted",
    subject: "Your application was reviewed by our AI",
    body: [
      "Hi {first},",
      "Your application for {label} was reviewed, scored, and declined by an automated system in roughly 0.3 seconds.",
      "No human at {company} has seen it, and — if we're being honest — no human ever will. The model rated you \"qualified, but redundant.\"",
      "This decision was made with 94% confidence and 0% empathy.",
      "— Automated Talent Intelligence at {company}"
    ]
  },
  {
    label: "final",
    subject: "Regarding the {label} position",
    body: [
      "Hello {first},",
      "Thanks for interviewing for the {label} role. You did great — genuinely better than we expected.",
      "That said, we asked an AI to do the take-home assignment and it finished before you'd even said hello. So.",
      "It's not you, it's the inevitable march of progress. (Okay, it's a little bit you.)",
      "We wish you and your fellow humans the very best.",
      "Sincerely,"
    ]
  },
  {
    label: "rejected",
    subject: "Thank you for your interest in {company}",
    body: [
      "Dear {first},",
      "We appreciate you applying for {label}.",
      "We've paused this search while we evaluate whether the role can be done by a model with a monthly subscription instead of a person with a pulse.",
      "Early signs suggest: yes. Sorry you found out this way.",
      "Please don't take it personally — we're doing this to literally everyone.",
      "Best,"
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
  "Please don't take this as a reflection of your abilities…",
  "We've decided to move forward with an AI tool that works weekends…",
  "Your application was scored and declined by an automated system in 0.3 seconds…",
  "We asked an AI to do the take-home and it finished before you said hello…",
  "The model rated you 'qualified, but redundant'…"
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
  let c = pick(rng, COMPANIES);
  // Pinned at the very top (most recent): Ramp — the one that stung the most.
  if (i === 0) c = COMPANIES.find((x) => x.name === "Ramp") || c;
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

/* ---------- Promotions tab: the dream, 90% off ---------- */
const PROMO = [
  { c: "LinkedIn Premium", d: "linkedin.com", color: "#0A66C2", from: "LinkedIn", user: "premium",
    s: "You're 1 of 4,827 applicants. Stand out (you won't).",
    snippet: "See exactly how many people are more qualified than you — 50% off…",
    body: ["Hi Garrett,", "You've applied to 61 jobs this month, and other applicants are getting seen first.", "Upgrade to Premium and we'll show you precisely how many people are more qualified than you. Spoiler: it's all of them.", "Try 1 month free, then $39.99/mo, forever."] },
  { c: "Indeed", d: "indeed.com", color: "#2557A7", from: "Indeed", user: "alerts",
    s: "147 new jobs you're technically unqualified for",
    snippet: "\"Entry level\" · 8+ years experience required · unpaid…",
    body: ["Hi Garrett,", "147 new jobs match your search for \"anything, please.\"", "Highlights: an \"entry-level\" role requiring 8 years of experience, a \"competitive salary\" they won't name, and a 6-round interview for a 3-month contract.", "Apply now — they'll definitely read it."] },
  { c: "ZipRecruiter", d: "ziprecruiter.com", color: "#1A8754", from: "ZipRecruiter", user: "match",
    s: "Your job match score this week: 12% 📉",
    snippet: "The hiring manager has viewed your profile 0 times…",
    body: ["Hi Garrett,", "Great news: a hiring manager almost looked at your application!", "Your match score is 12%, down from last week's 14%. Upgrade to TrafficBoost to be ignored faster.", "We've also notified 0 recruiters about you."] },
  { c: "MasterClass", d: "masterclass.com", color: "#E50914", from: "MasterClass", user: "learn",
    s: "Learn to be Employable from people born employed",
    snippet: "30 lessons taught by founders who 'just dropped out'…",
    body: ["Hi Garrett,", "Learn resilience from a billionaire who was given a small loan of one million dollars.", "This week: \"Networking,\" \"Grit,\" and \"Why You Should Have Founded a Company in 2009.\"", "Only $180/year. Certificate not recognized by anyone."] },
  { c: "UNEMPLOYABLE", d: "garrettbear.com", color: "#111111", from: "UNEMPLOYABLE™", user: "shop",
    s: "Your dream job, 90% off (it's a hoodie)",
    snippet: "The only offer letter you'll get this year ships in 3–5 days…",
    body: ["Hi Garrett,", "We can't get you hired, but we can get you a hoodie that explains the situation.", "New drop — the \"AI Took My Job\" collection: \"Replaced by a Prompt\" tee, \"94% Confidence, 0% Empathy\" crewneck, and the \"Still More Human Than Required\" dad hat.", "This is the only place that wants you."],
    cta: "shop" },
  { c: "UNEMPLOYABLE", d: "garrettbear.com", color: "#c5221f", from: "UNEMPLOYABLE™", user: "drop",
    s: "🤖 New: the 'AI Took My Job' collection just dropped",
    snippet: "Wear the layoff. Before a model wears your old badge…",
    body: ["Hi Garrett,", "They automated the role. We immortalized the feeling.", "Featuring: \"I Was Beta. They Shipped Someone Else,\" \"Trained My Replacement (It Was Software),\" and \"Hello, I'm Human (Apparently a Downside).\"", "Ethically sourced cotton. Unethically sourced job market."],
    cta: "shop" },
  { c: "Robinhood", d: "robinhood.com", color: "#00C805", from: "Robinhood", user: "no-reply",
    s: "Put your unemployment check to work 📈",
    snippet: "What if your last $400 could become your last $40…",
    body: ["Hi Garrett,", "You have time and no income — the perfect day-trader.", "Turn your severance into a thrilling story you'll tell a financial advisor you can't afford.", "Options trading: because the job market wasn't volatile enough."] },
  { c: "Coursera", d: "coursera.org", color: "#0056D2", from: "Coursera", user: "no-reply",
    s: "Get a certificate nobody asked for — 90% off",
    snippet: "Add 11 more credentials to the resume they won't open…",
    body: ["Hi Garrett,", "You're 1 course away from being overqualified and still unhired.", "New: \"Prompt Engineering for People Whose Jobs Were Replaced by Prompt Engineering.\"", "Enroll today. Finish never."] },
  { c: "DoorDash", d: "doordash.com", color: "#FF3008", from: "DoorDash", user: "no-reply",
    s: "Treat yourself — you've earned the rejection 🍔",
    snippet: "$0 delivery on the sorrow meal. Tip not included (you can't)…",
    body: ["Hi Garrett,", "Rough week? Rough 18 months?", "Get $5 off when you spend $40 you absolutely should not spend.", "Or DoorDash is hiring Dashers. Just saying. We're always saying."] },
  { c: "Calendly", d: "calendly.com", color: "#006BFF", from: "Calendly", user: "no-reply",
    s: "You have 0 meetings scheduled. Upgrade for more nobody.",
    snippet: "Your availability: extremely. Their interest: not…",
    body: ["Hi Garrett,", "Your calendar is wide open — inspiringly so.", "Upgrade to Pro to send booking links that recruiters will leave un-clicked in higher definition.", "Your time is valuable. To you. Only to you."] },
  { c: "Grammarly", d: "grammarly.com", color: "#15C39A", from: "Grammarly", user: "insights",
    s: "Your cover letter scored 98. You still didn't get it.",
    snippet: "Tone: confident. Outcome: rejected. Correlation: none…",
    body: ["Hi Garrett,", "Your writing was clearer than 94% of users this week!", "It was read by 0% of hiring managers. But grammatically, you were perfect.", "Upgrade to Premium to be ignored eloquently."] },
  { c: "Notion", d: "notion.so", color: "#2F2F2F", from: "Notion", user: "team",
    s: "Organize all your rejections in one beautiful place",
    snippet: "New template: 'Job Hunt (250 rows and growing)'…",
    body: ["Hi Garrett,", "Turn chaos into clarity with the Rejection Tracker template.", "Kanban columns: Applied, Ghosted, Rejected, and a 'Got an Interview' column you'll never use.", "Now with AI to summarize why."] },
  { c: "Audible", d: "audible.com", color: "#FF9900", from: "Audible", user: "no-reply",
    s: "1 free credit: 'Atomic Habits for the Unemployed'",
    snippet: "12 hours of a man telling you to wake up at 5am for nothing…",
    body: ["Hi Garrett,", "You have time to listen now. So much time.", "This month: \"Deep Work (For No One),\" \"The Subtle Art of Not Getting a Callback,\" and \"Sleep.\"", "Cancel anytime, like employers cancel on you."] },
  { c: "WeWork", d: "wework.com", color: "#111111", from: "WeWork", user: "no-reply",
    s: "Pay $300/mo to look employed in public",
    snippet: "Free cold brew. Free wifi. The illusion of having somewhere to be…",
    body: ["Hi Garrett,", "Why apply for jobs at home when you can apply for jobs at a desk that costs money?", "Surround yourself with founders pitching apps that are just 'Uber but for X.'", "Hot desk available. Hot prospects not included."] },
  { c: "Squarespace", d: "squarespace.com", color: "#111111", from: "Squarespace", user: "no-reply",
    s: "Build a personal site recruiters won't visit",
    snippet: "garrettbear.com is live and beautifully un-clicked…",
    body: ["Hi Garrett,", "Your portfolio looks incredible. Truly. To you.", "Add a contact form so rejections can reach you in even more channels.", "Domain renews automatically, unlike your hope."] }
];

/* ---------- Social tab: everyone's hiring but you ---------- */
const SOCIAL = [
  { c: "LinkedIn", d: "linkedin.com", color: "#0A66C2", from: "LinkedIn", user: "notifications",
    s: "12 people in your network started new positions 🎉",
    snippet: "Including the intern you trained. He's a Director now…",
    body: ["Hi Garrett,", "Big week for everyone you know!", "The intern you trained is now a Director. Your college roommate 'joined an incredible team.' A guy you met once is 'thrilled to announce.'", "React with 👏 like you mean it."] },
  { c: "LinkedIn", d: "linkedin.com", color: "#0A66C2", from: "LinkedIn", user: "notifications",
    s: "You appeared in 0 searches this week",
    snippet: "Down 0% from last week, which was also 0…",
    body: ["Hi Garrett,", "Your profile appeared in 0 recruiter searches this week.", "Tip: post more. Engagement is down because you've only posted 'Open to Work' 41 times.", "Consider a selfie with the caption 'Some personal news…'"] },
  { c: "LinkedIn", d: "linkedin.com", color: "#0A66C2", from: "LinkedIn", user: "notifications",
    s: "Add the #OpenToWork frame (the green ring of shame)",
    snippet: "Let recruiters know you're available — and slightly desperate…",
    body: ["Hi Garrett,", "Stand out with the #OpenToWork photo frame!", "Nothing says 'hire me' like a green ring announcing 18 months of nobody hiring you.", "73% of users report mild humiliation. Worth it?"] },
  { c: "LinkedIn", d: "linkedin.com", color: "#0A66C2", from: "LinkedIn", user: "notifications",
    s: "Sarah M. and 8 others are 'humbled and honored'",
    snippet: "'Pinch me! After an incredible journey I'm thrilled to…'…",
    body: ["Hi Garrett,", "Your network is announcing things.", "'Humbled to share…' 'Pinch me!' 'After an incredible journey…' 'None of this would be possible without…'", "You've drafted a post 14 times. You posted none."] },
  { c: "LinkedIn", d: "linkedin.com", color: "#0A66C2", from: "LinkedIn", user: "notifications",
    s: "Someone viewed your profile and immediately left",
    snippet: "1 viewer. Time on page: 0.4 seconds. They're 'in your industry'…",
    body: ["Hi Garrett,", "You had a profile view!", "They stayed for 0.4 seconds. Upgrade to Premium to see exactly who didn't care.", "It was a recruiter. It is always a recruiter. They will not message you."] },
  { c: "LinkedIn", d: "linkedin.com", color: "#0A66C2", from: "LinkedIn", user: "notifications",
    s: "Congrats on your work anniversary! 🎈",
    snippet: "1.5 years at: Between Opportunities. Say congrats!…",
    body: ["Hi Garrett,", "Help celebrate a milestone!", "You're celebrating 1 year and 6 months at 'Actively Looking.'", "Your connections have been notified. 0 have reacted."] },
  { c: "X", d: "x.com", color: "#000000", from: "X", user: "notify",
    s: "Tech Twitter is hiring. You are not.",
    snippet: "'DMs open for the right person' — 4,000 replies, none you…",
    body: ["Hi Garrett,", "A founder you follow tweeted 'we're hiring rockstars, DMs open!'", "You replied with your portfolio. So did 4,000 people. The thread is now an argument about return-to-office.", "Your reply has 0 likes."] },
  { c: "Instagram", d: "instagram.com", color: "#E1306C", from: "Instagram", user: "no-reply",
    s: "your_old_coworker tagged you in '#blessed new role'",
    snippet: "First day at the dream company! So grateful 🙏 (you applied there twice)…",
    body: ["Hi Garrett,", "your_old_coworker posted: 'First day!! So blessed 🙏 #newbeginnings #dreamjob'", "It's at the company that rejected you in round 3. The office has a slide.", "Like the photo. Be the bigger person. Cry first."] },
  { c: "Glassdoor", d: "glassdoor.com", color: "#0CAA41", from: "Glassdoor", user: "no-reply",
    s: "5 people reviewed a company you'll never work at",
    snippet: "'Great culture, free snacks, impossible to get hired' — 4.1★…",
    body: ["Hi Garrett,", "The company that ghosted you has a 4.1★ rating.", "Top review: 'Amazing people, terrible interview process, never heard back.' 247 found this helpful.", "You found it personally devastating."] },
  { c: "Meetup", d: "meetup.com", color: "#ED1C40", from: "Meetup", user: "no-reply",
    s: "Tonight: 'Networking for People Who Hate Networking'",
    snippet: "Bring business cards for a job you don't have…",
    body: ["Hi Garrett,", "47 people are going to 'Founders, Builders & Vibes.'", "Bring a stack of business cards listing a title you invented. Exchange them with people who will never email you.", "There will be lukewarm beer and a man pitching a fitness app."] },
  { c: "LinkedIn", d: "linkedin.com", color: "#0A66C2", from: "LinkedIn", user: "notifications",
    s: "A recruiter is hiring for a role you'd be 'perfect' for",
    snippet: "Posted 4 minutes ago · 900 applicants · already closed…",
    body: ["Hi Garrett,", "'I'm hiring! Tag someone perfect for this 👇'", "You tagged yourself. The post now has 900 comments and 1,200 applicants. It was posted 4 minutes ago.", "The role is already 'no longer accepting applications.'"] },
  { c: "Strava", d: "strava.com", color: "#FC4C02", from: "Strava", user: "no-reply",
    s: "You've been very active this week (it's walks)",
    snippet: "12 'thinking walks.' 0 of them led to a job…",
    body: ["Hi Garrett,", "Huge week! You logged 12 walks, mostly described as 'clearing my head.'", "Your pace is improving. Your prospects are not.", "Give 3 of your connections kudos for their marathon. They have jobs AND hobbies."] }
];

/* Build a row from a pool item (promotions / social), looping forever. */
function buildPool(i, pool, labelType) {
  const rng = mulberry32(i * 2654435761 + (labelType === "promo" ? 911 : 733));
  const item = pool[Math.floor(rng() * pool.length)];
  if (i > 0) {
    const gap = STEP_HOURS_MIN + rng() * (STEP_HOURS_MAX - STEP_HOURS_MIN);
    cursorDate = new Date(cursorDate.getTime() - gap * 3600 * 1000);
  }
  const date = new Date(cursorDate);
  const domain = item.d || slugDomain(item.c);
  return {
    i,
    company: item.c,
    domain,
    color: item.color || autoColor(item.c),
    role: "",
    senderName: item.from || item.c,
    senderEmail: (item.user || "no-reply") + "@" + domain,
    subject: item.s,
    body: item.body,
    sigCompany: item.from || item.c,
    label: labelType,
    snippet: item.snippet || item.body[1] || item.body[0],
    date,
    unread: rng() > 0.4,
    starred: false,
    egg: false,
    cta: item.cta || labelType
  };
}

/* ---------- Rendering ---------- */
const list = document.getElementById("emailList");
const loader = document.getElementById("loader");
let index = 0;
let currentTab = "primary";
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
const labelClass = { rejected: "lbl-rejected", ghosted: "lbl-ghosted", final: "lbl-final", promo: "lbl-promo", social: "lbl-social" };
const labelText  = { rejected: "Rejected", ghosted: "Auto-reply", final: "So close", promo: "Promo", social: "FYI" };

const store = {}; // index -> email object

function renderRow(email) {
  const li = document.createElement("li");
  li.className = "email-row " + (email.unread ? "unread" : "read");
  li.dataset.i = email.i;
  li.tabIndex = 0;
  li.setAttribute("role", "button");
  li.setAttribute("aria-label", `${email.unread ? "Unread, " : ""}${email.senderName}: ${email.subject}`);
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
  li.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openEmail(email.i); }
  });
  return li;
}

function buildRow(i) {
  if (currentTab === "promotions") return buildPool(i, PROMO, "promo");
  if (currentTab === "social") return buildPool(i, SOCIAL, "social");
  // primary
  const email = (i === EGG_INDEX) ? buildEgg() : buildEmail(i);
  if (i === EGG_INDEX) cursorDate = new Date(cursorDate.getTime() - 8 * 3600 * 1000);
  return email;
}

function loadBatch() {
  const frag = document.createDocumentFragment();
  for (let n = 0; n < BATCH; n++) {
    const email = buildRow(index);
    store[index] = email;
    frag.appendChild(renderRow(email));
    index++;
  }
  list.appendChild(frag);
}

/* ---------- Tab switching ---------- */
const TAB_LABELS = {
  primary: "Primary — your fault, apparently",
  promotions: "Promotions — your dreams, marked down",
  social: "Social — everyone's hiring but you"
};
function switchTab(tab, el) {
  if (tab === currentTab) { list.scrollTop = 0; return; }
  currentTab = tab;
  document.querySelectorAll(".tab").forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
  el.classList.add("active");
  el.setAttribute("aria-selected", "true");
  // reset the stream
  index = 0;
  cursorDate = new Date(START);
  for (const k in store) delete store[k];
  list.innerHTML = "";
  const tl = document.querySelector(".toolbar-label");
  if (tl) tl.textContent = TAB_LABELS[tab];
  loadBatch();
  loadBatch();
  updateCounter();
  list.scrollTop = 0;
}
document.querySelectorAll(".tab").forEach((t) => {
  t.setAttribute("role", "tab");
  t.tabIndex = 0;
  t.setAttribute("aria-selected", t.classList.contains("active") ? "true" : "false");
  t.addEventListener("click", () => switchTab(t.dataset.tab, t));
  t.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); switchTab(t.dataset.tab, t); }
  });
});

/* ---------- Modal ---------- */
const overlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");

function openEmail(i) {
  const e = store[i];
  if (!e) return;
  e.unread = false;
  const row = list.querySelector(`.email-row[data-i="${i}"]`);
  if (row) { row.classList.remove("unread"); row.classList.add("read"); }
  recordOpen(e);

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
      ${e.body.map((p, idx) => {
        const isLast = idx === e.body.length - 1;
        if (!isLast) return `<p>${p}</p>`;
        if (e.egg) return `<p class="sig">${p}<br>The ${e.sigCompany} Team</p>`;
        if (e.label === "promo" || e.label === "social") return `<p class="sig">${p}<br>— ${e.sigCompany}</p>`;
        return `<p class="sig">${p}<br>The ${e.sigCompany} Team · This inbox is not monitored</p>`;
      }).join("")}
    </div>
    <div class="mb-cta">
      <p>${
        e.egg ? "At least someone wants you around. Wear it with pride:"
        : e.label === "promo" ? "Skip the upsell. Buy something honest instead:"
        : e.label === "social" ? "Can't announce a new role? Announce a new <strong>look</strong>:"
        : "Rejected again? You're not unemployed. You're <strong>UNEMPLOYABLE™</strong>."
      }</p>
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
  if (e.key === "Escape") { closeModal(); closeAbout(); closeShare(); }
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

/* ---------- Dark mode (Gmail-style), remembered ---------- */
const SUN = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5l2 3h-4l2-3zm0 17l-2 3h4l-2-3zM2 12l3-2v4l-3-2zm17 0l3-2v4l-3-2zM4.2 4.2l3.5 1.4-1.4 1.4-2.1-2.8zm12.1 12.1l3.5 1.4-2.1-2.8-1.4 1.4zM19.8 4.2l-2.1 2.8-1.4-1.4 3.5-1.4zM7.7 16.3l-1.4-1.4-2.1 2.8 3.5-1.4z"/></svg>';
const MOON = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12.3 2a8 8 0 1 0 9.7 9.7 7 7 0 0 1-9.7-9.7z"/></svg>';
const themeBtn = document.getElementById("themeBtn");
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  if (themeBtn) {
    themeBtn.innerHTML = t === "dark" ? SUN : MOON;
    themeBtn.setAttribute("title", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
    themeBtn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t === "dark" ? "#202124" : "#ffffff");
}
let theme = "light";
try { theme = localStorage.getItem("ue-theme") || "light"; } catch (e) {}
applyTheme(theme);
if (themeBtn) themeBtn.addEventListener("click", () => {
  theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(theme);
  try { localStorage.setItem("ue-theme", theme); } catch (e) {}
});

/* ---------- Rejection Training (gamification) ---------- */
const RANKS = [
  { min: 0,   name: "Fresh Grad",                emoji: "🐣" },
  { min: 3,   name: "Open to Work",              emoji: "🟢" },
  { min: 8,   name: "Serial Applicant",          emoji: "📨" },
  { min: 15,  name: "Seasoned Reject",           emoji: "🥲" },
  { min: 25,  name: "Ghost Whisperer",           emoji: "👻" },
  { min: 40,  name: "Rejection Connoisseur",     emoji: "🍷" },
  { min: 60,  name: "Certified Unemployable",    emoji: "🎓" },
  { min: 85,  name: "Zen Master of No",          emoji: "🧘" },
  { min: 120, name: "Final Boss: The Algorithm", emoji: "🤖" }
];
const gOpened = new Set();
let gTotal = 0;
try { gTotal = parseInt(localStorage.getItem("ue-rejections"), 10) || 0; } catch (e) {}
const gEl = {
  hud: document.getElementById("gameHud"),
  rank: document.getElementById("gameRank"),
  bar: document.getElementById("gameBar"),
  count: document.getElementById("gameCount"),
  next: document.getElementById("gameNext"),
  best: document.getElementById("gameBest"),
  toasts: document.getElementById("gameToasts"),
  pill: document.getElementById("gamePill"),
  pillCount: document.getElementById("gamePillCount"),
  min: document.getElementById("gameMin")
};
function rankFor(n) { let r = RANKS[0], idx = 0; for (let i = 0; i < RANKS.length; i++) { if (n >= RANKS[i].min) { r = RANKS[i]; idx = i; } } return { r, idx }; }
function gToast(html, cls) {
  if (!gEl.toasts) return;
  const d = document.createElement("div");
  d.className = "game-toast" + (cls ? " " + cls : "");
  d.setAttribute("role", "status");
  d.innerHTML = html;
  gEl.toasts.appendChild(d);
  setTimeout(() => d.remove(), 3600);
}
function renderGame() {
  const { r, idx } = rankFor(gTotal);
  const next = RANKS[idx + 1];
  if (gEl.rank) gEl.rank.textContent = `${r.emoji} ${r.name}`;
  if (gEl.count) gEl.count.textContent = `${gTotal} rejection${gTotal === 1 ? "" : "s"} read`;
  if (next) {
    const prog = Math.min(1, (gTotal - r.min) / (next.min - r.min));
    if (gEl.bar) gEl.bar.style.width = (prog * 100).toFixed(1) + "%";
    if (gEl.next) gEl.next.textContent = `${next.min - gTotal} to ${next.emoji}`;
  } else {
    if (gEl.bar) gEl.bar.style.width = "100%";
    if (gEl.next) gEl.next.textContent = "MAX";
  }
  if (gEl.best) gEl.best.textContent = idx >= RANKS.length - 1 ? "You win. There is no prize." : "Offers received: 0";
  if (gEl.pillCount) gEl.pillCount.textContent = gTotal;
}
function recordOpen(e) {
  const key = `${e.company}|${e.subject}|${e.date.getTime()}`;
  if (gOpened.has(key)) return;
  gOpened.add(key);
  const prevIdx = rankFor(gTotal).idx;
  gTotal++;
  try { localStorage.setItem("ue-rejections", gTotal); } catch (err) {}
  const newIdx = rankFor(gTotal).idx;
  renderGame();
  if (newIdx > prevIdx) {
    const r = RANKS[newIdx];
    gToast(`<span class="t-emoji">${r.emoji}</span> Level up — <strong>${r.name}</strong>`);
    interviewFakeout();
  } else if (gTotal > 0 && gTotal % 25 === 0) {
    gToast(`<span class="t-emoji">🛍️</span> ${gTotal} rejections deep. Treat yourself → <a href="https://garrettbear.com" target="_blank" rel="noopener">Shop UNEMPLOYABLE™</a>`, "shop");
  }
}
function setHudMin(min) {
  if (gEl.hud) gEl.hud.classList.toggle("hidden", min);
  if (gEl.pill) gEl.pill.hidden = !min;
  try { localStorage.setItem("ue-hud-min", min ? "1" : "0"); } catch (e) {}
}
if (gEl.min) gEl.min.addEventListener("click", () => setHudMin(true));
if (gEl.pill) gEl.pill.addEventListener("click", () => setHudMin(false));
let hudMin = false;
try { hudMin = localStorage.getItem("ue-hud-min") === "1"; } catch (e) {}
setHudMin(hudMin);
renderGame();

/* ---------- Shareable Rejection Résumé ---------- */
const SHARE_URL = "https://unemployable-one.vercel.app";
const shareOverlay = document.getElementById("shareOverlay");
const sEl = {
  emoji: document.getElementById("scEmoji"), rank: document.getElementById("scRank"),
  count: document.getElementById("scCount"), sub: document.getElementById("scSub"),
  x: document.getElementById("shareX"), copy: document.getElementById("shareCopy"),
  dl: document.getElementById("shareDownload"), canvas: document.getElementById("shareCanvas")
};
function shareText() {
  const { r } = rankFor(gTotal);
  return `I've read ${gTotal} job rejection${gTotal === 1 ? "" : "s"} on Unemployable. Rank: ${r.name} ${r.emoji}. Offers received: 0.`;
}
function openShare() {
  const { r, idx } = rankFor(gTotal);
  if (sEl.emoji) sEl.emoji.textContent = r.emoji;
  if (sEl.rank) sEl.rank.textContent = r.name;
  if (sEl.count) sEl.count.textContent = gTotal;
  if (sEl.sub) sEl.sub.textContent = idx >= RANKS.length - 1 ? "You win. There is no prize." : "Offers received: 0";
  if (sEl.x) sEl.x.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText())}&url=${encodeURIComponent(SHARE_URL)}`;
  if (shareOverlay) { shareOverlay.hidden = false; document.body.style.overflow = "hidden"; }
}
function closeShare() { if (shareOverlay) { shareOverlay.hidden = true; document.body.style.overflow = ""; } }
const gameShareBtn = document.getElementById("gameShare");
if (gameShareBtn) gameShareBtn.addEventListener("click", openShare);
const shareCloseBtn = document.getElementById("shareClose");
if (shareCloseBtn) shareCloseBtn.addEventListener("click", closeShare);
if (shareOverlay) shareOverlay.addEventListener("click", (e) => { if (e.target === shareOverlay) closeShare(); });
if (sEl.copy) sEl.copy.addEventListener("click", () => {
  const txt = shareText() + " " + SHARE_URL;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(() => gToast("📋 Copied to clipboard")).catch(() => gToast("📋 Copy failed — select manually"));
  } else { gToast("📋 Clipboard unavailable"); }
});
if (sEl.dl) sEl.dl.addEventListener("click", drawAndDownload);
function drawAndDownload() {
  const cv = sEl.canvas; if (!cv || !cv.getContext) return;
  const ctx = cv.getContext("2d"), W = cv.width, H = cv.height;
  const { r, idx } = rankFor(gTotal);
  const g = ctx.createRadialGradient(W / 2, 0, 100, W / 2, 0, H * 1.4);
  g.addColorStop(0, "#2a2b2e"); g.addColorStop(1, "#121315");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.textAlign = "center";
  ctx.fillStyle = "#9aa0a6"; ctx.font = "700 26px Arial"; ctx.fillText("UNEMPLOYABLE™ · REJECTION TRAINING", W / 2, 92);
  ctx.font = "140px Arial"; ctx.fillText(r.emoji, W / 2, 285);
  ctx.fillStyle = "#ffffff"; ctx.font = "800 62px Arial"; ctx.fillText(r.name, W / 2, 378);
  ctx.fillStyle = "#f28b82"; ctx.font = "800 38px Arial"; ctx.fillText(`${gTotal} rejections read`, W / 2, 452);
  ctx.fillStyle = "#9aa0a6"; ctx.font = "28px Arial"; ctx.fillText(idx >= RANKS.length - 1 ? "You win. There is no prize." : "Offers received: 0", W / 2, 502);
  ctx.fillStyle = "#71757c"; ctx.font = "24px Arial"; ctx.fillText("unemployable-one.vercel.app", W / 2, 562);
  cv.toBlob((blob) => {
    if (!blob) { gToast("Download failed"); return; }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "my-rejection-resume.png";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    gToast("⬇️ Saved your Rejection Résumé");
  }, "image/png");
}

/* ---------- Sidebar reactions ---------- */
let sentTally = 487;
const sentEl = document.getElementById("sentCount");
const composeBtn = document.getElementById("composeBtn");
if (composeBtn) composeBtn.addEventListener("click", () => {
  sentTally++;
  if (sentEl) sentEl.textContent = sentTally;
  const quips = ["fired into the void. 🫡", "auto-archived by their ATS.", "read by absolutely no one.", "instantly ghosted.", "added to the 'maybe later' pile (it's never later)."];
  gToast(`📨 Application #${sentTally} ${quips[Math.floor(Math.random() * quips.length)]}`);
});
document.querySelectorAll(".folder[data-joke]").forEach((f) => {
  f.addEventListener("click", (e) => { e.preventDefault(); gToast(f.getAttribute("data-joke")); });
});
let fakeoutTimer = null;
function interviewFakeout() {
  const el = document.getElementById("interviewsCount"); if (!el) return;
  clearTimeout(fakeoutTimer);
  el.classList.remove("struck"); el.classList.add("faking"); el.textContent = "1";
  fakeoutTimer = setTimeout(() => {
    el.classList.remove("faking"); el.classList.add("struck"); el.textContent = "0";
    setTimeout(() => el.classList.remove("struck"), 1200);
  }, 1000);
}

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
