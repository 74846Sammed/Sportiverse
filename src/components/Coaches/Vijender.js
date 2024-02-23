import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/Vijender.avif'

const Vijender  = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Vijender Singh</b></h2>
          <p><strong>Sport:</strong>Boxing</p>
          <p><strong>Awards:</strong>Arjuna Award,Padma Shri</p>
          <p><strong>Age:</strong>38</p>
          <p><strong>Experience:</strong>13 years</p>
          <p><strong>Gender:</strong>Male</p>
        </div>
      </div>
    </div>
  );
};

export default Vijender ;
