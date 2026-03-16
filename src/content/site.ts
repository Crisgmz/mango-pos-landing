export const appUrl = "https://app.mangopos.do/login";

export const primaryLinks = {
  home: "/",
  features: "/caracteristicas",
  pricing: "/precios",
  pricingFaq: "/precios#faq",
  finalCta: "/#contacto",
  app: appUrl,
};

export const helpLinks = [
  {
    title: "Características",
    desc: "Explora módulos, capturas y páginas individuales del producto.",
    href: primaryLinks.features,
  },
  {
    title: "Planes y activación",
    desc: "Revisa precios, alcance y preguntas frecuentes antes de decidir.",
    href: primaryLinks.pricingFaq,
  },
  {
    title: "Salida a producción",
    desc: "Te guiamos con configuración, estructura operativa y puesta en marcha.",
    href: primaryLinks.finalCta,
  },
];

export const footerSections = {
  Producto: [
    { label: "Características", href: primaryLinks.features },
    { label: "Precios", href: primaryLinks.pricing },
    { label: "Preguntas frecuentes", href: primaryLinks.pricingFaq },
    { label: "Acceder al sistema", href: primaryLinks.app, external: true },
  ],
  Recursos: [
    { label: "Preguntas frecuentes", href: primaryLinks.pricingFaq },
    { label: "Implementación", href: primaryLinks.finalCta },
    { label: "Planes para crecer", href: primaryLinks.pricing },
  ],
  Empresa: [
    { label: "Inicio", href: primaryLinks.home },
    { label: "Módulos del sistema", href: primaryLinks.features },
    { label: "Contacto comercial", href: primaryLinks.finalCta },
  ],
};
