import { Container, Nav, Navbar, Col} from 'react-bootstrap';
import { useEffect } from 'react'; 
import Image from 'react-bootstrap/Image'
import logoImg from '../images/logo.png'
import { motion, useAnimation } from 'framer-motion';
// import React, { useState } from 'react';

const NavigationBar = () => {
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // console.log(scrollTop)
      if (scrollTop > lastScrollTop){
        // Scroll down
        controls.start({ y: '-100%', transition: { duration: 0.3 } });
      } else {
        // Scroll up
        controls.start({ y: '0%', transition: { duration: 0.3 } });
      }
      lastScrollTop = scrollTop
      // console.log(lastScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls])

    return ( 
    <motion.div animate={controls} className='fixed-top'>
      <Navbar bg="dark" variant='dark' expand='lg'>
      <Container className="d-flex align-items-center p-0">
        <Col xs={1} sm={1} md={1} className=''>
          <Navbar.Brand href='#home' className='ms-lg-4'>
            <Image src={logoImg} className='rounded-5' id='logo-img' />
          </Navbar.Brand>
        </Col>
        <Col xs={1.5} sm={1} md={1} className=''>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='py-1 px-1 me-1' />
        </Col>
      </Container>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fs-3 me-3">
          <Nav className=''>
           <Nav.Link href="#about" className='mx-3 fw-bold'>About</Nav.Link>
           <Nav.Link href="#myworks" className='mx-3 fw-bold'>Work</Nav.Link>
           <Nav.Link href="#contact" className='mx-3 fw-bold'>Contact</Nav.Link>
         </Nav>
       </Navbar.Collapse>
      </Navbar>
    </motion.div>
     );
}
 
export default NavigationBar;