import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header id="top">
      <nav className="main-navigation navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Homepage
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/explore" className="nav-link">
                  Explore Work
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trending" className="nav-link">
                  Trending
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
