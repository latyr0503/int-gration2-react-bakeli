import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { BsDownload, BsFillAlarmFill, BsFillBarChartLineFill, BsFillStarFill, BsChevronRight } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillEye } from "react-icons/ai";
function CardSectiontwo(props) {
    return (
        <Col lg={3} md={6} sm={12}>
            <Card style={{ width: '16rem' }} className='border border-0' >
                <div className='position-relative'>
                    <Card.Img variant="top" src={props.image} />
                    <p className='badge  bg-danger position-absolute top-0 start-0 m-3'>Sale</p>
                    <div className='d-flex justify-content-center position-absolute  start-50 translate-middle-x lesIcons'>

                        <a href="http://google.com" target="_blank" rel="noopener noreferrer" className='iconCard'>
                            <AiOutlineHeart className=' text-black fs-1 p-2' />
                        </a>
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer" className='iconCard mx-3'>
                            <AiOutlineShoppingCart className='fs-1 text-black p-2' />
                        </a>
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer" className='iconCard'>
                            <AiFillEye className='text-black fs-1 p-2' />
                        </a>


                    </div>
                </div>
                <Card.Body>
                    <h6 className='text-primary my-4'>English <span className='bg-dark p-1 text-white rounded-pill float-end'><BsFillStarFill className='text-warning mx-2' />4.9</span></h6>
                    <Card.Title>{props.titre}</Card.Title>
                    <Card.Text>{props.texte}</Card.Text>
                    <p className='fw-bold'>
                        <BsDownload /> 15 Sales
                    </p>
                    <p className='text-muted'>
                        $16.48 <span className='text-success'>$6.48</span>
                    </p>
                    <p className='text-muted'>
                        <BsFillAlarmFill className='text-primary' /> Pro...
                        <BsFillBarChartLineFill className='text-warning ms-3' /> 64 les...
                        <BsFillAlarmFill className='text-primary ms-3' /> 22hr..
                    </p>
                    <Button className='rounded-pill my-3' variant="outline-primary">Learn More <BsChevronRight /></Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardSectiontwo