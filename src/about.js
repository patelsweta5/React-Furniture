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

const About = () => {
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
                  <h2><em>About</em> Designer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod keoi tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </div>
      </div>
  </div>
</div>


<div className="services">
  <div className="container">
      <div className="row">
          <div className="col-lg-4">
              <div className="service-item">
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="62" viewBox="0 0 24 24" width="62"><g><rect fill="none" height="24" width="24"/></g><g><g><path className="icon" d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"/><circle className="icon" cx="9" cy="13" r="1"/><circle className="icon" cx="15" cy="13" r="1"/><path className="icon" d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"/></g></g></svg>
                  <h4>Active Support 24/7</h4>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="service-item">
                  <svg xmlns="http://www.w3.org/2000/svg" height="62" viewBox="0 0 24 24" width="62"><path d="M0 0h24v24H0z" fill="none"/><path className="icon" d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>
                  <h4>Customer Care</h4>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="service-item">
                  <svg xmlns="http://www.w3.org/2000/svg" height="62" viewBox="0 0 24 24" width="62"><path d="M0 0h24v24H0z" fill="none"/><path className="icon" d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>
                  <h4>Easy to Customize</h4>
              </div>
          </div>
      </div>
  </div>
</div>


<section className="interior-design">
  <div className="container expanded">
      <div className="row">
          <div className="col-lg-6">
              <div className="section-heading">
                  <h2>A Company Who Specializes<br/><em>In Interior Design</em>.</h2>
              </div>
              <div className="left-image">
                  <img src="assets/images/interior-design-left-image.jpg" alt=""/>
              </div>
          </div>
          <div className="col-lg-6 align-self-center">
              <div className="right-content">
                  <p>Designer HTML5 Template is 100% free to download provided by TemplateMo website. You are allowed to use this template for your commercial or business websites. You are <strong>NOT allowed</strong> to redistribute the downloadable ZIP file of this template on any other website. Please contact us for more info.
                  
                  <br/><br/>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="accordion" id="accordionExample">
                      <h4>How It Works</h4>
                      <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What is Interior Design?
                          </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <strong>sed do eiusmod tempor incididunt ut labore</strong> et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                      </div>
                      <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              What is Exterior Decoration?
                          </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan <strong>lacus vel cilisis lorem ipsum dolor sit amet</strong>, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                      </div>
                      <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              3D Rendering Models
                          </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, <strong>sed do eiusmod tempor incididunt ut labore et dolore</strong> magna aliqua.</p>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>


<section className="what-they-say">
  <div className="container expanded">
      <div className="row">
          <div className="col-lg-12">
              <div className="testimonials">
                  <div className="row">
                      <div className="col-lg-7">
                      <div className="owl-what-they-say owl-carousel">
                          <div className="item testimonial-item">
                              <img className="float-start" src="assets/images/" alt=""/>
                              <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path className="icon" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path className="icon" d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                              </svg></div>
                              <h4>Catherine Rose</h4>
                              <span>CEO of Designer</span>
                              <ul>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                              </ul>
                              <p>Lorem ipsum dolor sit amet zogut commodo viverra maecenas nsectetur adipiscing, eiusmod tempor labore et dolore.</p>
                          </div>
                          
                          <div className="item testimonial-item">
                              <img className="float-start" src="assets/images/" alt=""/>
                              <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path className="icon" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path className="icon" d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                              </svg></div>
                              <h4>Sophia Loren</h4>
                              <span>Chief Designer</span>
                              <ul>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                              </ul>
                              <p>Lorem ipsum dolor sit amet zogut commodo viverra maecenas nsectetur adipiscing, eiusmod tempor labore et dolore.</p>
                          </div>
                          
                          <div className="item testimonial-item">
                              <img className="float-start" src="assets/images/" alt=""/>
                              <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                              <path className="icon" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                              <path className="icon" d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                              </svg></div>
                              <h4>Isabella Marbel</h4>
                              <span>Senior Architect</span>
                              <ul>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                                  <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg></li>
                              </ul>
                              <p>Lorem ipsum dolor sit amet zogut commodo viverra maecenas nsectetur adipiscing, eiusmod tempor labore et dolore.</p>
                          </div>
                          
                      </div>
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


    </div>
  );
};

export default About;
