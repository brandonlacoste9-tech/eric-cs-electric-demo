/* EN-only i18n for Eric C's Electric demo */
const i18n = {
  en: {
    "services.s1t": "Electrical repairs",
    "services.s1d": "Outlets, switches and wiring fixed safely.",
    "services.s2t": "Troubleshooting &amp; diagnostics",
    "services.s2d": "We track down flickers, outages and faults.",
    "services.s3t": "Outlets &amp; receptacles",
    "services.s3d": "New outlets and GFCI protection where you need it.",
    "services.s4t": "Ceiling fan installation",
    "services.s4d": "Fans installed safe and balanced.",
    "services.s5t": "Lighting installation",
    "services.s5d": "Indoor and outdoor lighting upgrades.",
    "services.s6t": "Breaker &amp; panel work",
    "services.s6d": "Breaker replacement and panel upkeep.",
    "nav.call": "(843) 329-7600",
    "hero.kicker": "North Charleston, South Carolina · Residential electrician · Mon–Fri 9 AM–5 PM",
    "hero.title": "Safe, reliable electrical work<br>— done right.",
    "hero.sub": "Rated 4.4 out of 5 from 35 reviews: repairs, troubleshooting, lighting and fixtures for North Charleston homes.",
    "hero.cta1": "Call __PHONE__",
    "trust.t1t": "Troubleshooting pros",
    "trust.t1d": "We find the real electrical issue",
    "trust.t2t": "Honest pricing",
    "trust.t2d": "Clear quotes, no surprises",
    "trust.t3t": "Residential focus",
    "trust.t3d": "Homes are our specialty",
    "stats.s1n": "4.4\\u2605",
    "stats.s1l": "from 35 reviews",
    "stats.s2n": "Residential",
    "stats.s2l": "electrical specialist",
    "stats.s3n": "North Charleston",
    "stats.s3l": "&amp; nearby areas",
    "stats.s4n": "Mon–Fri",
    "stats.s4l": "9:00 AM – 5:00 PM",
    "services.title": "Electrical work for your home",
    "why.title": "Why North Charleston calls Eric C&#8217;s",
    "why.intro": "Straightforward electrical work for local homes — diagnosed properly, priced honestly, finished clean.",
    "why.l1t": "We diagnose first",
    "why.l1d": "No guessing — we find the fault.",
    "why.l2t": "Clean, careful work",
    "why.l2d": "We treat your home like our own.",
    "why.l3t": "Fair pricing",
    "why.l3d": "You approve the work before we start.",
    "why.l4t": "Local service",
    "why.l4d": "Based on Wasp St in North Charleston.",
    "gallery.kicker": "On the job",
    "gallery.title": "Real work, real results",
    "gallery.c1": "Breaker panel work, done safely",
    "gallery.c2": "Outlets installed clean",
    "reviews.title": "Rated 4.4 out of 5 by local homeowners",
    "reviews.more": "See what customers say about us — 4.4 stars from 35 reviews",
    "faq.q1": "Do you take on small jobs?",
    "faq.a1": "Yes — from a single outlet to full troubleshooting. Call (843) 329-7600.",
    "faq.q2": "Can you install my ceiling fan?",
    "faq.a2": "Yes — we install and balance ceiling fans safely.",
    "faq.q3": "My lights keep flickering — can you help?",
    "faq.a3": "Yes — troubleshooting electrical faults is one of our specialties.",
    "faq.q4": "What are your hours?",
    "faq.a4": "Monday to Friday, 9:00 AM to 5:00 PM. We&#8217;re closed Saturday and Sunday.",
    "contact.hoursVal": "Mon – Fri: 9:00 AM – 5:00 PM<br>Sat – Sun: Closed",
    "footer.tag": "Electrician · North Charleston, South Carolina",
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.cta2": "See services",
    "services.kicker": "What we do",
    "why.kicker": "Why choose us",
    "reviews.kicker": "Word on the street",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.cta": "Call now",
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
