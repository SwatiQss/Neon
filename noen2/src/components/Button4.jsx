import { FaBell } from "react-icons/fa";
import "../styles/btn4.scss"
import { CiCalendar } from "react-icons/ci";
const Button4=({props,handleFunction})=>{
    
    return(
        <>
        <button className="btn" >
            <div className="date">
                {props}
            </div>


        </button>
        
        </>
    )
}

export default Button4;