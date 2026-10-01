import { motion } from "framer-motion";
import { MaskLines, SectionLabel, EASE } from "./Motion";
import { EXPERIENCE } from "./data";

export const Experience = () => (
  <section id="experience" data-testid="experience-section" className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 md:py-36">
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionLabel no="05">Experience</SectionLabel>
        <MaskLines
          className="mt-8 font-display text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          lines={["Four years,", <span key="2" className="font-serif-i text-zinc-400">compounding.</span>]}
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
  </section>
);
