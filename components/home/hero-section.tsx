import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { heroSectionQuery, globalConfigQuery } from "@/sanity/lib/queries";

export default async function HeroSection() {
  const [heroData, globalConfig] = await Promise.all([
    client.fetch(heroSectionQuery, {}, { cache: 'no-store' }),
    client.fetch(globalConfigQuery, {}, { cache: 'no-store' })
  ]);

  const backgroundUrl = heroData?.backgroundUrl || "/images/hero-bg.jpg";
  const subtitle = heroData?.subtitle || "Taller Especializado";
  const titlePart1 = heroData?.title || "Buscas repuestos, ";
  const titleHighlight = heroData?.titleHighlight || "para tu automovil?";
  const description = heroData?.description || "Importamos y comercializamos repuestos de BMW, Audi, Mercedes Benz, Volkswagen y Mini Cooper. Vendemos originales, nuevo, usados y garantizados a los mejores precios. Tenemos servicio de taller automotriz.";
  const ctaText = heroData?.ctaText || "Solicita una revision mecanica";
  const ctaLink = heroData?.ctaLink || "/contacto";
  
  const phoneUnformatted = globalConfig?.phone || "311 854 3597";
  const phoneFormatted = globalConfig?.phone ? phoneUnformatted : "311 854 3597";
  const phoneLink = phoneUnformatted.replace(/[^0-9+]/g, "");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundUrl}
        alt="Taller de reparacion de autos de lujo"
        fill
        className="object-cover"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center lg:px-8">
        <span className="inline-block rounded-sm bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          {subtitle}
        </span>

        <h1 className="mt-6 text-4xl font-black uppercase leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          {titlePart1}
          <span className="text-primary">{titleHighlight}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground  md:text-lg">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={ctaLink}
            className="rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {ctaText}
          </Link>
          <a
            href={`tel:${phoneLink}`}
            className="flex items-center gap-3 rounded border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {phoneFormatted}
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
