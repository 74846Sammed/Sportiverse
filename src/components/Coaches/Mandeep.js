import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/Mandeep.jpg'

const Mandeep  = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Mandeep Singh</b></h2>
          <p><strong>Sport:</strong>Hockey</p>
          <p><strong>Awards:</strong>Arjuna Award </p>
          <p><strong>Age:</strong>29</p>
          <p><strong>Experience:</strong>10 years</p>
          <p><strong>Gender:</strong>Male</p>
        </div>
      </div>
    </div>
  );
};

export default Mandeep ;
