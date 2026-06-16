import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../enterprise.css';

const NAV_LINKS = [
  { label: 'Blogs', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contributions', href: '/contributions' },
  // { label: 'Consulting', href: '/consulting' },
  // { label: 'Library', href: '/library' },
  // { label: 'Wiki', href: '/wiki' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .sidebar {
          font-family: var(--font-enterprise);
          background-color: var(--bg-card);
          color: var(--text-primary);
          border-right: 1px solid var(--border-subtle);
        }

        .profile-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
          box-shadow: var(--fluent-shadow);
        }
        
        .sidebar h1 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }
        
        .sidebar-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-list a {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: block;
        }

        .nav-list a:hover {
          background-color: rgba(15, 98, 254, 0.05);
          color: var(--ibm-blue);
          transform: translateX(4px);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-links a {
          color: var(--text-secondary);
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .social-links a:hover {
          color: var(--ibm-blue);
          transform: translateY(-2px);
        }

        .reading-list {
          margin-top: 2rem;
          border-top: 1px solid var(--border-subtle);
          padding-top: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .reading-list em {
          color: var(--text-primary);
          font-weight: 500;
          font-style: normal;
        }

        .menu-toggle {
          display: none;
        }
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1100;
            background: var(--bg-card);
            color: var(--text-primary);
            border: 1px solid var(--border-subtle);
            border-radius: 4px;
            padding: 0.5rem 0.8rem;
            cursor: pointer;
            font-size: 1.2rem;
            box-shadow: var(--fluent-shadow);
          }
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 280px;
            background: var(--bg-card);
            z-index: 1000;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            border-right: 1px solid var(--border-subtle);
            padding: 2rem 1.5rem;
            overflow-y: auto;
          }
          .sidebar.open {
            transform: translateX(0);
            box-shadow: var(--fluent-shadow-hover);
          }
          .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.4);
            backdrop-filter: blur(2px);
            z-index: 900;
          }
        }
      `}</style>

      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img 
        src="/Likhith_Portfolio/Likhith.jpeg"
        alt="Likhith S T"
        className="profile-img" 
      />
      
      <h1>Likhith S T</h1>
      <p className="sidebar-desc">
        Software engineer passionate about building robust and scalable systems.
      </p>

      <nav>
        <ul className="nav-list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

        <div className="social-links">
          <a href="mailto:likhithsadahallithammegowda@gmail.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/likhith-s-t-220191190" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com/LikhithST" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>

      <div className="reading-list">
        <small>Currently reading: <br/><em>GitOps Cookbook - Natale Vinto & Alex Soto Bueno</em></small>
        <br/><br/>
        <small>Recently read: <br/><em>Container Security - Liz Rice</em></small>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;