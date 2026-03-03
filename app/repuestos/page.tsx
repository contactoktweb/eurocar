import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MessageCircle } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { globalConfigQuery, sparePartsPageQuery, sparePartsQuery } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await client.fetch(sparePartsPageQuery, {}, { cache: 'no-store' });
  return {
    title: pageData?.seoTitle || "Repuestos | A&M euro cars",
    description: pageData?.seoDescription || "Repuestos originales, nuevos, usados y garantizados para BMW, Audi, Mercedes Benz, Volkswagen y Mini Cooper.",
  };
}

export const revalidate = 0;

export default async function RepuestosPage() {
  const [globalConfig, pageData, spareParts] = await Promise.all([
    client.fetch(globalConfigQuery, {}, { cache: 'no-store' }),
    client.fetch(sparePartsPageQuery, {}, { cache: 'no-store' }),
    client.fetch(sparePartsQuery, {}, { cache: 'no-store' }),
  ]);

  const whatsappNumber = globalConfig?.phone?.replace(/\s+/g, "") || "573118543597";

  function getWhatsAppLink(repuestoName: string) {
    const message = encodeURIComponent(
      `Hola, estoy interesado en: ${repuestoName}. Me gustaria recibir mas informacion sobre disponibilidad y precio.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }

    console.log("Repuestos Page - Spare Parts fetched:", spareParts?.length);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
          {pageData?.heroImageUrl && (
            <Image
              src={pageData.heroImageUrl}
              alt={pageData.heroTitle}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {pageData?.heroSubtitle || "Catalogo de repuestos"}
            </span>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              {pageData?.heroTitle} <span className="text-primary">{pageData?.heroTitleHighlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {pageData?.heroDescription}
            </p>
          </div>
        </section>

        {/* Repuestos Grid */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {pageData?.inventorySubtitle || "Nuestro inventario"}
              </span>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
                {pageData?.inventoryTitle || "Categorias de repuestos"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
                {pageData?.inventoryDescription || "Selecciona la categoria que necesitas y contactanos directamente por WhatsApp para asesorarte."}
              </p>
            </div>
            {!spareParts || spareParts.length === 0 ? (
               <div className="text-center py-10">
                 <p className="text-muted-foreground">No se encontraron repuestos en este momento.</p>
               </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {spareParts.map((item: any) => (
                  <div
                    key={item._id}
                    className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50"
                  >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
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
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded bg-[#25D366] px-5 py-2.5 text-sm font-bold text-[#fff] transition-colors hover:bg-[#1da851]"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </section>

        {/* General WhatsApp CTA */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contáctanos directamente por WhatsApp y te ayudamos a conseguir
              el repuesto que necesitas para tu vehículo.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, estoy buscando un repuesto especifico. Me gustaria recibir asesoria.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#fff] transition-colors hover:bg-[#1da851]"
            >
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

