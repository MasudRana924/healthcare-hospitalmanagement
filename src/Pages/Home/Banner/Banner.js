import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../Images/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
       <Container fluid className="banner w-100">
           <div>
           
           <img src={img} className="img-fluid" alt="" />
           </div>
         
         

       </Container>
    );
};

export default Banner;