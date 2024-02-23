import React from 'react'
import { Container, Row, Col, Carousel, CarouselCaption } from 'react-bootstrap';
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic4 from '../../assets/images/pic4.jpg';
import pic5 from '../../assets/images/swimmingcom.jpg'

const Caro = () => {
    return (
        <div className='my-2'>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img src={pic4} alt='slide1' className='d-block w-100' />
                            <CarouselCaption>
                                <h3>25% Discount on basketball</h3>
                                <p>Terms and conditions apply</p>
                            </CarouselCaption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={pic5} alt='slide2' className='d-block w-100' />
                            <CarouselCaption>
                                <h3>Swimmng Compititions</h3>
                                <p >Venue:Balewadi Stadium Swimming Pool <br></br>
                                National Games Park, Mahalunge, Pune, Maharashtra<br></br>
                                Contact:7058597989</p>
                            </CarouselCaption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={pic1} alt='slide3' className='d-block w-100' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={pic2} alt='slide4' className='d-block w-100' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={pic3} alt='slide5' className='d-block w-100' />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}

export default Caro;
