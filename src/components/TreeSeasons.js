// necessary modules; namely an imported library for some custom icons
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faSnowflake, faLeaf, faTree } from '@fortawesome/free-solid-svg-icons';
import '../styles/TreeSeasons.css';
// less economical, but I found it easier to reference each image directly in this script since it's only a handful of content
import summerImage from '../images/tree-summer.webp';
import winterImage from '../images/tree-winter.webp';
import springImage from '../images/tree-spring.webp';
import autumnImage from '../images/tree-autumn.webp';

// defined seasons with corresponding images, icons, and class names; essentially an identity for each phase of the art
const seasons = {
  Summer: { image: summerImage, icon: faSun, className: 'summer' },
  Winter: { image: winterImage, icon: faSnowflake, className: 'winter' },
  Spring: { image: springImage, icon: faLeaf, className: 'spring' },
  Autumn: { image: autumnImage, icon: faTree, className: 'autumn' },
};

const TreeSeasons = () => {
  // state keeps track of current season in order to show the relevant phase of art, as well as matching button graphics
  const [currentSeason, setCurrentSeason] = useState('Summer');

  return (
    <div className="tree-seasons">
      {/* container for the images themselves */}
      <div className="image-container">
        {/* maps through seasons to render each phase */}
        {Object.keys(seasons).map(season => (
          <img
            key={season} // assign a key for each image
            src={seasons[season].image} // images themselves
            alt={`${season} tree`} // alt text, for accessibility
            className={`tree-image ${currentSeason === season ? 'visible' : 'hidden'}`} // to conditionally apply classes based on current season
          />
        ))}
      </div>
      {/* likewise, a container to house the buttons */}
      <div className="button-container">
        {/* maps through the seasons to render a phase via the associated button */}
        {Object.keys(seasons).map(season => (
          <button
            key={season}
            onClick={() => setCurrentSeason(season)} // to set the appropriate phase ounce clicked
            className={`${seasons[season].className} ${currentSeason === season ? 'active' : ''}`} // again applying classes as per current phase
          >
            {/* used this library for the renders for the actual icons */}
            <FontAwesomeIcon icon={seasons[season].icon} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TreeSeasons;

/* references and learning */

// Primary resources were listed before in the root App file, though these were for the net art in particular

// React help

// https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component
// https://docs.astro.build/en/recipes/dynamically-importing-images/
// https://react.dev/learn/conditional-rendering
// https://www.w3schools.com/react/react_conditional_rendering.asp
// https://www.youtube.com/watch?v=XvURBpFxdGw&pp=ygUbcmVhY3QgY29uZGl0aW9uYWwgcmVuZGVyaW5n
// https://react.dev/learn/rendering-lists
// https://www.w3schools.com/react/react_lists.asp
// https://stackoverflow.com/questions/40803828/how-can-i-map-through-an-object-in-reactjs
// https://react.dev/reference/react/useContext
// https://react.dev/reference/react/createContext
// https://react.dev/reference/react/useState
// https://www.w3schools.com/react/react_usestate.asp
// https://www.w3schools.com/react/react_usecontext.asp

// Styling

// https://docs.fontawesome.com/web/add-icons/how-to
// https://www.w3schools.com/icons/fontawesome_icons_intro.asp
// https://www.w3schools.com/css/css3_transitions.asp
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions
// https://www.joshwcomeau.com/animation/css-transitions/
// https://stackoverflow.com/questions/11660710/css-transition-fade-in
// https://www.youtube.com/watch?v=SgmNxE9lWcY&t=75s&pp=ygUSdHJhbnNpdGlvbnMgaW4gY3Nz