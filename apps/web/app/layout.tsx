import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="pt-BR" className={`${inter.variable} font-sans`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
