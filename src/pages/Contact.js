import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-box">
      <div className="customer-service">
        <h1>Customer Service</h1>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> support@activitynest.com</p>
          <p><strong>Phone:</strong> (123) 657-5309</p>
          <h3>FAQs</h3>
          <ul>
            <li>How do I track my order?</li>
            <li>What is your return policy?</li>
            <li>How do I change my subscription plan?</li>
          </ul>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <label></label>
            <input type="text" name="name" placeholder='Name' />
            <label></label>
            <input type="email" name="email" placeholder='Email'/>
            <label></label>
            <textarea name="message" placeholder='Message'></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>  
  );
};

export default Contact;