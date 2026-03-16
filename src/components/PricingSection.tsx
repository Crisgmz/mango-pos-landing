import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { comparisonSections, faqItems, plans } from "@/content/pricing";
import { appUrl } from "@/content/site";

type PricingSectionProps = {
  mode?: "summary" | "full";
};

export default function PricingSection({ mode = "summary" }: PricingSectionProps) {
  const ref = useScrollReveal();
  const isFull = mode === "full";
  const getRegisterUrl = (planId: string) => `${appUrl.replace(/\/login$/, "")}/register?plan=${planId}`;
  const renderComparisonValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return (
        <span className={`text-2xl font-semibold ${value ? "text-success" : "text-muted-foreground/60"}`}>
          {value ? "✓" : "−"}
        </span>
      );
    }

    return <span className="text-sm font-body text-muted-foreground">{value}</span>;
  };

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
              ? "Cada plan responde a un nivel distinto de operación. Aquí puedes comparar alcance, soporte y capacidad de crecimiento para elegir la opción que mejor encaje con tu negocio."
              : "Compara de forma rápida el enfoque de cada plan y revisa luego el detalle completo de alcance, soporte y escalabilidad en la página de precios."}
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
                  asChild
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <a href={getRegisterUrl(plan.id)} rel="noreferrer" target="_blank">
                    {plan.ctaLabel ?? "Solicitar asesoría"}
                  </a>
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
                  <a href={getRegisterUrl(plan.id)} rel="noreferrer" target="_blank">14 Días Gratis</a>
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
            <div className="mt-16 rounded-2xl border border-border bg-background overflow-hidden">
              <div className="border-b border-border px-6 py-6 sm:px-8">
                <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Comparativa de features</span>
                <h3 className="mt-2 text-2xl font-heading font-bold text-foreground">
                  Compara qué incluye cada plan
                </h3>
                <p className="mt-3 text-sm font-body text-muted-foreground max-w-3xl leading-relaxed">
                  Mantenemos las tarjetas arriba para la decisión rápida, y aquí debajo dejamos la comparativa más detallada para quienes sí quieren revisar alcance antes de elegir.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[840px] border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-body font-medium text-muted-foreground">Feature</th>
                      <th className="px-6 py-4 text-center text-xs font-body font-medium text-muted-foreground">Base</th>
                      <th className="border-x-4 border-primary/80 px-6 py-4 text-center text-xs font-body font-medium text-muted-foreground">Pro</th>
                      <th className="px-6 py-4 text-center text-xs font-body font-medium text-muted-foreground">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonSections.map((section) => (
                      <Fragment key={section.title}>
                        <tr key={`${section.title}-header`}>
                          <td colSpan={4} className="bg-secondary px-6 py-4 text-left text-sm font-heading font-bold uppercase tracking-wide text-foreground">
                            {section.title}
                          </td>
                        </tr>
                        {section.rows.map((row) => (
                          <tr key={`${section.title}-${row.label}`}>
                            <td className="border-t border-border px-6 py-5 text-sm font-body text-foreground">{row.label}</td>
                            {row.values.map((value, valueIndex) => (
                              <td
                                key={`${section.title}-${row.label}-${valueIndex}`}
                                className={`border-t border-border px-6 py-5 text-center ${
                                  valueIndex === 1 ? "border-x-4 border-primary/80" : ""
                                }`}
                              >
                                {renderComparisonValue(value)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="faq" className="mt-16 max-w-5xl mx-auto">
              <div className="text-center">
                <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Preguntas frecuentes</span>
                <h3 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
                  Respuestas claras antes de tomar una decisión
                </h3>
                <p className="mt-3 text-sm font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Aquí respondemos las preguntas más importantes antes de elegir un plan: activación, soporte, cambios de plan y cómo funciona Enterprise.
                </p>
              </div>

              <Accordion className="mt-10" collapsible defaultValue="faq-0" type="single">
                {faqItems.map((item, index) => (
                  <AccordionItem key={item.question} value={`faq-${index}`} className="border-border">
                    <AccordionTrigger className="py-6 text-left text-xl font-heading font-bold text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base font-body leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
