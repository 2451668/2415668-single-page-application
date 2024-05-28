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




