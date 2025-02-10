import "../../styles/favourite.scss"
import Smal from "../../components/Small";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
import Recomedation from "../../components/Recommendation";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Button1 from "../../components/Button1";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import Button2 from "../../components/Button2";
const imgarr2=[img1,img2,img3,img4,img5]
const heading="Explore the deep Sea";
const date="from Nov 10 to 29, 2022";
const para="10:30 AM -7:40 PM";

const Favourite=()=>{
    return (
        <>
        <div className="favourite">
        <p className="heading">Good morning Charlie!</p>
        <p className="para">You have shortlisted 8 events to join later.</p>
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
    <Smal key={index} props={img} />
    ))
  }
     </div>
     <p className="heading">Charlie, we have founds some recomedation for You</p>
     <div className="cards">
      <div className="recommend">
      <Recomedation props={img1}  prop2={heading} prop3={date} prop4={para}/>
      </div>
    <div className="recommend">
    <Recomedation props={img5}  prop2={"Swimming game for below 18years"} prop3={date} prop4={para}/>
    </div>
    
     </div>
     <div className="arrow">
          <PiArrowCircleLeftThin style={{color:"grey",fontSize:"48px"}} />
          <PiArrowCircleRightThin style={{color:"black",fontSize:"48px"}} />
           
     
          </div>
          <p className="heading">Top 5 activities on the island today</p>
          <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>

        </div>
        
        </>
    )
}
export default Favourite;