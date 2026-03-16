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
          Lleva tu operación a una plataforma más ordenada, rápida y escalable
        </h2>

        <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
          Revisa las funciones, compara los planes y evalúa qué configuración encaja mejor con tu restaurante, cafetería, bar o negocio de comida.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Button asChild size="lg">
            <Link to={primaryLinks.features}>Explorar características</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to={primaryLinks.pricing}>14 Días Gratis</Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground font-body">
          Implementación guiada · Configuración operativa · Escalable según tu negocio
        </p>

        <p className="mt-3 text-xs text-muted-foreground font-body">
          ¿Ya tienes cuenta? <a className="text-foreground underline underline-offset-4" href={appUrl} rel="noreferrer" target="_blank">Iniciar Sesión</a>
        </p>
      </div>
    </section>
  );
}
