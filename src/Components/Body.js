import React from 'react'
import ASCE from "../assets/ASCE.png"
import "./body.css";
import Header from './Header';
import A from "../assets/A.png"
import College from "../assets/college-main.jpeg"
import Inatake from "../assets/intake.jpeg"

const Body = () => {
  return (
    <div className='container'>
   
        <img src={ASCE} className='bg-image' alt="asci" />
        <div className='bg-text'>
          <h1 >WELCOME TO COMPUTER DEPARTMENT</h1>
          <p>We are here to help you!!!!</p>
        </div>
        <div className='row cards-container'>
    
          <div class="card col-md-4" >
            <img class="card-img-top card-img" src={A} alt="Card image cap" />
          </div>
          <div class="card col-md-4" >
            <img class="card-img-top card-img" src={College} alt="Card image cap" />
          </div>
          <div class="card col-md-4" >
            <img class="card-img-top card-img" src={ Inatake} alt="Card image cap" />
          </div>
         
       
        </div>
        
    </div>
  )
}

export default Body