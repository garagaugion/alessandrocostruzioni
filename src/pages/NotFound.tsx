import { Link } from "wouter";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-3 font-display text-4xl uppercase md:text-6xl">Pagina non trovata</h1>
      <p className="mt-4 text-muted-foreground">La pagina che cerchi non esiste o è stata spostata.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-semibold text-background"
      >
        Torna alla home
      </Link>
    </section>
  );
}
