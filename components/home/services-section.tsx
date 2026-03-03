import {
  Wrench,
  MonitorSmartphone,
  CircleDot,
  Wind,
  Paintbrush,
  Sparkles,
  Hammer,
  Layers,
  Crosshair,
  LucideIcon,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { servicesSectionQuery } from "@/sanity/lib/queries";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  MonitorSmartphone,
  CircleDot,
  Wind,
  Paintbrush,
  Sparkles,
  Hammer,
  Layers,
  Crosshair,
};

export default async function ServicesSection() {
  const servicesData = await client.fetch(servicesSectionQuery, {}, { cache: 'no-store' });

  const subtitle = servicesData?.subtitle || "Lo que hacemos";
  const title = servicesData?.title || "Nuestros servicios";
  const services = servicesData?.services || [];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {subtitle}
          </span>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any, index: number) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <div
                key={service.title || index}
                className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-secondary"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground ">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
