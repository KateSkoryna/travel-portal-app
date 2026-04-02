import { Roboto, DM_Sans } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  weight: ["900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${roboto.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
