import React from 'react';
import '../styles/Aerospace.css'; // Reusing the same CSS (adjust if needed)
import WebImg1 from '../assets/web-design1.jpg';
import WebImg2 from '../assets/web-dev2.jpg';
import WebImg3 from '../assets/web-dashboard.jpg';
import WebImg4 from '../assets/data-viz.jpg';
import WebImg5 from '../assets/web-3d.jpg';
import WebImg6 from '../assets/web-mobile.jpg';

// Web Design & Development Services Data
const webServices = [
  {
    id: 1,
    title: "Responsive Web Design",
    description: "Modern, mobile-friendly websites with clean UI/UX design.",
    image: WebImg1,
  },
  {
    id: 2,
    title: "Custom Web Development",
    description: "Tailored web apps using React, Node.js, and modern frameworks.",
    image: WebImg2,
  },
  {
    id: 3,
    title: "Data Dashboards",
    description: "Interactive dashboards for analytics and business intelligence.",
    image: WebImg3,
  },
  {
    id: 4,
    title: "Data Visualization",
    description: "Beautiful charts, graphs, and interactive data displays.",
    image: WebImg4,
  },
  {
    id: 5,
    title: "3D & WebGL Experiences",
    description: "Immersive 3D websites using Three.js and WebGL.",
    image: WebImg5,
  },
  {
    id: 6,
    title: "Mobile-First Development",
    description: "Progressive Web Apps (PWAs) for seamless mobile experiences.",
    image: WebImg6,
  },
];

// Web Services Component
const WebServices = React.memo(() => {
  return (
    <div className="web-services-page">
      {/* ✅ Hero Section */}
      <section className="web-hero">
        <h1 className="hero-title">Web Design & Development</h1>
        
      </section>

      {/* ✅ Services Grid Section */}
      <section className="web-services">
        <div className="container">
          <h2 className="section-title">Our Web Services</h2>
          <div className="services-grid">
            {webServices.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-image">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="service-img"
                  />
                </div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button className="service-cta">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Our Tech Stack</h2>
          <div className="tech-stack-grid">
            <div className="tech-item">
              <h3>Frontend</h3>
              <p>React, Next.js, Vue, TailwindCSS</p>
            </div>
            <div className="tech-item">
              <h3>Backend</h3>
              <p>Node.js, Python, Express, Firebase</p>
            </div>
            <div className="tech-item">
              <h3>Database</h3>
              <p>MongoDB, PostgreSQL, GraphQL</p>
            </div>
            <div className="tech-item">
              <h3>Deployment</h3>
              <p>AWS, Vercel, Netlify, Docker</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default WebServices;