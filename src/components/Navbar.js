import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
// import React, { useState } from 'react';

const NavigationBar = () => {
    return ( 
      <Navbar bg="dark" variant='dark' expand='lg'>
        <Navbar.Brand className='ms-3'>Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='me-2' />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fs-3 me-3">
          <Nav>
           <Nav.Link href="#about" className='mx-3 fw-bold'>About</Nav.Link>
           <Nav.Link href="#myworks" className='mx-3 fw-bold'>Work</Nav.Link>
           <Nav.Link href="#contact" className='mx-3 fw-bold'>Contact</Nav.Link>
         </Nav>
       </Navbar.Collapse>
      </Navbar>
    //   <Navbar bg="dark" variant="dark" expand="lg">
    //   <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fs-3">
    //     <Nav>
    //       <Nav.Link href="#about" className='mx-3 fw-bold'>About</Nav.Link>
    //       <Nav.Link href="#myworks" className='mx-3 fw-bold'>Work</Nav.Link>
    //       <Nav.Link href="#contact" className='mx-3 fw-bold'>Contact</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    //  </Navbar>
     );
}
 
export default NavigationBar;