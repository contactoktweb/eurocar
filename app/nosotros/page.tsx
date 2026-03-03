import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import * as LucideIcons from "lucide-react";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await client.fetch(aboutPageQuery, {}, { cache: 'no-store' });
  return {
    title: aboutData?.seoTitle || "Nosotros | A&M euro cars",
    description: aboutData?.seoDescription || "Conoce la historia, mision y valores de euro cars. Taller especializado en vehiculos de lujo alemanes en Bogota, Colombia.",
  };
}

export const revalidate = 0;

export default async function NosotrosPage() {
  const aboutData = await client.fetch(aboutPageQuery, {}, { cache: 'no-store' });

  if (!aboutData) return null;

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.HelpCircle;
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
          {aboutData.heroImageUrl && (
            <Image
              src={aboutData.heroImageUrl}
              alt={aboutData.heroTitle}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {aboutData.heroSubtitle}
            </span>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              {aboutData.heroTitle}{" "}
              <span className="text-primary">{aboutData.heroTitleHighlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutData.heroDescription}
            </p>
          </div>
        </section>

        {/* About Text */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <LucideIcons.Target className="h-6 w-6 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {aboutData.missionSubtitle}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {aboutData.missionTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {aboutData.missionDescription}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <LucideIcons.Users className="h-6 w-6 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {aboutData.visionSubtitle}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {aboutData.visionTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {aboutData.visionDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-card py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {aboutData.whySubtitle}
              </span>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
                {aboutData.whyTitle}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {aboutData.strengths?.map((item: any) => {
                const Icon = getIcon(item.icon);
                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-3 rounded-lg border border-border bg-background p-5 text-center transition-colors hover:border-primary/50"
                  >
                    <Icon className="h-7 w-7 text-primary" />
                    <span className="text-sm font-semibold text-foreground leading-tight">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {aboutData.stats?.map((stat: any) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-black text-primary-foreground md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {aboutData.servicesSubtitle}
              </span>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
                {aboutData.servicesTitle}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aboutData.servicesList?.map((service: any) => {
                const Icon = getIcon(service.icon);
                return (
                  <div
                    key={service.title}
                    className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
