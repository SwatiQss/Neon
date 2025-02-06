import "../../styles/dashboard.scss";
import Golf from "../../components/Recommedation/Golf";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Understand from "../../components/RatingCards/Understand";
import Smal from "../../components/Small";
const imgarr = [img1, img2, img3];
const imgarr2=[img1,img2,img3,img4,img5]

const Dashboard = () => {
  return (
    <div className="dashboard">
      <p className="heading">Good morning Charlie!</p>
      <p className="para">Below listed are your itineraries, have a look at timing and location.</p>
      <p className="para">We wish you to enjoy the activity and the weather.</p>

      <div className="card-section">
        {imgarr.map((img, index) => (
          <Golf key={index} props={img} />
        ))}
      </div>
     <div className="arrow">
     <MdOutlineArrowCircleLeft style={{color:"grey"}}/>
     <MdOutlineArrowCircleRight style={{color:"#2222"}}/>
      

     </div>
     <p className="heading">Charlie, hope we understand you better</p>
    <div className="card-section">
    {imgarr.map((img, index) => (
          <Understand key={index} props={img} />
        ))}
   

    </div>
    <div className="arrow">
     <MdOutlineArrowCircleLeft style={{color:"grey"}}/>
     <MdOutlineArrowCircleRight style={{color:"#2222"}}/>
      

     </div>

     <p className="heading">Todays recommedations for you, charlie!</p>
     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>

     <p className="heading">Charlie, here is your master journey with us so far</p>
     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>
     <div className="map">
     <p className="heading">Find events on map</p>
     </div>
    </div>
  );
};

export default Dashboard;
