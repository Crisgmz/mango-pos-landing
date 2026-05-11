import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { legalMeta, socialLinks } from "@/content/legal";
import { footerSections, primaryLinks } from "@/content/site";

const logoUrls = import.meta.glob("../images/*.{png,svg,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const logoIndex = Object.entries(logoUrls).map(([path, url]) => ({
  filename: normalize(path.split("/").pop() ?? ""),
  url,
}));

const findLogo = (keywords: string[]) => {
  const cleaned = keywords.map(normalize);
  return logoIndex.find(({ filename }) => cleaned.some((k) => filename.includes(k)))?.url;
};

type Brand = { name: string; keywords: string[] };

const acceptedBrands: Brand[] = [
  { name: "Visa", keywords: ["visa"] },
  { name: "MasterCard", keywords: ["mastercard"] },
  { name: "American Express", keywords: ["amex", "americanexpress"] },
  { name: "Discover", keywords: ["discover"] },
];

const popularBrand: Brand = {
  name: "Servicios Digitales Popular",
  keywords: ["serviciosdigitales", "popular"],
};

const threeDSecureKeywords = [
  "verifiedvisamastercard",
  "verifiedbyvisamastercard",
  "verifiedvisa",
  "verifiedbyvisa",
  "visasecure",
];

function BrandLogo({ brand }: { brand: Brand }) {
  const src = findLogo(brand.keywords);
  if (!src) {
    return (
      <div className="flex h-14 items-center justify-center rounded-lg border border-background/10 bg-background/5 px-3">
        <span className="text-[10px] font-body font-medium text-background/60 text-center leading-tight">
          {brand.name}
        </span>
      </div>
    );
  }
  return (
    <div className="flex h-14 items-center justify-center rounded-lg bg-background px-2">
      <img
        src={src}
        alt={`${brand.name} logo`}
        className="max-h-12 w-auto object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const telHref = `tel:${legalMeta.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="bg-foreground text-background/80 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4 mb-12">
          <div>
            <p className="text-sm font-body text-background/60 leading-relaxed">
              Plataforma POS para restaurantes y negocios de comida en {legalMeta.country}.
            </p>
            <p className="mt-3 text-xs font-body text-background/40 leading-relaxed">
              Cobros procesados en {legalMeta.currency}.
            </p>
          </div>

          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <p className="font-heading font-semibold text-sm text-background mb-4">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm font-body text-background/60 transition-colors hover:text-background"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        className="text-sm font-body text-background/60 transition-colors hover:text-background"
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-heading font-semibold text-sm text-background mb-4">Pagos seguros</p>
            <p className="text-[11px] font-body uppercase tracking-[0.16em] text-background/50 mb-3">
              Marcas aceptadas
            </p>
            <div className="grid grid-cols-2 gap-2">
              {acceptedBrands.map((brand) => (
                <BrandLogo key={brand.name} brand={brand} />
              ))}
            </div>
            {(() => {
              const src = findLogo(popularBrand.keywords);
              return src ? (
                <div className="mt-2 flex h-20 items-center justify-center rounded-lg bg-background px-3">
                  <img
                    src={src}
                    alt={`${popularBrand.name} logo`}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="mt-2 flex h-20 items-center justify-center rounded-lg border border-background/10 bg-background/5 px-3 text-center">
                  <span className="text-[10px] font-body font-medium text-background/60 leading-tight">
                    {popularBrand.name}
                  </span>
                </div>
              );
            })()}
            <p className="text-[11px] font-body uppercase tracking-[0.16em] text-background/50 mt-5 mb-3">
              Autenticación 3D Secure
            </p>
            {(() => {
              const src = findLogo(threeDSecureKeywords);
              return src ? (
                <div className="flex h-20 items-center justify-center rounded-lg bg-background px-3">
                  <img
                    src={src}
                    alt="Verified by Visa · MasterCard ID Check"
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex h-20 items-center justify-center rounded-lg border border-background/10 bg-background/5 px-3 text-center">
                  <span className="text-[10px] font-body font-medium text-background/60 leading-tight">
                    Verified by Visa · MasterCard ID Check
                  </span>
                </div>
              );
            })()}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 border-t border-background/10 pt-10 pb-10">
          <div>
            <p className="font-heading font-semibold text-sm text-background mb-4">Servicio al Cliente</p>
            <ul className="space-y-3 text-sm font-body text-background/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-background/70" />
                <a className="transition-colors hover:text-background" href={`mailto:${legalMeta.supportEmail}`}>
                  {legalMeta.supportEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-background/70" />
                <a className="transition-colors hover:text-background" href={telHref}>
                  {legalMeta.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold text-sm text-background mb-4">Dirección</p>
            <div className="flex items-start gap-3 text-sm font-body text-background/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background/70" />
              <p className="leading-relaxed">
                <strong className="text-background">{legalMeta.companyName}</strong><br />
                {legalMeta.address}<br />
                {legalMeta.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-success text-success-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-body">
            <span>© {currentYear} {legalMeta.companyName}</span>
            <Link className="transition-colors hover:text-primary-foreground/80" to={primaryLinks.terms}>Términos y Condiciones</Link>
            <Link className="transition-colors hover:text-primary-foreground/80" to={primaryLinks.privacy}>Política de Privacidad</Link>
            <Link className="transition-colors hover:text-primary-foreground/80" to={primaryLinks.paymentPolicy}>Políticas de Pago</Link>
          </div>

          <div className="flex items-center gap-4">
            <a aria-label="Instagram" className="transition-colors hover:text-primary-foreground/80" href={socialLinks.instagram} rel="noreferrer" target="_blank">
              <Instagram className="h-4 w-4" />
            </a>
            <a aria-label="Facebook" className="transition-colors hover:text-primary-foreground/80" href={socialLinks.facebook} rel="noreferrer" target="_blank">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="YouTube" className="transition-colors hover:text-primary-foreground/80" href={socialLinks.youtube} rel="noreferrer" target="_blank">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
