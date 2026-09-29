import { Link } from "react-router-dom";
import { BUSINESS, Check, CtaBand, PageHero, Pill, useRevealRoot } from "../components";
import { SpecialistCta, Testimonials } from "../sections";

const VALUES = [
  { t: "Upfront, always", d: "You approve the exact price before we start. No hourly meters, no surprise line items." },
  { t: "On time, every time", d: "We text you when the tech is en route with a live ETA. Late isn't in our vocabulary." },
  { t: "Clean boots, clean work", d: "Shoe covers, drop cloths, and a full cleanup. Your home looks untouched — except the fixed part." },
  { t: "Warranty that means it", d: "2-year workmanship warranty on every install. If our work fails, we come back free." },
];

export default function About() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="About Us"
        title={<>The electrician Phoenix <span className="text-brand">actually trusts.</span></>}
        sub="VoltCore started with one van, one multimeter, and a simple rule: treat every home like it's your own."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <Pill>How We Started</Pill>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl">
              One van. One rule. Ten years later, still the same rule.
            </h2>
            <div className="reveal mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                VoltCore began in 2016 when our founder, a third-generation electrician, got tired of
                watching big shops upsell customers who just needed an honest fix. He bought a used
                van, printed simple flat-rate price cards, and promised every customer the same
                thing: the price we quote is the price you pay.
              </p>
              <p>
                Word spread. Today we run a full fleet across the greater Phoenix area, but the
                rule hasn&rsquo;t changed — upfront pricing, licensed techs, and work we&rsquo;d
                sign our name to. That&rsquo;s why over 60% of our jobs come from repeat customers
                and referrals.
              </p>
            </div>
            <ul className="reveal mt-6 space-y-3">
              {["Licensed & insured electrical professionals", "Background-checked, uniformed electricians", "Fully stocked trucks — most fixes in one visit"].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                  <Check className="mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <img src="/img/elec-about-1.jpg" alt="Electrician installing a light fixture" loading="lazy" className="rounded-3xl object-cover shadow-lg" />
            <img src="/img/elec-about-2.jpg" alt="Electricians at work on a job site" loading="lazy" className="mt-8 rounded-3xl object-cover shadow-lg" />
          </div>
        </div>
      </section>
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <Pill>What We Stand For</Pill>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-navy md:text-4xl">
              Four Rules, Zero Exceptions
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v.t} className="reveal rounded-3xl bg-white p-7 shadow-[0_10px_40px_rgba(10,31,77,0.06)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand font-display text-lg font-extrabold text-navy">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-extrabold uppercase tracking-wide text-navy">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex min-h-[54px] items-center rounded-full bg-navy px-9 font-display text-sm font-extrabold uppercase tracking-widest text-white transition hover:bg-navy-deep"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
      <SpecialistCta />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <Pill>Testimonials</Pill>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-navy md:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
