import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Calendar, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { blogPostBySlugQuery } from "@/sanity/lib/queries";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 0;

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug }, { cache: 'no-store' });

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  return {
    title: `${post.title} | A&M euro cars`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug }, { cache: 'no-store' });

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-4xl px-4 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {post.publishedAt
                ? format(new Date(post.publishedAt), "dd MMMM yyyy", {
                    locale: es,
                  })
                : "Borrador"}
              <span className="mx-2">•</span>
              <span>por {post.author || "A&M euro cars"}</span>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance leading-tight">
              {post.title}
            </h1>
          </div>

          {post.mainImageUrl && (
            <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl border border-border">
              <Image
                src={post.mainImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
             {/* Simple Portable Text Rendering if needed, or just display content */}
             {/* For now, we assume simple blocks for the migration script to convert to string if we don't have a renderer */}
             <div className="text-muted-foreground leading-relaxed text-lg space-y-6">
                {/* Rendering logic here */}
                {post.body ? (
                   <PortableTextContent value={post.body} />
                ) : (
                  <p>{post.excerpt}</p>
                )}
             </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function PortableTextContent({ value }: { value: any[] }) {
  return (
    <div className="space-y-6">
      {value.map((block: any, index: number) => {
        if (block._type === 'block') {
          const Tag = block.style === 'h2' ? 'h2' : block.style === 'h3' ? 'h3' : 'p';
          
          return (
            <Tag key={block._key || index} className={block.style === 'normal' ? 'text-muted-foreground' : 'text-foreground font-bold mt-8'}>
              {block.children.map((child: any, childIndex: number) => {
                const isBold = child.marks?.includes('strong');
                return (
                  <span key={child._key || childIndex} className={isBold ? 'font-bold text-foreground' : ''}>
                    {child.text}
                  </span>
                );
              })}
            </Tag>
          );
        }
        return null;
      })}
    </div>
  );
}
