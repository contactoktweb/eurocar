import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | A&M Germany Motors",
  description:
    "Contacta a Germany Motors para repuestos y servicios automotrices en Bogota, Colombia. Llama al 3118543597.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    content: "311 854 3597",
    href: "tel:+573118543597",
  },
  {
    icon: Mail,
    title: "Email",
    content: "mardilaespejo@gmail.com",
    href: "mailto:mardilaespejo@gmail.com",
  },
  {
    icon: MapPin,
    title: "Direccion",
    content: "Carrera 24 # 67 - 44, L-136, Bogota",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    href: undefined,
  },
];

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contacta a Germany Motors"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Estamos para ayudarte
            </span>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Contactanos para{" "}
              <span className="text-primary">asesorarte</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              No dude en contactarnos si tiene alguna pregunta de nuestros
              servicios, precio, etc.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => {
                const Inner = (
                  <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-background p-6 text-center transition-colors hover:border-primary/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                );

                if (item.href) {
                  return (
                    <a key={item.title} href={item.href}>
                      {Inner}
                    </a>
                  );
                }
                return <div key={item.title}>{Inner}</div>;
              })}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Escribenos
                </span>
                <h2 className="mt-3 mb-8 text-2xl font-bold text-foreground md:text-3xl">
                  Formulario de contacto
                </h2>
                <ContactForm />
              </div>

              {/* Map */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Ubicacion
                </span>
                <h2 className="mt-3 mb-8 text-2xl font-bold text-foreground md:text-3xl">
                  Visitanos
                </h2>
                <div className="overflow-hidden rounded-lg border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7!2d-74.07!3d4.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sCarrera%2024%20%23%2067-44%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicacion de Germany Motors en Bogota"
                    className="w-full"
                  />
                </div>
                <div className="mt-6 rounded-lg border border-border bg-card p-6">
                  <h3 className="font-bold text-foreground">
                    A&M Germany Motors
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Carrera 24 # 67 - 44, L-136, Bogota
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Lunes a Viernes: 8:00 AM - 6:00 PM
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Sabados: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
