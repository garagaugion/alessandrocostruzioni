import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "393495049511";

type Step = {
  key: string;
  question: string;
  placeholder?: string;
  options?: string[];
  type?: "text" | "choice" | "textarea";
};

const steps: Step[] = [
  { key: "nome", question: "Ciao! 👋 Sono l'assistente di Alessandro Costruzioni. Come ti chiami?", placeholder: "Mario Rossi", type: "text" },
  { key: "tipo", question: "Perfetto {nome}! Che tipo di lavoro ti serve?", type: "choice", options: ["Ristrutturazione completa", "Ristrutturazione bagno", "Ristrutturazione cucina", "Rifacimento tetto", "Facciata / cappotto", "Muratura / opere edili", "Altro"] },
  { key: "luogo", question: "In quale città / zona si trova l'immobile?", placeholder: "Es. Milano, zona Navigli", type: "text" },
  { key: "mq", question: "Quanti metri quadri sono interessati (circa)?", placeholder: "Es. 80 mq", type: "text" },
  { key: "tempi", question: "Quando vorresti iniziare i lavori?", type: "choice", options: ["Il prima possibile", "Entro 1 mese", "Entro 3 mesi", "Sto solo valutando"] },
  { key: "budget", question: "Hai un budget indicativo in mente? (facoltativo)", type: "choice", options: ["< 5.000 €", "5.000 – 15.000 €", "15.000 – 40.000 €", "Oltre 40.000 €", "Preferisco non dirlo"] },
  { key: "dettagli", question: "Vuoi aggiungere altri dettagli sul lavoro?", placeholder: "Descrivi brevemente cosa vorresti realizzare…", type: "textarea" },
  { key: "telefono", question: "Ultimo passo: lasciami un recapito telefonico per richiamarti.", placeholder: "Es. 333 1234567", type: "text" },
];

type Msg = { from: "bot" | "user"; text: string };

function interpolate(text: string, answers: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, k) => answers[k] || "");
}

export function QuoteBot() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [stepIdx, setStepIdx] = useState(0);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: steps[0].question },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const done = stepIdx >= steps.length;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function submit(value: string) {
    const v = value.trim();
    if (!v) return;
    const current = steps[stepIdx];
    const nextAnswers = { ...answers, [current.key]: v };
    setAnswers(nextAnswers);
    setInput("");
    const newMsgs: Msg[] = [...messages, { from: "user", text: v }];
    const nextIdx = stepIdx + 1;
    if (nextIdx < steps.length) {
      newMsgs.push({ from: "bot", text: interpolate(steps[nextIdx].question, nextAnswers) });
    } else {
      newMsgs.push({
        from: "bot",
        text: `Grazie ${nextAnswers.nome}! Ho raccolto tutte le informazioni. ✅\nPremi il pulsante qui sotto per inviare la richiesta direttamente su WhatsApp.`,
      });
    }
    setMessages(newMsgs);
    setStepIdx(nextIdx);
  }

  function buildWhatsAppMessage() {
    const lines = [
      "🏗️ *Nuova richiesta di preventivo*",
      "",
      `👤 Nome: ${answers.nome || "-"}`,
      `🔧 Tipo lavoro: ${answers.tipo || "-"}`,
      `📍 Località: ${answers.luogo || "-"}`,
      `📐 Metri quadri: ${answers.mq || "-"}`,
      `📅 Tempi: ${answers.tempi || "-"}`,
      `💶 Budget: ${answers.budget || "-"}`,
      `📝 Dettagli: ${answers.dettagli || "-"}`,
      `📞 Telefono: ${answers.telefono || "-"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  }

  function sendWhatsApp() {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank");
  }

  function reset() {
    setAnswers({});
    setStepIdx(0);
    setMessages([{ from: "bot", text: steps[0].question }]);
  }

  const current = steps[stepIdx];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border bg-ink px-4 sm:px-5 py-3.5 sm:py-4 text-background">
        <span className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full bg-gradient-accent">
          <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
        <div>
          <p className="font-display text-sm uppercase tracking-wide">Assistente preventivi</p>
          <p className="text-xs text-background/60 hidden sm:block">Rispondi alle domande, riceveremo la richiesta su WhatsApp</p>
        </div>
      </div>

      {/* Chat messages */}
      <div ref={scrollRef} className="h-[360px] sm:h-[420px] space-y-3 sm:space-y-4 overflow-y-auto bg-secondary/40 p-4 sm:p-5">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            {m.from === "bot" && (
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Bot className="h-4 w-4" />
              </span>
            )}
            <div
              className={`max-w-[85%] sm:max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 sm:px-4 py-2.5 text-sm ${
                m.from === "user"
                  ? "rounded-br-sm bg-ink text-background"
                  : "rounded-bl-sm bg-background text-foreground shadow-sm"
              }`}
            >
              {m.text}
            </div>
            {m.from === "user" && (
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-background">
                <User className="h-4 w-4" />
              </span>
            )}
          </div>
        ))}

        {!done && current.type === "choice" && (
          <div className="flex flex-wrap gap-2 pt-1">
            {current.options!.map((opt) => (
              <button
                key={opt}
                onClick={() => submit(opt)}
                className="touch-manipulation rounded-full border border-primary/40 bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-border bg-card p-3.5 sm:p-4">
        {!done ? (
          current.type === "choice" ? (
            <p className="text-center text-xs text-muted-foreground py-1">Scegli un'opzione qui sopra</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="flex gap-2"
            >
              {current.type === "textarea" ? (
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={current.placeholder}
                  rows={2}
                  className="flex-1 resize-none rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              ) : (
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={current.placeholder}
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2.5 sm:py-2 text-sm focus:border-primary focus:outline-none"
                />
              )}
              <button
                type="submit"
                className="touch-manipulation grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gradient-accent text-primary-foreground active:scale-95"
                aria-label="Invia"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          )
        ) : (
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={sendWhatsApp}
              className="touch-manipulation flex flex-1 items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3.5 sm:py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Invia richiesta su WhatsApp
            </button>
            <button
              onClick={reset}
              className="touch-manipulation rounded-md border border-border bg-background px-4 py-3.5 sm:py-3 text-sm font-medium text-foreground hover:bg-secondary active:scale-95"
            >
              Ricomincia
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
