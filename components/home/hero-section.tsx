import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Taller de reparacion de autos de lujo"
        fill
        className="object-cover"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center lg:px-8">
        <span className="inline-block rounded-sm bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          Taller Especializado
        </span>

        <h1 className="mt-6 text-4xl font-black uppercase leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          {"Buscas repuestos, "}
          <span className="text-primary">para tu automovil?</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground  md:text-lg">
          Importamos y comercializamos repuestos de BMW, Audi, Mercedes Benz,
          Volkswagen y Mini Cooper. Vendemos originales, nuevo, usados y
          garantizados a los mejores precios. Tenemos servicio de taller
          automotriz.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contacto"
            className="rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Solicita una revision mecanica
          </Link>
          <a
            href="tel:+573118543597"
            className="flex items-center gap-3 rounded border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            311 854 3597
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
