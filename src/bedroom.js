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
import Footer from'./footer';
import Image1 from './assets/images/bedroom/bedroom1.jpeg';
import Image2 from './assets/images/bedroom/bedroom2.jpeg';
import Image3 from './assets/images/bedroom/bedroom3.jpeg';
import Image4 from './assets/images/bedroom/bedroom4.jpeg';
import Image5 from './assets/images/bedroom/bedroom5.jpeg';
import Image6 from './assets/images/bedroom/bedroom10.jpeg';
import Image7 from './assets/images/bedroom/bedroom11.jpeg';
import Image8 from './assets/images/bedroom/bedroom12.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const images = [
    { src: Image1, alt: 'Trending Item 1' },
    { src: Image2, alt: 'Trending Item 2' },
    { src: Image3, alt: 'Trending Item 3' },
    { src: Image4, alt: 'Trending Item 4' },
    { src: Image5, alt: 'Trending Item 5' },
    { src: Image6, alt: 'Trending Item 6' },
    { src: Image7, alt: 'Trending Item 7' },
    { src: Image8, alt: 'Trending Item 8' },
    // { src: Image9, alt: 'Trending Item 6' },
    // { src: Image10, alt: 'Trending Item 7' },
    // { src: Image11, alt: 'Trending Item 8' },
  ]

const BedRoom = () => {
    return (
        <div>
        <div className="page-banner change-name">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="header-text">
                  <h2><em>BedRoom </em>Interior Design</h2>
                  <p>Discover the art of creating a captivating bedroom room interior.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="trending-page" style={{ textAlign: 'center' }}>
        <div className ="living_img" style={{ textAlign: 'center' }}>
          <h1>Refreshing Modern bedroom design ideas</h1>
          <p>From ultra thin bed design or sleek minimalist style bedrooms. Rustic decor bedroom to crisp white Scandainavian style . Choose your color style, bed style and Light design. Each elements of bedroom is connected with each other.</p>
        </div>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} className="gallery" style={{ textAlign: 'center' }}> 
          {images.map((image, index) => (
            <a href={image.src} key={index}>
              <img src={image.src} alt={image.alt} style={{ width: '30%', margin: '5px' }}  />
            </a>
          ))}
        </LightGallery>
        <div className ="living_img" style={{ textAlign: 'center' }}>
          <h1>Smart Bedroom Wardrobe Design ideas</h1>
          <p>All bedroom wardrobe have the same basic function to provide safe place to your cloths and accessories. The way to design this place can be challenging. Think about out of the box design options for your wardrobe design. Here are some designer wardrobe which are becoming popular. If you are looking exclusive idea for you, connect with us.</p>
        </div>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} className="gallery" style={{ textAlign: 'center' }}> 
          {images.map((image, index) => (
            <a href={image.src} key={index}>
              <img src={image.src} alt={image.alt} style={{ width: '30%', margin: '5px' }}  />
            </a>
          ))}
        </LightGallery>
        <div className ="living_img" style={{ textAlign: 'center' }}>
          <h1>Dressing table- Create the perfect spot</h1>
          <p>All bedroom wardrobe have the same basic function to provide safe place to your cloths and accessories. The way to design this place can be challenging. Think about out of the box design options for your wardrobe design. Here are some designer wardrobe which are becoming popular. If you are looking exclusive idea for you, connect with us.</p>
        </div>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} className="gallery" style={{ textAlign: 'center' }}> 
          {images.map((image, index) => (
            <a href={image.src} key={index}>
              <img src={image.src} alt={image.alt} style={{ width: '30%', margin: '5px' }}  />
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

export default BedRoom;