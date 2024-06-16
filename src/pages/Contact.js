import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-box">
      <div className="customer-service">
        <h1>Customer Service</h1>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: support@activitynest.com</p>
          <p>Phone: (123) 657-5309</p>
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
            <label>Name</label>
            <input type="text" name="name" placeholder='Name' />
            <label>Email</label>
            <input type="email" name="email" placeholder='email'/>
            <label>Message</label>
            <textarea name="message" placeholder='Message'></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>  
  );
};

export default Contact;