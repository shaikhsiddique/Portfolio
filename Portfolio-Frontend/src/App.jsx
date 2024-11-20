import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

import Contact from './pages/Contact';
import About from './pages/About';
import  Work  from './pages/Work';
import Frontend_Project from './pages/Projects/Frontend-Project'
import Full_Stack_Project from './pages/Projects/Full-Stack-Project';
import Mobile_Project from './pages/Projects/Mobile-Project';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/frontend-project' element={<Frontend_Project/>}/>
        <Route path='/full-stack-project' element={<Full_Stack_Project/>}/>
        <Route path='/mobile-project' element={<Mobile_Project/>}/>
      </Routes>
    </Router>
  );
}

export default App;
