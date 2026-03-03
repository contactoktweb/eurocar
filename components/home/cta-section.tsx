import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { ctaSectionQuery } from "@/sanity/lib/queries";

export default async function CtaSection() {
  const ctaData = await client.fetch(ctaSectionQuery, {}, { cache: 'no-store' });

  const subtitle = ctaData?.subtitle || "Estamos para ayudarte";
  const title = ctaData?.title || "Contactanos para asesorarte";
  const description = ctaData?.description || "No dude en contactarnos si tiene alguna pregunta de nuestros servicios, precio, etc. Nuestro equipo esta listo para atenderle.";
  const ctaText = ctaData?.ctaText || "Contactanos";
  const ctaLink = ctaData?.ctaLink || "/contacto";

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {subtitle}
        </span>
        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
          {title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground ">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
