import "../styles/dropdown.scss"
import {Link} from "react-router-dom";
import EditProfile from "../pages/EditProfile/EditProfile";

const Dropdown=()=>{
    return (
        <>
        <div className="dropdown">
        <Link to="/profile" className="dropdown-item" style={{color:"black",fontSize:"10px"}}>Edit profile</Link>
              <Link to="/feedback" className="dropdown-item"  style={{color:"black",fontSize:"10px"}}>Feedback</Link>
              <Link to="/setting" className="dropdown-item"  style={{color:"black",fontSize:"10px"}}>Settings</Link>

        </div>
        
        </>
    )
}

export default Dropdown;