import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/animate.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-572-designer.css';
import './assets/css/owl.css';
import './assets/css/flex-slider.css';
import Image1 from './assets/images/site1 (4).jpeg';
import Image2 from './assets/images/site1 (5).jpeg';
import Image3 from './assets/images/site1 (6).jpeg';
import Image4 from './assets/images/Kitchen1 (1).jpeg';
import video from './assets/images/3770034-hd_1920_1080_25fps.mp4';
import Image5 from './assets/images/download.jpg';
import interiorimg from './assets/images/interior.png'
import furnitureimg from './assets/images/furniture.png';
import turnkeyimg from './assets/images/business.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Footer from './footer';
import './vendor/bootstrap/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel1 from './carousel';
import Card from 'react-bootstrap/Card';

const Home = () => {

    const [selectedCatagory, setSelectedCatagory] = useState();
    const [selectedPlan, setSelectedPlan] = useState();
    const images = [Image1, Image2, Image3, Image4, Image2, Image4];
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

    const handleNavigate = (selectedService) => {
        navigate('' + selectedService + '');
      };

    const groupedImages = images.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / 3);
        if (!result[chunkIndex]) {
            result[chunkIndex] = []; // Start a new group
        }
        result[chunkIndex].push(item);
        return result;
    }, []);

    return (
        <div className="App">
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>

            <div className="main-banner change-name">
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
                                                class="form-select" />
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
                                <video src={video} width="500" height="500" controls loop autoPlay  style={{ borderRadius: '3px' }} />
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
            
            <section>
                <div className='container expanded'>
                    <div className="row">
                        {/* <div className="col-lg-12"> */}
                        <div className="section-heading">
                            <h2>Have a quick look of <br /><em>our services</em></h2>
                        </div>
                        <div className="col-lg-4"  onClick={() => handleNavigate('furniture')}>
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
                        <div className="col-lg-4" onClick={() => handleNavigate('trunky')}>
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
                        <div className="col-lg-4" onClick={() => handleNavigate('interior')}>
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
            <section>
                <div className='container expanded'>
                    <div className="section-heading">
                        <h2>Have a quick look of <br /><em>our services</em></h2>
                        <div className="card-container">
                            {/* <div className="col-lg-12"> */}
                            <div className= "row"> 
                            {/* <div className='services-card d-flex justify-content-between gap-5'> */}
                                <div className='col-md-6'>
                                    <div className="services-card-container mb-4"  onClick={() => handleNavigate('modularkitchen')} >
                                        <img src={Image5} alt="" style={{ height: '300px', borderRadius: '3px' }}  onClick={() => handleNavigate('modularkitchen')}/>
                                        <h3 style={{ color: '#ff565b', marginTop: '10px' }}>Modular Kitchen</h3>
                                        <p class="service-card-description" >We craft simple modular kitchen designs that are the perfect blend of functionality and style.All our modern kitchen design ideas can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that works best for your home is our goal! </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                <div className="services-card-container mb-4" onClick={() => handleNavigate('modularkitchen')}>
                                    <img src={Image5} alt="" style={{ height: '300px', borderRadius: '3px' }}onClick={() => handleNavigate('lovingroom')}/>
                                    <h3 style={{ color: '#ff565b', marginTop: '10px' }}>Living Room Furniture</h3>
                                    <p class="service-card-description" >Discover a wide range of handpicked, living room interior designs and décor ideas at Livspace. We bring you living room designs that are customizable, practical and trendy. From modular TV units to wall paintings and living room wall designs, you’ll find all the inspiration you’ll need to get started. </p>
                                </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div className= "row"> 
                            {/* <div className='services-card d-flex justify-content-between gap-5'> */}
                                <div className='col-md-6'>
                                <div className="services-card-container mb-4" onClick={() => handleNavigate('modularkitchen')}>
                                    <img src={Image5} alt="" style={{ height: '300px', borderRadius: '3px' }} />
                                    <h3 style={{ color: '#ff565b', marginTop: '10px' }}>Bed Room Furniture</h3>
                                    <p class="service-card-description" >Our carefully-curated master bedroom designs come in a variety of styles, colour schemes and decor ideas - all of which can be customised to your taste. Whether you’re looking for a contemporary style or a room with rustic sensibilities, we’ve got all the bedroom interior design inspiration you’ll need to create a space that reflects your personality and taste. </p>

                                </div>
                                </div>
                                <div className='col-md-6'>
                                <div className="services-card-container mb-4" onClick={() => handleNavigate('modularkitchen')}>
                                    <img src={Image5} alt="" style={{ height: '300px', borderRadius: '3px' }} />
                                    <h3 style={{ color: '#ff565b', marginTop: '10px' }}>Office Furniture</h3>
                                    <p class="service-card-description" >Redefining Interior Design and Build through technology. Our endeavor is to put the joy back into the design and build process by driving customer delight in every step which is only possible through a bespoke tech-suite combined with category defining processes and benchmarks.</p>
                                </div>
                                </div>
                            </div>
                            <div className= "row"> 
                            {/* <div className='services-card d-flex justify-content-between gap-5'> */}
                                <div className='col-md-6'>
                                <div className="services-card-container" >
                                    <img src={Image5} alt="" style={{ height: '300px', borderRadius: '3px' }} />
                                    <h3 style={{ color: '#ff565b', marginTop: '10px' }}>Temple Furniture</h3>
                                    <p class="service-card-description" >The prayer room in Indian households is a peaceful and spiritual place. Where one can feel closer to the divinity.The wooden home temple designs are quite versatile and can fit into most of the rooms.We build a temple according to your faith.</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                <div className="services-card-container">
                                    <img src={Image5} alt="" style={{ height: '300px', borderRadius: '3px' }} />
                                    <h3 style={{ color: '#ff565b', marginTop: '10px' }}>Cafe And Restaurant Furniture</h3>
                                    <p class="service-card-description" >Setting up a restaurant is no easy feat, there are a whole lot of things that one has to consider, including licenses, chefs, real estate, location, deocr & furniture + ftting. We understand this simply because we have worked with serveral restaurants.Furniture is a crucial part of the decor for a restaurant or a cafe.</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="call-to-action" style={{ marginTop: '100px' }}>
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
