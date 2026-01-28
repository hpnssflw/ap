import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  const socials = [
    {
      name: "Gmail",
      href: "mailto:hypnosiflow@gmail.com",
      external: true,
      handle: "hypnosiflow@gmail.com",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
        >
          <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.11.89 2 2 2h16a2 2 0 0 0 2-2V6c0-1.11-.89-2-2-2Zm0 4.5-8 5-8-5V6l8 5 8-5v2.5Z" />
        </svg>
      ),
    },
    // {
    //   name: "GitHub",
    //   href: "https://github.com/hpnssflw",
    //   external: true,
    //   handle: "@hpnssflw",
    //   icon: (
    //     <svg
    //       aria-hidden="true"
    //       viewBox="0 0 24 24"
    //       className="h-4 w-4 fill-current"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.48 2 2 6.58 2 12.18c0 4.47 2.87 8.26 6.84 9.6.5.1.68-.23.68-.5 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.13-4.56-5 0-1.1.38-2 .99-2.71-.1-.26-.43-1.3.09-2.7 0 0 .84-.27 2.75 1.03a9.27 9.27 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.52 1.4.19 2.44.09 2.7.62.7.99 1.6.99 2.7 0 3.88-2.34 4.74-4.57 5 .36.32.68.95.68 1.93 0 1.4-.01 2.52-.01 2.86 0 .27.18.6.69.5A10.2 10.2 0 0 0 22 12.18C22 6.58 17.52 2 12 2Z"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Telegram",
    //   href: "https://t.me/hpnssflw",
    //   external: true,
    //   handle: "@hpnssflw",
    //   icon: (
    //     <svg
    //       aria-hidden="true"
    //       viewBox="0 0 24 24"
    //       className="h-4 w-4 fill-current"
    //     >
    //       <path d="M21.5 4.09c.34.13.5.39.5.75 0 .12-.02.26-.05.44l-3.09 14.52c-.07.32-.23.58-.47.8a1.38 1.38 0 0 1-.91.32 1.67 1.67 0 0 1-.68-.15l-4.06-1.66-2.21 2.38c-.12.13-.26.24-.42.32-.16.09-.32.13-.5.13-.34 0-.62-.13-.85-.38a1.08 1.08 0 0 1-.32-.82v-3.57l7.53-8.35c.12-.16.19-.28.19-.35 0-.07-.04-.1-.12-.1-.07 0-.17.03-.29.08-.12.05-.25.1-.38.16l-9.3 4.1-3.23-1.05c-.36-.12-.63-.27-.81-.47C2.07 9 2 8.77 2 8.5c0-.31.1-.58.29-.8.19-.22.46-.39.81-.52L20.94 4.1c.12-.03.26-.05.41-.05.06 0 .12 0 .15.02Z" />
    //     </svg>
    //   ),
    // },
  ];

  return (
    <div className="mx-auto relative py-5 px-5 md:px-0 ">
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
      {/* Glowing ring accents */}
      {/* <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 131, 246, 0.17), transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute -bottom-20 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 131, 246, 0.17), transparent 60%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59, 131, 246, 0.17), transparent 70%)",
          }}
        />
      </div> */}

      <div className="relative max-w-lg mx-auto z-10">
        <header className="w-full"></header>

        <main className="flex flex-col gap-4 relative">
          {/* Hero Section */}
          <section className="flex flex-col gap-6 mt-3">
            <div className="flex flex-col ">
              <h1 className="text-white">Artem Polozov</h1>
              <div className="flex gap-2 items-center -mt-1.5">
                <p className="tech-gradient leading-tight">
                  Full-Stack Developer — React, Next.js, TypeScript, Node.js
                </p>
                <span className="mb-0.5">👨‍💻</span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-5 indent-4 text-justify">
              Building production web apps for{" "}
              <span className="text-white italic">fintech</span>,{" "}
              <span className="text-white italic">AI platforms</span>, and{" "}
              <span className="text-white italic">enterprise systems</span>.
              Specialized in complex data visualization, real-time features, and
              scalable architectures. You can check my{" "}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline italic hover:text-violet-300 transition-colors"
              >
                resume
              </a>
              .
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed indent-4 text-justify"></p>
          </section>

          {/* VoiceKeeper Project */}
          <section id="projects" className="flex flex-col gap-4">
            <h2 className="text-white text-sm font-medium underline">Apps</h2>

            <div className="flex  gap-3">
              <div className="relative w-full aspect-video rounded-md overflow-hidden border border-zinc-800/60">
                <Image
                  src="/vk.jpg"
                  alt="VoiceKeeper"
                  fill
                  className="object-center"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-white text-sm font-medium">VoiceKeeper</h3>
                <p className="text-zinc-400 text-xs leading-5">
                  AI content strategist for Telegram authors. Analyzes author
                  style, monitors trends, generates posts.
                </p>

                <div className="flex gap-4 mt-auto ">
                  <a
                    href="https://voicekeeper-admin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Open app ↗
                  </a>
                  <Link
                    href="/voicekeeper"
                    className="text-[10px] text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Tech stack & flow →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="flex flex-col gap-2">
            <h2 className="text-white text-sm font-medium underline">Skills</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-400">
              <div>
                <span className="text-white">Frameworks & Languages:</span>{" "}
                React, Next.js, TypeScript, Node.js, Express
              </div>
              <div>
                <span className="text-white">State Management:</span> Redux,
                RTK, MobX, TanStack Query
              </div>
              <div>
                <span className="text-white">UI Libraries:</span> MUI, Ant
                Design, PrimeReact, Mantine, Radix UI, Shadcn
              </div>
              <div>
                <span className="text-white">Styling:</span> Tailwind CSS,
                Styled Components, CSS Modules
              </div>
              <div>
                <span className="text-white">Data Visualization:</span>{" "}
                Chart.js, Plotly.js, ECharts
              </div>
              <div>
                <span className="text-white">Forms & Validation:</span> React
                Hook Form, Yup
              </div>
              <div>
                <span className="text-white">Databases:</span> MongoDB,
                IndexedDB, Firebase
              </div>
              <div>
                <span className="text-white">Authentication:</span> JWT, OAuth
              </div>
              <div>
                <span className="text-white">Build Tools:</span> Webpack, Module
                Federation, Docker
              </div>
              <div>
                <span className="text-white">APIs & Services:</span> Telegram
                API, OpenAI, i18n
              </div>
            </div>
          </section>

          {/* socials */}

          <ul className="flex mt-auto  items-center justify-center">
            {socials.map((social) => (
              <li key={social.name}>
                <Button
                  href={social.href}
                  variant="outline"
                  size="sm"
                  className="w-[150px] justify-between border-0 gap-3 py-0.5 text-left text-zinc-300 "
                  external={social.external}
                >
                  <span className="flex items-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-300">
                      {social.icon}
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-xs text-white">
                        {social.handle}
                      </span>
                    </span>
                  </span>
                </Button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
