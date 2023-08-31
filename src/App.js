import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project4 from './pages/Project4';
import Project3 from './pages/Project3';
import Project2 from './pages/Project2';
import Project1 from './pages/Project1';
import NotFound from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';
import English from './pages/English';
import Intro from './pages/Intro';

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/intro" element={<Intro />}/>
          <Route path="/projet-1" element={<Project1 />}/>
          <Route path="/projet-2" element={<Project2 />}/>
          <Route path="/projet-3" element={<Project3 />}/>
          <Route path="/projet-4" element={<Project4 />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/english" element={<English />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>

  );
};

export default App;
