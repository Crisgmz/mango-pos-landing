import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroVideo from "../../assets/4524440-uhd_3840_2160_25fps.mov";
import heroDashboard from "../../assets/Imagenes/DASHBOARD.png";
import { primaryLinks } from "@/content/site";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section className="relative isolate overflow-hidden pt-24 pb-0 md:pt-28 md:pb-0">
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
          src={heroVideo}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,hsl(var(--background)/0.96)_0%,hsl(var(--background)/0.84)_36%,hsl(var(--background)/0.46)_70%,hsl(var(--background)/0.26)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--background)/0.97)_0%,transparent_58%)]" />

      <div className="relative z-20 max-w-[1500px] mx-auto pl-8 pr-0 sm:pl-10 sm:pr-0 lg:pl-16 lg:pr-0">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-2 lg:gap-4 items-stretch">
          <div className={`space-y-5 max-w-[500px] pt-6 md:pt-12 lg:pl-4 ${visible ? "animate-fade-up" : "opacity-0"}`}>

            <h1 className="max-w-[18ch] text-[2.65rem] sm:text-[3rem] lg:text-[3.2rem] font-heading font-bold leading-[1.1] tracking-tight text-left">
              <span className="block text-foreground">El sistema</span>
              <span className="block">
                <span className="text-[#f97316]">Mango</span>
                <span className="text-[#22c55e]">POS</span>
              </span>
              <span className="block text-foreground">para restaurantes</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Vende más rápido, cobra mejor y controla tu operación desde una sola plataforma pensada para restaurantes y negocios de comida que quieren crecer con más orden.
            </p>

            <div className="space-y-2.5 text-[15px] sm:text-base font-body text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-muted-foreground/70">✓</span>
                <span>Flujo de venta ágil para salón, mostrador y cocina.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-muted-foreground/70">✓</span>
                <span>Control operativo y estructura fiscal desde un solo sistema.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-muted-foreground/70">✓</span>
                <span>Diseñado para operaciones reales y crecimiento ordenado.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild size="lg">
                <Link to={primaryLinks.pricing}>14 Días Gratis</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to={primaryLinks.features}>Explorar funciones</Link>
              </Button>
            </div>
          </div>

          <div className={`relative min-h-[540px] md:min-h-[660px] ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <div className="absolute inset-0 top-[2.2rem] md:top-[4.1rem] md:left-32 lg:left-40 xl:left-44 md:-right-32 lg:-right-44 xl:-right-56 md:-bottom-32">
              <div className="relative h-full w-full overflow-hidden rounded-[8px] border border-white/70 bg-white shadow-[0_40px_100px_-35px_rgba(15,23,42,0.45)]">
                <img
                  alt="Dashboard de Mango POS"
                  className="h-full w-full object-cover object-left-top"
                  src={heroDashboard}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-background/18 to-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
