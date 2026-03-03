import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { globalConfigQuery } from "@/sanity/lib/queries";

export default async function Footer() {
  const globalConfig = await client.fetch(globalConfigQuery, {}, { cache: 'no-store' });

  const phoneFormatted = globalConfig?.phone || "311 854 3597";
  const phoneLink = phoneFormatted.replace(/[^0-9+]/g, "");
  const whatsappNumber = globalConfig?.whatsapp || phoneLink;
  const email = globalConfig?.email || "mardilaespejo@gmail.com";
  const address = globalConfig?.address || "Carrera 24 # 67 - 44, L-136, Bogota";
  const footerDescription = globalConfig?.footerDescription || "Importamos y comercializamos repuestos de BMW, Audi, Mercedes Benz, Volkswagen y Mini Cooper. Servicio de taller automotriz especializado.";
  const schedule = globalConfig?.schedule || [
    "Lunes a Viernes: 8:00 AM - 6:00 PM",
    "Sabados: 8:00 AM - 1:00 PM"
  ];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground">
              A&M <span className="text-primary">euro cars</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground ">
              {footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
              Enlaces
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Footer links">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/repuestos", label: "Repuestos" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
              Contacto
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${phoneLink}`}
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground "
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {phoneFormatted}
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, necesito más información.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground "
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {whatsappNumber}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {email}
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {address}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
              Horario
            </h4>
            <div className="flex flex-col gap-3">
              {schedule.map((line: string, idx: number) => {
                const parts = line.split(':');
                const title = parts[0];
                const time = parts.slice(1).join(':').trim();
                
                return (
                  <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground ">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p>{title}</p>
                      {time && (
                        <p className="font-semibold text-foreground">
                          {time}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground ">
            &copy; {currentYear} A&M euro cars. Todos los derechos reservados.
            <br />
            <a href="https://www.kytcode.lat" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary transition-colors hover:underline mt-2">
              Desarrollado por K&T 
              <span className="block dark:hidden">🖤</span>
              <span className="hidden dark:block">🤍</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
