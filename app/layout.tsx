import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RO VIDROS | Vidros Temperados e Espelhos",
  description:
    "Soluções sob medida para ambientes residenciais e comerciais: janelas, portas, box, guarda-corpos, escadas e espelhos. Vidros temperados com acabamento premium.",
  keywords: [
    "vidraçaria",
    "vidros temperados",
    "box para banheiro",
    "guarda-corpo",
    "espelhos",
    "portas de vidro",
    "janelas temperadas",
    "cortina de vidro",
  ],
  openGraph: {
    title: "RO VIDROS | Vidros Temperados e Espelhos",
    description:
      "Soluções sob medida para ambientes residenciais e comerciais: janelas, portas, box, guarda-corpos, escadas e espelhos.",
    type: "website",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0066CC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
