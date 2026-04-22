"use client";


import Link from "next/link";
import { useState, useEffect } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [notebookOpen, setNotebookOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`cs-header ${scrolled ? "scrolled" : ""}`}>
        <div className="cs-header-inner">
          <Link href="/" className="cs-logo">
            CyberShield
          </Link>

          {/* Desktop Nav */}
          <ul className="cs-nav">
            <li><Link href="/predict">Predict</Link></li>
            <li><Link href="/download">Download</Link></li>
            <li><Link href="/developers">Developers</Link></li>
            <li><Link href="/about">Project</Link></li>
            <li>
              <Link href="/" className="cs-signout">
                Sign In
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div
            className="cs-hamburger"
            onClick={() => setMobileNavOpen(true)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`cs-mobile-nav ${mobileNavOpen ? "open" : ""}`}>
        <button
          className="cs-mobile-close"
          onClick={() => setMobileNavOpen(false)}
        >
          ×
        </button>

        <Link href="/" onClick={() => setMobileNavOpen(false)}>Home</Link>
        <Link href="/predict" onClick={() => setMobileNavOpen(false)}>Predict</Link>
        <Link href="/download" onClick={() => setMobileNavOpen(false)}>Download</Link>
        <Link href="/about" onClick={() => setMobileNavOpen(false)}>Project</Link>
        <Link href="/" onClick={() => setMobileNavOpen(false)}>
          Sign In
        </Link>
      </nav>

      <style jsx>{`
        /* ── HEADER ── */
        .cs-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .cs-header.scrolled {
          background: rgba(13, 17, 23, 0.96);
          backdrop-filter: blur(12px);
          padding: 0.6rem 0;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
          border-bottom: 1px solid rgba(48, 54, 61, 0.5);
        }

        .cs-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .cs-logo {
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

        .cs-nav {
          display: flex;
          align-items: center;
          gap: 1.0rem;
          list-style: none;
          margin-left: auto;
        }

        .cs-nav li {
          position: relative;
        }

        .cs-nav a {
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

        .cs-nav a:hover,
        .cs-nav a.active {
          color: #58a6ff;
          background: rgba(0, 123, 255, 0.1);
        }

        .cs-nav-btn {
          background: none;
          border: none;
          color: var(--dark-text);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.5rem 0.85rem;
          border-radius: 6px;
          transition: all 0.2s;
          cursor: pointer;
          font-family: inherit;
        }

        .cs-nav-btn:hover {
          color: #58a6ff;
          background: rgba(0, 123, 255, 0.1);
        }

        .cs-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: var(--dark-bg2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.5rem 0;
          min-width: 200px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          z-index: 100;
          list-style: none;
          display: none;
        }

        .cs-dropdown-menu.open {
          display: block;
        }

        .cs-dropdown-menu li a {
          border-radius: 0;
          padding: 0.75rem 1.25rem;
          font-size: 0.88rem;
        }

        .cs-signout {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white !important;
          padding: 0.55rem 1.2rem !important;
          border-radius: 8px !important;
          font-weight: 700 !important;
          font-size: 0.85rem !important;
          letter-spacing: 0.5px;
          white-space: nowrap;
          transition: all 0.2s !important;
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
        }

        .cs-signout:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4) !important;
          background: linear-gradient(135deg, #0056b3, #003d7a) !important;
        }

        .cs-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          margin-left: auto;
          padding: 6px;
          border-radius: 6px;
          transition: background 0.2s;
        }

        .cs-hamburger:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .cs-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--dark-text);
          border-radius: 2px;
          transition: all 0.3s;
        }

        .cs-mobile-nav {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(13, 17, 23, 0.98);
          z-index: 999;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .cs-mobile-nav.open {
          display: flex;
        }

        .cs-mobile-nav a {
          color: var(--dark-text);
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: 700;
          transition: color 0.2s;
        }

        .cs-mobile-nav a:hover {
          color: #58a6ff;
        }

        .cs-mobile-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cs-nav {
            display: none;
          }
          
          .cs-hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}