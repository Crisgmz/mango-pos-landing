import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { legalMeta, socialLinks } from "@/content/legal";
import { footerSections, primaryLinks } from "@/content/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="text-sm font-body text-background/50 leading-relaxed">
              Plataforma POS para restaurantes y negocios de comida en República Dominicana.
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
                        className="text-sm font-body text-background/50 transition-colors hover:text-background"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        className="text-sm font-body text-background/50 transition-colors hover:text-background"
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
        </div>

      </div>

      <div className="bg-success text-success-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-body">
            <span>© {currentYear} {legalMeta.companyName}</span>
            <Link className="transition-colors hover:text-primary-foreground/80" to={primaryLinks.terms}>Términos y Condiciones</Link>
            <Link className="transition-colors hover:text-primary-foreground/80" to={primaryLinks.privacy}>Política de Privacidad</Link>
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
