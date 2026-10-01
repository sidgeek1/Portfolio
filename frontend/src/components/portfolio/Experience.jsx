import { motion } from "framer-motion";
import { MaskLines, SectionLabel, EASE } from "./Motion";
import { EXPERIENCE, EDUCATION, CERTS, ACHIEVEMENTS } from "./data";
import { Reveal } from "./Motion";

const Credentials = () => (
  <div className="mt-24 grid gap-4 md:gap-5 lg:grid-cols-12">
    <Reveal className="lg:col-span-7">
      <div data-testid="education-card" className="h-full rounded-3xl border hairline bg-[#0f1112] p-7 md:p-9">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--signal)]">Education</div>
        {EDUCATION.map((e) => (
          <div key={e.school} className="mt-8 border-t hairline pt-6 first:border-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl font-medium tracking-tight">{e.school}</h3>
              <span className="font-mono text-xs text-zinc-400">{e.period}</span>
            </div>
            <div className="mt-1 text-zinc-300">{e.degree}</div>
            <div className="mt-1 font-serif-i text-lg text-zinc-400">{e.note} · {e.place}</div>
          </div>
        ))}
      </div>
    </Reveal>
    <Reveal delay={0.1} className="lg:col-span-5">
      <div data-testid="certs-card" className="h-full rounded-3xl border hairline bg-[#0f1112] p-7 md:p-9">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--signal)]">Certifications</div>
        <ul className="mt-6 space-y-3">
          {CERTS.map((c) => <li key={c} className="flex gap-3 text-sm text-zinc-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" />{c}</li>)}
        </ul>
        <div className="mt-8 border-t hairline pt-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Recognition</div>
        <ul className="mt-4 space-y-3">
          {ACHIEVEMENTS.map((a) => <li key={a} className="text-sm text-zinc-300">{a}</li>)}
        </ul>
      </div>
    </Reveal>
  </div>
);

export const Experience = () => (
  <section id="experience" data-testid="experience-section" className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 md:py-36">
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionLabel no="05">Experience</SectionLabel>
        <MaskLines
          className="mt-8 font-display text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          lines={["Where I've", <span key="2" className="font-serif-i text-zinc-400">worked.</span>]}
        />
      </div>
      <ol className="lg:col-span-8">
        {EXPERIENCE.map((e, i) => (
          <motion.li
            key={e.role}
            data-testid={`experience-item-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
            className="group relative grid gap-4 border-t hairline py-10 md:grid-cols-12"
          >
            <span className="absolute left-0 top-0 h-px w-0 bg-[var(--signal)] transition-all duration-700 group-hover:w-full" />
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 md:col-span-3">{e.period}</div>
            <div className="md:col-span-9">
              <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-500 group-hover:text-[var(--signal)] md:text-3xl">{e.role}</h3>
              <div className="mt-1 font-serif-i text-xl text-zinc-400">{e.company}</div>
              <ul className="mt-5 space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-zinc-300 md:text-base">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-zinc-600" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
    <Credentials />
  </section>
);
