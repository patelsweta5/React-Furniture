import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
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
        <div className='container expanded'>
          <div className="living_img" style={{ textAlign: 'center' }}>
            <h1>Turnkey Modular Furniture Manufacturers</h1>
          </div>
          <p>We have enough experience and expertise to manage and deliver your  entire project from concept to completion. Our skilled designers, craftsmen,  and engineers work vigorously to ensure that every feature of your project is  executed to the highest standards, on time, and within budget. We provide the  most suitable and attractive design because we understand the importance of  creating functional, sustainable, and aesthetically pleasant spaces. Our  modular furniture solutions are designed to elevate your space by maximizing  productivity, efficiency, and comfort.</p>
          <p>In the last few years, we’ve successfully executed  numerous contracts and turnkey systems in Gujarat, Rajasthan, Punjab,  Maharashtra, and Madhya Pradesh. Our provided services have won us a great  reputation, and we continue to attract more and more satisfied customers. We  have all of the necessary resources, including ministry, tools, and skilled  manpower, to complete our systems on time. Our designers almost cover the work  at all phases, ensuring that no portion is left unnoticed or undetected,  potentially resulting in client complaints. Our satisfied customers discuss  civil, false ceilings, flooring, carpentry, electrical plumbing, furniture,  oils, and other interior work. This allows them to compare our dedicated work  to that of others in the market, increasing the number of clients we can  satisfy.</p>

          <div className="">
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
                <h6 style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',

                  textAlign: 'center'
                }}></h6>
                <h1 style={{
                  position: 'absolute',
                  top: '60%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',

                  textAlign: 'center'
                }}></h1>

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
      </section>
      <section className="trending-page" style={{ textAlign: 'center' }}>
        <div className='container expanded'>
          <div className="row">
            <div className="col-md-6">
              <h5 className="text_list_header">Benefits of selecting a turnkey interior solution.</h5>
              
                <li className ="text_list">First, an important aspect of the turnkey interior solution is Time  Management. As it becomes so easy. Your turnkey solution provider will give stipulated time period. You just have to track that timeline and will receive daily updates from a single source every time.</li>
                <li className ="text_list">Second, you can easily manage your budgets and payments. A dedicate person from our team will handle all of the expenditure on the project; stick the budget and only a single window of supplier where you require to pay. A turnkey interior solution is also easier for the management of budgets and payment.</li>
                <li className ="text_list">A person who is working on your project will be an expert in this area. They will always try to make contacts with high-quality suppliers.</li>
              
             
            </div>
            <div className="col-md-6">
            <h5 className="text_list_header">Why you should go for turnkey interior solution.</h5>
              <li className ="text_list">As it is the best option for your interior design project. Either you are starting from new project or simply applying modifications to the current one. Before going for new products or new design ideas just consult our design team and discuss about your ideas, your requirements. They will listen and give you best option which is suitable according to your needs.</li>
              <h5 className="text_list_header">Some misconception about turnkey projects.</h5>
              <li className ="text_list">One of the most seen misconceptions is that property owners sometimes don’t get the freedom to express themselves. But in reality, turnkey projects are becoming more popular than self-managed projects due of clear communication, one point of contact, proper guidance, and dedication.</li>
            
            </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-md-6">
              <img src={Image6} alt="" />
              </div>
              <div className="col-md-6">
              <img src={Image6} alt="" />
              </div>
            </div>
          </div>
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

export default Trunky;