export type Difficulty = "facil" | "medio" | "dificil";

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  industry: string;
  website: string;
}

export interface Challenge {
  id: string;
  title: string;
  slug: string;
  companyId: string;
  description: string;
  longDescription: string;
  difficulty: Difficulty;
  skills: string[];
  technologies: string[];
  deadline?: string;
}

export interface ChallengeFilters {
  search?: string;
  difficulty?: Difficulty;
  company?: string;
  technology?: string;
}
