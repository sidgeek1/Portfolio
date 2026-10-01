import { motion } from "framer-motion";
import { toast } from "sonner";
import { Copy, Linkedin, Mail, ArrowUp } from "lucide-react";
import { MaskLines, Reveal } from "./Motion";
import { Logo } from "./Logo";
import { EMAIL, LINKEDIN, PHONE, LOCATION } from "./data";

const RESUME = "https://customer-assets-wrfwihn1.emergentagent.net/job_data-strategy-3d/artifacts/6vx5jepo_Siddant%20_Abhishek%20_BA_Resume%20.pdf";
import { scrollToId } from "./scroll";

export const Contact = () => {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy — " + EMAIL);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative overflow-hidden border-t hairline">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--signal)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 pb-10 pt-28 md:px-8 md:pt-40">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
          <span className="text-[var(--signal)]">06</span> — Open to strategy roles & consulting
        </div>
        <MaskLines
          className="mt-8 font-display text-[16vw] font-semibold leading-[0.85] tracking-[-0.06em] lg:text-[12rem]"
          lines={["Let's work", <span key="2"><span className="font-serif-i font-normal text-[var(--signal)]">together.</span></span>]}
        />

        <Reveal className="mt-16 grid gap-4 md:grid-cols-12">
          <motion.a
            whileHover={{ scale: 1.01 }}
            href={`mailto:${EMAIL}`}
            data-testid="contact-email-link"
            className="group flex items-center justify-between gap-4 rounded-3xl bg-[var(--bone)] p-6 text-[#08090a] md:col-span-7 md:p-8"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-600"><Mail className="h-4 w-4" /> Email</div>
              <div className="mt-2 truncate font-display text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">{EMAIL}</div>
            </div>
            <button
              data-testid="contact-copy-email-btn"
              onClick={(e) => { e.preventDefault(); copy(); }}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#08090a] text-[var(--bone)] transition-transform duration-300 hover:scale-110"
              aria-label="Copy email"
            >
              <Copy className="h-4 w-4" />
            </button>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.01 }}
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin-link"
            className="group flex items-center justify-between rounded-3xl border border-zinc-700 p-6 transition-colors duration-500 hover:border-[var(--signal)] md:col-span-5 md:p-8"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400"><Linkedin className="h-4 w-4" /> LinkedIn</div>
              <div className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">Connect with me</div>
            </div>
            <span className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--signal)]">↗</span>
          </motion.a>
        </Reveal>

        <Reveal className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
          <a data-testid="contact-resume-link" href={RESUME} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--signal)]/50 px-5 py-3 text-[var(--signal)] transition-colors hover:bg-[var(--signal)] hover:text-[#08090a]">Download résumé ↓</a>
          <a data-testid="contact-phone-link" href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-[var(--bone)]">{PHONE}</a>
          <span>{LOCATION}</span>
        </Reveal>

        <footer className="mt-28 flex flex-col items-start justify-between gap-6 border-t hairline pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-7" />
            <span className="text-sm text-zinc-400">© {new Date().getFullYear()} Abhishek Siddant Jonnalagadda</span>
          </div>
          <button data-testid="footer-back-to-top" onClick={() => scrollToId("top")} className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-[var(--signal)]">
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </footer>
      </div>
    </section>
  );
};
