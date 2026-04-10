import type { Company } from "@repo/types";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-white/5 bg-surface p-6 text-center transition-all duration-300 hover:scale-105 hover:border-fiap-red hover:bg-fiap-red hover:shadow-lg hover:shadow-fiap-red/20">
      <div className="flex h-20 w-full items-center justify-center px-4">
        <img
          src={company.logo}
          alt={`Logo da ${company.name}`}
          className="max-h-10 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-95"
        />
      </div>
      <div className="relative flex min-h-[56px] w-full items-center justify-center">
        <h3 className="text-sm font-black text-white transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
          {company.name}
        </h3>
        <p className="absolute inset-0 flex items-center justify-center text-center text-xs leading-relaxed text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="line-clamp-3 max-w-[220px]">{company.description}</span>
        </p>
      </div>
    </div>
  );
}
