const brands = ["El Fogón", "La Terraza", "Café Central", "La Taberna", "Delivery Express"];

export default function LogosStrip() {
  return (
    <section className="py-8 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-muted-foreground font-body mb-5">
          Usado en restaurantes, cafeterías, bares y food trucks en toda la isla
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14">
          {brands.map((b) => (
            <span key={b} className="text-sm font-heading font-semibold text-muted-foreground/40 tracking-wide">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
