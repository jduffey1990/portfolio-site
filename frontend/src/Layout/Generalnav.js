import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ currentTheme }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 2) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${currentTheme} ${scrolling ? "sticky-navbar" : "overlay-navbar"}`}>
      <div className="navbar-container">
        {/* Center Logo */}
        <div style={{textAlign:"left"}}>
          <Link className="navbar-brand" to="/">
            <div className={`Logo ${scrolling ? 'white-text' : 'dark-text'}`} style={{ paddingLeft: '80px' }}>
              <span style={{ fontWeight: 'bold', fontFamily: "'Arial Black', Gadget, sans-serif", lineHeight: '0.8' }}>
                Fox Dog Software Development
                </span>
            </div>
          </Link>
        </div>

        <ul className="nav navbar-nav text-light d-flex flex-row">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span className="oi oi-dashboard" />
              &nbsp;Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <span className="oi oi-dashboard" />
              &nbsp;About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              <span className="oi oi-list" />
              &nbsp;Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <span className="oi oi-phone" />
              &nbsp;Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;