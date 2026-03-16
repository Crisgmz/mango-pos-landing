import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { features, getFeatureBySlug } from "@/content/features";

export default function FeaturePage() {
  const { slug = "" } = useParams();
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-body text-muted-foreground">No encontramos esta función.</p>
            <Link className="mt-4 inline-flex items-center gap-2 text-sm font-body font-medium text-primary" to="/">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedFeatures = features
    .filter((item) => item.slug !== feature.slug && item.menuGroup === feature.menuGroup)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-14 md:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground" to="/caracteristicas">
              <ArrowLeft className="h-4 w-4" />
              Volver a características
            </Link>

            <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-body font-medium uppercase tracking-wide text-primary">
                  {feature.category}
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
                  {feature.title}
                </h1>
                <p className="mt-5 text-base font-body leading-relaxed text-muted-foreground max-w-xl">
                  {feature.description}
                </p>

                <div className="mt-8 rounded-2xl border border-border bg-secondary/35 p-6">
                  <p className="text-sm font-heading font-semibold text-foreground">Qué aporta esta función</p>
                  <ul className="mt-4 space-y-3">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm font-body text-foreground">
                        <span className="mt-0.5 text-primary">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-border bg-background shadow-[0_22px_50px_-28px_rgba(15,23,42,0.35)]">
                <img alt={feature.alt} className="h-auto w-full object-cover" src={feature.image} />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Características clave</span>
                <h2 className="mt-2 text-2xl font-heading font-bold text-foreground">
                  Lo que puedes hacer desde este módulo
                </h2>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                      <span className="mt-0.5 text-primary">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/35 p-6 sm:p-8">
                <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Contexto comercial</span>
                <h2 className="mt-2 text-2xl font-heading font-bold text-foreground">
                  Cómo se vende esta capacidad dentro de MangoPOS
                </h2>
                <p className="mt-4 text-sm font-body leading-relaxed text-muted-foreground">
                  Esta función forma parte del enfoque de MangoPOS de centralizar operación, control y crecimiento en una sola plataforma. En la landing sirve para enseñar que el sistema no se queda en POS básico: también cubre cocina, fiscal, inventario, usuarios, sucursales y módulos avanzados según etapa.
                </p>

                {relatedFeatures.length > 0 && (
                  <div className="mt-8">
                    <p className="text-sm font-heading font-semibold text-foreground">Otras funciones relacionadas</p>
                    <div className="mt-4 grid gap-3">
                      {relatedFeatures.map((item) => (
                        <Link
                          key={item.slug}
                          className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
                          to={`/funciones/${item.slug}`}
                        >
                          <span>{item.shortTitle}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
