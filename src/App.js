import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Explore from './explore';
import Services from './services';
import Explorework from './explorework';
import Footer from './footer';
import Modularkitchen from './modularkitchen';
import Livingroom from './lovingroom';
import BedRoom from './bedroom';
import ContactForm from './contactform';
import Restaurant from './restaurant';
import Office from './office';
import Trunky from './trunky';
import Furniture from './furniture';
import Interior from './interior';
import Carousel1 from './carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// import Contact from './components/Contact';

const App = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeNav, setActiveNav] = useState(""); // State to track the active nav item

	const showMenuBar = () => {
		setIsMenuOpen(!isMenuOpen); // Toggle state
	};

	const addActive = (navItem) => {
		setActiveNav(navItem); // Update the active item
	};

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
								aria-expanded={isMenuOpen ? 'true' : 'false'}
								aria-label="Toggle navigation"
								onClick={showMenuBar}>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
								<ul className="navbar-nav">
									<li className="nav-item">
										<NavLink to="/" className="nav-link " >Home</NavLink >
									</li>
									<li className="nav-item">
										<NavLink to="/about" className="nav-link" >About Us</NavLink >
									</li>
									<li className="nav-item">
										<NavLink to="/contact" className="nav-link" >Contact Us</NavLink >
									</li>
									<li className="nav-item">
										<NavLink to="/explorework" className="nav-link" >Explore Work</NavLink >
									</li>
									<li className="nav-item">
										<a
										href="#"
										className={`nav-link dropdown-toggle ${activeNav === "furniture" ? "active" : ""}`}
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
										id="services"
										onClick={() => addActive("furniture")}
										>
										Services
										</a>
										<ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ left: "unset" }}>
											<li>
												<NavLink to="/furniture" className="dropdown-item">Furniture</NavLink>
											</li>
											<li>
												<NavLink to="/interior" className="dropdown-item">Interior</NavLink>
											</li>
											<li>
												<NavLink to="/trunky" className="dropdown-item">Trunky</NavLink >
											</li>
										</ul>
									</li>
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
					<Route path="/services" element={<Services />} />
					<Route path="/footer" element={<Footer />} />
					<Route path="/lovingroom" element={<Livingroom />} />
					<Route path="/modularkitchen" element={<Modularkitchen />} />
					<Route path="/bedroom" element={<BedRoom />} />
					<Route path="/contactform" element={<ContactForm />} />
					<Route path="/restaurant" element={<Restaurant />} />
					<Route path="/office" element={<Office />} />
					<Route path="/trunky" element={<Trunky />} />
					<Route path="/furniture" element={<Furniture />} />
					<Route path="/interior" element={<Interior />} />
					<Route path="/carousel" element={<Carousel1 />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
