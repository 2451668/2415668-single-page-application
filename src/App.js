import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Theory from './components/Theory';
import Artwork from './components/Artwork';
import Design from './components/Design';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design/>} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/art" element={<Artwork />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
