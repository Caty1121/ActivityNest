import React from 'react';
import OutdoorImage from '../images/outdoor-activities2.jpg';
import EducationImage from '../images/crafts2.jpg';
import WinterImage from '../images/seasonal-winter.jpg';
import './Library.css';


const Library = () => {
  return (
    <div>
      <div>
        <h1>Activities Library</h1>
          <div className='outdoor-activities'>
            <h3>Outdoor Activities</h3>
              <p>Get outside and explore with activities like nature scavenger hunts and sports.</p>
              <img src={OutdoorImage} className="Outdoor Image" alt="Outdoor Image" />
          </div>
          <div className='educational-activities'>
            <h3>Educational Activities</h3>
              <p>Make learning fun with science experiments and educational games.</p>
                <img src={EducationImage} className="Outdoor Eduction" alt="Outdoor Education" />
          </div>
          <div className='seasonal-activities'>
            <h3>Seasonal Activities</h3>
              <p>Celebrate every season with themed activities for holidays and special occasions.</p>
                <img src={WinterImage} className="winter-image" alt="winter-image"/>
          </div>
      </div>  
    </div>
  );
};

export default Library;