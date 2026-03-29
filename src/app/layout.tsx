import Script from "next/script";
import type { Metadata } from "next";
import { Raleway, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aseff & Farias Advocacia | Direito Bancário e Previdenciário",
  description:
    "Escritório de advocacia especializado em Direito Bancário e Direito Previdenciário. Reduza suas dívidas bancárias e garanta seus benefícios previdenciários com quem entende do assunto.",
  keywords: [
    "advocacia",
    "direito bancário",
    "direito previdenciário",
    "redução de dívidas",
    "juros abusivos",
    "auxílio-doença",
    "salário-maternidade",
    "auxílio-acidente",
    "INSS",
    "Santa Maria",
    "RS",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aseff & Farias Advocacia",
    description:
      "Especialistas em Direito Bancário e Previdenciário. Protegemos seus direitos com dedicação e transparência.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Aseff & Farias Advocacia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${raleway.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        {children}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
