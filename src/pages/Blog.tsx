import { CtaBand, PageHero, useRevealRoot } from "../components";
import { BlogCards } from "../sections";

export default function Blog() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Blog"
        title={<>Electrical tips that <span className="text-brand">save you money.</span></>}
        sub="No fluff — just practical advice from the techs who do the work every day."
      />
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <BlogCards />
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
