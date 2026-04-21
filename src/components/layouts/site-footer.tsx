export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 px-8 py-10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-cyan-400">CyberShield</h2>
          <p className="mt-3 text-sm">
            AI-powered intrusion detection system to identify and prevent cyber attacks in real time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li><a href="/predict" className="hover:text-cyan-400">Predict</a></li>
            <li><a href="/about" className="hover:text-cyan-400">About</a></li>
            <li><a href="/download" className="hover:text-cyan-400">Download</a></li>
            <li><a href="/developers" className="hover:text-cyan-400">Developers</a></li>
          </ul>
        </div>

        {/* Extra / Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: mudassirahmed915171@gmail.com</p>



        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-slate-500 mt-10 border-t border-slate-800 pt-6">
        © 2026 CyberShield • AI Network Security System
      </div>
    </footer>
  );
}