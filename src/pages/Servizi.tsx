import { Link } from "wouter";
import { Home, Bath, ChefHat, Mountain, Wrench, Paintbrush, ArrowRight, Zap, Droplets, Snowflake, TreePine } from "lucide-react";

const services = [
  { icon: Home, title: "Ristrutturazioni complete", desc: "Chiavi in mano: dal progetto alla consegna finale, gestiamo ogni fase del cantiere." },
  { icon: Bath, title: "Bagni e idraulica", desc: "Rifacimento bagni completi, sostituzione sanitari, doppie cabine doccia, impianti." },
  { icon: ChefHat, title: "Cucine e interni", desc: "Apertura pareti, controsoffitti, pavimenti e finiture per cucine moderne." },
  { icon: Mountain, title: "Tetti e coperture", desc: "Rifacimento manti di copertura, isolamento, lattoneria e linee vita." },
  { icon: Paintbrush, title: "Facciate e cappotti", desc: "Intonaci, tinteggiature, cappotti termici e restauro di facciate storiche." },
  { icon: Wrench, title: "Opere murarie", desc: "Costruzioni nuove, ampliamenti, demolizioni controllate e ristrutturazioni strutturali." },
  { icon: Zap, title: "Impianti elettrici", desc: "Progettazione e installazione impianti elettrici civili e industriali, domotica e quadri." },
  { icon: Droplets, title: "Impianti idraulici", desc: "Impianti di distribuzione acqua, scarichi, riscaldamento e gestione delle acque piovane." },
  { icon: Snowflake, title: "Climatizzatori", desc: "Installazione, manutenzione e assistenza climatizzatori, pompe di calore e VMC." },
  { icon: TreePine, title: "Tetti in legno", desc: "Strutture in legno lamellare, coperture tradizionali, pergole e verande su misura." },
];

export default function Servizi() {
  return (
    <>
      <section className="bg-ink py-14 sm:py-20 text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">Cosa facciamo</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase md:text-6xl">I nostri servizi</h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-background/70">
            Un'unica impresa per ogni tipo di intervento edile: dal piccolo rifacimento
            alla ristrutturazione completa chiavi in mano.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card transition-transform hover:-translate-y-1">
              <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl bg-gradient-accent text-primary-foreground">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <h2 className="mt-4 sm:mt-5 font-display text-lg sm:text-xl uppercase">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col gap-4 sm:flex-row sm:items-center justify-between rounded-2xl bg-secondary/50 p-6 sm:p-8">
          <div>
            <h3 className="font-display text-xl sm:text-2xl uppercase">Non trovi quello che cerchi?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Raccontaci il tuo progetto, troveremo la soluzione giusta.</p>
          </div>
          <Link
            to="/preventivo"
            className="touch-manipulation inline-flex items-center justify-center gap-2 rounded-md bg-gradient-accent px-6 py-3.5 sm:py-3 text-sm font-semibold text-primary-foreground shadow-glow shrink-0 active:scale-95"
          >
            Richiedi preventivo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
