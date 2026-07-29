import type { Metadata } from "next";
import "./globals.css";

import { inter, jetbrainsMono } from "@/config/fonts";

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
  openGraph: {
    title: "Alex Muñoz | Desarrollador Full Stack",
    description:
      "Portfolio con proyectos desarrollados en WordPress, React, Next.js y TypeScript. Creando experiencias web modernas, rápidas y escalables.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
