import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported for routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // Toggle dropdown menu
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (dropdownOpen) setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      headerRef.current.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={scrollToTop}>
            <img src={logo} alt="Viwebsync Logo" className="logo-img" />
            <div className="logo-text-container">
              <span className="logo-text-primary">Viwebsync</span>
              <span className="logo-text-secondary">Next-Gen Tech Solutions</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={scrollToTop}>
                Home
              </Link>
            </li>

            {/* Solutions Dropdown */}
            <li
              className={`nav-item dropdown ${dropdownOpen ? 'open' : ''}`}
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="nav-link dropdown-btn"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                Solutions <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/digital-solutions" className="dropdown-link" onClick={scrollToTop}>
                    <div className="service-icon digital-icon"></div>
                    <div>
                    <h4>Web Development</h4>
                    <p>Custom websites & applications</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/aerospace-tech" className="dropdown-link" onClick={scrollToTop}>
                    <div className="service-icon aerospace-icon"></div>
                    <div>
                    <h4>Aerospace & LabVIEW Solutions</h4>
                    <p>Missile & defense systems</p>
                    </div>
                  </Link>
                </li>
               
               
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/company" className="nav-link" onClick={scrollToTop}>
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" onClick={scrollToTop}>
                Portfolio
              </Link>
            </li>

            {/* Updated Connect link to route to /connect */}
            <li className="nav-item">
              <Link to="/connect" className="nav-link" onClick={scrollToTop}>
                Connect
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* CTA Button */}
        <Link to="/start-now" className="cta-button" onClick={scrollToTop}>
          Start Now
          <span className="cta-hover-effect"></span>
        </Link>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/" className="mobile-nav-link" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li
              className="mobile-nav-item mobile-dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="mobile-dropdown-btn">
                Solutions <FontAwesomeIcon icon={faChevronDown} className={`mobile-dropdown-icon ${dropdownOpen ? 'rotate' : ''}`} />
              </div>
              <ul className={`mobile-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li>
                  <Link to="/digital-solutions" className="mobile-dropdown-link" onClick={scrollToTop}>
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link to="/aerospace-tech" className="mobile-dropdown-link" onClick={scrollToTop}>
                    Aerospace Innovation
                  </Link>
                </li>
                <li>
                  <Link to="/smart-automation" className="mobile-dropdown-link" onClick={scrollToTop}>
                    Smart Automation
                  </Link>
                </li>
                <li>
                  <Link to="/labview-expertise" className="mobile-dropdown-link" onClick={scrollToTop}>
                    LabVIEW Integration
                  </Link>
                </li>
                <li>
                  <Link to="/iot-edge" className="mobile-dropdown-link" onClick={scrollToTop}>
                    Edge IoT
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mobile-nav-item">
              <Link to="/company" className="mobile-nav-link" onClick={scrollToTop}>
                Company
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/portfolio" className="mobile-nav-link" onClick={scrollToTop}>
                Portfolio
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/connect" className="mobile-nav-link" onClick={scrollToTop}>
                Connect
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/start-now" className="mobile-cta-button" onClick={scrollToTop}>
                Start Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
