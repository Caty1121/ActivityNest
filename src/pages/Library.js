import React, { } from 'react';
import OutdoorImage from '../images/outdoor-activities2.jpg';
import EducationImage from '../images/crafts2.jpg';
import WinterImage from '../images/seasonal-winter.jpg';
import './Library.css';

const Library = () => {
  return (
    <div className='library-box'>
      <h1>Activities Library</h1>
      <div className='carousel'>
        <div className='card-container'  >
          <div className='card'>

            <h2>Outdoor Activities</h2>
            <p>Get outside and explore.</p>
            <img src={OutdoorImage} className="outdoor-image" alt="Outdoor Image" />
          </div>
          <div className='card'>
            <h2>Educational Activities</h2>
            <p>Make learning fun.</p>
            <img src={EducationImage} className="outdoor-education" alt="Outdoor Education" />
          </div>
          <div className='card'>
            <h2>Seasonal Activities</h2>
            <p>Celebrate every season with themed activities.</p>
            <img src={WinterImage} className="winter-image" alt="Winter Image"/>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Library;
