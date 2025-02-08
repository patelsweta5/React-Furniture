import React, { useEffect} from 'react';
import logo from './logo.svg';
import { Link, useNavigate } from 'react-router-dom';
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
import Image1 from './assets/images/office/OfficeImage1.jpeg';
import Image2 from './assets/images/office/OfficeImage2.jpeg';
import Image3 from './assets/images/office/OfficeImage3.jpeg';
import Image4 from './assets/images/office/OfficeImage4.jpeg';
import Image5 from './assets/images/office/OfficeImage5.jpeg';
import Image6 from './assets/images/office/OfficeImage6.jpeg';
import Image7 from './assets/images/trending-item-06.jpg';
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

const Furniture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <div className="page-banner change-name">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="header-text">
                <h2><em>Furniture Design</em></h2>
                <p>Discover the art of creating a captivating Restaurant interior.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="trending-page" style={{ textAlign: 'center' }}>
        <div className='container expanded'>
          <div className="section-heading" style={{ textAlign: 'center' }}>
            <h2>Furniture<br /><em>Design</em></h2>
          </div>
          <p>Create furniture masterpieces that seamlessly blend aesthetics, functionality, and sustainability to bring your dream vision to life.Elevate your space with furniture that combines artful design, practical function, and sustainable materials, tailored to your vision.Discover furniture that harmonizes style, versatility, and sustainability, crafted to make every room a masterpiece of design.Transform your living space with furniture that’s thoughtfully designed, sustainably sourced, and crafted to bring elegance and ease into everyday life.Create a home that embodies beauty and purpose with furniture designed to inspire, adapt, and endure.</p>
          <br />
          <p> Experience the perfect blend of form, function, and eco-friendly craftsmanship in furniture designed to elevate your lifestyle.Bring your dream space to life with furniture that prioritizes elegance, comfort, and sustainability—making every piece a timeless addition.</p>

          <div className="mt-5">
            <div className="row">
              <div className="col-md-6">
                <img className="imageHeight" src={Image7} alt="" />
              </div>
              <div className="col-md-6">
                <img className="imageHeight" src={Image7} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-md-6">
                <img className="imageHeight" src={Image6} alt="" />
              </div>
              <div className="col-md-6">
                <img className="imageHeight" src={Image5} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-md-6">
                <img className="imageHeight" src={Image4} alt="" />
              </div>
              <div className="col-md-6">
                <img className="imageHeight" src={Image2} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-md-6">
                <img className="imageHeight" src={Image3} alt="" />
              </div>
              <div className="col-md-6">
                <img className="imageHeight" src={Image1} alt="" />
              </div>
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
                    Once the design is finalized, we provide a detailed estimate of the project cost and timeline. This includes material and labor costs, project scheduling, and construction documentation. We believe in transparent communication and ensure that our clients are fully informed of the project progress at every stage and every changes.
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
                    <h2>Completion and Evaluation</h2>
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

export default Furniture;