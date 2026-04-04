'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', label: 'Über uns' },
    { href: '#neu', label: 'Neu' },
    { href: '#aktionen', label: 'Aktionen', cta: true },
    { href: '#zeiten', label: 'Öffnungszeiten' },
    { href: '#cocktails', label: 'Cocktails' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#veranstaltungen', label: 'Veranstaltungen' },
    { href: '#kontakt', label: 'Kontakt', cta: true },
  ];

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Hauptnavigation">
        <Link href="#home" className="nav-logo" aria-label="Blue Moon Wuppertal – Startseite">
          <span className="text-brand-cream font-serif-display text-xl font-semibold">
            <span>Blue</span> <span className="text-brand-amber">Moon</span>
          </span>
        </Link>

        <ul className="nav-links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.cta ? 'nav-cta' : ''}
                onClick={(e) => {
                  closeMenu();
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          id="hamburger-btn"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Mobilmenü"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
