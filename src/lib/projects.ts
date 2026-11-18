import { PORTFOLIO_PROJECTS } from "@/constants/portfolio";
import type { PortfolioProject } from "@/types/portfolio";

/** Page address for a project, taken from its photo folder, e.g. "vapiano-zcc" */
export function getProjectSlug(project: PortfolioProject): string {
  return project.src.split("/")[2];
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => getProjectSlug(p) === slug);
}

export function getAllProjectSlugs(): string[] {
  return PORTFOLIO_PROJECTS.map(getProjectSlug);
}