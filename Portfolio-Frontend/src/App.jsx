// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomToastContainer from './components/ToastContainer';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';
import FrontendProject from './pages/Projects/Frontend-Project';
import FullStackProject from './pages/Projects/Full-Stack-Project';
import MobileProject from './pages/Projects/Mobile-Project';

function App() {
  return (
    <Router>
      <CustomToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/frontend-project" element={<FrontendProject />} />
        <Route path="/full-stack-project" element={<FullStackProject />} />
        <Route path="/mobile-project" element={<MobileProject />} />
      </Routes>
    </Router>
  );
}

export default App;
