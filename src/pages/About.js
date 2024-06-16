import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className='about-box'>
        <div class="container">
          <h1>About Us</h1>
            <h2><strong>Welcome to ActivityNest!</strong></h2>
            <p>At ActivityNest, we believe in the power of play. Our mission is to inspire children and families to engage in fun, educational, and creative activities that foster learning, imagination, and togetherness. Whether you're looking for eco-friendly toys, interactive games, or innovative DIY kits, ActivityNest is your go-to destination for enriching family experiences.</p>

          <h2>Our Story</h2>
            <p>ActivityNest was born out of a desire to create a space where families can find high-quality, thoughtfully designed products that encourage active play and learning. As parents and educators, we understand the importance of nurturing young minds and providing opportunities for growth and discovery. That's why we carefully curate our collection to include only the best items that align with our values of sustainability, creativity, and education.</p>

          <h2>Our Values</h2>
          <div class="values">
                <h3>Sustainability</h3>
                <p>We are committed to offering products that are eco-friendly and safe for both children and the planet. Our selection includes items made from recycled materials, sustainably sourced wood, and non-toxic paints.</p>
                <h3>Creativity</h3>
                <p>We believe that playtime should be an adventure. Our products are designed to spark imagination and creativity, helping children to explore new ideas and express themselves.</p>
                <h3>Education</h3>
                <p>Learning can be fun! We choose products that combine play with educational value, supporting cognitive and emotional development through hands-on activities and problem-solving.</p>
          </div>

          <h2>Why Choose ActivityNest?</h2>
            <p><strong>Curated Selection:</strong> We take pride in handpicking each product in our store, ensuring that it meets our high standards of quality and educational value.</p>
            <p><strong>Customer-Centric:</strong> Your satisfaction is our top priority. We are dedicated to providing excellent customer service and a seamless shopping experience.</p>
            <p><strong>Community:</strong> Join our ActivityNest family and connect with other parents and educators who share your passion for enriching play. Follow us on social media for tips, ideas, and inspiration.</p>

          <h2>Join Us on Our Journey</h2>
            <p>We invite you to explore our collection and discover the joy of learning through play. Together, let's create memories, inspire creativity, and build a brighter future for our children.</p>
            <p>Thank you for being a part of the ActivityNest community!</p>

          <h2>Have questions?</h2>
          <div class="contact">
            <button className='contact-us'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
