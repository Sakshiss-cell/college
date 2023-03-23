import React from 'react'
import "./footer.css"
import video1 from "../assets/movie.mp4";
import pic3 from "../assets/pic3.jpeg";

const Footer = () => {
  return (
    <div>
        <footer className="footer-container ">
          <div className="newsletter">
            <span>WORK REPRESENTATION BY COMPUTER DEPARTMENT- 2023</span>
          </div>
          <div className='projects'>
              <div>
                <video
                    controls
                    src={video1}
                    poster={pic3}
                    width="620">
                    Sorry, your browser doesn't support embedded videos, but don't worry, you can
                    <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
                    and watch it with your favorite video player!
                </video>
              </div>
              <div  className='information'>
                 <h2>GREEN ARMY</h2>
                 <p>The Green Army is a project conducted by JAGADAMBHA COLLEGE OF ENGINEERING AND TECHNOLOGY, Yavatmal. This project is developed to create an awareness about the category of plants around us where information of perticular plant is available by simply scanning the QR code of respective plant which is present near plants.</p>
                </div>
             
             
          </div>
  
          <div class="social-links">
            <div class="link"><a herf="https://www.facebook.com/jeyavatmal" >facebook</a></div>
            <div class="link"><a href="https://www.instagram.com/jagdambha_engineering_yavatmal/"><i class="fab fa-instagram">instagram</i></a></div>
            <div class="link"><a href="https://www.linkedin.com/in/jeyavatmal/"><i class="fab fa-twitter">Linkedin</i></a></div>
          </div>
          <div className='social-links'>
          </div>
          <div class="copyright">
            <p>&copy; Copyright, 2023 - sakshigawande40@gmail.com</p>
          </div>
    </footer>
    </div>
  )
}

export default Footer