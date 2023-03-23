import React from 'react'
import logo from "../assets/logo.png";
import "./header.css"
import collegeName from "../assets/collagename .png"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import College from './College';



const Header = () => {
  const {user,loginWithRedirect, logout ,isAuthenticated} = useAuth0();



  return (
    <div className='header'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
    <img src={logo} className="d-inline-block align-top logo" alt="" />
    Jagdambha College Of Engineering And Technology
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
       <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/activites">Activities</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/project">Project</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-expanded="false">
          Material
        </a>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="/second">Second year</Link>
          <Link class="dropdown-item" to="/third">Third year</Link>
          <Link class="dropdown-item" to="/fourth">Fourth year</Link>
        </div>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="" role="button" data-toggle="dropdown" aria-expanded="false">
          Join class
        </Link>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="https://meet.google.com/mfk-umyu-vvb">Second year</a>
          <a class="dropdown-item" href="https://meet.google.com/zgo-vxzb-kaj">Third year </a>
          <a class="dropdown-item" href="https://meet.google.com/bbi-rccr-gdi">Fourth year</a>
        </div>
      </li>
      {/* {isAuthenticated &&  <li><p style={{color:"red"}}>{user?.name}</p></li>
            } */}
      {
        
        isAuthenticated ?
        <li  class="nav-item"> 
         <button className='btn btn-outline-info' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
           Log Out
         </button>
        </li>:<li class="nav-item">
        <button  className='btn btn-outline-info' onClick={() => loginWithRedirect()}>Log In</button>;
        </li>
      }
      
      
    </ul>
  </div>
      </nav>
    </div>
  )
}

export default Header