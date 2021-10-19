import React from 'react';
import { Col, Container, Nav, Navbar, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import useAuth from './../../Hooks/useAuth';

const Header = () => {
    const{user,logOut}=useAuth()
    return (
        <>
            <Container fluid>
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
            </Container>
            <Navbar className="navbar"   collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className=" fs-3">Health<span className=" text-dark"><span className="text-danger fs-1">
                        Surgery</span>Care</span></Navbar.Brand>
                    <Navbar.Toggle className=" text-warning bg-warning" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto nav-anchor">
                            <Link to="/home" className="ms-3 ">Home</Link>
                            <Link to="/services" className="ms-3 ">Services</Link>
                            <Link to="/doctors" className="ms-3 ">Doctors</Link>
                            <Link to="/dept" className="ms-3 ">Dept</Link>
                            <Link to="/appoint" className="ms-3 ">Appointment</Link>
                            <Link to="/about" className="ms-3 ">About Us</Link>
                            <Link to="/contact" className="ms-3 ">Contact Us</Link>

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
        </>
    );
};

export default Header;