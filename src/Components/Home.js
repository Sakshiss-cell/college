
import './home.css';
import Footer from "./Footer";
import Body from "./Body";
import College from './College';


const Home=()=>{
    return(
        <div className="header">
           <College />
           <Body />
           <Footer />
        </div>
    )
}

export default Home;