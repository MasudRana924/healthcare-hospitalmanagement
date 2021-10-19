import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';

import useAuth from './../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const{user,isLoading}=useAuth()
    if(isLoading){
      return ( 
        <>
       <Spinner animation="border" variant="secondary" />
       <Spinner animation="border" variant="success" />
       <Spinner animation="border" variant="danger" />
       <Spinner animation="border" variant="dark" />
       <Spinner animation="border" variant="warning" />
       <Spinner animation="border" variant="info" />
       
       </>
      )  
    
       }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;