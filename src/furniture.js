import React from 'react';
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
import Image1 from './assets/images/office/OfficeImage1.jpeg';
import Image2 from './assets/images/office/OfficeImage2.jpeg';
import Image3 from './assets/images/office/OfficeImage3.jpeg';
import Image4 from './assets/images/office/OfficeImage4.jpeg';
import Image5 from './assets/images/office/OfficeImage5.jpeg';
import Image6 from './assets/images/office/OfficeImage6.jpeg';
import Image7 from './assets/images/trending-item-06.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <img src={Image7} alt="" />
              </div>
              <div className="col-md-6">
                <img src={Image7} alt="" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Furniture;