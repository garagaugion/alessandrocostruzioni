import { Link } from "wouter";
import work5 from "@/assets/work-5.jpg";

export default function ChiSiamo() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
      <div className="grid gap-10 sm:gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Chi siamo</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase leading-tight md:text-6xl">
            Costruire bene è<br />
            <span className="text-primary">una questione di rispetto.</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground">
            Alessandro Costruzioni nasce dalla passione per l'edilizia ben fatta:
            quella che dura nel tempo, che rispetta chi ci abita e chi la realizza.
            Lavoriamo con maestranze qualificate, materiali certificati e una promessa
            semplice: trasparenza ad ogni passo.
          </p>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Operiamo su tutto il territorio nazionale, gestendo cantieri di ogni
            dimensione — dal piccolo rifacimento di un bagno fino alla ristrutturazione
            completa di ville e immobili commerciali.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Esperienza</dt>
              <dd className="font-display text-2xl sm:text-3xl text-primary">10+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Cantieri</dt>
              <dd className="font-display text-2xl sm:text-3xl text-primary">200+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Soddisfazione</dt>
              <dd className="font-display text-2xl sm:text-3xl text-primary">100%</dd>
            </div>
          </dl>

          <Link
            to="/preventivo"
            className="touch-manipulation mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-background active:scale-95"
          >
            Lavora con noi
          </Link>
        </div>

        <div className="relative mt-6 md:mt-0">
          <img
            src={work5}
            alt="Muratura in pietra realizzata da Alessandro Costruzioni"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-2xl sm:rounded-3xl object-cover shadow-card"
          />
          <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 rounded-xl sm:rounded-2xl bg-gradient-accent p-4 sm:p-6 text-primary-foreground shadow-glow">
            <p className="font-display text-xs sm:text-sm uppercase">P.IVA</p>
            <p className="text-base sm:text-lg">16544511005</p>
          </div>
        </div>
      </div>
    </section>
  );
}
