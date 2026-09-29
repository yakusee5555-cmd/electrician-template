import { useState } from "react";
import { Link } from "react-router-dom";
import { BUSINESS, FAQS, CtaBand, PageHero, Pill, useRevealRoot } from "../components";

export default function Faq() {
  const ref = useRevealRoot();
  const [open, setOpen] = useState(0);
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions? <span className="text-brand">Answered.</span></>}
        sub="Straight answers about pricing, timing, warranties, and how we work."
      />
      <section className="bg-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div>
            <div className="reveal rounded-3xl bg-white p-7 shadow-md lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">
                Still have questions? We&rsquo;re here to help
              </h2>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-navy px-7 font-display text-xs font-extrabold uppercase tracking-widest text-white transition hover:bg-navy-deep"
                >
                  Contact Us
                </Link>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-white" strokeWidth="2.2">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="leading-tight">
                    <span className="block text-xs font-semibold text-muted">Call Or Chat</span>
                    <span className="font-display text-sm font-extrabold text-navy">{BUSINESS.phone}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-3.5">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`reveal overflow-hidden rounded-2xl transition ${
                    isOpen ? "bg-navy shadow-lg" : "bg-white shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-display text-sm font-extrabold uppercase tracking-wide ${isOpen ? "text-white" : "text-navy"}`}>
                      {f.q}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 shrink-0 fill-none transition ${isOpen ? "rotate-180 stroke-white" : "stroke-navy"}`}
                      strokeWidth="2.5"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isOpen && <p className="px-6 pb-6 text-[15px] leading-relaxed text-white/85">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
