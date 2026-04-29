import type { SimpleBrand } from "../types/icons";
import type { Project, TimelineEntry } from "../types/portfolio";

export type { Project, TimelineEntry, TimelineLink } from "../types/portfolio";

/** Homepage skills strip (`SimpleBrand` = simple-icons export name). */
export type HomepageSkill = { label: string; icon: SimpleBrand };

export const homepageSkills: HomepageSkill[] = [
  { label: "Next.js", icon: "siNextdotjs" },
  { label: "React", icon: "siReact" },
  { label: "React Native", icon: "siReact" },
  { label: "TypeScript / JavaScript", icon: "siTypescript" },
  { label: "Express.js", icon: "siExpress" },
  { label: "Astro", icon: "siAstro" },
  { label: "Tailwind CSS", icon: "siTailwindcss" },
  { label: "PostgreSQL", icon: "siPostgresql" },
];

export const timeline: TimelineEntry[] = [
  {
    id: "kloudius",
    employer: "Kloudius Services",
    employerUrl: "https://www.linkedin.com/company/kloudius-services",
    logoSrc:
      "https://kloudius.com/wp-content/uploads/2025/07/cropped-favicon-192x192.png",
    logoAlt: "Kloudius Services",
    initial: "K",
    subtitle: "Software Engineer",
    startLabel: "August 2024",
    endLabel: "Present",
    bullets: [
      "Shipped <strong>web</strong> and <strong>backend</strong> features for internal tooling.",
      "Owned <strong>React Native</strong> for web, mobile, and TVs, plus SDKs for <strong>DirecTV</strong>",
      "Onboarded new hires for <strong>large-scale, multi-platform</strong> delivery.",
    ],
  },
  {
    id: "thewalnutai",
    logoSrc:
      "https://media.licdn.com/dms/image/v2/D4D0BAQEUflkHjYOR6A/company-logo_200_200/company-logo_200_200/0/1734355518241/the_walnut_ai_logo?e=2147483647&v=beta&t=gxHgVeMWzSNDy952jgiuOLZiQ9xfeL-_FKFltzj5yvQ",
    employer: "The Walnut AI",
    employerUrl: "https://thewalnut.ai",
    logoAlt: "The Walnut AI",
    initial: "W",
    subtitle: "Frontend Engineer",
    startLabel: "February 2023",
    endLabel: "August 2024",
    bullets: [
      "<strong>React</strong> UI for banking; <strong>~90% unit test</strong> coverage.",
      "Built <strong>VegaSpread 4.0</strong> in <strong>React</strong> — design to prod; <strong>high-volume</strong> data.",
      "<strong>Playwright</strong> automation for <strong>E2E</strong> and regression coverage.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Fitnexx | Privacy first gym performance and macro tracking app",
    description: "Privacy first gym performance and macro tracking app",
    tags: ["SaaS", "Fitness", "Still in development"],
    technologies: ["React Native", "TypeScript", "Expo", "Tailwind CSS"],
    featured: true,
    cardImage: {
      src: "/images/fitnexx.png",
      alt: "Fitnexx",
    },
    githubUrl: "https://github.com/DevDAJ/fitnexx",
    projectUrl: "https://fitnexxtracking.vercel.app/",
  },
  {
    title: "DevDAJ IAM",
    description:
      "Identity and Access Management System for DevDAJ SaaS products.",
    tags: [
      "Microservices",
      "Security",
      "Still in development",
      "Still in development",
    ],
    technologies: ["TypeScript", "Bun", "PostgreSQL", "JWT", "ElysiaJS"],
    featured: true,
    githubUrl: "https://github.com/DevDAJ/DevDAJ-IAM",
  },
  {
    title: "Owlect",
    description:
      "Learning platform for CodeNection 2022 — SDG 4 (open education); 3rd place.",
    tags: ["Frontend"],
    technologies: ["Vue.js", "Tailwind CSS", "Contentful", "GraphQL"],
    featured: false,
    cardImage: {
      src: "/images/owlect.png",
      alt: "Owlect",
    },
    writeUpSlug: "owlect-codenection-2022",
    githubUrl: "https://github.com/ahmadfahrezi81/Owlect",
  },
];
