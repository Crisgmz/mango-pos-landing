import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FinalCTA() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium mb-6">
          🥭 Sin tarjeta de crédito requerida
        </span>

        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
          ¿Listo para modernizar tu restaurante?
        </h2>

        <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
          Únete a cientos de restaurantes dominicanos que ya operan con Mango POS. Configúralo en minutos, sin complicaciones.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Button size="lg">Empieza gratis 14 días</Button>
          <Button variant="ghost" size="lg">Hablar con ventas</Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground font-body">
          Sin permanencia · Cancela cuando quieras · Soporte incluido
        </p>
      </div>
    </section>
  );
}
