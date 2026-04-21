'use client';
import React, { useEffect, useRef, useState } from 'react';
import SiteFooter from '@/components/layouts/site-footer';
import SiteHeader from '@/components/layouts/site-header';
const steps = [
  {
    title: 'Install Npcap Driver',
    desc: 'Install the packet capture driver required for deep network scanning. This enables CyberShield to intercept and analyze live traffic.',
    btn: 'Open npcap.com',
    link: 'https://npcap.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.955 11.955 0 0 0 3 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.124-.552-4.12-1.52-5.856L15.25 4M12 5V3" />
      </svg>
    ),
  },
  {
    title: 'Restart Windows',
    desc: 'Restart your PC after Npcap installation so the driver loads correctly into the kernel. This step is mandatory for deep scan to function.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: 'Download CyberShield ZIP',
    desc: 'Download the latest CyberShield tool package. The archive includes all binaries, models, and dependencies pre-bundled for Windows.',
    btn: 'Download ZIP',
    link: 'https://github.com/Mudassirahmedgithub/CyberSheid/releases/download/Cybersheild/Cybersheild.zip',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: 'Extract and Run',
    desc: 'Extract the ZIP archive to any folder. No installer required — simply run the application executable to launch CyberShield.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
      </svg>
    ),
  },
  {
    title: 'Start Deep Scan',
    desc: 'Open the application and click START Deep Scan. CyberShield will begin capturing and analyzing packets in real time using AI models.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'View Results & Export',
    desc: 'See captured packets in CSV, AI predictions with visualization and confidence scores. Export a full report as PDF for documentation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

function StepCard({ step, index, visible }: { step: typeof steps[0]; index: number; visible: boolean }) {
  const isDownload = index === 2;

  return (
    <div
      className="step-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
      }}
    >
      {/* top accent bar */}
      <div className="step-accent" />

      <div className="step-inner">
        {/* step number + icon row */}
        <div className="step-meta">
          <span className="step-label">STEP {String(index + 1).padStart(2, '0')}</span>
          <span className={`step-icon-wrap ${isDownload ? 'step-icon-primary' : ''}`}>
            {step.icon}
          </span>
        </div>

        <h2 className="step-title">{step.title}</h2>
        <p className="step-desc">{step.desc}</p>

        {step.link && (
          <a href={step.link} target="_blank" rel="noopener noreferrer" className={`step-btn ${isDownload ? 'step-btn-primary' : 'step-btn-secondary'}`}>
            {isDownload && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            )}
            {step.btn}
          </a>
        )}
      </div>

      {/* Large ghost number */}
      <span className="step-ghost">{index + 1}</span>
    </div>
  );
}

