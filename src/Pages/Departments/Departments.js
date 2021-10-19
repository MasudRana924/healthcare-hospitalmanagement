import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Departments = () => {
    const history=useHistory()
    const handleContact=()=>{
        history.push('/contact')
 
     }
    return (
        <Container>
        <Row xs={1} md={3} className="mx-auto w-75 pt-5">
             
        <Col className="mt-3 " >

            <div className="card-health">
                <div className="ps-1 pe-1">
                    <h4 className="text-start">Neurosurgery</h4>
                   
                    <p className="text-start fs-6">Procedures we perform include:</p>
                    <p className="text-start fs-6">.Brain tumors</p>
                    <p className="text-start fs-6">.Microdiscectomies</p>
                    <p className="text-start fs-6">.Thermal procedures</p>

                </div>
                <button  className=" button mb-5" onClick={handleContact}>Contact Us</button>
            </div>


        </Col>
        <Col className="mt-3 " >
        <div className="card-health">
               
                <div className="ps-1 pe-1">
                    <h4 className="text-start">Orthopedic Surgery</h4>
                    <p className="text-start fs-6">Hurley Medical Center offers many orthopedic surgery options, including:</p>
                    <p className="text-start fs-6">.Achilles Tear Surgery</p>
                    <p className="text-start fs-6">.Arthroscopic Surgery</p>
                    <p className="text-start fs-6">.Shoulder Surgery</p>

                </div>
                <button  className=" button mb-5" onClick={handleContact}>Contact Us</button>
            </div>
        </Col>
        <Col className="mt-3 " >
        <div className="card-health">
                
                <div className="ps-1 pe-1">
                    <h4 className="text-start">Outpatient Surgery</h4>
                    <p className="text-start">Some common outpatient surgeries include:</p>
                    <p className="text-start fs-6">.Arthroscopy</p>
                    <p className="text-start fs-6">.Breast Biopsy</p>
                    <p className="text-start fs-6">.Head and Neck Surgery</p>
                </div>
                <button  className=" button mb-5" onClick={handleContact}>Contact Us</button>
            </div>
        </Col>
       
    </Row>
    </Container>
    );
};

export default Departments;