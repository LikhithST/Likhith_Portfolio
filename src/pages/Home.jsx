import React from 'react';
import { Link } from 'react-router-dom';

// Mock Data to simulate the blog feed
const POSTS = [
  {
    id: 'portfolio-article',
    date: 'Jan 07, 2026',
    title: 'Automating My Portfolio with GitHub',
    excerpt: 'How I built a self-updating portfolio that syncs directly with my code repositories.',
    path: '/article/portfolio'
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
    <main className="main-content">
      <header>
        <h2 style={{ borderBottom: '1px solid #000', paddingBottom: '0.5rem' }}>
          Recent Notes
        </h2>
      </header>
      
      <div className="feed-list">
        {POSTS.map((post) => (
          <article key={post.id} className="post-item">
            <span className="post-date">{post.date}</span>
            <h3 className="post-title">
              {post.path ? (
                <Link to={post.path}>{post.title}</Link>
              ) : (
                <a href="#">{post.title}</a>
              )}
            </h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Home;