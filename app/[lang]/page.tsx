import { getDictionary, type Locale } from "@/lib/getDictionary";
import Navbar from "@/components/Navbar";
import HeroContent from "@/components/HeroContent";
import HeroVideo from "@/components/HeroVideo";
import BottomBar from "@/components/BottomBar";
import ArticlesSection from "@/components/ArticlesSection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
        <HeroVideo />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(202deg, rgba(0,0,0,0.31) 30%, rgba(0,0,0,0.29) 84%)",
          }}
        />

        <Navbar dict={dict.nav} lang={lang} />

        <div className="relative z-10 flex-1 flex items-start pt-[12vh] pl-[calc(3.5%+180px)]">
          <HeroContent dict={dict.hero} />
        </div>

        <BottomBar destinations={dict.destinations} />
      </section>

      <ArticlesSection articles={dict.articles} lang={lang} />
    </main>
  );
}
