import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Pathfinder from '../components/Pathfinder';
import projectsData from '../data/projects.json';
import '../enterprise.css';



const Mermaid = ({ chart }) => {
  const [svg, setSvg] = useState('');

  useEffect(() => {
    const renderChart = async () => {
      try {
        // Dynamically import mermaid only when needed
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({ startOnLoad: false, theme: 'default' });
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
      } catch (err) {
        console.error('Failed to render mermaid chart', err);
      }
    };
    renderChart();
  }, [chart]);

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

const PROJECT_COMPONENTS = {
  'path-finder': Pathfinder
};

const ProjectPage = () => {
  const { projectName } = useParams();
  const ProjectComponent = PROJECT_COMPONENTS[projectName];
  const [readmeContent, setReadmeContent] = useState('');
  const [baseRawUrl, setBaseRawUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const project = projectsData.find(p => p.name === projectName);

    if (project) {
      setReadmeContent(project.readme || '*No README provided for this project.*');
      setBaseRawUrl(`https://raw.githubusercontent.com/LikhithST/${projectName}/${project.default_branch || 'main'}`);
    } else {
      setError(`Project '${projectName}' not found in configuration.`);
    }
    setIsLoading(false);
  }, [projectName]);

  return (
    <main className="main-content enterprise-main">
      <style>{`
        .markdown-wrapper {
          max-width: 1000px;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        .markdown-wrapper * {
          box-sizing: border-box;
        }
        .markdown-wrapper img {
          max-width: 100% !important;
          height: auto !important;
        }
        .markdown-wrapper pre, .markdown-wrapper table {
          max-width: 100%;
          overflow-x: auto;
        }
        @media (max-width: 768px) {
          .markdown-wrapper {
            max-width: 250px;
          }
          .markdown-wrapper img {
            display: block;
            margin: 0.5rem 0;
          }
          .markdown-wrapper a, .markdown-wrapper code:not(pre code) {
            word-break: break-all;
          }
        }
      `}</style>
      <header>
        <h2 className="enterprise-heading">
          <Link to="/projects" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Projects</Link> 
          <span style={{ color: 'var(--text-tertiary)', margin: '0 0.5rem' }}>/</span> 
          {projectName}
        </h2>
      </header>
      {ProjectComponent && (
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
          <ProjectComponent />
        </div>        
      )}
      <div className="markdown-body markdown-wrapper" style={{ marginTop: '1.5rem' }}>
        {isLoading && <p>Loading README...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && (
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            urlTransform={(url) => {
              if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#') || url.startsWith('mailto:')) return url;
              const cleanUrl = url.startsWith('./') ? url.slice(2) : url.startsWith('/') ? url.slice(1) : url;
              return `${baseRawUrl}/${cleanUrl}`;
            }}
            components={{
              img: ({node, src, ...props}) => {
                let finalSrc = src;
                if (src && !src.startsWith('http') && !src.startsWith('//') && !src.startsWith('data:') && !src.startsWith('mailto:')) {
                  const cleanUrl = src.startsWith('./') ? src.slice(2) : src.startsWith('/') ? src.slice(1) : src;
                  finalSrc = `${baseRawUrl}/${cleanUrl}`;
                }
                return <img src={finalSrc} {...props} style={{ maxWidth: '100%', height: 'auto' }} />;
              },
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');

                if (inline || !match) {
                  // Render inline code blocks or blocks without a language without syntax highlighting.
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }

                if (match[1] === 'mermaid') {
                  return <Mermaid chart={String(children).replace(/\n$/, '')} />;
                }

                return (
                  <SyntaxHighlighter
                    {...props}
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="pre"
                    wrapLongLines={true}
                    customStyle={{ maxWidth: '100%', overflowX: 'auto' }}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                );
              }
            }}
          >
            {readmeContent}
          </ReactMarkdown>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;