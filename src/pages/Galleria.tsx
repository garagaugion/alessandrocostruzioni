import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";

const works = [
  { src: work1, title: "Villa privata", tag: "Ristrutturazione esterna" },
  { src: work2, title: "Bagno in marmo", tag: "Ristrutturazione bagno" },
  { src: work3, title: "Manto di copertura", tag: "Tetti" },
  { src: work4, title: "Cucina open-space", tag: "Interni" },
  { src: work5, title: "Muratura in pietra", tag: "Opere murarie" },
  { src: work6, title: "Facciata storica", tag: "Restauro facciate" },
  { src: work7, title: "Tetto in legno", tag: "Strutture in legno" },
];

export default function Galleria() {
  return (
    <>
      <section className="bg-ink py-14 sm:py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">Portfolio</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase md:text-6xl">Galleria lavori</h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-background/70">
            Una selezione di cantieri completati: ogni lavoro è una nostra firma.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-20">
        {/* Mobile: single column stacked */}
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {works.map((w) => (
            <figure key={w.title} className="group relative overflow-hidden rounded-xl shadow-card">
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                width={1280}
                height={960}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-4 text-background">
                <span className="text-[10px] uppercase tracking-widest text-primary-glow">{w.tag}</span>
                <p className="font-display text-base uppercase">{w.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Tablet/Desktop: masonry-style grid */}
        <div className="hidden sm:grid auto-rows-[280px] grid-cols-3 gap-5">
          {works.map((w, i) => (
            <figure
              key={w.title}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${
                i % 5 === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-5 text-background">
                <span className="text-[10px] uppercase tracking-widest text-primary-glow">{w.tag}</span>
                <p className="font-display text-lg uppercase">{w.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
