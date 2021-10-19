import React from 'react';
import { Container,Button, Row, Col } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const{googleSignIn,setIsLoading,handleLogin}=useAuth()
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
       <Container fluid className="mt-5">
           <Row xs={1} md={3}>
               <Col md={3}></Col>
               <Col md={6}>
               <div className=" login-form mt-5">
               <h2 className="mb-5 pb-5">Please Sign-in</h2>
               <input type="email"  placeholder="enter your email"/> <br />
               <input type="password"placeholder="enter your password" /> <br />
               <p className="text-start ms-3 ps-3 mt-3">Already haven't any account ? <Link to="/signup"className="text-decoration-none ">Sign-up</Link></p>
            

               <button onClick={handleLogin} className=" button mb-5">Log-in</button>
              
                  <p>-------OR-------</p>

                  <button  className=" button mb-5"onClick={handleGoogleLogIn} >Google-Signin</button>
           </div>
               </Col>
               <Col md={3}></Col>
           </Row>
       </Container>
    );
};

export default Login;