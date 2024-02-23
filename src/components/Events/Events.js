import React from 'react'
// import img1 from '../../assets/images/dhoni.jpg'
import img1 from '../../assets/images/cricket animated.avif'
import img2 from '../../assets/images/footballgif.gif'
import img3 from '../../assets/images/hockeyani.gif'
import img4 from '../../assets/images/boxingani.gif'
import img5 from '../../assets/images/basketballani.gif'
import img6 from '../../assets/images/vollyballani.gif'
import './Events.css';


const Events = () => {
    return (
        <>
            <div>
                <h4 className='title'>Events</h4>
            </div>
            <div>
                <div className="container">
                    <div class="row">
                        <div class="mb-3 col-sm-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={img1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Cricket Event</h5>
                                    <p class="card-text">D.Y.Patil stadium,Mumbai<br></br>
                                    Contact: Ravi-8080808080</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4 ">
                            <div class="card" style={{ width: 350 }}>
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Football Event</h5>
                                    <p class="card-text">GMC Stadium Bambolim(Goa)<br></br>
                                    Contact: Lionel-7070707070</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={img3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Hockey Event</h5>
                                    <p class="card-text">Dhyan Chand National Stadium ,New Delhi<br></br>
                                    Contact: Aanand-9090909090</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350}}>
                                <img src={img4} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Boxing Event</h5>
                                    <p class="card-text">Balewadi stadium,Pune<br>
                                    </br>Contact: Raj-6060606060</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={img5} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Basketball Event</h5>
                                    <p class="card-text">Symbiosis Basketball Court,Pune<br>
                                    </br>Contact: Rahul-4040404040</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={img6} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Volleyball Event</h5>
                                    <p class="card-text">Baner Balewadi Volleyball Club,Pune<br>
                                    </br>Contact: Dilip-1234567890</p>
                                    
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </>

    )
}

export default Events;
