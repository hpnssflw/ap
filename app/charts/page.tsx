import Link from "next/link";

export default function ChartsPage() {
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

        <article className="flex flex-col gap-8 mt-4">
          <header>
            <h1 className="text-lg font-medium text-white mb-1">
              📊 Charts Research
            </h1>
            <p className="text-zinc-400 text-xs">
              Elena Parkacheva, Artem Polozov — Nov 06, 2024
            </p>
          </header>

          {/* Drawing Technologies Comparison */}
          <section className="flex flex-col gap-4">
            <h2 className="text-base font-medium text-white">
              🎨 Drawing Technologies
            </h2>

            {/* DOM/SVG */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-white mb-3">
                📐 DOM & SVG
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-400 font-medium mb-2 flex items-center gap-1 text-xs">
                    <span>✓</span> Pros
                  </h4>
                  <ul className="text-zinc-300 text-xs space-y-1 list-disc list-inside">
                    <li>
                      Responsiveness built-in and easily supported with CSS
                    </li>
                    <li>Redrawing frames handled automatically via browser</li>
                    <li>Animations pre-designed, configurable via CSS</li>
                    <li>
                      Supports object-level interactions (clicking elements)
                    </li>
                    <li>Hardware acceleration for transforms</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-red-400 font-medium mb-2 flex items-center gap-1 text-xs">
                    <span>✗</span> Cons
                  </h4>
                  <ul className="text-zinc-300 text-xs space-y-1 list-disc list-inside">
                    <li>Memory-intensive, slow with many objects</li>
                    <li>Coarse control, restricts customization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Canvas */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-white mb-3">
                🖼️ HTML5 Canvas
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-400 font-medium mb-2 flex items-center gap-1 text-xs">
                    <span>✓</span> Pros
                  </h4>
                  <ul className="text-zinc-300 text-xs space-y-1 list-disc list-inside">
                    <li>
                      Fast and flexible: fine-grained control over rendering
                    </li>
                    <li>Hardware acceleration for all rendering, animation</li>
                    <li>Better than SVG for complex graphics</li>
                    <li>Handles many objects efficiently</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-red-400 font-medium mb-2 flex items-center gap-1 text-xs">
                    <span>✗</span> Cons
                  </h4>
                  <ul className="text-zinc-300 text-xs space-y-1 list-disc list-inside">
                    <li>No object interactions, pixel-level only</li>
                    <li>Blurry text, complex animations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WebGL */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-white mb-3">⚡ WebGL</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-400 font-medium mb-2 flex items-center gap-1 text-xs">
                    <span>✓</span> Pros
                  </h4>
                  <ul className="text-zinc-300 text-xs space-y-1 list-disc list-inside">
                    <li>Fastest and most flexible option</li>
                    <li>Low-level interactions with pixels</li>
                    <li>Only tech optimized for 3D rendering</li>
                    <li>Hardware acceleration for everything</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-red-400 font-medium mb-2 flex items-center gap-1 text-xs">
                    <span>✗</span> Cons
                  </h4>
                  <ul className="text-zinc-300 text-xs space-y-1 list-disc list-inside">
                    <li>Requires 3D math knowledge</li>
                    <li>Steep learning curve</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* React Chart Libraries */}
          <section className="flex flex-col gap-4">
            <h2 className="text-base font-medium text-white">
              ⚛️ React Chart Libraries
            </h2>

            {/* Chart.js */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-white mb-2">
                    📈 Chart.js
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full">
                      Canvas
                    </span>
                    <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded-full">
                      56.8 KB
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs">
                  Custom plugins, mixed charts, tree-shakeable
                </p>

                <a
                  href="https://www.chartjs.org/docs/latest/general/performance.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-xs underline"
                >
                  Docs →
                </a>
              </div>
            </div>

            {/* Recharts */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-white mb-2">
                    📊 Recharts
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full">
                      SVG
                    </span>
                    <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded-full">
                      4.71 MB
                    </span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs">
                  Built with React + D3. More chart types than Chart.js
                </p>
              </div>
            </div>

            {/* ECharts */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-white mb-2">
                    🌟 ECharts
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full">
                      SVG
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full">
                      Canvas
                    </span>
                    <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded-full">
                      52.8 MB
                    </span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs">
                  ✓ High-performance, extensive customization
                  <br />✗ Large bundle, learning curve
                </p>
              </div>
            </div>

            {/* Plotly */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-white mb-2">
                    🔬 Plotly
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full">
                      SVG
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full">
                      2D/3D
                    </span>
                    <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded-full">
                      98.5 MB
                    </span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs">
                  ✓ 3D support, data-science focused
                  <br />✗ Very large bundle, slow with big data
                </p>
              </div>
            </div>
          </section>

          {/* Canvas Performance Best Practices */}
          <section className="flex flex-col gap-4">
            <h2 className="text-base font-medium text-white">
              🚀 Performance Tips
            </h2>

            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <ul className="text-zinc-300 text-xs space-y-2">
                <li>
                  🎯 <strong>Layers</strong> — Separate static/dynamic parts
                </li>
                <li>
                  💾 <strong>Offscreen canvas</strong> — Pre-render complex
                  graphics
                </li>
                <li>
                  ⚙️ <strong>Web workers</strong> — Offload heavy tasks
                </li>
                <li>
                  🎬 <strong>RequestAnimationFrame</strong> — Sync with refresh
                  rate
                </li>
                <li>
                  📦 <strong>Batch operations</strong> — Reduce draw calls
                </li>
                <li>
                  🔧 <strong>Optimize</strong> — Minimize shadows, gradients
                </li>
                <li>
                  📐 <strong>Math.floor</strong> — Avoid floating coordinates
                </li>
              </ul>
            </div>
          </section>

          {/* Testing Tools */}
          <section className="flex flex-col gap-4">
            <h2 className="text-base font-medium text-white">🧪 Testing</h2>

            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <div className="flex flex-col gap-3 text-xs text-zinc-300">
                <div>
                  <strong className="text-white">Canvas:</strong> CanvasUnit,
                  CanvasTester
                </div>
                <div>
                  <strong className="text-white">Visual:</strong> Percy,
                  BackstopJS, Resemble.js
                </div>
                <div>
                  <strong className="text-white">Performance:</strong>{" "}
                  Lighthouse, WebPageTest
                </div>
              </div>
            </div>
          </section>

          {/* Useful Links */}
          <section className="flex flex-col gap-3 pb-8">
            <h2 className="text-base font-medium text-white">🔗 Resources</h2>

            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
              <ul className="text-zinc-300 text-xs space-y-2">
                <li>
                  <a
                    href="https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    MDN: Canvas Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.dev/articles/canvas-performance?hl=ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Web.dev: Canvas Performance
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.dev/articles/offscreen-canvas?hl=ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Web.dev: Offscreen Canvas
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
