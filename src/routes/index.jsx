import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Consulting from '../pages/Consulting';
import Library from '../pages/Library';
import Wiki from '../pages/Wiki';
import Projects from '../pages/Projects';
import Contributions from '../pages/Contributions';
import ProjectPage from '../pages/ProjectPage';
import WasmArticle from '../pages/WasmArticle';
import PortfolioArticle from '../pages/PortfolioArticle';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/library" element={<Library />} />
      <Route path="/wiki" element={<Wiki />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectName" element={<ProjectPage />} />
      <Route path="/contributions" element={<Contributions />} />
      <Route path="/article/wasm" element={<WasmArticle />} />
      <Route path="/article/portfolio" element={<PortfolioArticle />} />
    </Routes>
  );
};

export default AppRoutes;