import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioArticle = () => {
  return (
    <main className="main-content">
      <style>{`
        .article-body {
          max-width: 800px;
          line-height: 1.6;
          font-size: 1.05rem;
        }
        .article-body h3 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .article-body h4 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .article-body ul {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .article-body li {
          margin-bottom: 0.5rem;
        }
        .article-body code {
          background: #eee;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
        }
        .article-body pre {
            background: #f4f4f4;
            padding: 1rem;
            border-radius: 4px;
            overflow-x: auto;
            margin-bottom: 1.5rem;
        }
      `}</style>
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          Automating My Portfolio with GitHub
        </h2>
        <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Architecture • Jan 07, 2026
        </div>
      </header>

      <article className="article-body" style={{ marginTop: '2rem' }}>
        <p>
          One of the biggest challenges with personal portfolios is keeping them up to date. 
          Instead of manually updating HTML or React components every time I start a new project or update documentation, 
          I designed this web application to be a dynamic reflection of my GitHub activity.
        </p>

        <h3>The "Source of Truth" Strategy</h3>
        <p>
          The core philosophy is simple: <strong>My GitHub repository is the source of truth.</strong> 
          The portfolio website is just a view layer that fetches and renders that data. 
          This means I can update my portfolio without touching the portfolio's source code or redeploying the application.
        </p>

        <h3>1. Syncing the Projects List</h3>
        <p>
          The <Link to="/projects">Projects</Link> page doesn't have a hardcoded list of items. 
          Instead, it dynamically queries my GitHub profile to retrieve a curated list of repositories.
        </p>
        <p>
          This allows me to manage my portfolio directly from GitHub's interface. By simply flagging specific repositories, they automatically appear on this site. If I decide to archive or hide a project, the change is reflected here instantly without needing to deploy new code.
        </p>

        <h3>2. Dynamic Content Rendering</h3>
        <p>
          Clicking on a project takes you to a detail page that is also generated on-the-fly. 
          Rather than duplicating project descriptions, the application acts as a live window into the repository, retrieving the latest documentation directly from the source.
        </p>

        <p>
            This raw content is then parsed and rendered as HTML. This ensures that:
        </p>
        <ul>
            <li><strong>Documentation is DRY:</strong> I only write documentation once in the repo.</li>
            <li><strong>Instant Updates:</strong> A commit to the <code>README.md</code> on GitHub is immediately reflected on the website upon refresh.</li>
            <li><strong>Rich Content:</strong> Since it supports Markdown, I can include images, code blocks, and diagrams (like Mermaid.js) in my repo, and they render correctly here.</li>
        </ul>

        <h3>Conclusion</h3>
        <p>
            By decoupling the content from the presentation, I've created a low-maintenance system. 
            The website serves as a window into my actual development work, ensuring that visitors always see the most current state of my projects.
        </p>
      </article>
    </main>
  );
};

export default PortfolioArticle;