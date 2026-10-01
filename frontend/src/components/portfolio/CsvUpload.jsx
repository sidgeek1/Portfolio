import { useRef, useState } from "react";
import { Upload, Download } from "lucide-react";

const MAX_ROWS = 8;
const MAX_COLS = 10;
const SAMPLE = "Segment,Q1,Q2,Q3,Q4\nNorth,12,15,18,22\nSouth,9,11,10,14\nEast,6,9,13,17\nWest,4,5,7,8\n";

export const parseCsv = (text, name) => {
  const lines = text.trim().split(/\r?\n/).filter(Boolean).map((l) => l.split(",").map((c) => c.trim().replace(/^"|"$/g, "")));
  if (lines.length < 2) throw new Error("Need a header row and at least one data row.");
  const cols = lines[0].slice(1, MAX_COLS + 1);
  if (!cols.length) throw new Error("Need at least one numeric column after the label column.");
  const body = lines.slice(1, MAX_ROWS + 1);
  const values = body.map((r) => cols.map((_, i) => { const n = parseFloat(r[i + 1]); return Number.isFinite(n) ? Math.max(0, n) : 0; }));
  if (!values.flat().some((v) => v > 0)) throw new Error("No positive numbers found.");
  return {
    label: "Your data", unit: "", cols, rows: body.map((r, i) => r[0] || `Row ${i + 1}`), values,
    insight: `${name} · ${values.length} rows × ${cols.length} columns, rendered in your browser.`,
  };
};

export const CsvUpload = ({ onData }) => {
  const input = useRef(null);
  const [error, setError] = useState("");
  const [drag, setDrag] = useState(false);

  const read = (file) => {
    if (!file) return;
    if (file.size > 200000) { setError("Keep the file under 200 KB."); return; }
    file.text().then((t) => {
      try { onData(parseCsv(t, file.name)); setError(""); } catch (e) { setError(e.message); }
    });
  };

  const sampleHref = `data:text/csv;charset=utf-8,${encodeURIComponent(SAMPLE)}`;

  return (
    <div
      data-testid="studio-csv-dropzone"
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => { e.preventDefault(); setDrag(false); read(e.dataTransfer.files?.[0]); }}
      className={`mt-4 flex flex-col gap-4 rounded-3xl border border-dashed p-6 transition-colors duration-300 md:flex-row md:items-center md:justify-between ${drag ? "border-[var(--signal)] bg-[var(--signal)]/5" : "border-zinc-700"}`}
    >
      <div>
        <div className="font-display text-xl font-medium tracking-tight">Try it with your own data</div>
        <p className="mt-1 text-sm text-zinc-400">Drop a small CSV here: first column = labels, other columns = numbers (up to {MAX_ROWS} rows × {MAX_COLS} columns). It stays in your browser.</p>
        {error && <p data-testid="studio-csv-error" className="mt-2 text-sm text-red-400">{error}</p>}
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        <input ref={input} type="file" accept=".csv,text/csv" className="hidden" data-testid="studio-csv-input" onChange={(e) => { read(e.target.files?.[0]); e.target.value = ""; }} />
        <button data-testid="studio-csv-upload-btn" onClick={() => input.current?.click()} className="flex items-center gap-2 rounded-full bg-[var(--signal)] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#08090a] transition-transform duration-300 hover:scale-[1.03]">
          <Upload className="h-3.5 w-3.5" /> Upload CSV
        </button>
        <a data-testid="studio-csv-sample-link" href={sampleHref} download="sample.csv" className="flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-zinc-300 transition-colors hover:border-zinc-400">
          <Download className="h-3.5 w-3.5" /> Sample
        </a>
      </div>
    </div>
  );
};
