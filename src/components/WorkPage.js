import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClassroomifyImg from '../images/classroomify.png'
import UnitsImg from '../images/units.png'

import { Link } from 'react-router-dom'

const MyProjects = () => {
    return ( 
        <section id="myworks" className="mt-5 pt-2 pb-5">
           <h1 className='mt-1 fw-bold'>My Works</h1>
            <Container className='mt-5 pt-5'>
                  <Row>
                     <Col className=''>
                        <Link to='https://classroomify-v1.netlify.app' target='_blank'><Image src={ClassroomifyImg} className='img-thumbnail ms-3' id='projects-img' alt='classroomify-thumbnail'/></Link>

                     </Col>
                     <Col className='ms-5'>
                         <h3 className='bg-warning rounded text-black fs-4 px-2 py-2'>Classroomify: A platform to gamify google classroom</h3>

                     </Col>
                  </Row>
            </Container>
            <Container className='mt-5 pt-5'>
                  <Row>
                     <Col className=''>
                        <Link to='https://classroomify-v1.netlify.app' target='_blank'><Image src={ClassroomifyImg} className='img-thumbnail ms-3' id='projects-img' alt='classroomify-thumbnail'/></Link>

                     </Col>
                     <Col className='ms-5'>
                         <h3 className='bg-warning rounded text-black fs-4 px-2 py-2'>Classroomify: A platform to gamify google classroom</h3>
                     </Col>
                  </Row>
            </Container>
            <Container className='mt-5 pt-5'>
                  <Row>
                     <Col className=''>
                        <Link to='https://unitsconversion.netlify.app' target='_blank'><Image src={UnitsImg} className='img-thumbnail ms-3' id='projects-img' alt='classroomify-thumbnail'/></Link>

                     </Col>
                     <Col className='ms-5'>
                         <h3 className='bg-warning rounded text-black fs-4 px-2 py-2'>Classroomify: A platform to gamify google classroom</h3>

                     </Col>
                  </Row>
            </Container>

        </section>
     );
}
 
export default MyProjects;