import React, { useEffect } from 'react';
// necessary modules from react-transition-group for trans functionality
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// transition styling
import '../styles/PageTransition.css';

// PageTransition comp. to handle transitions between pages
const PageTransition = ({ children }) => {
  // useLocation hook to get the current location object, which includes the current pathname
  const { pathname } = useLocation();

  // useEffect hook to scroll the window to the top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // TransitionGroup comp. to group multiple transitions together
    <TransitionGroup>
      {/* CSSTransition comp. to apply CSS transitions to the elements */}
      <CSSTransition
        key={pathname} // using pathname as the key to ensure a unique transition for each route
        timeout={300} // duration in milliseconds
        classNames="fade" // class name prefix for the transition
      >
        {/* the children components will be wrapped in a div with a class name for styling */}
        <div className="page-transition">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
