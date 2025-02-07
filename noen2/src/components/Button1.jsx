import { FaBell } from "react-icons/fa";
import "../styles/btn.scss"
const Button1=()=>{
    return(
        <>
        <button className="btn" >
            <div className="emoji">
              <FaBell style={{color:"#FF385C"}}/>
            </div>
            <div className="date">
                Pick a date
            </div>


        </button>
        
        </>
    )
}

export default Button1;