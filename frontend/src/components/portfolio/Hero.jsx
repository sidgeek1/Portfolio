import { lazy, Suspense, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { MaskLines, EASE } from "./Motion";
import { scrollToId } from "./scroll";

const HeroScene = lazy(() => import("./HeroScene"));

const HeroCursor = ({ x, y }) => (
  <motion.div
    aria-hidden="true"
    style={{ x, y }}
    className="pointer-events-none absolute left-0 top-0 z-20 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--signal)]/70 mix-blend-difference md:flex"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)]" />
  </motion.div>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const cx = useSpring(mx, { stiffness: 300, damping: 30 });
  const cy = useSpring(my, { stiffness: 300, damping: 30 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section id="top" ref={ref} onPointerMove={onMove} data-testid="hero-section" className="relative h-[100svh] min-h-[640px] overflow-hidden md:cursor-none">
      <motion.div style={{ y: sceneY }} className="absolute inset-0" data-testid="hero-3d-canvas">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,transparent_20%,#08090a_80%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#08090a] via-[#08090a]/70 to-transparent" />
      <HeroCursor x={cx} y={cy} />

      <motion.div style={{ y: textY, opacity: fade }} className="pointer-events-none relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-12 md:px-8 md:pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--signal)]" />
          <span data-testid="hero-name">Abhishek Siddant Jonnalagadda</span>
          <span className="text-zinc-500">/</span>
          <span>Business & Strategy Analyst</span>
          <span className="hidden text-zinc-500 sm:inline">/</span>
          <span className="hidden sm:inline">Hyderabad, IN</span>
        </motion.div>

        <MaskLines
          onLoad
          testId="hero-title"
          className="font-display text-[15vw] font-semibold leading-[0.86] tracking-[-0.05em] sm:text-[12vw] lg:text-[10.5vw] xl:text-[9.5rem]"
          lines={[
            "Signal,",
            <span key="b">
              <span className="font-serif-i font-normal tracking-[-0.02em] text-[var(--signal)]">not</span> noise.
            </span>,
          ]}
        />

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: EASE }}
            data-testid="hero-tagline"
            className="max-w-md text-base leading-relaxed text-zinc-300 md:col-span-5 md:text-lg"
          >
            4+ years turning 30M-record datasets into the one decision a leadership team needs to make next — across insurance, healthcare and retail.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 1, ease: EASE }}
            className="pointer-events-auto flex flex-wrap gap-3 md:col-span-7 md:justify-end"
          >
            <button data-testid="hero-cta-studio" onClick={() => scrollToId("studio")} className="group flex items-center gap-2 rounded-full bg-[var(--bone)] px-6 py-3.5 text-sm font-semibold text-[#08090a] transition-transform duration-300 hover:scale-[1.03]">
              Enter the 3D studio
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
            </button>
            <button data-testid="hero-cta-work" onClick={() => scrollToId("work")} className="rounded-full border border-zinc-600 px-6 py-3.5 text-sm font-semibold transition-colors duration-300 hover:border-[var(--signal)] hover:text-[var(--signal)]">
              View case studies
            </button>
          </motion.div>
        </div>

        <div className="mt-10 hidden items-center justify-between border-t hairline pt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 md:flex">
          <span>Move your cursor — the data responds</span>
          <span>Scroll ↓</span>
        </div>
      </motion.div>
    </section>
  );
};
