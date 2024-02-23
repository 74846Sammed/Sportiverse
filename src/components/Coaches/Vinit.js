import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/Vinit.jpg'

const Vinit  = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Vinit Choudhary</b></h2>
          <p><strong>Sport:</strong>Vollyballball</p>
          <p><strong>Awards:</strong>Arjuna Award</p>
          <p><strong>Age:</strong>30</p>
          <p><strong>Experience:</strong>8 years</p>
          <p><strong>Gender:</strong>Male</p>
        </div>
      </div>
    </div>
  );
};

export default Vinit ;
