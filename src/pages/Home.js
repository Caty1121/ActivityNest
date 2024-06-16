import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div>
      <div className='home-box'>
        <div className="hero-banner">
            <h2 id='hero'>Engage Your Family with Outdoor Fun and Educational Activities Every Month</h2>
            <button className="call-to-action">Suscribe Now</button>
            </div>
            <div className='features-overview'>
              <div className='home-image'></div>
              <h3 class='discover'>Discover a wide range of activities designed to bring families closer together.
                From crafts to outdoor adventures, there's something for everyone.
              </h3>
            
            <div className='testimonials'>
              <h3 className="testimonials-header">Testimonials</h3>
              <h4 className='testimonial-header'>
                Our subscribers love the variety and quality of activities. 
                Here's what they have to say...
              </h4>
                <p id='test-1'>
                "ActivityNest has been a game-changer for our family. 
                The activities are so well thought out and easy to follow. 
                My kids look forward to our 'Activity Night' every week. 
                We've bonded over crafts, science experiments, and outdoor adventures. 
                I highly recommend this service to any family looking to spend quality time together!" 
                -Sarah M. 
                from Seattle, WA
                </p>
                <p id='test-2'>
                "As a busy parent, I struggle to come up with new and engaging activities for my kids. ActivityNest has taken that burden off my shoulders. The variety of activities available is fantastic, and I love how they cater to different interests and age groups. It's worth every penny!" 
                -John D.
                from Austin, TX
                </p>
                <p id="test-3">
                  "ActivityNest is amazing! My children and I have enjoyed so many fun and educational activities together. The guides are clear and easy to follow, and the materials are always top-notch. It's brought us closer as a family and made learning fun. Thank you, ActivityNest!"
                  -Emily R.
                  from New York, NY
                </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;