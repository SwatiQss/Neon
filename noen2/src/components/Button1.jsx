import { FaBell } from "react-icons/fa";
import "../styles/btn.scss"
import { CiCalendar } from "react-icons/ci";
import { use, useEffect, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"; 
import { format } from "date-fns";

const Button1=()=>{
    const [startDate,setStartDate]=useState(null);
    const[showCalendar,setShowCalendar]=useState(false);
    useEffect(() => {
        console.log(startDate);
    }, [startDate]);
    
  const date=new Date(startDate);
  const formatteDate=format(date,'yyyy/MM/dd');
  console.log(formatteDate,"formattttttt");

    //function to toggle calender visibility
    const toggleCalendar=()=>{
        setShowCalendar(!showCalendar)
    }
    return(
        <>
        <button className="btn" onClick={toggleCalendar} >
            <div className="emoji">
              <CiCalendar style={{color:"#FF385C"}}/>
            </div>
            <div className="date">
                Pick a date
            </div>


        </button>
        {/*  conditional rendering the date picker*/}
        {showCalendar && (
            <DatePicker
            selected={startDate}
            onChange={(date)=>setStartDate(date)}
            dateFormat="yyyy/MM/dd"
            inline
            
            />
        )}
        
        </>
    )
}

export default Button1;