import React from 'react';
import './Subscriptions.css';

const Subscriptions = () => {
  return (
    <div>

      <div className="subscriptions">
        <h1>Subscription Plans</h1>
        <div className='plan-comparison'>
          <div className='pricing'>
          </div>  
            <h4>
              Choose the Perfect Plan for Your Family. Monthly, quarterly, and yearly options available.
            </h4>
              <div id="plans-card">
                <div className='plans' id='monthly'>

                  <h3>Monthly Plan:</h3>
                  <h5 className='price'>$19.99</h5>
                  <h4 className='features'>Features:</h4>
                    <ul>
                      <li> 3 curated activities per month</li>
                      <li>Access to online activity guides</li>
                      <li>Monthly newsletter with extra tips & tricks</li>
                    </ul>
                </div>
                <div className='plans' id='Quarterly'>
                  <h3>Quarterly Plan:</h3>
                    <h5 className='price'>$54.99 (Save 8%)</h5>
                    <h4 className='features'>Features:</h4>
                      <ul>
                        <li> 3 curated activities per month</li>
                        <li>Access to online activity guides</li>
                        <li>Monthly newsletter with extra tips and tricks</li>
                        <li>Exclusive seasonal activities</li>
                      </ul>
                </div>
                <div className='plans' id='Yearly'>
                  <h3>Yearly Plan:</h3>
                    <h5 className='price'>$199.99 (Save 17%)</h5>
                    <h4 className='features'>Features:</h4>
                      <ul>
                        <li>3 curated activities per month</li>
                        <li>Access to online activity guides</li>
                        <li>Monthly newsletter with extra tips and tricks</li>
                        <li>Exclusive seasonal activities</li>
                        <li>One bonus activity kit per year</li>
                      </ul>
                </div>
              </div>    
      </div>
        
        <div className='sign-up-process'>
          <h3>How to Get Started</h3>
            <h5 className='get-started'></h5>
            <ul>
              <li  className='steps'> 
                <strong>Select Your Plan:</strong> Choose the plan that best fits your family's needs.
              </li>
              <li className='steps'>
                <strong>Create an Account:</strong> Provide your details to create a secure account.
              </li>
              <li className='steps'>
                <strong>Checkout:</strong> Enter your payment and shipping information.
              </li>
              <li className='steps'><strong>Enjoy: </strong>Start receiving your monthly activity kits and make family time fun and educational!
              </li>
            </ul>
        </div>
        <button className='suscribe-now'>Sign Up Now</button>
      </div>
    </div>
  );
};

export default Subscriptions;