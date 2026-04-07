import { CompanyCard } from "./CompanyCard";
import { companies } from "@repo/data";

export function CompanyLogoStrip() {
  return (
    <section className="relative z-10 border-y border-white/5 bg-[#080808] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16">
          <span className="block text-[9px] font-black uppercase tracking-[0.6em] text-fiap-red/70">
            LISTA PARCEIROS
          </span>
          <h3 className="mt-2 text-2xl font-black text-white font-headline">
            Empresas Parceiras
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className={
                index === companies.length - 1 && companies.length % 2 !== 0
                  ? "col-span-2 flex justify-center md:col-span-1 md:block"
                  : ""
              }
            >
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
