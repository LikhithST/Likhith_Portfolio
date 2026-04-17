import fs from 'fs/promises';
import path from 'path';

const USERNAME = 'LikhithST';
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/projects.json');

async function pullProjects() {
  console.log(`Fetching repositories for ${USERNAME}...`);
  
  // 1. Fetch all repositories
  const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`);
  const repos = await res.json();

  // 2. Load existing local data to preserve the "isVisible" selections
  let existingData = [];
  try {
    const fileContent = await fs.readFile(OUTPUT_FILE, 'utf-8');
    existingData = JSON.parse(fileContent);
  } catch (err) {
    console.log('No existing projects.json found or file is empty. Creating a new one.');
  }
  const existingMap = new Map(existingData.map(p => [p.name, p]));
  const orderMap = new Map(existingData.map((p, i) => [p.name, i]));

  const updatedProjects = [];

  // 3. Process each repo and fetch its README
  for (const repo of repos) {
    const existing = existingMap.get(repo.name) || {};
    const isVisible = existing.isVisible || false; // Preserve visibility, default to false
    
    console.log(`Processing ${repo.name}...`);
    let readme = '';
    
    // Only process resources for repositories marked to be visible
    if (isVisible) {
      let defaultBranch = repo.default_branch || 'main';
      let readmeRes = await fetch(`https://raw.githubusercontent.com/${USERNAME}/${repo.name}/${defaultBranch}/README.md`);
      if (!readmeRes.ok && defaultBranch === 'main') {
        readmeRes = await fetch(`https://raw.githubusercontent.com/${USERNAME}/${repo.name}/master/README.md`);
        if (readmeRes.ok) defaultBranch = 'master';
      }
      if (readmeRes.ok) {
        readme = await readmeRes.text();
      }
    }
    
    updatedProjects.push({
      ...repo, // Keep all standard GitHub repo properties
      readme: readme,
      isVisible: isVisible
    });
  }

  // 4. Restore the previous manual order (new projects go to the bottom)
  updatedProjects.sort((a, b) => {
    const orderA = orderMap.has(a.name) ? orderMap.get(a.name) : 999999;
    const orderB = orderMap.has(b.name) ? orderMap.get(b.name) : 999999;
    return orderA - orderB;
  });

  // 5. Save to src/data/projects.json
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(updatedProjects, null, 2));
  console.log(`\n✅ Successfully saved ${updatedProjects.length} projects to ${OUTPUT_FILE}`);
}

pullProjects();