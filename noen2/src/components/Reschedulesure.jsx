import "../styles/Reschedulesure.scss"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


import {closeModal} from "../redux/modalSlice";

const Reschedulesure=()=>{
    const dispatch=useDispatch();
    const isOpen=useSelector((state)=>state.modal.isOpen);

    if(!isOpen) return null;
    return (
        <>
        <div className="reschedulesure">
          
            

            <div className="sure-heading">
Hey Charlie,
            </div>
            <div className="sure-para">
Are you sure you want to reschedule this event
            </div>

<div className="sure-end">
    <NavLink to="/modalNext">
    <button className="sure-btn" >
        Yes, I'm sure
    </button>

    </NavLink>
<div className="thanks" onClick={()=>dispatch(closeModal())}>
    No thanks
</div>
</div>
        </div>
        
        </>
    )
}
export default Reschedulesure;