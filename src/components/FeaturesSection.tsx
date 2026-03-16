import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featureGroups } from "@/content/features";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FeaturesSection() {
  const ref = useScrollReveal();
  const groups = Object.values(featureGroups);

  return (
    <section id="caracteristicas" className="py-20 md:py-28 bg-secondary/35" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Características</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
            En el home dejamos solo un resumen
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            La explicación completa de módulos, capturas y páginas individuales vive en `Características`. Aquí solo mostramos cómo se organiza MangoPOS para que la portada no se sienta cargada.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-border bg-background p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.28)]"
            >
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-body font-medium uppercase tracking-wide text-primary">
                {group.title}
              </span>
              <p className="mt-4 text-3xl font-heading font-bold text-foreground">
                {group.items.length}
              </p>
              <p className="mt-1 text-sm font-body text-muted-foreground">
                módulos visibles en esta categoría
              </p>

              <div className="mt-6 space-y-3">
                {group.items.slice(0, 4).map((item) => (
                  <p key={item.slug} className="text-sm font-body text-foreground">
                    {item.shortTitle}
                  </p>
                ))}
              </div>

              <p className="mt-6 text-sm font-body leading-relaxed text-muted-foreground">
                El detalle visual y comercial de este bloque está concentrado en la página de características.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-body font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            to="/caracteristicas"
          >
            Ver todas las características
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
