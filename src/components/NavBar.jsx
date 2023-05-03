import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { BsArrowRightShort } from "react-icons/bs";

function NavBar() {
    return (
        <Navbar bg="bg-transparent" className='p-4 banner'  expand="lg">
            <Container >
                <Navbar.Brand href="#home" className='text-white fw-bold fs-2' > BrandName</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto menu">
                        <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Product</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Pricing</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Contact</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto menu">
                        <Nav.Link href="#home" className='text-white'>Login</Nav.Link>
                        <Button variant="info" className='text-white' size="md" active>
                                JOIN US <BsArrowRightShort className='fs-4'/>
                        </Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar >
    )
}

export default NavBar