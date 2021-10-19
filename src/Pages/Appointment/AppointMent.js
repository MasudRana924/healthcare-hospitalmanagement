import React from 'react';
import { Container } from 'react-bootstrap';
import {useHistory } from 'react-router-dom';

const AppointMent = () => {
    const history=useHistory()
    const confirmAppointment=()=>{
        history.push('/confirm')
    }
    return (
        <Container fluid className="">
        <div className="w-50 mx-auto login-form mt-5">
            <h2 className="mb-5 pb-5">Please fillup the form</h2>
            <input type="name"  placeholder="enter your name"/> <br />
            <input type="phone"placeholder="entter your phone number" /> <br />
            <input type="name" placeholder=" your problem name" /> <br />
            
         

            <button  className=" button mb-5" onClick={confirmAppointment}>Submit</button>
           
        </div>
    </Container>
    );
};

export default AppointMent;