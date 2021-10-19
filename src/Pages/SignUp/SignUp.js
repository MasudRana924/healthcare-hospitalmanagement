import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link,useLocation,useHistory  } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {
    const{googleSignIn,setIsLoading,handleEmailChange,handlePassChange,handleSignup,handleName}=useAuth()
    const location = useLocation()
    const location_url=location.state?.from || '/home'
    const history=useHistory()
    const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(result => {
            history.push(location_url)
        })
        .finally(()=>
        setIsLoading(false)
    )
    } 
    
    return (
       <Container fluid>
  <Row xs={1} md={3}>
               <Col md={3}></Col>
               <Col md={6}>
               <div className=" login-form mt-5">
               <h2 className="mb-5 pb-5">Please Sign-up</h2>
               <input type="name" onBlur={handleName} placeholder="enter your name"/> <br />
               <input type="email" onBlur={handleEmailChange} placeholder="enter your email"/> <br />
               <input onBlur={handlePassChange} type="password"placeholder="enter your password" /> <br />
               <p className="text-start ms-3 ps-3 mt-3">Already haven an account ? <Link to="/login"className="text-decoration-none ">Log-in</Link></p>
            

               <button onClick={handleSignup} className=" button mb-5">Sign-up</button>
              
                  <p>-------OR-------</p>

                  <button  className=" button mb-5"onClick={handleGoogleLogIn} >Google-Signin</button>
           </div>
               </Col>
               <Col md={3}></Col>
           </Row>
       </Container>
    );
};

export default SignUp;