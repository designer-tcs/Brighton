import { ImageIcon } from "lucide-react";

/** Placeholder until the school sends the real photo. Pass src when a matching picture is ready. */
export function PhotoSlot({
  label,
  className = "",
  src,
  objectPosition = "center",
}: {
  label: string;
  className?: string;
  src?: string;
  objectPosition?: string;
}) {
  if (src) {
    return (
      <figure className={`relative overflow-hidden rounded-2xl ${className}`}>
        <img src={src} alt={label} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition }} />
        <figcaption className="absolute inset-x-0 bottom-0 bg-primary/80 px-3 py-2 font-display text-sm text-primary-foreground">
          {label}
        </figcaption>
      </figure>
    );
  }
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/25 bg-blush/60 p-4 text-center ${className}`}
    >
      <ImageIcon className="size-6 text-primary/50" aria-hidden />
      <p className="font-display text-sm text-primary">{label}</p>
      <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">Photo coming soon</p>
    </div>
  );
}
