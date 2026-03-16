import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { num: "1", label: "Velocidad", title: "Vende con menos fricción", desc: "Mesas, caja, cobros y cocina conectados dentro del mismo flujo operativo.", featured: false },
  { num: "2", label: "Control", title: "Organiza la operación diaria", desc: "Productos, usuarios, cierres, reportes y configuración del negocio en una sola plataforma.", featured: true },
  { num: "3", label: "Flexibilidad", title: "Se adapta al tipo de servicio", desc: "Úsalo en salón, mostrador, cafetería, bar o formatos de comida rápida.", featured: false },
  { num: "4", label: "Equipo", title: "Trabaja con roles y permisos", desc: "Define accesos según el puesto y mantén más orden en caja y operación.", featured: false },
  { num: "5", label: "Escalabilidad", title: "Crece sin cambiar de sistema", desc: "Empieza con una operación sencilla y suma más control a medida que tu negocio evoluciona.", featured: false },
  { num: "6", label: "Fiscal", title: "Prepara tu operación para RD", desc: "Maneja impuestos y configuración fiscal desde una estructura pensada para República Dominicana.", featured: false },
];

export default function BenefitsSection() {
  const ref = useScrollReveal();

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Por qué Mango</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Diseñado para restaurantes dominicanos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.num}
              className={`relative rounded-lg p-6 hover-lift overflow-hidden ${
                b.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border"
              }`}
            >
              <span
                className={`absolute top-2 right-4 text-7xl font-heading font-bold leading-none select-none pointer-events-none ${
                  b.featured ? "text-primary-foreground/10" : "text-foreground/[0.04]"
                }`}
              >
                {b.num}
              </span>
              <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-body font-medium uppercase tracking-[0.16em] ${
                b.featured ? "bg-background/15 text-primary-foreground/90" : "bg-primary/10 text-primary"
              }`}>
                {b.label}
              </span>
              <h3 className="font-heading font-bold text-base mb-2">{b.title}</h3>
              <p className={`text-sm font-body leading-relaxed ${b.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
