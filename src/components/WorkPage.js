import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClassroomifyImg from '../images/classroomify.png'
import UnitsImg from '../images/units.png'

import { Link } from 'react-router-dom'

const MyProjects = () => {
    return ( 
        <section id="myworks" className="mt-5 pt-2 pb-5" >
           <h1 className='mt-1 fw-bold'>My Works</h1>
            <Container className='mt-3 pt-5'>
                  <Row>
                     <Col xs={12} lg={6} className='mb-3'>
                        <Link to='https://classroomify-v1.netlify.app' target='_blank'><Image src={ClassroomifyImg} className='img-thumbnail' id='projects-img' alt='classroomify-thumbnail'/></Link>

                     </Col>
                     <Col xs={12} lg={5} className='d-flex align-items-center'>
                        <div className='bg-secondary rounded'>
                         <h3 className='bg-warning rounded text-black fs-4 px-2 py-2 fw-bold'>Classroomify: A platform to gamify google classroom</h3>
                           <p className='fs-5 text-center ms-2'>A capstone project which aims to implement fun in an online classroom setting. </p>
                        </div>
                     </Col>
                  </Row>
            </Container>
            <Container className='mt-5 pt-5'>
                  <Row>
                     <Col xs={12} lg={6} className='mb-3'>
                        <Link to='https://classroomify-v1.netlify.app' target='_blank'><Image src={ClassroomifyImg} className='img-thumbnail' id='projects-img' alt='classroomify-thumbnail'/></Link>

                     </Col>
                     <Col xs={12} lg={5} className='d-flex align-items-center'>
                        <div className='bg-secondary rounded'>
                           <h3 className='bg-warning rounded text-black fs-4 px-2 py-2 fw-bold'>Classroomify: A platform to gamify google classroom</h3>
                           <p className='text-center fs-5'>Units Converter</p>
                        </div>
                     </Col>
                  </Row>
            </Container>
            <Container className='mt-5 pt-5'>
                  <Row>
                     <Col xs={12} lg={6} className='mb-3'>
                        <Link to='https://unitsconversion.netlify.app' target='_blank'><Image src={UnitsImg} className='img-thumbnail' id='projects-img' alt='classroomify-thumbnail'/></Link>

                     </Col>
                     <Col xs={12} lg={5} className='d-flex align-items-center'>
                        <div className='bg-secondary rounded'>
                           <h3 className='bg-warning rounded text-black fs-4 px-2 py-2 fw-bold'>Metric Converter</h3>
                           <p className='fs-5 text-center ms-2'>A simple metric converter which converts a user input to length, volume, mass.</p>
                        </div>
                     </Col>
                  </Row>
            </Container>

        </section>
     );
}
 
export default MyProjects;