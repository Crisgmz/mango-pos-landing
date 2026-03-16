export type Plan = {
  name: string;
  audience: string;
  copy: string;
  priceLabel: string;
  priceSuffix?: string;
  priceNote: string;
  ctaLabel?: string;
  popular?: boolean;
  badge?: string;
  summary: string[];
  details: string[];
};

export type ComparisonValue = boolean | string;

export type ComparisonSection = {
  title: string;
  rows: {
    label: string;
    values: [ComparisonValue, ComparisonValue, ComparisonValue];
  }[];
};

export const plans: Plan[] = [
  {
    name: "Base",
    audience: "Ideal para negocios que quieren comenzar a operar con orden y velocidad.",
    copy: "Todo lo esencial para vender, cobrar y operar tu restaurante en un solo lugar.",
    priceLabel: "$49.99",
    priceSuffix: "/mes",
    priceNote: "1 negocio / 1 sucursal",
    ctaLabel: "Empezar con Base",
    summary: [
      "Punto de venta, mesas y zonas",
      "Caja, cobros y cierres",
      "Comandas a cocina y KDS",
      "Productos, menús e impuestos",
    ],
    details: [
      "Punto de venta",
      "Venta por mesas y zonas",
      "Venta rápida y venta manual",
      "Carrito con cálculos automáticos",
      "Búsqueda, filtros y catálogo visual",
      "Modificadores y notas por producto",
      "Comandas a cocina",
      "Precuenta y división de cuenta",
      "Cobros en efectivo, tarjeta, transferencia y QR",
      "Apertura, cierre, ingresos y egresos de caja",
      "KDS de cocina",
      "Gestión de productos, categorías y menús",
      "Gestión de impuestos",
      "Usuarios y roles base",
      "Configuración de zonas, mesas e impresión",
      "Soporte base",
    ],
  },
  {
    name: "Pro",
    audience: "Ideal para negocios que necesitan más control operativo y administración.",
    copy: "Más control, más orden y más capacidad para crecer sin complicar la operación.",
    priceLabel: "$79.99",
    priceSuffix: "/mes",
    priceNote: "Más control operativo y mejor acompañamiento",
    popular: true,
    badge: "Más recomendado",
    ctaLabel: "Elegir Pro",
    summary: [
      "Todo en Base",
      "Usuarios y permisos avanzados",
      "Recetas y control operativo",
      "Clientes y soporte prioritario",
    ],
    details: [
      "Todo lo incluido en Base",
      "Gestión ampliada de empleados",
      "Permisos avanzados por usuario",
      "Overrides de permisos por usuario",
      "Recetas",
      "Mayor control de impresión por áreas",
      "Configuración operativa más completa",
      "Mayor organización del catálogo y del menú",
      "Clientes y base para historial de compras",
      "Más usuarios operativos",
      "Acompañamiento de implementación",
      "Soporte prioritario",
    ],
  },
  {
    name: "Enterprise",
    audience: "Ideal para marcas, cadenas o negocios que quieren una operación robusta y escalable.",
    copy: "La versión más completa de MangoPOS para operaciones que necesitan control, escalabilidad y acompañamiento cercano.",
    priceLabel: "A medida",
    priceNote: "Multi-sucursal y alcance comercial personalizado",
    ctaLabel: "Contactar ventas",
    summary: [
      "Todo en Pro",
      "Multi-sucursal",
      "Implementación acompañada",
      "Integraciones y módulos a medida",
    ],
    details: [
      "Todo lo incluido en Pro",
      "Multi-sucursal",
      "Mayor control administrativo por sede",
      "Parametrización avanzada del sistema",
      "Implementación acompañada",
      "Soporte premium",
      "Prioridad en mejoras",
      "Integraciones o adaptaciones a medida",
      "Activación de módulos avanzados según alcance",
      "Preparación para reportes avanzados",
      "Preparación para inventario, compras y promociones",
      "Preparación para fidelización, créditos y gift cards",
    ],
  },
];

export const comparisonSections: ComparisonSection[] = [
  {
    title: "Operación y ventas",
    rows: [
      { label: "Venta por mesas y zonas", values: [true, true, true] },
      { label: "Venta rápida y venta manual", values: [true, true, true] },
      { label: "Modificadores y notas por producto", values: [true, true, true] },
      { label: "Precuenta y división de cuenta", values: [true, true, true] },
      { label: "Comandas a cocina", values: [true, true, true] },
      { label: "KDS de cocina", values: [true, true, true] },
    ],
  },
  {
    title: "Caja y productos",
    rows: [
      { label: "Cobros en efectivo, tarjeta, transferencia y QR", values: [true, true, true] },
      { label: "Apertura, cierre, ingresos y egresos de caja", values: [true, true, true] },
      { label: "Productos, categorías y menús", values: [true, true, true] },
      { label: "Impuestos", values: [true, true, true] },
      { label: "Clientes", values: [false, true, true] },
      { label: "Recetas", values: [false, true, true] },
    ],
  },
  {
    title: "Control y escalabilidad",
    rows: [
      { label: "Usuarios y roles base", values: [true, true, true] },
      { label: "Permisos avanzados por usuario", values: [false, true, true] },
      { label: "Impresión por áreas", values: [false, true, true] },
      { label: "Implementación acompañada", values: [false, true, true] },
      { label: "Multi-sucursal", values: [false, false, true] },
      { label: "Integraciones o adaptaciones a medida", values: [false, false, true] },
    ],
  },
];

export const faqItems = [
  {
    question: "¿Cómo funciona la activación de MangoPOS?",
    answer:
      "Te ayudamos a configurar el negocio, definir cajas, zonas, mesas e impresión antes de salir a operación. En Pro y Enterprise el acompañamiento es más cercano y puede incluir implementación guiada.",
  },
  {
    question: "¿Puedo cambiar de plan más adelante?",
    answer:
      "Sí. Puedes comenzar con Base y pasar a Pro o Enterprise cuando necesites más control operativo, más usuarios, multi-sucursal o una implementación más consultiva.",
  },
  {
    question: "¿El plan Enterprise tiene precio fijo?",
    answer:
      "No. Enterprise se cotiza a medida porque depende del alcance: cantidad de sucursales, usuarios, acompañamiento de implementación, integraciones y módulos avanzados que se activen.",
  },
  {
    question: "¿MangoPOS sirve solo para restaurantes?",
    answer:
      "Está pensado para restaurantes y negocios de comida como cafeterías, bares, food trucks y operaciones con servicio en salón, mostrador o cocina con comandas.",
  },
  {
    question: "¿Incluyen soporte e implementación?",
    answer:
      "Sí. Base incluye soporte base. Pro suma soporte prioritario y acompañamiento de implementación. Enterprise incluye una atención más cercana y una puesta en marcha ajustada al negocio.",
  },
  {
    question: "¿Qué necesito para salir a producción?",
    answer:
      "Necesitas definir el plan, sucursal inicial, usuarios, cajas, zonas, mesas, impresoras y catálogo. A partir de ahí dejamos la operación lista para ventas, cocina y caja.",
  },
];
