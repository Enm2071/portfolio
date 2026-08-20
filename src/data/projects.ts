// Shared project metadata — the parts that don't change per-locale (slug,
// tags, image). Title/description/detail text come from src/i18n/ui.ts via
// the `i18nKey` (e.g. "project_1" -> project_1_title / project_1_description
// / project_1_detail), keeping one source of truth instead of duplicating
// this array once for the grid and again for the detail pages.
export interface ProjectMeta {
  slug: string;
  i18nKey: string;
  tags: string[];
  image: string;
}

export const projects: ProjectMeta[] = [
  {
    slug: "thryv-nextjs-modules",
    i18nKey: "project_1",
    tags: ["Next.js", "Node.js", "React", "Express", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "flask-to-graphql",
    i18nKey: "project_2",
    tags: ["Python", "GraphQL", "pytest", "API Design"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "django-graphql-migration",
    i18nKey: "project_7",
    tags: ["Python", "GraphQL", "pytest", "Django"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "medical-clinic-management",
    i18nKey: "project_8",
    tags: ["React", "AWS", "Cognito", "Amplify", "Electron", "DynamoDB", "Lambda", "Stripe"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "business-insurance-management",
    i18nKey: "project_9",
    tags: [".NET", "C#", "React", "AWS"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "wordpress-micro-frontend",
    i18nKey: "project_3",
    tags: ["React", "TypeScript", "Micro-Frontend", ".NET"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "admin-portal-user-management",
    i18nKey: "project_4",
    tags: ["React", "Redux", "C#", ".NET Core"],
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "premium-reservation-app",
    i18nKey: "project_5",
    tags: ["React Native", "JavaScript", "Payments", "Mobile"],
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "toll-management-platform",
    i18nKey: "project_6",
    tags: ["Vue.js", "React", ".NET", "Mobile", "Payments"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "proyfin-personal-finance",
    i18nKey: "project_10",
    tags: ["Next.js", "TypeScript", "MUI", "Neon Postgres", "Stripe", "OpenAI", "n8n", "PWA"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "alianca-erp",
    i18nKey: "project_11",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AWS Cognito", "TanStack Query"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "alianca-reportes-dgii",
    i18nKey: "project_12",
    tags: ["Next.js", "TypeScript", "MUI", "AWS Textract", "DynamoDB", "Lambda", "Stripe"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}
