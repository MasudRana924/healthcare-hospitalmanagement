import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';



const Details = () => {
    const { id } = useParams()
    const [services, setServices] = useState([])
    const [details, setDetails] = useState({})
    let servicesId = parseInt(id)
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    useEffect(() => {
        if (services.length) {
            let current = services.find(s => s.id === servicesId)
            setDetails(current)

        }


    }, [services])

    const history=useHistory()
    const handleAppoint=()=>{
       history.push('/appoint')

    }

    return (
        <Container fluid className="mt-5">

            <div className="w-50 mx-auto">
                < Row xs={1} md={3}>
                    <Col md={2}></Col>
                    <Col md={8} className="">
                        <img src={details.img} className="img-fluid" alt="" />
                        <div>
                            <h3>{details.name}</h3>
                            <p className="text-start">{details.desc}</p>
                            <p className="text-start">Cost : <span className="text-danger"> {details.cost}</span></p>
                            <p className="text-start">If you have any query then... <Link to="/contact" className="text-decoration-none fs-5">Contact Us</Link></p>

                        </div>
                        <button  className=" button mb-5" onClick={handleAppoint}>Appointment</button>



                    </Col>
                    <Col md={2}></Col>
                </Row>


            </div>

        </Container >
    );
};

export default Details;