export default function DownloadPage() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .dl-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
          font-family: 'DM Sans', sans-serif;
          color: #e6edf3;
          position: relative;
          overflow-x: hidden;
        }

        /* Background grid pattern */
        .dl-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,123,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,123,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        /* Radial glow blobs */
        .dl-page::after {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(circle at 15% 30%, rgba(0,123,255,0.09) 0%, transparent 45%),
            radial-gradient(circle at 85% 70%, rgba(220,53,69,0.07) 0%, transparent 45%);
          pointer-events: none;
          z-index: 0;
        }

        .dl-container {
          position: relative;
          z-index: 1;
          max-width: 920px;
          margin: 0 auto;
          padding: 5rem 1.5rem 6rem;
        }

        /* ── HERO ── */
        .dl-hero {
          text-align: center;
          margin-bottom: 4rem;
        }

        .dl-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1rem;
          border: 1px solid rgba(0,123,255,0.35);
          border-radius: 999px;
          background: rgba(0,123,255,0.08);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #58a6ff;
          margin-bottom: 1.75rem;
        }

        .dl-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #007bff;
          box-shadow: 0 0 6px #007bff;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .dl-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 1.1rem;
        }

        .dl-hero-title span {
          background: linear-gradient(90deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dl-hero-sub {
          font-size: 1.05rem;
          color: #8b949e;
          max-width: 520px;
          margin: 0 auto 2rem;
          line-height: 1.65;
          font-weight: 300;
        }

        /* meta pills */
        .dl-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .dl-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 0.78rem;
          color: #8b949e;
          font-weight: 500;
        }

        .dl-pill svg { color: #58a6ff; }

        /* ── STEPS GRID ── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        /* ── STEP CARD ── */
        .step-card {
          position: relative;
          background: rgba(22, 27, 34, 0.9);
          border: 1px solid rgba(48, 54, 61, 0.8);
          border-radius: 1rem;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .step-card:hover {
          border-color: rgba(0, 123, 255, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0,123,255,0.1);
          transform: translateY(-3px);
        }

        .step-accent {
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #007bff 0%, #0056b3 100%);
          transition: background 0.3s ease;
        }

        .step-card:hover .step-accent {
          background: linear-gradient(90deg, #007bff 0%, #dc3545 100%);
        }

        .step-inner {
          padding: 1.5rem 1.5rem 1.75rem;
          position: relative;
          z-index: 1;
        }

        .step-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.9rem;
        }

        .step-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #007bff;
          text-transform: uppercase;
        }

        .step-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 0.5rem;
          background: rgba(0,123,255,0.08);
          color: #58a6ff;
          border: 1px solid rgba(0,123,255,0.15);
          transition: background 0.3s, color 0.3s;
        }

        .step-card:hover .step-icon-wrap {
          background: rgba(0,123,255,0.15);
          color: #007bff;
        }

        .step-icon-primary {
          background: rgba(0,123,255,0.15) !important;
          color: #007bff !important;
          border-color: rgba(0,123,255,0.3) !important;
        }

        .step-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #e6edf3;
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }

        .step-desc {
          font-size: 0.875rem;
          color: #8b949e;
          line-height: 1.65;
          font-weight: 300;
        }

        .step-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.2rem;
          padding: 0.55rem 1.25rem;
          border-radius: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1px solid transparent;
        }

        .step-btn-primary {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,123,255,0.3);
        }

        .step-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,123,255,0.45);
          background: linear-gradient(135deg, #0056b3 0%, #003d7a 100%);
          color: #fff;
        }

        .step-btn-secondary {
          background: rgba(0,123,255,0.08);
          color: #58a6ff;
          border-color: rgba(0,123,255,0.25);
        }

        .step-btn-secondary:hover {
          background: rgba(0,123,255,0.16);
          border-color: rgba(0,123,255,0.45);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Ghost number overlay */
        .step-ghost {
          position: absolute;
          right: -0.1rem;
          bottom: -1rem;
          font-family: 'Syne', sans-serif;
          font-size: 6rem;
          font-weight: 900;
          color: rgba(0,123,255,0.04);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          z-index: 0;
          transition: color 0.3s ease;
        }

        .step-card:hover .step-ghost {
          color: rgba(0,123,255,0.07);
        }

        /* ── DIVIDER ── */
        .dl-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 3.5rem 0 1.5rem;
        }

        .dl-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(48,54,61,0.8), transparent);
        }

        .dl-divider-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #30363d;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── BOTTOM STRIP ── */
        .dl-bottom {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .dl-spec {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #484f58;
          font-weight: 400;
        }

        .dl-spec svg { color: #30363d; }

        .dl-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #30363d;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .dl-container { padding: 3.5rem 1rem 4rem; }
          .steps-grid { grid-template-columns: 1fr; }
          .dl-hero-title { font-size: 1.85rem; }
        }
      `}</style>

      <div className="dl-page">
        <div className="dl-container">

          {/* Hero */}
          <div
            className="dl-hero"
            ref={heroRef}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div className="dl-badge">Free Download</div>

            <h1 className="dl-hero-title">
              Download <span>CyberShield</span>
            </h1>

            <p className="dl-hero-sub">
              Auto-capture live network traffic and detect cyber attacks in real time
              using AI-powered deep packet inspection.
            </p>

            <div className="dl-meta">
              {[
                { label: 'Version 1.0', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z"/></svg> },
                { label: '358 MB', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/></svg> },
                { label: 'Windows Only', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4"/></svg> },
                { label: 'Free & Open Source', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/></svg> },
              ].map((m, i) => (
                <span className="dl-pill" key={i}>
                  {m.icon}
                  {m.label}
                </span>
              ))}
            </div>
          </div>

          {/* Section label */}
          <div className="dl-divider">
            <div className="dl-divider-line" />
            <span className="dl-divider-label">Installation Steps</span>
            <div className="dl-divider-line" />
          </div>

          {/* Steps */}
          <div className="steps-grid">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} visible={visible} />
            ))}
          </div>

          {/* Bottom meta */}
          <div className="dl-bottom">
            <span className="dl-spec">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              Version 1.0 stable
            </span>
            <span className="dl-dot" />
            <span className="dl-spec">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"/></svg>
              Windows 10 / 11
            </span>
            <span className="dl-dot" />
            <span className="dl-spec">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"/></svg>
              358 MB compressed
            </span>
            <span className="dl-dot" />
            <span className="dl-spec">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>
              Open Source on GitHub
            </span>
          </div>

        </div>
      </div>
    </>
  );
}