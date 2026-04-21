export default function Download() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16 text-center">
      <h1 className="text-3xl font-bold">Download CyberShield Tool</h1>

      <p className="text-slate-400 mt-3">
        Auto capture traffic and detect attacks in real time.
      </p>

      {/* Download Button */}
      <a
        href="https://github.com/Mudassirahmedgithub/CyberSheid/releases/download/Cybersheild/Cybersheild.zip"
        target="_blank"
        className="mt-6 inline-block px-8 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
      >
        Download .ZIP
      </a>

      {/* Optional Info */}
      <p className="text-sm text-slate-500 mt-4">
        Version 1.0 • 358MB • Windows/
      
      </p>
    </main>
  );
}