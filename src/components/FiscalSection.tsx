import { useScrollReveal } from "@/hooks/useScrollReveal";

const checks = [
  "Facturación fiscal con NCF automático",
  "ITBIS configurado según tipo de negocio",
  "Comprobantes con datos reales del contribuyente",
  "Historial fiscal completo y auditable",
];

export default function FiscalSection() {
  const ref = useScrollReveal();

  return (
    <section id="fiscal" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Fiscal y cumplimiento</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
              Listo para la DGII desde el primer día
            </h2>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-md">
              Genera comprobantes fiscales válidos, calcula el ITBIS automáticamente y mantén tu negocio en regla sin complicaciones.
            </p>
            <ul className="mt-6 space-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm font-body text-foreground">
                  <span className="text-success mt-0.5">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — receipt */}
          <div className="flex justify-center">
            <div className="bg-card border border-border rounded-lg p-6 w-full max-w-xs shadow-sm font-body">
              <div className="text-center mb-4 pb-4 border-b border-dashed border-border">
                <p className="font-heading font-bold text-sm text-foreground">La Terraza SRL</p>
                <p className="text-xs text-muted-foreground mt-1">RNC: 1-31-12345-6</p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tipo NCF</span>
                  <span className="text-foreground">Consumidor final</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">NCF</span>
                  <span className="text-primary font-semibold">B0200000042</span>
                </div>
              </div>

              <div className="my-4 border-t border-dashed border-border" />

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">RD$1,200.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ITBIS (18%)</span>
                  <span className="text-foreground">RD$216.00</span>
                </div>
                <div className="flex justify-between font-heading font-bold text-sm pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-success">RD$1,416.00</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-success/15 text-success text-[10px] font-medium">
                  Fiscalmente válido
                </span>
                <span className="px-2 py-1 rounded-full bg-success/15 text-success text-[10px] font-medium">
                  Enviado a DGII
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
