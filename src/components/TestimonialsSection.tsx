import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    initials: "JR",
    name: "Juan Rodríguez",
    role: "El Fogón del Sur",
    color: "bg-primary",
    quote: "Antes usábamos papel para las comandas. Con Mango el mesero manda la orden y en cocina ya aparece en pantalla.",
  },
  {
    initials: "MA",
    name: "María Altagracia",
    role: "Café Bohío",
    color: "bg-success",
    quote: "El inventario me cambió la vida. Sé exactamente qué tengo, qué se agotó y cuándo pedir.",
  },
  {
    initials: "PG",
    name: "Pedro González",
    role: "La Terraza SD",
    color: "bg-primary/70",
    quote: "Los NCF se generan solos, los comprobantes salen correctos y el contador está feliz.",
  },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal();

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Clientes</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.initials} className="bg-background border border-border rounded-lg p-6 hover-lift">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="text-sm font-body text-foreground leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <span className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-heading font-bold text-primary-foreground`}>
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
