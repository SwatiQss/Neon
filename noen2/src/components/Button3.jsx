import { FaBell } from "react-icons/fa";
import "../styles/btn3.scss"
import { CiLocationOn } from "react-icons/ci";


const Button3=()=>{
    return(
        <>
        <button className="btn3" >
            <div className="emoji">
              <CiLocationOn style={{color:"#FF385C"}}/>
            </div>
            <div className="date">
                Pick a Location
            </div>


        </button>
        
        </>
    )
}

export default Button3;