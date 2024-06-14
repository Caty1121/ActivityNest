import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="hero-banner">
        <h2>Engage Your Family with Outdoor Fun and Educational Activities Every Month</h2>
        <button className="call-to-action">Suscribe Now</button>
        </div>
        <div className='features-overview'>
          <h3>Discover a wide range of activities designed to bring families closer together.
             From crafts to outdoor adventures, there's something for everyone.
          </h3>
        </div>
        <div className='testimonials'>
          <h4 className='testimonial-header'>
          Our subscribers love the variety and quality of activities. 
          Here's what they have to say...
          </h4>
        </div>
    </div>
  );
};

export default Home;