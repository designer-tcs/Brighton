import { useEffect, useState } from "react";
import { Palette, X } from "lucide-react";

const palettes = [
  { id: "brighton", name: "Current (Brighton blue)", sw: ["#123C7A", "#1B93D8", "#F5A623"] },
  { id: "powder-peach", name: "Pastel 1: Soft blue & peach", sw: ["#4A6FA5", "#8FB8E0", "#F7C6A3"] },
  { id: "mint-lavender", name: "Pastel 2: Mint & lavender", sw: ["#2F7F78", "#B7A6E8", "#BDEBD3"] },
  { id: "lilac-butter", name: "Pastel 3: Lilac & butter", sw: ["#6C55A8", "#F2A7C3", "#FBE69A"] },
];

const KEY = "brighton-palette";

function apply(id: string) {
  if (id === "brighton") document.documentElement.removeAttribute("data-palette");
  else document.documentElement.setAttribute("data-palette", id);
}

export function PaletteSwitcher() {
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState("brighton");

  useEffect(() => {
    const saved = localStorage.getItem(KEY) ?? "brighton";
    setCur(saved);
    apply(saved);
  }, []);

  const pick = (id: string) => {
    setCur(id);
    apply(id);
    localStorage.setItem(KEY, id);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="w-72 rounded-2xl border border-border bg-card p-3 shadow-lg">
          <p className="px-2 pb-2 font-display text-sm font-semibold">Colour palette</p>
          <div className="flex flex-col gap-1">
            {palettes.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => pick(p.id)}
                aria-pressed={cur === p.id}
                className={`flex items-center gap-3 rounded-xl px-2 py-2 text-left text-sm transition-colors ${
                  cur === p.id ? "bg-blush ring-1 ring-primary" : "hover:bg-surface-2"
                }`}
              >
                <span className="flex shrink-0">
                  {p.sw.map((c) => (
                    <span key={c} className="-mr-1.5 size-6 rounded-full ring-2 ring-card" style={{ background: c }} />
                  ))}
                </span>
                <span className="ml-2">{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Change colour palette"
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg"
      >
        {open ? <X className="size-5" /> : <Palette className="size-5" />}
      </button>
    </div>
  );
}
