import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/Vishesh.jpg'

const Vishesh  = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Vishesh Bhriguvanshi</b></h2>
          <p><strong>Sport:</strong>Basketball</p>
          <p><strong>Awards:</strong>Arjuna Award</p>
          <p><strong>Age:</strong>32</p>
          <p><strong>Experience:</strong>10 years</p>
          <p><strong>Gender:</strong>Male</p>
        </div>
      </div>
    </div>
  );
};

export default Vishesh ;
