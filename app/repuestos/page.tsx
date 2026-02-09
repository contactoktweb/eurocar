import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Repuestos | A&M Germany Motors",
  description:
    "Repuestos originales, nuevos, usados y garantizados para BMW, Audi, Mercedes Benz, Volkswagen y Mini Cooper.",
};

const WHATSAPP_NUMBER = "573118543597";

const repuestos = [
  {
    name: "Repuestos de Motor",
    image: "/images/repuestos/motor.jpg",
    description: "Componentes y partes de motor originales y garantizados.",
  },
  {
    name: "Sistema de Frenos",
    image: "/images/repuestos/frenos.jpg",
    description: "Discos, pastillas, calibradores y sistemas de frenos completos.",
  },
  {
    name: "Suspension",
    image: "/images/repuestos/suspension.jpg",
    description: "Amortiguadores, muelles, bujes y componentes de suspension.",
  },
  {
    name: "Carroceria",
    image: "/images/repuestos/carroceria.jpg",
    description: "Paneles, puertas, molduras, guardafangos y bumpers.",
  },
  {
    name: "Sistema Electrico",
    image: "/images/repuestos/electrico.jpg",
    description: "Sensores, modulos ECU, cableado y componentes electronicos.",
  },
  {
    name: "Filtros y Aceites",
    image: "/images/repuestos/filtros.jpg",
    description: "Filtros de aceite, aire, combustible y aceites sinteticos.",
  },
  {
    name: "Transmision",
    image: "/images/repuestos/transmision.jpg",
    description: "Cajas automaticas, embragues y componentes de transmision.",
  },
  {
    name: "Sistema de Refrigeracion",
    image: "/images/repuestos/refrigeracion.jpg",
    description: "Radiadores, bombas de agua, termostatos y mangueras.",
  },
  {
    name: "Luces y Opticas",
    image: "/images/repuestos/luces.jpg",
    description: "Farolas, stops, luces LED, xenon y direccionales.",
  },
];

function getWhatsAppLink(repuestoName: string) {
  const message = encodeURIComponent(
    `Hola, estoy interesado en: ${repuestoName}. Me gustaria recibir mas informacion sobre disponibilidad y precio.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function RepuestosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
          <Image
            src="/images/parts-hero.jpg"
            alt="Repuestos para vehiculos de lujo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Catalogo de repuestos
            </span>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Repuestos para tu{" "}
              <span className="text-primary">automovil de lujo</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Importamos y comercializamos repuestos de BMW, Audi, Mercedes
              Benz, Volkswagen y Mini Cooper. Vendemos originales, nuevos,
              usados y garantizados a los mejores precios.
            </p>
          </div>
        </section>

        {/* Repuestos Grid */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Nuestro inventario
              </span>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
                Categorias de repuestos
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
                Selecciona la categoria que necesitas y contactanos directamente
                por WhatsApp para asesorarte.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {repuestos.map((item) => (
                <div
                  key={item.name}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/30 transition-opacity group-hover:bg-background/10" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <a
                      href={getWhatsAppLink(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded bg-[#25D366] px-5 py-2.5 text-sm font-bold text-[#fff] transition-colors hover:bg-[#1da851]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General WhatsApp CTA */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
              No encuentras lo que buscas?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contactanos directamente por WhatsApp y te ayudamos a conseguir
              el repuesto que necesitas para tu vehiculo.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, estoy buscando un repuesto especifico. Me gustaria recibir asesoria.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#fff] transition-colors hover:bg-[#1da851]"
            >
              <MessageCircle className="h-5 w-5" />
              Escribenos por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
