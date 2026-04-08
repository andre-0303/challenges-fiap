"use client";

import { useState, useMemo } from "react";
import { ChallengeCard } from "@repo/ui/ChallengeCard";
import { Pagination } from "@repo/ui/Pagination";
import { companies, challenges } from "@repo/data";

const ITEMS_PER_PAGE = 6;

const CATEGORIES = [
  "Todos",
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "HTML/CSS",
];

export default function ChallengesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredChallenges = useMemo(() => {
    if (selectedCategory === "Todos") return challenges;

    return challenges.filter((challenge) => {
      const tech = challenge.technologies.map((t) => t.toLowerCase());
      const cat = selectedCategory.toLowerCase();

      if (cat === "html/css") {
        return tech.includes("html") || tech.includes("css");
      }

      return tech.includes(cat);
    });
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredChallenges.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentChallenges = filteredChallenges.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <section className="relative flex min-h-[92vh] flex-col overflow-hidden bg-[#0A0A0A] pt-24 pb-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(237,28,36,0.15)_0%,rgba(120,20,10,0.08)_40%,transparent_70%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(180,60,30,0.10)_0%,transparent_60%)] blur-[40px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
          <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ED1C24]">
            ENGINEERED FOR EXCELLENCE
          </span>

          <h1 className="font-headline text-[clamp(2.5rem,8vw,6rem)] font-black leading-[1.02] tracking-tight">
            <span className="text-white">Challenges</span>
            <span className="text-[#ED1C24]">.</span>
          </h1>

          <div className="mt-5 flex flex-col justify-between items-stretch gap-4 sm:flex-row sm:items-center">
            <p className="mt-6 max-w-[480px] text-base leading-relaxed text-white/60">
              Expanda seus limites técnicos com tarefas de engenharia de alto
              desempenho propostas por líderes globais do setor. Resolva,
              otimize e supere-se.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-white/80">
              <div className="flex items-center gap-2">
                <div className="bg-green-400 rounded-full h-2 w-2 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                {filteredChallenges.length} Tasks encontradas
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/40 rounded-full h-2 w-2"></div>
                Ordenado por mais recente
              </div>
            </div>
          </div>
        </div>

        {/* Categorias Barra */}
        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 mt-12 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  selectedCategory === category
                    ? "bg-[#ED1C24] border-[#ED1C24] text-white shadow-[0_0_20px_rgba(237,28,36,0.3)]"
                    : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <section className="mx-auto w-full max-w-[1800px] px-6 py-12 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
          {currentChallenges.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentChallenges.map((challenge) => {
                const company = companies.find(
                  (c) => c.id === challenge.companyId,
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
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-white/40 text-lg">
                Nenhum desafio encontrado nesta categoria.
              </p>
              <button
                onClick={() => handleCategoryChange("Todos")}
                className="mt-4 text-[#ED1C24] hover:underline"
              >
                Ver todos os desafios
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
            />
          )}
        </section>
      </section>
    </>
  );
}
