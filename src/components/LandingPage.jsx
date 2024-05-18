import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import BgImage from '../images/image.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';

const homepage = () => {
    return ( 
        <section id="home" className='pt-5 mt-5' style={{ minHeight: '100vh'}}>
        <Container className=''>
        <Row className="d-flex justify-content-center align-items-center">
            <Col xs={8} sm={6} md={5} lg={4} className="mb-3 mb-md-5">
                <motion.div initial={{opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 2 }} ><Image src={BgImage} alt="background_image" className='w-100' /></motion.div>
            </Col>
            <Col xs={12} sm={12} md={10} lg={7.5} className='px-1 ms-md-5 text-start flex-sm-wrap col-lg'>
                <motion.p initial={{opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 2 }} className="text_header fs-1 fw-bold mb-3"><span className="txt_Hello ">Hello</span>, I'm Jeff!</motion.p>
                <motion.p initial={{opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 2 }} className="bg-warning text-dark fs-1 fw-bold text-left d-inline-block py-2 px-3"> Crafting things for the web.</motion.p>
            </Col>
        </Row>
    </Container>
    </section>
     );
}
 
export default homepage;