export type UseCase = "personal" | "commercial";

export interface ServiceTier {
  id: string;
  name: string;
  description: string;
  icon: string;
  prices: Record<UseCase, { min: number; max: number | null }>;
  features: string[];
  timeline: string;
}

export const serviceTiers: ServiceTier[] = [
  {
    id: "small-site",
    name: "Small Site",
    description:
      "Brochure, portfolio, or landing page - 1 to 5 static pages with responsive design.",
    icon: "web",
    prices: {
      personal: { min: 500, max: 1500 },
      commercial: { min: 3000, max: 8000 },
    },
    features: [
      "Responsive design (mobile + desktop)",
      "Basic SEO optimization",
      "Contact form integration",
      "Hosting setup assistance",
      "1 revision round",
    ],
    timeline: "1–2 weeks",
  },
  {
    id: "mvp",
    name: "MVP / Basic App",
    description:
      "Lean application with simple UI and limited logic - 1 to 2 core features to validate your idea.",
    icon: "rocket_launch",
    prices: {
      personal: { min: 3000, max: 8000 },
      commercial: { min: 20000, max: 60000 },
    },
    features: [
      "Core functionality focused on your key value prop",
      "Simple, clean UI design",
      "Database integration",
      "Basic authentication",
      "Rapid delivery timeline",
      "1 revision round",
    ],
    timeline: "2–4 weeks",
  },
  {
    id: "moderate-app",
    name: "Simple / Moderate App",
    description:
      "Feature-rich applications like e-commerce, booking systems, or business dashboards.",
    icon: "dashboard",
    prices: {
      personal: { min: 8000, max: 20000 },
      commercial: { min: 60000, max: 150000 },
    },
    features: [
      "Full CRUD operations",
      "User authentication & roles",
      "Admin dashboard",
      "Payment gateway integration",
      "Third-party API integration",
      "2 revision rounds",
    ],
    timeline: "4–12 weeks",
  },
  {
    id: "complex-app",
    name: "Complex / Enterprise App",
    description:
      "Custom APIs, fintech platforms, real-time systems - built to scale from day one.",
    icon: "hub",
    prices: {
      personal: { min: 20000, max: 50000 },
      commercial: { min: 150000, max: null },
    },
    features: [
      "Custom API development",
      "Real-time capabilities (WebSockets, SSE)",
      "Multi-role user system",
      "Advanced security & compliance",
      "CI/CD pipeline setup",
      "Performance optimization & load testing",
      "3 revision rounds",
      "Priority support",
    ],
    timeline: "8–24+ weeks",
  },
];

export const contactEmail = "danial.aiman@devdaj.tech";
