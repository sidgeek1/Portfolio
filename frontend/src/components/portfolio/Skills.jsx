import { motion } from "framer-motion";
import { Database, BrainCircuit, PresentationIcon, Compass, TrendingUp } from "lucide-react";
import { Reveal, MaskLines, SectionLabel, EASE } from "./Motion";
import { SKILLS } from "./data";

const ICONS = { eng: Database, ml: BrainCircuit, bi: PresentationIcon, strat: Compass, growth: TrendingUp };

const Meter = ({ level }) => (
  <div className="flex items-end gap-1" aria-hidden="true">
    {Array.from({ length: 16 }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ scaleY: 0.15 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: i * 0.03 }}
        style={{ height: `${10 + i * 2.2}px`, originY: 1 }}
        className={`w-1.5 rounded-sm ${i / 16 < level / 100 ? "bg-[var(--signal)]" : "bg-zinc-800"}`}
      />
    ))}
  </div>
);

const SkillCard = ({ s, i }) => {
  const Icon = ICONS[s.key];
  return (
    <Reveal delay={i * 0.08} className={`col-span-12 ${s.span}`}>
      <motion.article
        data-testid={`skill-card-${s.key}`}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border hairline bg-[#0f1112] p-7 transition-colors duration-500 hover:border-[var(--signal)]/40 md:p-9"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--signal)]/0 blur-3xl transition-colors duration-700 group-hover:bg-[var(--signal)]/10" />
        <div className="flex items-start justify-between gap-6">
          <div>
            <Icon className="h-6 w-6 text-[var(--signal)]" strokeWidth={1.5} />
            <h3 className="mt-6 max-w-sm font-display text-2xl font-medium tracking-tight md:text-3xl">{s.title}</h3>
          </div>
          <div className="text-right">
            <div className="font-display text-4xl font-semibold tracking-tighter">{s.level}</div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">Depth</div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <span key={t} className="rounded-full border hairline px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors duration-300 group-hover:border-zinc-600">{t}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t hairline pt-6">
            <p className="max-w-xs text-sm text-zinc-400">{s.note}</p>
            <Meter level={s.level} />
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
};

export const Skills = () => (
  <section id="skills" data-testid="skills-section" className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 md:py-36">
    <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <div>
        <SectionLabel no="02">Toolkit</SectionLabel>
        <MaskLines
          className="mt-8 font-display text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          lines={["Tools I work", <span key="2" className="font-serif-i text-zinc-400">with every day.</span>]}
        />
      </div>
      <Reveal className="max-w-sm text-sm text-zinc-400 md:text-base">
        Four disciplines, one workflow — from raw query and ETL to the dashboard that wins the room. Databases: MS SQL Server, MySQL, PgAdmin.
      </Reveal>
    </div>
    <div className="grid grid-cols-12 gap-4 md:gap-5">
      {SKILLS.map((s, i) => <SkillCard key={s.key} s={s} i={i} />)}
    </div>
  </section>
);
