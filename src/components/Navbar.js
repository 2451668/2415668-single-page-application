import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLogoClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); 
    }
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <div
          className={`${styles.brand} ${isAnimating ? styles.jiggle : ''}`}
          onClick={handleLogoClick}
        >
          React
        </div>
        <div className={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
          <NavLink to="/design" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Design</NavLink>
          <NavLink to="/theory" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Theory</NavLink>
          <NavLink to="/art" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Art</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>About</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
