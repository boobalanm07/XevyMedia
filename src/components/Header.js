import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu on button click
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img src="/img/logo.png" alt="Logo" style={{ height: '50px' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu} // Toggle the menu on button click
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/hire-digital-marketer/" onClick={closeMenu}>Hire Digital Marketer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services/" onClick={closeMenu}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog/" onClick={closeMenu}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact/" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
