import Link from "next/link";
import SocialLink from "./components/SocialLink";
import WorkCard from "./components/WorkCard";

export default function Home() {
  const works = [
    {
      title: "Datashop - Trading Platform",
      description:
        "Securities analysis application for traders and analysts with complex chart visualizations and real-time data processing.",
      tags: ["React", "Redux", "Chart.js", "Financial Tech"],
      url: "#",
      image: "/board.webp",
    },
    {
      title: "AI Content Studio",
      description:
        "AI-powered content creation platform with subscription management and media generation capabilities.",
      tags: ["Next.js", "AI/ML", "OpenAI", "SaaS"],
      url: "#",
      image: "/flutter.png",
    },
  ];
  return (
    <div className="min-h-screen max-w-[640px] mx-auto relative py-5 px-5 md:px-0">
      {/* fancy black radial gradient */}

      {/* fiber dots background */}

      <div className="relative z-10">
        <header className="w-full"></header>

        <main className="flex flex-col gap-12 relative">
          {/* Hero Section */}
          <section className="flex flex-col gap-6 mt-3">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <h1 className="text-white">Artem</h1>
                <span className="text-2xl">👨‍💻</span>
              </div>
              <p className="tech-gradient text-base leading-tight">
                Full-Stack Developer — React, Next.js, TypeScript, Node.js
              </p>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Building production web apps for fintech, AI platforms, and
              enterprise systems. Specialized in complex data visualization,
              real-time features, and scalable architectures.
            </p>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
              <span>Explore:</span>
              <Link
                href="/#projects"
                className="underline text-white hover:text-zinc-300 transition-colors"
              >
                Works
              </Link>
              <span>•</span>
              <Link
                href="/career"
                className="underline text-white hover:text-zinc-300 transition-colors"
              >
                Career
              </Link>
              <span>•</span>
              <Link
                href="/charts"
                className="underline text-white hover:text-zinc-300 transition-colors"
              >
                Charts Research
              </Link>
            </div>

            {/* Domain Experience */}
            <div className="relative">
              <div className="flex flex-col relative items-start justify-center min-h-[120px] gap-3 rounded-lg overflow-hidden ">
                <h3 className="text-xs text-zinc-500 uppercase tracking-wider">
                  Domain Experience
                </h3>
                <div className="fiber-dots ">
                  <div
                    className="absolute inset-0 pointer-events-none rounded-lg"
                    style={{
                      boxShadow: "inset 0 0 40px 20px rgba(0, 0, 0, 0.5)",
                      background:
                        "radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 100%)",
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-2 max-w-lg mx-auto items-center justify-center relative z-10">
                  {[
                    "Financial Trading",
                    "AI/ML Apps",
                    "Data Viz",
                    "Payments",
                    "Real-time Dashboards",
                    "Admin Panels",
                    "Chatbots",
                    "Telegram Bots",
                  ].map((domain) => (
                    <span
                      key={domain}
                      className="px-2.5 py-1 bg-zinc-900/40 border border-zinc-800/50 rounded-full text-zinc-400 text-xs backdrop-blur-sm"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="flex flex-col gap-4">
            <h2 className="text-white text-base">💼 Recent Works</h2>

            <div className="flex flex-col md:flex-row flex-wrap gap-6">
              {works.map((work, index) => (
                <div key={index} className="flex-1 min-w-[240px]">
                  <WorkCard {...work} />
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="flex flex-col gap-4 pb-8">
            <h2 className="text-white text-base">📬 Get in Touch</h2>

            <div className="flex flex-wrap gap-3">
              <SocialLink href="https://github.com/hpnssflw" external>
                GitHub
              </SocialLink>
              <SocialLink href="mailto:hypnosiflow@gmail.com" external>
                Gmail
              </SocialLink>
              <SocialLink href="https://t.me/hpnssflw" external>
                Telegram
              </SocialLink>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
