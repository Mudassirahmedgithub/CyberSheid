export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <h1 className="text-3xl font-bold">How CyberShield Works</h1>

      <div className="grid md:grid-cols-4 gap-4 mt-8">
        {["Capture Packets","Extract Features","Load AI Model","Predict Threat"].map((item) => (
          <div key={item} className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}