import React, { useState } from 'react';
import '../enterprise.css';

const SKILLS = [
  { category: "Languages", items: ["Go" ,"Rust", "JavaScript", "Python"] },
  // { category: "Web Development", items: ["SQL", "NoSQL", "MERN Stack", "MEAN Stack"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Observability", items: ["eBPF", "OpenTelemetry", "Prometheus", "Grafana"] },
  { category: "Frameworks & Protocols", items: ["ROS", "gRPC", "WebRTC", "Microservices", "Fault Injection"] }
];

const EXPERIENCE = [
  {
    company: 'Robert Bosch M/TEY',
    role: 'Master Thesis: Fault Injection Mechanisms in Virtualized Environments',
    period: 'July 2025 – March 2026',
    desc: [
      'Deployed cross-platform observability exporters (Node, Process, Windows, custom eBPF) as Kubernetes Daemon Sets and utilized kubernetes_sd_configs for dynamic discovery and label-based controls to manage resource overhead.',
      'Developed a full-stack observability suite featuring interactive metrics visualization dashboard with log aggregation and fault Injection.',
      'Engineered a fault injection framework to introduce controlled resource contention and analyzed its impact on vECU simulations using the observability suite.',
      'Implementing USE Method to ease tracking the performance related issues.'
    ],
    tags: ['Go','Docker', 'Kubernetes', 'Prometheus', 'eBPF', 'Fullstack development']
  },
  {
    company: 'Robert Bosch CR',
    role: 'Intern',
    period: 'Feb 2025 – July 2025',
    desc: [
      'Architected low-latency communication strategies for Vehicle-to-Cloud (V2C) teleoperation, evaluating Azure infrastructure components like Proximity Placement Groups and VNet Peering.',
      'Analyzed Peer-to-Peer network paths across MNOs and ISPs to optimize connectivity in wired and wireless scenarios.',
      'Implemented WebRTC streaming and signaling with SFUs to minimize round-trip latency for camera streams and control signals.'
    ],
    tags: ['V2C', 'Azure', 'WebRTC', 'Scalability', 'VNet Peering', 'Network Optimization']
  },
  {
    company: 'Robert Bosch CR',
    role: 'Work Student',
    period: 'Feb 2024 – Nov 2024',
    desc: [
      'Modified the ghz load testing tool in Go to capture custom metrics for end-to-end latency analysis of kuksa-databroker.',
      'Implemented a comprehensive OpenTelemetry pipeline in Rust to track function spans and propagate trace contexts, integrating Prometheus and Grafana for real-time performance visualization.',
      'Traced network-level latency using eBPF probes on kernel socket events to diagnose microservice message delays.',
      'Developed a multi-platform software framework to deploy vehicular functions across simulation, model, and full-scale ROS vehicles (FlexCAR).'
    ],
    tags: ['Rust', 'Go', 'OpenTelemetry', 'eBPF', 'ROS2', 'Testing']
  },
  {
    company: 'University of Stuttgart',
    role: 'HiWi (Student Research Assistant)',
    period: 'May 2023 – Jan 2024',
    desc: [
      'Developed fault injection and detection mechanisms for the Franka Emika panda arm using time-series analysis of input signals.',
      'Implemented signal processing algorithms in MATLAB Simulink and established communication with the robotic arm via ROS packages.'
    ],
    tags: ['Python', 'ROS2', 'MATLAB', 'Robotics']
  },
  {
    company: 'Enginecal Technology Pvt Ltd',
    role: 'Software Engineer',
    period: 'Jan 2022 – Feb 2023',
    desc: [
      'Designed and maintained a microservices architecture for vehicle data processing, deploying to Azure Kubernetes Service (AKS) and AWS EKS.',
      'Orchestrated CI/CD pipelines to accelerate product delivery and ensure reliable deployments for full-stack applications.'
    ],
    tags: ['DevOps', 'Microservices', 'AKS', 'AWS', 'CI/CD']
  },
  {
    company: 'Ellipsonic India Solutions Pvt Ltd',
    role: 'Software Engineer',
    period: 'Apr 2021 - Jan 2022',
    desc: [
      'Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).',
      'Built a virtual platform for the Ministry of Health, Singapore, utilizing AWS Lambda, SES, and CloudWatch for event-driven automation.',
      'Executed data engineering tasks in Azure Synapse Analytics, implementing ETL pipelines with Azure Data Factory and Spark pools.'
    ],
    tags: ['MERN Stack', 'AWS', 'ETL', 'AWS Lambda']
  }
];

const About = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <main className="main-content enterprise-main">
      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .skills-section {
          margin-bottom: 3rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 2rem;
        }
        .skill-category h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          border-bottom: 2px solid var(--border-subtle);
          padding-bottom: 0.25rem;
          color: var(--ibm-blue);
        }
        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .skill-list li {
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .tag {
          display: inline-block;
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          margin-right: 0.5rem;
          margin-top: 0.5rem;
          background-color: var(--bg-card);
          color: var(--text-secondary);
          font-family: var(--font-enterprise);
        }
      `}</style>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
        <h2 className="enterprise-heading" style={{ marginBottom: 0 }}>About</h2>
        <div className="toggle-container">
          <span className="toggle-label">Resume PDF</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={showPdf}
              onChange={() => setShowPdf(!showPdf)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </header>
      
      {showPdf ? (
        <iframe src="/Likhith_Portfolio/Likhith-Resume.pdf" className="pdf-viewer" title="Resume PDF" />
      ) : (
      <div className="about-content" style={{ marginTop: '1.5rem' }}>
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
          Software Engineer specializing in Cloud Native technologies and Edge-to-Cloud Platforms. Building scalable solutions.
        </p>

        <section className="skills-section">
          <h3 className="enterprise-heading" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Skills
          </h3>
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div key={group.category} className="skill-category">
                <h4>{group.category}</h4>
                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <h3 className="enterprise-heading" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Experience
        </h3>
        
        <div className="timeline">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="enterprise-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>{exp.company}</h4>
                <small className="enterprise-card-date" style={{ marginBottom: 0 }}>{exp.period}</small>
              </div>
              <div style={{ fontWeight: '500', fontSize: '1rem', marginBottom: '1rem', color: 'var(--ibm-blue)' }}>{exp.role}</div>
              {Array.isArray(exp.desc) ? (
                <ul style={{ margin: '0 0 0 1.2rem', padding: 0, fontSize: '1rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                  {exp.desc.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="enterprise-card-excerpt" style={{ margin: 0 }}>{exp.desc}</p>
              )}
              <div style={{ marginTop: '0.5rem' }}>
                {exp.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </main>
  );
};

export default About;