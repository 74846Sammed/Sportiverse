import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/Ashalata.jpg'

const Ashalata = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Ashalata Devi</b></h2>
          <p><strong>Sport:</strong>Football</p>
          <p><strong>Awards:</strong>League Best Defender,AIFF women's player of the year,AFC women's player of the year</p>
          <p><strong>Age:</strong>30</p>
          <p><strong>Experience:</strong>8 years</p>
          <p><strong>Gender:</strong>Female</p>
        </div>
      </div>
    </div>
  );
};

export default Ashalata;
