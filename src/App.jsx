import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

// 4. Main Layout
function App() {
  return (
    <BrowserRouter basename="/Likhith_Portfolio">
      <div className="layout">
        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* <Header /> */}
          <AppRoutes />
          {/* <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
