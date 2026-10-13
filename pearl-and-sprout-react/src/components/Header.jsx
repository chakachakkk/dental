import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#wings', label: 'Our Wings' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Doctors' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#faq', label: 'FAQs' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="nav">
        <a href="#home" className="logo">
          Pearl <span className="amp">&amp;</span> Sprout
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <span className="nav-phone">+91 98765 43210</span>
          <a href="#book" className="btn btn-primary btn-sm">
            Book a Visit
          </a>
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#book" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Book a Visit
        </a>
      </div>
    </header>
  );
}
