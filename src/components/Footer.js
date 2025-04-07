import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3 className="footer-logo">
            <span className="logo-highlight">Vi</span>websync
          </h3>
          <p className="footer-description">
            Pioneering next-gen tech solutions for a connected future.
          </p>
          <div className="social-links">
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h4 className="footer-heading">Navigate</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/company">Company</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/connect">Connect</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="contact-list">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>hello@viwebsync.com</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+91 6385879906</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <span>Mayiladuthurai,Tharangambadi, 609313</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h4 className="footer-heading">Insights</h4>
          <p className="newsletter-text">
            Subscribe for cutting-edge tech updates.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Join Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Viwebsync. All rights reserved.
        </p>
        <div className="legal-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;