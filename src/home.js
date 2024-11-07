import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/animate.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-572-designer.css';
import './assets/css/owl.css';
import './assets/css/flex-slider.css';
import myImage from './assets/images/explore-work-left-image.jpg';
import video from './assets/images/3770034-hd_1920_1080_25fps.mp4';
import interiorimg from './assets/images/interior.png'
import furnitureimg from './assets/images/furniture.png';
import turnkeyimg from './assets/images/business.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Footer from './footer';
import ContactForm from './contactform';
import './vendor/bootstrap/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel1 from './carousel';
import Card from 'react-bootstrap/Card';

const Home = () => {

    const [selectedCatagory, setSelectedCatagory] = useState();
    const [selectedPlan, setSelectedPlan] = useState();

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
            if ((selectedCatagory && selectedCatagory.value == catagory.value) || (selectedPlan && selectedPlan.value == catagory.value)) {
                navigate('' + catagory.value + '');
            }
        });

    }

    const handleChangePlan = (selectedPlan) => {
        setSelectedPlan(selectedPlan);
    }
    return (
        <div className="App">
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>

            <div className="">
                <Carousel1 />
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
                                                value={selectedCatagory}
                                                style={{ backgroundColor: "lightblue", borderradius: "8px" }}
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
                                                style={{ backgroundColor: "lightblue" }}
                                                onChange={handleChangePlan}
                                                class="form-select"/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12" style={{ marginTop: "30px" }}>
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
                        <div className="col-lg-7">
                            <div className="left-image">
                                <video src={video} width="600" height="500" controls loop autoPlay />
                                {/* <img src={myImage} alt="Interior Design Work" /> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
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
                                    <li>
                                        <h4>Antique work</h4>
                                        <ul className="info">
                                            <li>
                                                <h6>
                                                    <Link to="/office">
                                                        Temple Design
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


            {/* <section className="whats-trending">
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
                                    <img src={"./assets/images/whats-trending-item-image.jpg"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className='container expanded'>
                    <div className="row">
                        {/* <div className="col-lg-12"> */}
                            <div className="section-heading">
                                <h2>Have a quick look of <br /><em>our services</em></h2>
                            </div>
                            <div className="col-lg-4">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <img src={furnitureimg} alt="" style={{ width: '65px', height: '65px' }} />
                                        <Card.Title style={{ fontSize: '17px', fontWeight: '700', color: '#2a2a2a' }}>Furniture</Card.Title>
                                        <br />
                                        <Card.Text style={{ marginRight: '10px', marginLeft: '10px' }}>
                                            Create furniture masterpieces that seamlessly blend aesthetics, functionality, and sustainability to bring your dream vision to life.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <img src={turnkeyimg} alt="" style={{ width: '65px', height: '65px' }} />
                                        <Card.Title style={{ fontSize: '17px', fontWeight: '700', color: '#2a2a2a' }}>Turnkey Projects</Card.Title>
                                        <br />
                                        <Card.Text style={{ marginRight: '10px', marginLeft: '10px' }}>
                                            Experience hassle-free project execution with our end-to-end services, from concept to completion, tailored to your requirements.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4">
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <img src={interiorimg} alt="" style={{ width: '65px', height: '65px' }} />
                                        <Card.Title style={{ fontSize: '17px', fontWeight: '700', color: '#2a2a2a' }}>Interior</Card.Title>
                                        <br />
                                        <Card.Text style={{ marginRight: '10px', marginLeft: '10px' }}>
                                            Transform your spaces with innovative and personalized designs that reflect your unique style and enhance functionality.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </section>
            <section className="call-to-action" style={{marginTop: '100px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>Ready to transform your space?</h2>
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

export default Home;
