import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/PageTransition.css';

const PageTransition = ({ children }) => (
  <TransitionGroup>
    <CSSTransition
      key={window.location.pathname}
      timeout={300}
      classNames="fade"
    >
      <div className="page-transition">
        {children}
      </div>
    </CSSTransition>
  </TransitionGroup>
);

export default PageTransition;
