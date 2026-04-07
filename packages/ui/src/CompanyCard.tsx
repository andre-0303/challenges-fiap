import type { Company } from "@repo/types";

interface CompanyCardProps {
  company: Company;
}

const companyColors: Record<string, string> = {
  ifood: "bg-fiap-red",
  boticario: "bg-[#8B4D9B]",
  itau: "bg-[#FF7E00]",
  magalu: "bg-[#00B5E2]",
  raizen: "bg-[#006838]",
};

export function CompanyCard({ company }: CompanyCardProps) {
  const bgColor = companyColors[company.id] || "bg-fiap-red";

  return (
    <div className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-white/5 bg-surface p-6 text-center transition-all duration-300 hover:scale-105 hover:border-fiap-red/50 hover:shadow-lg hover:shadow-fiap-red/10">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bgColor} shadow-lg`}
      >
        <span className="text-xl font-black text-white">
          {company.name.charAt(0)}
        </span>
      </div>
      <h3 className="text-sm font-black text-white group-hover:text-fiap-red transition-colors">
        {company.name}
      </h3>
      <p className="text-xs text-muted/60 leading-relaxed line-clamp-2">
        {company.industry}
      </p>
    </div>
  );
}
