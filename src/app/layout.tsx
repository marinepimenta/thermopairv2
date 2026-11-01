import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

// Corpo de texto — Figtree.
// Servida pelo Google Fonts (mesmo desenho dos .ttf enviados, porém em woff2
// já subsetado). Para passar a usar os arquivos locais, troque por localFont
// apontando para public/fonts/Figtree-VariableFont_wght.ttf.
const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Títulos — Inter (variável: um só arquivo cobre todos os pesos).
// Itálico incluído porque há palavras em <em>/italic dentro de títulos.
const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thermopair — Climate Care | HVAC in Massachusetts",
  description:
    "Heating and cooling installation and maintenance across Massachusetts. Human service, fast emergency response, and clear pricing before we start.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
