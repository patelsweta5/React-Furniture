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
import Image1 from './assets/images/ushaper1.webp';
import Image2 from './assets/images/ushaper1.webp';
import Image3 from './assets/images/Kitchen1 (1).jpeg';
import Image4 from './assets/images/Kitchen1 (1).jpeg';
import Image5 from './assets/images/trending-item-05.jpg';
import Image6 from './assets/images/trending-item-06.jpg';
import Image7 from './assets/images/trending-item-07.jpg';
import Image8 from './assets/images/trending-item-08.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const Trunky = () => {
    return (
        <div>
        <div className="page-banner change-name">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="header-text">
                  <h2><em>Restaurant</em>Interior Design</h2>
                  <p>Discover the art of creating a captivating Restaurant interior.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="trending-page" style={{ textAlign: 'center' }}>
        <div className ="living_img" style={{ textAlign: 'center' }}>
          <h1>Turnkey Modular Furniture Manufacturers</h1>
        </div>
        <p>SMK Modulars is the leading contractor of <strong>turnkey  interior projects for corporate offices</strong> and a one-stop solution for all  your turnkey interior contracting and modular furniture designing and  manufacturing requirements. As one of the leading turnkey interior contractors  in India, we have enough experience and expertise to manage and deliver your  entire project from concept to completion. Our skilled designers, craftsmen,  and engineers work vigorously to ensure that every feature of your project is  executed to the highest standards, on time, and within budget. We provide the  most suitable and attractive design because we understand the importance of  creating functional, sustainable, and aesthetically pleasant spaces. Our  modular furniture solutions are designed to elevate your space by maximizing  productivity, efficiency, and comfort.</p>
        <p>In the last few years, we’ve successfully executed  numerous contracts and turnkey systems in Gujarat, Rajasthan, Punjab,  Maharashtra, and Madhya Pradesh. Our provided services have won us a great  reputation, and we continue to attract more and more satisfied customers. We  have all of the necessary resources, including ministry, tools, and skilled  manpower, to complete our systems on time. Our designers almost cover the work  at all phases, ensuring that no portion is left unnoticed or undetected,  potentially resulting in client complaints. Our satisfied customers discuss  civil, false ceilings, flooring, carpentry, electrical plumbing, furniture,  oils, and other interior work. This allows them to compare our dedicated work  to that of others in the market, increasing the number of clients we can  satisfy.</p>
      </section>
      </div>
    );
}

export default Trunky;