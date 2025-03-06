import "../styles/reviewModal.scss"
import { CiStar } from "react-icons/ci";
import { useState,useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { closeModal } from "../redux/modalSlice";
import { useDispatch } from "react-redux";



const Rating = ({ label, fieldName, setReviewData }) => {
    const [number, setNumber] = useState(0);

    // Function to handle the star color based on the rating
    const getStarColor = (starValue) => {
        return starValue <= number ? "#FFD700" : "#222222";  // Gold if star is part of rating, else dark
    };

    const handleStarClick = (ratingValue) => {
        setNumber(ratingValue); // Update local state for the star rating
        setReviewData((prevData) => ({
            ...prevData,
            [fieldName]: ratingValue,  // Dynamically update the field in the reviewData state
        }));
    };

    return (
        <div className="rating-compo">
            <div className="rating-name">
                {label}
            </div>
            <div className="rating-star">
                {[1, 2, 3, 4, 5].map((starValue) => (
                    <CiStar
                        key={starValue}
                        style={{ color: getStarColor(starValue), fontSize: "24px" }}
                        onClick={() => handleStarClick(starValue)}
                    />
                ))}
            </div>
        </div>
    );
};

const ReviewModal = () => {
    // Initialize idUse as 0
    const [idUse, setIduse] = useState();
    const[eventId,setEventId]=useState(0);
  
    // Set idUse when savedData is available, use useEffect to avoid infinite re-renders
    useEffect(() => {
      const savedData = sessionStorage.getItem('user');
      const savedId=sessionStorage.getItem('eventId');
      console.log(savedData, "jjjjjjjjjjjjjj");
      if (savedData) {
        const user = JSON.parse(savedData);
        setIduse(user.id);
        console.log(user.id,"userrrrrrrrrrrrrrr")
      }
      if(savedId){
        console.log(savedId);
        setEventId(parseInt(savedId));
        console.log(eventId,"eventttttttttttttttttttt");
      }
    }, []); 
    
    // Initialize reviewData with default values
    const [reviewData, setReviewData] = useState({
        id:1 ,
        user_id: idUse, // Example value, replace with actual user ID
        event_id: eventId, // Example value, replace with actual event ID
        quality_of_event: 0,
        services_at_event: 0,
        operator_of_event: 0,
        facilities_of_events: 0,
        staff_politeness: 0,
        comment: "",
        created_at: new Date(),
        updated_at: new Date(),
    });
    useEffect(() => {
        if (idUse !== 0) {
          setReviewData((prevData) => ({
            ...prevData,
            user_id: idUse, // Update user_id with the new idUse value
          }));
        }
        if (eventId !== 0) {
            setReviewData((prevData) => ({
              ...prevData,
              event_id: eventId, // Update user_id with the new idUse value
            }));
          }
      }, [idUse,eventId]);

    // Handling the input change for the comment
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReviewData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const navigate =useNavigate();

    // Submit the review data
    const handleSubmit = () => {
        console.log(reviewData);
        fetch("http://localhost:5000/reviews/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
            .then((response) => response.json())
            
            .then((data) => {
                console.log(data);
                navigate('/ViboModal')
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    };
 
const dispatch=useDispatch();
const handleClick=()=>{
    dispatch(closeModal())
}

    return (
        <div className="reviewModal">
            <div className="review-heading">Add a review</div>

            <div className="review-para">
                Hi Charlie, if you're on this page, we bet you enjoy this event fully.
                Would you like to share your feedback with us?
            </div>

            <div className="review-star1">
                <Rating label="Quality of Event" fieldName="quality_of_event" setReviewData={setReviewData} />
                <Rating label="Services at Event" fieldName="services_at_event" setReviewData={setReviewData} />
            </div>
            <div className="review-star2">
                <Rating label="Operator of Event" fieldName="operator_of_event" setReviewData={setReviewData} />
                <Rating label="Facilities of Event" fieldName="facilities_of_event" setReviewData={setReviewData} />
            </div>
            <div className="review-star3">
                <Rating label="Staff Politeness" fieldName="staff_politeness" setReviewData={setReviewData} />
            </div>

            <div className="comment-section">
                <input
                    type="text"
                    className="review-input"
                    name="comment"
                    value={reviewData.comment}
                    onChange={handleInputChange}
                    placeholder="Add your comment here"
                />
            </div>
<div className="btn0" style={{display:"flex",justifyContent:"space-around"}}>
    
<button className="review-btn" onClick={handleSubmit}>
                Submit
            </button>

            <button className="review-btn" onClick={handleClick}>cancel</button>

</div>
        </div>
    );
};

export default ReviewModal;


