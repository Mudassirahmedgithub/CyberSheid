export default function Developers() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <h1 className="text-3xl font-bold text-center">Developers</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h4 className="text-xl font-semibold">Maddy</h4>
          <p className="text-slate-400 mt-2">Project Developer</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h4 className="text-xl font-semibold">Teammate</h4>
          <p className="text-slate-400 mt-2">Project Developer</p>
        </div>
      </div>
    </main>
  );
}