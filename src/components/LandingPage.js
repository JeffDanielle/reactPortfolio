import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import BgImage from '../images/image.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const homepage = () => {
    return ( 
        <section id="home" className='mt-3' style={{ minHeight: '100vh'}}>
        <Container className=''>
        <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} sm={6} md={6} lg={4} className="mb-3 mb-md-5">
                <Image src={BgImage} alt="background_image" className='w-100' />
            </Col>
            <Col xs={12} sm={6} md={12} lg={7.5} className='px-1 ms-md-5 text-start flex-sm-wrap col-lg'>
                <p className="text_header fs-1 fw-bold mb-3"><span className="txt_Hello ">Hello</span>, I'm Jeff!</p>
                <p className="bg-warning text-dark fs-1 fw-bold text-left d-inline-block py-2 px-3"> Crafting things for the web </p>
            </Col>
        </Row>
    </Container>
    </section>
     );
}
 
export default homepage;