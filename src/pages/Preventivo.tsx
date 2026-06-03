import { QuoteBot } from "@/components/QuoteBot";
import { Check } from "lucide-react";

const benefits = [
  "Preventivo gratuito e senza impegno",
  "Risposta entro 24 ore",
  "Sopralluogo gratuito su appuntamento",
  "Tempi e costi chiari fin da subito",
];

export default function Preventivo() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Assistente preventivi</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase leading-[1.05] md:text-6xl">
            Raccontaci<br />
            <span className="text-primary">il tuo progetto.</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground">
            Rispondi a poche domande del nostro assistente. Al termine, premerai un
            pulsante per inviare tutte le informazioni direttamente sul nostro WhatsApp
            aziendale — niente form, niente attese.
          </p>

          <ul className="mt-6 sm:mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-accent text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10 rounded-xl border border-border bg-secondary/40 p-4 sm:p-5 text-sm text-muted-foreground">
            <strong className="text-foreground">Numero WhatsApp:</strong> 349 504 9511<br />
            <strong className="text-foreground">PEC:</strong> muresanalexandru@pec.it<br />
            <strong className="text-foreground">P.IVA:</strong> 16544511005
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <QuoteBot />
        </div>
      </div>
    </section>
  );
}
