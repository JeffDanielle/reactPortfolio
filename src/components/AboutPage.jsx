import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormalImg from '../images/formal.jpg'
import ReactImg from '../images/science.png'
import BootImg from '../images/bootstrap.png'
import GitImg from '../images/github.png'
import HtmlImg from '../images/html-5.png'
import JsImg from '../images/js.png'
import TailwindImg from '../images/tailwind.png'
import Image from 'react-bootstrap/Image'
import { motion } from 'framer-motion';


const aboutPage = () => {
    
    return ( 
    <section id='about' className='' style={{ minHeight: '100vh'}}>
       <h1 className='pt-1 pt-md-5 pb-5 fw-bold'>About Me</h1>
       <Container className='mt-4'>
            <Row className="flex-column-reverse flex-md-row flex-lg-row align-items-center ">
                <Col xs={12} md={6} lg={6} className="px-4">
                    <motion.h3 className='bg-warning text-black fs-4 fw-bold text-decoration-underline'>Who's this guy behind these codes?</motion.h3>
                    <p className='mt-4 fw-bold text-start'>My name is Jeff Danielle E. Bayot, I'm a fresh graduate at Ateneo de Naga University. I'm an aspiring front-end web developer residing at Camarines Sur, Naga City.</p>
                    <p className='mt-4 fw-bold text-start'>I am passionate about implementing designs from prototype to a fully responsive website; I found joy fixing UI designs to make it usable & user-friendly to the users.</p>
                </Col>
                <Col xs={12} md={6} lg={6} className='d-flex align-items-center justify-content-center mb-3 mb-md-0 mb-lg-0'>
                    <Image src={FormalImg} id='profile-img' alt="profile_image" className='img-thumbnail' />
                </Col>
            </Row>
        </Container>
       <Container className=''>
            <Row className='mt-5 flex-column-reverse flex-md-row flex-lg-row'>
                <Col xs={12} md={6} lg={6}  className=''>
                     <h3 className='bg-warning text-black fs-4 fw-bold text-decoration-underline'>What does he do?</h3>
                     <p className='mt-4 fw-bold text-start'>I usually work on front-end using <strong>Html, Javascript, and CSS.</strong> On developing projects
                        to make the web application aesthetically pleasing, I utilized some of CSS frameworks
                        for the user interface design along with the various frameworks listed; the core experiences that made me learn the frameworks are capstone and internship.
                    </p>
                </Col>
                <Col xs={12} md={6} lg={6} className='mt-5 d-flex align-items-center flex-wrap text-center mb-2 mb-md-0 mb-lg-0'>
                        <div className='mb-4'>
                            <Image src={ReactImg} id='tool-img' alt="react_image" className='mb-4' />
                            <Image src={BootImg} id='tool-img' alt="bootstrap_image" className='ms-4 mb-4' />
                            <Image src={GitImg} id='tool-img' alt="git_image" className='ms-4 mb-4' />
                            <div></div>
                            <Image src={HtmlImg} id='tool-img' alt="html_image" className='' />
                            <Image src={JsImg} id='tool-img' alt="js_image" className='ms-4' />
                            <Image src={TailwindImg} id='tool-img' alt="js_image" className='ms-4' />
                        </div>
                </Col>
            </Row>
        </Container>
       
    </section>
     );
}
 
export default aboutPage;