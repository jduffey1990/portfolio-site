import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`fd-nav ${scrolled ? "fd-nav--scrolled" : ""}`}>
      <div className="fd-nav__inner">
        <Link className="fd-nav__logo" to="/" onClick={closeMenu}>
          <span className="fd-nav__logo-fox">Fox Dog</span>
          <span className="fd-nav__logo-sub">Software Development</span>
        </Link>

        <ul className={`fd-nav__links ${menuOpen ? "fd-nav__links--open" : ""}`}>
          <li><Link className="fd-nav__link" to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link className="fd-nav__link" to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link className="fd-nav__link" to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link className="fd-nav__link fd-nav__link--cta" to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <button
          className={`fd-nav__hamburger ${menuOpen ? "fd-nav__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
