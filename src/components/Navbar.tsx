import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import mangoLogo from "../../Artboard 1logo.png";

const caracteristicasData = [
  {
    emoji: "🍽️",
    title: "Operación diaria",
    desc: "Punto de venta, mesas, caja y comandas a cocina.",
  },
  {
    emoji: "📋",
    title: "Menú y productos",
    desc: "Productos, recetas, modificadores y promociones.",
  },
  {
    emoji: "📦",
    title: "Inventario y compras",
    desc: "Control de stock, kardex, órdenes y recepción.",
  },
  {
    emoji: "📊",
    title: "Reportes y control",
    desc: "Ventas, caja, compras, inventario y trazabilidad.",
  },
  {
    emoji: "🧾",
    title: "Fiscal",
    desc: "NCF, ITBIS y comprobantes listos para la DGII.",
  },
  {
    emoji: "👥",
    title: "Clientes y equipo",
    desc: "Gestión de clientes, roles, permisos y sucursales.",
  },
];

const ayudaData = [
  {
    emoji: "📖",
    title: "Documentación",
    desc: "Guías completas para usar Mango POS.",
  },
  {
    emoji: "🎓",
    title: "Tutoriales",
    desc: "Videos y artículos paso a paso.",
  },
  {
    emoji: "💬",
    title: "Soporte",
    desc: "Contacta a nuestro equipo de soporte.",
  },
  {
    emoji: "🔔",
    title: "Estado del sistema",
    desc: "Revisa el estado de la plataforma en tiempo real.",
  },
];

const navLinks = [
  { label: "Inicio", href: "#", hasDropdown: false },
  { label: "Características", href: "#caracteristicas", hasDropdown: true },
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
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && openDropdown(link.label)}
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={() => scrollTo(link.isRoute ? link.href : link.href)}
                  className="px-3 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Características Dropdown */}
                {link.label === "Características" && activeDropdown === "Características" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px]">
                    <div className="bg-background rounded-lg border border-border shadow-lg p-5 grid grid-cols-2 gap-4 animate-fade-in">
                      {caracteristicasData.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-3 p-2 rounded-md hover:bg-secondary transition-colors cursor-pointer"
                          onClick={() => scrollTo("#caracteristicas")}
                        >
                          <span className="text-lg mt-0.5">{item.emoji}</span>
                          <div>
                            <p className="font-heading font-semibold text-sm text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Centro de ayuda Dropdown */}
                {link.label === "Centro de ayuda" && activeDropdown === "Centro de ayuda" && (
                  <div className="absolute top-full right-0 pt-2 w-[320px]">
                    <div className="bg-background rounded-lg border border-border shadow-lg p-4 space-y-1 animate-fade-in">
                      {ayudaData.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-3 p-2 rounded-md hover:bg-secondary transition-colors cursor-pointer"
                        >
                          <span className="text-lg mt-0.5">{item.emoji}</span>
                          <div>
                            <p className="font-heading font-semibold text-sm text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Iniciar sesión</Button>
            <Button size="sm" onClick={() => scrollTo("#precios")}>Prueba gratis</Button>
          </div>

          {/* Mobile toggle */}
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

      {/* Mobile menu */}
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
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="ghost" className="w-full">Iniciar sesión</Button>
            <Button className="w-full">Prueba gratis</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
