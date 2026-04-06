import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
  const visibleProjects = projectsData.filter(project => project.isVisible);

  return (
    <main className="main-content">
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          Projects
        </h2>
      </header>
      <div style={{ marginTop: '1.5rem' }}>
        {visibleProjects.map((project) => (
          <article key={project.name} className="post-item">
            <h3 className="post-title">
              <Link to={`/projects/${project.name}`}>{project.name}</Link>
            </h3>
            <p>
              {project.description}{' '}
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem' }}>(GitHub)</a>
            </p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Projects;