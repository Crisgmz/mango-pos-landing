import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Básico",
    price: "$49.99",
    period: "/mes",
    desc: "1 caja",
    popular: false,
    features: ["Punto de venta", "Mesas", "Comprobantes fiscales", "Reportes básicos", "1 usuario"],
  },
  {
    name: "Profesional",
    price: "$74.99",
    period: "/mes",
    desc: "3 cajas",
    popular: true,
    features: ["Todo en Básico", "Inventario", "KDS", "Reportes avanzados", "5 usuarios", "Delivery"],
  },
  {
    name: "Empresarial",
    price: "$99.99",
    period: "/mes",
    desc: "Ilimitado",
    popular: false,
    features: ["Todo en Profesional", "Multi-sucursal", "API", "Subdominio", "Soporte dedicado"],
  },
];

export default function PricingSection() {
  const ref = useScrollReveal();

  return (
    <section id="precios" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Planes y precios</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Empieza gratis, crece con Mango
          </h2>
          <p className="mt-3 text-sm font-body text-muted-foreground">
            14 días gratis en cualquier plan. Sin tarjeta de crédito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-6 flex flex-col border ${
                plan.popular
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground"
              }`}
            >
              {plan.popular && (
                <span className="inline-block self-start px-2 py-0.5 rounded-full bg-background/20 text-[10px] font-body font-medium mb-3">
                  ⭐ Más popular
                </span>
              )}
              <h3 className="font-heading font-bold text-lg">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-heading font-bold">{plan.price}</span>
                <span className="text-sm font-body opacity-70">{plan.period}</span>
              </div>
              <p className={`text-xs font-body mt-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>

              <ul className="mt-5 space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm font-body flex items-start gap-2">
                    <span className={`mt-0.5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-6 w-full ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Empieza gratis
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
