import React from 'react';
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import useAuth from './../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <Container fluid>
            <div>

            
            <Row xs={1} md={2}>
                <Col>
                    <span className="text-start">
                        <FontAwesomeIcon className="text-success fs-1 me-1 mt-3 pt-3" icon={faPhoneAlt} />
                        +8801919

                    </span>
                    <span className="ms-1"> +8805111 </span>
                    <span className="ms-1"> +8808654</span>
                </Col>
                <Col >
                    <span className="text-start">
                        <FontAwesomeIcon className="text-danger fs-1 me-1 mt-3 pt-3" icon={faMapMarkerAlt} />
                        #House no 4 ,Road-32,Dhanmondhi,Dhaka

                    </span>
                </Col>
            </Row>
            </div>

            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className=" fs-3">Health<span className=" text-dark"><span className="text-danger fs-1">
                        Surgery</span>Care</span></Navbar.Brand>
                    <Navbar.Toggle className=" text-success bg-success" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto nav-anchor">
                            <Nav.Link as={HashLink} to="/home#home" className="ms-1 ">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className="ms-1 ">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors" className="ms-1 ">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/dept" className="ms-1 ">Dept</Nav.Link>
                            <Nav.Link as={HashLink} to="/appoint" className="ms-1 ">Appointment</Nav.Link>
                            <Nav.Link as={HashLink} to="/event" className="ms-1 ">Event</Nav.Link>
                            <Nav.Link as={HashLink}to="/about" className="ms-1 ">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact" className="ms-1 ">Contact </Nav.Link>

                        </Nav>


                        <Navbar.Text>

                            {
                                user.email && <span className="sign-as me-3"> Signed in as: <span className="text-danger">{user.displayName}</span></span>
                            }

                            {
                                user.email ? <Button onClick={logOut} variant="danger" size="sm">Logout</Button> : <Link to="/login">
                                    <Button variant="success" size="sm" >
                                        Sign-in
                                    </Button>
                                </Link>
                            }


                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;