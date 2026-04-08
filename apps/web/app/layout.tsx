import type { Metadata } from "next";
import { Inter, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@repo/ui/Footer";
import { Header } from "@repo/ui/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "ChallengesON — FIAP",
  description:
    "Plataforma onde empresas parceiras publicam desafios práticos e alunos os resolvem para aprender com problemas reais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable} font-sans`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
