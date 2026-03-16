import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { appUrl, primaryLinks } from "@/content/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FinalCTA() {
  const ref = useScrollReveal();

  return (
    <section id="contacto" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-body font-medium text-primary mb-6">
          Implementación acompañada
        </span>

        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
          ¿Quieres ver MangoPOS funcionando en una operación real?
        </h2>

        <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
          Explora el demo, revisa los planes y valida si encaja con tu restaurante. Si ya eres cliente, también puedes entrar directo al sistema desde aquí.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-5 text-left shadow-sm">
            <p className="text-xs font-body font-medium uppercase tracking-[0.18em] text-primary">Nuevo negocio</p>
            <h3 className="mt-2 text-xl font-heading font-bold text-foreground">Ver demo y evaluar implementación</h3>
            <p className="mt-2 text-sm font-body leading-relaxed text-muted-foreground">
              Ideal si todavía estás comparando opciones y quieres revisar el sistema antes de decidir.
            </p>
            <Button asChild className="mt-5 w-full" size="lg">
              <a href={appUrl} rel="noreferrer" target="_blank">Ver demo del sistema</a>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5 text-left shadow-sm">
            <p className="text-xs font-body font-medium uppercase tracking-[0.18em] text-primary">Evaluación comercial</p>
            <h3 className="mt-2 text-xl font-heading font-bold text-foreground">Revisar planes, alcance y soporte</h3>
            <p className="mt-2 text-sm font-body leading-relaxed text-muted-foreground">
              Mira qué incluye cada plan y qué nivel de acompañamiento encaja mejor con tu operación.
            </p>
            <Button asChild className="mt-5 w-full" size="lg" variant="outline">
              <Link to={primaryLinks.pricing}>Ver planes y precios</Link>
            </Button>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground font-body">
          Demo accesible · Activación guiada · Operación pensada para restaurantes en RD
        </p>

        <p className="mt-3 text-xs text-muted-foreground font-body">
          ¿Ya eres cliente? <a className="text-foreground underline underline-offset-4" href={appUrl} rel="noreferrer" target="_blank">Entrar al sistema</a>
        </p>
      </div>
    </section>
  );
}
