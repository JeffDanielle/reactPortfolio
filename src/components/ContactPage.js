import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import LinkedImg from '../images/linkedin.png'
import GitImg from '../images/github.png'
import WhatsappImg from '../images/whatsapp.png'
import { Link } from 'react-router-dom'

const ContactPage = () => {
    return ( 
        <section id='contact'>
            <h1 className="fw-bold mt-5 pt-5">Email Me</h1>
            <Container className='mt-5'>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Form>
                            <Form.Text className="text-light fs-5">
                                Use the form below to send me an email.
                            </Form.Text>
                            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Your name" />
                                <Button className='ms-3' variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex" controlId="formBasicMsg">
                                <Form.Control as='textarea' placeholder="Enter message" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
        </Container>
        <div id='container' className='d-flex align-items-end px-5'>
            <div className='text-start ms-5'>
                <Link to='https://www.linkedin.com/in/jeff-danielle-bayot/' target='_blank'>
                    <Image src={LinkedImg} id='contact-img' className='ms-4' alt='linkedin-thumbnail' />
                </Link>
                <Link to='https://github.com/JeffDanielle' target='_blank'>
                    <Image src={GitImg} id='contact-img' className='ms-4' alt='Github-thumbnail' />
                </Link>
                <Link to='https://api.whatsapp.com/send/?phone=%2B639560424087&text&type=phone_number&app_absent=0' target='_blank'>
                    <Image src={WhatsappImg} id='contact-img' className='ms-4' alt='Whatsapp-thumbnail' />
                </Link>
            </div>
            <ul className='d-flex list-unstyled mt-4 px-1 fs-6'>
                <li className='px-3 text-nowrap'>Contact no: 09560424087</li>
                <li className='px-3 text-nowrap'>(C)2024 Jeff Bayot</li>
            </ul>
        </div>
        </section>
     );
}
 
export default ContactPage;