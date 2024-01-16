import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
    return ( 
        <section id='contact'>
            <h1 className="fw-bold mt-5 pt-5">Email Me</h1>
            <Container className='mt-5'>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Form>
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
        </section>
     );
}
 
export default ContactPage;