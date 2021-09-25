import React from "react";
import "./CSS/HeaderS.css";
import {LinkContainer} from 'react-router-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect , isAuthenticated, logout, user} = useAuth0();
  return (
    <div>
      <div className="banner">
        <p>The Ultimate Environment Website !!!!!</p>
      </div>
      <div className="container-fluid  header">
        <div className="heading ">
          <LinkContainer to='/'>
          <div className="logo">
            <p>EnvMatric</p>
          </div>
          </LinkContainer>

          <div className="navlist">
            <ul>
              <LinkContainer to='/upload'><li>Upload Image</li></LinkContainer>
              <LinkContainer to='/wall'><li>Image Wall</li></LinkContainer>
              <LinkContainer to='/growplant'><li>Grow your Plant</li></LinkContainer>
              <LinkContainer to='/forest'><li>Forest</li></LinkContainer>

              {isAuthenticated?(<li onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </li>): (<li onClick={loginWithRedirect}>Login</li>) }
    
            </ul>
          </div>
        </div>
        <div className="headings1 ">
          <ul>
            <li>{user? <div>Hello {user.name}</div> : <div>Hello Site visitor</div>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
