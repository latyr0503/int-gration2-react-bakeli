import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { BsFillStarFill } from "react-icons/bs";
function CardSectionThree(props) {
    return (
        <Col lg={6} md={6} sm={12}>
            <Card style={{ width: '18rem' }} className='border border-0 mx-auto' >
                <Card.Img variant="top" src={props.image} className='rounded-circle img-fluid w-50 mx-auto'/>
                <Card.Body className='text-center'>
                    <Card.Text >
                        Slate helps you see how many more days you need to
                        work to reach your financial goal for the monther and year.
                    </Card.Text>
                    <h6 className='fs-4 text-warning  my-3'> 
                        <BsFillStarFill className='mx-2'/>
                        <BsFillStarFill className='mx-2'/>
                        <BsFillStarFill className='mx-2'/>
                        <BsFillStarFill className='mx-2'/>
                        <BsFillStarFill className='text-muted mx-2'/>
                    </h6>
                    <Card.Title>{props.name}</Card.Title>
                    <p className='text-muted'>
                        Designer
                    </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardSectionThree