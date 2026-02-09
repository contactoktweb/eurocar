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
} from "lucide-react";

const features = [
  { icon: Cog, label: "Repuestos Originales" },
  { icon: Search, label: "Diagnostico Especializado" },
  { icon: Wrench, label: "Reparacion de colisiones" },
  { icon: Wind, label: "Aire acondicionado" },
  { icon: Hammer, label: "Reparacion de abolladuras" },
  { icon: MonitorSmartphone, label: "Diagnostico de vehiculos" },
  { icon: Paintbrush, label: "Reparacion de rayones" },
  { icon: Layers, label: "Reemplazo de vidrio" },
  { icon: CircleDot, label: "Instalacion de neumaticos" },
  { icon: Crosshair, label: "Alineacion de ruedas" },
  { icon: Settings, label: "Reparacion de motor" },
  { icon: Disc, label: "Reparacion de frenos" },
  { icon: Factory, label: "Servicio del fabricante" },
  { icon: Package, label: "Cajas Automaticas" },
  { icon: Zap, label: "Servicio rapido" },
  { icon: MapPin, label: "Inspecciones de viaje" },
];

export default function FeaturesSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Experiencia y calidad
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
              Hacemos todo lo mejor para ti
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground ">
              En Germany Motors damos servicio a todas las marcas y modelos de
              BMW, Mercedes Benz, Audi y Volkswagen, y nos enorgullecemos de
              cada reparacion.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground ">
              Cuando se trata de reparar o revisar su automovil, todo nuestro
              equipo combinado tiene casi un siglo de experiencia practica.
              Nuestro objetivo es hacer que nuestro servicio sea lo mas
              razonable posible al mejor precio.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background p-4 text-center transition-colors hover:border-primary/50"
              >
                <feature.icon className="h-6 w-6 text-primary" />
                <span className="text-xs font-semibold text-foreground leading-tight">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
