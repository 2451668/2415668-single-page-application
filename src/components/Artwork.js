import React from 'react';
import TreeSeasons from './TreeSeasons';
import styles from '../styles/Artwork.module.css';

const Artwork = () => {
  return (
    <div className={styles.container}>
      <h1>🌳 Seasons</h1>

      <br></br>
      <TreeSeasons />
      <br></br>
      <section className={styles.section}>
        <h2>Rationale and Reflection</h2>
        <br />
        <p>This is my final submission for the net art piece. I aimed to visually capture the feel of the changing seasons through the transformation of a single tree in four phases. As per the theme, I chose to do a stylised Baobab tree, a South African native, and made each illustration myself to show it in cycle. By selecting the seasonal icons, you can see the vibrant summer tones, a colder and more serene look in winter, fresh Baobab blooms in spring, and the warmer hues of autumn.</p>
        <br />
        <p>I aimed for the transitions to have a smooth fading motion to mirror the rhythm of seasons as they naturally occur, each phase being part of some form of continuity. The icons themselves feature a minor amount of styling as well, where before they behaved more similarly to the navbar in appearance.</p>
        <br />
        <p>This piece was much simpler than what I had originally drafted. I realised I had overscoped a lot in what I wanted to create, or rather, was capable of creating. I had also shot myself in the foot by thinking I could compensate for any gaps as they come up by making use of a.i to assist in some aspects. Though, with its use prohibited for this submission, it was not until I had to do it alone that I realised I had to be more realistic about what I was capable of creating.</p>
        <br />
        <p>Even still, I wanted to retain the tree motif that has been present through my site, in whatever I did end up producing. This led to what I have now, which was much simpler to create as the code only handles transitioning static images in a stylised fashion. This was simple enough to hard-code, with the other half of the work being drawing the illustrations themselves. In the end, it was a nice way to consolidate some coding practices with my own drawing abilities, even if less sophisticated than my prior, more lofty ideas, and stands as a better representation of what I am capable of making.</p>

      </section>
    </div>
  );
};

export default Artwork;
