import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/mary.png'

const Mary = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Mary Kom</b></h2>
          <p><strong>Sport:</strong>Boxing</p>
          <p><strong>Awards:</strong>Padma Vibhushan, Padma Shri, Padma Bhushan</p>
          <p><strong>Age:</strong>41</p>
          <p><strong>Experience:</strong>15 years</p>
          <p><strong>Gender:</strong>Female</p>
        </div>
      </div>
    </div>
  );
};

export default Mary;
