import SectionLabel from "@/components/SectionLabel";

const partnerFiles = [
  { name: "Tropella Cocktails", file: "Tropella-cocktails.png" },
  { name: "Kokoro", file: "kokoro.png" },
  { name: "Mediotiempo", file: "mediotiempo.png" },
  { name: "Tropella", file: "tropella.png" },
];

const logos = partnerFiles.map((partner) => ({
  name: partner.name,
  src: new URL(`../../assets/logos partners/${partner.file}`, import.meta.url).href,
}));

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-12 md:py-16 bg-background"
      aria-label="Marcas que confían en MangoPOS"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel label="Confianza real" variant={0} className="mb-4 mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Marcas que confían en{" "}
            <span className="text-[#f97316]">Mango</span>
            <span className="text-[#22c55e]">POS</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Restaurantes y conceptos que ya operan con los mismos estándares de organización, velocidad y trazabilidad.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex h-24 items-center justify-center">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-full w-full max-h-20 object-contain filter grayscale contrast-100 opacity-70"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
