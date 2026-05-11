export const appUrl = "https://app.mangopos.do/login";

export const primaryLinks = {
  home: "/",
  features: "/caracteristicas",
  pricing: "/precios",
  pricingFaq: "/precios#faq",
  privacy: "/privacidad",
  terms: "/terminos",
  paymentPolicy: "/politicas-de-pago",
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
  "Enlaces rápidos": [
    { label: "Inicio", href: primaryLinks.home },
    { label: "Características", href: primaryLinks.features },
    { label: "Precios", href: primaryLinks.pricing },
    { label: "Preguntas frecuentes", href: primaryLinks.pricingFaq },
    { label: "Contacto comercial", href: primaryLinks.finalCta },
    { label: "Acceder al sistema", href: primaryLinks.app, external: true },
  ],
  "Nuestras Políticas": [
    { label: "Términos y Condiciones", href: primaryLinks.terms },
    { label: "Política de Privacidad", href: primaryLinks.privacy },
    { label: "Políticas de Pago", href: primaryLinks.paymentPolicy },
    { label: "Devoluciones, Reembolsos y Cancelaciones", href: `${primaryLinks.paymentPolicy}#devoluciones` },
    { label: "Seguridad para Transmisión de Datos de Tarjetas", href: `${primaryLinks.paymentPolicy}#seguridad` },
  ],
};
