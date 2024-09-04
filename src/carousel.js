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
                infiniteLoop={true}
                autoPlay={true}
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                interval={2000}
            >
                <div>
                    <img src= {Image1} style={{ filter: 'grayscale(70%) brightness(50%)' }}/>
                </div>
                <div>
                    <img src= {Image2} style={{ filter: 'grayscale(70%) brightness(50%)' }} />  
                </div>
                <div>
                    <img src= {Image3} style={{ filter: 'grayscale(70%) brightness(50%)' }}/>
                </div>
                <div>
                    <img src= {Image4} style={{ filter: 'grayscale(70%) brightness(50%)' }}/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }


export default Carousel1;


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to inc