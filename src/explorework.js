import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/animate.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-572-designer.css';
import './assets/css/owl.css';
import './assets/css/flex-slider.css';
import Footer from'./footer';
import Image1 from './assets/images/trending-item-01.jpg';
import Image2 from './assets/images/trending-item-02.jpg';
import Image3 from './assets/images/trending-item-03.jpg';
import Image4 from './assets/images/trending-item-04.jpg';
import Image5 from './assets/images/trending-item-05.jpg';
import Image6 from './assets/images/trending-item-06.jpg';
import Image7 from './assets/images/trending-item-07.jpg';
import Image8 from './assets/images/trending-item-08.jpg';
import interiorImg from './assets/images/whats-trending-item-image.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Explorework = () => {
    return (
    <div>
        <div className="page-banner change-name">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="header-text">
                            <h2><em>Check</em> Trending Work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section className="trending-page">
            <div className="container expanded">
                <div className="col-lg-12">
                    <div className="row grid">
                        <div className="grid-sizer"></div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Interior Design</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Minimal Design Interior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image1} alt="Interior Design Work" />
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Exterior Design</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Minimal Design Exterior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image3} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Bedroom Design</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Bedroom Design Interior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image2} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Little Bungalow</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Minimal Bungalow Interior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image4} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Tea Table Design</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Tea Table Interior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image5} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Interior Bed Design</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Minimal Bedroom Interior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image6} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">White Theme Interior</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>White Theme Bedroom</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image7} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Specific Interior Design</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Specific Design Interior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image8} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Another Interior Design</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Minimal Design Interior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image2} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Circle Mirror Room</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Circle Mirror Interior</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image1} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Exterior Decor</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Minimal Exterior Decor</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image4} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="trending-item">
                                <div className="thumb">
                                    <span className="banner">Glass Table Design</span>
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <a href="explore.html"><h4>Glass Table Design</h4></a>
                                            <a className="icon" href="explore.html"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                            </svg></a>
                                        </div>
                                    </div>
                                    <img src={Image5} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>Hire us to Work on a Project?</h2>
                    </div>
                    <div className="col-lg-4">
                        <div className="white-button">
                            <a href="#">Contact Us Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
    );
}

export default Explorework;