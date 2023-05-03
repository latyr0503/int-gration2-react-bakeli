import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import BoxHeader from './BoxHeader'
import icon1 from "../media/bleu.png"
import icon2 from "../media/rouge.png"
import icon3 from "../media/vert.png"

function Banner() {
    return (
        <Container fluid className='banner py-5'>
            <Row className='py-5'> 
                <Col className='text-center my-5'>
                    <h4>Welcome</h4>
                    <h1 className='bannerTitre'>Selling on the internet like a pro</h1>
                    <p>We know large objects will act, but things on a small scale juste do not act that way.</p>
                    <Button variant="info"  size="md" className='m-2 p-3 text-white' active>
                        Get Quote Now
                    </Button>
                    <Button variant="outline-info" className='m-2 p-3' >
                        Learn More
                    </Button>
                </Col>
            </Row>
            <Row className='mx-auto pb-5'>
                <div className='col-1'></div>
                <BoxHeader icon={icon2} title={"training Courses"} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse molestias corrupti placeat eos fugiat!'} />
                <BoxHeader icon={icon3} title={"2,769 online courses"} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse molestias corrupti placeat eos fugiat!'}/>
                <BoxHeader icon={icon1} title={"training Courses"} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse molestias corrupti placeat eos fugiat!'}/>
                <div className='col-1'></div>
            </Row>  
        </Container>
    )
}

export default Banner