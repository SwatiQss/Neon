import "../styles/modalrescheduleImg.scss"

const ModalRescheduleImg = ({state,setState}) => {
    return (
        <>
            <div className="img-section">

                <div className="section-content-1">
                    Round of Golf
                </div>

                <div className="section-content-2">
                    Sindalah Island
                </div>
                <div className="section-content-3">
                    <div className="content3-one">
                    Jan 01, 2023 
                    </div>
                    <div className="content3-two">
                    7:00 AM | 11:00 AM | 3:00 PM
                    </div>
                  
                </div>
                <div className="section-content-4">
                    <button className="section-4-btn" onClick={()=>{setState(!state)}}>
Reschedule
                    </button>
                </div>


            </div>

        </>
    )
}
export default ModalRescheduleImg;