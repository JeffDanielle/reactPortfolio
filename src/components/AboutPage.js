import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormalImg from '../images/formal.jpg'
import ReactImg from '../images/science.png'
import BootImg from '../images/bootstrap.png'
import GitImg from '../images/github.png'
import HtmlImg from '../images/html-5.png'
import JsImg from '../images/js.png'
import VueImg from '../images/vueJs.png'



import Image from 'react-bootstrap/Image'


const aboutPage = () => {
    return ( 
    <section id='about' className='ms-5'>
       <h1 className='pt-1 pb-5 fw-bold'>About Me</h1>
       <Container className='mt-4'>
            <Row className="">
                <Col xs={12} md={6} lg={6} className="px-4">
                     <h3 className='bg-warning text-black fs-4 fw-bold text-decoration-underline'>Who's this guy behind these codes?</h3>
                      <p className='mt-4 fw-bold text-start'>My name is Jeff Danielle E. Bayot, I'm a fresh graduate at Ateneo de Naga University.
                        I'm an aspiring front-end web developer residing at Camarines
                        Sur, Naga City
                    </p>
                    <p className='mt-4 fw-bold text-start'>I am passionate of implementing designs from prototype to a fully responsive
                        websites; I
                        found joy fixing UI designs to make it usable & user-friendly to the users.
                    </p>
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                     <Image src={FormalImg} id='profile-img' alt="profile_image" className='img-thumbnail' />
                </Col>
            </Row>
        </Container>
       <Container className=''>
            <Row className='mt-5'>
                <Col xs={12} md={6} lg={6} className=''>
                     <h3 className='bg-warning text-black fs-4 fw-bold text-decoration-underline'>What does he do?</h3>
                     <p className='mt-4 fw-bold text-start'>I usually work with front-end <strong>Html, Javascript, and CSS.</strong> On our capstone
                        project "Classroomify", to make our web application aesthetically pleasing we utilized Tailwind
                        for
                        our user interface design along with the framework VueJs; besides, I do have experience using
                        bootstrap since I attended some bootcamp to learn this css which makes development faster rather
                        than using vanilla CSS.
                    </p>
                </Col>
                <Col className='mt-5'>
                        <div className='mb-4'>
                            <Image src={ReactImg} id='tool-img' alt="react_image" className='ms-4' />
                            <Image src={BootImg} id='tool-img' alt="bootstrap_image" className='ms-4' />
                            <Image src={GitImg} id='tool-img' alt="git_image" className='ms-4' />
                        </div>
                        <div>
                            <Image src={HtmlImg} id='tool-img' alt="html_image" className='ms-4' />
                            <Image src={JsImg} id='tool-img' alt="js_image" className='ms-4' />
                            <Image src={VueImg} id='tool-img' alt="js_image" className='ms-4' />
                        </div>
                </Col>
            </Row>
        </Container>
       
    </section>
     );
}
 
export default aboutPage;