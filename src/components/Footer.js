import Image from 'react-bootstrap/Image'
import LinkedImg from '../images/linkedin.png'
import GitImg from '../images/github.png'
import WhatsappImg from '../images/whatsapp.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return ( 
        <section id='footer'>
            <Link to='https://www.linkedin.com/in/jeff-danielle-bayot/' target='_blank'>
                <Image src={LinkedImg} className='ms-3' id='contact-img' alt='linkedin-thumbnail'/>
            </Link>
            <Link to='https://github.com/JeffDanielle' target='_blank'>
                <Image src={GitImg} className='ms-3' id='contact-img' alt='Github-thumbnail'/>
            </Link>
            <Link to='https://github.com/JeffDanielle' target='_blank'>
                <Image src={WhatsappImg} className='ms-3' id='contact-img' alt='Github-thumbnail'/>
            </Link>
        </section>
     );
}
 
export default Footer;