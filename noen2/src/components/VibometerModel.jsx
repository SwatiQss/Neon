import "../styles/vibemterModel.scss"
import { useState } from "react";


const ViboModal=()=>{

    const [vibo,setVibo]=useState({
        id:3,
        vibes:"",
        experience:""

    })
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setVibo((prevData)=>({
            ...prevData,
            [name]:value,
        }))
    };

    const handleSubmit=()=>{
        console.log(vibo);
        fetch("url",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(vibo),
        })
        .then((reponse)=>reponse.json())
        .then((data)=>{
            console.log(data);

        })
        .catch((error)=>{
            console.log("Error",error);
        })
    }

    return(
        <>
        <div className="reviewModal">
            <div className="review-heading">
                Add a review


            </div>

            <div className="review-para">
                Hi Charlie, if you're on this page, we bet you enjoy this event fully.Would you like to share your feedback review wiht us?
            </div>

           <div className="vibemeter">
            


           </div>
            <div className="comment-section">
                <input type="text" className="review-input" onChange={handleInputChange}>
                </input>

            </div>

          <button className="review-btn" onClick={handleSubmit}>
            Submit
          </button>


        </div>
        
        </>
    )
}

export default ViboModal;
