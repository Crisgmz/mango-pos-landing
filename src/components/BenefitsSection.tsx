import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionLabel from "@/components/SectionLabel";

const benefits = [
  { num: "1", label: "Velocidad", title: "Vende con menos fricción", desc: "Mesas, caja, cobros y cocina conectados dentro del mismo flujo operativo.", highlight: false },
  { num: "2", label: "Control", title: "Organiza la operación diaria", desc: "Productos, usuarios, cierres, reportes y configuración del negocio en una sola plataforma.", highlight: true },
  { num: "3", label: "Flexibilidad", title: "Se adapta al tipo de servicio", desc: "Úsalo en salón, mostrador, cafetería, bar o formatos de comida rápida.", highlight: false },
  { num: "4", label: "Equipo", title: "Trabaja con roles y permisos", desc: "Define accesos según el puesto y mantén más orden en caja y operación.", highlight: true },
  { num: "5", label: "Escalabilidad", title: "Crece sin cambiar de sistema", desc: "Empieza con una operación sencilla y suma más control a medida que tu negocio evoluciona.", highlight: false },
  { num: "6", label: "Fiscal", title: "Configura tu operación fiscal", desc: "Maneja impuestos y configuraciones fiscales desde una estructura adaptable según tu operación.", highlight: true },
];

export default function BenefitsSection() {
  const ref = useScrollReveal();

  return (
    <section id="beneficios" className="py-16 md:py-20 bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <SectionLabel label="Por qué Mango" variant={1} className="mx-auto" />
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
            <span className="block text-foreground">
              Diseñado para <span className="text-[#f97316]">restaurantes</span>
            </span>
            <span className="block text-foreground">
              y negocios de <span className="text-[#22c55e]">comida</span>
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => {
            const isHighlighted = !!b.highlight;
            return (
              <div
                key={b.num}
                className={`relative rounded-lg p-6 hover-lift overflow-hidden ${
                  isHighlighted
                    ? "bg-[#f97316] text-white border-transparent shadow-[0_15px_45px_rgba(249,115,22,0.25)]"
                    : "bg-background border border-border text-foreground"
                }`}
              >
                <span
                  className={`absolute top-2 right-4 text-7xl font-heading font-bold leading-none select-none pointer-events-none ${
                    isHighlighted ? "text-white/20" : "text-foreground/[0.04]"
                  }`}
                >
                  {b.num}
                </span>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[11px] font-body font-medium uppercase tracking-[0.16em] ${
                    isHighlighted ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}
                >
                  {b.label}
                </span>
                <h3 className="font-heading font-bold text-base mb-2">{b.title}</h3>
                <p className={`text-sm font-body leading-relaxed ${isHighlighted ? "text-white/80" : "text-muted-foreground"}`}>
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
