import Link from "next/link";
import Company from "../components/Company";

const companies = [
  {
    name: "EGAR TECHNOLOGY, INC.",
    years: "2024 — Present",
    description:
      "Russian company specializing in software development for financial markets. Building trading platforms and financial analysis tools for major exchanges and banks.",
    projects: [
      {
        title: "Datashop (Moscow Exchange)",
        description:
          "Securities analysis application for traders and analysts.",
        role: "Frontend development, complex chart visualizations, data analysis tools.",
        stack: "React, Redux/RTK, Prime React, Chart.js, Plotly.js, Jest",
      },
      {
        title: "Logistics/Document Management (Sberbank)",
        description: "Enterprise document management and logistics system.",
        role: "Frontend architecture, micro-frontends setup, complex forms and tables.",
        stack:
          "React, Redux/RTK Query, MUI, React-hook-form, Webpack, Module Federation, Vitest",
      },
    ],
  },
  {
    name: "Freelance",
    years: "2023 — 2024",
    description:
      "Independent development of AI-powered applications and analytics tools. Focus on building scalable solutions for data analysis and content generation.",
    projects: [
      {
        title: "Telegram Channel Analytics",
        description:
          "Application for analyzing Telegram channel activity and engagement metrics.",
        role: "Full-stack development, data parsing, visualization dashboards, Telegram bot integration.",
        stack:
          "Express, PostgreSQL, Telegram API, React, MobX, ECharts, Ant Design, JWT",
      },
      {
        title: "AI Content Generation Platform",
        description:
          "Multi-purpose AI platform with chatbots and media generation capabilities.",
        role: "Full-stack development, AI integration, subscription management, analytics.",
        stack:
          "Next.js, React, Redux/RTK, Tailwind, Shadcn/UI, Express, MongoDB, OAuth, Docker",
      },
    ],
  },
  {
    name: "Neiro AI",
    years: "2023",
    description:
      "Deep Learning startup with 50+ team members and $100M annual revenue. Developed web products for AI-powered content creation and media generation.",
    projects: [
      {
        title: "studio.neiro.ai",
        description:
          "AI content creation studio with subscription-based access.",
        role: "Frontend development, payment integration, performance optimization, SEO (90+ Lighthouse).",
        stack:
          "React, TailwindCSS, MobX, Firebase, Google Analytics, Square Payments",
        url: "https://studio.neiro.ai",
      },
      {
        title: "neiro.ai",
        description: "Company landing page and marketing website.",
        role: "Landing page development, accessibility improvements, SEO optimization (95+ Lighthouse).",
        stack:
          "React, TailwindCSS, CSS Modules, MobX, Firebase, Swiper, Anime.js",
        url: "https://neiro.ai/",
      },
    ],
  },
];

export default function CareerPage() {
  return (
    <div className="min-h-screen max-w-[640px] mx-auto relative py-5 px-5 md:px-0">
      <div className="fiber-dots">
        <div
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            boxShadow: "inset 0 0 20px 20px rgba(0, 0, 0, 0.8)",
            background:
              "radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Link
          href="/"
          className="text-xs text-zinc-400 hover:text-white transition-colors mb-6 inline-block"
        >
          ← Back
        </Link>

        <main className="flex flex-col gap-8 mt-4">
          <section className="flex flex-col gap-3">
            <h1 className="text-lg font-medium text-white">
              💼 Career Journey
            </h1>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Selected roles and projects across fintech, AI, and enterprise
              systems.
            </p>
          </section>

          <section className="flex flex-col gap-8">
            {companies.map((company, index) => (
              <Company key={index} {...company} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
