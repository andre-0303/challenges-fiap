import type { Company } from "@repo/types";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-white/5 bg-surface p-6 text-center transition-all duration-300 hover:scale-105 hover:border-fiap-red/50 hover:shadow-lg hover:shadow-fiap-red/10">
      <div className="flex h-20 w-full items-center justify-center px-4">
        <img
          src={company.logo}
          alt={`Logo da ${company.name}`}
          className="max-h-10 w-auto max-w-full object-contain"
        />
      </div>
      <h3 className="text-sm font-black text-white group-hover:text-fiap-red transition-colors">
        {company.name}
      </h3>
    </div>
  );
}
