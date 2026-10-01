import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "./data";
import { scrollToId } from "./scroll";
import { EASE } from "./Motion";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const go = (id) => { setOpen(false); scrollToId(id); };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.9 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border hairline bg-[#08090a]/60 py-2 pl-3 pr-2 backdrop-blur-xl">
        <button data-testid="nav-logo" onClick={() => go("top")} className="flex items-center gap-3">
          <Logo />
          <span className="font-display text-sm font-semibold tracking-tight">
            Siddant<span className="text-[var(--signal)]">/</span>Signal
          </span>
        </button>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                data-testid={`nav-link-${n.id}`}
                onClick={() => go(n.id)}
                className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors duration-300 hover:bg-white/5 hover:text-[var(--bone)]"
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            data-testid="nav-cta-contact"
            onClick={() => go("contact")}
            className="group hidden items-center gap-2 rounded-full bg-[var(--signal)] px-5 py-2.5 text-sm font-semibold text-[#08090a] transition-transform duration-300 hover:scale-[1.03] sm:flex"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </button>
          <button data-testid="nav-mobile-toggle" onClick={() => setOpen((o) => !o)} className="grid h-10 w-10 place-items-center rounded-full border hairline md:hidden" aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 rounded-3xl border hairline bg-[#0f1112]/95 p-4 backdrop-blur-xl md:hidden"
          >
            {[...NAV, { id: "contact", label: "Contact" }].map((n) => (
              <button key={n.id} data-testid={`mobile-link-${n.id}`} onClick={() => go(n.id)} className="block w-full border-b hairline py-4 text-left font-display text-2xl last:border-0">
                {n.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
