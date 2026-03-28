import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
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
  openGraph: {
    title: "Aseff & Farias Advocacia",
    description:
      "Especialistas em Direito Bancário e Previdenciário. Protegemos seus direitos com dedicação e transparência.",
    type: "website",
    locale: "pt_BR",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
