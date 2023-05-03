import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { BsDownload, BsFillAlarmFill, BsFillBarChartLineFill, BsFillStarFill, BsChevronRight } from "react-icons/bs";
function CardSectiontwo(props) {
    return (
        <Col lg={3} md={6} sm={12}>
            <Card style={{ width: '16rem' }} className='border border-0' >
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <h6 className='text-primary my-4'>English <span className='bg-dark p-1 text-white rounded-pill float-end'><BsFillStarFill className='text-warning mx-2'/>4.9</span></h6>
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
                    <Button className='rounded-pill my-3' variant="outline-primary">Learn More <BsChevronRight/></Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardSectiontwo