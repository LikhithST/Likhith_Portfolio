import React from 'react';

const EXPERIENCE = [
  {
    company: 'Robert Bosch M/TEY',
    role: 'Master Thesis: Fault Injection Mechanisms in Virtualized Environments',
    period: 'July 2025 – Present',
    desc: 'Designed and developed a structured framework to inject faults into Functional Mock-up Units (FMUs). Implemented an observability module to monitor internal states and measure resource utilization.',
    tags: ['Fault Injection', 'FMU', 'Observability', 'Research']
  },
  {
    company: 'Robert Bosch CR',
    role: 'Intern',
    period: 'Feb 2025 – July 2025',
    desc: 'Low-latency communication strategies to enable Vehicle-to-Cloud (V2C) teleoperation. Evaluated Microsoft Azure infrastructure and investigated WebRTC for real-time streaming.',
    tags: ['V2C', 'Azure', 'WebRTC', 'Low-latency']
  },
  {
    company: 'Robert Bosch CR',
    role: 'Work Student',
    period: 'Feb 2024 – Nov 2024',
    desc: 'Black box testing of kuksa-databroker using ghz tool. White box testing using OpenTelemetry in Rust. Integrated Prometheus and Grafana for monitoring.',
    tags: ['Rust', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Testing']
  },
  {
    company: 'Enginecal Technology Pvt Ltd',
    role: 'Software Engineer',
    period: 'Jan 2022 – Feb 2023',
    desc: 'Product development focused on DevOps and Full-stack. Developed microservices for vehicle data processing with CI/CD on Azure Kubernetes Service.',
    tags: ['DevOps', 'Full-stack', 'Microservices', 'AKS', 'CI/CD']
  }
];

const About = () => {
  return (
    <main className="main-content">
      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .timeline-item {
        }
        .tag {
          display: inline-block;
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border: 1px solid #000;
          margin-right: 0.5rem;
          margin-top: 0.5rem;
          background-color: #f4f4f4;
          font-family: monospace;
        }
      `}</style>
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          About
        </h2>
      </header>
      
      <div className="about-content" style={{ marginTop: '1.5rem' }}>
        <p style={{ marginBottom: '2rem' }}>
          Hi, I'm Likhith. I'm a software engineer passionate about building robust and scalable systems.
        </p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Experience
        </h3>
        
        <div className="timeline">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold' }}>{exp.company}</h4>
                <small style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#666' }}>{exp.period}</small>
              </div>
              <div style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#444' }}>{exp.role}</div>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                {exp.desc}
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                {exp.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;