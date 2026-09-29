import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

/* ---------------- data ---------------- */

export const BUSINESS = {
  name: "VoltCore Electric",
  tagline: "#1 Electrician Services",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  email: "hello@voltcore.co",
  address: "4402 N 44th St, Phoenix, AZ 85018",
  mapQuery: "4402 N 44th St, Phoenix, AZ 85018",
  hours: [
    { d: "Mon – Fri", t: "8:00 AM – 6:00 PM" },
    { d: "Sat", t: "9:00 AM – 3:00 PM" },
    { d: "Sun", t: "Closed / Emergency Only" },
  ],
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "FAQ", to: "/faq" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    slug: "panel-upgrades",
    img: "/img/svc-panel.jpg",
    title: "Electrical Panel Upgrades",
    desc: "Still running on an old fuse box or a maxed-out 100-amp panel? We install modern 200-amp panels that handle today's loads safely — AC, EV chargers, workshops and all.",
    points: ["200-amp panel installations", "Breaker replacement & labeling", "Whole-home surge protection", "Code compliance corrections"],
    tags: ["#Electrician", "#PanelUpgrade"],
  },
  {
    slug: "wiring-rewiring",
    img: "/img/svc-wiring.jpg",
    title: "Wiring & Rewiring",
    desc: "From adding a single circuit to full whole-home rewires, our licensed electricians run clean, code-perfect wiring — with drywall patches so neat you'll forget we were there.",
    points: ["Whole-home rewiring", "New dedicated circuits", "Outlets, switches & GFCIs", "Aluminum wiring remediation"],
    tags: ["#Electrician", "#Rewiring"],
  },
  {
    slug: "lighting-installation",
    img: "/img/svc-lighting.jpg",
    title: "Lighting Installation",
    desc: "Recessed cans, chandeliers, under-cabinet strips, landscape lighting — we design and install lighting that makes your home look incredible and your bills stay low.",
    points: ["Recessed & pendant lighting", "Chandeliers & ceiling fixtures", "Landscape & security lighting", "Dimmers & smart switches"],
    tags: ["#Electrician", "#Lighting"],
  },
  {
    slug: "ev-charger-installation",
    img: "/img/svc-ev.jpg",
    title: "EV Charger Installation",
    desc: "Charge at home, overnight, at full speed. We handle the panel load calculation, the permit, and the install — for every EV brand on the road.",
    points: ["Level 2 home chargers", "Panel load calculations", "Permit & inspection handling", "Tesla, Ford, Rivian & more"],
    tags: ["#Electrician", "#EVCharger"],
  },
  {
    slug: "ceiling-fans",
    img: "/img/svc-fan.jpg",
    title: "Ceiling Fan Installation",
    desc: "Cut your cooling bills and stay comfortable. We install and replace ceiling fans — including vaulted ceilings and smart fans — balanced wobble-free, guaranteed.",
    points: ["Fan installation & replacement", "Vaulted & high ceilings", "Smart fan controls", "Wobble & noise fixes"],
    tags: ["#Electrician", "#CeilingFan"],
  },
  {
    slug: "troubleshooting-repairs",
    img: "/img/svc-repair.jpg",
    title: "Troubleshooting & Repairs",
    desc: "Flickering lights, dead outlets, breakers that won't stay on, that faint burning smell — we find the real cause fast and fix it right, with upfront flat-rate pricing.",
    points: ["Same-day diagnostics", "Flickering lights & dead outlets", "Burning-smell emergencies", "Upfront flat-rate pricing"],
    tags: ["#Electrician", "#ElectricalRepair"],
  },
];

