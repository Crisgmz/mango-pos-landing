import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Precios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <section className="pt-14 pb-4 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">Precios de MangoPOS</span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
                Planes pensados para operar hoy y escalar mañana
              </h1>
              <p className="mt-4 text-base font-body text-muted-foreground leading-relaxed">
                MangoPOS está diseñado para restaurantes y negocios de comida que necesitan vender más rápido, organizar la cocina, controlar caja y mantener su operación diaria bajo control desde un solo sistema.
              </p>
            </div>
          </div>
        </section>
        <PricingSection mode="full" />
      </div>
      <Footer />
    </div>
  );
};

export default Precios;
