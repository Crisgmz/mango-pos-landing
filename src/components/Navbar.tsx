import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Funciones", href: "#funciones", hasDropdown: true },
  { label: "Fiscal", href: "#fiscal", hasDropdown: false },
  { label: "Precios", href: "#precios", hasDropdown: true },
  { label: "Clientes", href: "#testimonios", hasDropdown: false },
];

const funcionesData = [
  {
    emoji: "🍽️",
    title: "Operación diaria",
    items: ["Punto de venta rápido", "Ventas por mesas y zonas", "División de cuentas", "Múltiples métodos de pago", "Apertura y cierre de caja", "Historial de ventas", "Comandas a cocina", "Vista de cocina KDS"],
  },
  {
    emoji: "📋",
    title: "Menú y productos",
    items: ["Productos, categorías y menús", "Recetas e ingredientes", "Modificadores", "Impuestos inclusivos/exclusivos", "Promociones, cupones y gift cards"],
  },
  {
    emoji: "📦",
    title: "Inventario y compras",
    items: ["Control de inventario", "Kardex y ajustes", "Salidas y conciliación", "Órdenes de compra", "Recepción con impacto automático en stock"],
  },
  {
    emoji: "👥",
    title: "Clientes y negocio",
    items: ["Gestión de clientes", "Usuarios con roles y permisos", "Configuración por negocio", "Sucursales, cajas e impresoras", "Subdominio por negocio"],
  },
  {
    emoji: "📊",
    title: "Reportes",
    items: ["Ventas", "Caja", "Compras", "Inventario", "Trazabilidad operativa"],
  },
  {
    emoji: "🧾",
    title: "Fiscal",
    items: ["Facturación fiscal NCF", "ITBIS y configuración tributaria", "Comprobantes con datos reales"],
  },
];

const preciosPlans = [
  { name: "Básico", price: "$25", period: "/mes", desc: "1 caja" },
  { name: "Profesional", price: "$55", period: "/mes", desc: "3 cajas", popular: true },
  { name: "Empresarial", price: "Custom", period: "", desc: "Ilimitado" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-lg">🥭</span>
            <span className="font-heading font-bold text-lg text-foreground">Mango POS</span>
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
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>

                {/* Funciones Dropdown */}
                {link.label === "Funciones" && activeDropdown === "Funciones" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px]">
                    <div className="bg-card rounded-lg border border-border shadow-lg p-6 grid grid-cols-2 gap-6 animate-fade-in">
                      {funcionesData.map((group) => (
                        <div key={group.title}>
                          <p className="font-heading font-semibold text-sm text-foreground mb-2">
                            {group.emoji} {group.title}
                          </p>
                          <ul className="space-y-1">
                            {group.items.map((item) => (
                              <li key={item} className="text-xs text-muted-foreground">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Precios Dropdown */}
                {link.label === "Precios" && activeDropdown === "Precios" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]">
                    <div className="bg-card rounded-lg border border-border shadow-lg p-5 grid grid-cols-3 gap-3 animate-fade-in">
                      {preciosPlans.map((plan) => (
                        <div
                          key={plan.name}
                          className={`rounded-md p-3 text-center ${
                            plan.popular ? "bg-primary text-primary-foreground" : "bg-secondary"
                          }`}
                        >
                          <p className="font-heading font-bold text-sm">{plan.name}</p>
                          <p className="text-lg font-heading font-bold mt-1">
                            {plan.price}
                            <span className="text-xs font-body font-normal">{plan.period}</span>
                          </p>
                          <p className={`text-xs mt-1 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                            {plan.desc}
                          </p>
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
        <div className="md:hidden bg-card border-t border-border p-4 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
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
