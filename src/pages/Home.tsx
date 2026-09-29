import { Link } from "react-router-dom";
import { BUSINESS, ContactForm, BoltWatermark, Pill, useRevealRoot } from "../components";
import { AboutPreview, BlogCards, ServicesSection, SpecialistCta, Testimonials, WhyUs } from "../sections";

/* mobile: static image hero | md and up: video hero */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* ------- mobile hero (static image) ------- */}
      <div className="bg-white md:hidden">
        <div className="relative">
          <img src="/img/electrician-hero.jpg" alt="VoltCore electrician working on a breaker panel" className="aspect-[4/3] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Pill dark>{BUSINESS.tagline}</Pill>
          </div>
        </div>
        <div className="px-4 pb-10 pt-6">
          <h1 className="font-display text-[32px] font-extrabold uppercase leading-[1.08] tracking-tight text-navy">
            Fast, Safe &amp; Reliable Electrical Services
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            We&rsquo;re your local licensed electricians — panel upgrades, rewiring, EV chargers,
            and 24/7 emergency repairs. Same-day service, honest pricing, guaranteed results.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-6 flex min-h-[56px] items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold uppercase tracking-widest text-white"
          >
            Request Electrical Service
          </a>
          <Link
            to="/contact"
            className="mt-3 flex min-h-[56px] items-center justify-center rounded-full border-2 border-navy/15 font-display text-sm font-extrabold uppercase tracking-widest text-navy"
          >
            Get a Free Quote
          </Link>
          <dl className="mt-8 grid grid-cols-3 divide-x divide-navy/10 rounded-2xl bg-mist p-4">
            {[
              { v: "4.5K+", l: "Projects Done" },
              { v: "13K+", l: "Happy Customers" },
              { v: "10+", l: "Years Experience" },
            ].map((s) => (
              <div key={s.l} className="px-3 text-center">
                <dd className="font-display text-xl font-extrabold text-navy">{s.v}</dd>
                <dd className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ------- desktop / tablet hero (video) ------- */}
      <div className="relative hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/img/electrician-hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/electrician-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/30 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="hero-in hero-in-1">
              <Pill dark>{BUSINESS.tagline}</Pill>
            </div>
            <h1 className="hero-in hero-in-2 mt-5 font-display text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-white lg:text-6xl">
              Fast, Safe &amp; Reliable{" "}
              <span className="relative inline-block">
                Electrical Services
                <span className="absolute -bottom-1 left-0 h-3 w-full -skew-x-12 bg-brand/80" aria-hidden />
              </span>
            </h1>
            <p className="hero-in hero-in-3 mt-6 max-w-xl text-[16px] leading-relaxed text-white/80">
              We&rsquo;re your local licensed electricians — panel upgrades, rewiring, EV chargers,
              and 24/7 emergency repairs. With same-day service, honest pricing, and guaranteed
              results, you can trust us to handle it all.
            </p>
            <div className="hero-in hero-in-4 mt-8 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-[56px] items-center rounded-full bg-white px-9 font-display text-sm font-extrabold uppercase tracking-widest text-navy transition hover:-translate-y-0.5"
              >
                Request Electrical Service
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-[56px] items-center rounded-full border-2 border-white/40 px-9 font-display text-sm font-extrabold uppercase tracking-widest text-white transition hover:border-white"
              >
                Get a Free Quote
              </Link>
            </div>
            <dl className="hero-in hero-in-4 mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/20">
              {[
                { v: "4.5K+", l: "Projects Done" },
                { v: "13K+", l: "Satisfied Customers" },
                { v: "10+", l: "Years of Experience" },
              ].map((s) => (
                <div key={s.l} className="px-5 first:pl-0">
                  <dd className="font-display text-3xl font-extrabold text-white">{s.v}</dd>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <Hero />
      <ServicesSection preview />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <AboutPreview />
        </div>
      </section>
      <WhyUs />
      <SpecialistCta />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <Pill>Testimonials</Pill>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-navy md:text-5xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="mt-12">
            <Testimonials limit={3} />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-mist">
        <BoltWatermark className="-right-10 top-0 h-56 w-56" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <Pill>Get In Touch</Pill>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl">
              Request Service in 60 Seconds
            </h2>
            <p className="reveal mt-3 max-w-md text-[15px] leading-relaxed text-muted">
              Fill out the form and we&rsquo;ll call you back shortly with a free, no-pressure quote.
              Emergency? Skip the form — just call.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="reveal mt-6 inline-flex min-h-[54px] items-center rounded-full bg-navy px-8 font-display text-sm font-extrabold uppercase tracking-widest text-white transition hover:bg-navy-deep"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Pill>Latest Electrical Tips &amp; Insights</Pill>
              <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-navy md:text-4xl">
                Smart Electrical Advice
              </h2>
            </div>
            <Link to="/blog" className="reveal font-display text-sm font-extrabold uppercase tracking-widest text-navy underline decoration-brand decoration-2 underline-offset-8">
              View All Articles
            </Link>
          </div>
          <div className="mt-10">
            <BlogCards />
          </div>
        </div>
      </section>
    </div>
  );
}
