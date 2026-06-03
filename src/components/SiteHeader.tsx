import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, HardHat } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/galleria", label: "Galleria" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/contatti", label: "Contatti" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-display text-base sm:text-lg uppercase tracking-tight text-ink"
        >
          <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md bg-gradient-accent text-primary-foreground shadow-glow shrink-0">
            <HardHat className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <span>Alessandro<span className="text-primary">Costruzioni</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex ml-12 lg:ml-16">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                (l.to !== "/" && location.startsWith(l.to))
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/preventivo"
            className="touch-manipulation rounded-md bg-ink px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-95"
          >
            Preventivo gratuito
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="touch-manipulation rounded-md border border-border p-2 text-foreground md:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`py-3.5 text-base font-medium border-b border-border/50 last:border-0 ${
                  (l.to === "/" ? location === "/" : location.startsWith(l.to))
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/preventivo"
              onClick={() => setOpen(false)}
              className="mt-3 mb-1 rounded-md bg-ink px-4 py-3.5 text-center text-sm font-semibold text-background active:scale-95"
            >
              Preventivo gratuito
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
