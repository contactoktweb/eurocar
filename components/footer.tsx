import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground">
              A&M <span className="text-primary">Germany Motors</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground ">
              Importamos y comercializamos repuestos de BMW, Audi, Mercedes
              Benz, Volkswagen y Mini Cooper. Servicio de taller automotriz
              especializado.
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
                href="tel:+573118543597"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground "
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                311 854 3597
              </a>
              <a
                href="mailto:mardilaespejo@gmail.com"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                mardilaespejo@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Carrera 24 # 67 - 44, L-136, Bogota
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
              Horario
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground ">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p>Lunes a Viernes</p>
                  <p className="text-foreground font-semibold">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground ">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p>Sabados</p>
                  <p className="text-foreground font-semibold">
                    8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground ">
            &copy; 2026 A&M Germany Motors. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
