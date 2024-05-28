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

/* references and learning */

// React help

// https://www.w3schools.com/react/default.asp
// https://www.geeksforgeeks.org/reactjs-router/
// https://luqmanshaban.medium.com/react-router-a-step-by-step-guide-4c5ec964d2e9
// https://hygraph.com/blog/routing-in-react
// https://www.w3schools.com/react/react_usestate.asp
// https://www.w3schools.com/react/react_usecontext.asp
// https://reactrouter.com/en/main/components/link
// https://v5.reactrouter.com/web/guides/quick-start
// https://www.freecodecamp.org/news/react-router-tutorial/
// https://www.telerik.com/blogs/react-basics-how-to-use-react-router-v6
// https://react.dev/reference/react/useContext
// https://react.dev/reference/react/createContext
// https://react.dev/reference/react/useState
// https://react.dev/learn
// https://www.openai.com

// csss and styling

// https://www.w3schools.com/react/react_css.asp
// https://reactjs.org/docs/animation.html
// https://www.react-reveal.com/
// https://reactcommunity.org/react-transition-group/
// https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
// https://www.w3schools.com/howto/howto_css_shake_image.asp
// https://codepen.io/anon/pen/jWmzyZ

// handling events

// https://www.w3schools.com/react/react_events.asp