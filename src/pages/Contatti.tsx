import { Phone, Mail, MessageCircle, FileText } from "lucide-react";

export default function Contatti() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contatti</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl uppercase md:text-6xl">Parliamone.</h1>
      <p className="mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
        Scegli il canale che preferisci. Rispondiamo in giornata.
      </p>

      <div className="mt-10 sm:mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href="https://wa.me/393495049511"
          target="_blank"
          rel="noreferrer"
          className="touch-manipulation group rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card transition-transform hover:-translate-y-1 active:scale-95"
        >
          <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl bg-whatsapp text-background">
            <MessageCircle className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg uppercase">WhatsApp</h3>
          <p className="mt-1 text-sm text-muted-foreground">349 504 9511</p>
        </a>
        <a
          href="tel:+393495049511"
          className="touch-manipulation group rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card transition-transform hover:-translate-y-1 active:scale-95"
        >
          <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl bg-gradient-accent text-primary-foreground">
            <Phone className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg uppercase">Telefono</h3>
          <p className="mt-1 text-sm text-muted-foreground">349 504 9511</p>
        </a>
        <a
          href="mailto:muresanalexandru@pec.it"
          className="touch-manipulation group rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card transition-transform hover:-translate-y-1 active:scale-95"
        >
          <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl bg-ink text-background">
            <Mail className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg uppercase">PEC</h3>
          <p className="mt-1 break-all text-sm text-muted-foreground">muresanalexandru@pec.it</p>
        </a>
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card">
          <span className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl bg-secondary text-foreground">
            <FileText className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg uppercase">Partita IVA</h3>
          <p className="mt-1 text-sm text-muted-foreground">16544511005</p>
        </div>
      </div>
    </section>
  );
}
