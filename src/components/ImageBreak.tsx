/** Full-width photo band that breaks up long text. Stand-in photos until the school sends real ones. */
export function ImageBreak({
  img,
  alt,
  caption,
  className = "",
  tall = false,
  aspect,
}: {
  img: string;
  alt: string;
  caption?: string;
  className?: string;
  tall?: boolean;
  aspect?: string;
}) {
  return (
    <figure className={`relative mt-6 overflow-hidden rounded-[1.75rem] ${className}`}>
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className={`w-full object-cover object-center ${aspect ?? (tall ? "h-72 md:h-[26rem]" : "h-56 md:h-80")}`}
      />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-6 pt-16 font-display text-xl text-primary-foreground md:p-8 md:pt-20 md:text-2xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Two photos side by side. */
export function ImagePair({ a, b }: { a: [string, string]; b: [string, string] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
      {[a, b].map(([src, alt]) => (
        <img key={alt} src={src} alt={alt} loading="lazy" className="aspect-[3/2] w-full rounded-[1.75rem] object-cover object-[center_30%]" />
      ))}
    </div>
  );
}
