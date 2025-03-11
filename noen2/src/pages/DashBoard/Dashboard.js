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
import Speedometer from "../../components/Speedometer";
import Small6 from "../../components/small6";
import ReserveMySeat from "../../components/ReserveMySeat";
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


  useEffect(() => {
    fetch('http://localhost:5000/event/events')
      .then(response => response.json())
      .then(data => setEvents2(data))
      .catch(error => console.error('Error:', error));
  }, []);
  sessionStorage.setItem('events', JSON.stringify(events2));
  console.log(events2, "0000000000")
  const [events3, setEvents3] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/event/itenary')
      .then(response => response.json())
      .then(data => setEvents3(data))
      .catch(error => console.error('Error:', error));
  }, []);
  sessionStorage.setItem('events3', JSON.stringify(events3));
  console.log(events3, "events333333")

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/categories/category')
      .then(response => response.json())
      .then(data => setCategory(data))

      .catch(error => console.error('Error:', error))

  }, [])
  console.log(category, "categoryyyyyyyyyyyyyyyy")


  const [name, setName] = useState("");
  useEffect(() => {
    const savedData = sessionStorage.getItem('user');
    if (savedData) {
      const user = JSON.parse(savedData);
      setName(user.name); // Set the first letter of user's name
    }
  }, []);

  let size=events3.length
  const[prev,setPrev]=useState("grey");
  const[curr,setCurr]=useState("black");
  useEffect(() => {
    if (events3.length === 0) {
      setCurr('grey');
      setPrev('black');
    } else {
      setCurr('black');
      setPrev('grey');
    }
  }, [events3]); // Runs whenever events3 changes
  



  return (
    <div className="dashboard">
      <Modal />

      <p className="heading">Good morning {name}!</p>
      <p className="para0">Below listed are your itineraries, have a look at timing and location.</p>
      <p className="para0">We wish you to enjoy the activity and the weather.</p>

      <div className="Card-container">
        
          <div className="card-section" ref={cardContainerRef} >
          {events3.map((arr, index) => {
  if (index === size) {
    setCurr('grey');
    setPrev('black');
  }
  let id=arr.id;
  return (
    <Link to={`/scheduled/${id}`} className="Link-card"> <Golf key={index} img={arr.img} title={arr.title} descrp={arr.description} location={arr.location} cat={arr.category} from={arr.from_date} to={arr.to_date} temp={arr.temperature} rating={arr.rating}/></Link>
   );
})}

          </div>
        
        <div className="arrow">
          <PiArrowCircleLeftThin style={{ color: curr, fontSize: "48px" }} onClick={scrollLeft} />
          <PiArrowCircleRightThin style={{ color: prev, fontSize: "48px" }} onClick={scrollRight} />


        </div>
      </div>
      <div className="Card-container">
        <p className="heading8">{name}, hope we understand you better</p>
        <div className="card-section" ref={cardContainerRef2}>


          {
            events2.map((arr, index) => (
              <Understand key={index} id={arr.id} props={arr.img} title={arr.title} desc={arr.description} />

            ))
          }
         

        </div>
        <div className="arrow">
          <PiArrowCircleLeftThin style={{ color: "grey", fontSize: "48px" }} onClick={scrollLeft2} />
          <PiArrowCircleRightThin style={{ color: "black", fontSize: "48px" }} onClick={scrollRight2} />


        </div>
      </div>

      <div className="Card-container">

        <p className="heading8">Todays recommedations for you, {name}!</p>
       
          <div className="card-section" >
            <div className="card-section2">
              {
                events2.map((arr, index) => (



                  <Smal key={index} index={index + 1} props={arr.img} title={arr.title} catName={arr.category_name} id={arr.id} category_id={arr.category_id} saved_status={arr.saved_status}  onClick={() => {
                    sessionStorage.setItem('reserved', JSON.stringify(arr.id));
                    console.log("Reserve ID:", arr.category_id)
                  }} />
                ))
              }
            </div>
          </div>
       
      </div>



      <div className="Card-container">
        <p className="heading8">{name}, here is your master journey with us so far</p>
        <div className="card-section">
          <div className="card-section2">
            {
              events2.map((arr, index) => (
                <Small6 key={index} props={arr.img} title={arr.title} catName={arr.category_name} category_id={arr.category_id} saved_status={arr.saved_status} />
              ))
            }
          </div>
        </div>
      </div>


      <div className="map">
        <p className="heading8">Find events on map</p>
        <MapComponent />
      </div>
      <ModalVibe />
    </div>
  );
};

export default Dashboard;
