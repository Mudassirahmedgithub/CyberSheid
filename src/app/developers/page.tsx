"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Developers() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --primary: #007bff;
          --primary-dark: #0056b3;
          --danger: #dc3545;
          --dark-bg: #0d1117;
          --dark-bg2: #161b22;
          --dark-text: #e6edf3;
          --muted: #8b949e;
          --border: #30363d;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Syne', sans-serif;
          background: var(--dark-bg);
          color: var(--dark-text);
          overflow-x: hidden;
        }

        /* ── HEADER ── */
        .dev-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }
        .dev-header.scrolled {
          background: rgba(13,17,23,0.96);
          backdrop-filter: blur(12px);
          padding: 0.6rem 0;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
          border-bottom: 1px solid rgba(48,54,61,0.5);
        }
        .dev-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .dev-logo {
          font-family: 'Space Mono', monospace;
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .dev-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin-left: auto;
        }
        .dev-nav li { position: relative; }
        .dev-nav a {
          color: var(--dark-text);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.5rem 0.85rem;
          border-radius: 6px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          letter-spacing: 0.3px;
        }
        .dev-nav a:hover, .dev-nav a.active {
          color: #58a6ff;
          background: rgba(0,123,255,0.1);
        }

        /* ── HERO SECTION ── */
        .dev-hero {
          padding: 8rem 2rem 4rem;
          background: var(--dark-bg);
          text-align: center;
          margin-top: 3rem;
        }
        .dev-hero-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .dev-hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .dev-hero p {
          font-size: 1.1rem;
          color: var(--muted);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        /* ── MAIN CONTENT ── */
        .dev-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        /* ── SECTION TITLE ── */
        .dev-section-title {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .dev-section-tag {
          display: inline-block;
          background: rgba(0, 123, 255, 0.15);
          color: #58a6ff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .dev-section-title h2 {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
        }
        .dev-section-title p {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.6;
        }

        /* ── DEVELOPERS GRID ── */
        .dev-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        /* ── DEVELOPER CARD ── */
        .dev-card {
          background: linear-gradient(135deg, rgba(22, 27, 34, 0.8) 0%, rgba(13, 17, 23, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          animation: slideInUp 0.6s ease-out forwards;
        }
        .dev-card:nth-child(2) {
          animation-delay: 0.1s;
        }

        .dev-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 123, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }
        .dev-card:hover::before {
          left: 100%;
        }

        .dev-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #007bff 0%, #0056b3 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .dev-card:hover::after {
          transform: scaleX(1);
        }

        .dev-card:hover {
          border-color: rgba(0, 123, 255, 0.4);
          background: linear-gradient(135deg, rgba(22, 27, 34, 1) 0%, rgba(13, 17, 23, 1) 100%);
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 123, 255, 0.15);
        }

        .dev-avatar {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          box-shadow: 0 8px 24px rgba(0, 123, 255, 0.3);
          border: 2px solid rgba(0, 123, 255, 0.2);
          position: relative;
          z-index: 2;
        }

        .dev-card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .dev-role {
          color: #58a6ff;
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 2;
        }

        .dev-bio {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .dev-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .dev-skill {
          background: rgba(0, 123, 255, 0.15);
          color: #58a6ff;
          padding: 0.35rem 0.85rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(0, 123, 255, 0.3);
          transition: all 0.2s;
        }

        .dev-card:hover .dev-skill {
          background: rgba(0, 123, 255, 0.25);
          border-color: rgba(0, 123, 255, 0.5);
        }

        .dev-socials {
          display: flex;
          gap: 1rem;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .dev-social-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 123, 255, 0.1);
          border: 1px solid rgba(0, 123, 255, 0.3);
          border-radius: 8px;
          color: #58a6ff;
          text-decoration: none;
          transition: all 0.3s;
          font-size: 1.1rem;
        }

        .dev-social-link:hover {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          border-color: transparent;
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 123, 255, 0.3);
        }

        /* ── PROJECT INFO SECTION ── */
        .dev-project-section {
          margin-top: 5rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
        }

        .dev-project-card {
          background: linear-gradient(135deg, rgba(22, 27, 34, 0.8) 0%, rgba(13, 17, 23, 0.9) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          animation: slideInUp 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }

        .dev-project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #007bff 0%, #dc3545 100%);
        }

        .dev-project-card:hover {
          border-color: rgba(0, 123, 255, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 123, 255, 0.1);
        }

        .dev-project-card h4 {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dev-project-card p {
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
        }

        .dev-info-list {
          list-style: none;
          margin-top: 1.5rem;
        }

        .dev-info-list li {
          color: var(--muted);
          font-size: 0.9rem;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .dev-info-list li::before {
          content: '✓';
          color: #58a6ff;
          font-weight: 700;
          font-size: 1.1rem;
        }

        /* ── INSTITUTION SECTION ── */
        .dev-institution-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
          text-align: center;
        }

        .dev-institution-card {
          background: linear-gradient(135deg, rgba(22, 27, 34, 0.8) 0%, rgba(13, 17, 23, 0.9) 100%);
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 3rem;
          max-width: 600px;
          margin: 0 auto;
          animation: slideInUp 0.6s ease-out 0.4s forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;
        }

        .dev-institution-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%);
          transition: transform 0.6s ease;
        }

        .dev-institution-card:hover::before {
          transform: translate(-50%, 50%);
        }

        .dev-institution-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .dev-institution-card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .dev-institution-card p {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .dev-guide-info {
          background: rgba(0, 123, 255, 0.1);
          border: 1px solid rgba(0, 123, 255, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-top: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .dev-guide-info h4 {
          color: #58a6ff;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dev-guide-info p {
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        /* ── FOOTER ── */
        .dev-footer {
          background: var(--dark-bg);
          border-top: 1px solid var(--border);
          padding: 2rem 0;
          text-align: center;
          margin-top: 5rem;
        }
        .dev-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .dev-footer p {
          color: var(--muted);
          font-size: 0.875rem;
        }
        .dev-footer a {
          color: #007bff;
          text-decoration: none;
        }
        .dev-footer a:hover { color: #58a6ff; }

        /* ── SCROLL TOP ── */
        .dev-scroll-top {
          position: fixed;
          bottom: 2rem; right: 2rem;
          width: 44px; height: 44px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          box-shadow: 0 4px 16px rgba(0,123,255,0.4);
          transition: all 0.3s;
          opacity: 0;
          pointer-events: none;
          z-index: 500;
        }
        .dev-scroll-top.visible {
          opacity: 1;
          pointer-events: all;
        }
        .dev-scroll-top:hover { transform: translateY(-4px); }

        /* ── ANIMATIONS ── */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .dev-hero h1 {
            font-size: 2rem;
          }
          .dev-hero p {
            font-size: 0.95rem;
          }
          .dev-grid {
            grid-template-columns: 1fr;
          }
          .dev-section-title h2 {
            font-size: 1.75rem;
          }
          .dev-container {
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 576px) {
          .dev-hero {
            padding: 5rem 1rem 2rem;
          }
          .dev-hero h1 {
            font-size: 1.5rem;
          }
          .dev-card {
            padding: 1.5rem;
          }
          .dev-avatar {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }
          .dev-project-card,
          .dev-institution-card {
            padding: 1.5rem;
          }
        }
      `}</style>



      {/* HERO */}
      <section className="dev-hero">
        <div className="dev-hero-inner">
          <h1>Our Development Team</h1>
          <p>Meet the talented developers behind the CyberShield project</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="dev-container">
        {/* DEVELOPERS SECTION */}
        <section>
          <div className="dev-section-title">
            <div className="dev-section-tag">Team</div>
            <h2>Project Developers</h2>
            <p>Passionate about cybersecurity and machine learning innovation</p>
          </div>

          <div className="dev-grid">
            {/* Developer 1 */}
            <div className="dev-card">
              <div className="dev-avatar">👨‍💻</div>
              <h3>Mudassir Ahmed</h3>
              <p className="dev-role">Full-Stack Developer</p>
              <p className="dev-bio">
                Specialized in machine learning model integration, backend architecture, and real-time threat prediction systems. Focused on optimizing model performance and system scalability.
              </p>
              <div className="dev-skills">
                <span className="dev-skill">Python</span>
                <span className="dev-skill">ML/DL</span>
                <span className="dev-skill">Backend</span>
                <span className="dev-skill">API Design</span>
              </div>
              <div className="dev-socials">
                <a href="#" className="dev-social-link" title="GitHub">G</a>
                <a href="#" className="dev-social-link" title="LinkedIn">in</a>
                <a href="#" className="dev-social-link" title="Email">✉</a>
              </div>
            </div>

            {/* Developer 2 */}
            <div className="dev-card">
              <div className="dev-avatar">👨‍💻</div>
              <h3>Zaid Khan</h3>
              <p className="dev-role">Frontend & Data Specialist</p>
              <p className="dev-bio">
                Expert in data visualization, user interface design, and data pipeline implementation. Creates intuitive dashboards for threat analysis and model result interpretation.
              </p>
              <div className="dev-skills">
                <span className="dev-skill">React</span>
                <span className="dev-skill">Data Viz</span>
                <span className="dev-skill">Frontend</span>
                <span className="dev-skill">UI/UX</span>
              </div>
              <div className="dev-socials">
                <a href="#" className="dev-social-link" title="GitHub">G</a>
                <a href="#" className="dev-social-link" title="LinkedIn">in</a>
                <a href="#" className="dev-social-link" title="Email">✉</a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT INFO SECTION */}
        <section className="dev-project-section">
          <div className="dev-section-title">
            <div className="dev-section-tag">About</div>
            <h2>Project Overview</h2>
            <p>Comprehensive information about the CyberShield project</p>
          </div>

          <div className="dev-project-card">
            <h4>🎯 Project Name</h4>
            <p>
              <strong>CyberShield: Cyber Attack Prediction using ML to Generative AI</strong>
            </p>
            <p>
              A comprehensive cybersecurity system leveraging the evolution from traditional machine learning to generative AI for accurate and proactive cyber attack prediction. The project integrates multiple ML/DL models with explainability analysis and synthetic threat generation using GANs and VAEs.
            </p>
          </div>

          <div className="dev-project-card">
            <h4>📚 Key Technologies</h4>
            <ul className="dev-info-list">
              <li>Machine Learning: Decision Trees, Random Forest, Gradient Boosting</li>
              <li>Deep Learning: LSTM, CNN, Hybrid Architectures</li>
              <li>Generative Models: GANs, VAEs, Variational Autoencoders</li>
              <li>Explainability: SHAP (SHapley Additive exPlanations), XAI Techniques</li>
              <li>Data: CICIDS2017 dataset with real-time network monitoring</li>
              <li>Frontend: React, Next.js, Responsive UI Design</li>
            </ul>
          </div>

          <div className="dev-project-card">
            <h4>🏆 Project Highlights</h4>
            <ul className="dev-info-list">
              <li>8 different machine learning and deep learning models</li>
              <li>99%+ accuracy in cyber attack detection</li>
              <li>Real-time threat prediction and analysis</li>
              <li>Comprehensive data visualization dashboard</li>
              <li>AI-powered threat interpretation with SHAP</li>
              <li>Zero-day threat prediction using generative models</li>
              <li>Production-ready architecture and deployment</li>
            </ul>
          </div>
        </section>

        {/* INSTITUTION SECTION */}
        <section className="dev-institution-section">
          <div className="dev-section-title">
            <div className="dev-section-tag">Education</div>
            <h2>Academic Institution</h2>
            <p>Project developed as Major Project for semester completion</p>
          </div>

          <div className="dev-institution-card">
            <div className="dev-institution-icon">🎓</div>
            <h3>Muffakahm Jha College of Engineering</h3>
            <p>
              A premier engineering institution dedicated to excellence in technical education and innovation. The college fosters an environment of research, creativity, and practical learning for aspiring engineers.
            </p>
            
            <div className="dev-guide-info">
              <h4>Project Guide</h4>
              <p><strong>Prof. Uma N Dulhare</strong></p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>Head of the Department</p>
            </div>

            <div className="dev-guide-info" style={{ marginTop: '1rem', borderColor: 'rgba(220, 53, 69, 0.3)', background: 'rgba(220, 53, 69, 0.05)' }}>
              <h4 style={{ color: '#dc3545' }}>Project Category</h4>
              <p>Major Project - Cyber Security & AI/ML Research</p>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="dev-footer">
        <div className="dev-footer-inner">
          <p>
            © {new Date().getFullYear()} <strong>CyberShield</strong>. All Rights Reserved.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Developed by Mudassir Ahmed & Zaid Khan | Under the guidance of Prof. Uma N Dulhare
          </p>
        </div>
      </footer>

      {/* SCROLL TOP */}
      <button
        className={`dev-scroll-top${showScrollTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}