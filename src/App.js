import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Theory from './components/Theory';
import Artwork from './components/Artwork';
import Design from './components/Design';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';
import './styles/GlobalStyle.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/design" element={<PageTransition><Design /></PageTransition>} />
        <Route path="/theory" element={<PageTransition><Theory /></PageTransition>} />
        <Route path="/artwork" element={<PageTransition><Artwork /></PageTransition>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
