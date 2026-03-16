export type Plan = {
  name: string;
  audience: string;
  copy: string;
  priceLabel: string;
  priceNote: string;
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
    priceLabel: "A consultar",
    priceNote: "1 negocio / 1 sucursal",
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
      "Cobros en efectivo, tarjeta y transferencia",
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
    priceLabel: "A consultar",
    priceNote: "Más usuarios y más control operativo",
    popular: true,
    badge: "Más recomendado",
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
  { label: "Usuarios y roles", values: ["Base", "Avanzado", "Avanzado"] },
  { label: "Recetas", values: ["No", "Incluido", "Incluido"] },
  { label: "Clientes", values: ["Base", "Incluido", "Incluido"] },
  { label: "Multi-sucursal", values: ["No", "No", "Incluido"] },
  { label: "Implementación acompañada", values: ["No", "Incluido", "Incluido"] },
  { label: "Soporte", values: ["Base", "Prioritario", "Premium"] },
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
