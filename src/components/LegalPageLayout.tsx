import { Link } from "react-router-dom";
import { ArrowLeft, Clock3, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { legalMeta } from "@/content/legal";

type SectionLink = {
  id: string;
  label: string;
};

type LegalPageLayoutProps = {
  badge: string;
  title: string;
  description: string;
  effectiveDate: string;
  updatedAt: string;
  sectionLinks: SectionLink[];
  children: React.ReactNode;
};

export default function LegalPageLayout({
  badge,
  title,
  description,
  effectiveDate,
  updatedAt,
  sectionLinks,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,hsl(var(--secondary)/0.55)_0%,hsl(var(--background))_100%)] py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,hsl(var(--success)/0.08),transparent_34%),radial-gradient(circle_at_right,hsl(var(--primary)/0.10),transparent_28%)]" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div>
                <span className="inline-flex rounded-full border border-success/20 bg-success/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-success">
                  {badge}
                </span>

                <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] leading-tight">
                  {title}
                </h1>

                <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background/90 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur">
                <div className="grid gap-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 text-success" />
                    <div>
                      <p className="font-semibold text-foreground">Documento vigente</p>
                      <p>En vigor desde {effectiveDate}</p>
                      <p>Actualizado el {updatedAt}</p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-3">
                    <p className="font-semibold text-foreground">Contacto legal</p>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 text-success" />
                      <span>{legalMeta.legalEmail}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 text-success" />
                      <span>{legalMeta.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 text-success" />
                      <span>{legalMeta.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl border border-border bg-secondary/35 p-5">
                  <p className="text-sm font-semibold text-foreground">En esta página</p>
                  <nav className="mt-4 space-y-1.5">
                    {sectionLinks.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="rounded-[2rem] border border-border bg-background p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] sm:p-8 lg:p-10">
                <div className="legal-content max-w-none">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
