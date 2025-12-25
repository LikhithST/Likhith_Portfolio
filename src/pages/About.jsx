import React from 'react';

const About = () => {
  return (
    <main className="main-content">
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          About
        </h2>
      </header>
      
      <div className="about-content" style={{ marginTop: '1.5rem' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Hi, I'm Likhith. I'm a software engineer passionate about building robust and scalable systems.
        </p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', borderBottom: '1px dashed #ccc' }}>
          Experience
        </h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h4 style={{ margin: 0, fontSize: '1rem' }}>Robert Bosch M/TEY</h4>
            <small style={{ color: '#666' }}>July 2025 – Present</small>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Master Thesis: Fault Injection Mechanisms in Virtualized Environments</div>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            Designed and developed a structured framework to inject faults into Functional Mock-up Units (FMUs). Implemented an observability module to monitor internal states and measure resource utilization.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h4 style={{ margin: 0, fontSize: '1rem' }}>Robert Bosch CR</h4>
            <small style={{ color: '#666' }}>Feb 2025 – July 2025</small>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Intern</div>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            Low-latency communication strategies to enable Vehicle-to-Cloud (V2C) teleoperation. Evaluated Microsoft Azure infrastructure and investigated WebRTC for real-time streaming.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h4 style={{ margin: 0, fontSize: '1rem' }}>Robert Bosch CR</h4>
            <small style={{ color: '#666' }}>Feb 2024 – Nov 2024</small>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Work Student</div>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            Black box testing of kuksa-databroker using ghz tool. White box testing using OpenTelemetry in Rust. Integrated Prometheus and Grafana for monitoring.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <h4 style={{ margin: 0, fontSize: '1rem' }}>Enginecal Technology Pvt Ltd</h4>
            <small style={{ color: '#666' }}>Jan 2022 – Feb 2023</small>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Software Engineer</div>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            Product development focused on DevOps and Full-stack. Developed microservices for vehicle data processing with CI/CD on Azure Kubernetes Service.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;