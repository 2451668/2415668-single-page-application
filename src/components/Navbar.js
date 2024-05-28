import React, { useState } from 'react';
// NavLink from react-router-dom for navigation links
import { NavLink } from 'react-router-dom';
// navbar styling
import styles from '../styles/Navbar.module.css';

// Navbar compo. to handle navigation
const Navbar = () => {
  // useState hook to manage the animation state of the "Tree!""
  const [isAnimating, setIsAnimating] = useState(false);

  // handles the click event and triggers the jiggle animation
  const handleLogoClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      // reset the animation state after some time to prevent spam
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); 
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* jiggle animation when clicked */}
      <div
        className={`${styles.brand} ${isAnimating ? styles.jiggle : ''}`}
        onClick={handleLogoClick}
      >
        Trees!
      </div>
      {/* nav links container */}
      <div className={styles.links}>
        {/* NavLink components for navigation, applying active class if the link is active */}
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
        <NavLink to="/design" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Design</NavLink>
        <NavLink to="/theory" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Theory</NavLink>
        <NavLink to="/artwork" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Art</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

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


