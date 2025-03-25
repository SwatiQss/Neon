//import { FaBell } from "react-icons/fa";
import "../../styles/btn4.scss"
//import { CiCalendar } from "react-icons/ci";
import { useState ,useEffect} from "react";
const Button4=({props,sendDataParent})=>{
const[cat,setCat]=useState(null);
const [catFiltered,setCatFiltered]=useState([]);
const savedEvent=sessionStorage.getItem("events");
const handleFunction=(data)=>{
    setCat(data);
    sendDataParent(catFiltered);
    if(savedEvent){
        const events=JSON.parse(savedEvent);
        console.log(events);
    
        const filtered=events.filter((event)=>{
            const category=event.category;
            return category===cat;
        });
        setCatFiltered(filtered);
        console.log(filtered,"cat-filteredEvent");
    
        sessionStorage.setItem("catFiltered",JSON.stringify(filtered));
    
    
  }
    console.log("handleFunction");
}




    return(
        <>
        <button className="btn" onClick={()=>handleFunction(props)} >
            <div className="date">
                {props}
            </div>
             
            

        </button>
        
        </>
    )
}

export default Button4;