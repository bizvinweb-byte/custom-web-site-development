"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/919990613140?text=Hi%20Brandmingo%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20website%20project.";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "Case Studies", href: "#case-studies", id: "case-studies" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Why CRO", href: "#why-cro", id: "why-cro" },
  { name: "Our Process", href: "#process", id: "process" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  { name: "Contact", href: "#ready-to-build", id: "ready-to-build" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Header background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Real-time Production Scroll-Spy: detect which section is currently active
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 140; // Offset for sticky navbar

      // Top of page check
      if (window.scrollY < 120) {
        setActiveLink("Home");
        return;
      }

      // Reached bottom of page check (highlight Contact)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveLink("Contact");
        return;
      }

      // Check sections from bottom to top
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveLink(navLinks[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy(); // Initial check on load
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Close drawer if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1100) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll handler with sticky header offset
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveLink(item.name);
    setMobileMenuOpen(false);

    if (item.id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(item.id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className={`bm-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="bm-nav-container">
        {/* 1. Left: Brandmingo Official Logo Image */}
        <Link
          href="#hero"
          className="bm-brand"
          onClick={(e) => handleNavClick(e, navLinks[0])}
        >
          <Image
            src="/brandmingologo.png"
            alt="Brandmingo"
            width={175}
            height={36}
            priority
            className="bm-brand-logo-img"
          />
        </Link>

        {/* 2. Middle: Desktop Navigation Items */}
        <nav className="bm-nav-desktop" aria-label="Main Navigation">
          <ul className="bm-nav-list">
            {navLinks.map((item) => {
              const isActive = activeLink === item.name;
              return (
                <li key={item.name} className="bm-nav-item">
                  <a
                    href={item.href}
                    className={`bm-nav-link ${isActive ? "is-active" : ""}`}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="bm-active-indicator" aria-hidden="true" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 3. Right: CTA Button (Pill shaped with React Icon Arrow) + Mobile Toggle */}
        <div className="bm-right-actions">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bm-quote-btn"
            aria-label="Get a Free Quote on WhatsApp (+91 99906 13140)"
          >
            <FaWhatsapp className="bm-btn-whatsapp-icon" aria-hidden="true" />
            <span>Get a Free Quote</span>
            <HiOutlineArrowRight className="bm-btn-arrow" aria-hidden="true" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="bm-mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <HiOutlineX className="bm-menu-icon" />
            ) : (
              <HiOutlineMenuAlt3 className="bm-menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Backdrop for Mobile Menu */}
      <div
        className={`bm-mobile-backdrop ${mobileMenuOpen ? "is-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Responsive Mobile Drawer */}
      <aside className={`bm-mobile-drawer ${mobileMenuOpen ? "is-open" : ""}`}>
        <div className="bm-drawer-header">
          <Link
            href="#hero"
            className="bm-brand"
            onClick={(e) => handleNavClick(e, navLinks[0])}
          >
            <Image
              src="/brandmingologo.png"
              alt="Brandmingo"
              width={160}
              height={34}
              className="bm-brand-logo-img"
            />
          </Link>

          <button
            type="button"
            className="bm-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiOutlineX />
          </button>
        </div>

        <nav className="bm-mobile-nav" aria-label="Mobile Navigation">
          <ul className="bm-mobile-list">
            {navLinks.map((item) => {
              const isActive = activeLink === item.name;
              return (
                <li key={item.name} className="bm-mobile-item">
                  <a
                    href={item.href}
                    className={`bm-mobile-link ${isActive ? "is-active" : ""}`}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="bm-mobile-dot" aria-hidden="true" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="bm-mobile-footer">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bm-quote-btn bm-quote-btn-full"
            aria-label="Get a Free Quote on WhatsApp (+91 99906 13140)"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaWhatsapp className="bm-btn-whatsapp-icon" aria-hidden="true" />
            <span>Get a Free Quote</span>
            <HiOutlineArrowRight className="bm-btn-arrow" aria-hidden="true" />
          </a>

          <div className="bm-mobile-contact">
            <span className="bm-location-label">📍 Noida Sector 62, Delhi NCR</span>
            <a href="tel:+919990613140" className="bm-phone-link">
              +91 99906 13140
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
