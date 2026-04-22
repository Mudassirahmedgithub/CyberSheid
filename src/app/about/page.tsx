"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const projectMetrics = [
  { label: "Dataset Records", value: "2.8M+" },
  { label: "ML Models", value: "8+" },
  { label: "Prediction Accuracy", value: "99%+" },
  { label: "Processing Time", value: "<1ms" },
];

const mlModels = [
  {
    name: "Random Forest",
    category: "Ensemble",
    accuracy: "98.5%",
    icon: "🌲",
    description: "Ensemble decision tree classifier for robust prediction",
  },
  {
    name: "XGBoost",
    category: "Gradient Boosting",
    accuracy: "99.2%",
    icon: "⚡",
    description: "High-performance boosted tree model with feature importance",
  },
  {
    name: "LSTM",
    category: "Deep Learning",
    accuracy: "97.8%",
    icon: "🧠",
    description: "Recurrent neural network for sequential pattern detection",
  },
  {
    name: "CNN",
    category: "Deep Learning",
    accuracy: "96.9%",
    icon: "🔍",
    description: "Convolutional network for traffic feature extraction",
  },
  {
    name: "Hybrid Ensemble",
    category: "Meta-Model",
    accuracy: "99.7%",
    icon: "🎯",
    description: "Combines ML and DL models with voting mechanism",
  },
  {
    name: "Generative AI",
    category: "GAN/VAE",
    accuracy: "98.3%",
    icon: "✨",
    description: "Synthetic data generation for zero-day threat detection",
  },
];

const toolFeatures = [
  {
    id: 1,
    title: "Automatic Traffic Capture",
    description:
      "Powered by Npcap drivers - automatically captures network traffic without manual configuration",
    icon: "📡",
    details: [
      "Real-time packet capture",
      "Pcap file generation",
      "Background processing",
    ],
  },
  {
    id: 2,
    title: "Feature Extraction",
    description:
      "Converts captured traffic to CSV with CICIDS2017-aligned network features",
    icon: "🔧",
    details: [
      "CICIDS2017 feature matching",
      "Automated CSV generation",
      "Feature normalization",
    ],
  },
  {
    id: 3,
    title: "Smart Prediction",
    description: "Pass network features to hybrid ML model for instant threat detection",
    icon: "🎯",
    details: [
      "Sub-millisecond inference",
      "Multi-model voting",
      "Confidence scoring",
    ],
  },
  {
    id: 4,
    title: "Visual Analytics",
    description: "Interactive visualizations showing threat patterns and confidence levels",
    icon: "📊",
    details: [
      "Real-time charts",
      "Confidence heatmaps",
      "Attack type breakdown",
    ],
  },
  {
    id: 5,
    title: "Data Inspection",
    description: "View and analyze the CSV data used for predictions with detailed metrics",
    icon: "🔎",
    details: [
      "Table view of features",
      "Statistical summaries",
      "Anomaly highlighting",
    ],
  },
  {
    id: 6,
    title: "PDF Report Export",
    description: "Generate comprehensive reports with all findings and visualizations",
    icon: "📄",
    details: [
      "Formatted reports",
      "Attack classification",
      "Confidence metrics",
    ],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "One-Click Start",
    description:
      "Launch CyberShield tool with a single click - automated setup handles everything",
  },
  {
    number: "02",
    title: "Traffic Capture",
    description:
      "Npcap drivers automatically capture network packets in background with minimal overhead",
  },
  {
    number: "03",
    title: "PCAP Generation",
    description:
      "Raw packet data saved as .pcap file for further analysis and feature extraction",
  },
  {
    number: "04",
    title: "CSV Conversion",
    description:
      "Automated conversion pipeline transforms PCAP to structured CSV format",
  },
  {
    number: "05",
    title: "Feature Matching",
    description:
      "Network features extracted and aligned with CICIDS2017 dataset structure",
  },
  {
    number: "06",
    title: "Model Inference",
    description:
      "CSV data passed to hybrid ML model for real-time cyber attack prediction",
  },
  {
    number: "07",
    title: "Visualization",
    description:
      "Interactive charts and confidence levels displayed for threat analysis",
  },
  {
    number: "08",
    title: "Report & Export",
    description:
      "Download comprehensive PDF report or inspect raw CSV data in detail",
  },
];

