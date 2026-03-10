import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroVideo from "../../assets/4524440-uhd_3840_2160_25fps.mov";

const mesas = [
  { name: "Mesa 1", status: "Ocupada" },
  { name: "Mesa 2", status: "Libre" },
  { name: "Mesa 3", status: "Ocupada" },
  { name: "Mesa 4", status: "Pagando" },
  { name: "Mesa 5", status: "Libre" },
  { name: "Mesa 6", status: "Ocupada" },
  { name: "Mesa 7", status: "Libre" },
  { name: "Mesa 8", status: "Libre" },
];

const statusColor: Record<string, string> = {
  Ocupada: "bg-primary/10 text-primary border-primary/20",
  Libre: "bg-secondary text-muted-foreground border-border",
  Pagando: "bg-success/10 text-success border-success/20",
};

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={heroVideo} type="video/quicktime" />
        </video>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,hsl(var(--background)/0.94)_0%,hsl(var(--background)/0.78)_35%,hsl(var(--background)/0.34)_68%,hsl(var(--background)/0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--background)/0.95)_0%,transparent_58%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-6 ${visible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium">
              Sistema POS para restaurantes en RD
            </span>

            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-[1.1] text-foreground tracking-tight">
              El POS que tu restaurante necesitaba{" "}
              <span className="text-primary">desde siempre</span>
            </h1>

            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Gestiona mesas, cocina, inventario, facturación fiscal y reportes desde un solo lugar. Rápido, sencillo y listo para la DGII.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo("#precios")}>
                Empieza gratis 14 días
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollTo("#caracteristicas")}>
                Ver funciones
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {["JR", "MA", "PG", "LC"].map((initials, i) => {
                  const colors = ["bg-primary", "bg-success", "bg-primary/70", "bg-success/70"];
                  return (
                    <span
                      key={initials}
                      className={`w-8 h-8 rounded-full ${colors[i]} flex items-center justify-center text-xs font-heading font-bold text-primary-foreground border-2 border-background`}
                    >
                      {initials}
                    </span>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+200</span> restaurantes ya usan Mango POS
              </p>
            </div>
          </div>

          <div className={`relative ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <div className="absolute -top-2 -right-2 sm:right-4 z-10 animate-float-up">
              <div className="bg-background border border-border rounded-full px-3 py-1.5 shadow-sm flex items-center gap-2 text-xs font-body">
                <span className="w-2 h-2 rounded-full bg-success" />
                Orden enviada a cocina
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 sm:left-4 z-10 animate-float-down">
              <div className="bg-background border border-border rounded-full px-3 py-1.5 shadow-sm flex items-center gap-2 text-xs font-body">
                <span className="w-2 h-2 rounded-full bg-primary" />
                NCF generado automáticamente
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-success/40" />
                <span className="ml-2 text-xs text-muted-foreground font-body">Dashboard — Mango POS</span>
              </div>

              <div className="p-5 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-primary/5 rounded-md px-3 py-2">
                    <p className="text-[10px] text-muted-foreground font-body">Ventas hoy</p>
                    <p className="text-sm font-heading font-bold text-primary">RD$38,500</p>
                  </div>
                  <div className="bg-secondary rounded-md px-3 py-2">
                    <p className="text-[10px] text-muted-foreground font-body">Órdenes</p>
                    <p className="text-sm font-heading font-bold text-foreground">47</p>
                  </div>
                  <div className="bg-success/5 rounded-md px-3 py-2">
                    <p className="text-[10px] text-muted-foreground font-body">Mesas activas</p>
                    <p className="text-sm font-heading font-bold text-success">6/12</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {mesas.map((mesa) => (
                    <div key={mesa.name} className={`rounded-md border px-2 py-2 text-center ${statusColor[mesa.status]}`}>
                      <p className="text-[10px] font-heading font-semibold">{mesa.name}</p>
                      <p className="text-[9px] font-body">{mesa.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
