export default function Predict() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <h1 className="text-3xl font-bold">Live Prediction</h1>

      <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-4xl">
        <input placeholder="Flow Duration" className="p-3 rounded-xl bg-slate-950 border border-slate-700" />
        <input placeholder="Total Fwd Packets" className="p-3 rounded-xl bg-slate-950 border border-slate-700" />
        <input placeholder="Total Backward Packets" className="p-3 rounded-xl bg-slate-950 border border-slate-700" />
        <input placeholder="Packet Length Mean" className="p-3 rounded-xl bg-slate-950 border border-slate-700" />
      </div>

      <button className="mt-6 px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold">
        Analyze Traffic
      </button>
    </main>
  );
}