import React from 'react';
import styles from '../styles/Home.module.css';
import tree1 from '../resources/tree1.webp'; 
import tree2 from '../resources/tree2.webp'; 

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>🌳 Tree Life in South Africa</h1>
      <br />
      <p>South Africa is home to a diverse range of tree species, each contributing to the beauty and ecological richness of the region. My goal for this site, in addition to setting up a solid foundation for my final exam submission, was to explore and celebrate these magnificent trees and highlight their importance in our ecosystem and culture, as I felt that after looking around, I do not really pay any mind to all the green around me and instead take it for granted.</p>
      <section className={styles.section}>
        <h2>Why Trees Matter</h2>
        <p>Trees play a crucial role in maintaining the ecological balance. They provide oxygen, improve air quality, conserve water, preserve soil, and support wildlife. In South Africa, trees also hold cultural significance, featuring prominently in local traditions and folklore.</p>
        <img src={tree1} alt="A beautiful tree in South Africa" className={styles.image} />
      </section>

      <section className={styles.section}>
        <h2>Iconic Trees of South Africa</h2>
        <p>South Africa boasts a variety of iconic tree species, including:</p>
        <ul>
          <li><strong>Baobab:</strong> Known as the "Tree of Life", the Baobab is famous for its massive trunk and longevity.</li>
          <li><strong>Yellowwood:</strong> Revered as the national tree, Yellowwoods are ancient trees that can live for hundreds of years.</li>
          <li><strong>Marula:</strong> Valued for its fruit, which is used to make the popular Amarula liqueur, and its cultural significance in various African traditions.</li>
        </ul>
        <img src={tree2} alt="Another beautiful tree in South Africa" className={styles.image} />
      </section>

      <section className={styles.section}>
        <h2>Getting Involved</h2>
        <p>This site is my only my first step in really appreciating the greens, though I figure there are ways we could all aim to support that which supports us, namely:</p>
        <ul>
          <li>Planting a tree in your community.</li>
          <li>Participating in conservation efforts to protect endangered tree species.</li>
          <li>Educating others about the importance of trees and how they can help.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
