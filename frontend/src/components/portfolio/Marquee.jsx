import { Asterisk } from "lucide-react";
import { MARQUEE } from "./data";

export const Marquee = () => {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div data-testid="editorial-marquee" className="marquee relative overflow-hidden border-y hairline py-8 md:py-10">
      <div className="marquee-track flex w-max items-center">
        {items.map((m, i) => (
          <span key={i} className="flex items-center">
            <span className={`whitespace-nowrap px-8 text-4xl tracking-tight md:text-6xl ${i % 2 ? "font-serif-i text-zinc-400" : "font-display font-medium"}`}>
              {m}
            </span>
            <Asterisk className="h-7 w-7 text-[var(--signal)]" />
          </span>
        ))}
      </div>
    </div>
  );
};
