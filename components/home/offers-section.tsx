import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OffersSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Ahorra hoy
          </span>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
            Ofertas Especiales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground ">
            Aproveche nuestras ofertas especiales para diagnosticar su automovil
            y obtener una reparacion de alta calidad en caso de que su automovil
            lo necesite.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/images/special-offer.jpg"
            alt="Oferta especial de diagnostico automotriz"
            width={1200}
            height={500}
            className="h-80 w-full object-cover md:h-96"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/40 to-transparent">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                Diagnostico <span className="text-primary">Especializado</span>
              </h3>
              <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                Trae tu vehiculo para una revision completa.
                Diagnosticamos todos los sistemas de tu auto con equipos de
                ultima generacion.
              </p>
              <Link
                href="/contacto"
                className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver ofertas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
