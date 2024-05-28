import React from 'react';
import styles from '../styles/Artwork.module.css';

const Artwork = () => {
  return (
    <div className={styles.container}>
      <h1>🌳 Proposed Internet Artwork</h1>
      
      <section className={styles.section}>
        <h2>Concept</h2>
        <p>For my internet artwork, I'm proposing an interactive/animated tree that visually represents various tree species in South Africa. The opacity of the leaves will correspond to the population ratios of the species, with the greenest leaves representing the most common species and the palest leaves indicating the rarest species. This is an ambitious undertaking for sure, and is definitely subject to some changes when I do the real development, but I believe in this premise for the general concept.</p>
      </section>
      
      <section className={styles.section}>
        <h2>Interactive Features</h2>
        <p>I aim for users to be able to hover over individual leaves to see detailed information about the corresponding tree species. This will serve to provide a little educational content, such as the species' name, conservation status, habitat, and perhaps an interesting fact. This should make the experience both informative and enjoyable.</p>
      </section>
      
      <section className={styles.section}>
        <h2>Implementation Overview</h2>
        <p>How I might implement such an artwork:</p>
        <ol>
          <li><strong>Research and Data Collection:</strong> Gathering data on various tree species in South Africa, including their population ratios, conservation status, and other relevant information.</li>
          <li><strong>Design the Tree Visualization:</strong> I am leaning towards using vector leaves to help create a visual representation of a tree; the leaves dynamically changing opacity. </li>
          <li><strong>Develop the Interactive Features:</strong> Will likely employ some JavaScript and D3.js content for the visualizations and handle dynamic changes in leaf opacity based on the data. Not dissimilar to what we covered last year, though this is much easier said than done.</li>
          <li><strong>Integrate Hover Effects:</strong> I will implement hover effects that display detailed information about each tree species when a user hovers over a leaf, likely using tooltips or pop-ups.</li>
          <li><strong>Testing and Refinement:</strong> Finally, I will test the artwork to ensure all interactive features work smoothly and the data is accurately represented. I will make any necessary adjustments to improve the look and function. I don't doubt that this will fail or even force me to change the design or idea, but whatever the final form my art takes, I want it to resemble what I have laid out here as I think this is a pretty neat concept.</li>
        </ol>
      </section>
      
      <section className={styles.section}>
        <h2>Resources and Tools</h2>
        <p>Resources for development:</p>
        <ul>
          <li><strong>D3.js:</strong> To handle the dynamic changes in leaf opacity and create the interactive tree visualization.</li>
          <li><strong>SVG:</strong> Scalable Vector Graphics for creating the tree and leaves.</li>
          <li><strong>Web Dev Tools:</strong> Standard HTML, CSS, and JavaScript to build and style the artwork.</li>
          <li><strong>Data Sources:</strong> Something reliable : scientific databases, conservation websites, academic publications, and whatever else I can find to make sure I am using actual, real information.</li>
        </ul>
      </section>
    </div>
  );
};

export default Artwork;
