import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { num: "1", emoji: "⚡", title: "Vende más rápido", desc: "Mesas, caja, pagos, cocina e impresión en un solo sistema.", featured: false },
  { num: "2", emoji: "🎯", title: "Controla tu operación", desc: "Inventario, compras, recetas, cierres y reportes en tiempo real.", featured: true },
  { num: "3", emoji: "🧩", title: "Adáptalo a tu negocio", desc: "Restaurante, comida rápida, bar, cafetería, delivery o food truck.", featured: false },
  { num: "4", emoji: "👥", title: "Administra tu equipo", desc: "Usuarios, roles, permisos y supervisión centralizada.", featured: false },
  { num: "5", emoji: "🏪", title: "Multi-sucursal", desc: "Subdominio por negocio, cajas e impresoras por local.", featured: false },
  { num: "6", emoji: "📈", title: "Cumple y crece", desc: "NCF, ITBIS, comprobantes listos para operar en RD.", featured: false },
];

export default function BenefitsSection() {
  const ref = useScrollReveal();

  return (
    <section className="bg-muted py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Por qué Mango</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Diseñado para restaurantes dominicanos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.num}
              className={`relative rounded-lg p-6 hover-lift overflow-hidden ${
                b.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border"
              }`}
            >
              <span
                className={`absolute top-2 right-4 text-7xl font-heading font-bold leading-none select-none pointer-events-none ${
                  b.featured ? "text-primary-foreground/10" : "text-foreground/[0.04]"
                }`}
              >
                {b.num}
              </span>
              <span className="text-xl mb-3 block">{b.emoji}</span>
              <h3 className="font-heading font-bold text-base mb-2">{b.title}</h3>
              <p className={`text-sm font-body leading-relaxed ${b.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
