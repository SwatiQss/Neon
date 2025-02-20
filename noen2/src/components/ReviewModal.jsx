import "../styles/reviewModal.scss"
import { CiStar } from "react-icons/ci";
import { useState,useEffect } from "react";


const Rating=({props})=>{
    const [number,setNumber]=useState(0);
    
    console.log(props,number);
    const getStarColor = (starValue) => {
        return starValue <= number ? "#FFD700" : "#222222";  // Gold if star is part of rating, else dark
    };

    
    
    return (
        <>
    <div className="rating-compo">
        <div className="rating-name">
            {props}
        </div>
       <div className="rating-star">
      <CiStar style={{ color: getStarColor(1), fontSize: "24px" }} onClick={()=>{setNumber(1)}}/>
      <CiStar style={{color:getStarColor(2),fontSize:"24px"}} onClick={()=>{setNumber(2)}}/>
      <CiStar style={{color:getStarColor(3),fontSize:"24px"}} onClick={()=>{setNumber(3)}}/>
      <CiStar style={{color:getStarColor(4),fontSize:"24px"}} onClick={()=>{setNumber(4)}}/>
      <CiStar style={{color:getStarColor(5),fontSize:"24px"}} onClick={()=>{setNumber(5)}}/>

       </div>

    </div>
    </>
    )
}
const ReviewModal = () => {
    const handleSubmit=()=>{
        
        
    }
    const [value, setValue] = useState("");  // Initialize state to store the input value
    console.log("input", value);

    return (
        <>
            <div className="reviewModal">
                <div className="review-heading">
                    Add a review
                </div>

                <div className="review-para">
                    Hi Charlie, if you're on this page, we bet you enjoy this event fully. Would you like to share your feedback with us?
                </div>

                <div className="review-star1">
                    <Rating props="Quality of Event" />
                    <Rating props="Services at Event" />
                </div>
                <div className="review-star2">
                    <Rating props="Operator of Event" />
                    <Rating props="Facilities of Events" />
                </div>
                <div className="review-star3">
                    <Rating props="Staff Politeness" />
                </div>

                <div className="comment-section">
                    <input
                        type="text"
                        className="review-input"
                        value={value}  // Make sure the value is correctly bound to state
                        onChange={(e) => {
                            e.preventDefault();
                            setValue(e.target.value);  // Use e.target.value to get the input value
                        }}
                    />
                </div>

                <button className="review-btn">
                    Submit
                </button>
            </div>
        </>
    );
};


export default ReviewModal;