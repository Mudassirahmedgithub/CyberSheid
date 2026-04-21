export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* HERO */}
      <section className="px-8 py-20 text-center">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          AI Powered Intrusion Detection
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-4">
          Protect Networks with{" "}
          <span className="text-cyan-400">CyberShield</span>
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-slate-300 text-lg">
          Predict cyber attacks like DDoS Hulk, GoldenEye, Slowloris and more.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="/predict" className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold">
            Predict Now
          </a>

          <a href="/download" className="px-6 py-3 rounded-2xl border border-cyan-400">
            Download Tool
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-3 gap-6 px-8 pb-16">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-slate-400">Accuracy</p>
          <h3 className="text-3xl font-bold text-cyan-400 mt-2">99%+</h3>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-slate-400">Algorithms</p>
          <h3 className="text-3xl font-bold text-cyan-400 mt-2">15+</h3>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-slate-400">Attack Classes</p>
          <h3 className="text-3xl font-bold text-cyan-400 mt-2">10+</h3>
        </div>
      </section>
    </main>
  );
}