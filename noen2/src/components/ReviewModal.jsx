import "../styles/reviewModal.scss"
import { CiStar } from "react-icons/ci";

const Rating=({props})=>{
    return (
        <>
    <div className="rating-compo">
        <div className="rating-name">
            {props}
        </div>
       <div className="rating-star">
      <CiStar style={{color:"#222222",fontSize:"24px"}}/>
      <CiStar style={{color:"#222222",fontSize:"24px"}}/>
      <CiStar style={{color:"#222222",fontSize:"24px"}}/>
      <CiStar style={{color:"#222222",fontSize:"24px"}}/>
      <CiStar style={{color:"#222222",fontSize:"24px"}}/>

       </div>

    </div>
    </>
    )
}
const ReviewModal=()=>{

    return(
        <>
        <div className="reviewModal">
            <div className="review-heading">
                Add a review


            </div>

            <div className="review-para">
                Hi Charlie, if you're on this page, we bet you enjoy this event fully.Would you like to share your feedback review wiht us?
            </div>

            <div className="review-star1">
            <Rating props="Quaity olf Event"/>
                <Rating props="Services at Event"/>

            </div>
            <div className="review-star2">
                <Rating props="Operator of Event"/>
                <Rating props="Facilities of Events"/>

            </div>
            <div className="review-star3">
                <Rating props="Staff Pelitemms"/>

            </div>
            <div className="comment-section">
                <input type="text" className="review-input">
                </input>

            </div>

          <button className="review-btn">
            Submit
          </button>


        </div>
        
        </>
    )
}

export default ReviewModal;