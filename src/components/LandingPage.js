import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import BgImage from '../images/image.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const homepage = () => {
    return ( 
        <section id="home" className='mt-3'>
        <Container className='border-bottom'>
            <Row className="d-flex justify-content-evenly align-items-center">
                <Col xs="auto" className="mr-3">
                <Image src={BgImage} alt="background_image" className='mt-1' />
                </Col>
                <Col className='ms-5 text-start'>
                    <p className="text_header fs-1 fw-bold mb-3"><span className="txt_Hello">Hello</span>, I'm Jeff!</p>
                    <p className="bg-warning text-dark fs-1 fw-bold text-left d-inline-block py-2 px-3"> Crafting things for the web </p>
                </Col>
            </Row>
        </Container>
    </section>
     );
}
 
export default homepage;