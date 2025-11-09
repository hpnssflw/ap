import Navigation from "./components/Navigation";
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

      <div className="relative z-10">
        <header className="w-full"></header>

        <main className="flex flex-col gap-16 relative">
          <div className="flex flex-col ">
            <h1 className="text-[24px]">Artem Polozov</h1>

            <p className="">
              Web developer building fast, scalable, secure apps. <br />
              Proficient in building products across fintech, AI, and complex
              web systems.
            </p>

            <div className="flex">
              <Navigation />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row gap-2 flex-wrap">
              <h2 className="w-fit mr-1 text-white">Experience in</h2>
              <span className="tech-gradient">
                Charts, Chatbots, Gen AI Apps, Trading Platforms, Admin Panels,
                Data Visualization, Payment Systems, Analytics Dashboards,
                Document Management, Landing Pages, Micro-frontends, Telegram
                Bots.
              </span>
            </div>
          </div>

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

          <section>
            <h2 className="w-fit mr-1 text-white">Get in touch</h2>

            <div className=" mt-2 flex flex-wrap gap-6">
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
