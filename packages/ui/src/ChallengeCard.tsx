"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Challenge, Company } from "@repo/types";

interface ChallengeCardProps {
  challenge: Challenge;
  company?: Company;
}

const difficultyBadgeMap: Record<
  Challenge["difficulty"],
  { label: string; className: string }
> = {
  facil: {
    label: "FÁCIL",
    className: "bg-easy-bg text-easy",
  },
  medio: {
    label: "MÉDIO",
    className: "bg-medium-bg text-medium",
  },
  dificil: {
    label: "DIFÍCIL",
    className: "bg-hard-bg text-hard",
  },
};

export function ChallengeCard({ challenge, company }: ChallengeCardProps) {
  const diff = difficultyBadgeMap[challenge.difficulty];
  const challengeHref = `/challenges/${challenge.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -4, borderColor: "#ED1C24" }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:shadow-lg hover:shadow-fiap-red/10"
    >
      <div className="flex flex-col grow">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-fiap-red" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted/60">
              {company?.name}
            </span>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${diff.className}`}
          >
            {diff.label}
          </span>
        </div>

        <Link href={challengeHref} className="mb-3 block">
          <h4 className="text-lg font-black tracking-tight text-white transition-colors line-clamp-1 group-hover:text-fiap-red">
            {challenge.title}
          </h4>
        </Link>
        <p className="mb-6 text-sm leading-relaxed text-muted/40 line-clamp-2 min-h-[40px]">
          {challenge.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {challenge.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-mono text-muted/60 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={challengeHref}
        className="inline-flex w-full items-center justify-center rounded-md border border-white/20 bg-transparent py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 transition-all hover:border-fiap-red hover:bg-fiap-red/10 hover:text-fiap-red"
      >
        ACEITAR DESAFIO
      </Link>
    </motion.div>
  );
}