export const FAQS = [
  {
    q: "How much does an electrical panel upgrade cost?",
    a: "Most 200-amp panel upgrades land in a flat-rate range we quote on site — no hourly meters. We inspect your current panel, tell you exactly what it needs, and the price we quote is the price you pay.",
  },
  {
    q: "Why do my lights flicker when appliances turn on?",
    a: "Usually it's a loose connection, an overloaded circuit, or an aging panel struggling with modern loads. It's worth a same-day diagnostic — flickering can be an early warning of a real fire hazard.",
  },
  {
    q: "Do I need a permit for electrical work?",
    a: "For panel upgrades, new circuits, and EV chargers — yes, and we handle all of it. Permits protect you: the work gets inspected and your homeowner's insurance stays valid. Handyman specials skip this; we never do.",
  },
  {
    q: "How long does a panel upgrade take?",
    a: "A standard panel swap takes one day — power is typically off for 4 to 6 hours while we work. We schedule it around your day and test every circuit before we leave.",
  },
  {
    q: "Do you offer emergency electrical services?",
    a: "Yes — 24/7. Sparking outlets, burning smells, or a dead panel can't wait. Call anytime and a licensed electrician answers, with emergency dispatch across the Phoenix area.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Bradley Lawlor",
    text: "The electrician was on time, explained everything clearly, and left the place spotless. Our new panel and recessed lights are perfect.",
  },
  {
    name: "Rhonda Rhodes",
    text: "Half our outlets died on a Saturday and they had someone out the same day. Found a fried breaker, fixed it fast, and gave us honest advice on the panel.",
  },
  {
    name: "John Dukes",
    text: "It's rare to find a company that doesn't upsell. They quoted flat-rate, did exactly what they said, and the EV charger works flawlessly.",
  },
  {
    name: "Patricia Sanders",
    text: "Smelled something burning near an outlet at 10pm — they walked me through killing the breaker over the phone, then came first thing in the morning. Lifesavers.",
  },
  {
    name: "Stephanie Sharkey",
    text: "They rewired our 1970s kitchen and installed under-cabinet lighting. Clean drywall patches, zero dust left behind, and everything passed inspection first try.",
  },
  {
    name: "Kimberly Mastrangelo",
    text: "Our office needed new circuits for a server room. Their commercial team worked after hours so we never lost a minute of business. Flawless.",
  },
];

export const POSTS = [
  {
    img: "/img/blog-1.jpg",
    date: "Oct 8, 2026",
    author: "Eddie Lake",
    title: "5 Signs Your Electrical Panel Needs an Upgrade",
    excerpt: "Frequent breaker trips, flickering lights, or a panel older than your car? Here's how to tell before it becomes an emergency.",
  },
  {
    img: "/img/blog-2.jpg",
    date: "Oct 25, 2026",
    author: "James Hall",
    title: "EV Charger Installation: What to Know Before You Buy",
    excerpt: "Panel capacity, charger types, permits, and real costs — everything a homeowner should know before going electric.",
  },
];

/* ---------------- shared bits ---------------- */

