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
    <nav className={styles.navbar}>
      <div
        className={`${styles.brand} ${isAnimating ? styles.jiggle : ''}`}
        onClick={handleLogoClick}
      >
        Trees!
      </div>
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
        <NavLink to="/design" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Design</NavLink>
        <NavLink to="/theory" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Theory</NavLink>
        <NavLink to="/artwork" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Art</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
