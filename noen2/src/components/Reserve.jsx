import { Children, useEffect } from "react";
import "../styles/reserve.scss"
import {loadStripe} from '@stripe/stripe-js';
import { useState } from "react";


const Reserve=()=>{
    const [eventId,setEventId]=useState(0);
   
    useEffect(()=>{
        const savedId=sessionStorage.getItem('reserved');

   if(savedId){
    setEventId(parseInt(savedId)); 
   }
   
    },[]);

    useEffect(()=>{
        setReserveData((prevData)=>({
            ...prevData,
            event_id:eventId
        }))
    },[eventId])


    const [reserveData,setReserveData]=useState({
        event_id:eventId,//need to store the clicked cards event
        adult:0,
        child:0
    })
    console.log(reserveData,"98879878978");
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setReserveData(reserveData=>({
            ...reserveData,
            [name]:value
        }));
    };


 
    const total=1000;
    const makePayment=async ()=>{
        const stripe=await loadStripe("pk_test_51QyrPKRuorJ9xbcisAf8hKAsa5gKcvnv08YrPQmbUCxhwznyrS7vFdyQLqC8OkrtmuGTQtD8vTLYTOn2LhuPHO0500P8o66vaQ")
        //stripe publishable key

        const headers={
            "Content-Type":"application/json"
        }
        
        const response=await fetch(`http://localhost:5000/stripe/create-checkout-session`,{
            method:'POST',
            headers:headers,
            body:JSON.stringify(reserveData)
        })

        const session=await response.json();

        const result=stripe.redirectToCheckout({
            sessionId:session.id
        })

    }
    return (
        <>
        <div className="reserve-card1">
            <div className="reserve-main">
                <div className="reserve-date">
                    10:30 AM- 7:30 PM
                </div>

                <div className="reserve-mid">
                    <div className="reserve-first">
                          <div className="from">
                            From<br/><span className="span">Nov 10, 2022</span>
                            

                          </div>

                          <div className="to">
                          To<br/><span className="span">Nov 29, 2022</span>
                          </div>
                    </div>

                    <div className="reserve-second">
                        Guests<br/>
                        <div className="span">
                            <div>
                                Adult <select name="adult"
                                value={reserveData.adult}
                                onChange={handleInputChange}

                                
                                >
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                    <option>
                                        5
                                    </option>
                                </select>
                            </div>
                            <div>
                                Child <select 
                                
                                name="child"
                                value={reserveData.child}
                                onChange={handleInputChange}
                                
                                >
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                    <option>
                                        5
                                    </option>
                                </select>
                            </div>

                        </div>

                    </div>
                   
                </div>
                <div className="seats">
                172 Seats still available
                </div>
                

                <div className="reserve-button">
                    <button className="reserve-btn" onClick={makePayment}>
                        Reserve my seats

                    </button>

                </div>

            </div>


        </div>
        
        </>
    )
}
export default Reserve;