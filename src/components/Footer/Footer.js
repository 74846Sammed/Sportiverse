import React from 'react';
import './Footer.css';
import img1 from '../../assets/images/facebook.png'
import img2 from '../../assets/images/instagram.png'
import img3 from '../../assets/images/twitterx.png'

function Footer() {
  return (
    <div className ="foot">
      <div class="row">
        <div class="col-lg-4">
            <h4>Sportyverse :</h4>
            <p>Sportyverse:The ultimate destination for athletes and sports enthusiasts of all
              levels! Our platform is designed to cater to every aspect of your sporting journey.</p>
        </div>
        <div class="col-lg-4">
            <h4>Contacts:</h4>
            <p>Email: Sporyverse777@gmail.com</p>
            <p>Phone: +91-7775966555</p>
        </div>
        <div class="col-lg-4">
          <h4>Follow Us:</h4>
          <a href="/error"><img src={img1} alt="facebook" width="30px" height="30px"/></a>
          <a href="/error"><img src={img2} alt="instagram"width="30px" height="30\px"/></a>
          <a href="/error"><img src={img3} alt="twitter"width="30px" height="30px"/></a>

            
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Sportyverse. All rights reserved.</p>
        </div>
      </div>

    </div>
  );
}

            
export default Footer;




            
            
            