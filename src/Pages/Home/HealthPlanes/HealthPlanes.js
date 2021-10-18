import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentMedical,faDiagnoses,faWineGlass } from '@fortawesome/free-solid-svg-icons'
import './HealthPlanes.css'

const HealthPlanes = () => {
    return (
   <Container fluid className="mt-5 pt-5">
       <h2 className="text-success">Be a health conscious</h2>
        <Row xs={1} md={3} className="mx-auto w-75 pt-5">
             
             <Col className="mt-3 " >

                 <div className="card-health">
                     <FontAwesomeIcon icon={faCommentMedical } className="icon " /> <br />
                     <div className="ps-1 pe-1">
                         <h4 className="text-start">Medical Counceling</h4>
                         <p className="text-start">For a good health you need to medicalcounceling in every month</p>

                     </div>
                 </div>


             </Col>
             <Col className="mt-3 " >
             <div className="card-health">
                     <FontAwesomeIcon icon={faDiagnoses} className="icon" />
                     <div className="ps-1 pe-1">
                         <h4 className="text-start">Eat a healthy diet</h4>
                         <p className="text-start">Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains.</p>

                     </div>
                 </div>
             </Col>
             <Col className="mt-3 " >
             <div className="card-health">
                     <FontAwesomeIcon icon={faWineGlass} className="icon" />
                     <div className="ps-1 pe-1">
                         <h4 className="text-start"> Avoid alcohol</h4>
                         <p className="text-start">There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders</p>

                     </div>
                 </div>
             </Col>
            
         </Row>
   </Container>
    );
};

export default HealthPlanes;