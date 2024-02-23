import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/Savita.jpg'

const Savita = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Savita Punia</b></h2>
          <p><strong>Sport:</strong>Hockey</p>
          <p><strong>Awards:</strong>Arjuna Award for Hockey</p>
          <p><strong>Age:</strong>33</p>
          <p><strong>Experience:</strong>8 years</p>
          <p><strong>Gender:</strong>Female</p>
        </div>
      </div>
    </div>
  );
};

export default Savita;
