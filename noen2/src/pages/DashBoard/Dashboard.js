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
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { useRef } from "react";
import { FaGrinHearts } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";
const imgarr = [img1, img2, img3];
const imgarr2=[img1,img2,img3,img4,img5]


const Dashboard = () => {
  const cardContainerRef = useRef(null);
  const cardContainerRef2 = useRef(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }

  const scrollLeft2 = () => {
    if (cardContainerRef2.current) {
      cardContainerRef2.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight2 = () => {
    if (cardContainerRef2.current) {
      cardContainerRef2.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }
  return (
    <div className="dashboard">
      <p className="heading">Good morning Charlie!</p>
      <p className="para0">Below listed are your itineraries, have a look at timing and location.</p>
      <p className="para0">We wish you to enjoy the activity and the weather.</p>

      <div className="Card-container">
      <div className="card-section" ref={cardContainerRef}>
        {imgarr.map((img, index) => (
          <Golf key={index} props={img} />
        ))}
      </div>
     <div className="arrow">
     <PiArrowCircleLeftThin style={{color:"grey",fontSize:"48px"}}  onClick={scrollLeft} />
     <PiArrowCircleRightThin style={{color:"black",fontSize:"48px"}}  onClick={scrollRight} />
      

     </div>
      </div>
      <div className="Card-container">
      <p className="heading">Charlie, hope we understand you better</p>
    <div className="card-section" ref={cardContainerRef2}>
    {imgarr.map((img, index) => (
          <Understand key={index} props={img} />
        ))}
   

    </div>
    <div className="arrow">
    <PiArrowCircleLeftThin style={{color:"grey",fontSize:"48px"}}  onClick={scrollLeft2} />
    <PiArrowCircleRightThin style={{color:"black",fontSize:"48px"}}  onClick={scrollRight2} />
      

     </div>
      </div>
     
      <div className="Card-container">

      <p className="heading">Todays recommedations for you, charlie!</p>
     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>
        </div>

     

    <div className="Card-container">
    <p className="heading">Charlie, here is your master journey with us so far</p>
     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>
    </div>

     
     <div className="map">
     <p className="heading">Find events on map</p>
     </div>
    </div>
  );
};

export default Dashboard;
