/* ==========================================================================
   PageMate — demo data + nearby matching
   A front-end prototype: everything is stored in this browser only.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Reference data ---------- */

  const AREAS = [
    { id: "dtu", name: "DTU · Shahbad Daulatpur", lat: 28.7501, lng: 77.1177 },
    { id: "shahbad", name: "Shahbad Daulatpur", lat: 28.745, lng: 77.12 },
    { id: "rohini", name: "Rohini West", lat: 28.715, lng: 77.117 },
    { id: "rithala", name: "Rithala", lat: 28.7203, lng: 77.1025 },
    { id: "prashantvihar", name: "Prashant Vihar", lat: 28.705, lng: 77.14 },
    { id: "pitampura", name: "Pitampura", lat: 28.699, lng: 77.134 },
    { id: "gtb", name: "GTB Nagar", lat: 28.698, lng: 77.207 },
    { id: "karolbagh", name: "Karol Bagh", lat: 28.651, lng: 77.19 },
    { id: "janakpuri", name: "Janakpuri", lat: 28.621, lng: 77.087 },
    { id: "dwarka", name: "Dwarka Sector 9", lat: 28.574, lng: 77.071 },
    { id: "laxminagar", name: "Laxmi Nagar", lat: 28.636, lng: 77.277 },
    { id: "noida", name: "Noida Sector 62", lat: 28.627, lng: 77.372 },
  ];

  const CATEGORIES = [
    "All subjects",
    "Engineering",
    "Maths",
    "Commerce",
    "English",
    "Programming",
    "Design",
    "Law",
    "Science",
  ];

  const TINTS = [
    ["#e0e7ff", "#3730a3"],
    ["#fdf0dc", "#8a5c14"],
    ["#e7f1ff", "#2c5d8f"],
    ["#f3e9ff", "#6b4a96"],
    ["#ffe9e3", "#a34a2c"],
    ["#e9f7df", "#3e6b28"],
  ];

  const WRITERS = [
    {
      id: "w-rohan",
      name: "Rohan Mehta",
      college: "DTU · Mechanical",
      subjects: ["Thermodynamics", "Maths"],
      cats: ["Engineering", "Maths"],
      mode: "Handwritten",
      price: 90,
      area: "dtu",
      lat: 28.7465,
      lng: 77.1215,
      rating: 4.8,
      reviews: 27,
      turnaround: "36 hr",
      pickup: "DTU main gate · 2 min walk",
      sample:
        "Entropy is not a thing a system contains — it is a way of counting the arrangements it could take. Heat flows because one arrangement is far more likely than the other.",
      tint: 0,
    },
    {
      id: "w-sana",
      name: "Sana Qureshi",
      college: "DTU · Architecture",
      subjects: ["Design studio", "Building tech"],
      cats: ["Design", "Engineering"],
      mode: "Handwritten",
      price: 95,
      area: "shahbad",
      lat: 28.7435,
      lng: 77.1235,
      rating: 4.8,
      reviews: 8,
      turnaround: "3 days",
      pickup: "Shahbad Daulatpur · near DTU gate",
      sample:
        "A plan drawing is an argument about light. The corridor is not leftover space — it is where the section begins to breathe.",
      tint: 1,
    },
    {
      id: "w-riya",
      name: "Riya Das",
      college: "DU · Economics",
      subjects: ["Macroeconomics", "Statistics"],
      cats: ["Commerce", "Maths"],
      mode: "Handwritten",
      price: 58,
      area: "rithala",
      lat: 28.723,
      lng: 77.106,
      rating: 4.6,
      reviews: 14,
      turnaround: "3 days",
      pickup: "Rithala metro · gate 1",
      sample:
        "A demand curve is a relationship, not a law of nature. Shift the income, and the whole line moves — that is the first thing to get right in an answer.",
      tint: 2,
    },
    {
      id: "w-ananya",
      name: "Ananya Sharma",
      college: "Hansraj College · English",
      subjects: ["English", "Political Science"],
      cats: ["English"],
      mode: "Handwritten",
      price: 65,
      area: "rohini",
      lat: 28.7155,
      lng: 77.113,
      rating: 4.9,
      reviews: 34,
      turnaround: "48 hr",
      pickup: "Rohini West metro · gate 2",
      sample:
        "Federalism in India is not a single arrangement but a habit of negotiation — the Union and the States share power the way two roommates share a kitchen.",
      tint: 3,
    },
    {
      id: "w-kavya",
      name: "Kavya Nair",
      college: "DTU · ECE",
      subjects: ["Digital circuits", "Python"],
      cats: ["Engineering", "Programming"],
      mode: "Handwritten & typed",
      price: 100,
      area: "rohini",
      lat: 28.708,
      lng: 77.125,
      rating: 4.9,
      reviews: 41,
      turnaround: "2 days",
      pickup: "Rohini West metro · gate 2",
      sample:
        "A half-adder adds two bits and reports a sum and a carry. Chain two of them and you have built the first honest machine in the syllabus.",
      tint: 4,
    },
    {
      id: "w-arjun",
      name: "Arjun Singh",
      college: "DTU · Civil",
      subjects: ["Structures", "Surveying"],
      cats: ["Engineering"],
      mode: "Handwritten",
      price: 75,
      area: "prashantvihar",
      lat: 28.705,
      lng: 77.14,
      rating: 4.7,
      reviews: 16,
      turnaround: "2 days",
      pickup: "Prashant Vihar · stationery shop",
      sample:
        "A shear force diagram is the story of a beam told backwards. Draw it once properly and the bending moment is simply the area underneath.",
      tint: 5,
    },
    {
      id: "w-simran",
      name: "Simran Kaur",
      college: "GGSIPU · Commerce",
      subjects: ["Accountancy", "Business studies"],
      cats: ["Commerce"],
      mode: "Handwritten",
      price: 70,
      area: "pitampura",
      lat: 28.6998,
      lng: 77.135,
      rating: 4.7,
      reviews: 19,
      turnaround: "3 days",
      pickup: "Pitampura metro · gate 1",
      sample:
        "The cash flow statement reconciles the profit you reported with the cash you actually hold. Most viva questions are hiding in that gap.",
      tint: 0,
    },
    {
      id: "w-neha",
      name: "Neha Gupta",
      college: "Miranda House · History",
      subjects: ["History", "English"],
      cats: ["English"],
      mode: "Handwritten",
      price: 55,
      area: "gtb",
      lat: 28.698,
      lng: 77.207,
      rating: 4.6,
      reviews: 12,
      turnaround: "4 days",
      pickup: "GTB Nagar metro · gate 3",
      sample:
        "The Partition archive is less a record of events than a record of silences. Every footnote is somebody deciding what counted as evidence.",
      tint: 1,
    },
    {
      id: "w-ishita",
      name: "Ishita Bansal",
      college: "LSR · Psychology",
      subjects: ["Psychology", "Research methods"],
      cats: ["Science"],
      mode: "Handwritten",
      price: 60,
      area: "karolbagh",
      lat: 28.651,
      lng: 77.19,
      rating: 4.9,
      reviews: 23,
      turnaround: "3 days",
      pickup: "Karol Bagh metro · gate 4",
      sample:
        "Attachment theory began as an observation about children in a strange room. The strange room is still the best exam answer you can give it.",
      tint: 2,
    },
    {
      id: "w-mehak",
      name: "Mehak Chawla",
      college: "Ambedkar University · Design",
      subjects: ["Visual communication", "Typography"],
      cats: ["Design"],
      mode: "Typed",
      price: 85,
      area: "janakpuri",
      lat: 28.621,
      lng: 77.087,
      rating: 4.7,
      reviews: 11,
      turnaround: "48 hr",
      pickup: "Janakpuri West metro",
      sample:
        "A poster is a hierarchy before it is a picture. Fix the order of reading, then decide what the type is wearing.",
      tint: 3,
    },
    {
      id: "w-aditya",
      name: "Aditya Verma",
      college: "NSUT · CSE",
      subjects: ["DBMS", "Operating systems"],
      cats: ["Programming", "Engineering"],
      mode: "Typed",
      price: 120,
      area: "dwarka",
      lat: 28.574,
      lng: 77.071,
      rating: 4.8,
      reviews: 38,
      turnaround: "36 hr",
      pickup: "Dwarka Sector 9 metro",
      sample:
        "Normalisation removes redundancy one dependency at a time. If you cannot name the anomaly you are fixing, you are just splitting tables for sport.",
      tint: 4,
    },
    {
      id: "w-farhan",
      name: "Farhan Ali",
      college: "Jamia Millia · Law",
      subjects: ["Constitutional law", "Contract"],
      cats: ["Law"],
      mode: "Typed",
      price: 110,
      area: "laxminagar",
      lat: 28.636,
      lng: 77.277,
      rating: 4.8,
      reviews: 21,
      turnaround: "4 days",
      pickup: "Laxmi Nagar metro · gate 2",
      sample:
        "The doctrine of basic structure is a limit drawn by the Court on the Court's own power. Start with Kesavananda, then explain why the limit still bites.",
      tint: 5,
    },
    {
      id: "w-devansh",
      name: "Devansh Yadav",
      college: "DTU · Software",
      subjects: ["Data structures", "Maths"],
      cats: ["Programming", "Maths", "Engineering"],
      mode: "Handwritten & typed",
      price: 130,
      area: "noida",
      lat: 28.627,
      lng: 77.372,
      rating: 5.0,
      reviews: 9,
      turnaround: "2 days",
      pickup: "Noida Sector 62 metro",
      sample:
        "Dijkstra's algorithm is greedy, but only about the next node. The proof that this works is the part everyone skips before the exam.",
      tint: 0,
    },
  ];

  const SAMPLE_REQUESTS = [
    {
      id: "req-thermo",
      buyer: "Kabir Malhotra",
      meta: "DTU · Mechanical · 2nd year",
      subject: "Thermodynamics — 5 numericals with full steps",
      pages: 12,
      dueDays: 3,
      mode: "Handwritten",
      budget: 85,
      area: "dtu",
      pickup: "DTU library steps",
      notes: "Ruled A4, blue ink, numbered steps and boxed answers.",
      tint: 2,
    },
    {
      id: "req-macro",
      buyer: "Aisha Khan",
      meta: "GGSIPU · Economics",
      subject: "Macroeconomics report, typed and formatted",
      pages: 8,
      dueDays: 4,
      mode: "Typed",
      budget: 110,
      area: "pitampura",
      pickup: "Pitampura metro · gate 1",
      notes: "Times New Roman 12, 1.5 spacing, APA references.",
      tint: 3,
    },
    {
      id: "req-lab",
      buyer: "Tanvi Rao",
      meta: "DTU · Applied chemistry",
      subject: "Lab record — 18 experiments, labelled diagrams",
      pages: 18,
      dueDays: 6,
      mode: "Handwritten",
      budget: 60,
      area: "shahbad",
      pickup: "DTU main gate",
      notes: "Graph sheets for two experiments, index page at the front.",
      tint: 4,
    },
    {
      id: "req-essay",
      buyer: "Manav Sethi",
      meta: "DU · English",
      subject: "Essay on Partition literature — 5 pages",
      pages: 6,
      dueDays: 2,
      mode: "Handwritten",
      budget: 80,
      area: "gtb",
      pickup: "GTB Nagar metro",
      notes: "One primary text, two secondary sources, neat margins.",
      tint: 0,
    },
    {
      id: "req-dbms",
      buyer: "Sana Mirza",
      meta: "NSUT · CSE",
      subject: "DBMS project documentation with ER diagrams",
      pages: 15,
      dueDays: 7,
      mode: "Typed",
      budget: 120,
      area: "dwarka",
      pickup: "Dwarka Sector 9 metro",
      notes: "Include screenshots, table of contents and a page-number footer.",
      tint: 1,
    },
  ];

  const STORAGE = {
    listing: "pagemate.listing.v1",
    requests: "pagemate.requests.v1",
    offers: "pagemate.offers.v1",
  };

  const state = {
    area: "dtu",
    geo: null,
    radius: 8,
    category: "All subjects",
    mode: "any",
    sort: "distance",
    query: "",
  };

  /* ---------- Helpers ---------- */

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const escapeHtml = (value = "") =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char]));

  const initialsOf = (name = "") =>
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0] || "")
      .join("")
      .toUpperCase();

  const money = (value) => "₹" + Number(value || 0).toLocaleString("en-IN");

  const readJSON = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const writeJSON = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      /* storage may be unavailable — the demo still works in-session */
    }
  };

  const removeKey = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      /* ignore */
    }
  };

  const toRad = (deg) => (deg * Math.PI) / 180;

  const haversine = (a, b) => {
    const R = 6371;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const h =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
  };

  const areaById = (id) => AREAS.find((area) => area.id === id) || AREAS[0];

  const origin = () => (state.geo ? state.geo : areaById(state.area));

  const distanceFor = (writer) => {
    const km = haversine(origin(), { lat: writer.lat, lng: writer.lng });
    return Math.max(0.1, Math.round(km * 10) / 10);
  };

  const distanceText = (km) => `${km.toFixed(1)} km`;

  const isoInDays = (days) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + Number(days || 0));
    return date.toISOString().slice(0, 10);
  };

  const formatShortDate = (iso) => {
    const date = new Date(`${iso}T12:00:00`);
    if (Number.isNaN(date.getTime())) return "soon";
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  };

  const dueLabel = (request) => {
    const iso = request.deadline || isoInDays(request.dueDays || 3);
    return `Due ${formatShortDate(iso)}`;
  };

  const getAllWriters = () => {
    const stored = readJSON(STORAGE.listing, null);
    return stored && stored.name ? [stored, ...WRITERS] : [...WRITERS];
  };

  const getRequests = () => {
    const stored = readJSON(STORAGE.requests, []);
    return [...(Array.isArray(stored) ? stored : []), ...SAMPLE_REQUESTS];
  };

  const getOffers = () => {
    const stored = readJSON(STORAGE.offers, []);
    return Array.isArray(stored) ? stored : [];
  };

  const writerMatchesMode = (writer, mode) => {
    if (mode === "any") return true;
    return String(writer.mode || "").toLowerCase().includes(mode.toLowerCase());
  };

  const writerMatchesCategory = (writer, category) =>
    category === "All subjects" || (writer.cats || []).includes(category);

  const writerMatchesQuery = (writer, query) => {
    if (!query) return true;
    const haystack = [
      writer.name,
      writer.college,
      ...(writer.subjects || []),
      ...(writer.cats || []),
      writer.sample,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query.toLowerCase());
  };

  const writerTint = (writer) => TINTS[(writer.tint || 0) % TINTS.length];

  const toastTimer = { id: null };

  const showToast = (message) => {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    clearTimeout(toastTimer.id);
    toastTimer.id = setTimeout(() => {
      toast.classList.remove("is-visible");
      setTimeout(() => {
        toast.hidden = true;
      }, 240);
    }, 3800);
  };

  /* ---------- Area selects ---------- */

  const populateAreas = () => {
    const options = AREAS.map(
      (area) => `<option value="${area.id}">${escapeHtml(area.name)}</option>`
    ).join("");
    ["heroArea", "requestArea", "listingArea"].forEach((id) => {
      const select = document.getElementById(id);
      if (select) select.innerHTML = options;
    });
    syncAreaSelects();
  };

  const syncAreaSelects = () => {
    ["heroArea", "requestArea"].forEach((id) => {
      const select = document.getElementById(id);
      if (select) select.value = state.area;
    });
  };

  /* ---------- Hero ---------- */

  const heroPinWriter = (id) => getAllWriters().find((writer) => writer.id === id);

  const updateHero = () => {
    const ids = ["w-rohan", "w-kavya", "w-simran"];
    $$("[data-hero-pin]").forEach((pin, index) => {
      const writer = heroPinWriter(ids[index]);
      if (!writer) return;
      const km = distanceFor(writer);
      pin.innerHTML = `<i></i>${escapeHtml(writer.name.split(" ")[0])} · ${distanceText(km)}`;
    });

    const featured =
      heroPinWriter("w-rohan") ||
      getAllWriters().find((writer) => !writer.mine) ||
      getAllWriters()[0];
      if (!featured) return;
    const featuredKm = distanceFor(featured);
    const matchDistance = $("[data-hero-distance]");
    if (matchDistance) matchDistance.textContent = distanceText(featuredKm);
    const matchPrice = $("[data-hero-price]");
    if (matchPrice) matchPrice.textContent = money(featured.price);
    const matchReady = $("[data-hero-ready]");
    if (matchReady) matchReady.textContent = featured.turnaround;
    const matchDelivery = $("[data-hero-delivery]");
    if (matchDelivery) {
      matchDelivery.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M6 19V9l6-4 6 4v10M10 19v-5h4v5" /></svg>${escapeHtml(
        featured.pickup
      )}`;
    }

    const nearby = getAllWriters().filter((writer) => distanceFor(writer) <= 5).length;
    const nearbyEl = $("#heroNearby");
    if (nearbyEl) nearbyEl.textContent = `${nearby} writers within 5 km`;
    const totalEl = $("#heroTotal");
    if (totalEl) totalEl.textContent = money(featured.price * 12);
  };

  /* ---------- Writer grid ---------- */

  const renderChips = () => {
    const row = $("#subjectChips");
    if (!row) return;
    row.innerHTML = CATEGORIES.map(
      (category) =>
        `<button class="chip${
          category === state.category ? " is-active" : ""
        }" type="button" role="button" aria-pressed="${category === state.category}" data-category="${escapeHtml(
          category
        )}">${escapeHtml(category)}</button>`
    ).join("");
  };

  const filteredWriters = () => {
    const writers = getAllWriters()
      .map((writer) => ({ ...writer, km: distanceFor(writer) }))
      .filter((writer) => writer.km <= state.radius)
      .filter((writer) => writerMatchesMode(writer, state.mode))
      .filter((writer) => writerMatchesCategory(writer, state.category))
      .filter((writer) => writerMatchesQuery(writer, state.query));

    if (state.sort === "price") writers.sort((a, b) => a.price - b.price);
    else if (state.sort === "rating") writers.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    else writers.sort((a, b) => a.km - b.km);

    return writers;
  };

  const writerCard = (writer) => {
    const tint = writerTint(writer);
    const tags = (writer.subjects || [])
      .slice(0, 3)
      .map((subject) => `<span class="tag">${escapeHtml(subject)}</span>`)
      .join("");
    const verified = writer.mine
      ? ""
      : `<span class="verified" title="Sample verified" aria-label="Sample verified">✓</span>`;
    const mineBadge = writer.mine ? '<span class="badge-mine">Your listing</span>' : "";
    const rating =
      writer.rating > 0
        ? `<span class="rating-pill">★ ${writer.rating.toFixed(1)}${
            writer.reviews ? ` · ${writer.reviews}` : ""
          }</span>`
        : '<span class="rating-pill">New</span>';

    return `
      <article class="writer-card" data-id="${escapeHtml(writer.id)}">
        <div class="writer-top">
          <span class="avatar" style="--av:${tint[0]};--av-ink:${tint[1]}">${escapeHtml(
            initialsOf(writer.name)
          )}</span>
          <div>
            <h3 class="writer-name">${escapeHtml(writer.name)} ${verified} ${mineBadge}</h3>
            <p class="writer-sub">${escapeHtml(writer.college)}</p>
          </div>
          ${rating}
        </div>
        <div class="sample${writer.mine ? " sample-mine" : ""}">
          <span class="sample-tag">${writer.mine ? "Your sample" : "Sample page"}</span>${escapeHtml(
            writer.sample
          )}
        </div>
        <div class="tag-row">${tags}</div>
        <dl class="writer-stats">
          <div><dt>Mode</dt><dd>${escapeHtml(writer.mode)}</dd></div>
          <div><dt>Distance</dt><dd>${distanceText(writer.km)}</dd></div>
          <div><dt>Ready in</dt><dd>${escapeHtml(writer.turnaround)}</dd></div>
        </dl>
        <p class="delivery-line">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M6 19V9l6-4 6 4v10M10 19v-5h4v5" /></svg>
          ${escapeHtml(writer.pickup)}
        </p>
        <div class="writer-foot">
          <p class="price">${money(writer.price)}<small>/ page</small></p>
          <button class="btn btn-primary" type="button" data-request-writer="${escapeHtml(
            writer.id
          )}">Request pages</button>
        </div>
      </article>`;
  };

  const renderWriters = () => {
    const grid = $("#writerGrid");
    if (!grid) return;
    const writers = filteredWriters();
    grid.innerHTML = writers.map(writerCard).join("");

    const empty = $("#emptyState");
    if (empty) empty.hidden = writers.length > 0;

    const count = $("#resultCount");
    if (count) {
      count.textContent = writers.length
        ? `${writers.length} writer${writers.length === 1 ? "" : "s"} within ${state.radius} km`
        : `Nothing within ${state.radius} km`;
    }

    const radiusOut = $("#radiusOut");
    if (radiusOut) radiusOut.textContent = `${state.radius} km`;
  };

  /* ---------- Requests ---------- */

  const requestCard = (request) => {
    const tint = TINTS[(request.tint || 0) % TINTS.length];
    const offers = getOffers();
    const offered = offers.some((offer) => offer.requestId === request.id);
    const budget = request.budget
      ? `<p class="budget">${money(request.budget)}<small>/page</small></p>`
      : '<p class="budget">Open<small> rate</small></p>';
    const action = request.mine
      ? '<p class="request-mine-note">Waiting for offers</p>'
      : offered
      ? '<button class="btn btn-ghost" type="button" disabled>Offer sent</button>'
      : `<button class="btn btn-ghost" type="button" data-offer="${escapeHtml(
          request.id
        )}">Send an offer</button>`;

    return `
      <article class="request-card${request.mine ? " is-mine" : ""}">
        <div class="request-top">
          <span class="avatar avatar-sm" style="--av:${tint[0]};--av-ink:${tint[1]}">${escapeHtml(
            initialsOf(request.buyer)
          )}</span>
          <div class="request-who">
            <p class="request-name">${escapeHtml(request.buyer)}${
              request.mine ? '<span class="badge-mine">Yours</span>' : ""
            }</p>
            <p class="request-meta">${escapeHtml(request.meta || areaById(request.area).name)}</p>
          </div>
        </div>
        <h3 class="request-subject">${escapeHtml(request.subject)}</h3>
        <div class="request-facts">
          <span class="tag">${escapeHtml(request.pages)} pages</span>
          <span class="tag">${escapeHtml(request.mode)}</span>
          <span class="tag">${escapeHtml(dueLabel(request))}</span>
        </div>
        <p class="delivery-line">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M6 19V9l6-4 6 4v10M10 19v-5h4v5" /></svg>
          ${escapeHtml(request.pickup || areaById(request.area).name)}
        </p>
        <div class="request-foot">
          ${budget}
          ${action}
        </div>
      </article>`;
  };

  const renderRequests = () => {
    const grid = $("#requestGrid");
    if (!grid) return;
    grid.innerHTML = getRequests().map(requestCard).join("");
  };

  /* ---------- Shared render ---------- */

  const renderAll = () => {
    renderWriters();
    renderRequests();
    updateHero();
  };

  /* ---------- Dialogs ---------- */

  const requestDialog = $("#requestDialog");
  const offerDialog = $("#offerDialog");
  const requestForm = $("#requestForm");
  const offerForm = $("#offerForm");

  let selectedWriterId = null;
  let preferredWriterId = null;

  const openDialog = (dialog) => {
    if (dialog && typeof dialog.showModal === "function" && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeDialog = (dialog) => {
    if (dialog && dialog.open) dialog.close();
  };

  const resetRequestDialog = () => {
    if (requestForm) {
      requestForm.reset();
      const pages = requestForm.elements.namedItem("pages");
      if (pages) pages.value = 10;
      const deadline = requestForm.elements.namedItem("deadline");
      if (deadline) deadline.value = isoInDays(7);
      const area = requestForm.elements.namedItem("area");
      if (area) area.value = state.area;
    }
    selectedWriterId = null;
    preferredWriterId = null;
    const stepOne = $("#requestStepOne");
    const stepTwo = $("#requestStepTwo");
    if (stepOne) stepOne.hidden = false;
    if (stepTwo) stepTwo.hidden = true;
    const label = $("#requestStepLabel");
    if (label) label.textContent = "Step 1 of 2";
    const summary = $("#matchSummary");
    if (summary) summary.innerHTML = "";
    const list = $("#matchList");
    if (list) list.innerHTML = "";
    const confirm = $("#confirmRequest");
    if (confirm) {
      confirm.disabled = true;
      confirm.textContent = "Send request to selected writer";
    }
    const note = $("#matchNote");
    if (note) note.textContent = "Pick a writer to continue.";
  };

  const openRequestDialog = (writer) => {
    resetRequestDialog();
    preferredWriterId = writer ? writer.id : null;
    if (writer && requestForm) {
      const subject = requestForm.elements.namedItem("subject");
      if (subject) subject.value = `${writer.subjects[0]} assignment`;
      const mode = requestForm.elements.namedItem("mode");
      if (mode) {
        mode.value = writer.mode.includes("Handwritten") && !writer.mode.includes("&")
          ? "Handwritten"
          : writer.mode.includes("Typed") && !writer.mode.includes("Handwritten")
          ? "Typed"
          : "Either is fine";
      }
      const budget = requestForm.elements.namedItem("budget");
      if (budget) budget.value = writer.price;
    }
    openDialog(requestDialog);
    const firstField = requestForm && requestForm.querySelector("input[name='subject']");
    if (firstField) setTimeout(() => firstField.focus(), 80);
  };

  const matchesForRequest = (formData) => {
    const mode = formData.get("mode");
    const radius = 25;
    return getAllWriters()
      .filter((writer) => !writer.mine)
      .map((writer) => ({ ...writer, km: distanceFor(writer) }))
      .filter((writer) => writer.km <= radius)
      .filter((writer) => {
        if (mode === "Either is fine") return true;
        return writerMatchesMode(writer, mode);
      })
      .sort((a, b) => a.km - b.km)
      .slice(0, 5);
  };

  const renderMatchOptions = (writers, pages, budget) => {
    const list = $("#matchList");
    if (!list) return;
    list.innerHTML = writers
      .map((writer) => {
        const tint = writerTint(writer);
        const total = Number(writer.price) * Number(pages || 0);
        return `
          <button class="match-option" type="button" data-match="${escapeHtml(writer.id)}" aria-pressed="false">
            <span class="avatar avatar-sm" style="--av:${tint[0]};--av-ink:${tint[1]}">${escapeHtml(
              initialsOf(writer.name)
            )}</span>
            <span>
              <span class="mo-name">${escapeHtml(writer.name)} <span class="verified" aria-hidden="true">✓</span></span>
              <span class="mo-meta">${distanceText(writer.km)} · ${escapeHtml(writer.pickup)} · ${writer.rating.toFixed(
                1
              )}★ · ${escapeHtml(writer.turnaround)}</span>
            </span>
            <span class="mo-price">
              <strong>${money(total)}</strong>
              <span>${money(writer.price)} × ${escapeHtml(pages)} pages${
                budget ? ` · budget ${money(budget)}` : ""
              }</span>
            </span>
          </button>`;
      })
      .join("");

    const note = $("#matchNote");
    if (note) {
      note.textContent = writers.length
        ? "Pick a writer to continue. Distance is measured from your chosen area."
        : "No writer matches yet — try \"Either is fine\" or a later deadline.";
    }
  };

  const selectMatch = (writerId) => {
    selectedWriterId = writerId;
    $$(".match-option", $("#matchList")).forEach((option) => {
      const isSelected = option.dataset.match === writerId;
      option.classList.toggle("is-selected", isSelected);
      option.setAttribute("aria-pressed", String(isSelected));
    });
    const confirm = $("#confirmRequest");
    const writer = getAllWriters().find((item) => item.id === writerId);
    if (confirm) {
      confirm.disabled = !writer;
      confirm.textContent = writer ? `Send request to ${writer.name.split(" ")[0]}` : "Send request to selected writer";
    }
  };

  if (requestForm) {
    requestForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!requestForm.reportValidity()) return;

      const formData = new FormData(requestForm);
      const pages = Number(formData.get("pages") || 1);
      const budget = Number(formData.get("budget") || 0);
      const mode = formData.get("mode");
      const area = areaById(formData.get("area"));
      const deadline = formData.get("deadline");
      const matches = matchesForRequest(formData);

      const summary = $("#matchSummary");
      if (summary) {
        summary.innerHTML = `<p><strong>${escapeHtml(pages)} ${escapeHtml(
          mode.toLowerCase()
        )} pages</strong> · ${escapeHtml(formData.get("subject"))}<br>
          Due ${escapeHtml(formatShortDate(deadline))} · ${escapeHtml(area.name)} · ${
          budget ? `budget ${money(budget)}/page` : "no fixed budget"
        }</p>`;
      }

      renderMatchOptions(matches, pages, budget);
      $("#requestStepOne").hidden = true;
      $("#requestStepTwo").hidden = false;
      $("#requestStepLabel").textContent = "Step 2 of 2";

      if (preferredWriterId && matches.some((writer) => writer.id === preferredWriterId)) {
        selectMatch(preferredWriterId);
      } else if (matches.length === 1) {
        selectMatch(matches[0].id);
      }
    });
  }

  const matchList = $("#matchList");
  if (matchList) {
    matchList.addEventListener("click", (event) => {
      const option = event.target.closest("[data-match]");
      if (!option) return;
      selectMatch(option.dataset.match);
    });
  }

  const backButton = $("#backToRequest");
  if (backButton) {
    backButton.addEventListener("click", () => {
      $("#requestStepTwo").hidden = true;
      $("#requestStepOne").hidden = false;
      $("#requestStepLabel").textContent = "Step 1 of 2";
      selectedWriterId = null;
    });
  }

  const confirmButton = $("#confirmRequest");
  if (confirmButton) {
    confirmButton.addEventListener("click", () => {
      if (!selectedWriterId || !requestForm) return;
      const writer = getAllWriters().find((item) => item.id === selectedWriterId);
      if (!writer) return;
      const formData = new FormData(requestForm);
      const request = {
        id: `req-${Date.now()}`,
        mine: true,
        buyer: "You",
        meta: `${areaById(formData.get("area")).name} · posted just now`,
        subject: formData.get("subject"),
        pages: Number(formData.get("pages") || 1),
        deadline: formData.get("deadline"),
        mode: formData.get("mode"),
        budget: Number(formData.get("budget") || 0),
        area: formData.get("area"),
        pickup: formData.get("pickup"),
        notes: formData.get("notes"),
        writerId: writer.id,
        writerName: writer.name,
        tint: 0,
      };
      const stored = readJSON(STORAGE.requests, []);
      writeJSON(STORAGE.requests, [request, ...(Array.isArray(stored) ? stored : [])]);
      closeDialog(requestDialog);
      renderRequests();
      showToast(`Request sent to ${writer.name.split(" ")[0]} — demo only.`);
      setTimeout(() => {
        document.getElementById("requests").scrollIntoView({ behavior: "smooth", block: "start" });
      }, 220);
    });
  }

  /* ---------- Offers ---------- */

  const offerBrief = $("#offerBrief");
  const offerRequestId = { value: null };

  const openOfferDialog = (requestId) => {
    const request = getRequests().find((item) => item.id === requestId);
    if (!request) return;
    offerRequestId.value = requestId;
    if (offerForm) {
      offerForm.reset();
      const price = offerForm.elements.namedItem("price");
      if (price && request.budget) price.value = request.budget;
    }
    if (offerBrief) {
      offerBrief.innerHTML = `
        <p class="eyebrow" style="margin-bottom:2px">${escapeHtml(request.buyer)} · ${escapeHtml(
        areaById(request.area).name
      )}</p>
        <h3>${escapeHtml(request.subject)}</h3>
        <p>${escapeHtml(request.pages)} pages · ${escapeHtml(request.mode)} · ${escapeHtml(
        dueLabel(request)
      )} · ${request.budget ? `budget ${money(request.budget)}/page` : "open rate"} · ${escapeHtml(
        request.pickup
      )}</p>`;
    }
    openDialog(offerDialog);
    const first = offerForm && offerForm.querySelector("input[name='name']");
    if (first) setTimeout(() => first.focus(), 80);
  };

  if (offerForm) {
    offerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!offerForm.reportValidity() || !offerRequestId.value) return;
      const formData = new FormData(offerForm);
      const request = getRequests().find((item) => item.id === offerRequestId.value);
      const offers = getOffers();
      writeJSON(STORAGE.offers, [
        {
          id: `offer-${Date.now()}`,
          requestId: offerRequestId.value,
          name: formData.get("name"),
          price: Number(formData.get("price") || 0),
          message: formData.get("message"),
          createdAt: new Date().toISOString(),
        },
        ...offers,
      ]);
      closeDialog(offerDialog);
      renderRequests();
      showToast(`Offer saved for ${request ? request.buyer.split(" ")[0] : "the buyer"} — demo only.`);
    });
  }

  /* ---------- Listing form ---------- */

  const listingForm = $("#listingForm");
  const removeListingButton = $("#removeListing");

  const prefillListing = () => {
    const listing = readJSON(STORAGE.listing, null);
    if (removeListingButton) removeListingButton.hidden = !listing;
    if (!listing || !listingForm) return;
    listingForm.elements.namedItem("name").value = listing.name || "";
    listingForm.elements.namedItem("college").value = listing.college || "";
    listingForm.elements.namedItem("subjects").value = (listing.subjects || []).join(", ");
    listingForm.elements.namedItem("area").value = listing.area || state.area;
    listingForm.elements.namedItem("mode").value = listing.mode || "Handwritten";
    listingForm.elements.namedItem("price").value = listing.price || "";
    listingForm.elements.namedItem("sample").value = listing.sample || "";
  };

  if (listingForm) {
    listingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!listingForm.reportValidity()) return;
      const formData = new FormData(listingForm);
      const area = areaById(formData.get("area"));
      const subjects = String(formData.get("subjects") || "")
        .split(",")
        .map((subject) => subject.trim())
        .filter(Boolean);
      const listing = {
        id: "w-mine",
        mine: true,
        name: String(formData.get("name") || "").trim(),
        college: String(formData.get("college") || "").trim(),
        subjects,
        cats: [],
        mode: formData.get("mode"),
        price: Number(formData.get("price") || 0),
        area: area.id,
        lat: area.lat + 0.0035,
        lng: area.lng + 0.0025,
        rating: 0,
        reviews: 0,
        turnaround: "3 days",
        pickup: `${area.name} · public pickup point`,
        sample: String(formData.get("sample") || "").trim(),
        tint: 2,
      };
      writeJSON(STORAGE.listing, listing);
      if (removeListingButton) removeListingButton.hidden = false;
      renderAll();
      showToast("Your demo listing is live in the grid above.");
      setTimeout(() => {
        document.getElementById("writers").scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180);
    });
  }

  if (removeListingButton) {
    removeListingButton.addEventListener("click", () => {
      removeKey(STORAGE.listing);
      removeListingButton.hidden = true;
      if (listingForm) listingForm.reset();
      renderAll();
      showToast("Demo listing removed.");
    });
  }

  /* ---------- Filters & search ---------- */

  const chipRow = $("#subjectChips");
  if (chipRow) {
    chipRow.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-category]");
      if (!chip) return;
      state.category = chip.dataset.category;
      $$(".chip", chipRow).forEach((item) => {
        const isActive = item.dataset.category === state.category;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      renderWriters();
    });
  }

  const modeFilter = $("#modeFilter");
  if (modeFilter) {
    modeFilter.addEventListener("change", () => {
      state.mode = modeFilter.value;
      renderWriters();
    });
  }

  const sortFilter = $("#sortFilter");
  if (sortFilter) {
    sortFilter.addEventListener("change", () => {
      state.sort = sortFilter.value;
      renderWriters();
    });
  }

  const radiusFilter = $("#radiusFilter");
  if (radiusFilter) {
    radiusFilter.addEventListener("input", () => {
      state.radius = Number(radiusFilter.value);
      renderWriters();
    });
  }

  const resetFilters = $("#resetFilters");
  if (resetFilters) {
    resetFilters.addEventListener("click", () => {
      state.category = "All subjects";
      state.mode = "any";
      state.sort = "distance";
      state.radius = 8;
      state.query = "";
      if (radiusFilter) radiusFilter.value = 8;
      if (modeFilter) modeFilter.value = "any";
      if (sortFilter) sortFilter.value = "distance";
      const searchInput = $("#searchInput");
      if (searchInput) searchInput.value = "";
      renderChips();
      renderWriters();
    });
  }

  const searchForm = $("#searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.query = ($("#searchInput") || {}).value ? $("#searchInput").value.trim() : "";
      renderWriters();
      document.getElementById("writers").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const heroArea = $("#heroArea");
  if (heroArea) {
    heroArea.addEventListener("change", () => {
      state.area = heroArea.value;
      state.geo = null;
      const status = $("#geoStatus");
      if (status) status.textContent = "";
      syncAreaSelects();
      renderAll();
    });
  }

  const geoButton = $("#geoBtn");
  if (geoButton) {
    geoButton.addEventListener("click", () => {
      const status = $("#geoStatus");
      if (!navigator.geolocation) {
        if (status) status.textContent = "This browser can't share a location.";
        return;
      }
      if (status) status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(
        (position) => {
          state.geo = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          if (status) status.textContent = "Distances are from your current location.";
          renderAll();
        },
        () => {
          if (status) status.textContent = `Location blocked — using ${areaById(state.area).name}.`;
        },
        { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 }
      );
    });
  }

  /* ---------- Role tabs ---------- */

  $$(".role-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".role-tab").forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      $$(".role-panel").forEach((panel) => {
        const isTarget = panel.id === `panel-${tab.dataset.role}`;
        panel.hidden = !isTarget;
        panel.classList.toggle("is-active", isTarget);
      });
    });
  });

  /* ---------- Global buttons ---------- */

  $$("[data-open-request]").forEach((button) => {
    button.addEventListener("click", () => openRequestDialog(null));
  });

  $$("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const writerGrid = $("#writerGrid");
  if (writerGrid) {
    writerGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-request-writer]");
      if (!button) return;
      const writer = getAllWriters().find((item) => item.id === button.dataset.requestWriter);
      openRequestDialog(writer || null);
    });
  }

  const requestGrid = $("#requestGrid");
  if (requestGrid) {
    requestGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-offer]");
      if (!button) return;
      openOfferDialog(button.dataset.offer);
    });
  }

  $$("[data-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      closeDialog(dialog);
    });
  });

  [requestDialog, offerDialog].forEach((dialog) => {
    if (!dialog) return;
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
  });

  /* ---------- Footer / misc ---------- */

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const resetDemo = $("#resetDemo");
  if (resetDemo) {
    resetDemo.addEventListener("click", () => {
      removeKey(STORAGE.listing);
      removeKey(STORAGE.requests);
      removeKey(STORAGE.offers);
      window.location.reload();
    });
  }

  const avgRate = $("#avgRate");
  if (avgRate) {
    const rates = WRITERS.map((writer) => writer.price).sort((a, b) => a - b);
    avgRate.textContent = money(rates[Math.floor(rates.length / 2)]);
  }

  /* ---------- Boot ---------- */

  populateAreas();
  renderChips();
  prefillListing();
  if (requestForm && requestForm.elements.namedItem("deadline")) {
    requestForm.elements.namedItem("deadline").value = isoInDays(7);
  }
  renderAll();
})();
