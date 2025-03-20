import { useState,useEffect } from "react"
import "../styles/reserveseat.scss"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReserveMySeat = ({eventsData,state}) => {
    // const handleClick=()=>{
    //     fetch("http://localhost:5000/event/reschedule", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(eventsData[0])
    //       })
    //         .then(response => response.json())
    //         .then(data => console.log("Success:", data))
    //         .catch(error => console.error("Error:", error));
    // }
    const navigate=useNavigate();
    const [state2,setState2]=useState(state);
    const id=3;
    let  active='active'
    const handleClick=async ()=>{
        try{
            const response =await axios.patch(`http://localhost:5000/event/reschedule/${id}/toggle`,{
                schedule:active,
            });
            console.log("responseReschedule",response.data);
            


        }catch(error){
            console.log("eroor in reschedule", error);

        }
        
    }
  const handleCancel=()=>{
    setState2(!state);
       

  }
  //fetching the given events data from backend
        const [eventData,setEventData]=useState([]);
              //fetching the event data and vibes whose event id=given id
       useEffect(()=>{
          fetch(`http://localhost:5000/event/schedule?id=${id}`)
          .then(response=>response.json())
          .then(data=>setEventData(data.schedule))
          .catch(error=>console.error('Error:',error));
       },[id]);
       console.log(eventData,"eeeeeeeeeee0000000")


    return (
        <>
            <div className="reserveMain">
                <div className="reserveMain1">
                    Hey Charlie
                </div>
                <div className="reserveMain2">
                    You have choosen Round of Golf event on 14 november, 2024.Have a great event ahead
                    Enjoy your new round of go.
                </div>
                <div className="reserveMain3">
                    <div className="day">
                        <p className="para">Select a day</p>
                        <select className="reserveSelect">
                            <option>Jan 1, 2025</option>
                            <option>
                                Jan 2, 2025
                            </option>
                        </select>
                    </div>
                    <div className="timeSlot">
                        <p className="para">Select a timeSlot</p>
                        <select className="reserveSelect">
                            <option>10:00 AM- 11:00 AM</option>
                            <option>
                                2:30 PM- 3:00 PM
                            </option>
                        </select>

                    </div>

                </div>
                <div className="reserveMain4">
                    <p className="para">Reserve your seat</p>
                    <select className="reserveSelect">
                        <option>
                            1 Seats
                        </option>
                        <option>
                            2 Seats
                        </option>

                    </select>

                </div>
                <div className="reserveMain5">
                    <div className="reserveButton">
                    <Link className="link" to="/choices">
                    <button className="btnreserve" onClick={handleClick}>
                            Reserve my seats
                        </button>
                    </Link>
                       

                    </div>
                    <div className="reserveCancel" onClick={handleCancel}>

                        <p className="pCancel">Cancel
                        </p>

                    </div>

                </div>
            </div>

        </>
    )
}

export default ReserveMySeat;