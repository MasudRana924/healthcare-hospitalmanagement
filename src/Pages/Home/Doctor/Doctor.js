import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Doctor = (props) => {
    const { name, img, desc } = props.doctor
    const history=useHistory()
    const handleAppoint=()=>{
        history.push('/appoint')
 
     }
    return (
        <Col className="mt-5 card-style">

            <img src={img} className="image" alt="" />

            <div>
                <h4>{name}</h4>
                <p>{desc}</p>
            </div>
            <button  className=" button mb-5" onClick={handleAppoint}>Appointment</button>

        </Col>
    );
};

export default Doctor;