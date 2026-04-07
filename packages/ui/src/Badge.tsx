import { type JSX } from "react";
import { CircleCheck, Circle, TriangleAlert } from "lucide-react";
import type { Difficulty } from "@repo/types";

const difficultyConfig: Record<Difficulty, { label: string; color: string; icon: JSX.Element }> = {
  facil: {
    label: "Fácil",
    color: "text-easy",
    icon: <CircleCheck size={14} />,
  },
  medio: {
    label: "Médio",
    color: "text-medium",
    icon: <TriangleAlert size={14} />,
  },
  dificil: {
    label: "Difícil",
    color: "text-hard",
    icon: <Circle size={14} />,
  },
};

interface BadgeProps {
  difficulty: Difficulty;
}

export function DifficultyBadge({ difficulty }: BadgeProps) {
  const config = difficultyConfig[difficulty];

  return (
    <span className={`inline-flex items-center gap-1 rounded-full text-xs font-medium ${config.color}`}>
      {config.icon}
      {config.label}
    </span>
  );
}
