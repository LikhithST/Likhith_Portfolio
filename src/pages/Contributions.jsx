import React from 'react';

const Contributions = () => {
  return (
    <main className="main-content">
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          Contributions
        </h2>
      </header>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
        <li style={{ marginBottom: '1rem' }}>
          <div style={{ fontWeight: 'bold' }}>
            <a href="https://github.com/eclipse-kuksa/kuksa-databroker" target="_blank" rel="noopener noreferrer">Eclipse Kuksa Databroker (Rust)</a>
          </div>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>
            Contributed by integrating OpenTelemetry for distributed tracing. Improved system observability and enabled trace analysis across microservices.
          </p>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <div style={{ fontWeight: 'bold' }}>
            <a href="https://github.com/LikhithST/sofdcar-hackathon" target="_blank" rel="noopener noreferrer">SofDCar Hackathon</a>
          </div>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>
            Technical Contributor & Organizer. Developed startup scripts and boilerplate code to streamline project initialization.
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Contributions;