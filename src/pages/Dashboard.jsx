import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

const Dashboard = () => {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [draggedItem, setDraggedItem] = useState(null);
  const [showJson, setShowJson] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // On initial load, use the local projects.json
    setRepos(projectsData);
  }, []);

  const handleRefreshFromGitHub = async () => {
    if (!confirm('This will fetch the latest repository data from GitHub. Your current selections and order will be preserved. Continue?')) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/LikhithST/repos?per_page=100&sort=updated');
      if (!response.ok) throw new Error('Network response was not ok');
      const githubData = await response.json();
      
      // Fetch all data directly from GitHub, including READMEs
      const allRepos = await Promise.all(githubData.map(async repo => {
        let readme;
        try {
          const readmeRes = await fetch(`https://raw.githubusercontent.com/LikhithST/${repo.name}/${repo.default_branch || 'main'}/README.md`);
          readme = readmeRes.ok ? await readmeRes.text() : undefined;
        } catch (err) {
          console.error(`Failed to fetch README for ${repo.name}:`, err);
          readme = undefined;
        }
        
        const existingRepo = repos.find(r => r.name === repo.name);

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          default_branch: repo.default_branch,
          isVisible: existingRepo ? existingRepo.isVisible : false,
          ...(readme !== undefined && { readme })
        };
      }));
      
      // Preserve the current sorting order
      allRepos.sort((a, b) => {
        const indexA = repos.findIndex(r => r.name === a.name);
        const indexB = repos.findIndex(r => r.name === b.name);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return 0;
      });

      setRepos(allRepos);
    } catch (error) {
      console.error('Error fetching from GitHub API:', error);
      alert('Failed to refresh from GitHub. Check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = (repoName) => {
    setRepos(prevRepos => prevRepos.map(repo => 
      repo.name === repoName ? { ...repo, isVisible: !repo.isVisible } : repo
    ));
  };

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnter = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;

    setRepos(prev => {
      const newRepos = [...prev];
      const item = newRepos[draggedItem];
      newRepos.splice(draggedItem, 1);
      newRepos.splice(index, 0, item);
      return newRepos;
    });
    setDraggedItem(index);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleSaveConfig = () => {
    // Create a downloadable JSON file with your new selections
    const dataStr = JSON.stringify(repos, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert("Downloaded projects.json!\n\nMove it to src/data/projects.json to replace the old file, then commit and push to GitHub.");
  };

  const filteredRepos = repos.filter(repo => 
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="main-content">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #000', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h2>Admin Dashboard: Sync Projects</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={handleRefreshFromGitHub}
            disabled={isLoading}
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', opacity: isLoading ? 0.5 : 1 }}
          >
            {isLoading ? 'Refreshing...' : 'Refresh from GitHub'}
          </button>
          <button 
            onClick={() => setShowJson(!showJson)} 
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', background: '#e0e0e0', color: '#000', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            {showJson ? 'Hide JSON' : 'View JSON'}
          </button>
          <button 
            onClick={handleSaveConfig} 
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}
          >
            Download Configuration
          </button>
        </div>
      </header>

      {showJson && (
        <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px', border: '1px solid #ddd' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>projects.json config</h3>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(JSON.stringify(repos, null, 2));
                alert('Copied to clipboard!');
              }}
              style={{ padding: '0.25rem 0.75rem', cursor: 'pointer', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}
            >
              Copy to Clipboard
            </button>
          </div>
          <textarea 
            readOnly 
            value={JSON.stringify(repos, null, 2)} 
            style={{ width: '100%', height: '300px', fontFamily: 'monospace', padding: '0.75rem', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff', resize: 'vertical' }}
          />
        </div>
      )}

      <div style={{ marginBottom: '1.5rem' }}>
        <input 
          type="text" 
          placeholder="Search repositories by name or description..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredRepos.map(repo => {
          const trueIndex = repos.findIndex(r => r.name === repo.name);
          const isSearching = searchQuery.length > 0;

          return (
            <div 
              key={repo.id} 
              draggable={!isSearching}
              onDragStart={(e) => handleDragStart(e, trueIndex)}
              onDragEnter={(e) => handleDragEnter(e, trueIndex)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
              style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                padding: '1rem', border: '1px solid #ccc', borderRadius: '4px',
                cursor: isSearching ? 'default' : 'grab',
                opacity: draggedItem === trueIndex ? 0.5 : 1
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span title="Drag to reorder" style={{ color: '#a0a0a0', fontSize: '1.2rem', paddingRight: '0.5rem', userSelect: 'none' }}>
                  ☰
                </span>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>{repo.name}</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{repo.description || "No description provided."}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={repo.isVisible || false} 
                    onChange={() => handleToggle(repo.name)}
                  />
                  Show in Portfolio
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Dashboard;