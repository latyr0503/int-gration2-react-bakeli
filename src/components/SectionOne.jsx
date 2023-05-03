import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image1 from '../media/Rectangle 51.png'
import image2 from '../media/image 1.png'
import image3 from '../media/image 3.png'
import { BsChevronRight } from "react-icons/bs";

function SectionOne() {
  return (
    <Container className='p-5 my-5'>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className='SecOneLeft'>
            <div className='my-5 SecOneleftDiv1'></div>
            <h2>Packages that are aprodable</h2>
            <p className='pe-5 text-muted'>
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">Learn More < BsChevronRight /></a>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className='SecOneRight'>
            <div className='SecOneRightDiv1'></div>
            <img src={image1} className='img-fluid SecOneRightImg1 position-absolute' alt="" />
            <img src={image3} className='img-fluid SecOneRightImg2 position-absolute' alt="" />
            <img src={image2} className='img-fluid SecOneRightImg3 position-absolute ' alt="" />
            <div className='SecOneRightDiv2'> </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionOne