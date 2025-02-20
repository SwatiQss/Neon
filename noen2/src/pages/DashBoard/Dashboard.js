import "../../styles/dashboard.scss";
import Golf from "../../components/Recommedation/Golf";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
import MapComponent from "../../components/MapComponent";
import Understand from "../../components/RatingCards/Understand";
import Smal from "../../components/Small";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { useRef } from "react";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import Events from "../../dummy/event"
import ModalVibe from "../../components/ModalReview";
import ViboModal from "../../components/VibometerModel";
import { useEffect, useState } from "react";
const imgarr2 = [img1, img2, img3, img4, img5]
console.log(Events)



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
  const [events2, setEvents2] = useState([]);
  const [userId,setuserId]=useState(0);
  const [review, setReview] = useState(
    {
            id:1,
            user_id:'',
            event_id:'',
            quality_of_event:'',
            services_at_event:'',
            operator_of_event:'',
            facilities_of_events:'',
            staff_politeness:'',
            comment:' ',
            created_at: "2025-02-18T10:19:28.790Z",
        updated_at: "2025-02-18T10:19:28.790Z",

    }
  );


  useEffect(() => {
    fetch('http://localhost:5000/event/events')
      .then(response => response.json())
      .then(data => setEvents2(data))
      .catch(error => console.error('Error:', error));
  }, []);



  return (
    <div className="dashboard">
      <Modal />

      <p className="heading">Good morning Charlie!</p>
      <p className="para0">Below listed are your itineraries, have a look at timing and location.</p>
      <p className="para0">We wish you to enjoy the activity and the weather.</p>

      <div className="Card-container">
        <Link to="/roundgolf" className="Link-card">
          <div className="card-section" ref={cardContainerRef} >
            {Events.Events.map((event, index) => (
              <Golf key={index} event={event} />
            ))}
          </div>
        </Link>
        <div className="arrow">
          <PiArrowCircleLeftThin style={{ color: "grey", fontSize: "48px" }} onClick={scrollLeft} />
          <PiArrowCircleRightThin style={{ color: "black", fontSize: "48px" }} onClick={scrollRight} />


        </div>
      </div>
      <div className="Card-container">
        <p className="heading">Charlie, hope we understand you better</p>
        <div className="card-section" ref={cardContainerRef2}>


          {
            events2.map((arr, index) => (
              <Understand key={index} props={arr.img} title={arr.title} desc={arr.description} />

            ))
          }
          <ViboModal />

        </div>
        <div className="arrow">
          <PiArrowCircleLeftThin style={{ color: "grey", fontSize: "48px" }} onClick={scrollLeft2} />
          <PiArrowCircleRightThin style={{ color: "black", fontSize: "48px" }} onClick={scrollRight2} />


        </div>
      </div>

      <div className="Card-container">

        <p className="heading">Todays recommedations for you, charlie!</p>
        <div className="card-section">
          {
            imgarr2.map((img, index) => (
              <Smal key={index} props={img} />
            ))
          }
        </div>
      </div>



      <div className="Card-container">
        <p className="heading">Charlie, here is your master journey with us so far</p>
        <div className="card-section">
          {
            imgarr2.map((img, index) => (
              <Smal key={index} props={img} />
            ))
          }
        </div>
      </div>


      <div className="map">
        <p className="heading">Find events on map</p>
        <MapComponent />
      </div>

      <ModalVibe />
    </div>
  );
};

export default Dashboard;
