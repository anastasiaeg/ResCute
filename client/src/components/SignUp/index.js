import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const SignUp = () => (
  <div className="login-box">
      <div class="left-box">
        <h1> Sign Up</h1>
          
          <input type="text" name="username" placeholder="Username"/>
          <input type="text" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>
        
          <input type="password" name="password2" placeholder="Retype password"/>
        
          <input type="submit" name="signup-button" value="Sign Up"/>
        
        </div>
        <span>Already have an account? Log in below. </span>
        
        <Link to={ROUTES.SIGN_IN} >Sign In</Link>
       
    </div>  
);

export default SignUp;