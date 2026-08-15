import type { SimpleBrand } from "../types/icons";
import type { Project, TimelineEntry, AwardCertificate } from "../types/portfolio";

export type { Project, TimelineEntry, TimelineLink, AwardCertificate } from "../types/portfolio";

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
  { label: "Docker", icon: "siDocker" },
];

export const awardsCertificates: AwardCertificate[] = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "May 2024",
    url: "https://www.hackerrank.com/certificates/9a20168f02ba",
  },
  {
    title: "CS50x",
    issuer: "Harvard University",
    date: "Jan 2023",
    url: "https://certificates.cs50.io/56636a9b-ef0a-4d21-b63d-8e021bce7dba.pdf",
  },
  {
    title: "CodeNection 2022 — 3rd Place",
    issuer: "Multimedia University Malaysia",
    date: "November 2022",
  },
  {
    title: "Oddesey Hackfest",
    issuer: "University Malaya",
    date: "October 2022",
  },
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
      "Designed, implemented, and released <strong>web</strong> and <strong>backend</strong> capabilities for internal tooling from APIs and integrations to dashboards teams rely on day to day, using <strong>Docker</strong> to manage the microservices behind them.",
      "Part of a <strong>React Native</strong> codebase that targets <strong>web</strong>, <strong>mobile</strong>, and <strong>TVs</strong>, including native integrations and SDK work for <strong>DirecTV</strong> deployments.",
      "Partnered across product and platform to unblock releases, tighten quality, and keep shared components consistent across surfaces.",
      "Ran structured <strong>onboarding</strong> for new hires so they could contribute quickly to <strong>large-scale, multi-platform</strong> shipping, architecture walkthroughs, coding standards, and release practices.",
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
      "Delivered accessible, production-grade <strong>React</strong> interfaces for banking workflows, partnering with stakeholders on requirements while keeping regressions rare through disciplined testing and <strong>~90% unit test</strong> coverage on critical paths.",
      "Owned <strong>VegaSpread 4.0</strong> end to end in <strong>React</strong> from translating <strong>design</strong> specs into reusable components through <strong>production</strong> launch with a focus on rendering and interacting with <strong>high-volume</strong> market data reliably.",
      "Expanded <strong>Playwright</strong> automation to cover critical user journeys, giving the team repeatable <strong>E2E</strong> signal and safer releases during iterative feature work.",
      "Collaborated tightly on performance, UX polish, and shared UI patterns so new features shipped quickly without fragmenting the product experience.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Fitnexx | Privacy first gym performance and macro tracking app",
    description: "Privacy first gym performance and macro tracking app",
    bullets: [
      "Built a cross-platform <strong>React Native</strong> and <strong>Expo</strong> app for gym performance tracking and macro logging.",
      "Designed a <strong>privacy-first</strong> architecture with a <strong>local-first sync engine</strong> and no external data sharing.",
      "Implemented calorie and macro nutrient tracking with <strong>custom meal logging</strong> and daily goal management.",
    ],
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
    title: "Color Theroy Infographic - GSAP Animation",
    description:
      "Created a web infographic to learn and build GSAP animations and explore Web Components",
    bullets: [
      "Built an interactive web infographic using <strong>GSAP</strong> scroll-triggered animations and <strong>Web Components</strong>.",
      "Explored custom element lifecycles, shadow DOM encapsulation, and reusable component design patterns.",
      "Designed a visually engaging learning tool that explains color theory concepts through animated examples.",
    ],
    tags: ["Frontend"],
    technologies: ["Web Components", "GSAP", "TypeScript"],
    featured: true,
    cardImage: {
      src: "/images/color.png",
      alt: "Color Theory Infographic",
    },
    projectUrl: "https://color-theory-interactive-infographic.netlify.app/",
    githubUrl: "https://github.com/DevDAJ/Interactive-Infographic",
  },
  // Still in progess, not working on it for now
  // {
  //   title: "DevDAJ IAM",
  //   description:
  //     "Identity and Access Management System for DevDAJ SaaS products.",
  //   tags: [
  //     "Microservices",
  //     "Security",
  //     "Still in development",
  //     "Still in development",
  //   ],
  //   technologies: ["TypeScript", "Bun", "PostgreSQL", "JWT", "ElysiaJS"],
  //   featured: true,
  //   githubUrl: "https://github.com/DevDAJ/DevDAJ-IAM",
  // },
  {
    title: "Owlect",
    description:
      "Learning platform for CodeNection 2022 - SDG 4 (open education); 3rd place.",
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
