import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import '../enterprise.css';

const Projects = () => {
  const visibleProjects = projectsData.filter(project => project.isVisible);

  return (
    <main className="main-content enterprise-main">
      <header>
        <h2 className="enterprise-heading">Projects</h2>
      </header>
      <div className="enterprise-grid">
        {visibleProjects.map((project) => (
          <article key={project.name} className="enterprise-card">
            <h3 className="enterprise-card-title">
              <Link to={`/projects/${project.name}`}>{project.name}</Link>
            </h3>
            <p className="enterprise-card-excerpt">
              {project.description}
            </p>
            <a 
              href={project.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="enterprise-card-readmore"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              title="View Source on GitHub"
            >
              <svg aria-hidden="true" focusable="false" className="octicon octicon-repo" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style={{ verticalAlign: 'text-bottom' }}><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg>
              View Source
            </a>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Projects;