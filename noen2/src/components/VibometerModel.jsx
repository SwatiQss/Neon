import "../styles/vibemterModel.scss"


const ViboModal=()=>{

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

export default ViboModal;
