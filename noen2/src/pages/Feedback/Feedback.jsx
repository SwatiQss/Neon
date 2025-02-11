import "../../styles/feedback.scss"
import Vibe from "../../components/Vibemeter"
import CardVibe from "../../components/CardVibe"
import Reserve from "../../components/Reserve"
import ReviewCard from "../../components/ReviewCard"

const Feedback=()=>{
    return (
        <>
        <div className="feedback">
            <Vibe/>
            <div className="feedback-container">
            <p className="feedback-heading"> Hi Charlie,</p>
            <p className="feedback-para">here are the glimpse of your feedback shared with us.</p>
            <CardVibe/>
            <hr className='divider'/>
            <CardVibe/>
            <hr className='divider'/>
            <CardVibe/>
            <hr className='divider'/>
            <CardVibe/>
            </div>

        </div>














        </>
    )
}
export default Feedback;