"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "INICIO" },
  { href: "/nosotros", label: "NOSOTROS" },
  { href: "/repuestos", label: "REPUESTOS" },
  { href: "/blog", label: "BLOG" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function HeaderClient({ globalConfig }: { globalConfig: any }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const logoSrc = globalConfig?.logoUrl || "/images/image.png";
  const phoneUnformatted = globalConfig?.phone || "311 854 3597";
  const phoneFormatted = globalConfig?.phone ? phoneUnformatted : "311 854 3597";
  const phoneLink = phoneUnformatted.replace(/[^0-9+]/g, "");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logoSrc}
            alt="A&M euro cars Logo"
            width={50}
            height={50}
            className="rounded"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-semibold tracking-wider transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA and Phone */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${phoneLink}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            {phoneFormatted}
          </a>
          <Link
            href="/contacto"
            className="rounded bg-primary px-5 py-2.5 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            SOLICITA UNA REVISION
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Navegacion movil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-sm font-semibold tracking-wider border-b border-border ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${phoneLink}`}
              className="mt-4 flex items-center gap-2 py-2 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              {phoneFormatted}
            </a>
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded bg-primary px-5 py-3 text-center text-sm font-bold tracking-wide text-primary-foreground"
            >
              SOLICITA UNA REVISION
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
