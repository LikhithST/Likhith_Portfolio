import React from 'react';

// Mock Data to simulate the blog feed
const POSTS = [
  {
    id: 1,
    date: 'Oct 24, 2023',
    title: 'The Strategic Independent',
    excerpt: 'Notes on consulting, strategy, and the independent path...'
  },
  {
    id: 2,
    date: 'Sep 12, 2023',
    title: 'Digital Gardens and Wikis',
    excerpt: 'Why we need to move away from streams and back to gardens.'
  },
  {
    id: 3,
    date: 'Aug 05, 2023',
    title: 'Small b blogging',
    excerpt: 'Writing for a small audience vs the algorithm.'
  },
  {
    id: 4,
    date: 'Jul 22, 2023',
    title: 'Networked thought',
    excerpt: 'How linking your thinking creates value over time.'
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
              <a href="#">{post.title}</a>
            </h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>

      <footer style={{ marginTop: '3rem', padding: '1rem', border: '1px dashed #000' }}>
        <strong>Note:</strong> This is a React clone demonstrating the layout structure.
      </footer>
    </main>
  );
};

export default Home;