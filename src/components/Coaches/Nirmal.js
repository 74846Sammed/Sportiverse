import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/nirmal.jpg'

const Nirmal = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Nirmal Tanwar</b></h2>
          <p><strong>Sport:</strong>Vollyball</p>
          <p><strong>Awards:</strong>Captain of Indian Women's Vollyball Team</p>
          <p><strong>Age:</strong>27</p>
          <p><strong>Experience:</strong>5 years</p>
          <p><strong>Gender:</strong>Female</p>
        </div>
      </div>
    </div>
  );
};

export default Nirmal;
