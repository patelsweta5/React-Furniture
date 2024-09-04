import React, { useEffect, useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Footer from './footer';
import ContactForm from './contactform';
import './vendor/bootstrap/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel1 from './carousel';

const Home = () => {
   
    const [selectedCatagory, setSelectedCatagory] = useState();
    const [selectedPlan , setSelectedPlan] = useState();
    
    const typeOfCatagory = [
        {
            label: "Modular Kitchens",
            value: "modularkitchen  ",
        },
        {
            label: "Living Room Furniture",
            value: "lovingroom",
        },
        {
            label: "Bed Room Furniture",
            value: "bedroom",
        },
        {
            label: "Office Interior",
            value: "office",
        },
    ]

    const typeOfPlan = [
        {
            label: "Trunky Project",
            value: "trunky",
        },
        {
            label: "Counsltancy",
            value: "counsltancy",
        }
    ]

    const navigate = useNavigate();
    const handleChange = (selectedCatagory) => {
        setSelectedCatagory(selectedCatagory);
    }

    const searchNow = () => {
        const totalCategory = typeOfCatagory.concat(typeOfPlan);
        totalCategory.map((catagory) => {
            if((selectedCatagory && selectedCatagory.value == catagory.value) ||(selectedPlan && selectedPlan.value == catagory.value) ) {
              navigate('' + catagory.value +'');
            }
        });
        
    }

    const handleChangePlan =(selectedPlan) => {
        setSelectedPlan(selectedPlan);
    }
    return (
        <div className="App">
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>

            <div className="">
                <Carousel1 /> {/* Use the Carousel1 component here */}
            
               
            </div>
            
            <div className="search-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="search-form" name="gs" method="submit" role="search" action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label >Choose Category</label>
                                            <Select
                                                options={typeOfCatagory}
                                                id="chooseCategory"
                                                name="Category"
                                                aria-label="Default select example"
                                                value={selectedCatagory }
                                                style={{backgroundColor: "lightblue",  borderradius: "8px"}}
                                                onChange={handleChange}
                                                class="form-select"                                              
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <fieldset>
                                            <label for="chooseprice" className="form-label">Choose Plan</label>
                                            <Select
                                                options={typeOfPlan}
                                                id="choosePlan"
                                                name="Paln"
                                                aria-label="Default select example"
                                                value={selectedPlan}
                                                style={{backgroundColor: "lightblue"}}
                                                onChange={handleChangePlan}
                                                class="form-select"
                                              
                                            />
                                        </fieldset>
                                    </div>                                   
                                    <div className="col-lg-12" style={{marginTop:"30px"}}>
                                        <fieldset>
                                            <button className="main-button" onClick={searchNow}>Search Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <section className="explore-work" id="explore">
                <div className="container expanded">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Explore Some Of Our Latest<br /><em>Interior Design Work</em>.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src={myImage} alt="Interior Design Work" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <ul>
                                    <li>
                                        <h4>Interior Design</h4>
                                        <ul className="info">
                                            <li>
                                                
                                                <h6>
                                                    <Link to="/restaurant">
                                                        The Cafe and Restaurant
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                        </svg>
                                                    </Link>
                                                </h6>
                                            </li>
                                            <li>
                                               
                                                <em>Elevating Ambiance with Exceptional Furniture Designs for Cafes, Hotels, Restaurants, and Offices.</em>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li>
                                        <h4>Building &amp; Developing</h4>
                                        <ul className="info">
                                            <li>
                                               
                                                <h6>
                                                    <a href="explore.html">
                                                        Home Land Port Canaveral Suites
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                        </svg>
                                                    </a>
                                                </h6>
                                            </li>
                                            <li>
                                                <span className="float-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-map-fill" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z" />
                                                    </svg>
                                                    Miami Beach, Florida, USA
                                                </span>
                                                <em>This is based on latest Bootstrap v5.1.3 CSS layout where you can easily edit and use Bootstrap components.</em>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li>
                                        <h4>Giving Your Brand Power</h4>
                                        <ul className="info">
                                            <li>
                                                
                                                <h6>
                                                <Link to="/office">
                                                        Office Design
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                        </svg>
                                                    </Link>
                                                </h6>
                                            </li>
                                            <li>
                                               
                                                <em>Feel free to download &amp; use this template for your websites. Please tell your friends about TemplateMo.</em>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="whats-trending">
                <div className="container expanded">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="section-heading">
                                <h2>Check Out Whats Trending In<br /><em>Our Interior Work</em>.</h2>
                            </div>
                            <div className="left-content">
                                <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit, sed do eismuod larehai med at vero eos et suscipit neque rerum molestias accusamus et iusto odio dignissimos ducimus qui blanditis.</p>
                                <div className="primary-button">
                                    <a href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-image">
                                <div className="thumb">
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <h4><a href="#">Modernized Interior</a></h4>
                                            <span>Guest Room Decoration</span>
                                        </div>
                                    </div>
                                    <img src={interiorImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;
