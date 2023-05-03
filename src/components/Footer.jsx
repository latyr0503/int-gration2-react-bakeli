import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
    return (
        <Container fluid>
            <Row className='banner footer p-5'>
                <Col lg={3} md={6} sm={12} className='p-4'>
                    <h3>
                        Get In Touch
                    </h3>
                    <p>
                        the quick fox jumps over the lazy dog
                    </p>
                    <a href="http://google" target="_blank" rel="noopener noreferrer"><BsFacebook className='mx-2 fs-4 text-info' /></a>
                    <a href="http://google.com" target="_blank" rel="noopener noreferrer"><BsInstagram className='mx-2 fs-4 text-info' /></a>
                    <a href="http://google.com" target="_blank" rel="noopener noreferrer"><BsTwitter className='mx-2 fs-4 text-info' /></a>
                </Col>
                <Col lg={3} md={6} sm={12} className='p-4'>
                    <h3>
                        Company info
                    </h3>
                    <ul className='list-unstyled '>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className='p-4'>
                    <h3>
                        Features
                    </h3>
                    <ul className='list-unstyled'>
                        <li>Bussiness Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className='p-4'>
                    <h3>
                        Ressources
                    </h3>
                    <ul className='list-unstyled'>
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </Col>
            </Row>
            <Row className='bg-light p-3'>
                <Col>
                    <p className='text-center text-muted'>
                        Made With Love By Figmaland All Right Reserved
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer