import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskLines, SectionLabel, Reveal, EASE } from "./Motion";
import { PROJECTS } from "./data";

const Frame = ({ p, flip }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
    >
      <motion.div
        initial={{ clipPath: "inset(12% 12% 12% 12% round 28px)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.4, ease: EASE }}
        className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#111314]"
      >
        <motion.img style={{ y, scale: 1.18 }} src={p.image} alt={p.title} loading="lazy" className="duotone absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[var(--signal)] opacity-0 mix-blend-color transition-opacity duration-700 group-hover:opacity-30" />
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <div className="font-display text-6xl font-semibold tracking-[-0.05em] text-[var(--signal)] md:text-7xl" data-testid={`project-impact-${p.id}`}>{p.impact}</div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-200">{p.impactLabel}</div>
          </div>
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--bone)] text-[#08090a] transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Project = ({ p, i }) => (
  <article data-testid={`project-card-${p.id}`} className="group grid items-center gap-8 border-t hairline py-14 md:py-20 lg:grid-cols-12 lg:gap-14">
    <Frame p={p} flip={i % 2 === 1} />
    <Reveal className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
      <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
        <span className="text-[var(--signal)]">{p.no}</span>{p.kicker}
      </div>
      <h3 className="mt-5 font-display text-4xl font-medium tracking-[-0.035em] md:text-5xl">{p.title}</h3>
      <p className="mt-5 text-base leading-relaxed text-zinc-300">{p.text}</p>
      <div className="mt-6 inline-flex rounded-full border border-[var(--signal)]/40 px-4 py-1.5 font-mono text-xs text-[var(--signal)]">{p.metric}</div>
      <div className="mt-8 flex flex-wrap gap-2">
        {p.tech.map((t) => <span key={t} className="rounded-full bg-white/5 px-3 py-1.5 font-mono text-xs text-zinc-300">{t}</span>)}
      </div>
    </Reveal>
  </article>
);

export const Projects = () => (
  <section id="work" data-testid="projects-section" className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 md:py-36">
    <SectionLabel no="04">Selected work</SectionLabel>
    <MaskLines
      className="mt-8 mb-16 font-display text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
      lines={["Case studies, measured", <span key="2">in <span className="font-serif-i text-[var(--signal)]">outcomes.</span></span>]}
    />
    {PROJECTS.map((p, i) => <Project key={p.id} p={p} i={i} />)}
  </section>
);
