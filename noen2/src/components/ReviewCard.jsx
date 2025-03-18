import { useParams } from "react-router-dom";
import "../styles/ReviewCard.scss"
import { FaStar } from "react-icons/fa6";
import { useEffect,useState } from "react";
import { IoIosStar } from "react-icons/io";
const ReviewCard=({cmmt,rating,user})=>{
    const id=2;

    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/event/review?id=${id}`)
        .then(response=>response.json())
        .then(data=>setReview(data.review))
        .catch(error=>console.error('Error',error));
    },[]);
    return (
        <>
        <div className="reviewcard">
            <div className="reviewcard-main">
                <div className="user">
                    <div className="user-img">

                    </div>

                   <div className="user-name">
                    {user}<br/><span className="review-span">Sep 2022</span>

                   </div>


                </div>

                <div className="reviewCard-para">
                  {cmmt}
                    
                </div>

                <div className="review-star">
                     {[...Array(rating)].map((_, index) => (
                                                       <IoIosStar key={index} style={{ color: "#FF385C", fontSize: "13px" }} />
                                                   ))}
                    
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