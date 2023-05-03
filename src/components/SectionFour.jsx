import React from 'react'
import { Col, Container, Row, InputGroup, Form, Button } from 'react-bootstrap'

function SectionFour() {
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={12} md={12} sm={12} className='text-center'>
                    <h4>
                        Pratice Advice
                    </h4>
                    <h2 className='fs-1'>
                        Featured Products
                    </h2>
                    <p className='text-muted'>
                        Problems trying to resolve the conflict between <br />
                        The two major realms of Classical physics: Newtoniam mechanics
                    </p>

                    <InputGroup className="my-5 w-75 h-25 mx-auto">
                        <Form.Control
                            placeholder="Your Email"
                            aria-label="Your Email"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="info" id="button-addon2" className='w-25 text-white'>
                            Subscribe
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionFour