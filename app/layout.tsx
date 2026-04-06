import React from "react"
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Script from "next/script";

const yantramanav = localFont({
  src: [
    {
      path: "../public/font/Yantramanav-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/Yantramanav-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/Yantramanav-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Yantramanav-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/Yantramanav-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Yantramanav-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yantramanav",
});

export const revalidate = 0;

import { client } from "@/sanity/lib/client";
import { globalConfigQuery } from "@/sanity/lib/queries";
import WhatsappButton from "@/components/whatsapp-button";

export async function generateMetadata(): Promise<Metadata> {
  const globalConfig = await client.fetch(globalConfigQuery, {}, { cache: 'no-store' });
  const logoUrl = globalConfig?.logoUrl || "/images/image.png";
  
  return {
    title: globalConfig?.siteTitle || "A&M euro cars | Repuestos y Taller Especializado",
    description: globalConfig?.siteDescription || "Importamos y comercializamos repuestos de BMW, Audi, Mercedes Benz, Volkswagen y Mini Cooper. Servicio de taller automotriz especializado en Bogota, Colombia.",
    keywords: "repuestos BMW, repuestos Audi, repuestos Mercedes Benz, taller especializado, Volkswagen, Mini Cooper, Bogota Colombia",
    icons: {
      icon: logoUrl,
      shortcut: logoUrl,
      apple: logoUrl,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalConfig = await client.fetch(globalConfigQuery, {}, { cache: 'no-store' });
  const whatsapp = globalConfig?.whatsapp || "3027424210";

  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16828583888"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16828583888');
          `}
        </Script>
      </head>
      <body className={`${yantramanav.variable} font-sans antialiased text-foreground`}>
        {children}
        <WhatsappButton phoneNumber={whatsapp} />
      </body>
    </html>
  );
}
