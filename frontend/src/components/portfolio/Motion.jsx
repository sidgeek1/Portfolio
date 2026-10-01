import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, ease: EASE, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

const line = { hidden: { y: "105%" }, show: (i) => ({ y: "0%", transition: { duration: 1, ease: EASE, delay: i * 0.08 } }) };

export const MaskLines = ({ lines, className = "", lineClass = "", onLoad = false, testId }) => (
  <motion.h2
    data-testid={testId}
    className={className}
    initial="hidden"
    {...(onLoad ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount: 0.1 } })}
  >
    {lines.map((l, i) => (
      <span key={i} className="block overflow-hidden pb-[0.08em]">
        <motion.span className={`block ${lineClass}`} variants={line} custom={i}>
          {l}
        </motion.span>
      </span>
    ))}
  </motion.h2>
);

export const SectionLabel = ({ no, children }) => (
  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
    <span className="text-[var(--signal)]">{no}</span>
    <span className="h-px w-10 bg-zinc-700" />
    <span>{children}</span>
  </div>
);
