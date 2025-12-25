import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import mermaid from 'mermaid';
import GameOfLife from '../components/GameOfLife';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
});

const Mermaid = ({ chart }) => {
  const [svg, setSvg] = useState('');

  useEffect(() => {
    const renderChart = async () => {
      try {
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
  'wasm-game-of-life': GameOfLife,
};

const ProjectPage = () => {
  const { projectName } = useParams();
  const ProjectComponent = PROJECT_COMPONENTS[projectName];
  const [readmeContent, setReadmeContent] = useState('');
  const [baseRawUrl, setBaseRawUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReadme = async () => {
      setIsLoading(true);
      setError(null);
      const mainUrl = `https://raw.githubusercontent.com/LikhithST/${projectName}/main`;
      const masterUrl = `https://raw.githubusercontent.com/LikhithST/${projectName}/master`;

      try {
        let response = await fetch(`${mainUrl}/README.md`);
        if (response.ok) {
          setBaseRawUrl(mainUrl);
        } else {
          response = await fetch(`${masterUrl}/README.md`);
          if (response.ok) {
            setBaseRawUrl(masterUrl);
          } else {
            throw new Error(`README.md not found in 'main' or 'master' branch.`);
          }
        }
        const text = await response.text();
        setReadmeContent(text);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch README:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReadme();
  }, [projectName]);

  return (
    <main className="main-content">
      <style>{`
        .markdown-wrapper {
          max-width: 1000px;
        }
        @media (max-width: 768px) {
          .markdown-wrapper {
            max-width: 250px;
          }
        }
      `}</style>
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          <Link to="/projects">/ Projects</Link> / {projectName}
        </h2>
      </header>
      {ProjectComponent && (
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
          <ProjectComponent />
        </div>
      )}
      <div className="markdown-body markdown-wrapper" style={{ marginTop: '1.5rem', overflowX: 'auto' }}>
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
              img: ({node, ...props}) => <img {...props} style={{ maxWidth: '100%', height: 'auto' }} />,
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                if (!inline && match && match[1] === 'mermaid') {
                  return <Mermaid chart={String(children).replace(/\n$/, '')} />
                }
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
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