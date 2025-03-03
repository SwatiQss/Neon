import AddReview from "../components/AddReview";
import AddReview2 from "../components/AddReview2";
import ModalRescheduleImg from "../components/ModalRescheduleImgSection";
import "../styles/modalreschedule.scss";
import Button2 from "../components/Button2";
import Button4 from "../components/Button4";
import Smal from "../components/Small";
import img1 from "../img/golf.jpg";
import img2 from "../img/surfing.jpg";
import img3 from "../img/holiday_0.png";
import img4 from "../img/island.jpg"
import img5 from "../img/yoga.jpg"
import ReserveMySeat from "../components/ReserveMySeat";
const imgarr2=[img1,img2,img3,img4,img5]



const ModalRescheduleNext=()=>{
    return(
        <>
        <div className="modalreschedule">
        <AddReview2/>
            <div className="img-section">

<ModalRescheduleImg/>

            </div>
            <div className="similar-recommedations">
                <div className="similar-heading">
                Some similar recommendation for you, Charlie.
                </div>
                <div className="similar-buttons">
                <div className="mid1">
        <div className="up">
        <p> How far are you willing to travel?</p>
        </div>
        <div className="down">
         <Button2/>
        </div>

    </div>

    <div className="mid2">
        <div className="up">

        </div>
        <div className="down">
        <div className="btn1">
            <Button2/>

        </div>
        </div>
       

    </div>
    <div className="right">
        <div className="down">
        <div className="btn1">
        <Button4 props={"No limits"}/>
       </div>
        </div>
       
    </div>

                </div>

            </div>
            <div className="modal-reschedule-drop-section">
            <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>

     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>
     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>



            </div>



        </div>
        
        </>
    )
}

export default ModalRescheduleNext;