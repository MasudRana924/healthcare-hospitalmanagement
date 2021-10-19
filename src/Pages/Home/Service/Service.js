import React from 'react';
import { Col } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {id,name,img,desc}=props.service
    const url = `/details/${id}`
    const history=useHistory()
    const handleAppoint=()=>{
       history.push('/appoint')

    }
    return (
        <Col className="mt-5 card-style">
            <Link to="/details">
        <img src={img} className="image" alt="" />
        </Link>
        <div>
           <h4>{name}</h4>
           <p>{desc.slice(0,100)}...<Link to={url} className="text-decoration-none">details</Link></p>
        </div>
        <button  className=" button mb-5" onClick={handleAppoint}>Appointment</button>
        
        </Col>
    );
};

export default Service;