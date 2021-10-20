import React from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { googleSignIn, setIsLoading, error, handleRegister, isLogin, handleEmail, handlePass, toogleLogin, handleName,setError
    } = useAuth()
    const location = useLocation()
    const location_url = location.state?.from || '/home'
    const history = useHistory()
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(location_url)
                setError('')
            })
            .finally(() =>
                setIsLoading(false)
            )
    }

    return (
        <Container fluid className="mt-3">
            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={6} className="form-style ">

                    <h2 className="text-center text-success mt-5 mb-3">{isLogin ? 'Please login !!!' : 'Please create a account !!!'}</h2>

                    <Form onSubmit={handleRegister}>
                    <button className="btn btn-success w-50 mt-5" onClick={handleGoogleLogIn }>Google-Signin</button> 
                    <p className="mt-3 text-danger">--------OR--------</p>

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
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Already have an account ? Login" className="text-start" onChange={toogleLogin} />
                        </Form.Group>
                       
                        <button type="submit" className="btn btn-success ms-1 mb-3 w-50 ">{isLogin ? 'Login' : 'Register'}</button>


                    </Form>
                  
                  
                       



                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
};

export default Login;