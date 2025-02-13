import "../styles/Reschedule.scss"
import { BiSolidBellRing } from "react-icons/bi";
import { useState } from "react";

const Reschedule=()=>{
   
    

    return(
        <>
        <div className="reschedule">
            <div className="reschedule-heading">
Hey Charlie<BiSolidBellRing style={{color:"#EEFF00",marginLeft:"8px"}}/>
            </div>
            <div className="reschedule-para">
            “We regret to inform you that the current weather conditions are not conducive for a golf session. Would you like to reschedule or cancel your golf session for today?”
            </div>
            <div className="reschedule-end">
               
                     <button className="reschedule-btn1">Reschedule</button>
              

               <div className="reschedule-cancel">
                     Cancel
               </div>

            </div>

        </div>
        
        </>
    )
}
export  default Reschedule;