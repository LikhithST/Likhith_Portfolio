import React from 'react';
import '../enterprise.css';

const Contributions = () => {
  return (
    <main className="main-content enterprise-main">
      <header>
        <h2 className="enterprise-heading">Contributions</h2>
      </header>
      <div className="enterprise-grid">
        <article className="enterprise-card">
          <h3 className="enterprise-card-title">Eclipse Kuksa Databroker (Rust)</h3>
          <p className="enterprise-card-excerpt">
            Contributed by integrating OpenTelemetry for distributed tracing. Improved system observability and enabled trace analysis across microservices.
          </p>
          <a 
            href="https://github.com/eclipse-kuksa/kuksa-databroker" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="enterprise-card-readmore"
          >
            View Repository ↗
          </a>
        </article>
        
        <article className="enterprise-card">
          <h3 className="enterprise-card-title">SofDCar Hackathon</h3>
          <p className="enterprise-card-excerpt">
            Technical Contributor & Organizer. Developed startup scripts and boilerplate code to streamline project initialization.
          </p>
          <a 
            href="https://github.com/LikhithST/sofdcar-hackathon" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="enterprise-card-readmore"
          >
            View Repository ↗
          </a>
        </article>
      </div>
    </main>
  );
};

export default Contributions;