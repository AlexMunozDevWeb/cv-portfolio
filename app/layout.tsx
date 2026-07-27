import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Muñoz | Software Engineer & Digital Architect",
  description:
    "Portfolio of Alex Muñoz - Architecting scalable digital systems, distributed microservices, and fluid web experiences with surgical precision.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Systems Architect",
    "Next.js",
    "TypeScript",
    "React",
    "Web3",
  ],
  authors: [{ name: "Alex Muñoz" }],
  openGraph: {
    title: "Alex Muñoz | Software Engineer",
    description:
      "Architecting scalable digital systems with surgical precision.",
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
      className={`dark ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
