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
        <div class="">
            <div class="">
                <div class="">
                    <Carousel
                        infiniteLoop={true}
                        autoPlay={true}
                        showStatus={false}
                        showArrows={false}
                        showThumbs={false}
                        interval={2000}
                    // className="main-banner change-name"
                    >
                        <div>
                            <img src={Image1} style={{ filter: 'grayscale(70%) brightness(50%)' }} />
                            
                            <h1 style={{
                                position: 'absolute',
                                top: '60%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '50px',
                                fontStyle: "normal",
                                color: 'red',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                textAlign: 'center'
                            }}>Interior Designer</h1>
                            <p style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',

                                textAlign: 'center'
                            }}>Discover the art of creating a captivating interior design.</p>
                        </div>
                        <div>
                            <img src={Image2} style={{ filter: 'grayscale(70%) brightness(50%)' }} />
                        </div>
                        <div>
                            <img src={Image3} style={{ filter: 'grayscale(70%) brightness(50%)' }} />
                        </div>
                        <div>
                            <img src={Image4} style={{ filter: 'grayscale(70%) brightness(50%)' }} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}


export default Carousel1;


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to inc