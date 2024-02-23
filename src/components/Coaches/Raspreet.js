import React from 'react';
import './Coaches.css';
import img1 from '../../assets/images/Raspreet.jpg'

const Raspreet = () => {
  return (
    <div className="teacher-profile">
      <div className="profile-border">
        <img src={img1} alt="Teacher" className="profile-photo" />
        <div className="profile-details">
          <h2><b>Raspreet Sidhu</b></h2>
          <p><strong>Sport:</strong>Basketball</p>
          <p><strong>Awards:</strong>Captain of Indian Women's Basketball Team,Maharana Mewar Awardee</p>
          <p><strong>Age:</strong>34</p>
          <p><strong>Experience:</strong>11 years</p>
          <p><strong>Gender:</strong>Female</p>
        </div>
      </div>
    </div>
  );
};

export default Raspreet;
