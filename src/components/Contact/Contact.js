import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Contactus = () => {

    return (
        <>
            
            <h2 className='heading'>Feel free to Contact Us</h2>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.166152841377!2d73.91502356596905!3d18.51572311126869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c18d3fd3454d%3A0x38ae6b1008a0d0c4!2sMagarpatta%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708167491394!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.205116328569!2d73.9287098737204!3d18.51963076920588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f243f053e3%3A0xe6a53b5cb4aa97ca!2sSeasons%20Mall!5e0!3m2!1sen!2sin!4v1708095858141!5m2!1sen!2sin" className='location' width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="Container" >
                <div className='contact-form'>
                    <form action='' method='POST' className='contact-inputs'>
                        <input type="text" style={{width:'300px'}} placeholder='Username' name='username' required autoComplete='off'  />
                        <input type='email' style={{width:'300px'}} name='Email' placeholder='Email' autoComplete='off' required />
                        <textarea name="message" placeholder='Enter your message' cols="38" rows="8" required autoComplete='off' />
                        <input type="submit" value="SEND"  />
                    </form>
                </div>
            </div>
           

        </>

    )

}

export default Contactus;
