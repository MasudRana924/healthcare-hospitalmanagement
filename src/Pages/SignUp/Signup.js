import React from 'react';
import { Col, Container,Button, Form, Row } from 'react-bootstrap';
import { Link,useLocation ,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const {setIsLoading, error, handleEmail, handlePass, handleName, setError, createNewUser, verifyEmail,setUserName ,email,pass} =useAuth()
    const location = useLocation()
    const location_url = location.state?.from || '/home'
    const history = useHistory()
    
    return (
        <Container fluid className="mt-5">
            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={6} className="form-style ">

                    <h2 className="text-center text-success mt-5 mb-3"> Please create a account </h2>

                    <Form onSubmit={(event) =>{
                          event.preventDefault()
    
                   createNewUser(email,pass)
                    .then(result => {
                      history.push(location_url)
                      setError('')  
                      setUserName()
                        verifyEmail()
                      
                       
                    })
                    .catch(error => {
                        setError('Enter a valid email')
                      })
                    .finally(() =>
                        setIsLoading(false)
                    )        
                   
                    }}
                    >
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="name" placeholder="Enter Your Name" onBlur={handleName} />


                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <p className="text-start">Email </p>
                        <Form.Control type="email" placeholder="Enter Your Email" onBlur={handleEmail} />

                        <p className="text-start text-muted">  We'll never share your email with anyone else.</p>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <p className="text-start">Password</p>
                        <Form.Control onBlur={handlePass} type="password" placeholder="Enter a Password" />
                        <p className="text-start text-muted"> Password should be more than 6 characters</p>
                        <p className="text-start text-danger"> {error}</p>
                    </Form.Group>
                    
                     <p className="text-start">Already have a account ? <Link className="text-decoration-none  fs-6" to="/login">Go to LogIn</Link></p>
                    <Button type="submit" variant="outline-primary" className=" ms-1 mb-3 w-50 ">Signup</Button>


                </Form>






            </Col>
            <Col md={3}></Col>
        </Row>
        </Container >
    );
};

export default Signup;