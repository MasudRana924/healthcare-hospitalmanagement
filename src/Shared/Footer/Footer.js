import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
    return (
        <Container fluid className="footer mt-5 pt-5 w-50 mx-auto">
            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={12} >
                <input type="text" placeholder=" Subscribe Us" className="text-center mt-3 w-75"/>
            <div>
                <FontAwesomeIcon icon={faFacebookSquare} className="fb-icon mt-3" />
                <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
            </div>
           <small>Copyright © allrights deserve HealthSurgery Authority</small>
                </Col>
                <Col md={3}></Col>
            </Row>
           
        </Container>
    );
};

export default Footer;