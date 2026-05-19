import React from 'react';
import { Link } from 'react-router-dom';
import '../enterprise.css';

// Mock Data to simulate the blog feed
const POSTS = [
  {
    id: 'docker-aws-traffic',
    date: 'May 19, 2026',
    title: 'When Docker Eats Your AWS Traffic',
    excerpt: 'Why your container can\'t reach your VPC and why the problem has nothing to do with AWS',
    path: 'https://medium.com/@tolikhith/when-docker-eats-your-aws-traffic-b645c99c75ad'
  },
  {
    id: 'wasm-article',
    date: 'Jan 06, 2026',
    title: 'WebAssembly in Action: Rust & Go',
    excerpt: 'Deep dive into how the Game of Life and Pathfinder projects leverage Wasm.',
    path: '/article/wasm'
  }
];

const Home = () => {
  return (
    <main className="main-content enterprise-main">
      <header>
        <h2 className="enterprise-heading">Latest Insights</h2>
      </header>
      
      <div className="feed-list enterprise-grid">
        {POSTS.map((post) => {
          const isExternal = post.path.startsWith('http');
          
          const CardContent = (
            <>
              <span className="enterprise-card-date">{post.date}</span>
              <h3 className="enterprise-card-title">{post.title}</h3>
              <p className="enterprise-card-excerpt">{post.excerpt}</p>
              <span className="enterprise-card-readmore">
                Read article {isExternal ? '↗' : '→'}
              </span>
            </>
          );

          // Render an <a> tag for external links, and <Link> for internal routes
          return isExternal ? (
            <a 
              key={post.id} 
              href={post.path} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="enterprise-card"
            >
              {CardContent}
            </a>
          ) : (
            <Link 
              key={post.id} 
              to={post.path} 
              className="enterprise-card"
            >
              {CardContent}
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;