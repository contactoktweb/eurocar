import {
  Cog,
  Search,
  Wrench,
  Wind,
  Hammer,
  MonitorSmartphone,
  Paintbrush,
  Layers,
  CircleDot,
  Crosshair,
  Settings,
  Disc,
  Factory,
  Package,
  Zap,
  MapPin,
  LucideIcon,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { featuresSectionQuery } from "@/sanity/lib/queries";

const iconMap: Record<string, LucideIcon> = {
  Cog,
  Search,
  Wrench,
  Wind,
  Hammer,
  MonitorSmartphone,
  Paintbrush,
  Layers,
  CircleDot,
  Crosshair,
  Settings,
  Disc,
  Factory,
  Package,
  Zap,
  MapPin,
};

export default async function FeaturesSection() {
  const featuresData = await client.fetch(featuresSectionQuery, {}, { cache: 'no-store' });

  const subtitle = featuresData?.subtitle || "Experiencia y calidad";
  const title = featuresData?.title || "Hacemos todo lo mejor para ti";
  const description1 = featuresData?.description1 || "En euro cars damos servicio a todas las marcas y modelos de BMW, Mercedes Benz, Audi y Volkswagen, y nos enorgullecemos de cada reparacion.";
  const description2 = featuresData?.description2 || "Cuando se trata de reparar o revisar su automovil, todo nuestro equipo combinado tiene casi un siglo de experiencia practica. Nuestro objetivo es hacer que nuestro servicio sea lo mas razonable posible al mejor precio.";
  const features = featuresData?.features || [];

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {subtitle}
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
              {title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground ">
              {description1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground ">
              {description2}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((feature: any, index: number) => {
              const Icon = iconMap[feature.icon] || Cog;
              return (
                <div
                  key={feature.label || index}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background p-4 text-center transition-colors hover:border-primary/50"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="text-xs font-semibold text-foreground leading-tight">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
