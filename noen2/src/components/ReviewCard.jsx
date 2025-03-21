import { useParams } from "react-router-dom";
import "../styles/ReviewCard.scss"
import { FaStar } from "react-icons/fa6";
import { useEffect,useState } from "react";
import { IoIosStar } from "react-icons/io";
const ReviewCard=({cmmt,rating,user,img})=>{
    const id=2;

    
    return (
        <>
        <div className="reviewcard">
            <div className="reviewcard-main">
                <div className="user">
                    <div className="user-img"  style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.467), rgba(0, 0, 0, 0.9)), url(${img})`
                        }} >

                    </div>

                   <div className="user-name">
                    {user}<br/><span className="review-span">Sep 2022</span>

                   </div>


                </div>

                <div className="reviewCard-para">
                  {cmmt}
                    
                </div>

                <div className="review-star">
    {Number.isInteger(rating) && rating > 0 ? (
        [...Array(rating)].map((_, index) => (
            <IoIosStar key={index} style={{ color: "#FF385C", fontSize: "13px" }} />
        ))
    ) : (
        <p>No rating available</p> // Fallback message
    )}
</div>


                <div className="read-more">
                    Read more
                    
                </div>
            </div>

        </div>
        
        </>
    )
}

export default ReviewCard;