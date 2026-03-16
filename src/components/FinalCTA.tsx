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
          Listo para salir a producción con MangoPOS
        </h2>

        <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
          Ya puedes revisar funciones, precios y alcance comercial desde la landing. El siguiente paso es elegir tu plan y entrar al sistema con una configuración pensada para tu operación.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Button asChild size="lg">
            <Link to={primaryLinks.pricing}>Ver planes y precios</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={appUrl} rel="noreferrer" target="_blank">Entrar al sistema</a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground font-body">
          Activación guiada · Soporte según plan · Operación lista para crecer
        </p>
      </div>
    </section>
  );
}
