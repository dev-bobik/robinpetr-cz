/* Znovupoužitelná karta projektu — používá ji výběr na home i budoucí /portfolio.
   Styl maker/notebook: světlá karta, kulaté rohy, mono popisek, hlinkový akcent.
   Hover = jemné zvednutí (respektuje prefers-reduced-motion). */

export default function ProjectCard({
  type,
  title,
  description,
  result,
  image = "/project-placeholder.svg",
  imageAlt = "",
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brown/15 bg-card shadow-[0_10px_30px_-18px_rgba(46,42,34,0.45)] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-clay/40 hover:shadow-[0_26px_50px_-24px_rgba(46,42,34,0.5)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* náhled */}
      <div className="aspect-[16/10] overflow-hidden border-b border-brown/10 bg-beige">
        <img
          src={image}
          alt={imageAlt}
          width="640"
          height="400"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      {/* tělo */}
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brown">
          {type}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink">
          {title}
        </h3>
        <p className="mt-2 text-[0.95rem] leading-snug text-ink-soft">
          {description}
        </p>

        {result ? (
          <p className="mt-4 border-l-2 border-clay pl-3 font-mono text-[0.8rem] leading-snug text-clay-deep">
            {result}
          </p>
        ) : null}
      </div>
    </article>
  );
}
