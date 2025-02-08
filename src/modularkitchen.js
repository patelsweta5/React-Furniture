import React, { useEffect} from 'react';
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
import Image1 from './assets/images/kitchen/kitchen1.jpg';
import Image2 from './assets/images/kitchen/kitchen1.jpg';
import Image3 from './assets/images/kitchen/kitchen1.jpg';
import Image4 from './assets/images/kitchen/kitchen1.jpg';
import Image5 from './assets/images/kitchen/kitchen1.jpg';
import Image6 from './assets/images/kitchen/kitchen1.jpg';
import Image7 from './assets/images/kitchen/kitchen1.jpg';
import Image8 from './assets/images/kitchen/kitchen1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const images = [
  { src: Image1, alt: 'Trending Item 1' },
  { src: Image2, alt: 'Trending Item 2' },
  { src: Image3, alt: 'Trending Item 3' },
  { src: Image4, alt: 'Trending Item 4' },
  { src: Image5, alt: 'Trending Item 5' },
  { src: Image6, alt: 'Trending Item 6' },
  { src: Image7, alt: 'Trending Item 7' },
  { src: Image8, alt: 'Trending Item 8' },
  ]

const Modularkitchen = () => {
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
                <h2><em>Kitchen </em>Interior Design</h2>
                <p>Discover the art of creating a captivating living room interior.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="trending-page" style={{ textAlign: 'center' }}>
        <div className="living_img" style={{ textAlign: 'center' }} >
          <h1>Modular Living Room Interior Design </h1>
        </div>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} className="gallery">
          {images.map((image, index) => (
            <a href={image.src} key={index}>
              <img src={image.src} alt={image.alt} style={{ width: '30%', margin: '5px' }} />
            </a>
          ))}
        </LightGallery>
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
}

export default Modularkitchen;