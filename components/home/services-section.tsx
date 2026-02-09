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
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Reparacion de colisiones",
    description:
      "Empleamos procesos computarizados en todas las reparaciones de carroceria para proporcionar el control de calidad que usted espera.",
  },
  {
    icon: MonitorSmartphone,
    title: "Diagnostico del vehiculo",
    description:
      "Cumplimos con todos los estandares y controles de calidad de los fabricantes para brindarle un diagnostico confiable del automovil.",
  },
  {
    icon: CircleDot,
    title: "Instalacion de neumaticos",
    description:
      "Cambiamos las llantas y los neumaticos usados o averiados de su auto en forma inmediata.",
  },
  {
    icon: Wind,
    title: "Aire acondicionado",
    description:
      "Cambiamos el filtro de tu sistema de aire acondicionado, cuidando el desecho ecologico del filtro usado.",
  },
  {
    icon: Paintbrush,
    title: "Reparacion de pintura",
    description:
      "Nuestros equipos de pintura de carrocerias estan completamente calificados para manejar cualquier trabajo de pintura de automoviles, grande o pequeno.",
  },
  {
    icon: Sparkles,
    title: "Servicio de polichado",
    description:
      "Aplicar un acondicionador a la pintura del carro con el fin de cubrir rayones y restaurar el brillo.",
  },
  {
    icon: Hammer,
    title: "Reparacion de abolladuras",
    description:
      "Nos especializamos en trabajos de carroceria, estamos equipados con la maquinaria mas avanzada y empleamos solo a tecnicos capacitados.",
  },
  {
    icon: Layers,
    title: "Reemplazo de vidrio",
    description:
      "Tenemos experiencia para instalar todas las piezas de vidrio con resultados certificados con todo nuestro trabajo.",
  },
  {
    icon: Crosshair,
    title: "Alineacion de las ruedas",
    description:
      "La alineacion correcta de las ruedas garantiza una maniobrabilidad optima y un mejor control en la carretera.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Lo que hacemos
          </span>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
            Nuestros servicios
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-secondary"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
