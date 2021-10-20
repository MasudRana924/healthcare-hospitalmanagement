import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Appointment.css'

const AppointMent = () => {
    const history = useHistory()
    const confirmAppointment = () => {
        history.push('/confirm')
    }
    return (
        <Container fluid className="">
          <Row  xs={1} md={3}>
              <Col md={3}></Col>
              <Col md={6} xs={12}>
              <div className="  login-form mt-5">
                <h2 className="mb-5 pb-5">Please fillup the form</h2>
                <input type="name" placeholder="enter your name" /> <br />
                <input type="phone" placeholder="entter your phone number" /> <br />


                <Form.Group className=" w-75 ms-5 mt-3  mb-3" controlId="exampleForm.ControlTextarea1">
                  
                    <Form.Control as="textarea" rows={3} placeholder="describe your issue" />
                </Form.Group>
                <br />


                <button className=" button w-50 mt-3 mb-5" onClick={confirmAppointment}>Submit</button>

            </div>
              
              </Col>
              <Col md={3}></Col>

          </Row>
        </Container>
    );
};

export default AppointMent;