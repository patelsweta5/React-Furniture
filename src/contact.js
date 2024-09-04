import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/animate.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-572-designer.css';
import './assets/css/owl.css';
import './assets/css/flex-slider.css';
import myImage from './assets/images/explore-work-left-image.jpg';
import interiorImg from './assets/images/whats-trending-item-image.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Footer from'./footer';
const Contact = () => {
  return (
    <div>
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="assets/css/fontawesome.css"/>
    <link rel="stylesheet" href="assets/css/templatemo-572-designer.css"/>
    <link rel="stylesheet" href="assets/css/owl.css"/>
    <link rel="stylesheet" href="assets/css/animate.css"/>
    <link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>

    <div className="page-banner change-name">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="header-text">
                        <h2><em>Contact</em> Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="contact-page-map">
        <div className="container expanded">
            <div className="row">
                <div className="col-lg-12">
                
                	 <div id="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="550px" frameBorder="0"  allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="contact-us-page">
        <div className="container">
            <div className="col-lg-12">
                <div className="contact-page-form">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h2>Don't be Hesitated<br/><em>Send a message now</em>!</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">                 
                                        <input name="first-name" type="text" id="first-name" placeholder="First Name*" required=""/>               
                                    </div>
                                    <div className="col-lg-6">                
                                        <input name="last-name" type="text" id="last-name" placeholder="Last Name*" required=""/>                           
                                    </div>
                                    <div className="col-lg-6">                       
                                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>                        
                                    </div>
                                    <div className="col-lg-6">                         
                                        <input name="subject" type="text" id="subject" placeholder="Subject*" required=""/>                        
                                    </div>
                                    <div className="col-lg-12">                           
                                        <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>                          
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" id="form-submit" className="main-button ">Send Message</button>                            
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-info">
                                <ul>
                                    <li>
                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></div>
                                        <h6>Mailing Address</h6>
                                        <span>Sunny Isles Beach, Florida 33160, USA</span>
                                    </li>
                                    <li>
                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="44" viewBox="0 0 24 24" width="44"><g><rect fill="none" height="24" width="24"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z"/></g></svg></div>
                                        <h6>Email Address</h6>
                                        <span>contact@company.com</span>
                                    </li>
                                    <li>
                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48" viewBox="0 0 24 24" width="48"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path className="icon" d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"></path><circle className="icon" cx="9" cy="13" r="1"></circle><circle className="icon" cx="15" cy="13" r="1"></circle><path className="icon" d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"></path></g></g></svg></div>
                                        <h6>Chat With Us</h6>
                                        <span>chat@company.com</span>
                                    </li>
                                </ul>
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
};

export default Contact;
