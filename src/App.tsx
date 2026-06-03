import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Home from "@/pages/Home";
import Servizi from "@/pages/Servizi";
import Galleria from "@/pages/Galleria";
import ChiSiamo from "@/pages/ChiSiamo";
import Contatti from "@/pages/Contatti";
import Preventivo from "@/pages/Preventivo";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/servizi" component={Servizi} />
          <Route path="/galleria" component={Galleria} />
          <Route path="/chi-siamo" component={ChiSiamo} />
          <Route path="/contatti" component={Contatti} />
          <Route path="/preventivo" component={Preventivo} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
