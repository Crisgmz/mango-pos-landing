import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroPreview from "../../assets/FireShot Capture 023 - MangoPOS - [sistematest.mangopos.do].png";
import mangoLogo from "../../Artboard 1logo.png";
import { appUrl, primaryLinks } from "@/content/site";

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

  return (
    <section className="relative isolate overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          alt="Vista previa de Mango POS"
          className="h-full w-full object-cover object-top"
          loading="eager"
          src={heroPreview}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,hsl(var(--background)/0.96)_0%,hsl(var(--background)/0.84)_36%,hsl(var(--background)/0.46)_70%,hsl(var(--background)/0.26)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--background)/0.97)_0%,transparent_58%)]" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-6 ${visible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium">
              Sistema POS para restaurantes en RD
            </span>

            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-[1.1] text-foreground tracking-tight">
              Cobra más rápido, organiza cocina y controla tu operación con{" "}
              <span className="text-primary">Mango POS</span>
            </h1>

            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Un sistema POS pensado para restaurantes en República Dominicana: mesas, comandas, cocina, inventario, caja, reportes y operación lista para la DGII.
            </p>

            <div className="grid gap-2 text-sm font-body text-muted-foreground sm:grid-cols-2 max-w-xl">
              <div className="rounded-lg border border-border bg-background/70 px-3 py-2">Implementación guiada según tu operación</div>
              <div className="rounded-lg border border-border bg-background/70 px-3 py-2">Cobros, NCF y control operativo en un solo lugar</div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={appUrl} rel="noreferrer" target="_blank">Ver demo del sistema</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to={primaryLinks.pricing}>Ver planes y precios</Link>
              </Button>
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
                <img
                  alt="Mango POS"
                  className="ml-2 h-8 w-auto object-contain"
                  src={mangoLogo}
                />
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
