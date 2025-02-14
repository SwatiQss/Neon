import AddReview from "../components/AddReview";
import ModalRescheduleImg from "../components/ModalRescheduleImgSection";

const ModalRescheduleNext=()=>{
    return(
        <>
        <div className="modalreschedule">
            <div className="addReview">
                <AddReview/>

            </div>
            <div className="img-section">

<ModalRescheduleImg/>
            </div>
            <div className="similar-recommedations">

            </div>
            <div className="modal-reschedule-drop-section">


            </div>



        </div>
        
        </>
    )
}

export default ModalRescheduleNext;