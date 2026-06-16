/* ---------------------------------------------------------------------------
   Case-study content. Each project is keyed by its slug (used in ?id=slug).
   A section is one of:
     {k:'lead',   t:'…'}                         large intro paragraph
     {k:'text',   h:'Heading', p:['para', …]}    heading + paragraphs (p may contain <strong>/<em>)
     {k:'fig',    img:'url', cap:'…'}            full-width figure
     {k:'duo',    items:[{img,cap},{img,cap}]}   two figures side by side
     {k:'quote',  t:'…', by:'…'}                 pull quote
     {k:'metrics',items:[{big,label}, …]}        outcome stat row
   --------------------------------------------------------------------------- */
const CDN = "https://images.squarespace-cdn.com/content/v1/60a046234ae0b442cbab51f4/";

const CASES = {
  servicetitan: {
    n: "01",
    name: "Inventory by ServiceTitan",
    title: "Inventory by ServiceTitan",
    tagline: "A barcode-scanning mobile app that cut item-counting time by 54% — the company's first native app on the App Store.",
    badge: "SaaS · iOS & Android",
    tint: "var(--t1)", tint2: "#c2613f",
    meta: [
      { k: "Role", v: "Sr. Product Designer" },
      { k: "Team", v: "Mobile Design · Engineering · Systems Designer" },
      { k: "Duration", v: "1 Year" },
      { k: "Platform", v: "iOS & Android" },
    ],
    hero: CDN + "46680e57-0839-4711-ad5c-8fdcc13890a9/ST-Main+Mockup.png",
    sections: [
      { k: "lead", t: "ServiceTitan is a B2B SaaS company for the trades, giving businesses software to run everything from dispatching field workers to building estimates. A web inventory tool already existed; a mobile app was in development, and I was tasked with shaping its new features and getting it ready for launch." },
      { k: "text", h: "The Problem", p: [
        "The primary users of the inventory app are <strong>warehouse workers</strong> who receive and track every item that moves through the warehouse while monitoring what's already in stock.",
        "With so many items to track at any moment, the overall process and the time spent completing tasks <strong>proved to be inefficient</strong>." ] },
      { k: "text", h: "The Solution", p: [
        "I designed a barcode-scanning feature that <strong>streamlined the workflow</strong> between a warehouse worker's daily tasks and the inventory app.",
        "I also <strong>redesigned the visual language</strong> of the app to integrate with a new design system introduced alongside the launch as part of a company-wide rebrand." ] },
      { k: "fig", img: CDN + "3ece550e-1e7a-4d97-b53d-65ef192c411d/IMA-Intro+image.png", cap: "" },
      { k: "text", h: "Discovering the problem", p: [
        "My first step was <strong>interviewing warehouse managers</strong> to understand their workflows and how they used the desktop system and existing tools, then surveying managers across multiple locations for broader insight.",
        "Mapping the user journey surfaced a key inefficiency in the receiving phase: workers leaned on barcode scanners to identify items, but <strong>those scanners weren't part of the ServiceTitan ecosystem</strong>. They tracked items manually, then re-entered everything into the desktop app — duplicating effort.",
        "That disconnect was the opportunity. The most effective fix was to <strong>integrate barcode scanning directly into the mobile experience</strong>." ] },
      { k: "fig", img: CDN + "09135476-2075-4df9-bdf2-891955ecf84c/ima-userjourney.png", cap: "User journey of a warehouse worker's daily workflow" },
      { k: "text", h: "Updating the sitemap", p: [
        "Reviewing the existing app, I assessed how the new functionality could fit the structure with minimal disruption. I placed the barcode scanner alongside the global features on the Item List page — the section where users search for and identify items to count against an order. Right next to the search bar, a scanner felt natural and within reach." ] },
      { k: "fig", img: CDN + "8d680f18-dbf7-4257-a3b7-3b194ca12fbf/ima-sitemap.png", cap: "" },
      { k: "text", h: "Deciding on the best scanning experience", p: [
        "My first approach modeled the existing pattern: scan to surface an item, then use the quantity tapper to adjust the count — faster than scrolling a long list or typing names.",
        "Iterating, I realized this didn't take full advantage of the scanner. <strong>What if the scanner counted the items too?</strong> I built two versions and put both into A/B testing to see which was more effective." ] },
      { k: "duo", items: [
        { img: CDN + "204a04ba-c673-446c-8a24-844ca7a4c4bd/userflow1.png", cap: "Version A — user enters quantity manually" },
        { img: CDN + "1166401a-44ac-4096-85de-2a4493d80252/Untitled.png", cap: "Version B — each scan auto-counts, with manual override" } ] },
      { k: "text", h: "Prototype testing", p: [
        "I built low- to medium-fidelity prototypes of each flow and ran <strong>A/B testing</strong>, comparing steps to completion, ease of use, and task-success rates.",
        "Users liked the flexibility of Version B, but noted their real workflow: they scan the <em>package</em> and count quantity manually rather than scanning each piece. So we shipped <strong>Version A for the MVP</strong> and kept Version B on the roadmap for a future release." ] },
      { k: "fig", img: CDN + "635727ef-e63d-472f-8506-93e99e393a53/BarcodeFlow-VersionA+%281%29.png", cap: "Version A prototype (shipped) — warehouse page, barcode scanner, and scanned-item detail modal" },
      { k: "text", h: "Accounting for every screen state", p: [
        "With the core flow validated, I designed for edge cases and errors. The critical one: a scanned barcode that isn't in the vendor's pricebook, which would otherwise dead-end the user.",
        "I designed a recovery path — an unregistered scan routes the user to the pricebook, where they search, select, and link the barcode, then return to scanning <strong>without breaking their flow</strong>." ] },
      { k: "fig", img: CDN + "c4fd7412-bd57-47a6-9488-8ac0d35db3e3/IMA-interscreen+states.png", cap: "Screen states for adding a barcode to the pricebook" },
      { k: "text", h: "Implementing a new design system", p: [
        "A rebrand was underway to position ServiceTitan as a <em>suite</em> of apps — each with its own color identity but consistent branding. A new mobile design system was being built in parallel.",
        "I collaborated with the mobile design and design-systems teams on a theme called <strong>Anvil: Ember</strong> — the first in a series of mobile apps headed to the App Store and Google Play. We used a <strong>token system</strong> so designs adapt to light and dark mode on both platforms, built natively against the <strong>Human Interface</strong> and <strong>Material Design</strong> guidelines, and held everything to <strong>WCAG 2.1</strong> for accessibility." ] },
      { k: "duo", items: [
        { img: CDN + "477cbee8-c933-415b-94db-fb72a34c961e/ST-Lightmode-hifi.png", cap: "Light mode — high fidelity" },
        { img: CDN + "c6ad0375-1be7-4f2a-be35-8fc73b66a457/ST-darkmode-hifi.png", cap: "Dark mode — high fidelity" } ] },
      { k: "text", h: "Developer handoff", p: [
        "For handoff I built a Figma file-organization system that separated features by platform. Previously everything lived in one file, which overwhelmed some developers.",
        "I organized files by feature using the convention <strong>Application : OS : Feature</strong>, split each into pages grouped by flow, and broke out shared resources — a components file and an icon library — so developers could reach the specifics fast." ] },
      { k: "metrics", items: [
        { big: "53.8%", label: "less time counting items — 13s down to 6s per item" },
        { big: "85%", label: "average CSAT for the scanning feature" },
        { big: "1st", label: "native mobile app the company shipped" } ] },
      { k: "text", h: "Outcome", p: [
        "The Inventory mobile app launched its first iteration on the App Store and Google Play — <strong>the company's first native mobile application</strong>. Before barcode scanning, finding and starting to count an item took ~13 seconds; with it, ~6 seconds — a <strong>53.8% reduction</strong>. Asked whether they'd use the app for all their inventory work now, every tester said yes, giving an <strong>average CSAT of 85%</strong>." ] },
      { k: "fig", img: CDN + "f1bb97b9-5b4c-4fe0-8b77-f2d70f0e5122/Hand+and+iPhone+16+Pro.png", cap: "" },
    ],
  },

  eczemawise: {
    n: "02",
    name: "EczemaWise",
    title: "EczemaWise",
    tagline: "A symptom-tracking companion for the National Eczema Association, helping patients understand their skin over time.",
    badge: "Healthcare · Award-winning",
    tint: "var(--t2)", tint2: "#728a5f",
    meta: [
      { k: "Role", v: "Lead UX/UI Designer" },
      { k: "Team", v: "Product Manager · Engineering · NEA Board" },
      { k: "Duration", v: "1 Year" },
      { k: "Platform", v: "React Native" },
    ],
    hero: CDN + "a5524586-91ec-4307-9c93-5c8d99d7fdf2/Intro+image.png",
    sections: [
      { k: "lead", t: "EczemaWise is a digital tool for people living with eczema. It began as a website, but the National Eczema Association needed a mobile app to make it more accessible. As lead UX/UI designer I adapted every feature into a seamless mobile experience — owning both the information architecture and the final visual design. This case study focuses on the Learn feature, where patients view and understand trends in their tracker data." },
      { k: "text", h: "The Problem", p: [
        "The app's core value was letting users track many symptoms and lifestyle factors at once. Powerful — but it created a design challenge: the tracked data had to be <strong>actionable, not overwhelming</strong>.",
        "The new <strong>Learn</strong> section was meant to surface insights and patterns, not duplicate Track. If it simply replayed every detail, users would face redundancy, confusion, and information overload." ] },
      { k: "text", h: "The Solution", p: [
        "I designed a data-visualization interface that gave users a clearer, more structured experience. Patterns and trends across multiple trackers could be read <strong>at a glance</strong>, without overwhelm.",
        "The mobile IA <strong>reduced overlap with Track</strong> while still letting users drill into detail — comprehensive and focused at the same time." ] },
      { k: "fig", img: CDN + "ac6afc6d-612b-47da-8849-fc713172efc6/NEA-TRACKER-BEGINNING.png", cap: "" },
      { k: "text", h: "Adapting for mobile", p: [
        "On the web, EczemaWise showed <em>all</em> tracked data points in one graph. Research identified five primary triggers — <strong>skin symptoms, pain, itch, stress, and sleep</strong> — as most important, with everything else grouped as secondary.",
        "Before designing, I studied the web interface and interviewed the NEA advisory board of patients and experts. The challenge: primary triggers were emphasized, but secondary data lacked hierarchy and felt cluttered. Users relied on the graph for primary trackers yet valued secondary context — like what they ate that day — to spot links. <strong>The Learn feature had to tell a story.</strong>" ] },
      { k: "fig", img: CDN + "ff9aef14-a39d-4e1f-8446-83b596b33e92/web-diagram.png", cap: "Web interface for the Learn tab and trend data" },
      { k: "text", h: "Research", p: [
        "I studied related apps to see how they handled complex symptom tracking. <strong>Bearable</strong> and <strong>Flaredown</strong> offered multi-symptom tracking but showed only one metric per chart. <strong>Track & Graph</strong> allowed multiple data sets in one view but wasn't built for health and lacked friendly visualization.",
        "None solved showing multiple line charts for different data points in the same graph — confirming EczemaWise's use case was genuinely unique, and had to be both comprehensive and accessible on mobile." ] },
      { k: "fig", img: CDN + "3a118706-219d-49f7-83f8-0f4fe1643164/NEA-CCA.png", cap: "Competitive analysis — Bearable, Flaredown, Track & Graph" },
      { k: "text", h: "Primary data", p: [
        "The first question was how to present the five primary trackers beneath the line graph. I iterated two versions — one stacked the trackers below the graph, the other laid them out horizontally, side by side.",
        "I adopted the <strong>horizontal row with filtering</strong>: it improved readability, freed space for the graph, and reinforced consistency across the app." ] },
      { k: "fig", img: CDN + "09d5c77c-8e35-40be-9e9e-da06d44d2acc/NEA-trends-wireframes.png", cap: "Wireframe iterations for the graph data display" },
      { k: "text", h: "Information architecture", p: [
        "The deeper question was IA. Should all data live on a single scrolling page, or be compartmentalized so users get a high-level summary first?",
        "<strong>Single scroll</strong> meant mobile-native scrolling and fewer taps, but risked overload on small screens and blurred the line between input and insight. <strong>A two-screen flow</strong> led with a lightweight summary, kept a clear Track-vs-Learn distinction, and reduced cognitive load — at the cost of one extra tap. I A/B tested both." ] },
      { k: "quote", t: "Track is where I put things in. Learn is where I see what it means.", by: "Usability test participant" },
      { k: "text", h: "Testing & insights", p: [
        "A/B testing revealed a clear trade-off. Single scroll felt familiar but caused confusion — asked to update a tracker after reviewing Learn, users often tried to edit directly inside Learn. The two-screen flow matched expectations, and the lighter summary-first view felt faster and less overwhelming.",
        "One user captured it: the graph is a birds-eye view of data over time; noticing a pattern, they'd tap in for the full detailed report. Based on these findings, <strong>I went with the two-screen approach</strong>." ] },
      { k: "text", h: "High-fidelity design", p: [
        "The final solution paired a <strong>horizontal tracker layout</strong> with the <strong>two-screen Learn flow</strong> — balancing clarity, flexibility, and the separation between Track and Learn.",
        "I applied NEA's updated branding and built a component and design library so the interface could evolve with new brand guidelines — reinforcing visual consistency and the app's credibility." ] },
      { k: "fig", img: CDN + "baa25949-e263-464e-b215-3f7dcd033de6/NEA-hifi-examples.png", cap: "Examples of high-fidelity screens" },
      { k: "metrics", items: [
        { big: "4.5★", label: "highest-rated eczema tracker, across 273 reviews" },
        { big: "2×", label: "Platinum eHealthcare Leadership Awards (2022)" },
        { big: "Gold", label: "Digital Health Award (2024)" } ] },
      { k: "text", h: "Product launch", p: [
        "EczemaWise launched on both <strong>iOS and Android</strong>. As the first iteration, I oversaw the launch from a design perspective and worked closely with developers and stakeholders to resolve issues.",
        "Since release it has earned two Platinum eHealthcare Leadership Awards and a Gold Digital Health Award, and is currently the highest-rated eczema tracker on the market — helping thousands of people manage their symptoms more effectively." ] },
    ],
  },

  origin: {
    n: "03",
    name: "Origin Investments",
    title: "Origin Investments",
    tagline: "A REIT portfolio builder that turns risk scores and allocations into a clear, confident decision.",
    badge: "Fintech · React Native",
    tint: "var(--t3)", tint2: "#c79f34",
    meta: [
      { k: "Role", v: "UX/UI Designer" },
      { k: "Team", v: "Project Manager · Brand Designer" },
      { k: "Duration", v: "3 Months" },
      { k: "Platform", v: "React Native" },
    ],
    hero: CDN + "6487f556-ec4f-40f4-9d8d-d587180d632c/Origin_Intro.png",
    sections: [
      { k: "lead", t: "Origin Investments is a real-estate brokerage specializing in Real Estate Investment Trusts (REITs). Their app helps investors curate a portfolio across different REITs. I was tasked with designing a portfolio-builder feature that lets investors create a custom portfolio by allocating REITs to suit their goals — guided by a target Risk Number." },
      { k: "text", h: "The Problem", p: [
        "The portfolio builder needed to offer real personalization and customizability while guiding users toward the portfolio goal they set for themselves.",
        "That made feedback essential: the experience had to give enough information for a user to always know <strong>whether the portfolio they were building met their target risk score</strong>." ] },
      { k: "text", h: "The Solution", p: [
        "I designed the builder around visualization graphics that <strong>give constant feedback every time a user adjusts their portfolio</strong>.",
        "This meant a system for identifying each REIT block by category, icon, and Risk Score, plus a <strong>doughnut allocation visualization</strong> showing each REIT's allocation and how close the portfolio sat to its overall target risk score." ] },
      { k: "fig", img: CDN + "5e604725-5882-40e8-be20-b4689361457c/interactive.png", cap: "Interactive feedback as a user adjusts allocations" },
      { k: "text", h: "Focus-group findings", p: [
        "Before designing, I wanted detail on how the target users actually used the app. The portfolio builder was aimed at <strong>expert investors who wanted more freedom and customizability</strong> in their selections.",
        "I ran a focus group, using a set of questions to spark dialogue about what participants valued most when reviewing and investing in REIT blocks — then used that to organize the visual hierarchy of each block." ] },
      { k: "fig", size: "sm", img: CDN + "7fd559e4-f71e-45c2-8ba6-225bf07d889a/Origin+Ranking.jpg", cap: "Ranking exercise from the focus-group sessions" },
      { k: "text", h: "Information architecture", p: [
        "I reviewed the existing app architecture to assess the most appropriate place to house the portfolio-builder feature." ] },
      { k: "fig", img: CDN + "1d463c08-3357-4342-99c2-dee5cc1d10d6/Internal+Origin-Existing+App+Sitemap+-+Sitemap+%281%29.jpg", cap: "Existing app sitemap" },
      { k: "text", h: "End-to-end interaction flow", p: [
        "I outlined an interaction flow covering the end-to-end experience of building a portfolio that meets an investment goal — <strong>accounting for all the edge cases</strong> a user might hit along the way." ] },
      { k: "fig", img: CDN + "aafc129c-f285-4c4d-bcd0-dd5c2eff957c/Origins+Creating+a+New+Portfolio+%282%29.jpg", cap: "Creating a new portfolio — full interaction flow" },
      { k: "text", h: "Designing the builder dashboard", p: [
        "With the IA in place, I wireframed the structure and layout, organizing elements around how users interact with the information: <strong>The Goal</strong> — their target and driving influence; <strong>The Action</strong> — picking and adjusting REIT allocations; and <strong>The Outcome</strong> — the feedback after each adjustment.",
        "I grouped this into two buckets — primary information and interactive information — to keep the hierarchy clear." ] },
      { k: "fig", img: CDN + "1621380406785-U2LTK1JBBH7V9OJRZ1OW/Feature+Priority+%281%29.jpg", cap: "Structuring primary vs. interactive information" },
      { k: "text", h: "Portfolio visualization", p: [
        "I mocked up different ways to present the REIT allocations and Target Risk Score. The challenge was conveying enough feedback without overwhelming users in limited space, so I <strong>prioritized the information by what was most valuable</strong> in the building experience.",
        "I explored placing the risk score and target inside a pie/doughnut allocation to make the most of the space. Earlier, busier versions felt cramped — so the final design used the fewest elements, letting users <strong>focus quickly on the relevant information</strong>." ] },
      { k: "fig", img: CDN + "1627182441726-044UG5C6XN9LV8Q8Z541/doughnut-iterations.png", cap: "Doughnut allocation iterations" },
      { k: "text", h: "REIT block visualization", p: [
        "Using the ranking from the focus group, I designed the REIT block around what the target demographic valued most when making an investment decision, iterating through several layouts." ] },
      { k: "fig", img: CDN + "c93e1439-ef1a-4117-89b0-133fb9d6dfdc/REIT+blocks%403x.png", cap: "REIT block design iterations" },
      { k: "text", h: "Final design for production", p: [
        "I applied Origin's updated brand guidelines across every screen in the portfolio-builder flow, built a component library in Adobe XD to keep the file organized, and exported screens and assets for development via Zeplin." ] },
      { k: "fig", img: CDN + "bee4df34-a168-41d8-9346-d7525f2c9fff/origin-allscreens.png", cap: "Final production screens" },
    ],
  },

  nih: {
    n: "04",
    name: "National Institutes of Health",
    title: "National Institutes of Health",
    tagline: "An award-winning research experience for the NIH. Full case study landing soon.",
    badge: "Healthcare · Coming soon",
    tint: "var(--t5)", tint2: "#7d6bc0",
    meta: [
      { k: "Role", v: "Product Designer" },
      { k: "Team", v: "Research · Engineering" },
      { k: "Duration", v: "—" },
      { k: "Platform", v: "—" },
    ],
    hero: null,
    comingSoon: true,
    sections: [
      { k: "lead", t: "An award-winning research experience designed for the National Institutes of Health. The full case study is being written up — check back shortly." },
    ],
  },

  bms: {
    n: "05",
    name: "Bristol Myers Squibb",
    title: "Bristol Myers Squibb",
    tagline: "Patient-facing tools for one of the world's largest pharmaceutical companies, designed for trust and clarity.",
    badge: "Pharma · Healthcare",
    tint: "var(--t4)", tint2: "#c47b71",
    meta: [
      { k: "Role", v: "Product Designer" },
      { k: "Team", v: "Product · Engineering · Clinical" },
      { k: "Duration", v: "—" },
      { k: "Platform", v: "Mobile" },
    ],
    hero: "../assets/work/bms.webp",
    sections: [
      { k: "lead", t: "Patient-facing tools for one of the world's largest pharmaceutical companies — designed to earn trust and communicate with absolute clarity in a regulated, high-stakes space." },
      { k: "text", h: "The Problem", p: [
        "Healthcare products carry a heavy burden of trust. Patients need information that is accurate, calm, and easy to act on — while every flow stays within strict regulatory and accessibility requirements." ] },
      { k: "text", h: "The Solution", p: [
        "Mobile experiences built for clarity and reassurance: plain-language content, accessible interaction patterns, and a visual system that signals credibility at every step." ] },
      { k: "note", t: "A detailed walkthrough of this case study is available on request." },
    ],
  },

  sleeplife: {
    n: "06",
    name: "SleepLife",
    title: "SleepLife",
    tagline: "Remote patient monitoring that moved the National Sleep Foundation's clinical trials out of the lab and into the home.",
    badge: "Healthcare · iOS, Android & Web",
    tint: "var(--t6)", tint2: "#6f93a6",
    meta: [
      { k: "Role", v: "UX & UI Designer" },
      { k: "Team", v: "Product Development" },
      { k: "Duration", v: "6 Months" },
      { k: "Platform", v: "iOS, Android & Web" },
    ],
    hero: CDN + "aecd6e36-ddf4-46a0-943a-59f54bb82721/nsf-mocks%402x+%282%29.png",
    sections: [
      { k: "lead", t: "The National Sleep Foundation runs regular clinical sleep trials to monitor and evaluate sleep habits. Previously these were conducted in person at their laboratories — which skewed results, since patients were placed in an unfamiliar environment. SleepLife is the remote-patient-monitoring experience built to move those trials into the home." },
      { k: "text", h: "The Problem", p: [
        "We were assigned to create a mobile solution for running clinical trials in a remote setting. This meant building <strong>an app for patients to track and send data using a wearable Fitbit device</strong>.",
        "The core question: how to <strong>visually present that data</strong> so both patients and research administrators could read it quickly, in its most immediate form." ] },
      { k: "text", h: "The Solution", p: [
        "I created the information architecture and UX for both the patient and administrative dashboards, giving each appropriate feedback and summaries of the patient's sleep data.",
        "I also designed the main interaction flow around <strong>setting up and connecting the app to a Fitbit</strong>, so it could track and send sleep data to both patients and research administrators." ] },
      { k: "fig", img: CDN + "174b5cfd-e587-4343-952a-5ed16abacbcb/nsf-mocks-2-copy%402x+%282%29.png", cap: "" },
      { k: "text", h: "Journey mapping", p: [
        "I began with a high-level user journey mapping the full experience — from setting up the Fitbit to submitting a post-sleep diagnostic survey — documenting pain points and user needs that informed the app's core features and requirements." ] },
      { k: "fig", img: CDN + "1621441545149-F0ND93GT91IHQBPAD8Y8/Screen+Shot+2021-05-19+at+9.25.32+AM.png", cap: "High-level user journey map" },
      { k: "text", h: "Wireframes", p: [
        "I wireframed both the mobile app and the administrative dashboard. The main challenge was surfacing the right sleep data to patients while clearly outlining NSF's recommendations; these low-fidelity explorations tested different ways to display that data." ] },
      { k: "fig", img: CDN + "1621444886735-M18Z2TBEACE3BE2VOEU6/NSF+Wireframes+%28Old%29+%281%29.jpg", cap: "Preliminary low-fidelity wireframes" },
      { k: "text", h: "Final design", p: [
        "Working with the lead visual designer and through usability testing, we reached the final designs for both the mobile experience and the dashboard interfaces for patients and research administrators." ] },
      { k: "duo", items: [
        { img: CDN + "ea357c22-69b8-4890-8049-a79b1b9ce608/nsf-mocks-2%402x+%282%29.png", cap: "Patient mobile experience" },
        { img: CDN + "7122b718-b789-4ed0-ab52-a8f1c3e01b92/nsf-mocks-copy%402x+%283%29.png", cap: "Administrator dashboard" } ] },
    ],
  },
};

const ORDER = ["servicetitan", "eczemawise", "origin", "nih", "bms", "sleeplife"];
