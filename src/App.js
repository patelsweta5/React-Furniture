import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink , Link} from 'react-router-dom';
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
import Temple from './temple';
import Trunky from './trunky';
import Furniture from './furniture';
import Interior from './interior';
import Carousel1 from './carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './assets/images/white-logo.png';

// import Contact from './components/Contact';

const App = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeNav, setActiveNav] = useState(""); // State to track the active nav item
	const dropdownRef = useRef(null);

	const showMenuBar = () => {

		setIsMenuOpen(!isMenuOpen); // Toggle state
	};

	const addActive = (navItem) => {
		setActiveNav(navItem); // Update the active item
	};

	const closeDropdownOnOutsideClick = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setActiveNav(""); // Close dropdown
		}
	};

	useEffect(() => {
		document.addEventListener("click", closeDropdownOnOutsideClick);
		return () => document.removeEventListener("click", closeDropdownOnOutsideClick);
	}, []);

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
							<Link className="navbar-brand" to="/">
								<img src={logo} alt="Logo" />
							</Link>
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
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav">
									<li className="nav-item">
										<NavLink to="/" className="nav-link " onClick={() => addActive("")}>Home</NavLink >
									</li>
									<li className="nav-item">
										<NavLink to="/about" className="nav-link" onClick={() => addActive("about")}>About Us</NavLink >
									</li>
									<li className="nav-item">
										<NavLink to="/contact" className="nav-link" onClick={() => addActive("contact")}>Contact Us</NavLink >
									</li>
									<li className="nav-item dropdown">
										<NavLink to="/explorework" className="nav-link" onClick={() => addActive("explorework")}>Explore Work</NavLink >
									</li>
									<li className="nav-item dropdown" ref={dropdownRef}>
										<a
											href="#"
											className={`nav-link dropdown-toggle ${["furniture", "interior", "trunky"].includes(activeNav) ? "active" : ""
												}`}
											role="button"
											data-bs-toggle="dropdown"
											onClick={() => setActiveNav(activeNav === "services" ? "" : "services")}
										>
											Services
										</a>
										<ul className={`dropdown-menu ${activeNav === "services" ? "show" : ""}`}>
											<li>
												<NavLink to="/furniture" className="dropdown-item" onClick={() => setActiveNav("furniture")}>
													Furniture
												</NavLink>
											</li>
											<li>
												<NavLink to="/interior" className="dropdown-item" onClick={() => setActiveNav("interior")}>
													Interior
												</NavLink>
											</li>
											<li>
												<NavLink to="/trunky" className="dropdown-item" onClick={() => setActiveNav("trunky")}>
													Trunky
												</NavLink>
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
					<Route path="/temple" element={<Temple />} />
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
