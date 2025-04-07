import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, faIndustry, faChartBar, 
  faShieldAlt, faCar, faMicrochip, faNetworkWired,
  faSatelliteDish, faRobot, faServer, faCode, faLaptopCode
} from '@fortawesome/free-solid-svg-icons';

import TestSolutionsImage from '../assets/test-automation.jpg';
import EmbeddedSystemsImage from '../assets/embedded-systems.png';
import WebApplicationsImage from '../assets/web-design1.jpg';
import '../styles/Home.css';

const Home = () => {
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expandedCard, setExpandedCard] = useState(null);

  const [metrics, setMetrics] = useState({
    yearsOfOperation: 0,
    defenseProjects: 0,
    clientSatisfaction: 0
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setMetrics({
        yearsOfOperation: 0,
        defenseProjects: 0,
        clientSatisfaction: 0
      });
    }, 1000);
  }, []);

  const handleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <main className="home-container">
      
      {/* Hero Section */}
      <section className="hero relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="hero-subtitle text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Embedded | Web | Test Solutions 
              </span>
            </div>
            <h1 className="hero-title text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Custom Engineering Services by VI Web Sync
            </h1>
            <p className="hero-subtitle text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              From embedded platforms to enterprise web solutions and automated test systems, we deliver precision-built technology for modern industry.
            </p>
            <div className="hero-cta-container">
              <button className="hero-cta">
                <span>Explore Our Services</span>
                <FontAwesomeIcon icon={faRocket} className="hero-cta-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl -bottom-48 -right-48"></div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="industry-expertise">
        <div className="container">
          <h2 className="section-title">What We Specialize In</h2>
          <div className="industry-grid">

            {/* Embedded Systems */}
            <div className="industry-card">
              <div className="industry-image">
                <img src={EmbeddedSystemsImage} alt="Embedded Systems Development" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>Embedded Systems</h3>
                <p className={expandedCard === 'embedded' ? 'expanded' : ''}>
                  {expandedCard === 'embedded' ? (
                    <>We develop real-time embedded applications for industries like automotive, aerospace, and defense. Our services include firmware development, board bring-up, RTOS integration, and custom driver creation for Linux and bare-metal platforms.</>
                  ) : (
                    "Real-time systems for automotive, aerospace, and industrial applications..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('embedded')}>
                  {expandedCard === 'embedded' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Web Applications */}
            <div className="industry-card">
              <div className="industry-image">
                <img src={WebApplicationsImage} alt="Web Applications" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>Web Application Development</h3>
                <p className={expandedCard === 'webapps' ? 'expanded' : ''}>
                  {expandedCard === 'webapps' ? (
                    <>We build high-performance, scalable web platforms with a focus on enterprise functionality and intuitive UX. Our stack includes React, Node.js, MongoDB, and cloud-native services for real-time data processing, dashboards, and automation portals.</>
                  ) : (
                    "Modern web platforms for enterprise, automation, and control systems..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('webapps')}>
                  {expandedCard === 'webapps' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Test Solutions */}
            <div className="industry-card">
              <div className="industry-image">
                <img src={TestSolutionsImage} alt="Automated Test Systems" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>Automated Test Systems</h3>
                <p className={expandedCard === 'test' ? 'expanded' : ''}>
                  {expandedCard === 'test' ? (
                    <>We design end-to-end test and validation systems tailored to defense, aerospace, and electronics manufacturing. Our ATE solutions feature PXI/LXI modular instrumentation, data acquisition, signal simulation, and comprehensive software frameworks.</>
                  ) : (
                    "End-to-end test systems for validation, simulation, and production QA..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('test')}>
                  {expandedCard === 'test' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <div className="container">
          <h2 className="section-title">Technical Services We Offer</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <FontAwesomeIcon icon={faMicrochip} className="solution-icon" />
              <h3>Embedded Firmware</h3>
              <p>Custom microcontroller and SoC-based firmware with real-time performance.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faLaptopCode} className="solution-icon" />
              <h3>Web Development</h3>
              <p>Full-stack solutions with React, Node.js, GraphQL, and RESTful services.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faSatelliteDish} className="solution-icon" />
              <h3>Signal Simulation</h3>
              <p>RF, digital, and analog signal generation for hardware-in-the-loop testing.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faRobot} className="solution-icon" />
              <h3>Test Automation</h3>
              <p>Custom automation frameworks for electronics validation and QA workflows.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faServer} className="solution-icon" />
              <h3>Data Acquisition</h3>
              <p>DAQ systems with real-time analysis and high-throughput data pipelines.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faShieldAlt} className="solution-icon" />
              <h3>Secure Systems</h3>
              <p>Rugged and secure designs for mission-critical applications in defense sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
<section className="metrics" ref={metricsRef}>
        <div className="container">
                <h2 className="section-title">Our Track Record</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <FontAwesomeIcon icon={faIndustry} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.yearsOfOperation} duration={2} className="metric-number" />}
              <p className="metric-label">Years in Engineering</p>
            </div>
            <div className="metric-card">
              <FontAwesomeIcon icon={faNetworkWired} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.defenseProjects} duration={2} className="metric-number" />}
              <p className="metric-label">Projects Delivered</p>
            </div>
            <div className="metric-card">
              <FontAwesomeIcon icon={faChartBar} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.clientSatisfaction} duration={2} suffix="%" className="metric-number" />}
              <p className="metric-label">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>We partner with you from design to deployment. Let’s build something powerful together.</p>
          <button className="cta-button primary">Contact Our Experts</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
