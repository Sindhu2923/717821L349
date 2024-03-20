import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
  return (
  
   <Navbar  expand="md"  data-bs-theme="dark" id='navbar'> 
    <Container className='bg-dark'>
      <Navbar.Brand href='Home'></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
      <Nav id='nav'>
        <Nav.Link href='/all'><span  >Products</span></Nav.Link>
        <Nav.Link href='about'><span  className='fw-bold'>About Us</span></Nav.Link>
        <Nav.Link href='contact'><span  className='fw-bold'>Contact Us</span></Nav.Link>
        <Nav.Link href='/signup'><span  className='fw-bold'>Register</span></Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
   
  )
}

export default Home