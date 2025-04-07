import React from 'react';
import TeamImg from '../assets/img1.webp';
import WebImg from '../assets/web-design1.jpg';
import LabVIEWImg from '../assets/data-acquisition.jpg';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-container">
          <h1 className="hero-heading">Empowering Innovation Across Web & Embedded Systems</h1>
          <p className="hero-subtitle">Blending precision engineering with digital transformation</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="text-content">
            <h2 className="section-heading">Our Mission</h2>
            <p className="section-description">
              At VI Web Sync, we’re committed to engineering excellence across two powerful domains: Embedded & LabVIEW-based solutions for aerospace, defense, and manufacturing, and cutting-edge web development for scalable, high-performance applications. Our mission is to deliver robust, innovative systems that bring your visions to life—whether on the ground or in the cloud.
            </p>
            <div className="mission-points">
              <div className="mission-card">
                <h3>LabVIEW & Embedded Systems</h3>
                <p>From Hardware-in-the-Loop simulations to real-time control systems, we bring precision to critical engineering workflows.</p>
              </div>
              <div className="mission-card">
                <h3>Web & Software Solutions</h3>
                <p>Empowering businesses with responsive design, data visualization, and custom web applications.</p>
              </div>
              <div className="mission-card">
                <h3>Client-First Innovation</h3>
                <p>Tailored tech solutions built through collaboration, creativity, and continuous improvement.</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img src={TeamImg} alt="Viwebsync Team" className="mission-image" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="section-header">
          <h2 className="section-heading">Core Areas of Expertise</h2>
          <p className="section-description">A dual focus that spans digital innovation and embedded excellence</p>
        </div>
        <div className="expertise-grid">
          <div className="expertise-card">
            <img src={LabVIEWImg} alt="LabVIEW Expertise" className="expertise-image" />
            <div className="expertise-content">
              <h3>LabVIEW & Embedded Systems</h3>
              <ul>
                <li>Data Acquisition & Real-time Control</li>
                <li>Hardware-in-the-Loop (HIL) Simulations</li>
                <li>Test Automation & Avionics Validation</li>
                <li>cRIO, PXI, FPGA-based system design</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <img src={WebImg} alt="Web Solutions" className="expertise-image" />
            <div className="expertise-content">
              <h3>Web Development & Design</h3>
              <ul>
                <li>Custom Web Apps (React, Node.js)</li>
                <li>Data Dashboards & Visualization</li>
                <li>3D & Mobile-first Web Experiences</li>
                <li>DevOps & Cloud Deployment (AWS, Vercel)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2 className="section-heading">Meet Our Founders</h2>
          <p className="section-description">Leadership forged through experience and technical mastery</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Nivash R</h3>
            <p>CEO & Lead Engineer</p>
            <p className="member-bio">
              Aerospace engineer with deep expertise in embedded systems and automation, leading engineering excellence at VI Web Sync.
            </p>
          </div>
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Co-founder Name</h3>
            <p>CTO & Web Architect</p>
            <p className="member-bio">
              Full-stack expert passionate about crafting scalable, performant, and elegant digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2 className="section-heading">What We Stand For</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>Pioneering advanced solutions across industries and platforms</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>Rigorous testing, refined code, and reliable performance in every project</p>
          </div>
          <div className="value-card">
            <h3>Agility</h3>
            <p>Adapting fast to new tech and client needs with flexible methodologies</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Let’s Build Your Next Big Thing</h2>
          <p>Be it aerospace-grade automation or next-gen web experiences—we’re ready to partner with you.</p>
          <a href="/connect" className="cta-button">Connect with Us</a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
