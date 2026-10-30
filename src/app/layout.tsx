import type { Metadata, Viewport } from "next";
import "./globals.css";

import { inter, jetbrainsMono } from "@/config/fonts";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
);

export const metadata: Metadata = {
  title: "Alex Muñoz | Desarrollador WordPress, React y Next.js",
  description:
    "Portfolio de Alex Muñoz, desarrollador Full Stack especializado en WordPress, React, Next.js y TypeScript. Creando aplicaciones web modernas, rápidas y escalables.",
  keywords: [
    "Alex Muñoz",
    "Desarrollador Full Stack",
    "Desarrollador Frontend",
    "Desarrollador WordPress",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Desarrollo Web",
    "Portfolio",
  ],
  authors: [{ name: "Alex Muñoz" }],
  metadataBase: siteUrl,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alex Muñoz | Desarrollador Full Stack",
    description:
      "Portfolio con proyectos desarrollados en WordPress, React, Next.js y TypeScript. Creando experiencias web modernas, rápidas y escalables.",
    type: "website",
    siteName: "Alex Muñoz Portfolio",
    locale: "es_ES",
    url: siteUrl.toString(),
    images: [
      {
        url: "/apex_padel.png",
        width: 1200,
        height: 630,
        alt: "Proyecto destacado de Alex Muñoz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Muñoz | Desarrollador Full Stack",
    description:
      "Portfolio con proyectos desarrollados en WordPress, React, Next.js y TypeScript.",
    images: ["/apex_padel.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0c1324",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground selection:bg-primary/30 selection:text-primary flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="bg-primary text-on-primary fixed left-0 top-0 z-[100] -translate-y-full rounded-br p-3 font-mono text-sm transition-transform focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
