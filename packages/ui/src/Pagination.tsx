"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-12 mb-8">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-transparent text-white/50 transition-colors hover:border-white/20 hover:text-white disabled:pointer-events-none disabled:opacity-30"
        aria-label="Página anterior"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-md text-sm font-semibold transition-all ${
              currentPage === page
                ? "bg-[#ED1C24] text-white shadow-[0_0_20px_rgba(237,28,36,0.2)]"
                : "text-white/50 hover:bg-white/5 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-transparent text-white/50 transition-colors hover:border-white/20 hover:text-white disabled:pointer-events-none disabled:opacity-30"
        aria-label="Próxima página"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
