import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/dhoni.jpg'

const Mahendra = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Mahendra Singh Dhoni</b></h2>
          <p><strong>Sport:</strong>Cricket</p>
          <p><strong>Awards:</strong>Padma Bhushan, Padma Shri,Major Dhyanchand Khel Ratna award</p>
          <p><strong>Age:</strong>42</p>
          <p><strong>Experience:</strong>25 years</p>
          <p><strong>Gender:</strong>Male</p>
        </div>
      </div>
    </div>
  );
};

export default Mahendra;
