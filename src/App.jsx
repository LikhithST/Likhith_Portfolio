import React from 'react';
import { HashRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';
import AnalyticsTracker from './components/AnalyticsTracker';

// 4. Main Layout
function App() {
  return (
    <HashRouter>
      <AnalyticsTracker />
      <div className="layout">
        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* <Header /> */}
          <AppRoutes />
          {/* <Footer /> */}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
