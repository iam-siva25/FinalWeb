import React from 'react';
import '../styles/Portfolio.css';
import comingSoon from '../assets/coming-soon.jpg'; // Optional image

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Our Portfolio</h2>
        <img src={comingSoon} alt="Coming Soon" className="portfolio-image" />
        <p className="portfolio-text">
          We're a fresh and passionate team currently working on our first set of projects. This space will soon be filled with powerful web apps, dashboards, and innovative solutions!
        </p>
        <ul className="portfolio-list">
          <li>Industrial IoT & Automation</li>
          <li>Web & Mobile App Development</li>
          <li>Data Acquisition & Visualization</li>
          <li>Defence-grade Testing Systems</li>
        </ul>
        <p className="portfolio-note">
          In the meantime, feel free to <a href="/contact">contact us</a> to discuss your project needs!
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
