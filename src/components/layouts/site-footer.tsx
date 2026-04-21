"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

        .cs-footer-full {
          background: #0d1117;
          border-top: 1px solid #30363d;
          padding: 4rem 0 0;
          font-family: 'Syne', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* subtle grid bg */
        .cs-footer-full::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,123,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,123,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .cs-footer-glow {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 200px;
          background: radial-gradient(ellipse at center bottom, rgba(0,123,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .cs-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        /* ── TOP GRID ── */
        .cs-footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
        }

        /* Brand col */
        .cs-footer-brand .cs-footer-logo {
          font-family: 'Space Mono', monospace;
          font-size: 1.4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .cs-footer-brand p {
          color: #8b949e;
          font-size: 0.875rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 240px;
        }

        /* status badge */
        .cs-footer-status {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(40, 167, 69, 0.1);
          border: 1px solid rgba(40, 167, 69, 0.25);
          border-radius: 20px;
          padding: 0.35rem 0.85rem;
          font-size: 0.75rem;
          color: #3fb950;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.3px;
        }

        .cs-footer-status-dot {
          width: 6px; height: 6px;
          background: #3fb950;
          border-radius: 50%;
          box-shadow: 0 0 6px #3fb950;
          animation: cs-pulse 2s ease-in-out infinite;
        }

        @keyframes cs-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Column headings */
        .cs-footer-col h4 {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #58a6ff;
          margin-bottom: 1.25rem;
        }

        .cs-footer-col ul {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .cs-footer-col ul li a {
          color: #8b949e;
          text-decoration: none;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s, gap 0.2s;
        }

        .cs-footer-col ul li a::before {
          content: '→';
          font-size: 0.75rem;
          color: #007bff;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .cs-footer-col ul li a:hover {
          color: #e6edf3;
          gap: 0.75rem;
        }

        .cs-footer-col ul li a:hover::before {
          opacity: 1;
        }

        /* Contact col */
        .cs-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .cs-footer-contact-icon {
          width: 32px; height: 32px;
          background: rgba(0,123,255,0.1);
          border: 1px solid rgba(0,123,255,0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .cs-footer-contact-item p {
          color: #8b949e;
          font-size: 0.8rem;
          line-height: 1.5;
          margin: 0;
        }

        .cs-footer-contact-item a {
          color: #58a6ff;
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s;
        }

        .cs-footer-contact-item a:hover {
          color: #007bff;
        }

        /* ── DIVIDER ── */
        .cs-footer-divider {
          border: none;
          border-top: 1px solid #21262d;
          margin: 0;
        }

        /* ── BOTTOM BAR ── */
        .cs-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 0;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cs-footer-bottom p {
          color: #484f58;
          font-size: 0.8rem;
          font-family: 'Space Mono', monospace;
          margin: 0;
        }

        .cs-footer-bottom p strong {
          color: #8b949e;
        }

        .cs-footer-tech-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .cs-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(48,54,61,0.5);
          border: 1px solid #30363d;
          border-radius: 4px;
          padding: 0.2rem 0.55rem;
          font-size: 0.7rem;
          color: #8b949e;
          font-family: 'Space Mono', monospace;
          transition: border-color 0.2s, color 0.2s;
        }

        .cs-footer-badge:hover {
          border-color: rgba(0,123,255,0.4);
          color: #58a6ff;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .cs-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 576px) {
          .cs-footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .cs-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="cs-footer-full">
        <div className="cs-footer-glow" />

        <div className="cs-footer-inner">
          {/* ── TOP GRID ── */}
          <div className="cs-footer-grid">

            {/* Brand */}
            <div className="cs-footer-brand">
              <Link href="/" className="cs-footer-logo">CyberShield</Link>
              <p>
                AI-powered intrusion detection system leveraging ML &amp; Generative AI
                to identify and prevent cyber attacks in real time.
              </p>
              <div className="cs-footer-status">
                <span className="cs-footer-status-dot" />
                All Systems Operational
              </div>
            </div>

            {/* Navigation */}
            <div className="cs-footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/predict">Predict</Link></li>
                <li><Link href="/graphs">View Data</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/download">Download</Link></li>
                <li><Link href="/developers">Developers</Link></li>
              </ul>
            </div>

            {/* ML Models */}
            <div className="cs-footer-col">
              <h4>ML Models</h4>
              <ul>
                <li><a href="#">Decision Tree</a></li>
                <li><a href="#">Random Forest</a></li>
                <li><a href="#">LSTM Network</a></li>
                <li><a href="#">CNN Classifier</a></li>
                <li><a href="#">GAN / VAE</a></li>
                <li><a href="#">SHAP Explainer</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="cs-footer-col">
              <h4>Contact</h4>

              <div className="cs-footer-contact-item">
                <div className="cs-footer-contact-icon">✉️</div>
                <div>
                  <p>Email</p>
                  <a href="mailto:mudassirahmed915171@gmail.com">
                    mudassirahmed915171@gmail.com
                  </a>
                </div>
              </div>

              <div className="cs-footer-contact-item">
                <div className="cs-footer-contact-icon">🛡️</div>
                <div>
                  <p>Security Research</p>
                  <a href="#">CICIDS2017 Dataset</a>
                </div>
              </div>

              <div className="cs-footer-contact-item">
                <div className="cs-footer-contact-icon">⚡</div>
                <div>
                  <p>Real-time Detection</p>
                  <p>99%+ Accuracy · 8 ML Models</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="cs-footer-divider" />

          {/* ── BOTTOM BAR ── */}
          <div className="cs-footer-bottom">
            <p>
              © {new Date().getFullYear()} <strong>CyberShield</strong> · AI Network Security System
            </p>

            <div className="cs-footer-tech-badges">
              <span className="cs-footer-badge">⚛ Next.js</span>
              <span className="cs-footer-badge">🤖 ML/DL</span>
              <span className="cs-footer-badge">🧠 Gen AI</span>
              <span className="cs-footer-badge">🔬 SHAP XAI</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}