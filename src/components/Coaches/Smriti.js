import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/smriti.jpg'

const Smriti  = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Smriti Mandhana</b></h2>
          <p><strong>Sport:</strong>Cricket</p>
          <p><strong>Awards:</strong>Arjuna Award for Cricket</p>
          <p><strong>Age:</strong>27</p>
          <p><strong>Experience:</strong>10 years</p>
          <p><strong>Gender:</strong>Female</p>
        </div>
      </div>
    </div>
  );
};

export default Smriti ;
