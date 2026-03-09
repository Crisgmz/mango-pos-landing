const footerLinks = {
  Producto: ["Funciones", "Precios", "Actualizaciones", "Integraciones"],
  Empresa: ["Sobre nosotros", "Blog", "Clientes", "Contacto"],
  Soporte: ["Documentación", "Tutoriales", "Estado del sistema", "Soporte"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 bg-primary rounded-md flex items-center justify-center text-sm">🥭</span>
              <span className="font-heading font-bold text-base text-background">Mango POS</span>
            </div>
            <p className="text-sm font-body text-background/50 leading-relaxed">
              El sistema POS diseñado para restaurantes dominicanos.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-heading font-semibold text-sm text-background mb-4">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-body text-background/50 hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-background/40">
          <p>© 2025 Mango POS · mangopos.do</p>
          <p>Hecho con 🥭 en República Dominicana</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background transition-colors">Términos</a>
            <a href="#" className="hover:text-background transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
