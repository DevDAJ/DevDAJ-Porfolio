import type { SimpleBrand } from "../types/icons";
import type {
  Project,
  TimelineEntry,
  AwardCertificate,
} from "../types/portfolio";

export type {
  Project,
  TimelineEntry,
  TimelineLink,
  AwardCertificate,
} from "../types/portfolio";

/** Homepage skills strip (`SimpleBrand` = simple-icons export name). */
export type HomepageSkill = {
  label: string;
  icon: SimpleBrand | "aws" | "playwright";
  category: string;
};

export const homepageSkills: HomepageSkill[] = [
  { label: "Next.js", icon: "siNextdotjs", category: "Frontend" },
  { label: "React", icon: "siReact", category: "Frontend" },
  { label: "React Native", icon: "siReact", category: "Mobile" },
  {
    label: "TypeScript / JavaScript",
    icon: "siTypescript",
    category: "Languages",
  },
  { label: "Express.js", icon: "siExpress", category: "Backend" },
  { label: "Astro", icon: "siAstro", category: "Frontend" },
  { label: "Tailwind CSS", icon: "siTailwindcss", category: "Frontend" },
  { label: "PostgreSQL", icon: "siPostgresql", category: "Backend" },
  { label: "Node.js", icon: "siNodedotjs", category: "Backend" },
  { label: "Redux", icon: "siRedux", category: "State Manaagement" },
  { label: "Docker", icon: "siDocker", category: "Tooling" },
  { label: "AWS", icon: "aws", category: "Tooling" },
  { label: "Playwright", icon: "playwright", category: "Tooling" },
];

export const awardsCertificates: AwardCertificate[] = [
  {
    title: "Frontend Developer (React) Certification",
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
      "Scaled a <strong>React Native</strong> application across <strong>12 web, mobile, and TV platforms</strong> serving <strong>millions of users</strong>; standardized shared UI and state management with <strong>Redux</strong> and <strong>Zustand</strong> to maintain consistent behavior across device-specific implementations.",
      "Built and owned the internal <strong>DirecTV SDK</strong> for managing application ad flows and metric reporting used by 100+ engineers across 12 platforms",
      "Maintained quality with <strong>Jest</strong> and <strong>React Testing Library</strong> across the cross-platform codebase.",
      "Built and shipped <strong>internal tooling</strong> adopted daily by <strong>5 teams</strong>, developing authenticated <strong>REST APIs</strong> and dashboards across <strong>Dockerized Node.js</strong> services deployed on <strong>AWS</strong>, reducing redundancy in processes by <strong>30%</strong>.",
      "Mentored <strong>6</strong> new engineers through <strong>architecture reviews</strong>, <strong>coding standards</strong>, and <strong>cross-platform</strong> release practices, accelerating their onboarding and enabling independent contributions to production systems.",
      "Unblocked releases and raised quality by partnering across product and platform to keep <strong>shared components</strong> consistent across surfaces.",
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
      "Strengthened reliability of critical <strong>React</strong> workflows by standardizing <strong>Redux Toolkit</strong> state management and <strong>React Query</strong> server-state caching while maintaining <strong>~90%</strong> unit-test coverage across business-critical paths.",
      "Expanded <strong>Playwright E2E</strong> coverage to <strong>10</strong> business-critical user flows, adding automated regression protection for core workflows and reducing reliance on manual release validation.",
      "Shipped features without fragmenting UX by driving <strong>performance</strong>, polish, and <strong>shared UI patterns</strong>.",
      "Owned <strong>VegaSpread 4.0</strong> end to end, from design specifications through production launch, building a <strong>React</strong> interface capable of rendering and interacting with <strong>5,000 financial documents</strong> ranging from <strong>20–500 pages</strong>.",
      "Built consistent, accessible component libraries with <strong>MUI (Material UI)</strong> reused across projects.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Fitnexx | Privacy first gym performance and macro tracking app",
    description: "Privacy first gym performance and macro tracking app",
    bullets: [
      "Shipped a cross-platform <strong>React Native</strong> and <strong>Expo</strong> app for gym performance tracking and macro logging.",
      "Engineered a <strong>local-first synchronization engine</strong> for <strong>React Native</strong> that reconciles data across devices using <strong>application-scoped tokens</strong>, enabling <strong>offline writes</strong> and reliable synchronization when connectivity is restored.",
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
      "Built an interactive web infographic with <strong>Web Components</strong> (<strong>HTML</strong>, <strong>CSS</strong>, <strong>TypeScript</strong>), <strong>GSAP</strong> scroll-triggered animations, and <strong>Three.js</strong> scenes.",
      "Explored custom element lifecycles, <strong>shadow DOM</strong> encapsulation, and reusable component patterns in a color theory learning tool.",
    ],
    tags: ["Frontend"],
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "Web Components",
      "Three.js",
      "GSAP",
    ],
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
