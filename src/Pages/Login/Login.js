import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const{googleSignIn,setIsLoading}=useAuth()
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
       <Container fluid className="">
           <div className="w-50 mx-auto login-form mt-5">
               <h2 className="mb-5 pb-5">Please Sign-in</h2>
               <input type="email"  placeholder="enter your email"/> <br />
               <input type="password"placeholder="enter your password" /> <br />
               <p className="text-start ms-3 ps-3 mt-3">Already haven't any account ? <Link className="text-decoration-none ">Sign-up</Link></p>
            

               <button  className=" button mb-5">Log-in</button>
              
                  <p>-------OR-------</p>

                  <button  className=" button mb-5"onClick={handleGoogleLogIn} >Google-Signin</button>
           </div>
       </Container>
    );
};

export default Login;