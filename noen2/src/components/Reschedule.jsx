import "../styles/Reschedule.scss"
import { BiSolidBellRing } from "react-icons/bi";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { openModal2 } from "../redux/modalSlice2";


const Reschedule=()=>{
    const dispatch=useDispatch();
     const [notifications, setNotifications] = useState([]);
    
        console.log(notifications); // Debugging output
        
        let parsedMessage;
        
        // Check if notifications array is not empty and first element is a valid JSON string
        if (notifications.length > 0 && typeof notifications[0] === "string") {
            try {
                parsedMessage = JSON.parse(notifications[0]).message;
                console.log(parsedMessage, "Parsed message");
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        }
        
     
        useEffect(()=>{
            const ws=new WebSocket("ws://localhost:5000");
    
            ws.onopen=()=>{
                console.log("Connected to webSocket server");
            }
    
            ws.onmessage=(event)=>{
                setNotifications((prev)=>[...prev,event.data]);
            }
    
            ws.onclose=()=>{
                console.log("webSocket disconnected");
            };
    
            return ()=>{
                ws.close();
            };
        },[]);

   
    

    return(
        <>
        <div className="reschedule">
            <div className="reschedule-heading">
Hey Charlie<BiSolidBellRing style={{color:"#EEFF00",marginLeft:"8px"}}/>
            </div>
            <div className="reschedule-para">
           {parsedMessage}
            </div>
            <div className="reschedule-end">
               
                     <button className="reschedule-btn1" onClick={()=>dispatch(openModal2())}>Reschedule</button>
              

               <div className="reschedule-cancel">
                     Cancel
               </div>

            </div>

        </div>
        
        </>
    )
}
export  default Reschedule;