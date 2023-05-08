import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import logo from '../img/logo.png';
const LearnupNavbar = (props) => {
  return (
    <div>{props.children}
      <Navbar bg="light" expand="lg" className="fixed-top">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <img src={logo} className="logo-resize mr-5" alt='noimg'/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Cources</Nav.Link>
            <Nav.Link href="#action3">Contact</Nav.Link>
          </Nav>
          <div className="d-flex ml-auto">
            <Button variant="outline-danger bg-danger text-light" className='mr-2'>Sign in</Button>
            <Button variant="outline-dark bg-dark text-light">Sign up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default LearnupNavbar
