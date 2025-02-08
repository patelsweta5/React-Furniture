import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import './assets/css/animate.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-572-designer.css';
import './assets/css/owl.css';
import './assets/css/flex-slider.css';
import Footer from './footer';
import interiordesign from './assets/images/design1.jpeg';
import interiorImg from './assets/images/aboutus.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel';
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>

            <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />


            <link rel="stylesheet" href="assets/css/fontawesome.css" />
            <link rel="stylesheet" href="assets/css/templatemo-572-designer.css" />
            <link rel="stylesheet" href="assets/css/owl.css" />
            <link rel="stylesheet" href="assets/css/animate.css" />
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />


            <div className="page-banner change-name">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="header-text">
                                <h2><em>About</em> Us</h2>
                                <p>We Provide You With Great, Customized Designs!.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="container">

                </div>
            </div>


            <section className="interior-design">
                <div className="container expanded">
                    <div className="section-heading">
                        <h2>A Company Who Specializes<br /><em> In Furniture Design</em>.</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <div className="section-heading">
                                <h2>A Company Who Specializes<br /><em> In Furniture Design</em>.</h2>
                            </div> */}
                            <div className="left-image">
                                <img src={interiordesign} alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="right-content">
                                <p>Welcome to [Your Company Name], where functionality meets elegance! We specialize in crafting high-quality furniture and providing bespoke interior design solutions tailored to transform your spaces. With a perfect blend of creativity, craftsmanship, and innovation, we aim to create environments that reflect your style and personality.

                                    <br /><br />At [Your Company Name], we believe that every piece of furniture and every corner of a room should tell a story—yours. Let us help you create inspiring spaces that you’ll love for years to come.

                                        Contact us today to start your journey toward a more beautiful and functional environment!</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="interior-design">
                <div className="container expanded">
                    <div className="accordion" id="accordionExample">
                        <div className="section-heading">
                            <h2>We transform your vision into an artistic design
                            <br /><em> Our Story</em>.</h2>
                        </div>
                        <div className="row">
                        <div className="col-lg-5 align-self-center">
                            <div className="vc_column-inner">
                                <p>Welcome to [Your Company Name], where functionality meets elegance! We specialize in crafting high-quality furniture and providing bespoke interior design solutions tailored to transform your spaces. With a perfect blend of creativity, craftsmanship, and innovation, we aim to create environments that reflect your style and personality.

                                    <br /><br />At [Your Company Name], we believe that every piece of furniture and every corner of a room should tell a story—yours. Let us help you create inspiring spaces that you’ll love for years to come.

                                        Contact us today to start your journey toward a more beautiful and functional environment!</p>
                                
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <div className="section-heading">
                                <h2>A Company Who Specializes<br /><em> In Furniture Design</em>.</h2>
                            </div> */}
                            <div className="left-image">
                                <img src={interiorImg} alt="about" />
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </section>
            <section className="interior-design">
                <div className="container expanded">
                    <div className="accordion" id="accordionExample">
                        <div className="section-heading">
                            <h2>Frequently Asked<br /><em> Questions</em>.</h2>
                        </div>
                        <div className="accordion-item" style={{ border: 'none' }}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="true" aria-controls="collapseOne">
                                    What Services Do You Provide?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse" id="collapseExample" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>We offer a range of interior design services including space planning, furniture selection, color consultation, lighting design, and window treatments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={{ border: 'none' }}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Do You Provide End-To-End/Turnkey Services?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>We Have Collaboration With Our Consulting Teams And Partners. You Have The Option To Appoint Them For The Complete End-To-End Solutions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={{ border: 'none' }}>
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Do you offer a warranty or guarantee on your work?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Yes, we stand behind our work and offer a warranty or guarantee on all of our interior design services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="what-they-say" style={{ marginTop: '2px' }}>
                <div className="container expanded">
                    <div className="section-heading" style={{ textAlign: 'center' }}>
                        {/* <div className="section-heading"> */}
                        <h2>What People say</h2>
                        {/* </div> */}
                        {/* <h2>What People Say</h2> */}
                    </div>
                    <h2 ></h2>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonials">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="">
                                            <Carousel
                                                infiniteLoop={true}
                                                autoPlay={true}
                                                showStatus={false}
                                                showArrows={false}
                                                showThumbs={false}
                                                interval={2000} >
                                                <div>
                                                    <div className="item testimonial-item" style={{ width: '225px', marginRight: '30px' }}>
                                                        <img className="float-start" src="assets/images/" alt="" />
                                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                                                            <path className="icon" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                                            <path className="icon" d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                                                        </svg>
                                                        </div>
                                                        <h4>Catherine Rose</h4>
                                                        <span>CEO of Designer</span>
                                                        <ul>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet zogut commodo viverra maecenas nsectetur adipiscing, eiusmod tempor labore et dolore.</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="item testimonial-item" style={{ width: '225px', marginRight: '30px' }}>
                                                        <img className="float-start" src="assets/images/" alt="" />
                                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                                                            <path className="icon" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                                            <path className="icon" d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                                                        </svg></div>
                                                        <h4>Sophia Loren</h4>
                                                        <span>Chief Designer</span>
                                                        <ul>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet zogut commodo viverra maecenas nsectetur adipiscing, eiusmod tempor labore et dolore.</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="item testimonial-item" style={{ width: '225px', marginRight: '30px' }}>
                                                        <img className="float-start" src="assets/images/" alt="" />
                                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                                                            <path className="icon" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                                            <path className="icon" d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                                                        </svg></div>
                                                        <h4>Isabella Marbel</h4>
                                                        <span>Senior Architect</span>
                                                        <ul>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff565b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet zogut commodo viverra maecenas nsectetur adipiscing, eiusmod tempor labore et dolore.</p>
                                                    </div>
                                                </div>
                                            </Carousel>
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
                                <Link to="/contact">Get In Touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;
