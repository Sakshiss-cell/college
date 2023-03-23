import React from 'react'
import { Link } from 'react-router-dom';
import ASCE from "../assets/ASCE.png"
import "./years.css"
import pic1 from "../assets/pic1.jpg"
import nss from "../assets/nss.jpeg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpeg"
import pic4 from "../assets/pic4.jpeg"
import pic5 from "../assets/pic5.jpeg"
import pic6 from "../assets/pic6.jpeg"
import pic7 from "../assets/pic7.jpeg"
import pic8 from "../assets/pic8.jpg"
import pic9 from "../assets/pic9.jpeg"
import pic10 from "../assets/pic10.jpg"
import pic11 from "../assets/pic11.jpg"
import pic12 from "../assets/pic12.jpeg"
import Header from './Header';
import Footer from './Footer';


const Activites=()=> {
  return (
    <div className='container '>
      <Header />
      <div  className='heading' >
        <h2>Activites performed by us </h2>
        <p>Even in hard times there's a possibility to have fun</p>
      </div>
      <div className='row activites'>
        <div className='col-lg-4'>
          <div class="card mb-3">
            <img src={nss} className="card-img-top act-img" alt="coding club" />
            <div class="card-body">
              <h5 class="card-title" >Old Age Home Visit</h5>
              <p class="card-text" >The NSS Unit of Jagadambha College visit to Old Age Home.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
           </div>
        </div>   

        <div className='col-lg-4'>
          <div class="card mb-3">
            <img src={pic12} className="card-img-top act-img" alt="coding club" />
            <div class="card-body">
              <h5 class="card-title" >Blood Donation Camp</h5>
              <p class="card-text" >The NSS unit organises the Blood Donation Camp</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
           </div>
        </div>   
    
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic1} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>Guest Lecture-By Mr.Mayur Bhoyar</h5>
          <p class="card-text" style={{color:"black"}}>The ASCE Club organises the guest lecture on "The Research Paper Writing and Publishing" by Mr.Mayur Bhoyar sir</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
         
        </div>
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic2} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>Code Champ -The Coding Event</h5>
          <p class="card-text" style={{color:"black"}}>The ASCE Club organises the Coding Competition for college students.</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
         
        </div>
        
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic3} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>JE Green Army Project phase 1</h5>
          <p class="card-text" style={{color:"black"}}>The final year students of computer engineering develop the project under green army,which gives the whole information of plants about carbon consumption,medical and commercial usage,etc</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
         
        </div>
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic4} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>JE Green Army Project phase 2</h5>
          <p class="card-text" style={{color:"black"}}>The final year students of computer engineering develop the project under green army,which gives the whole information of plants about carbon consumption,medical and commercial usage,etc</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
         
        </div>
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic5} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>JE Green Army Project phase 3</h5>
          <p class="card-text" style={{color:"black"}}>The final year students of computer engineering develop the project under green army,which gives the whole information of plants about carbon consumption,medical and commercial usage,etc</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        
      </div>
      </div>
      <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic6} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>JE Green Army Project phase 4</h5>
          <p class="card-text" style={{color:"black"}}>The final year students of computer engineering develop the project under green army,which gives the whole information of plants about carbon consumption,medical and commercial usage,etc</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
         
        </div>
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic7} className="card-img-top act-img" alt="Chatrapati Shiv Jayanti" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>Chatrapati Shiv Jayanti</h5>
          <p class="card-text" style={{color:"black"}}>The Shiv Jayanti Celebrated in college</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
         
        </div>
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic8} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>NAAC Cultural Event</h5>
          <p class="card-text" style={{color:"black"}}>Various Cultural activities were performed in NAAC visiting session days such as singing,dancing.</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      </div>
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic9} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>Cultural Event Group</h5>
          <p class="card-text" style={{color:"black"}}>Various Cultural activities were performed in NAAC visiting session days such as singing,dancing.</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      </div>
        <div className='col-lg-4'>
        <div class="card mb-3">
        <img src={pic10} className="card-img-top act-img" alt="coding club" />
        <div class="card-body">
          <h5 class="card-title" style={{color:"black"}}>Cultural Event Group</h5>
          <p class="card-text" style={{color:"black"}}>Various Cultural activities were performed in NAAC visiting session days such as singing,dancing.</p>
          <p class="card-text" style={{color:"black"}}><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      </div>
        
         
        </div>
      </div>
      
    
 
  )
}

export default Activites