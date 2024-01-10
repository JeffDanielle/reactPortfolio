import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return ( 
       
      // <div className='d-flex justify-content-end fs-2 '>
        <Nav className=" d-flex justify-content-end fs-2 px-5 mt-1 border-bottom" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#home" className='text-white mx-3' >About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className='text-white mx-3'>Work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className='text-white mx-3'>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      // </div>
     );
}
 
export default NavigationBar;