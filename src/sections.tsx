import { Link } from "react-router-dom";
import { BUSINESS, POSTS, SERVICES, TESTIMONIALS, Check, BoltWatermark, Pill, Stars } from "./components";

/* ---------- redesigned services grid ---------- */
export function ServicesGrid({ preview = false }: { preview?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {SERVICES.map((s, i) => (
        <article
          key={s.slug}
          className="reveal group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_16px_50px_rgba(10,31,77,0.10)] transition duration-300 hover:-translate-y-1.5"
        >
          <div className="relative">
            <img src={s.img} alt={s.title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
            <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand font-display text-lg font-extrabold text-navy shadow-lg">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-7">
            <h3 className="font-display text-lg font-extrabold uppercase leading-snug tracking-wide text-navy">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
            <ul className="mt-4 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm font-semibold text-ink">
                  <Check className="mt-0.5" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold text-navy">
                  {t}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-full bg-navy font-display text-xs font-extrabold uppercase tracking-widest text-white transition group-hover:bg-brand group-hover:text-navy"
            >
              Get This Service
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServicesSection({ preview = false }: { preview?: boolean }) {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <Pill dark>Our Electrical Services</Pill>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            Comprehensive Electrical Services
          </h2>
          <p className="reveal mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">
            Every service backed by upfront pricing, licensed electricians, and our satisfaction guarantee.
          </p>
        </div>
        <div className="mt-12">
          <ServicesGrid preview={preview} />
        </div>
        {preview && (
          <div className="reveal mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-[54px] items-center rounded-full bg-white px-9 font-display text-sm font-extrabold uppercase tracking-widest text-navy transition hover:-translate-y-0.5"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- why choose us ---------- */
export function WhyUs() {
  const cells = [
    { type: "img" as const, src: "/img/why-1.jpg", alt: "VoltCore electrician at work" },
    { type: "text" as const, t: "Licensed & Insured Electricians", d: "Every tech on our trucks is licensed, background-checked, and uniformed. No handymen, no guesswork — just clean, code-perfect work." },
    { type: "img" as const, src: "/img/why-2.jpg", alt: "Electrician tools on a job site" },
    { type: "text" as const, t: "Upfront Flat-Rate Pricing", d: "You approve the exact price before we touch a wire. No hourly meters, no surprise add-ons, no upsell pressure — ever." },
    { type: "img" as const, src: "/img/why-3.jpg", alt: "Electrician working on an outdoor panel" },
    { type: "text" as const, t: "Clean, On-Time Service", d: "We show up when we say we will, wear boot covers, and leave your home cleaner than we found it. That's the VoltCore standard." },
  ];
  return (
    <section className="relative overflow-hidden bg-white">
      <BoltWatermark className="right-10 top-10 h-56 w-56" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <Pill>Why Choose Us</Pill>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-5xl">
              Why Homeowners Trust Our Electricians
            </h2>
          </div>
          <p className="reveal text-[15px] leading-relaxed text-muted">
            Our licensed electricians provide fast, reliable, and affordable electrical services —
            from panel upgrades to late-night emergencies. With 24/7 support, upfront pricing,
            and a satisfaction guarantee — we&rsquo;re the team to call.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cells.map((c, i) =>
            c.type === "img" ? (
              <img key={i} src={c.src} alt={c.alt} loading="lazy" className="reveal aspect-[4/3] w-full rounded-3xl object-cover shadow-md" />
            ) : (
              <div key={i} className="reveal flex flex-col justify-center rounded-3xl bg-mist p-8">
                <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- specialist CTA (head-safe image) ---------- */
export function SpecialistCta() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <BoltWatermark className="-left-16 bottom-0 h-96 w-96 !text-white/[0.04]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <Pill dark>Electrical Specialists</Pill>
          <h2 className="reveal mt-5 font-display text-2xl font-extrabold uppercase leading-snug tracking-tight text-white md:text-4xl">
            We are electrical specialists providing top-notch wiring, panel, &amp; lighting
            services tailored to your unique needs.
          </h2>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-9 font-display text-sm font-extrabold uppercase tracking-widest text-navy transition hover:-translate-y-0.5"
            >
              Schedule Now
            </a>
            <Link
              to="/about"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border-2 border-white/30 px-9 font-display text-sm font-extrabold uppercase tracking-widest text-white transition hover:border-white"
            >
              Meet The Team
            </Link>
          </div>
        </div>
        <div className="reveal mx-auto w-full max-w-sm">
          <div className="rounded-3xl bg-white p-3 shadow-2xl">
            <img
              src="/img/ceo.jpg"
              alt="VoltCore CEO and founder"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
            />
            <div className="px-3 py-4 text-center">
              <p className="font-display text-base font-extrabold uppercase tracking-widest text-navy">Derek Mason</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">CEO &amp; Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- testimonials ---------- */
export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  return (
    <div className="masonry">
      {list.map((t) => (
        <div key={t.name} className="reveal rounded-3xl border border-navy/10 bg-white p-7 shadow-[0_10px_36px_rgba(10,31,77,0.07)]">
          <Stars />
          <p className="mt-4 text-[15px] leading-relaxed text-ink">&ldquo;{t.text}&rdquo;</p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold text-white">
                {t.name.split(" ").map((w) => w[0]).join("")}
              </span>
              <span className="font-display text-sm font-extrabold uppercase tracking-wide text-navy">{t.name}</span>
            </div>
            <svg viewBox="0 0 24 24" className="h-8 w-8 fill-navy/10">
              <path d="M10 8c-3 1-5 3.5-5 7v1h5v-6H7.5C8 9 9 8.5 10 8.2V8zm9 0c-3 1-5 3.5-5 7v1h5v-6h-2.5c.5-1 1.5-1.5 2.5-1.8V8z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- blog cards ---------- */
export function BlogCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {POSTS.map((p) => (
        <article key={p.title} className="reveal overflow-hidden rounded-3xl bg-white shadow-[0_10px_36px_rgba(10,31,77,0.07)]">
          <img src={p.img} alt={p.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
          <div className="p-7 md:p-8">
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-wider text-muted">
              <span>{p.date}</span>
              <span className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy font-display text-[9px] font-extrabold text-white">
                  {p.author[0]}
                </span>
                {p.author}
              </span>
            </p>
            <h3 className="mt-3 font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-navy">
              {p.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.excerpt}</p>
            <span className="mt-5 inline-flex min-h-[46px] items-center rounded-full bg-navy px-7 font-display text-xs font-extrabold uppercase tracking-widest text-white">
              Read More
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- about preview (collage) ---------- */
export function AboutPreview() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <Pill>About Us</Pill>
        <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-5xl">
          Trusted Electrician You Can Count On
        </h2>
        <p className="reveal mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
          At VoltCore, your safety comes first. We take pride in offering fast, friendly, and
          affordable electrical solutions — from panel upgrades to 2am emergencies. Our licensed
          electricians are always ready to go the extra mile for you.
        </p>
        <div className="reveal mt-7">
          <Link
            to="/about"
            className="inline-flex min-h-[54px] items-center rounded-full bg-navy px-8 font-display text-sm font-extrabold uppercase tracking-widest text-white transition hover:-translate-y-0.5"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
      <div className="reveal relative grid grid-cols-2 gap-4">
        <img src="/img/elec-about-1.jpg" alt="Electrician installing a light fixture" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lg" />
        <div className="flex flex-col gap-4">
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
            <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
              <defs>
                <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-navy font-display text-[10px] font-bold uppercase tracking-[0.22em]">
                <textPath href="#circ">Trusted brand • Since 2016 •&#160;</textPath>
              </text>
            </svg>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-navy" strokeWidth="2.5">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <img src="/img/elec-about-2.jpg" alt="Electricians at work on a job site" loading="lazy" className="aspect-[3/4] w-full flex-1 rounded-3xl object-cover shadow-lg" />
        </div>
      </div>
    </div>
  );
}
