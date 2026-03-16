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

export const comparisonRows = [
  { label: "Ventas, mesas y zonas", values: ["Incluido", "Incluido", "Incluido"] },
  { label: "Caja y métodos de pago", values: ["Incluido", "Incluido", "Incluido"] },
  { label: "Comandas y KDS", values: ["Incluido", "Incluido", "Incluido"] },
  { label: "Productos, categorías y menús", values: ["Incluido", "Incluido", "Incluido"] },
  { label: "Modificadores y notas", values: ["Incluido", "Incluido", "Incluido"] },
  { label: "Usuarios y roles", values: ["Base", "Avanzado", "Avanzado"] },
  { label: "Recetas", values: ["No", "Incluido", "Incluido"] },
  { label: "Clientes", values: ["Base", "Incluido", "Incluido"] },
  { label: "Impresión por áreas", values: ["Base", "Incluido", "Incluido"] },
  { label: "Multi-sucursal", values: ["No", "No", "Incluido"] },
  { label: "Implementación acompañada", values: ["No", "Incluido", "Incluido"] },
  { label: "Soporte", values: ["Base", "Prioritario", "Premium"] },
];

export const featureGroups = [
  {
    title: "Ventas y operación POS",
    items: [
      "Venta por zonas y mesas",
      "Venta rápida para pedidos express",
      "Venta manual",
      "Base para delivery y self service",
      "Selección visual de mesas por zona",
      "Estados de mesa y apertura de orden",
      "Carrito con cálculos automáticos",
      "Búsqueda, filtros y catálogo visual de productos",
      "Modificadores, notas y ajuste de cantidades",
      "Precuenta, subcuentas y división de cuenta",
      "Cobro directo desde la orden",
    ],
  },
  {
    title: "Pagos y caja",
    items: [
      "Pago en efectivo, tarjeta, transferencia y QR",
      "Cálculo de vuelto",
      "Apertura y cierre de caja",
      "Arqueo o cierre a ciegas",
      "Registro de ingresos y egresos",
      "Historial operativo de caja",
      "Resumen de sesión y movimientos de efectivo",
    ],
  },
  {
    title: "Cocina, salón y comandas",
    items: [
      "Envío de pedidos a cocina",
      "Vista KDS para cocina",
      "Estados de preparación en tiempo real",
      "Control visual de productos agotados",
      "Gestión de zonas y mesas",
      "Control de ocupación por mesa",
      "Reapertura de órdenes activas",
      "Flujo orientado a salón, terraza y áreas VIP",
    ],
  },
  {
    title: "Productos, menú y clientes",
    items: [
      "Gestión de productos, categorías y menús",
      "Modificadores e impuestos por producto o menú",
      "Productos activos e inactivos",
      "Recetas",
      "Base para combos, insumos y costeo",
      "Registro y búsqueda de clientes",
      "Base para historial de compras, fidelización y beneficios",
    ],
  },
  {
    title: "Usuarios, roles e impresión",
    items: [
      "Login con usuario y clave",
      "Gestión de empleados",
      "Roles y permisos por módulo",
      "Overrides por usuario",
      "Control de acceso por negocio",
      "Configuración de impresoras",
      "Impresión térmica, recibos, precuentas y comandas",
      "Impresión distribuida por áreas",
    ],
  },
  {
    title: "Configuración, fiscal y expansión",
    items: [
      "Configuración de impuestos, cajas, zonas y mesas",
      "Configuración de menús, recetas e impresión",
      "Configuración comercial del negocio",
      "Base para NCF y e-CF",
      "Base para reportes operativos",
      "Base para compras e inventario",
      "Base para promociones, cupones y gift cards",
      "Base para multi-sucursal",
    ],
  },
];

export const addOns = [
  "Multi-sucursal",
  "Usuarios adicionales",
  "Soporte premium",
  "Implementación y capacitación",
  "Impresión avanzada",
  "Reportes avanzados",
  "Inventario y compras",
  "Fidelización",
  "Promociones y cupones",
  "Gift cards",
  "Crédito a clientes",
  "Integraciones especiales",
];
