import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../../Pages/Home/Service/Service'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">


            <Container fluid className="w-75 mx-auto mt-5" id="services"  >
                <h2 className="text-center">Our Best Services</h2>
                <Row xs={1} md={3}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </Row>

            </Container>
        </div>
    );
};

export default Services;