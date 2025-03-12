import { useParams } from "react-router-dom";
import "../styles/ReviewCard.scss"
import { FaStar } from "react-icons/fa6";
import { useEffect,useState } from "react";
const ReviewCard=()=>{
    const id=2;

    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/event/review?id=${id}`)
        .then(response=>response.json())
        .then(data=>setReview(data.review))
        .catch(error=>console.error('Error',error));
    },[]);
    console.log(review,"reviewwwww");
    return (
        <>
        <div className="reviewcard">
            <div className="reviewcard-main">
                <div className="user">
                    <div className="user-img">

                    </div>

                   <div className="user-name">
                    Michelle<br/><span className="review-span">Sep 2022</span>

                   </div>


                </div>

                <div className="reviewCard-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatem quae beatae corrupti eaque consequuntur a culpa similique ad maiores. Deserunt a similique voluptates. Quas vero optio et quos quam?
                    
                </div>

                <div className="review-star">
                    <FaStar style={{color:"#FF385C"}}/>
                    <FaStar  style={{color:"#FF385C"}}/>
                    <FaStar  style={{color:"#FF385C"}}/>
                    <FaStar  style={{color:"#FF385C"}}/>
                    <FaStar  style={{color:"#FF385C"}}/>
                    
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