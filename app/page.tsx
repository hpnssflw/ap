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
          <div className="flex flex-col gap-2.5 ">
            <h1 className=" tech-gradient ">Artem Polozov</h1>

            <p className="text-zinc-300">
              Web developer building fast, scalable, secure apps. <br />
              Proficient in building products across fintech, AI, and complex
              web systems.
            </p>

            <Navigation />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row gap-2 flex-wrap">
              <h2 className="w-fit mr-1 text-white">Experience in</h2>
              <span className="text-zinc-300">
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

          <section id="contact">
            <h2 className="w-fit mr-1 text-white">Get in touch</h2>

            <div className="mt-2 flex flex-wrap gap-3">
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

            <form
              action="mailto:hypnosiflow@gmail.com"
              method="POST"
              encType="text/plain"
              className="mt-5 space-y-3"
            >
              <div className="flex gap-1.5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border-b border-zinc-800 px-0 py-1.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent border-b border-zinc-800 px-0 py-1.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Short message..."
                  required
                  className="w-full bg-transparent border-b border-zinc-800 px-0 py-1.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>

              <div className="flex items-center justify-end pt-1">
                <button
                  type="submit"
                  className="text-sm text-white/90 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400 transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
