import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './assets/css/animate.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-572-designer.css';
import './assets/css/owl.css';
import './assets/css/flex-slider.css';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css'; // Core CSS
import 'lightgallery/css/lg-zoom.css'; // Zoom plugin CSS
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Footer from './footer';
import video from './assets/images/4492794-uhd_3840_2160_25fps.mp4';
import Image1 from './assets/images/office/OfficeImage1.jpeg';
import Image2 from './assets/images/office/OfficeImage2.jpeg';
import Image3 from './assets/images/office/OfficeImage3.jpeg';
import Image4 from './assets/images/office/OfficeImage4.jpeg';
import Image5 from './assets/images/office/OfficeImage5.jpeg';
import Image6 from './assets/images/office/OfficeImage6.jpeg';
import interiordesign from './assets/images/office/OfficeImage2.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const images = [
    { src: Image1, alt: 'Trending Item 1' },
    { src: Image2, alt: 'Trending Item 2' },
    { src: Image3, alt: 'Trending Item 3' },
    { src: Image4, alt: 'Trending Item 4' },
    { src: Image5, alt: 'Trending Item 5' },
    { src: Image6, alt: 'Trending Item 6' },
    // { src: Image7, alt: 'Trending Item 7' },
    // { src: Image8, alt: 'Trending Item 8' },
    // { src: Image9, alt: 'Trending Item 6' },
    // { src: Image10, alt: 'Trending Item 7' },
    // { src: Image11, alt: 'Trending Item 8' },
]

const Interior = () => {
    return (
        <div>
            <div className="page-banner change-name">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="header-text">
                                <h2><em>Interior Design</em></h2>
                                <p>Discover the art of creating a captivating interior design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="trending-page" style={{ textAlign: 'center' }}>
                <div className='container expanded'>
                    <div className="section-heading" style={{ textAlign: 'center' }}>
                        <h2>Interior<br /><em>Design</em></h2>
                    </div>
                    <p>Interior design is the art and science of creating a functional, aesthetically pleasing, and sustainable interior space for a building.
                        Interior design is different from interior decorating, which is the process of furnishing or adorning a space with decorative elements
                        It involves a variety of tasks, including Client Consulting, Development Of Interior Design, Detailed Cost Structure For Interiors, Space Planning, Detailed Furniture Drawing.
                    </p>
                    <br />
                    <p>We tremendously work hard on conceptual development, site inspections, space planning, research along with construction management to introduce nothing but the best interior design for your home, office and work space.  We take in the account of every tiny detail from our precious clients prior to execution of the design.  As a leading interior designers, we believe in providing the best decoration enriched with the latest trend and beautiful designing feature that mesmerizes the every guest that enters your space. </p>

                </div>
                <video src={video}  height="500" controls loop autoPlay />
            </section>
            <section className='trending-page'>
                <div className='container expanded'>
                    <div className="section-heading" style={{ textAlign: 'center' }}>
                        <h2>Our<br /><em>Services</em></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 no-margin-left">
                        <div className="">
                                <img src={interiordesign} alt="about" style={{height: '438px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-6 services" style={{padding: "30px"}}>
                            <h2>Residential Interior Design</h2>
                            <p>Our residential interior design services are designed to create beautiful and functional homes that reflect your personal style and preferences.</p>
                            <ul>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Space planning</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Furniture and decor selection</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Lighting design</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Material selection</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Project management and execution</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Procurement</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Layout design.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 services" style={{padding: "30px"}}>
                            <h2>Office Interior Design</h2>
                            <p>Our office interior design services are designed to create modern and functional workspaces that reflect your brand and values and enhance employee productivity and satisfaction.</p>
                            <ul>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Space planning</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Furniture and decor selection</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Lighting design</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Material selection</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Project management and execution</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Procurement</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Layout design.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 no-margin-left">
                        <div className="">
                                <img src={interiordesign} alt="about" style={{height: '438px'}} />
                            </div>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-lg-6 no-margin-left">
                        <div className="">
                                <img src={interiordesign} alt="about" style={{height: '438px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-6 services" style={{padding: "30px"}}>
                            <h2>Commercial Interior Design</h2>
                            <p>Our commercial interior design services are designed to create inspiring and functional spaces that enhance productivity and creativity.</p>
                            <ul>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Space planning</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Furniture and decor selection</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Lighting design</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Material selection</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Project management and execution</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Procurement</span>
                                </li>
                                <li className='res-interior'>
                                    <span><i class="fa-brands fa-codepen"></i></span>
                                    <span className="services_list">Layout design.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='trending-page'>
                <div className='container expanded no-margin-left'>
                    <div className="row">
                        {/* <div className="col-lg-12"> */}
                            <div className="section-heading">
                                <h2>Have a quick look of <br /><em>our services</em></h2>
                            </div>
                            <div className="col-lg-4">
                                <Card >
                                    <Card.Body>
                                           <Card.Text className='interiorCardText' >
                                            <h2>Planning and Design</h2>
                                           This step involves working closely with the client to understand their vision and requirements for the project. This includes site analysis, feasibility studies, conceptual design, and 3D visualization. Our experienced team of architects and designers will collaborate with you to create a design that is functional, aesthetic, and sustainable.
                                           </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4">
                                <Card >
                                    <Card.Body>
                                        {/* <Card.Title style={{ fontSize: '17px', fontWeight: '700', color: '#2a2a2a' }}>Turnkey Projects</Card.Title>
                                        <br /> */}
                                        <Card.Text className='interiorCardText' >
                                            <h2>Estimation and Documentation</h2>
                                            Once the design is finalized, we provide a detailed estimate of the project cost and timeline. This includes material and labor costs, project scheduling, and construction documentation. We believe in transparent communication and ensure that our clients are fully informed of the project progress at every stage.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4">
                                <Card>
                                    <Card.Body>
                                        {/* <Card.Title style={{ fontSize: '17px', fontWeight: '700', color: '#2a2a2a' }}>Interior</Card.Title>
                                        <br /> */}
                                        <Card.Text className='interiorCardText' >
                                            <h2>Project Completion and Evaluation</h2>
                                            This step involves the successful completion of the project within the agreed timeline and budget. We conduct a final evaluation to ensure that all work meets the highest standards of quality and excellence. Our commitment to customer satisfaction is reflected in our post-completion follow-up to ensure that the project meets our clients’ expectations.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    {/* </div> */}
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
}

export default Interior;