import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ClipboardList,
  CookingPot,
  CreditCard,
  FolderKanban,
  LayoutGrid,
  LineChart,
  Package,
  Receipt,
  Store,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import mangoLogo from "../../Artboard 1logo.png";
import { featureGroups } from "@/content/features";

const featureIcons = {
  "Ventas por zona": LayoutGrid,
  "KDS de cocina": CookingPot,
  "Gestión de productos": Package,
  "Combos y promociones": FolderKanban,
  Reportes: LineChart,
  "Usuarios y roles": Users,
  "Configuración fiscal": Receipt,
  "Gestión de metas": ClipboardList,
  Sucursales: Store,
  "Kardex por sucursal": Package,
  Fidelización: CreditCard,
  "Ventas a crédito": CreditCard,
} as const;

const helpItems = [
  {
    title: "Documentación",
    desc: "Guías prácticas para configurar y operar MangoPOS.",
  },
  {
    title: "Implementación",
    desc: "Acompañamiento para salir a producción con mejor orden.",
  },
  {
    title: "Soporte",
    desc: "Canales de ayuda para resolver dudas operativas y técnicas.",
  },
];

const navLinks = [
  { label: "Inicio", href: "#", hasDropdown: false },
  { label: "Funciones", href: "/caracteristicas", hasDropdown: true, isRoute: true },
  { label: "Precios", href: "/precios", hasDropdown: false, isRoute: true },
  { label: "Centro de ayuda", href: "#ayuda", hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const openDropdown = (key: string) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (href === "#") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-background/80 backdrop-blur-md"
      }`}
      onMouseLeave={closeDropdown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#");
            }}
          >
            <img
              alt="Mango POS"
              className="h-10 w-auto object-contain sm:h-11"
              src={mangoLogo}
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && openDropdown(link.label)}
              >
                <button
                  onClick={() => scrollTo(link.isRoute ? link.href : link.href)}
                  className={`px-3 py-2 text-sm font-body transition-colors flex items-center gap-1 ${
                    activeDropdown === link.label ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </button>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Iniciar sesión</Button>
            <Button size="sm" onClick={() => scrollTo("#precios")}>Prueba gratis</Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">Menú</span>
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-foreground transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-foreground transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {activeDropdown === "Funciones" && (
        <div className="hidden md:block border-t border-border bg-background shadow-[0_22px_50px_-35px_rgba(15,23,42,0.4)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-[1.2fr_1.2fr_1fr] gap-10">
              {Object.values(featureGroups).map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-body font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {group.title}
                  </p>
                  <div className="mt-5 space-y-1">
                    {group.items.map((item) => {
                      const Icon = featureIcons[item.shortTitle as keyof typeof featureIcons] ?? LayoutGrid;
                      return (
                        <Link
                          key={item.slug}
                          className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-secondary"
                          onClick={() => setActiveDropdown(null)}
                          to={`/funciones/${item.slug}`}
                        >
                          <span className="mt-0.5 text-muted-foreground">
                            <Icon className="h-4.5 w-4.5" />
                          </span>
                          <span>
                            <span className="block text-sm font-heading font-semibold text-foreground">
                              {item.shortTitle}
                            </span>
                            <span className="mt-1 block text-sm font-body leading-relaxed text-muted-foreground">
                              {item.shortDescription}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <Link
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setActiveDropdown(null)}
                to="/caracteristicas"
              >
                Ver todas las características
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === "Centro de ayuda" && (
        <div className="hidden md:block border-t border-border bg-background shadow-[0_22px_50px_-35px_rgba(15,23,42,0.4)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-[1.2fr_1fr] gap-12">
              <div>
                <p className="text-xs font-body font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Centro de ayuda
                </p>
                <div className="mt-5 space-y-1">
                  {helpItems.map((item) => (
                    <div key={item.title} className="rounded-xl px-3 py-3 transition-colors hover:bg-secondary">
                      <p className="text-sm font-heading font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm font-body leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/35 p-6">
                <p className="text-xs font-body font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Soporte para producción
                </p>
                <h3 className="mt-3 text-2xl font-heading font-bold text-foreground">
                  Te acompañamos antes y después de salir en vivo
                </h3>
                <p className="mt-3 text-sm font-body leading-relaxed text-muted-foreground">
                  Si tu negocio ya está listo para implementar MangoPOS, te ayudamos con configuración inicial, estructura operativa y acompañamiento de salida a producción.
                </p>
                <div className="mt-6">
                  <Button size="sm">Hablar con el equipo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border p-4 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.isRoute ? link.href : link.href)}
              className="block w-full text-left px-3 py-3 text-sm font-body text-foreground hover:bg-secondary rounded-md"
            >
              {link.label}
            </button>
          ))}

          <div className="mt-4 rounded-xl border border-border bg-secondary/35 p-3">
            <p className="text-xs font-body font-medium uppercase tracking-[0.18em] text-muted-foreground">Funciones destacadas</p>
            <div className="mt-3 space-y-2">
              {featureGroups.operacion.items.slice(0, 4).map((item) => (
                <Link
                  key={item.slug}
                  className="block rounded-md px-3 py-2 text-sm font-body text-foreground hover:bg-background"
                  onClick={() => setMobileOpen(false)}
                  to={`/funciones/${item.slug}`}
                >
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Button variant="ghost" className="w-full">Iniciar sesión</Button>
            <Button className="w-full">Prueba gratis</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
