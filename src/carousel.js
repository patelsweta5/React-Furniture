import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from './assets/images/site1 (4).jpeg';
import Image2 from './assets/images/site1 (5).jpeg';
import Image3 from './assets/images/site1 (6).jpeg';
import Image4 from './assets/images/Kitchen1 (1).jpeg';
import Image5 from './assets/images/trending-item-05.jpg';
import Image6 from './assets/images/trending-item-06.jpg';

const Carousel1 = () => {

    return (

        <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
        className="main-carousel"
      >
        {[Image1, Image2, Image3, Image4].map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ filter: 'grayscale(70%) brightness(50%)' }}
            />
            <div className="carousel-content">
              <h1>Interior Designer</h1>
              <p>Discover the art of creating a captivating interior design.</p>
            </div>
          </div>
        ))}
      </Carousel>

    );
}


export default Carousel1;


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to inc