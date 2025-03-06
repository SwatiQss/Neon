import "../styles/Reschedulesure.scss"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


import {closeModal2} from "../redux/modalSlice2";

const Reschedulesure=()=>{
    const dispatch=useDispatch();
    const isOpen2=useSelector((state)=>state.modal2.isOpen2);

    if(!isOpen2) return null;
    return (
        <div className="modal-overlay">
        <div className="reschedulesure">
          
            

            <div className="sure-heading">
Hey Charlie,
            </div>
            <div className="sure-para">
Are you sure you want to reschedule this event
            </div>

<div className="sure-end">
    <NavLink to="/modalNext">
    <button className="sure-btn" onClick={()=>dispatch(closeModal2())} >
        Yes, I'm sure
    </button>

    </NavLink>
<div className="thanks" onClick={()=>dispatch(closeModal2())}>
    No thanks
</div>
</div>
        </div>
        
        </div>
    )
}
export default Reschedulesure;