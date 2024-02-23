import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/Sunil.jpg'

const Sunil  = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Sunil Chhetri</b></h2>
          <p><strong>Sport:</strong>Football</p>
          <p><strong>Awards:</strong>Padma Shri,Arjuna Award,Major Dhyan Chand Khel Ratna Award </p>
          <p><strong>Age:</strong>39</p>
          <p><strong>Experience:</strong>15 years</p>
          <p><strong>Gender:</strong>Male</p>
        </div>
      </div>
    </div>
  );
};

export default Sunil ;
