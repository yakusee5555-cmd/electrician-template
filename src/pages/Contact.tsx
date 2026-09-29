import { BUSINESS, ContactForm, MapEmbed, PageHero, Pill, useRevealRoot } from "../components";

export default function Contact() {
  const ref = useRevealRoot();
  const cards = [
    {
      t: "Call us",
      v: BUSINESS.phone,
      href: BUSINESS.phoneHref,
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
    {
      t: "Email us",
      v: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
      icon: <path d="m4 6 8 7 8-7M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />,
    },
    {
      t: "Visit us",
      v: BUSINESS.address,
      href: undefined,
      icon: <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />,
    },
    {
      t: "Hours",
      v: "Mon–Fri 8–6 · Sat 9–3 · 24/7 Emergency",
      href: undefined,
      icon: <path d="M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" strokeLinecap="round" strokeLinejoin="round" />,
    },
  ];
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Contact"
        title={<>Get your <span className="text-brand">free quote</span> today.</>}
        sub="Call, email, or send the form — a real person responds within the hour during business hours."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <div key={c.t} className="reveal rounded-3xl bg-mist p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-white" strokeWidth="2.2">
                    {c.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-sm font-extrabold uppercase tracking-widest text-navy">{c.t}</h3>
                {c.href ? (
                  <a href={c.href} className="mt-1.5 block text-[15px] font-bold text-ink hover:text-navy hover:underline">
                    {c.v}
                  </a>
                ) : (
                  <p className="mt-1.5 text-[15px] font-semibold text-ink">{c.v}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <Pill>Request Service</Pill>
              <h2 className="reveal mt-4 font-display text-2xl font-extrabold uppercase tracking-tight text-navy md:text-3xl">
                We&rsquo;ll call you back within the hour
              </h2>
              <div className="reveal mt-6">
                <ContactForm />
              </div>
            </div>
            <div className="reveal">
              <MapEmbed />
              <div className="mt-6 rounded-3xl bg-navy-deep p-7">
                <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-white">
                  Emergency? Don&rsquo;t wait.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  No power or sparking outlets right now? Skip the form — call and we&rsquo;ll dispatch an
                  electrician immediately, day or night.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-5 inline-flex min-h-[54px] items-center rounded-full bg-white px-8 font-display text-sm font-extrabold uppercase tracking-widest text-navy transition hover:-translate-y-0.5"
                >
                  Call {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
