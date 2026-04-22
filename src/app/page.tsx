"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Data Collection",
    description:
      "Gather network traffic data, system logs, and security events from various sources including CICIDS2017 dataset and real-time network monitoring.",
  },
  {
    number: "02",
    title: "Data Preprocessing",
    description:
      "Clean, normalize, and transform raw data. Handle missing values, encode categorical features, and scale numerical attributes for optimal model performance.",
  },
  {
    number: "03",
    title: "Feature Engineering",
    description:
      "Extract relevant features from network traffic patterns, identify key indicators of compromise, and create meaningful representations for ML models.",
  },
  {
    number: "04",
    title: "Model Training",
    description:
      "Train multiple ML/DL models including Decision Trees, Random Forest, LSTM, CNN, and hybrid architectures on labeled training data to learn attack patterns.",
  },
  {
    number: "05",
    title: "Model Evaluation",
    description:
      "Validate models using test datasets, measure performance metrics (accuracy, precision, recall, F1-score), and compare results across different algorithms.",
  },
  {
    number: "06",
    title: "Threat Prediction",
    description:
      "Deploy trained models to analyze incoming network traffic in real-time, classify potential threats, and generate predictions for cyber attack detection.",
  },
  {
    number: "07",
    title: "Explainability Analysis",
    description:
      "Apply SHAP (SHapley Additive exPlanations) and other XAI techniques to interpret model decisions and provide transparent reasoning for security analysts.",
  },
  {
    number: "08",
    title: "Generative AI Enhancement",
    description:
      "Utilize GANs and VAEs to generate synthetic attack scenarios, augment training data, and predict zero-day threats using generative models.",
  },
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notebookOpen, setNotebookOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.15 }
    );
    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
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

       
        /* ── HERO ── */
        .cs-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 0 5rem;
          background: linear-gradient(135deg, #0d1117 0%, #0d1b2a 100%);
          overflow: hidden;
        }
        .cs-hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 15% 50%, rgba(0,123,255,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 85% 75%, rgba(220,53,69,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        /* animated grid */
        .cs-hero::after {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,123,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,123,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .cs-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .cs-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0,123,255,0.12);
          border: 1px solid rgba(0,123,255,0.3);
          color: #58a6ff;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.6s ease both;
        }
        .cs-hero-badge::before {
          content: '';
          width: 6px; height: 6px;
          background: #58a6ff;
          border-radius: 50%;
          animation: pulse 2s ease infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .cs-hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          color: white;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.7s ease 0.1s both;
        }
        .cs-hero h1 span {
          background: linear-gradient(135deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cs-hero p {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 480px;
          animation: fadeInUp 0.7s ease 0.2s both;
        }
        .cs-hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeInUp 0.7s ease 0.3s both;
        }
        .cs-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2rem;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
          transition: all 0.25s;
          box-shadow: 0 4px 20px rgba(0,123,255,0.35);
        }
        .cs-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,123,255,0.45);
          background: linear-gradient(135deg, #0056b3, #003d7a);
        }
        .cs-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.75rem;
          border: 1px solid var(--border);
          color: var(--dark-text);
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.25s;
        }
        .cs-btn-ghost:hover {
          border-color: #007bff;
          color: #58a6ff;
          background: rgba(0,123,255,0.07);
        }
        /* hero visual */
        .cs-hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeInRight 0.8s ease 0.2s both;
        }
        .cs-shield-graphic {
          position: relative;
          width: 320px;
          height: 320px;
        }
        .cs-shield-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(0,123,255,0.2);
          animation: rotate 12s linear infinite;
        }
        .cs-shield-ring:nth-child(1) { inset: 0; animation-duration: 12s; }
        .cs-shield-ring:nth-child(2) { inset: 24px; animation-duration: 8s; animation-direction: reverse; border-color: rgba(220,53,69,0.15); }
        .cs-shield-ring:nth-child(3) { inset: 48px; animation-duration: 16s; border-color: rgba(0,123,255,0.1); }
        @keyframes rotate { to { transform: rotate(360deg); } }
        .cs-shield-core {
          position: absolute;
          inset: 72px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,123,255,0.15) 0%, rgba(0,123,255,0.05) 60%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,123,255,0.3);
        }
        .cs-shield-icon {
          font-size: 4rem;
          animation: floatY 4s ease-in-out infinite;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .cs-dot {
          position: absolute;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #007bff;
          box-shadow: 0 0 10px #007bff;
        }

        /* stats row */
        .cs-stats {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(48,54,61,0.5);
          animation: fadeInUp 0.7s ease 0.4s both;
        }
        .cs-stat-item { text-align: left; }
        .cs-stat-num {
          font-family: 'Space Mono', monospace;
          font-size: 1.6rem;
          font-weight: 700;
          color: #58a6ff;
          line-height: 1;
        }
        .cs-stat-label {
          font-size: 0.78rem;
          color: var(--muted);
          margin-top: 0.3rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ── PROCESS SECTION ── */
        .cs-process {
          padding: 6rem 0;
          background: var(--dark-bg2);
          position: relative;
        }
        .cs-process::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,123,255,0.4), transparent);
        }
        .cs-section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .cs-section-title {
          text-align: center;
          margin-bottom: 4rem;
        }
        .cs-section-tag {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          color: #007bff;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .cs-section-title h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        .cs-section-title h2::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px; height: 3px;
          background: linear-gradient(90deg, #007bff, #dc3545);
          border-radius: 2px;
        }
        .cs-section-title p {
          margin-top: 1.8rem;
          color: var(--muted);
          font-size: 1rem;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* process grid */
        .cs-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .cs-step-card {
          background: var(--dark-bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.75rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
          opacity: 0;
          transform: translateY(24px);
        }
        .cs-step-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .cs-step-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #0056b3);
          transition: background 0.3s;
        }
        .cs-step-card:hover {
          border-color: rgba(0,123,255,0.4);
          transform: translateY(-4px) !important;
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .cs-step-card:hover::before {
          background: linear-gradient(90deg, #dc3545, #c82333);
        }
        .cs-step-num {
          font-family: 'Space Mono', monospace;
          font-size: 2.5rem;
          font-weight: 700;
          color: rgba(0,123,255,0.12);
          line-height: 1;
          margin-bottom: 1rem;
          user-select: none;
        }
        .cs-step-card h4 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
          letter-spacing: 0.2px;
        }
        .cs-step-card p {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.65;
        }

        /* ── FOOTER ── */
        .cs-footer {
          background: var(--dark-bg);
          border-top: 1px solid var(--border);
          padding: 2rem 0;
          text-align: center;
        }
        .cs-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .cs-footer p {
          color: var(--muted);
          font-size: 0.875rem;
        }
        .cs-footer a {
          color: #007bff;
          text-decoration: none;
        }
        .cs-footer a:hover { color: #58a6ff; }

        /* ── SCROLL TOP ── */
        .cs-scroll-top {
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
        .cs-scroll-top.visible {
          opacity: 1;
          pointer-events: all;
        }
        .cs-scroll-top:hover { transform: translateY(-4px); }

        /* animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* responsive */
        @media (max-width: 1024px) {
          .cs-process-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .cs-hero-inner { grid-template-columns: 1fr; gap: 3rem; }
          .cs-hero-visual { order: -1; }
          .cs-shield-graphic { width: 220px; height: 220px; }
          .cs-nav { display: none; }
          .cs-hamburger { display: flex; }
          .cs-stats { gap: 1.25rem; }
        }
        @media (max-width: 576px) {
          .cs-process-grid { grid-template-columns: 1fr; }
          .cs-hero { padding: 6rem 0 3rem; }
          .cs-stats { flex-wrap: wrap; }
        }
      `}</style>



      <main>
        {/* ── HERO ── */}
        <section className="cs-hero">
          <div className="cs-hero-inner">
            {/* Left */}
            <div>
              <div className="cs-hero-badge">AI-Powered Threat Detection</div>
              <h1>
                Cyber Attack Prediction:<br />
                <span>ML to Generative AI</span>
              </h1>
              <p>
                Leveraging the evolution from traditional machine learning to generative AI for
                more accurate and proactive cyber attack prediction.
              </p>
              <div className="cs-hero-cta">
                <Link href="/predict" className="cs-btn-primary">
                  ⚡ Start Predicting
                </Link>
                <Link href="/download" className="cs-btn-ghost">
                  📊 Start Download
                </Link>
              </div>
              <div className="cs-stats">
                <div className="cs-stat-item">
                  <div className="cs-stat-num">8</div>
                  <div className="cs-stat-label">ML Models</div>
                </div>
                <div className="cs-stat-item">
                  <div className="cs-stat-num">99%+</div>
                  <div className="cs-stat-label">Accuracy</div>
                </div>
                <div className="cs-stat-item">
                  <div className="cs-stat-num">Real-time</div>
                  <div className="cs-stat-label">Detection</div>
                </div>
              </div>
            </div>

            {/* Shield Graphic */}
            <div className="cs-hero-visual">
              <div className="cs-shield-graphic">
                <div className="cs-shield-ring" />
                <div className="cs-shield-ring" />
                <div className="cs-shield-ring" />
                <div className="cs-shield-core">
                  <div className="cs-shield-icon">🛡️</div>
                </div>
                {/* orbiting dots */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div
                    key={i}
                    className="cs-dot"
                    style={{
                      top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 130}px - 4px)`,
                      left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 130}px - 4px)`,
                      opacity: i % 2 === 0 ? 1 : 0.4,
                      background: i % 3 === 0 ? "#dc3545" : "#007bff",
                      boxShadow: `0 0 10px ${i % 3 === 0 ? "#dc3545" : "#007bff"}`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS SECTION ── */}
        <section className="cs-process">
          <div className="cs-section-inner">
            <div className="cs-section-title">
              <div className="cs-section-tag">Pipeline</div>
              <h2>How It Works</h2>
              <p>Step-by-step process of cyber attack prediction from data collection to threat detection</p>
            </div>

            <div className="cs-process-grid">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  data-index={i}
                  className={`cs-step-card${visibleSteps.has(i) ? " visible" : ""}`}
                  style={{ transitionDelay: `${(i % 4) * 80}ms` }}
                >
                  <div className="cs-step-num">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="cs-footer">
        <div className="cs-footer-inner">
          <p>
            © {new Date().getFullYear()} <strong>CyberShield</strong>. All Rights Reserved.{" "}
            Designed &amp; Distributed by <a href="#">CyberShield</a>.
          </p>
        </div>
      </footer>

      {/* ── SCROLL TOP ── */}
      <button
        className={`cs-scroll-top${showScrollTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}