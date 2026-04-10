import { notFound } from "next/navigation";
import { ChallengeCard } from "@repo/ui/ChallengeCard";
import { Header } from "@repo/ui/Header";
import { companies, challenges as allChallenges } from "@repo/data";
import { type Company } from "@repo/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CompanyChallengesPage({ params }: PageProps) {
  const { id } = await params;
  const company = companies.find((c) => c.id === id);

  if (!company) {
    notFound();
  }

  const companyChallenges = allChallenges.filter((c) => c.companyId === id);

  return (
    <CompanyChallengesGrid challenges={companyChallenges} company={company} />
  );
}

function CompanyChallengesGrid({
  challenges,
  company,
}: {
  challenges: typeof allChallenges;
  company: Company;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto flex w-full max-w-[1800px] flex-col px-6 pt-28 pb-20 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <Link
          href="/companies"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Todas as Empresas
        </Link>

        <section className="mt-12 border-b border-white/6 pb-10">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/6 bg-black/25 p-3">
              <img
                src={company.logo}
                alt={`Logo da ${company.name}`}
                className="max-h-9 w-auto max-w-full object-contain"
              />
            </div>

            <div>
              <h1 className="font-headline text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] tracking-tight">
                <span className="text-white">{company.name}</span>
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-white/42">
                {challenges.length} challenges disponíveis
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          {challenges.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge) => (
                <ChallengeCard
                  key={challenge.id}
                  challenge={challenge}
                  company={company}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-white/40 text-lg">
                Nenhum challenge disponível ainda.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
