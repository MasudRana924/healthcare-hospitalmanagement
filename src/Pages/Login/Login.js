import React from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { googleSignIn, setIsLoading, error, isLogin, handleEmail, handlePass, toogleLogin, handleName, setError, githubSignin,signInProcress, createNewUser, verifyEmail, setUserName ,email,pass} = useAuth()
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
    const gitSignin = () => {
        githubSignin()
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

                    <Form onSubmit={(e) =>{
                          e.preventDefault()
    
                    isLogin ? signInProcress(email,pass)
                    .then(result => {

                        history.push(location_url)
                        setError('')
        
                    })
                    .finally(() =>
                        setIsLoading(false)
                    )
                    
                    
                    : createNewUser(email,pass)
                    .then(result => {
                        alert('Your account is created plz login')
                        setUserName()
                        setError('')
                        verifyEmail()
                  
                    })
                    .finally(() =>
                        setIsLoading(false)
                    )
                    }}
                    >
                    <Button variant="outline-success" className=" w-25 mt-5 me-3" onClick={handleGoogleLogIn}>Google-Signin</Button>
                    <Button variant="outline-info" className=" w-25 mt-5" onClick={gitSignin}>Github-Signin</Button>
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

                    <Button type="submit" variant="outline-primary" className=" ms-1 mb-3 w-50 ">{isLogin ? 'Login' : 'Register'}</Button>


                </Form>






            </Col>
            <Col md={3}></Col>
        </Row>
        </Container >
    );
};

export default Login;