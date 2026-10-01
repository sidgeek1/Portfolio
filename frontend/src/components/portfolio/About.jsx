import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { Reveal, MaskLines, SectionLabel } from "./Motion";
import { PILLARS, STATS } from "./data";

const Counter = ({ value, prefix = "", suffix = "", testId }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [n, setN] = useState(value);
  useEffect(() => {
    if (!inView) return undefined;
    const c = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref} data-testid={testId}>{prefix}{n}{suffix}</span>;
};

export const About = () => (
  <section id="about" data-testid="about-section" className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 md:py-40">
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <SectionLabel no="01">About</SectionLabel>
      </div>
      <div className="lg:col-span-9">
        <MaskLines
          className="font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          lines={[
            "I turn raw data into",
            <span key="2">decisions teams can <span className="font-serif-i text-[var(--signal)]">act on.</span></span>,
          ]}
        />
        <Reveal delay={0.2} className="mt-10 grid gap-8 md:grid-cols-2">
          <p data-testid="about-bio-1" className="text-base leading-relaxed text-zinc-300 md:text-lg">
            I'm a Data & Strategy Business Analyst based in Hyderabad. My work sits at the intersection of data, business strategy, and technology, with a focus on turning complex business problems into clear insights and actionable decisions.
          </p>
          <div className="space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
            <p data-testid="about-bio-2">
              I tend to work across the full decision loop:{" "}
              <span className="font-medium text-[var(--signal)]">business problem → data → analysis → insight → strategy → execution → measurement.</span>{" "}
              My work spans business intelligence, data analysis, process optimization, stakeholder requirements, KPI development, dashboarding, and translating business needs into data-driven solutions.
            </p>
            <p data-testid="about-bio-3">
              I'm particularly interested in understanding not just what the data says, but why it matters, what should change, and how to measure the impact.
            </p>
          </div>
        </Reveal>
      </div>
    </div>

    <div className="mt-20 grid grid-cols-2 border-t hairline lg:grid-cols-4">
      {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="border-b hairline py-8 pr-4 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pl-6 lg:first:pl-0">
          <div className="font-display text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} testId={`stat-${i}`} />
          </div>
          <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">{s.label}</div>
        </Reveal>
      ))}
    </div>

    <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border hairline bg-white/10 md:grid-cols-3">
      {PILLARS.map((p, i) => (
        <Reveal key={p.n} delay={i * 0.1} className="group bg-[var(--ink)] p-8 transition-colors duration-500 hover:bg-[#111314] md:p-10">
          <div data-testid={`pillar-${p.n}`} className="font-mono text-xs text-[var(--signal)]">{p.n}</div>
          <h3 className="mt-10 font-display text-2xl font-medium tracking-tight">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">{p.text}</p>
        </Reveal>
      ))}
    </div>
  </section>
);
