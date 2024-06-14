import React from 'react';
import styles from '../styles/Design.module.css';
import wireframe1 from '../resources/wireframe1.png'; 
import wireframe2 from '../resources/wireframe2.png';

const DesignSection = () => {
  return (
    <div className={styles.container}>
      <h1>🌳 Style & Design Guide</h1>
      
      <section className={styles.section}>
        <h2>Wireframes</h2>
        <p>Rudimentary wireframes that outlined the basic look, structure, and layout of the site. They served as my blueprint for the design, and were the template all the pages featured.</p>
        <br />
        <img src={wireframe1} alt="Homepage Wireframe" className={styles.image} />
        <img src={wireframe2} alt="Content Page Wireframe" className={styles.image} />
      </section>
      
      <section className={styles.section}>
        <h2>Style Guide</h2>
        <br />
        <p>This guide defines the visual elements used throughout the website, namely colours, typography, and other design components. This helped maintain a cohesive and visually appealing design.</p>
        <br />
        <ul>
          <li><strong>Colours:</strong> As shown above, I featured varying shades of browns and greens to reflect the natural theme.</li>
          <li><strong>Typography:</strong> The primary font is 'Poppins', chosen for its readability and modern look. A personal favourite of mine.</li>
          <li><strong>Buttons:</strong> Buttons have a flat design with subtle animations to enhance user interaction.</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>Rationale and Reflection</h2>
        <br />
        <p>I focused on creating something user-friendly and visually appealing; with a strong focus on the theme, which is nature and to celebrate tree life in South Africa. To this end, I used green and brown tones to reflect the natural theme, with the choice of typography ensuring good readability. The site guides users from one section to another, with intuitive navigation via the (sticky) navbar and matching animations and transitions for a pleasant look and feel all-round.</p>
        <br />
        <p>I made my own wood grain patterns with Krita that are used in the background, navbar, and footer to enhance the nature theme and provide a consistent visual texture across the site. A somewhat artistic representation and a subtle nod to the look of tree bark  out there in real world</p>
        <br />
        <p>Additionally, I added a subtle jiggle animation to the "Trees!" in the navbar, to add a sort of playful element to the design, which I thought was just neat, personally; an easter egg of sorts, if you will.</p>
        <br />
        <p>Previous iterations featured a sort of inverse look to what there is now, using primarily dark browns for the body and fill, and conversely lighter colours for the text and accents, though a few of my peers told me a combination of beiges and tan tones and dark accents looked better.</p>
      </section>
    </div>
  );
};

export default DesignSection;
