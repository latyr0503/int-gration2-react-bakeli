import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardSectiontwo from './CardSectiontwo'
import imgCard1 from "../media/crayon.png"
import imgCard2 from "../media/lamp.png"
import imgCard3 from "../media/tokyo.png"
import imgCard4 from "../media/prof.png"


function Sectiontwo() {
    return (
        <Container className='my-5 p-5'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h5>
                        Pratice Advice
                    </h5>
                    <h2 className='fs-1'>
                        Make online education accessible
                    </h2>
                    <p>
                        Problems trying ti resolve the conflict between <br />
                        the two major realms of Classical physics : Newtonian mechanics
                    </p>
                </Col>
            </Row>
            <Row className='my-5'>
                < CardSectiontwo
                    image={imgCard1}
                    titre={"Graphic Design"}
                    texte={'We focus on ergonomics and meeting you...'} />
                < CardSectiontwo
                    image={imgCard2}
                    titre={"Graphic Design"}
                    texte={'We focus on ergonomics and meeting you...'} />
                < CardSectiontwo
                    image={imgCard3}
                    titre={"Graphic Design"}
                    texte={'We focus on ergonomics and meeting you...'} />
                < CardSectiontwo
                    image={imgCard4}
                    titre={"Graphic Design"}
                    texte={'We focus on ergonomics and meeting you...'} />
            </Row>
        </Container>
    )
}

export default Sectiontwo