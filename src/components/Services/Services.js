import React from 'react'
// import img1 from '../../assets/images/dhoni.jpg'
import profilewomen from '../../assets/images/profilewomen.avif'
import profilemen from '../../assets/images/profilemen.avif'
import './Services.css';


const Services = () => {
    return (
        <>
            <div>
                <h4 className='title'>Coaches</h4>
            </div>
            <div>
                <div className="container">
                    <div class="row">
                        <div class="mb-3 col-sm-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilemen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Mahendra singh Dhoni</h5>
                                    <p class="card-text">Cricket coach</p>
                                    <a href="/Mahendra" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4 ">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilemen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Sunil Chhetri</h5>
                                    <p class="card-text">Football coach</p>
                                    <a href="/Sunil" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilemen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Mandeep Singh</h5>
                                    <p class="card-text">Hockey coach</p>
                                    <a href="/Mandeep" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilemen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Vijender Singh</h5>
                                    <p class="card-text">Boxing coach</p>
                                    <a href="/Vijender" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilemen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Vishesh Bhriguvanshi</h5>
                                    <p class="card-text">Basketball coach</p>
                                    <a href="/Vishesh" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilemen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Vinit Choudhary</h5>
                                    <p class="card-text">Vollyball coach</p>
                                    <a href="/Vinit" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilewomen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Smriti Mandhana</h5>
                                    <p class="card-text">Cricket coach</p>
                                    <a href="/Smriti" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilewomen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ashalata Devi</h5>
                                    <p class="card-text">Football coach</p>
                                    <a href="/Ashalata" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilewomen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Savita Punia</h5>
                                    <p class="card-text">Hockey coach</p>
                                    <a href="/Savita" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilewomen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Mary Kom</h5>
                                    <p class="card-text">Boxing coach</p>
                                    <a href="/Mary" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilewomen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Raspreet Sidhu</h5>
                                    <p class="card-text">Basketball coach</p>
                                    <a href="/Raspreet" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4">
                            <div class="card" style={{ width: 350 }}>
                                <img src={profilewomen} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Nirmal Tanwar</h5>
                                    <p class="card-text">Vollyball coach</p>
                                    <a href="/Nirmal" class="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Services;
