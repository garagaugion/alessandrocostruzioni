import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 sm:mt-24 bg-ink text-background">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 px-4 sm:px-6 py-12 sm:py-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <h3 className="font-display text-xl sm:text-2xl uppercase">
            Alessandro <span className="text-primary-glow">Costruzioni</span>
          </h3>
          <p className="mt-3 max-w-sm text-sm text-background/70">
            Edilizia, ristrutturazioni e finiture su misura. Lavori a regola d'arte,
            preventivi chiari e tempi rispettati.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-glow">Contatti</h4>
          <ul className="space-y-2.5 text-sm text-background/80">
            <li>
              <a href="tel:+393495049511" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> 349 504 9511
              </a>
            </li>
            <li>
              <a href="mailto:muresanalexandru@pec.it" className="flex items-center gap-2 hover:text-background transition-colors break-all">
                <Mail className="h-4 w-4 shrink-0" /> muresanalexandru@pec.it
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> Italia
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-glow">Azienda</h4>
          <ul className="space-y-2.5 text-sm text-background/80">
            <li>P.IVA 16544511005</li>
            <li className="break-all">PEC: muresanalexandru@pec.it</li>
            <li>
              <Link to="/preventivo" className="underline-offset-4 hover:underline hover:text-background transition-colors">
                Richiedi preventivo
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-background/50 text-center sm:text-left">
          © {new Date().getFullYear()} Alessandro Costruzioni — Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
