import React from 'react';
import { Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, img, desc } = props.doctor
    return (
        <Col className="mt-5 card-style">

            <img src={img} className="image" alt="" />

            <div>
                <h4>{name}</h4>
                <p>{desc}</p>
            </div>

        </Col>
    );
};

export default Doctor;