import { BUSINESS, Check, CtaBand, PageHero, Pill, useRevealRoot } from "../components";
import { ServicesGrid } from "../sections";

const STEPS = [
  { t: "Request service", d: "Call or fill out the form. We confirm your appointment within the hour during business hours." },
  { t: "Upfront quote", d: "The tech diagnoses the issue and gives you one flat price. You approve it before any work starts." },
  { t: "We fix it right", d: "Most repairs finished in a single visit from our fully stocked trucks. Then we clean up like we were never there." },
];

export default function Services() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Our Services"
        title={<>One call fixes <span className="text-brand">all of it.</span></>}
        sub="Six specialties, one standard: upfront flat-rate pricing and a 2-year workmanship warranty on every install."
      />
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <ServicesGrid />
          <p className="reveal mx-auto mt-10 max-w-2xl text-center text-sm text-white/60">
            Every job is quoted flat-rate on site before work begins. The price we quote is the
            price you pay — if we find something unexpected mid-job, we stop and re-quote. Your call.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <Pill>How It Works</Pill>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-navy md:text-4xl">
              Fixed in Three Easy Steps
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.t} className="reveal rounded-3xl bg-mist p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy font-display text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold uppercase tracking-wide text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex min-h-[54px] items-center rounded-full bg-navy px-9 font-display text-sm font-extrabold uppercase tracking-widest text-white transition hover:bg-navy-deep"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
