import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock,faCalendarCheck,faHospital,faFlask,faClipboardCheck} from '@fortawesome/free-solid-svg-icons'
import './Hospitality.css'

const Hospitality = () => {
    return (
       <Container fluid  className="mt-5 pt-5">
           <h2 className="text-center">Our Hospitality</h2>
        <Row xs={1} md={5} className="mx-auto w-75 pt-5">
             
             <Col className="mt-3 " >

                 <div className="card-health">
                     <FontAwesomeIcon icon={faHospital } className="icon-special " /> <br />
                     <div className="ps-1 pe-1">
                         <p className="text-center">24/7 hours open</p>
                       

                     </div>
                 </div>


             </Col>
             <Col className="mt-3 " >
             <div className="card-health">
                     <FontAwesomeIcon icon={faCalendarCheck} className="icon-special" />
                     <div className="ps-1 pe-1">
                         <p className="text-center">Don't need appoinment on emergency</p>
                         

                     </div>
                 </div>
             </Col>
             <Col className="mt-3 " >
             <div className="card-health">
                     <FontAwesomeIcon icon={faClock} className="icon-special" />
                     <div className="ps-1 pe-1">
                         <p className="text-center">Short time waiting</p>
                        

                     </div>
                 </div>
             </Col>
             <Col className="mt-3 " >
             <div className="card-health">
                     <FontAwesomeIcon icon={faFlask} className="icon-special" />
                     <div className="ps-1 pe-1">
                         <p className="text-center">Own lab</p>
                        

                     </div>
                 </div>
             </Col>
             <Col className="mt-3 " >
             <div className="card-health">
                     <FontAwesomeIcon icon={faClipboardCheck} className="icon-special" />
                     <div className="ps-1 pe-1">
                         <p className="text-center">Accepting insurance</p>
                        

                     </div>
                 </div>
             </Col>
            
         </Row>

       </Container>
    );
};

export default Hospitality;