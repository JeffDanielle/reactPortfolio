import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const aboutPage = () => {
    return ( 
    <section id='about'>
       <h1 className='mt-5'>About</h1>
       <Container className='mt-5'>
            <Row className="">
                <Col className="px-4">
                     <h3 className='bg-warning text-black fs-4 fw-bold text-decoration-underline'>Who's this guy behind these codes?</h3>
                      <p className='mt-4 fw-bold'>My name is Jeff Danielle E. Bayot, I'm a fresh graduate at Ateneo de Naga University.
                        I'm an aspiring front-end web developer residing at Camarines
                        Sur, Naga City
                    </p>
                    <p className='mt-4 fw-bold'>I am passionate of implementing designs from prototype to a fully responsive
                        websites; I
                        found joy fixing UI designs to make it usable & user-friendly to the users.
                    </p>
                </Col>
                <Col className=''>
                     <h3 className='bg-warning text-black fs-4 fw-bold text-decoration-underline'>What does he do?</h3>
                     <p className='mt-4 fw-bold'>I usually work with front-end <strong>Html, Javascript, and CSS.</strong> On our capstone
                        project "Classroomify", to make our web application aesthetically pleasing we utilized Tailwind
                        for
                        our user interface design along with the framework VueJs; besides, I do have experience using
                        bootstrap since I attended some bootcamp to learn this css which makes development faster rather
                        than using vanilla CSS.
                    </p>
                </Col>
            </Row>
       </Container>
    </section>
     );
}
 
export default aboutPage;