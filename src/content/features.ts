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

export type Feature = {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  highlights: string[];
  image: string;
  alt: string;
  menuGroup: "operacion" | "control" | "crecimiento";
};

export const features: Feature[] = [
  {
    slug: "ventas-por-zona",
    category: "Ventas",
    shortTitle: "Ventas por zona",
    title: "Opera mesas, zonas y modos de venta sin cambiar de sistema",
    shortDescription: "Mesas, zonas, venta manual, express y delivery desde una sola vista.",
    description:
      "La pantalla de ventas está pensada para salón, terraza, venta manual, express, delivery y self service desde un mismo flujo operativo.",
    bullets: [
      "Vista visual de mesas por zona",
      "Estados de mesa en tiempo real",
      "Asignación rápida y cobro desde la orden",
    ],
    highlights: [
      "Reduce fricción en la toma de pedidos",
      "Ordena la operación del salón en tiempo real",
      "Permite trabajar varios modos de venta sin duplicar procesos",
    ],
    image: salesImage,
    alt: "Pantalla de ventas por zona en MangoPOS",
    menuGroup: "operacion",
  },
  {
    slug: "kds-cocina",
    category: "Cocina",
    shortTitle: "KDS de cocina",
    title: "Envía comandas a cocina y sigue el estado de preparación en vivo",
    shortDescription: "Pedidos en espera, en preparación y listos desde una sola cola visual.",
    description:
      "El módulo KDS organiza pedidos en espera, en preparación y completados para mejorar la comunicación entre salón, caja y cocina.",
    bullets: [
      "Órdenes separadas por estado",
      "Tiempos visibles por ticket",
      "Control de flujo para cocina en tiempo real",
    ],
    highlights: [
      "Disminuye errores entre caja y cocina",
      "Facilita el seguimiento de tiempos de preparación",
      "Ayuda a ordenar el trabajo por prioridad",
    ],
    image: kitchenImage,
    alt: "Pantalla KDS de cocina en MangoPOS",
    menuGroup: "operacion",
  },
  {
    slug: "gestion-de-productos",
    category: "Productos",
    shortTitle: "Gestión de productos",
    title: "Gestiona tu menú, categorías y disponibilidad desde una sola vista",
    shortDescription: "Catálogo visual, categorías, precios y disponibilidad operativa.",
    description:
      "Administra el catálogo visual de productos, sus categorías, precios y disponibilidad operativa sin depender de hojas externas.",
    bullets: [
      "Listado de productos con filtros",
      "Control de precio promedio y disponibles",
      "Gestión simple del menú por categoría",
    ],
    highlights: [
      "Mantiene el menú ordenado y actualizado",
      "Facilita cambios rápidos de disponibilidad",
      "Da visibilidad clara al catálogo operativo",
    ],
    image: productsImage,
    alt: "Pantalla de productos en MangoPOS",
    menuGroup: "operacion",
  },
  {
    slug: "combos-y-promociones",
    category: "Combos",
    shortTitle: "Combos y promociones",
    title: "Crea paquetes, ofertas y combos que aumentan el ticket promedio",
    shortDescription: "Combos con productos, descuentos y estado activo listos para vender.",
    description:
      "Define combos con múltiples productos, descuentos y estado activo para impulsar ventas rápidas y promociones listas para operar.",
    bullets: [
      "Configuración de paquetes especiales",
      "Descuentos por combo",
      "Listado claro de productos incluidos",
    ],
    highlights: [
      "Ayuda a vender ofertas de forma más ordenada",
      "Mejora el ticket promedio con paquetes definidos",
      "Permite activar o pausar promociones sin fricción",
    ],
    image: combosImage,
    alt: "Pantalla de combos en MangoPOS",
    menuGroup: "operacion",
  },
  {
    slug: "reportes",
    category: "Reportes",
    shortTitle: "Reportes",
    title: "Consulta indicadores clave y reportes comerciales en un panel claro",
    shortDescription: "Ventas, tickets, clientes y reportes operativos para decidir mejor.",
    description:
      "Ten una lectura rápida de ventas, tickets, clientes y reportes operativos para tomar decisiones con información actualizada.",
    bullets: [
      "Resumen mensual del negocio",
      "Reportes de ventas, compras e inventario",
      "Indicadores listos para análisis operativo",
    ],
    highlights: [
      "Da visibilidad rápida del rendimiento",
      "Facilita revisar ventas y compras por período",
      "Ayuda a detectar oportunidades y desviaciones",
    ],
    image: reportsImage,
    alt: "Pantalla de reportes en MangoPOS",
    menuGroup: "control",
  },
  {
    slug: "usuarios-y-roles",
    category: "Usuarios y roles",
    shortTitle: "Usuarios y roles",
    title: "Administra tu equipo con usuarios, roles y permisos por operación",
    shortDescription: "Control de usuarios activos, roles y estructura operativa por área.",
    description:
      "Controla quién entra al sistema, qué rol tiene cada colaborador y cómo se organiza la operación por área o responsabilidad.",
    bullets: [
      "Gestión de usuarios activos e inactivos",
      "Roles por departamento",
      "Base lista para permisos avanzados",
    ],
    highlights: [
      "Ordena el acceso al sistema por responsabilidad",
      "Ayuda a controlar mejor la operación diaria",
      "Prepara el negocio para crecer con más equipo",
    ],
    image: usersImage,
    alt: "Pantalla de gestión de usuarios en MangoPOS",
    menuGroup: "control",
  },
  {
    slug: "configuracion-fiscal",
    category: "Fiscal",
    shortTitle: "Configuración fiscal",
    title: "Configura NCF y validaciones fiscales para operar listo para la DGII",
    shortDescription: "Series NCF, validaciones y operación fiscal preparada para RD.",
    description:
      "Maneja series NCF, validaciones antes de imprimir y ajustes fiscales desde una vista clara preparada para cumplimiento.",
    bullets: [
      "Series NCF activas e inactivas",
      "Validación antes de imprimir",
      "Base lista para e-CF y operación fiscal",
    ],
    highlights: [
      "Reduce errores al momento de facturar",
      "Facilita la configuración fiscal del negocio",
      "Ayuda a operar con mayor orden frente a la DGII",
    ],
    image: fiscalImage,
    alt: "Pantalla de configuración fiscal en MangoPOS",
    menuGroup: "control",
  },
  {
    slug: "gestion-de-metas",
    category: "Metas",
    shortTitle: "Gestión de metas",
    title: "Da seguimiento a objetivos operativos y de rendimiento del negocio",
    shortDescription: "Objetivos, avance, responsables y seguimiento por período.",
    description:
      "Lleva control de metas por período, objetivo, avance actual y responsable para ordenar mejor la ejecución del equipo.",
    bullets: [
      "Seguimiento por meta activa",
      "Porcentaje de avance visible",
      "Responsables asignados por objetivo",
    ],
    highlights: [
      "Ayuda a medir cumplimiento operativo",
      "Ordena objetivos por área y responsable",
      "Da visibilidad simple del avance mensual o trimestral",
    ],
    image: goalsImage,
    alt: "Pantalla de gestión de metas en MangoPOS",
    menuGroup: "control",
  },
  {
    slug: "gestion-de-sucursales",
    category: "Sucursales",
    shortTitle: "Sucursales",
    title: "Gestiona múltiples sucursales con control operativo por local",
    shortDescription: "Sucursales activas, responsables y estado operativo por local.",
    description:
      "Visualiza sucursales activas e inactivas, responsables, teléfonos y dirección desde un solo panel administrativo.",
    bullets: [
      "Base para operación multi-sucursal",
      "Listado centralizado por local",
      "Estado operativo por sucursal",
    ],
    highlights: [
      "Facilita administrar más de una sede",
      "Centraliza la información básica de cada local",
      "Prepara la operación para crecer de forma ordenada",
    ],
    image: branchesImage,
    alt: "Pantalla de gestión de sucursales en MangoPOS",
    menuGroup: "crecimiento",
  },
  {
    slug: "kardex-por-sucursal",
    category: "Inventario",
    shortTitle: "Kardex por sucursal",
    title: "Supervisa inventario por ubicación con kardex visual por sucursal",
    shortDescription: "Stock, mínimos, almacenes y alertas por sucursal o ubicación.",
    description:
      "Consulta stock, mínimos y máximos por almacén o sucursal para detectar faltantes y mantener control del inventario.",
    bullets: [
      "Control por almacén o sucursal",
      "Alertas visuales de bajo mínimo",
      "Historial del último movimiento",
    ],
    highlights: [
      "Ayuda a evitar quiebres de inventario",
      "Da visibilidad real por ubicación",
      "Mejora el seguimiento de stock operativo",
    ],
    image: kardexImage,
    alt: "Pantalla de kardex por sucursal en MangoPOS",
    menuGroup: "crecimiento",
  },
  {
    slug: "tarjeta-de-fidelidad",
    category: "Fidelización",
    shortTitle: "Fidelización",
    title: "Activa programas de puntos y tarjetas para retener clientes frecuentes",
    shortDescription: "Tarjetas, niveles y puntos acumulados desde el mismo ecosistema.",
    description:
      "Configura tarjetas, niveles y puntos acumulados para construir fidelización desde el mismo ecosistema del restaurante.",
    bullets: [
      "Tarjetas activas por cliente",
      "Niveles de fidelidad",
      "Puntos acumulados y estado de tarjeta",
    ],
    highlights: [
      "Fortalece la recompra de clientes frecuentes",
      "Ordena beneficios por niveles o tarjetas",
      "Centraliza el seguimiento de puntos en el sistema",
    ],
    image: loyaltyImage,
    alt: "Pantalla de tarjeta de fidelidad en MangoPOS",
    menuGroup: "crecimiento",
  },
  {
    slug: "ventas-a-credito",
    category: "Crédito",
    shortTitle: "Ventas a crédito",
    title: "Maneja políticas y operaciones de ventas a crédito con seguimiento claro",
    shortDescription: "Políticas, vencimientos, pagos y saldo abierto con trazabilidad.",
    description:
      "Define días máximos, inicial mínimo, saldo abierto y estado de facturas para controlar crédito comercial sin perder trazabilidad.",
    bullets: [
      "Política de crédito configurable",
      "Ventas pendientes, vencidas y pagadas",
      "Control del saldo abierto",
    ],
    highlights: [
      "Permite dar crédito con más control",
      "Facilita el seguimiento de cuentas por cobrar",
      "Ordena estados y vencimientos desde una sola vista",
    ],
    image: creditSalesImage,
    alt: "Pantalla de ventas a crédito en MangoPOS",
    menuGroup: "crecimiento",
  },
];

export const featureGroups = {
  operacion: {
    title: "Operación diaria",
    items: features.filter((feature) => feature.menuGroup === "operacion"),
  },
  control: {
    title: "Control y administración",
    items: features.filter((feature) => feature.menuGroup === "control"),
  },
  crecimiento: {
    title: "Escalabilidad",
    items: features.filter((feature) => feature.menuGroup === "crecimiento"),
  },
};

export const getFeatureBySlug = (slug: string) =>
  features.find((feature) => feature.slug === slug);
