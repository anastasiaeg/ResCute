import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul className="Button">
      <Link to={ROUTES.SIGN_UP} >Login</Link>
    </ul>
    <ul className="Button"> 
      <Link to={ROUTES.LANDING}>Landing</Link>
    </ul>
    <ul className="Button"> 
      <Link to={ROUTES.HOME}>Home</Link> 
    </ul>
    <ul className="Button">
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </ul>
    <ul className="Button">
      < Link to={ROUTES.ADMIN}>Admin</Link>
    </ul>
  </div>
);

export default Navigation;