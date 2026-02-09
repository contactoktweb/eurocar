import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | A&M Germany Motors",
  description:
    "Articulos, consejos y novedades sobre mantenimiento y repuestos para vehiculos de lujo alemanes.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-card pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Noticias y consejos
            </span>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Nuestro <span className="text-primary">Blog</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Articulos, consejos y novedades sobre mantenimiento, repuestos y
              todo lo que necesitas saber sobre tu vehiculo de lujo aleman.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </div>
                      <h2 className="text-lg font-bold leading-tight text-foreground text-balance">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                        Leer mas
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
