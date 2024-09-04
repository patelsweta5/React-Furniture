import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Explore from './explore';
import Trending from './trending';
import Explorework from './explorework';
import Footer from './footer';
import Modularkitchen from './modularkitchen';
import Livingroom from './lovingroom';
import BedRoom from './bedroom';
import ContactForm from './contactform';
import Restaurant from './restaurant';
import Office from './office';
import Trunky from './trunky';
import  Carousel1  from './carousel';


// import Contact from './components/Contact';

const App = () => {

  window.addEventListener('scroll', function () {
    const header = document.getElementById('top');
    if (window.scrollY > 50) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
  return (
    <Router>
      <div>
        <header id="top" >
          <nav className="main-navigation navbar navbar-expand-lg navbar-light">
            <div className='container'>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link " activeclassname="active">Home</NavLink >
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link" activeclassname="active">About Us</NavLink >
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link" activeclassname="active">Contact Us</NavLink >
                  </li>
                  <li className="nav-item">
                    <NavLink to="/explorework" className="nav-link" activeclassname="active">Explore Work</NavLink >
                  </li>
                  <li className="nav-item">
                    <NavLink to="/trending" className="nav-link" activeclassname="active">Trending</NavLink >
                  </li>
                  {/* <li className="nav-item">
                <NavLink  to="/modularkitchen" className="nav-NavLink ">Modularkitchen</NavLink >
              </li>
              <li className="nav-item">
                <NavLink  to="/lovingroom" className="nav-NavLink ">livingroom</NavLink >
              </li>
              <li className="nav-item">
                <NavLink  to="/bedroom" className="nav-NavLink ">BedRoom</NavLink >
              </li> */}
              {/* <li className="nav-item">
                    <NavLink to="/carousel" className="nav-link" activeclassname="active">Carousel</NavLink >
                  </li> */}
                  <li className="nav-item">
                    <NavLink to="/trunky" className="nav-link" activeclassname="active">Trunky</NavLink >
                  </li>
                  {/* <li className="nav-item">
                    <NavLink to="/restaurant" className="nav-link" activeclassname="active">Restaurant</NavLink >
                  </li>
                  <li className="nav-item">
                    <NavLink to="/office" className="nav-link" activeclassname="active">Office</NavLink >
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>

        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explorework" element={<Explorework />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/lovingroom" element={<Livingroom />} />
          <Route path="/modularkitchen" element={<Modularkitchen />} />
          <Route path="/bedroom" element={<BedRoom />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/office" element={<Office />} />
          <Route path="/trunky" element={<Trunky />} />
          <Route path="/carousel" element={<Carousel1 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
