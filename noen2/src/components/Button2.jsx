import { FaBell } from "react-icons/fa";
import "../styles/btn2.scss"
const Button2=()=>{
    const handleClick=()=>{
        console.log("clicked");
    }
    return(
        <>
        <button className="btn" >
        <div className="left" onClick={handleClick}>
                10 mins walking
            </div>
            <div className="mid" onClick={handleClick}>
            20 mins walking
            </div>
            <div className="right" onClick={handleClick}>
            30 mins walking
            </div>


        </button>
        
        </>
    )
}

export default Button2;