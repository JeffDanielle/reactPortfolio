import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
    return ( 
       
      // <div className='d-flex justify-content-end fs-2 '>
        <Nav className=" d-flex justify-content-end fs-2 px-5 mt-1" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#about" className='text-white mx-3 fw-bold' >About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#myworks" className='text-white mx-3 fw-bold'>Work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" className='text-white mx-3 fw-bold'>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      // </div>
     );
}
 
export default NavigationBar;