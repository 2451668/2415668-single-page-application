import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.about}>
          <h3>About Me</h3>
          <p>I am a fourth year undergraduate enrolled in the Digital Art & Game Design programme at the University of Witwatersrand in central Johannesburg. This website serves as my final exam submission for Interactive Media : WSOA4175A. </p>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>Email: 2451668@students.wits.ac.za</p>
          <p>Phone: (+27) 12-345-6789</p>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 Thabang Maleka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
