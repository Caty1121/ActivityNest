import React from 'react';

const Subscriptions = () => {
  return (
    <div>
      <div className="subscriptions">
        <h1>Subscription Plans</h1>
        <div className='plan-comparison'>
          <h3>Plan Comparison</h3>
            <p>
            Choose the plan that works best for your family. Monthly, quarterly, and yearly options available.
            </p>
        </div>    
        <div className='pricing'>
          <h3>Pricing</h3>
          <p>Our subscription plans are designed to be affordable and flexible. See pricing details below.</p>
        </div>
        
        <div className='sign-up-process'>
          <h3>Signup Process</h3>
            <p>Signing up is easy! Choose your plan, create an account, and start enjoying family activities today.</p>
        </div>
        <button className='suscribe-now'>Suscribe Now</button>
      </div>
    </div>
  );
};

export default Subscriptions;