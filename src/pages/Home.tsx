import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Hammer, Clock, MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work4 from "@/assets/work-4.jpg";
import work7 from "@/assets/work-7.jpg";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[85vw] sm:min-h-0">
        <img
          src={hero}
          alt="Cantiere edile Alessandro Costruzioni"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 md:py-40">
          <span className="inline-block rounded-full border border-background/30 bg-background/10 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-background backdrop-blur">
            Impresa edile · dal 2015
          </span>
          <h1 className="mt-4 sm:mt-6 max-w-3xl font-display text-4xl sm:text-5xl uppercase leading-[1.05] text-background md:text-7xl">
            Costruiamo<br />
            <span className="text-primary-glow">il tuo progetto</span><br />
            a regola d'arte.
          </h1>
          <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-background/85">
            Ristrutturazioni, opere murarie e finiture su misura.
            Tempi rispettati, preventivi chiari, lavori certificati.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/preventivo"
              className="touch-manipulation inline-flex items-center justify-center gap-2 rounded-md bg-gradient-accent px-6 py-3.5 sm:py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform active:scale-95 hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> Richiedi preventivo
            </Link>
            <Link
              to="/galleria"
              className="touch-manipulation inline-flex items-center justify-center gap-2 rounded-md border border-background/40 bg-background/10 px-6 py-3.5 sm:py-3 text-sm font-semibold text-background backdrop-blur hover:bg-background/20 active:bg-background/30"
            >
              Vedi i nostri lavori <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Lavori certificati", desc: "Imprenditore qualificato, in regola con tutte le normative italiane." },
            { icon: Hammer, title: "Artigianalità", desc: "Maestranze specializzate per ogni fase: muratura, finiture, impianti." },
            { icon: Clock, title: "Tempi rispettati", desc: "Cronoprogramma definito a preventivo, consegna nei tempi pattuiti." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
              <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl bg-gradient-accent text-primary-foreground">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-display uppercase">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl uppercase md:text-5xl">Lavori recenti</h2>
            </div>
            <Link to="/galleria" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Vedi tutta la galleria <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {[
              { src: work1, label: "Villa ristrutturata", tag: "Esterni" },
              { src: work2, label: "Bagno marmoreo", tag: "Bagni" },
              { src: work4, label: "Cucina open-space", tag: "Interni" },
              { src: work7, label: "Tetto in legno", tag: "Strutture in legno" },
            ].map((w) => (
              <figure key={w.label} className="group relative overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={w.src}
                  alt={w.label}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-44 sm:h-56 lg:h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-3 sm:p-5 text-background">
                  <span className="text-[9px] sm:text-xs uppercase tracking-widest text-primary-glow">{w.tag}</span>
                  <p className="font-display text-sm sm:text-lg uppercase">{w.label}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-2xl sm:rounded-3xl bg-ink p-7 sm:p-10 text-background shadow-card md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight md:text-5xl">
                Hai un progetto?<br />
                <span className="text-primary-glow">Parliamone.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-background/70">
                Rispondi a poche domande del nostro assistente: prepareremo un preventivo
                su misura e ti risponderemo direttamente su WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/preventivo"
                className="touch-manipulation inline-flex items-center justify-center gap-2 rounded-md bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow active:scale-95"
              >
                <MessageCircle className="h-4 w-4" /> Avvia preventivo
              </Link>
              <a href="tel:+393495049511" className="text-sm text-background/70 hover:text-background text-center md:text-right">
                oppure chiama 349 504 9511
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
