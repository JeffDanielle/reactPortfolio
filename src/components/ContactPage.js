import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import LinkedImg from '../images/linkedin.png'
import GitImg from '../images/github.png'
import WhatsappImg from '../images/whatsapp.png'
import { Link } from 'react-router-dom'
import SmartphoneImg from '../images/mobile-phone.png'
import CopyrightImg from '../images/copyright.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const ContactPage = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
        .sendForm(
            'service_ys9y1ra', 
            'template_17h4y3b', 
            form.current, 
            'jPz4tgflMN-2Ata0U'
        )
        .then(
            (result) => {
            console.log(result.text);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Email Sent!",
                showConfirmButton: false,
                timer: 1500
            });
            e.target.reset();
        }, 
        (error) => {
            console.log(error.text);
        });
    };

    return ( 
        <section id='contact' >
            <h1 className="fw-bold mt-5 pt-5">Email Me</h1>
            {/* Form for emailJs */}
            <Container className='mt-5 mb-5'>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                            <form className='mb-1 d-flex flex-column' ref={form} onSubmit={sendEmail}>
                                <p className='text-start fst-italic fw-bold mb-3'>
                                    Use the form below to send me an email
                                </p>
                                <div className="mb-3 d-flex">
                                    <input className="form-control me-2" type="text" name="user_name" placeholder='Your name' required/>
                                    <button className="btn btn-primary" type="submit">
                                        Send
                                    </button>
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="email" name="user_email" placeholder='Your email' required />
                                </div>
                                <div className="">
                                    <textarea className="form-control" name="message" placeholder='Kindly provide a message' required/>
                                </div>
                            </form>
                    </Col>
                </Row>
        </Container>
        {/* below code is the footer */}
         <Container className='d-sm-flex flex-sm-column flex-lg-row'>
            <Col xs={10} lg={6} className='d-sm-flex flex-sm-row mb-2 justify-content-center justify-content-lg-start ms-3 ms-md-0 ms-lg-0'>
                <div className=''>
                    <Link to='https://www.linkedin.com/in/jeff-danielle-bayot/' target='_blank'>
                        <Image src={LinkedImg} id='contact-img' className='img-fluid col-1' alt='linkedin-thumbnail' />
                    </Link>
                    <Link to='https://github.com/JeffDanielle' target='_blank'>
                        <Image src={GitImg} id='contact-img' className='img-fluid col-1 ms-4' alt='Github-thumbnail' />
                    </Link>
                    <Link to='https://api.whatsapp.com/send/?phone=%2B639560424087&text&type=phone_number&app_absent=0' target='_blank'>
                        <Image src={WhatsappImg} id='contact-img' className='img-fluid col-1 ms-4' alt='Whatsapp-thumbnail' />
                    </Link>
                </div>
            </Col>
            <Col xs={10} lg={6} className='d-flex align-items-center ms-3 ms-mb-0 ms-lg-0'>
                <ul className='d-flex flex-column flex-sm-row flex-lg-nowrap list-unstyled fs-6'>
                <li className='px-3 text-nowrap'><Image src={SmartphoneImg} id='list-img' className='' alt='phone-thumbnail' /> :09560424087</li>
                <li className='px-3 text-nowrap'><Image src={CopyrightImg} id='list-img' className='' alt='phone-thumbnail' /> 2024 Jeff Bayot</li>
                </ul>
            </Col>
        </Container>
        </section>
     );
}
 
export default ContactPage;