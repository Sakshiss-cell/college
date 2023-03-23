import pic12 from "../assets/pic12.jpeg";
import "./years.css"
import { Link } from "react-router-dom";
import Header from "./Header";
const Fourth =()=>{
    return(
        <div>
            <Header/>
            <div className=" heading">
                <h2 >BOOKS PDF FOR FOURTH YEAR</h2>
                <p>“One day, all your hard work will pay off.”</p>
            </div>
           <main class="cards">
               <Link to="https://drive.google.com/file/d/1wYFbQJSae7qoNoSVHTtZ8tZQt3mGuT-N/view?usp=share_link"><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51Zy6Xa9ptL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Sample photo" /></Link> 
               <Link to="https://drive.google.com/file/d/1yWV9o2mqI7IIwlVbLn5tfUK5mzH4EDaG/view?usp=share_link"><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61AbFaR+R6L._SX258_BO1,204,203,200_.jpg" alt="Sample photo" /></Link> 
               <Link to="https://drive.google.com/file/d/10cw9YOt_CsRf3ZfBDlA4B3kxXuk5cCjG/view?usp=share_link"> <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41maaWdhe5L._SX328_BO1,204,203,200_.jpg" alt="Sample photo" /></Link> 
               <Link to="https://drive.google.com/file/d/1HhOfDPMzBe7jnmX9HaZIrfKfbRotXkhs/view?usp=share_link"><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41R22SeazNL._SX386_BO1,204,203,200_.jpg" alt="Sample photo" /></Link> 
               <Link to="https://drive.google.com/file/d/1JX23lOyxDfCMTnyL4R_fYWcQlz_ryLLb/view?usp=share_link"><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/411s00c6RFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Sample photo" /></Link> 
               <Link to=""><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41bXoYkjnkL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Sample photo" /></Link>            
            </main>
        </div>   
    )
}

export default Fourth;