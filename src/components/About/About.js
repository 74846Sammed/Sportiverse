import React from 'react'
import img1 from '../../assets/images/satisfaction.png'
import img2 from '../../assets/images/transport.png'
import img3 from '../../assets/images/delivery.png'

const About = () => {
    return (
        <>
            <div className='title'>
                <h1>About Us</h1>
            </div>
            <div className='para' class="container">
                <p>
                    Welcome to Sportyverse, where passion meets performance!
                </p>
                <p>
                    At Sportyverse, we believe that sports are more than just a pastime; they're a way of life.
                    Whether you're a seasoned athlete or just getting started on your fitness journey, we're here to 
                    support you every step of the way.
                </p>
                <p>
                    Our story began with a simple mission: to provide athletes of all levels with access to high-quality 
                    sports equipment and gear at affordable prices. What started as a small, local shop has now grown into a 
                    global destination for sports enthusiasts everywhere.
                </p>
                <p>
                    What sets us apart? It's our unwavering commitment to excellence in everything we do. From curating the 
                    latest and greatest products from top brands to providing unparalleled customer service, we strive to 
                    exceed your expectations every time you shop with us.
                </p>
                <p>
                    But we're more than just a store; we're a community. We're proud to be a hub where athletes can come 
                    together, share their passion for sports, and inspire each other to reach new heights. Whether you're 
                    looking for advice on gear selection, training tips, or simply want to connect with like-minded individuals, 
                    you'll find a supportive and welcoming community here at Sportyverse.
                </p>
                <p>
                    So whether you're hitting the field, the court, or the gym, trust Sportyverse to equip you with everything 
                    you need to succeed. Join us on this journey, and let's make every moment count!
                </p>
            </div>
            <hr></hr>
            <div className='bottom'>
            <footer class="row">
                <div class="col-lg-1">

                </div>
                <div class="col-lg-2"><img src={img1} alt="logo1" width="100px" height="100px"/>
                <p>100% Customer Satisfaction</p>
                </div>
                <div class="col-lg-2"><img src={img3} alt="logo1" width="100px" height="100px"/>
                <p>Easy to return</p>
                </div> 
                <div class="col-lg-2"><img src={img2} alt="logo1" width="100px" height="100px"/>
                <p>Free delivery</p>
                </div>
            </footer>
            </div>
        </>
    )
}

export default About
