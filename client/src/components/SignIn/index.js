import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignIn = () => (
  <div className="login-box">
      <div class="left-box">
        <h1> Sign In</h1>
          
          <input type="text" name="username" placeholder="Username or Email" name="email"/>
          <input type="password" name="password" placeholder="Password"/>
        
        
          <input type="submit" name="signin-button" value="Sign In"/>
        
        </div>
        <div class="right-box">
        <span class="signinwith">SignIn with Social Network</span>
        <button class="social facebook">SignIn with Facebook</button>    
        <button class="social twitter">SignIn with Twitter</button> 
        <button class="social google">SignIn with Google+</button> 
        </div>
    </div>  
);

export default SignIn;