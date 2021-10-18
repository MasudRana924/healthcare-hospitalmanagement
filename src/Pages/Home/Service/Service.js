import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name,img,desc}=props.service
    return (
        <Col className="mt-5 card-style">
            <Link to="/details">
        <img src={img} className="image" alt="" />
        </Link>
        <div>
           <h4>{name}</h4>
           <p>{desc.slice(0,100)}...<Link to="/details">details</Link></p>
        </div>
        
        </Col>
    );
};

export default Service;