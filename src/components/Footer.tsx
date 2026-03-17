import { Link } from "react-router-dom";
import mangoLogo from "../../assets/favicon/windows_icon.png";
import { footerSections } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                alt="Mango POS"
                className="h-10 w-auto object-contain"
                src={mangoLogo}
              />
            </div>
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

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-background/40">
          <p>© 2026 Mango POS · mangopos.do</p>
          <p>Hecho en República Dominicana para operaciones reales.</p>
          <div className="flex gap-4">
            <Link className="transition-colors hover:text-background" to="/precios#faq">Preguntas frecuentes</Link>
            <Link className="transition-colors hover:text-background" to="/#contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
