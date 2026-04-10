import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Header } from "@repo/ui/Header";
import { companies, challenges } from "@repo/data";

const companyTracks: Record<string, string> = {
  ifood: "LOGISTICS + FOOD",
  boticario: "WELL-BEING",
  itau: "FINTECH + CLOUD",
  magalu: "E-COMMERCE",
  raizen: "ENERGY + SUSTAINABILITY",
};

const companyCardTints: Record<string, string> = {
  ifood: "from-[#2A2A2A] to-[#1D1D1D]",
  boticario: "from-[#303030] to-[#242424]",
  itau: "from-[#2E2E2E] to-[#212121]",
  magalu: "from-[#262626] to-[#1D1D1D]",
  raizen: "from-[#292929] to-[#1F1F1F]",
};

export default function CompaniesPage() {
  const totalCompanies = companies.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto flex w-full max-w-[1800px] flex-col px-6 pt-28 pb-20 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <section className="border-b border-white/6 pb-10">
          <span className="block text-[9px] font-black uppercase tracking-[0.45em] text-fiap-red/45">
            PARCEIRAS DE ALTA PERFORMANCE
          </span>

          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-headline text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight">
                <span className="block text-white">Empresas</span>
                <span className="block text-fiap-red">Parceiras</span>
              </h1>

              <p className="mt-6 max-w-[520px] text-sm leading-relaxed text-white/45 md:text-base">
                Conectando talentos às maiores potências tecnológicas do Brasil
                através de desafios de engenharia reais.
              </p>
            </div>

            <div className="flex items-end gap-3 self-start text-left lg:self-end lg:text-right">
              <div className="text-4xl font-black leading-none text-white md:text-5xl">
                {String(totalCompanies).padStart(2, "0")}
              </div>
              <div className="pb-1 text-[9px] font-black uppercase tracking-[0.35em] text-white/20">
                GIGANTES DO SETOR TECH
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((company) => {
            const challengeCount = challenges.filter(
              (challenge) => challenge.companyId === company.id,
            ).length;

            return (
              <article
                key={company.id}
                className={`flex min-h-[320px] flex-col rounded-[1.75rem] border border-white/6 bg-linear-to-br ${companyCardTints[company.id] ?? "from-[#2B2B2B] to-[#1F1F1F]"} p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-fiap-red/40`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/6 bg-black/25 p-2">
                    <img
                      src={company.logo}
                      alt={`Logo da ${company.name}`}
                      className="max-h-6 w-auto max-w-full object-contain"
                    />
                  </div>

                  <span className="rounded-sm bg-[#6D5A16]/80 px-3 py-1 text-[9px] font-black uppercase tracking-[0.22em] text-[#D0B95B]">
                    {companyTracks[company.id] ??
                      company.industry.toUpperCase()}
                  </span>
                </div>

                <div className="mt-12 flex flex-1 flex-col">
                  <h2 className="text-[1.75rem] font-black tracking-tight text-white">
                    {company.name}
                  </h2>

                  <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/42">
                    {company.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-5 pt-8">
                    <div>
                      <div className="text-3xl font-black leading-none text-white">
                        {String(challengeCount).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-[9px] font-black uppercase tracking-[0.28em] text-white/18">
                        CHALLENGES ATIVOS
                      </div>
                    </div>

                    <Link
                      href={`/companies/${company.id}/challenges`}
                      className="inline-flex h-11 items-center justify-center rounded-md bg-[#ff7f7a] px-5 text-[10px] font-black uppercase tracking-[0.24em] text-[#271312] transition-all hover:bg-[#ff938f]"
                    >
                      Ver Challenges
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}

          <article className="flex min-h-[320px] flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-white/12 bg-transparent p-6 text-center transition-all duration-300 hover:border-fiap-red/40 hover:bg-white/[0.02]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/20 text-white/80">
              <Plus size={18} />
            </div>

            <h2 className="mt-8 text-2xl font-black tracking-tight text-white">
              Sua Empresa Aqui
            </h2>

            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.35em] text-white/25">
              Junte-se à nossa rede de elite
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-fiap-red transition-colors hover:text-white"
            >
              Saiba mais
              <ArrowRight size={16} />
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
}
