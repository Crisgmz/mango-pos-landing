import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    emoji: "🍽️",
    title: "Operación diaria",
    items: ["Punto de venta rápido", "Ventas por mesas y zonas", "División de cuentas", "Múltiples métodos de pago", "Caja apertura y cierre", "Historial de ventas y cierres", "Comandas a cocina e impresión automática", "Vista de cocina (KDS)"],
  },
  {
    emoji: "📋",
    title: "Menú y productos",
    items: ["Productos, categorías y menús", "Recetas e ingredientes", "Modificadores", "Impuestos inclusivos y exclusivos", "Promociones, cupones y gift cards"],
  },
  {
    emoji: "📦",
    title: "Inventario y compras",
    items: ["Control de inventario", "Kardex y ajustes", "Salidas y conciliación", "Órdenes de compra", "Recepción de compras con impacto automático en stock"],
  },
  {
    emoji: "📊",
    title: "Reportes y control",
    items: ["Reportes de ventas", "Reportes de caja", "Reportes de compras", "Reportes de inventario", "Trazabilidad operativa"],
  },
];

function FeatureCard({ emoji, title, items }: { emoji: string; title: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-card border border-border rounded-lg p-5 hover-lift cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">{emoji}</span>
          <h4 className="font-heading font-bold text-sm text-foreground">{title}</h4>
        </div>
        <svg
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-4" : "max-h-0"}`}
      >
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="text-sm text-muted-foreground font-body flex items-start gap-2">
              <span className="text-primary mt-0.5 text-xs">●</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const ref = useScrollReveal();

  return (
    <section id="funciones" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Funcionalidades</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
              Todo lo que tu operación necesita, en un solo sistema
            </h2>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-md">
              Desde la toma de pedidos hasta el cierre de caja, cada herramienta está pensada para la realidad del restaurante dominicano.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
