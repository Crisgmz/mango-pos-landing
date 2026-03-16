import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { comparisonRows, featureGroups, plans } from "@/content/pricing";

type PricingSectionProps = {
  mode?: "summary" | "full";
};

export default function PricingSection({ mode = "summary" }: PricingSectionProps) {
  const ref = useScrollReveal();
  const isFull = mode === "full";

  return (
    <section id="precios" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Planes y precios</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            {isFull ? "Planes para crecer al ritmo de tu operación" : "Planes claros para comenzar y escalar"}
          </h2>
          <p className="mt-3 text-sm font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {isFull
              ? "MangoPOS centraliza ventas, mesas, cocina, caja, productos, usuarios e impresión en una sola plataforma. El alcance final puede ajustarse luego con precios, límites y beneficios comerciales."
              : "En el home mostramos solo un resumen. Si quieres ver el detalle completo de cada plan, add-ons y alcance comercial, puedes abrir la pantalla de precios."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 flex flex-col border ${
                plan.popular
                  ? "border-success bg-success text-success-foreground shadow-lg shadow-success/15"
                  : "border-border bg-background text-foreground"
              }`}
            >
              {plan.badge && (
                <span className="inline-block self-start px-2.5 py-1 rounded-full bg-background/20 text-[10px] font-body font-medium mb-4">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-heading font-bold text-lg">{plan.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${plan.popular ? "text-success-foreground/80" : "text-muted-foreground"}`}>
                {plan.audience}
              </p>

              <div className="mt-5 flex items-end gap-1">
                <span className="text-3xl font-heading font-bold">{plan.priceLabel}</span>
                {plan.priceSuffix && (
                  <span className={`pb-1 text-sm font-body ${plan.popular ? "text-success-foreground/75" : "text-muted-foreground"}`}>
                    {plan.priceSuffix}
                  </span>
                )}
              </div>

              <p className={`text-xs font-body mt-1 ${plan.popular ? "text-success-foreground/70" : "text-muted-foreground"}`}>
                {plan.priceNote}
              </p>

              <p className={`text-sm font-body mt-4 leading-relaxed ${plan.popular ? "text-success-foreground/80" : "text-muted-foreground"}`}>
                {plan.copy}
              </p>

              <ul className="mt-5 space-y-2 flex-1">
                {(isFull ? plan.details : plan.summary).map((feature) => (
                  <li key={feature} className="text-sm font-body flex items-start gap-2">
                    <span className={`mt-0.5 ${plan.popular ? "text-success-foreground" : "text-primary"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {isFull ? (
                <Button
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {plan.ctaLabel ?? "Solicitar asesoría"}
                </Button>
              ) : (
                <Button
                  asChild
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <Link to="/precios">Ver más</Link>
                </Button>
              )}
            </div>
          ))}
        </div>

        {!isFull && (
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/precios">Ver todos los planes y detalles</Link>
            </Button>
          </div>
        )}

        {isFull && (
          <>
            <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Comparativa rápida</span>
                  <h3 className="mt-2 text-2xl font-heading font-bold text-foreground">
                    Qué cambia entre Base, Pro y Enterprise
                  </h3>
                </div>
                <p className="text-sm font-body text-muted-foreground max-w-xl leading-relaxed">
                  Así separas con claridad lo que ya viene incluido, lo que funciona como upgrade y lo que entra como propuesta premium o empresarial.
                </p>
              </div>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[720px] border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-body font-medium text-muted-foreground">Módulo</th>
                      <th className="px-4 py-3 text-left text-xs font-body font-medium text-muted-foreground">Base</th>
                      <th className="px-4 py-3 text-left text-xs font-body font-medium text-muted-foreground">Pro</th>
                      <th className="px-4 py-3 text-left text-xs font-body font-medium text-muted-foreground">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.label}>
                        <td className="border-t border-border px-4 py-3 text-sm font-body text-foreground">{row.label}</td>
                        {row.values.map((value) => (
                          <td
                            key={`${row.label}-${value}`}
                            className="border-t border-border px-4 py-3 text-sm font-body text-muted-foreground"
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-background p-6 sm:p-8">
              <div className="max-w-3xl">
                <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Características del sistema</span>
                <h3 className="mt-2 text-2xl font-heading font-bold text-foreground">
                  Todo lo que ya puede vender MangoPOS en la landing
                </h3>
                <p className="mt-3 text-sm font-body text-muted-foreground leading-relaxed">
                  Aquí concentramos las funcionalidades reales del sistema en bloques comerciales fáciles de entender, tomando como base los módulos que ya existen y los que están preparados para crecer.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {featureGroups.map((group) => (
                  <div key={group.title} className="rounded-xl border border-border bg-secondary/30 p-5">
                    <h4 className="font-heading font-bold text-base text-foreground">{group.title}</h4>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm font-body text-muted-foreground flex items-start gap-2">
                          <span className="mt-0.5 text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
