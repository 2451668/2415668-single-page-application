// 2451668 - Thabang Maleka - WSOA4175A -  single page application
import React from 'react';
// necessary modules for routing functionality
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components used in different routes
import Home from './components/Home';
import Theory from './components/Theory';
import Artwork from './components/Artwork';
import Design from './components/Design';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';

// global styles for the app
import './styles/GlobalStyle.css'; 

function App() {
  return (
    <Router>
      {/* Navbar comp. which remains fixed at the top across all routes */}
      <Navbar />
      
      {/* routes comp. to define the different routes in the app */}
      <Routes>
        {/* route definitions; each route rendering a specific comp. within a PageTransition comp. */}
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/design" element={<PageTransition><Design /></PageTransition>} />
        <Route path="/theory" element={<PageTransition><Theory /></PageTransition>} />
        <Route path="/artwork" element={<PageTransition><Artwork /></PageTransition>} />
      </Routes>
      
      {/* footer comp. likewise remains fixed at the bottom across all routes */}
      <Footer />
    </Router>
  );
}

export default App;

