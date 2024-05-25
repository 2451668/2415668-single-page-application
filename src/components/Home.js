import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>My SPA</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <nav>
        <Link to="/theory" className={styles.styledLink}>Theory</Link>
        <br />
        <Link to="/artwork" className={styles.styledLink}>Artwork</Link>
      </nav>
    </div>
  );
};

export default Home;
