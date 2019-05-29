import React from 'react';
import logo from './logo.png';
import './Landing.css';
const Landing = () => (
  <div className="Landing">
        <header className="Landing-header">
          <img src={logo} className="Landing-logo" alt="logo" />
          <p>
            To edit this page <code>src/components/Landing/index.js</code> save to reload.
          </p>
          <a
            className="Landing-link"
            href="https://www.youtube.com/watch?v=tEo9sqzX1lQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            !!!SUPER IMPORTANT INFORMATION!!!
          </a>
        </header>
      </div>
);

export default Landing;