const architectureComponents = [
  {
    title: "Backend API",
    tech: "FastAPI + Render",
    description: "Production-grade API for model serving and inference",
    color: "#007bff",
  },
  {
    title: "ML Pipeline",
    tech: "Scikit-learn & TensorFlow",
    description: "8+ trained models with ensemble voting mechanism",
    color: "#28a745",
  },
  {
    title: "Desktop Tool",
    tech: "Python + Npcap",
    description: "Standalone executable for network traffic analysis",
    color: "#dc3545",
  },
  {
    title: "Web Interface",
    tech: "Next.js + React",
    description: "Modern dashboard for predictions and visualizations",
    color: "#ffc107",
  },
];

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "models" | "tool" | "architecture">("overview");
  const [scrolled, setScrolled] = useState(false);
  const [visibleMetrics, setVisibleMetrics] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

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
      ([entry]) => {
        if (entry.isIntersecting) setVisibleMetrics(true);
      },
      { threshold: 0.3 }
    );
    if (metricsRef.current) observer.observe(metricsRef.current);
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
          --primary-light: #58a6ff;
          --danger: #dc3545;
          --success: #28a745;
          --warning: #ffc107;
          --info: #17a2b8;
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
        .proj-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }
        .proj-header.scrolled {
          background: rgba(13,17,23,0.96);
          backdrop-filter: blur(12px);
          padding: 0.6rem 0;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
          border-bottom: 1px solid rgba(48,54,61,0.5);
        }
        .proj-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .proj-logo {
          font-family: 'Space Mono', monospace;
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .proj-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin-left: auto;
        }
        .proj-nav a {
          color: var(--dark-text);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0.5rem 0.8rem;
          border-radius: 6px;
          transition: all 0.2s;
          letter-spacing: 0.3px;
        }
        .proj-nav a:hover, .proj-nav a.active {
          color: var(--primary-light);
          background: rgba(0,123,255,0.1);
        }
        .proj-btn-nav {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white !important;
          padding: 0.5rem 1rem !important;
          border-radius: 6px !important;
          font-weight: 700 !important;
          font-size: 0.85rem !important;
          white-space: nowrap;
          transition: all 0.2s !important;
          box-shadow: 0 4px 12px rgba(0,123,255,0.3);
        }
        .proj-btn-nav:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(0,123,255,0.4) !important;
        }

        /* ── HERO ── */
        .proj-hero {
          position: relative;
          padding: 8rem 0 4rem;
          background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
          overflow: hidden;
        }
        .proj-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(0,123,255,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(220,53,69,0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        .proj-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }
        .proj-hero-header {
          max-width: 800px;
          margin-bottom: 2rem;
        }
        .proj-hero-tag {
          display: inline-block;
          background: rgba(0,123,255,0.15);
          border: 1px solid rgba(0,123,255,0.3);
          color: var(--primary-light);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .proj-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .proj-hero h1 span {
          background: linear-gradient(135deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .proj-hero p {
          font-size: 1.1rem;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .proj-hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .proj-btn-primary {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          border: none;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 8px 24px rgba(0,123,255,0.3);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: 0.5px;
        }
        .proj-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,123,255,0.4);
          background: linear-gradient(135deg, #0056b3 0%, #003d7a 100%);
        }
        .proj-btn-secondary {
          background: transparent;
          color: var(--primary-light);
          padding: 1rem 2rem;
          border-radius: 8px;
          border: 2px solid rgba(0,123,255,0.4);
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: 0.5px;
        }
        .proj-btn-secondary:hover {
          background: rgba(0,123,255,0.1);
          border-color: var(--primary-light);
          transform: translateY(-3px);
        }

        /* ── METRICS ── */
        .proj-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .proj-metric-card {
          background: rgba(0,123,255,0.05);
          border: 1px solid rgba(0,123,255,0.2);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s;
          opacity: 0;
          transform: translateY(20px);
        }
        .proj-metric-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .proj-metric-card:hover {
          border-color: rgba(0,123,255,0.5);
          background: rgba(0,123,255,0.1);
          transform: translateY(-8px);
        }
        .proj-metric-value {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #007bff 0%, #58a6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }
        .proj-metric-label {
          color: var(--muted);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* ── SECTION ── */
        .proj-section {
          padding: 5rem 0;
          position: relative;
        }
        .proj-section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .proj-section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        .proj-section-tag {
          display: inline-block;
          color: var(--primary-light);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        .proj-section-title h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }
        .proj-section-title p {
          color: var(--muted);
          font-size: 1.05rem;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ── MODELS GRID ── */
        .proj-models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .proj-model-card {
          background: var(--dark-bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .proj-model-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #58a6ff);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .proj-model-card:hover {
          border-color: var(--primary);
          background: rgba(0,123,255,0.05);
          transform: translateY(-8px);
        }
        .proj-model-card:hover::before {
          opacity: 1;
        }
        .proj-model-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .proj-model-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.3rem;
        }
        .proj-model-category {
          display: inline-block;
          background: rgba(0,123,255,0.15);
          color: var(--primary-light);
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .proj-model-accuracy {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
          color: var(--success);
          font-weight: 700;
        }
        .proj-model-desc {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* ── FEATURES GRID ── */
        .proj-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.5rem;
        }
        .proj-feature-card {
          background: var(--dark-bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem;
          transition: all 0.3s;
          position: relative;
        }
        .proj-feature-card::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(0,123,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .proj-feature-card:hover {
          border-color: var(--primary);
          background: rgba(0,123,255,0.05);
          transform: translateY(-8px);
        }
        .proj-feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }
        .proj-feature-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.8rem;
        }
        .proj-feature-desc {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .proj-feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .proj-feature-list li {
          color: var(--muted);
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .proj-feature-list li::before {
          content: '✓';
          color: var(--success);
          font-weight: 700;
          flex-shrink: 0;
        }

        /* ── WORKFLOW ── */
        .proj-workflow {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .proj-workflow-step {
          background: var(--dark-bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s;
          text-align: center;
        }
        .proj-workflow-step::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #0056b3);
        }
        .proj-workflow-step:hover {
          border-color: var(--primary);
          background: rgba(0,123,255,0.05);
          transform: translateY(-6px);
        }
        .proj-workflow-num {
          font-family: 'Space Mono', monospace;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #007bff, #58a6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }
        .proj-workflow-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.8rem;
        }
        .proj-workflow-desc {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* ── ARCHITECTURE ── */
        .proj-architecture-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .proj-architecture-box {
          border-radius: 12px;
          padding: 2.5rem;
          color: white;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 200px;
        }
        .proj-architecture-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 60%);
          pointer-events: none;
        }
        .proj-architecture-box::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);
          pointer-events: none;
        }
        .proj-architecture-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .proj-architecture-content {
          position: relative;
          z-index: 2;
        }
        .proj-architecture-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .proj-architecture-tech {
          font-size: 0.85rem;
          font-weight: 600;
          opacity: 0.9;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .proj-architecture-desc {
          font-size: 0.9rem;
          opacity: 0.85;
          line-height: 1.6;
        }

        /* ── TABS ── */
        .proj-tabs {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          border-bottom: 2px solid var(--border);
          flex-wrap: wrap;
        }
        .proj-tab-btn {
          background: none;
          border: none;
          color: var(--muted);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 1rem 0;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          letter-spacing: 0.5px;
          text-transform: capitalize;
        }
        .proj-tab-btn:hover {
          color: var(--primary-light);
        }
        .proj-tab-btn.active {
          color: var(--primary-light);
        }
        .proj-tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #007bff, #58a6ff);
        }

        /* ── FOOTER ── */
        .proj-footer {
          background: var(--dark-bg);
          border-top: 1px solid var(--border);
          padding: 3rem 0 1rem;
          margin-top: 5rem;
        }
        .proj-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
        }
        .proj-footer p {
          color: var(--muted);
          font-size: 0.9rem;
        }
        .proj-footer a {
          color: var(--primary);
          text-decoration: none;
          transition: color 0.3s;
        }
        .proj-footer a:hover {
          color: var(--primary-light);
        }

        /* ── SCROLL TOP ── */
        .proj-scroll-top {
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
        .proj-scroll-top.visible {
          opacity: 1;
          pointer-events: all;
        }
        .proj-scroll-top:hover {
          transform: translateY(-4px);
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .proj-hero h1 { font-size: 2rem; }
          .proj-hero p { font-size: 1rem; }
          .proj-hero-cta { flex-direction: column; }
          .proj-btn-primary, .proj-btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .proj-nav { display: none; }
          .proj-models-grid, .proj-features-grid {
            grid-template-columns: 1fr;
          }
          .proj-metrics { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 576px) {
          .proj-hero { padding: 6rem 0 2rem; }
          .proj-section { padding: 3rem 0; }
          .proj-section-title h2 { font-size: 1.75rem; }
          .proj-tabs { gap: 0.5rem; }
          .proj-tab-btn { font-size: 0.85rem; padding: 0.75rem 0; }
          .proj-metric-value { font-size: 2rem; }
          .proj-metrics { grid-template-columns: 1fr; }
        }
      `}</style>



      <main>
        {/* ── HERO ── */}
        <section className="proj-hero">
          <div className="proj-hero-inner">
            <div className="proj-hero-header">
              <div className="proj-hero-tag">ML/DL Hybrid Intelligence</div>
              <h1>
                CyberShield Project:<br />
                <span>CICIDS2017 to Production</span>
              </h1>
              <p>
                A comprehensive cyber attack prediction system built with CICIDS2017 dataset, 
                trained on 8+ machine learning and deep learning models, with ensemble voting for maximum accuracy. 
                Deployed via FastAPI backend and integrated with a powerful desktop tool for real-time threat detection.
              </p>
              <div className="proj-hero-cta">
                <button className="proj-btn-primary" onClick={() => document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" })}>
                  ⚡ Explore Tool
                </button>
                <Link href="/download" className="proj-btn-secondary">
                  📊 View Download
                </Link>
              </div>
            </div>

            <div ref={metricsRef} className="proj-metrics">
              {projectMetrics.map((metric, i) => (
                <div
                  key={i}
                  className={`proj-metric-card${visibleMetrics ? " visible" : ""}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="proj-metric-value">{metric.value}</div>
                  <div className="proj-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODELS SECTION ── */}
        <section id="models" className="proj-section" style={{ background: "var(--dark-bg2)" }}>
          <div className="proj-section-inner">
            <div className="proj-section-title">
              <div className="proj-section-tag">Machine Learning</div>
              <h2>Trained Models</h2>
              <p>8+ advanced algorithms for cyber attack prediction with ensemble voting mechanism</p>
            </div>

            <div className="proj-models-grid">
              {mlModels.map((model, i) => (
                <div key={i} className="proj-model-card">
                  <div className="proj-model-icon">{model.icon}</div>
                  <div className="proj-model-name">{model.name}</div>
                  <div className="proj-model-category">{model.category}</div>
                  <div className="proj-model-accuracy">✓ {model.accuracy} Accuracy</div>
                  <div className="proj-model-desc">{model.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES SECTION ── */}
        <section id="tool" className="proj-section">
          <div className="proj-section-inner">
            <div className="proj-section-title">
              <div className="proj-section-tag">Desktop Application</div>
              <h2>CyberShield Tool Features</h2>
              <p>One-click automated threat detection with comprehensive analysis and reporting</p>
            </div>

            <div className="proj-features-grid">
              {toolFeatures.map((feature) => (
                <div key={feature.id} className="proj-feature-card">
                  <span className="proj-feature-icon">{feature.icon}</span>
                  <div className="proj-feature-title">{feature.title}</div>
                  <p className="proj-feature-desc">{feature.description}</p>
                  <ul className="proj-feature-list">
                    {feature.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW SECTION ── */}
        <section className="proj-section" style={{ background: "var(--dark-bg2)" }}>
          <div className="proj-section-inner">
            <div className="proj-section-title">
              <div className="proj-section-tag">Process Pipeline</div>
              <h2>End-to-End Workflow</h2>
              <p>Complete process from traffic capture to threat prediction and reporting</p>
            </div>

            <div className="proj-workflow">
              {workflowSteps.map((step, i) => (
                <div key={i} className="proj-workflow-step">
                  <div className="proj-workflow-num">{step.number}</div>
                  <div className="proj-workflow-title">{step.title}</div>
                  <p className="proj-workflow-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURE SECTION ── */}
        <section id="architecture" className="proj-section">
          <div className="proj-section-inner">
            <div className="proj-section-title">
              <div className="proj-section-tag">System Architecture</div>
              <h2>Technical Stack</h2>
              <p>Complete technology stack for production-grade cyber attack detection</p>
            </div>

            <div className="proj-architecture-grid">
              {architectureComponents.map((component, i) => (
                <div
                  key={i}
                  className="proj-architecture-box"
                  style={{ background: `linear-gradient(135deg, ${component.color}22 0%, ${component.color}11 100%)`, 
                           borderLeft: `4px solid ${component.color}` }}
                >
                  <div className="proj-architecture-content">
                    <div className="proj-architecture-title">{component.title}</div>
                    <div className="proj-architecture-tech">{component.tech}</div>
                    <p className="proj-architecture-desc">{component.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DETAILED INFO SECTION ── */}
        <section className="proj-section" style={{ background: "var(--dark-bg2)" }}>
          <div className="proj-section-inner">
            <div className="proj-section-title">
              <div className="proj-section-tag">Overview</div>
              <h2>Project Details</h2>
              <p>Complete information about the CyberShield project components</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div className="proj-feature-card">
                <span className="proj-feature-icon">📊</span>
                <div className="proj-feature-title">CICIDS2017 Dataset</div>
                <p className="proj-feature-desc">
                  2.8M+ network traffic records with diverse attack types including intrusion attempts, 
                  DDoS, web-based attacks, and more. Comprehensive feature engineering aligned with dataset specifications.
                </p>
              </div>
              <div className="proj-feature-card">
                <span className="proj-feature-icon">🤖</span>
                <div className="proj-feature-title">Hybrid ML Pipeline</div>
                <p className="proj-feature-desc">
                  8+ trained models including Random Forest, XGBoost, LSTM, CNN, and ensemble voting mechanism. 
                  Generative AI models (GAN/VAE) for synthetic data and zero-day threat detection.
                </p>
              </div>
              <div className="proj-feature-card">
                <span className="proj-feature-icon">⚙️</span>
                <div className="proj-feature-title">FastAPI Backend</div>
                <p className="proj-feature-desc">
                  Production-grade REST API deployed on Render platform. Converts trained ML/DL models into scalable web service 
                  with sub-millisecond inference times for real-time predictions.
                </p>
              </div>
              <div className="proj-feature-card">
                <span className="proj-feature-icon">💻</span>
                <div className="proj-feature-title">Desktop Tool</div>
                <p className="proj-feature-desc">
                  Standalone executable using Python and Npcap drivers. Automatically captures network traffic, 
                  generates PCAP files, extracts features, and runs predictions with visualizations.
                </p>
              </div>
              <div className="proj-feature-card">
                <span className="proj-feature-icon">📈</span>
                <div className="proj-feature-title">Npcap Integration</div>
                <p className="proj-feature-desc">
                  Leverages Npcap drivers for low-level packet capture. Background processing enables seamless traffic analysis 
                  without manual configuration or system interruption.
                </p>
              </div>
              <div className="proj-feature-card">
                <span className="proj-feature-icon">📋</span>
                <div className="proj-feature-title">CSV & Feature Matching</div>
                <p className="proj-feature-desc">
                  Automated PCAP to CSV conversion with CICIDS2017 feature extraction. Network characteristics precisely matched 
                  to training dataset specifications for accurate predictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="proj-section">
          <div className="proj-section-inner" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Ready to Detect Threats?</h2>
            <p style={{ color: "var(--muted)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
              Experience AI-powered cyber attack prediction with our advanced threat detection system. 
              Powered by 8+ trained models and real-time network analysis.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/predict" className="proj-btn-primary">
                ⚡ Start Predicting
              </Link>
              <a href="#tool" className="proj-btn-secondary" style={{ cursor: "pointer" }}>
                📖 Learn More
              </a>
            </div>
          </div>
        </section>
      </main>


      {/* ── SCROLL TOP ── */}
      <button
        className={`proj-scroll-top${showScrollTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}