import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { features, featureGroups } from "@/content/features";

export default function Caracteristicas() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-14 md:py-18 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Características de MangoPOS</span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
                Todos los módulos que puedes activar para operar, controlar y escalar
              </h1>
              <p className="mt-5 text-base font-body leading-relaxed text-muted-foreground max-w-3xl">
                Aquí concentramos la vista completa del producto. Desde ventas y cocina hasta fiscal, usuarios, sucursales, inventario, fidelización y crédito, cada módulo tiene contexto visual y una página propia.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12">
              {Object.values(featureGroups).map((group) => (
                <section key={group.title}>
                  <div className="max-w-2xl">
                    <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">{group.title}</span>
                    <h2 className="mt-2 text-3xl font-heading font-bold text-foreground">
                      {group.title}
                    </h2>
                  </div>

                  <div className="mt-8 grid gap-6 xl:grid-cols-2">
                    {group.items.map((feature) => (
                      <article
                        key={feature.slug}
                        className="overflow-hidden rounded-[28px] border border-border bg-background shadow-[0_18px_45px_-28px_rgba(15,23,42,0.28)]"
                      >
                        <div className="border-b border-border/80 p-6 sm:p-7">
                          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-body font-medium uppercase tracking-wide text-primary">
                            {feature.category}
                          </span>
                          <h3 className="mt-4 text-2xl font-heading font-bold text-foreground">
                            {feature.title}
                          </h3>
                          <p className="mt-3 text-sm font-body leading-relaxed text-muted-foreground">
                            {feature.description}
                          </p>

                          <ul className="mt-5 grid gap-2">
                            {feature.bullets.map((bullet) => (
                              <li key={bullet} className="flex items-start gap-2 text-sm font-body text-foreground">
                                <span className="mt-0.5 text-primary">•</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>

                          <Link
                            className="mt-6 inline-flex items-center gap-2 text-sm font-body font-medium text-foreground transition-colors hover:text-primary"
                            to={`/funciones/${feature.slug}`}
                          >
                            Ver página de esta función
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>

                        <div className="bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)] p-4 sm:p-5">
                          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                            <img
                              alt={feature.alt}
                              className="h-auto w-full object-cover"
                              loading="lazy"
                              src={feature.image}
                            />
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-secondary/35 p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Resumen</span>
                  <h2 className="mt-2 text-2xl font-heading font-bold text-foreground">
                    MangoPOS no se queda en POS básico
                  </h2>
                  <p className="mt-3 text-sm font-body leading-relaxed text-muted-foreground">
                    Ya contamos con módulos reales para ventas, cocina, productos, reportes, fiscal, usuarios, inventario, sucursales, fidelización y crédito. La idea es que el negocio pueda empezar ordenado y crecer sin cambiar de plataforma.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-3xl font-heading font-bold text-foreground">{features.length}</p>
                    <p className="mt-1 text-sm font-body text-muted-foreground">módulos visibles</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-3xl font-heading font-bold text-foreground">{featureGroups.operacion.items.length}</p>
                    <p className="mt-1 text-sm font-body text-muted-foreground">de operación</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-3xl font-heading font-bold text-foreground">{featureGroups.control.items.length}</p>
                    <p className="mt-1 text-sm font-body text-muted-foreground">de control</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-3xl font-heading font-bold text-foreground">{featureGroups.crecimiento.items.length}</p>
                    <p className="mt-1 text-sm font-body text-muted-foreground">para escalar</p>
                  </div>
                </div>
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
