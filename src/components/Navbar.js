import { Link } from 'react-router-dom';
import { Button, Container, Form, NavDropdown, Offcanvas, Nav, Navbar} from 'react-bootstrap';

const NavigationBar = () => {
    return ( 
      <Navbar expand="lg" className="d-flex justify-content-end">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-warning' />

      {/* Adjusting the Navbar.Collapse component to make it a sidebar */}
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-column align-items-end fs-2 px-5 mt-1">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="#about" className='text-white mx-3 fw-bold'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#myworks" className='text-white mx-3 fw-bold'>Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" className='text-white mx-3 fw-bold'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
}
 
export default NavigationBar;