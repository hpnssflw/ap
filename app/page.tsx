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
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 150% at 50% 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.5) 50%, transparent 65%)",
        }}
      />

      {/* fiber dots background */}

      <div className="relative z-10">
        <header className="w-full"></header>

        <main className="flex flex-col gap-16 relative">
          {/* Hero Section */}
          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-end">
                <h1>Artem </h1>
                <p className="text-[24px] mb-2">👨‍💻</p>
              </div>
              <p className="tech-gradient text-[18px]">
                Full-Stack Developer with frontend focus — React, Next.js,
                TypeScript, Node.js
              </p>
            </div>

            <div className="flex flex-col  gap-15 md:gap-5">
              <div className="flex flex-row gap-4">
                <p className="text-zinc-400 max-w-md">
                  Building production web apps for fintech, AI platforms, and
                  enterprise systems. Specialized in complex data visualization,
                  real-time features, and scalable architectures.
                  <span className="mx-1">See more in</span>
                  <Link
                    href="/#projects"
                    className="underline text-white hover:text-zinc-300 transition-colors"
                  >
                    works
                  </Link>
                  <span>,</span>
                  <Link
                    href="/career"
                    className="underline text-white hover:text-zinc-300 ml-1 transition-colors"
                  >
                    career
                  </Link>
                  <span>.</span>
                </p>
              </div>

              {/* Domain Experience */}
              <div className="flex flex-col relative items-center justify-center h-[150px] gap-3 rounded-lg overflow-">
                <div className="fiber-dots" />

                {/* Inner shadow gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  style={{
                    boxShadow: "inset 0 0 60px 20px rgba(0, 0, 0, 0.8)",
                    background:
                      "radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 100%)",
                  }}
                />

                <div className="flex flex-wrap items-center justify-center gap-2 relative z-10">
                  {[
                    "Financial Trading Platforms",
                    "AI/ML Applications",
                    "Data Visualization",
                    "Payment Systems",
                    "Real-time Dashboards",
                    "Admin Panels",
                    "Chatbots & Automation",
                    "Telegram Bots",
                  ].map((domain) => (
                    <span
                      key={domain}
                      className="px-3 py-1.5 bg-zinc-900/30 border border-zinc-800/50 rounded-full text-zinc-400 text-[12px]"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="flex flex-col gap-2">
            <h2 className="w-fit mr-1 text-white">Recent works</h2>

            <div className="flex flex-col md:flex-row flex-wrap gap-6">
              {works.map((work, index) => (
                <div key={index} className="flex-1 min-w-[240px]">
                  <WorkCard {...work} />
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="flex flex-col gap-3">
            <h2 className="w-fit mr-1 text-white">Get in touch</h2>

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
