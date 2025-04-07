import React from 'react';
import '../styles/industryServices.css';

import Img1 from '../assets/industrial-control.jpg';
import Img2 from '../assets/data-acquisition.jpg';
import Img3 from '../assets/machine-vision.png';
import Img4 from '../assets/communication-vision.jpg';
import Img5 from '../assets/test-automation.jpg';
import Img6 from '../assets/defence-hil.png';
import Img7 from '../assets/electronics-testing.png';
import Img8 from '../assets/telemetry.avif';
import Img9 from '../assets/environment-testing.avif';
import Img10 from '../assets/embedded-systems.png';


const industryServices = [
  {
    id: 1,
    title: 'Industrial Control Systems',
    description: 'Expertise in PLC integration, SCADA development, and precise PID control for industrial automation.',
    image: Img1,
  },
  {
    id: 2,
    title: 'Data Acquisition & Logging',
    description: 'Real-time data monitoring, high-speed logging, and condition monitoring for critical systems.',
    image: Img2,
  },
  {
    id: 3,
    title: 'Machine Vision & Robotics',
    description: 'Automated inspection, robotic control, and smart barcode/QR alignment systems with NI Vision.',
    image: Img3,
  },
  {
    id: 4,
    title: 'Communication Protocols',
    description: 'Integration with Modbus, OPC UA, CAN, EtherCAT, and more using NI or 3rd-party hardware.',
    image: Img4,
  },
  {
    id: 5,
    title: 'Test Automation',
    description: 'Automated production testing and end-of-line testing solutions for manufacturing industries.',
    image: Img5,
  },
  {
    id: 6,
    title: 'HIL Simulations for Defence',
    description: 'Real-time Hardware-in-the-Loop simulations for radars, aircraft subsystems, and weapon systems.',
    image: Img6,
  },
  {
    id: 7,
    title: 'Electronics & Avionics Testing',
    description: 'MIL-STD protocol validation, black box recorder analysis, and ARINC 429 integration.',
    image: Img7,
  },
  {
    id: 8,
    title: 'Telemetry & Signal Intelligence',
    description: 'RF acquisition, real-time decoding, and secure communication simulations using NI VST.',
    image: Img8,
  },
  {
    id: 9,
    title: 'Environmental & Vibration Testing',
    description: 'Integration with test chambers and rugged logging systems for thermal, shock, and vibration analysis.',
    image: Img9,
  },
  {
    id: 10,
    title: 'Embedded Systems Development',
    description: 'LabVIEW FPGA, cRIO, and sbRIO based systems for rugged and real-time embedded applications.',
    image: Img10,
  },
 
];

const IndustryServices = React.memo(() => {
  return (
    <div className="industry-services-page">
      <section className="industry-hero">
        <h1 className="hero-title"> LabVIEW and embedded systems development for aerospace, defense, automotive, and oil & gas sectors</h1>
        
      </section>

      <section className="industry-services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {industryServices.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" className="service-img" />
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

      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Technology Expertise</h2>
          <div className="tech-stack-grid">
            <div className="tech-item">
              <h3>Core Tools</h3>
              <p>LabVIEW, TestStand, LabVIEW FPGA, Web Technologies</p>
            </div>
            <div className="tech-item">
              <h3>Hardware Platforms</h3>
              <p>NI PXI, cRIO, sbRIO, myRIO, CompactDAQ</p>
            </div>
            <div className="tech-item">
              <h3>Protocols</h3>
              <p>OPC UA, Modbus, CAN, EtherCAT, RS232/485</p>
            </div>
            <div className="tech-item">
              <h3>Industries Served</h3>
              <p>Aerospace, Defence, Automotive, Oil & Gas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default IndustryServices;