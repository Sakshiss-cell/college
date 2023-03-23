import pic12 from "../assets/pic12.jpeg";
import "./years.css"
import { Link } from "react-router-dom";
import Header from "./Header";
const Third =()=>{
    return(
        <div>
            <Header/>
            <div className=" heading">
                <h2 >BOOKS PDF FOR THIRD YEAR</h2>
                <p>“Do what you can, with what you have, where you are.” ― Theodore Roosevelt.</p>
            </div>
           <main class="cards">
                <Link to="https://drive.google.com/file/d/10SWO-9DT9-Xt-m_uO04a9KMJT3acy-QJ/view?usp=sharing"><img src="https://m.media-amazon.com/images/I/51nN7gsuSTL._SX377_BO1,204,203,200_.jpg" alt="COA" /></Link>
                <Link to="https://drive.google.com/file/d/1F9cIxKhDakSAgssk8qGlfrKzsvV3XEC2/view?usp=sharing"> <img src="https://m.media-amazon.com/images/I/41lw4AhdvML._SX258_BO1,204,203,200_.jpg" alt="ALGORITHMIC" /></Link>
                <Link to="https://drive.google.com/file/d/1-O3GN11I-lo1wZw-ZS2kr59SIJ2rIyIU/view?usp=sharing"> <img src="https://m.media-amazon.com/images/I/41jrnIwOm6L._SY344_BO1,204,203,200_.jpg" alt="CD" /></Link>
                <Link to="https://drive.google.com/file/d/1DuLsfGqGLLL4DxfE0C8vk-pdlkZG1soY/view?usp=sharing"> <img src="https://m.media-amazon.com/images/I/41QGbYii3OL._SX258_BO1,204,203,200_.jpg" alt="Sample photo" /></Link>
                <Link to="https://drive.google.com/file/d/1pqBdBKGS3XCkW0bT9KqA4QaQw8-dbwz4/view?usp=sharing"><img src="https://m.media-amazon.com/images/I/515ptbiFJ9L._SX258_BO1,204,203,200_.jpg" alt="Sample photo" /></Link>
                <Link to="https://drive.google.com/file/d/1-Wi1JAVWY1Fn9rXziQ_IGaYHMA_t0Lmc/view?usp=share_link"><img src="https://m.media-amazon.com/images/I/51ejXvkhBvL._SY344_BO1,204,203,200_.jpg" alt="Sample photo" /></Link>
                <Link to="https://drive.google.com/file/d/1CrqLOkJdljXajCLCfrql8TqB-UHWoWu4/view?usp=sharing"><img src="https://m.media-amazon.com/images/I/41KIh-11KUL._SY344_BO1,204,203,200_.jpg" /></Link>
                <Link to="https://drive.google.com/file/d/1pPofW-MqAMmmFZvz0xLOYIWpzZUwZLdi/view?usp=sharing"> <img src="https://m.media-amazon.com/images/I/81qMqh6c3eL.jpg" alt="Sample photo" /></Link>
                <Link to="https://drive.google.com/file/d/1Z27JenzJLE7wBCJ7AYjy3j_PBUJmMgs2/view?usp=sharing"><img src="https://m.media-amazon.com/images/I/51zb7sP9FPL._SX258_BO1,204,203,200_.jpg" alt="Sample photo" /></Link>
               
            </main>
        </div>   
    )
}

export default Third;