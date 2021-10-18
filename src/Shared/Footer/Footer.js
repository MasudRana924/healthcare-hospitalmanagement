import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
    return (
        <Container fluid className="footer mt-5 pt-5">
            <input type="text" placeholder=" Subscribe Us" className="text-center"/>
            <div>
                <FontAwesomeIcon icon={faFacebookSquare} className="fb-icon mt-3" />
                <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
            </div>
           <p>Copyright © allrights deserve HealthSurgery Autority</p>
        </Container>
    );
};

export default Footer;