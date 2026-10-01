import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Move3d, Pause, Play } from "lucide-react";
import { Reveal, MaskLines, SectionLabel, EASE } from "./Motion";
import { DATASETS } from "./data";
import { CsvUpload } from "./CsvUpload";

const StudioScene = lazy(() => import("./StudioScene"));

const Readout = ({ data, selected }) => {
  const [r, c] = (selected ?? `0-${data.cols.length - 1}`).split("-").map(Number);
  const v = data.values[r]?.[c] ?? 0;
  return (
    <motion.div key={`${data.label}-${selected}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">{selected ? "Selected point" : "Latest · top series"}</div>
      <div data-testid="studio-readout-value" className="mt-3 font-display text-6xl font-semibold tracking-[-0.04em] text-[var(--signal)]">
        {v}<span className="ml-2 text-2xl text-zinc-400">{data.unit}</span>
      </div>
      <div data-testid="studio-readout-label" className="mt-2 text-sm text-zinc-300">{data.rows[r]} · {data.cols[c]}</div>
    </motion.div>
  );
};

export const Studio = () => {
  const [key, setKey] = useState("finance");
  const [selected, setSelected] = useState(null);
  const [spin, setSpin] = useState(true);
  const [custom, setCustom] = useState(null);
  const sets = custom ? { ...DATASETS, custom } : DATASETS;
  const data = sets[key] ?? DATASETS.finance;
  const onData = (d) => { setCustom(d); setKey("custom"); setSelected(null); };

  const switchSet = (k) => { setKey(k); setSelected(null); };

  return (
    <section id="studio" data-testid="studio-section" className="mx-auto max-w-[1400px] px-5 py-28 md:px-8 md:py-36">
      <SectionLabel no="03">3D Data Studio</SectionLabel>
      <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <MaskLines
          className="font-display text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          lines={["Explore the data", <span key="2">in <span className="font-serif-i text-[var(--signal)]">3D.</span></span>]}
        />
        <Reveal className="flex flex-wrap gap-2">
          {Object.entries(sets).map(([k, d]) => (
            <button
              key={k}
              data-testid={`studio-dataset-${k}`}
              onClick={() => switchSet(k)}
              className={`rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${key === k ? "border-[var(--signal)] bg-[var(--signal)] text-[#08090a]" : "border-zinc-700 text-zinc-300 hover:border-zinc-400"}`}
            >
              {d.label}
            </button>
          ))}
        </Reveal>
      </div>

      <Reveal className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border hairline lg:grid-cols-12">
        <div data-lenis-prevent data-testid="studio-3d-canvas" className="relative h-[440px] md:h-[600px] lg:col-span-8">
          <Suspense fallback={<div className="grid h-full place-items-center font-mono text-xs text-zinc-400">Loading scene…</div>}>
            <StudioScene data={data} selected={selected} onSelect={setSelected} autoRotate={spin} />
          </Suspense>
          <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full border hairline bg-black/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-zinc-300 backdrop-blur">
            <Move3d className="h-3.5 w-3.5 text-[var(--signal)]" /> Drag · scroll to zoom · click a bar
          </div>
          <button
            data-testid="studio-autorotate-toggle"
            onClick={() => setSpin((s) => !s)}
            className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border hairline bg-black/60 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-zinc-200 backdrop-blur transition-colors hover:border-[var(--signal)]"
          >
            {spin ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />} {spin ? "Pause orbit" : "Auto orbit"}
          </button>
        </div>
        <aside className="flex min-w-0 flex-col justify-between gap-10 border-t hairline bg-[#0f1112] p-7 md:p-9 lg:col-span-4 lg:border-l lg:border-t-0">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Dataset</div>
            <div data-testid="studio-dataset-title" className="mt-2 font-display text-3xl font-medium tracking-tight">{data.label}</div>
            <div className="mt-6 space-y-2 text-sm text-zinc-400">
              <div><span className="text-zinc-200">Rows ·</span> {data.rows.join(", ")}</div>
              <div><span className="text-zinc-200">Columns ·</span> {data.cols[0]} → {data.cols[data.cols.length - 1]}</div>
            </div>
          </div>
          <Readout data={data} selected={selected} />
          <p data-testid="studio-insight" className="break-words border-t hairline pt-6 font-serif-i text-2xl leading-snug text-zinc-200">"{data.insight}"</p>
          {data.source && (
            <a data-testid="studio-source-link" href={data.sourceUrl} target="_blank" rel="noopener noreferrer" className="-mt-6 font-mono text-[11px] uppercase leading-relaxed tracking-widest text-zinc-400 transition-colors hover:text-[var(--signal)]">
              Source · {data.source} ↗
            </a>
          )}
        </aside>
      </Reveal>
      <Reveal>
        <CsvUpload onData={onData} />
      </Reveal>
    </section>
  );
};
