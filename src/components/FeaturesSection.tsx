import combosImage from "../../assets/Imagenes/cambos.png";
import kitchenImage from "../../assets/Imagenes/Cocina.png";
import usersImage from "../../assets/Imagenes/Gestion de usuarios.png";
import productsImage from "../../assets/Imagenes/Productos.png";
import creditSalesImage from "../../assets/Imagenes/Ventas a credito.png";
import salesImage from "../../assets/Imagenes/Ventas.png";
import fiscalImage from "../../assets/Imagenes/configuracion de comprobantes.png";
import goalsImage from "../../assets/Imagenes/gestion de metas.png";
import branchesImage from "../../assets/Imagenes/gestion de sucursales.png";
import kardexImage from "../../assets/Imagenes/kardex por sucursal.png";
import reportsImage from "../../assets/Imagenes/reportes.png";
import loyaltyImage from "../../assets/Imagenes/tarjeta de fidelidad.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const modules = [
  {
    category: "Ventas",
    title: "Opera mesas, zonas y modos de venta sin cambiar de sistema",
    description:
      "La pantalla de ventas está pensada para salón, terraza, venta manual, express, delivery y self service desde un mismo flujo operativo.",
    bullets: [
      "Vista visual de mesas por zona",
      "Estados de mesa en tiempo real",
      "Asignación rápida y cobro desde la orden",
    ],
    image: salesImage,
    alt: "Pantalla de ventas por zona en MangoPOS",
  },
  {
    category: "Cocina",
    title: "Envía comandas a cocina y sigue el estado de preparación en vivo",
    description:
      "El módulo KDS organiza pedidos en espera, en preparación y completados para mejorar la comunicación entre salón, caja y cocina.",
    bullets: [
      "Órdenes separadas por estado",
      "Tiempos visibles por ticket",
      "Control de flujo para cocina en tiempo real",
    ],
    image: kitchenImage,
    alt: "Pantalla KDS de cocina en MangoPOS",
  },
  {
    category: "Productos",
    title: "Gestiona tu menú, categorías y disponibilidad desde una sola vista",
    description:
      "Administra el catálogo visual de productos, sus categorías, precios y disponibilidad operativa sin depender de hojas externas.",
    bullets: [
      "Listado de productos con filtros",
      "Control de precio promedio y disponibles",
      "Gestión simple del menú por categoría",
    ],
    image: productsImage,
    alt: "Pantalla de productos en MangoPOS",
  },
  {
    category: "Combos",
    title: "Crea paquetes, ofertas y combos que aumentan el ticket promedio",
    description:
      "Define combos con múltiples productos, descuentos y estado activo para impulsar ventas rápidas y promociones listas para operar.",
    bullets: [
      "Configuración de paquetes especiales",
      "Descuentos por combo",
      "Listado claro de productos incluidos",
    ],
    image: combosImage,
    alt: "Pantalla de combos en MangoPOS",
  },
  {
    category: "Reportes",
    title: "Consulta indicadores clave y reportes comerciales en un panel claro",
    description:
      "Ten una lectura rápida de ventas, tickets, clientes y reportes operativos para tomar decisiones con información actualizada.",
    bullets: [
      "Resumen mensual del negocio",
      "Reportes de ventas, compras e inventario",
      "Indicadores listos para análisis operativo",
    ],
    image: reportsImage,
    alt: "Pantalla de reportes en MangoPOS",
  },
  {
    category: "Usuarios y roles",
    title: "Administra tu equipo con usuarios, roles y permisos por operación",
    description:
      "Controla quién entra al sistema, qué rol tiene cada colaborador y cómo se organiza la operación por área o responsabilidad.",
    bullets: [
      "Gestión de usuarios activos e inactivos",
      "Roles por departamento",
      "Base lista para permisos avanzados",
    ],
    image: usersImage,
    alt: "Pantalla de gestión de usuarios en MangoPOS",
  },
  {
    category: "Fiscal",
    title: "Configura NCF y validaciones fiscales para operar listo para la DGII",
    description:
      "Maneja series NCF, validaciones antes de imprimir y ajustes fiscales desde una vista clara preparada para cumplimiento.",
    bullets: [
      "Series NCF activas e inactivas",
      "Validación antes de imprimir",
      "Base lista para e-CF y operación fiscal",
    ],
    image: fiscalImage,
    alt: "Pantalla de configuración fiscal en MangoPOS",
  },
  {
    category: "Metas",
    title: "Da seguimiento a objetivos operativos y de rendimiento del negocio",
    description:
      "Lleva control de metas por período, objetivo, avance actual y responsable para ordenar mejor la ejecución del equipo.",
    bullets: [
      "Seguimiento por meta activa",
      "Porcentaje de avance visible",
      "Responsables asignados por objetivo",
    ],
    image: goalsImage,
    alt: "Pantalla de gestión de metas en MangoPOS",
  },
  {
    category: "Sucursales",
    title: "Gestiona múltiples sucursales con control operativo por local",
    description:
      "Visualiza sucursales activas e inactivas, responsables, teléfonos y dirección desde un solo panel administrativo.",
    bullets: [
      "Base para operación multi-sucursal",
      "Listado centralizado por local",
      "Estado operativo por sucursal",
    ],
    image: branchesImage,
    alt: "Pantalla de gestión de sucursales en MangoPOS",
  },
  {
    category: "Inventario",
    title: "Supervisa inventario por ubicación con kardex visual por sucursal",
    description:
      "Consulta stock, mínimos y máximos por almacén o sucursal para detectar faltantes y mantener control del inventario.",
    bullets: [
      "Control por almacén o sucursal",
      "Alertas visuales de bajo mínimo",
      "Historial del último movimiento",
    ],
    image: kardexImage,
    alt: "Pantalla de kardex por sucursal en MangoPOS",
  },
  {
    category: "Fidelización",
    title: "Activa programas de puntos y tarjetas para retener clientes frecuentes",
    description:
      "Configura tarjetas, niveles y puntos acumulados para construir fidelización desde el mismo ecosistema del restaurante.",
    bullets: [
      "Tarjetas activas por cliente",
      "Niveles de fidelidad",
      "Puntos acumulados y estado de tarjeta",
    ],
    image: loyaltyImage,
    alt: "Pantalla de tarjeta de fidelidad en MangoPOS",
  },
  {
    category: "Crédito",
    title: "Maneja políticas y operaciones de ventas a crédito con seguimiento claro",
    description:
      "Define días máximos, inicial mínimo, saldo abierto y estado de facturas para controlar crédito comercial sin perder trazabilidad.",
    bullets: [
      "Política de crédito configurable",
      "Ventas pendientes, vencidas y pagadas",
      "Control del saldo abierto",
    ],
    image: creditSalesImage,
    alt: "Pantalla de ventas a crédito en MangoPOS",
  },
];

export default function FeaturesSection() {
  const ref = useScrollReveal();

  return (
    <section id="caracteristicas" className="py-20 md:py-28 bg-secondary/35" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Módulos reales</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
            Así se ve MangoPOS cuando ya está operando en el día a día
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Estas pantallas muestran módulos reales del sistema. La idea es que la landing no solo prometa funcionalidades, sino que también enseñe cómo se ve cada parte de la operación: ventas, cocina, fiscal, inventario, usuarios, reportes y más.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {modules.map((module) => (
            <article
              key={module.title}
              className="overflow-hidden rounded-[28px] border border-border bg-background shadow-[0_18px_45px_-28px_rgba(15,23,42,0.28)]"
            >
              <div className="border-b border-border/80 p-6 sm:p-7">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-body font-medium uppercase tracking-wide text-primary">
                  {module.category}
                </span>
                <h3 className="mt-4 text-2xl font-heading font-bold text-foreground">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm font-body leading-relaxed text-muted-foreground">
                  {module.description}
                </p>

                <ul className="mt-5 grid gap-2">
                  {module.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm font-body text-foreground">
                      <span className="mt-0.5 text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)] p-4 sm:p-5">
                <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
                  <img
                    alt={module.alt}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                    src={module.image}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
