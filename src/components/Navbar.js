import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>React</div>
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
        <NavLink to="/theory" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Theory</NavLink>
        <NavLink to="/artwork" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Art</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
