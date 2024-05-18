import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClassroomifyImg from '../images/classroomify.png'
import blackjackImg from '../images/blackjack.png'
import todoImg from '../images/todo-list.png'
import { Link } from 'react-router-dom'

const MyProjects = () => {
    return ( 
        <section id="myworks" className="mt-5 pt-2 pb-5" >
           <h1 className='mt-1 fw-bold'>My Works</h1>
           {/* 1st project */}
            <Container className='mt-3 pt-5'> 
                  <Row>
                     <Col xs={12} lg={6} className='mb-3'>
                        <Link to='https://classroomify-v1.netlify.app' target='_blank'><Image src={ClassroomifyImg} className='img-thumbnail' id='projects-img' alt='classroomify-thumbnail'/></Link>

                     </Col>
                     <Col xs={12} lg={5} className='d-flex align-items-center'>
                        <div className='bg-secondary rounded ms-lg-5'>
                         <h3 className='bg-warning rounded text-black fs-4 px-2 py-2 fw-bold'>Classroomify: A platform to gamify google classroom</h3>
                           <p className='fs-5 text-center ms-2'>A capstone project which aims to implement fun in an online classroom setting. </p>
                        </div>
                     </Col>
                  </Row>
            </Container>
            {/* 2nd project */}
            <Container className='mt-5 pt-5'>
                  <Row>
                     <Col xs={12} lg={6} className='mb-3'>
                        <Link to='https://mock-blackjack.netlify.app' target='_blank'><Image src={blackjackImg} className='img-thumbnail' id='projects-img' alt='classroomify-thumbnail'/></Link>
                     </Col>
                     <Col xs={12} lg={5} className='d-flex align-items-center'>
                        <div className='bg-secondary rounded ms-lg-5'>
                           <h3 className='bg-warning rounded text-black fs-4 px-2 py-2 fw-bold'>Simple Blackjack</h3>
                           <p className='text-center fs-5'>A simple blackjack game developed using vanilla html, css and javascript</p>
                        </div>
                     </Col>
                  </Row>
            </Container>
            {/* 3rd project */}
            <Container className='mt-5 pt-5'>
                  <Row>
                     <Col xs={12} lg={6} className='mb-3'>
                        <Link to='https://simple-todo-listtt.netlify.app' target='_blank'><Image src={todoImg} className='img-thumbnail border border-light-subtle' id='projects-img' alt='classroomify-thumbnail'/></Link>
                     </Col>
                     <Col xs={12} lg={5} className='d-flex align-items-center'>
                        <div className='bg-secondary rounded ms-lg-5'>
                           <h3 className='bg-warning rounded text-black fs-4 px-2 py-2 fw-bold'>Simple todo list</h3>
                           <p className='fs-5 text-center ms-2'>A simple to do list app developed using reactJs with add and delete feature </p>
                        </div>
                     </Col>
                  </Row>
            </Container>

        </section>
     );
}
 
export default MyProjects;