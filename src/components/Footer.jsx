import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '1.5rem', borderTop: '1px solid #000', marginTop: 'auto' }}>
      <small>&copy; {new Date().getFullYear()} Tom Critchlow Clone. Built with React & Vite.</small>
    </footer>
  );
};

export default Footer;