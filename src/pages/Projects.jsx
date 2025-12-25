import React from 'react';
import { Link } from 'react-router-dom';

const PROJECTS_DATA = [
  {
    name: 'custom_ghz',
    url: 'https://github.com/LikhithST/custom_ghz',
    description: 'Modified ghz tool (Go) to capture custom metrics for black box testing.',
  },
  {
    name: 'Observability_UI',
    url: 'https://github.com/LikhithST/Observability_UI',
    description: 'A UI for visualizing observability data from various sources.',
  },
  {
    name: 'wasm-game-of-life',
    url: 'https://github.com/LikhithST/wasm-game-of-life',
    description: "Conway's Game of Life implemented in Rust and WebAssembly.",
  },
];

const Projects = () => {
  return (
    <main className="main-content">
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          Projects
        </h2>
      </header>
      <div style={{ marginTop: '1.5rem' }}>
        {PROJECTS_DATA.map((project) => (
          <article key={project.name} className="post-item">
            <h3 className="post-title">
              <Link to={`/projects/${project.name}`}>{project.name}</Link>
            </h3>
            <p>
              {project.description}{' '}
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem' }}>(GitHub)</a>
            </p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Projects;