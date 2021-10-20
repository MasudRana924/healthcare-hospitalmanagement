import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div id="doctors">

     
      <Container fluid className="mt-5 pt-5 w-75 mx-auto">
          <h2 className="text-dark">Our Experienced Doctors</h2>
          <Row xs={1} md={3}>
              {doctors.map(doctor=><Doctor
              key={doctor.id}
              doctor={doctor}
              ></Doctor>)}
          </Row>
      </Container>
      </div>
    );
};

export default Doctors;