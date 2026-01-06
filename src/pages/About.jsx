import React from 'react';

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
    period: 'July 2025 – Present',
    desc: [
      'Engineered a fault injection framework for cloud nodes to analyze how resource consumption affects the simulations running within them.',
      'Automated image creation with AWS Image Builder.',
      'Deployed cross-platform observability exporters (Node, Process, Windows, custom eBPF) as Kubernetes DaemonSets, utilizing kubernetes_sd_configs for dynamic discovery and label-based controls to manage resource overhead.'
    ],
    tags: ['Fault Injection', 'Kubernetes', 'AWS Image Builder', 'eBPF', 'Observability']
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
    tags: ['V2C', 'Azure', 'WebRTC', 'Low-latency', 'Networking']
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
    tags: ['MERN Stack', 'AWS', 'Azure Synapse', 'ETL', 'Serverless']
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
          font-weight: bold;
          margin-bottom: 0.75rem;
          border-bottom: 2px solid #eee;
          padding-bottom: 0.25rem;
        }
        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .skill-list li {
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
          color: #333;
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
        <p style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Software Engineer specializing in Cloud Native technologies and Observability frameworks. Building scalable solutions.
        </p>

        <section className="skills-section">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
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
              {Array.isArray(exp.desc) ? (
                <ul style={{ margin: '0 0 0 1.2rem', padding: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {exp.desc.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>{exp.desc}</p>
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
    </main>
  );
};

export default About;