import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardSectionThree from './CardSectionThree'
import image1 from '../media/testimonial1.png'
import image2 from '../media/testimonial2.png'

function SectionThree() {
    return (
        <Container className='my-5 p-5'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h5>
                        Pratice Advice
                    </h5>
                    <h2 className='fs-1'>
                        Our Experts Teacher
                    </h2>
                    <p>
                        Problems trying ti resolve the conflict between <br />
                        the two major realms of Classical physics : Newtonian mechanics
                    </p>
                </Col>
            </Row>
            <Row className='my-5'>
                <CardSectionThree image={image1} name={'Racky Cissé'}/>
                <CardSectionThree image={image2} name={'Marième Fall'}/>
            </Row>
        </Container>
    )
}

export default SectionThree