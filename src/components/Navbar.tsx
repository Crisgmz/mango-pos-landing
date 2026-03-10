import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Precios", href: "#precios" },
  { label: "Centro de ayuda", href: "#ayuda" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
          <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-lg">🥭</span>
            <span className="font-heading font-bold text-lg text-foreground">Mango POS</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Iniciar sesión</Button>
            <Button size="sm">Prueba gratis</Button>
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

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border p-4 animate-fade-in">
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
