import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { offersSectionQuery } from "@/sanity/lib/queries";

export default async function OffersSection() {
  const offersData = await client.fetch(offersSectionQuery, {}, { cache: 'no-store' });

  if (!offersData) return null;

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {offersData.subtitle}
          </span>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
            {offersData.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground ">
            {offersData.description}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          {offersData.offerImageUrl && (
            <Image
              src={offersData.offerImageUrl}
              alt={offersData.offerTitle}
              width={1200}
              height={500}
              className="h-80 w-full object-cover md:h-96"
            />
          )}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/40 to-transparent">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                {offersData.offerTitle}
              </h3>
              <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                {offersData.offerDescription}
              </p>
              <Link
                href={offersData.ctaLink || "/contacto"}
                className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {offersData.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