export function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${
        dark ? "border-white/30 text-white/90" : "border-navy/25 text-navy"
      }`}
    >
      {children}
    </span>
  );
}

export function Stars() {
  return (
    <div className="flex gap-0.5 text-brand" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 12.2l7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function BoltWatermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 160" className={`pointer-events-none absolute text-navy/[0.05] ${className}`} aria-hidden>
      <path d="M58 4 14 92h26l-8 64 52-88H58l8-64z" fill="currentColor" />
    </svg>
  );
}

export function useRevealRoot() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 fill-none stroke-brand ${className}`} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ---------------- logo / header ---------------- */

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#FFB300]">
          <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
        </svg>
      </span>
      <span className={`font-display text-2xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        VoltCore
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              to={n.to}
              className={({ isActive }) =>
                `text-[15px] font-semibold transition hover:text-navy ${isActive ? "text-navy underline decoration-brand decoration-2 underline-offset-8" : "text-ink"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <span className="relative flex h-12 w-12 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-brand" />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5 fill-none stroke-navy" strokeWidth="2.2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-semibold text-muted">Call Or Chat</span>
            <a href={BUSINESS.phoneHref} className="font-display text-base font-extrabold text-navy">
              {BUSINESS.phone}
            </a>
          </span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/15 lg:hidden"
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-navy" strokeWidth="2.2" fill="none" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy/10 bg-white px-4 py-3 lg:hidden">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              to={n.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-3 font-display text-sm font-bold uppercase tracking-widest hover:bg-mist ${isActive ? "text-navy bg-mist" : "text-ink"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="mt-2 flex min-h-[52px] items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold uppercase tracking-widest text-white"
          >
            Call {BUSINESS.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-navy/10 bg-white/98 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex min-h-[60px] items-center justify-center gap-2 bg-navy font-display text-sm font-extrabold uppercase tracking-widest text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2.2">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex min-h-[60px] items-center justify-center border-l border-navy/10 bg-white font-display text-sm font-extrabold uppercase tracking-widest text-navy"
      >
        Free Quote
      </Link>
    </div>
  );
}

/* ---------------- page hero / CTA band ---------------- */

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <BoltWatermark className="right-8 top-0 h-64 w-40 !text-white/[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Pill dark>{eyebrow}</Pill>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {sub && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">{sub}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-white">
      <BoltWatermark className="left-6 top-6 h-44 w-28" />
      <BoltWatermark className="bottom-0 right-10 h-56 w-36" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24">
        <h2 className="reveal font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-5xl">
          Power Problem? We&rsquo;re Ready 24/7!
        </h2>
        <p className="reveal mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          Sparking outlets, dead circuits, or a panel that&rsquo;s seen better days — don&rsquo;t
          wait for it to become an emergency. Call now for immediate help from a licensed electrician!
        </p>
        <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex min-h-[54px] items-center rounded-full bg-navy px-9 font-display text-sm font-extrabold uppercase tracking-widest text-white shadow-[0_10px_28px_rgba(20,27,38,0.35)] transition hover:-translate-y-0.5"
          >
            Call Now
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex min-h-[54px] items-center gap-2 rounded-full bg-mist px-9 font-display text-sm font-extrabold uppercase tracking-widest text-navy transition hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- contact form ---------------- */

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Troubleshooting & Repairs", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });
  const input =
    "w-full rounded-2xl border border-navy/15 bg-white px-5 py-4 text-[15px] text-ink placeholder:text-muted/60 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";
  if (sent) {
    return (
      <div className="rounded-3xl bg-navy p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand">
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-navy" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold uppercase text-white">Request received!</h3>
        <p className="mx-auto mt-2 max-w-sm text-white/70">
          Thanks, {form.name.split(" ")[0] || "friend"}. We&rsquo;ll call you back shortly to schedule your electrician.
        </p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_16px_50px_rgba(20,27,38,0.10)] md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Full name" value={form.name} onChange={set("name")} className={input} />
        <input required placeholder="Phone number" type="tel" value={form.phone} onChange={set("phone")} className={input} />
        <input placeholder="Email (optional)" type="email" value={form.email} onChange={set("email")} className={`${input} sm:col-span-2`} />
        <select value={form.service} onChange={set("service")} className={`${input} sm:col-span-2`} aria-label="Service needed">
          {["Troubleshooting & Repairs", "Panel Upgrade", "Wiring & Rewiring", "Lighting Installation", "EV Charger Install", "Ceiling Fan", "Something else"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <textarea
          placeholder="Tell us what's going on…"
          rows={4}
          value={form.message}
          onChange={set("message")}
          className={`${input} resize-none sm:col-span-2`}
        />
      </div>
      <button
        type="submit"
        className="mt-5 flex min-h-[56px] w-full items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold uppercase tracking-widest text-white transition hover:bg-navy-deep"
      >
        Request Service
      </button>
      <p className="mt-3 text-center text-xs text-muted">Prefer to talk? Call <a href={BUSINESS.phoneHref} className="font-bold text-navy">{BUSINESS.phone}</a> — 24/7.</p>
    </form>
  );
}

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-[0_16px_50px_rgba(20,27,38,0.10)]">
      <iframe
        title="VoltCore Electric location map"
        src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&output=embed`}
        className="h-[320px] w-full border-0 md:h-[420px]"
        loading="lazy"
      />
    </div>
  );
}

/* ---------------- footer ---------------- */

export function Footer() {
  const insta = ["/img/why-1.jpg", "/img/svc-lighting.jpg", "/img/blog-1.jpg", "/img/why-2.jpg", "/img/svc-ev.jpg", "/img/blog-2.jpg"];
  return (
    <footer className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <h3 className="mt-6 font-display text-sm font-extrabold uppercase tracking-widest text-navy">Working Hours</h3>
            <ul className="mt-3 space-y-2.5 rounded-2xl bg-white p-5 shadow-sm">
              {BUSINESS.hours.map((h) => (
                <li key={h.d} className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-bold text-navy">{h.d}</span>
                  <span className="text-right text-muted">{h.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mt-1 font-display text-sm font-extrabold uppercase tracking-widest text-navy">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((q) => (
                <li key={q.label}>
                  <Link to={q.to} className="text-[15px] font-medium text-muted transition hover:text-navy">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-sm font-extrabold uppercase tracking-widest text-navy">Our Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="text-[15px] font-medium text-muted transition hover:text-navy">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mt-1 font-display text-sm font-extrabold uppercase tracking-widest text-navy">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-muted">
              <li>
                <a href={BUSINESS.phoneHref} className="font-bold text-navy hover:underline">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>{BUSINESS.address}</li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-navy">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-2.5">
              {["f", "in", "yt", "x"].map((s) => (
                <span key={s} className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-xs font-extrabold text-white">
                  {s === "yt" ? "▶" : s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mt-1 font-display text-sm font-extrabold uppercase tracking-widest text-navy">Recent Work</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {insta.map((src, i) => (
                <img key={i} src={src} alt="VoltCore Electric recent work" loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-navy/10 pt-6 text-sm text-muted md:flex-row">
          <p>© Copyright 2026 VoltCore Electric. All Right Reserved</p>
          <p className="flex gap-4">
            <Link to="/" className="hover:text-navy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/" className="hover:text-navy">Terms Of Condition</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
