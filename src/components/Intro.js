import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Intro.css';
import logo from '../assets/Logo.svg';

class Intro extends Component {
  render() {
    return (
      <header className="center intro-component">
        <img src={logo} className="App-logo" alt="The Zen Zone" />
        <div className="zen-zone-intro">
          <h1>Welcome to The Zen Zone.</h1>
          <p>A minimalistic meditation area built by <a href="https://ssk-14.github.io/web/" target="_blank" rel="noopener noreferrer">Sanjay</a>, designed to calm you down via the power of small, captivating, mildly amusing and oddly satisfying activities. Feel the Zen!</p>
          <Link to="/games">
            <button>Let's get started</button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Intro;
