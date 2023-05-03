import React from 'react'
import { Col } from 'react-bootstrap'


function BoxHeader(props) {

return (
    <Col lg={3} md={3} sm={12} className='box-header p-5 m-lg-3'>
        <p className='box-header-icon p-4'> <img src={props.icon} className='img-fluid' alt="" /></p>
        <h5>{props.title}</h5>
        <div className='box-header-barre my-3'></div>
        <p className='box-header-text'>{props.text}</p>
    </Col>
)
}

export default BoxHeader