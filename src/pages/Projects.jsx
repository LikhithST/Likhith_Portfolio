import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('starred_projects');
    const now = Date.now();
    const CACHE_DURATION = 1 * 60 * 1000; // 1 hour

    if (saved) {
      try {
        const { data, timestamp } = JSON.parse(saved);
        if (data && timestamp && now - timestamp < CACHE_DURATION) {
          setProjects(data);
          return;
        }
      } catch (e) {
        // Ignore errors, proceed to fetch
      }
    }

    fetch('https://api.github.com/users/LikhithST/starred')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const projectList = data
            .filter((repo) => repo.owner.login === 'LikhithST')
            .map((repo) => ({
              name: repo.name,
              url: repo.html_url,
              description: repo.description,
            }));
          setProjects(projectList);
          localStorage.setItem('starred_projects', JSON.stringify({
            data: projectList,
            timestamp: Date.now(),
          }));
        }
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <main className="main-content">
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          Projects
        </h2>
      </header>
      <div style={{ marginTop: '1.5rem' }}>
        {projects.map((project) => (
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