import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@repo/ui/Header";
import { Button } from "@repo/ui/Button";
import { ChallengeCard } from "@repo/ui/ChallengeCard";
import { CompanyLogoStrip } from "@repo/ui/CompanyLogoStrip";
import { companies, challenges } from "@repo/data";

const featuredChallenges = challenges.slice(0, 3);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex flex-col pb-20">
        {/* Hero Section */}
        <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-24 pb-32">
          {/* Radial glow — warm red/brown from top-right */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(237,28,36,0.15)_0%,rgba(120,20,10,0.08)_40%,transparent_70%)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(180,60,30,0.10)_0%,transparent_60%)] blur-[40px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
            {/* Top label */}
            <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ED1C24]">
              ENGINEERED FOR EXCELLENCE
            </span>

            {/* Main headline — left aligned, very bold */}
            <h1 className="font-headline text-[clamp(2.5rem,8vw,6rem)] font-black leading-[1.02] tracking-tight">
              <span className="text-white">Resolva Desafios</span>
              <br />
              <span className="text-white">Reais.</span>
            </h1>

            {/* Shadow/echo line — intentionally dark gray for depth */}
            <h2 className="font-headline text-[clamp(2.5rem,8vw,6rem)] font-black leading-[1.02] tracking-tight text-[#3A3A3A]">
              Aprenda de Verdade.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[480px] text-base leading-relaxed text-white/60">
              A plataforma definitiva para engenheiros de alta performance. Encare
              desafios técnicos reais de empresas líderes.
            </p>

            {/* Buttons row */}
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Link href="/challenges">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full gap-3 px-8 sm:min-w-[210px] sm:w-auto sm:justify-between"
                >
                  Ver Challenges
                  <ArrowRight size={20} strokeWidth={2.5} />
                </Button>
              </Link>
              <Link href="/companies">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full px-8 sm:min-w-[210px] sm:w-auto sm:justify-center"
                >
                  Explorar Trilhas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Empresas Parceiras */}
        <div className="relative">
          <CompanyLogoStrip />
        </div>

        {/* Challenges em Destaque */}
        <section className="mx-auto w-full max-w-[1800px] px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-24 2xl:px-32">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="block text-[9px] font-black uppercase tracking-[0.6em] text-fiap-red/70">
                DESTAQUES
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight text-white font-headline md:text-5xl">
                Challenges em Destaque
              </h2>
              <p className="mt-3 text-sm text-muted/50 font-label">
                Os desafios mais quentes da semana selecionados para você.
              </p>
            </div>
            <Link
              href="/challenges"
              className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-muted transition-all hover:text-fiap-red"
            >
              VER TODOS{" "}
              <ArrowRight
                size={12}
                strokeWidth={3}
                className="text-fiap-red/50"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredChallenges.map((challenge) => {
              const company = companies.find(
                (c) => c.id === challenge.companyId
              );
              return (
                <ChallengeCard
                  key={challenge.id}
                  challenge={challenge}
                  company={company}
                />
              );
            })}
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="mx-auto w-full max-w-[1800px] px-6 pb-24 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
          <div className="relative overflow-hidden rounded-xl border-l-4 border-fiap-red bg-surface p-10 md:p-16">
            {/* Optional subtle gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-fiap-red/5 to-transparent opacity-50" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0">
              <div className="max-w-xl text-center lg:text-left">
                <h3 className="mb-6 text-4xl font-black leading-tight tracking-tight font-headline md:text-5xl lg:text-6xl">
                  Pronto para o <br /> próximo nível?
                </h3>
                <p className="text-base font-bold text-muted/70 md:text-lg">
                  Junte-se a milhares de engenheiros e comece a construir seu
                  portfólio de desafios reais hoje mesmo.
                </p>
              </div>
              <button className="whitespace-nowrap rounded-md bg-fiap-red px-14 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-fiap-red/25 transition-all hover:bg-red-700 hover:shadow-fiap-red/40 active:scale-95">
                Criar Conta Grátis
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
