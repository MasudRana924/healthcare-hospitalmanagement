import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <Container fluid className="footer mt-5 pt-5  mb-5">
            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={6}  >
                    <input type="text" placeholder=" Subscribe Us" className="text-center mt-3 " />

                    <Nav className="ms-5 mt-3 footer-anchor">
                        <Link  to="/why">Why Us</Link>
                        <Link to="/insurance">Insurrance</Link>
                        <Link to="/donate">Donate</Link>
                        <Link to="/work">Work with Us</Link>
                    </Nav>

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