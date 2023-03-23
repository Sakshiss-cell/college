
import collegeName from "../assets/collagename .png"
import Header from "./Header";
import "./header.css"
const College=()=>{
    return(
        <div>
              <Header />
               <img src={collegeName}  className="college-name" alt="college name"/>
        </div>
    )
}
export default College;