import type { ReactNode } from "react";

export const classOptions = [
  "Nursery",
  "KG I",
  "KG II",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI",
  "Class XII",
];

export const inputClass = "w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm";

export function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border-b border-border px-4 py-3 text-left font-display text-sm">{children}</th>
  );
}

export function Td({ children }: { children: ReactNode }) {
  return <td className="border-b border-border px-4 py-3 align-top text-sm">{children}</td>;
}

export function Field({
  label,
  children,
  wide,
}: {
  label: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <label className={`text-sm ${wide ? "sm:col-span-2" : ""}`}>
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}
