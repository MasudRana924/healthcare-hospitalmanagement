import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../Images/404.jpg'

const NotFound = () => {
    return (
        <Container fluid className="w-75">
<img src={img} className="img-fluid" alt="" />
        </Container>
    );
};

export default NotFound;