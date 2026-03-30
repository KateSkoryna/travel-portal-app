import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/getDictionary";

interface Article {
  title: string;
  description: string;
  cta: string;
  slug: string;
}

interface ArticlesSectionProps {
  articles: Article[];
  lang: Locale;
}

const articleImages = ["/path.webp", "/beach.webp"];

export default function ArticlesSection({ articles, lang }: ArticlesSectionProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image src="/view.webp" alt="" fill className="object-cover" />
      </div>

      {/* Gradient overlays for seamless blending */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-navy to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-navy to-transparent pointer-events-none" />

      <div className="relative flex flex-col">
        {articles.map((article, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={article.slug}
              className="flex items-center gap-12 px-[8%] py-24"
              style={{ flexDirection: isEven ? "row" : "row-reverse" }}
            >
              {/* Image */}
              <div className="flex-1 min-w-0">
                <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image
                    src={articleImages[i] ?? articleImages[0]}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 flex flex-col gap-6">
                <h3
                  className="font-body font-bold text-white"
                  style={{ fontSize: "42px", lineHeight: "50px" }}
                >
                  {article.title}
                </h3>
                <p
                  className="font-body text-[#e0e0e0] text-[18px] leading-[28px] tracking-[0.01em]"
                  style={{ maxWidth: "407px" }}
                >
                  {article.description}
                </p>
                <Link
                  href={`/${lang}/articles/${article.slug}`}
                  className="self-start flex items-center justify-center bg-primary text-white font-body font-bold rounded-full px-6 py-4 text-[18px] hover:bg-primary/80 transition-colors"
                >
                  {article.cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
