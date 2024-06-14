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

// defined seasons with corresponding images, icons, class names, and tooltips; essentially an identity for each phase of the art
const seasons = {
  Summer: { image: summerImage, icon: faSun, className: 'summer', tooltip: 'Baobabs store thousands of litres of water in their trunks to survive dry seasons.' },
  Winter: { image: winterImage, icon: faSnowflake, className: 'winter', tooltip: 'In winter, Baobabs shed leaves to conserve water, revealing their bare branches' },
  Spring: { image: springImage, icon: faLeaf, className: 'spring', tooltip: 'Spring brings fresh leaves and large white flowers to the Baobab tree.' },
  Autumn: { image: autumnImage, icon: faTree, className: 'autumn', tooltip: 'In autumn, Baobab leaves fall, preparing for the dry season, showcasing its massive trunk' },
};

const TreeSeasons = () => {
  // state keeps track of current season in order to show the relevant phase of art, as well as matching button graphics
  const [currentSeason, setCurrentSeason] = useState('Summer');
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tree-seasons">
      {/* container for the images themselves */}
      <div 
        className="image-container"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* maps through seasons to render each phase */}
        {Object.keys(seasons).map(season => (
          <img
            key={season} // assigns a key for each image
            src={seasons[season].image} // images themselves
            alt={`${season} tree`} // alt text; for accessibility
            className={`tree-image ${currentSeason === season ? 'visible' : 'hidden'}`} // to conditionally apply classes based on current season
          />
        ))}
        {showTooltip && (
          <div className="tooltip">{seasons[currentSeason].tooltip}</div>
        )}
      </div>
      {/* likewise, a container to house the buttons */}
      <div className="button-container">
        {/* maps through the seasons to render a phase via the associated button */}
        {Object.keys(seasons).map(season => (
          <button
            key={season}
            onClick={() => setCurrentSeason(season)} // to set the appropriate phase once clicked
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
// https://www.w3schools.com/react/react_usecontext.
// https://stackoverflow.com/questions/7117073/add-a-tooltip-to-a-div
// https://www.geeksforgeeks.org/how-to-use-tooltip-component-in-reactjs/

// Styling

// https://docs.fontawesome.com/web/add-icons/how-to
// https://www.w3schools.com/icons/fontawesome_icons_intro.asp
// https://www.w3schools.com/css/css3_transitions.asp
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions
// https://www.joshwcomeau.com/animation/css-transitions/
// https://www.w3schools.com/howto/howto_css_tooltip.asp