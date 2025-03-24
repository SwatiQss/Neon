import "../../styles/dashboard.scss";
import Golf from "../../components/Recommedation/Golf";
import MapComponent from "../../components/Maps/MapComponent";
import Understand from "../../components/RatingCards/Understand";
import Smal from "../../components/SmallCards/Small";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { useRef } from "react";
import Modal from "../../components/Modals/Modal";
import { Link } from "react-router-dom";
import ModalVibe from "../../components/Modals/ModalReview";
import { useEffect, useState } from "react";
import Small6 from "../../components/SmallCards/small6";
import { VscSmiley } from "react-icons/vsc";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { IoSad } from "react-icons/io5";
import { FaSadCry } from "react-icons/fa";





const emotions = [
  <VscSmiley color="FFCF50" />,
  <FaFaceGrinHearts color="E07A5F" />,
  <IoSad color="FFCF50" />,
  <FaSadCry color="A4B465" />,
  <IoSad color="FFCF50" />,
];


const Dashboard = () => {
  const [events3, setEvents3] = useState([]);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [leftArrowColor, setLeftArrowColor] = useState("grey");
  const [rightArrowColor, setRightArrowColor] = useState("black");
  const cardContainerRef = useRef(null);
  const cardContainerRef2 = useRef(null);
  useEffect(() => {
    fetch("http://localhost:5000/event/itenary")
      .then((response) => response.json())
      .then((data) => setEvents3(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  sessionStorage.setItem("events3", JSON.stringify(events3));
  console.log(events3, "events333333");



  useEffect(() => {
    sessionStorage.setItem("events3", JSON.stringify(events3));
    if (cardContainerRef.current) {
      const container = cardContainerRef.current;
      const visibleWidth = container.offsetWidth;
      const totalWidth = container.scrollWidth;
      setMaxScroll(Math.ceil(totalWidth / visibleWidth) - 1);
    }
  }, [events3]);

  const scrollLeft = () => {
    if (cardContainerRef.current && scrollIndex > 0) {
      const container = cardContainerRef.current;
      container.scrollBy({ left: -container.offsetWidth, behavior: "smooth" });
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current && scrollIndex < maxScroll) {
      const container = cardContainerRef.current;
      container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
      setScrollIndex((prev) => Math.min(prev + 1, maxScroll));
    }
  };
  

  useEffect(() => {
    sessionStorage.setItem("events3", JSON.stringify(events3));
    if (cardContainerRef2.current) {
      const container = cardContainerRef2.current;
      const visibleWidth = container.offsetWidth;
      const totalWidth = container.scrollWidth;
      setMaxScroll(Math.ceil(totalWidth / visibleWidth) - 1);
    }
  }, [events3]);
const scrollLeft2 = () => {
    if (cardContainerRef.current && scrollIndex > 0) {
      const container = cardContainerRef2.current;
      container.scrollBy({ left: -container.offsetWidth, behavior: "smooth" });
      setScrollIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const scrollRight2 = () => {
    if (cardContainerRef2.current && scrollIndex < maxScroll) {
      const container = cardContainerRef2.current;
      container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
      setScrollIndex((prev) => Math.min(prev + 1, maxScroll));
    }
  };




  const [events2, setEvents2] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/event/events")
      .then((response) => response.json())
      .then((data) => setEvents2(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  sessionStorage.setItem("events", JSON.stringify(events2));
  console.log(events2, "0000000000");

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories/category")
      .then((response) => response.json())
      .then((data) => setCategory(data))

      .catch((error) => console.error("Error:", error));
  }, []);
  console.log(category, "categoryyyyyyyyyyyyyyyy");

  const [name, setName] = useState("");
  useEffect(() => {
    const savedData = sessionStorage.getItem("user");
    if (savedData) {
      const user = JSON.parse(savedData);
      setName(user.name); // Set the first letter of user's name
    }
  }, []);
  useEffect(() => {
    setLeftArrowColor(scrollIndex === 0 ? "grey" : "black");
    setRightArrowColor(scrollIndex === maxScroll ? "grey" : "black");
  }, [scrollIndex, maxScroll]);

 

  return (
    <div className="dashboard">
      <Modal />
      <p className="heading">Good morning {name}!</p>
      <p className="para0">
        Below listed are your itineraries, have a look at timing and location.
      </p>
      <p className="para0">
        We wish you to enjoy the activity and the weather.
      </p>

      <div className="Card-container">
        <div className="card-section" ref={cardContainerRef}>
          {events3.map((arr, index) => (
            <Link to={`/scheduled/${arr.id}`} className="Link-card">
              <Golf
                key={index}
                img={arr.img}
                title={arr.title}
                descrp={arr.description}
                location={arr.location}
                cat={arr.category}
                from={arr.from_date}
                to={arr.to_date}
                temp={arr.temperature}
                rating={arr.rating}
              />
            </Link>
          ))}
        </div>

        <div className="arrow">
          <PiArrowCircleLeftThin
            style={{ color: leftArrowColor, fontSize: "48px" }}
            onClick={scrollLeft}
          />
          <PiArrowCircleRightThin
            style={{ color: rightArrowColor, fontSize: "48px" }}
            onClick={scrollRight}
          />
        </div>
      </div>

      <div className="Card-container">
        <p className="heading8">{name}, hope we understand you better</p>
        <div className="card-section" ref={cardContainerRef2}>
          {events3.map((arr, index) => (
            <Understand
              key={index}
              id={arr.id}
              props={arr.img}
              title={arr.title}
              desc={arr.description}
              emoji={emotions[arr.rating - 1]}
            />
          ))}
        </div>
        <div className="arrow">
          <PiArrowCircleLeftThin
            style={{ color: leftArrowColor, fontSize: "48px" }}
            onClick={scrollLeft2}
          />
          <PiArrowCircleRightThin
            style={{ color: rightArrowColor, fontSize: "48px" }}
            onClick={scrollRight2}
          />
        </div>
      </div>

      <div className="Card-container">
        <p className="heading8">Todays recommedations for you, {name}!</p>

        <div className="card-section">
          <div className="card-section2">
            {events2.map((arr, index) => (
              <Smal
                key={index}
                index={index + 1}
                props={arr.img}
                title={arr.title}
                catName={arr.category_name}
                id={arr.id}
                category_id={arr.category_id}
                saved_status={arr.saved_status}
                onClick={() => {
                  sessionStorage.setItem("reserved", JSON.stringify(arr.id));
                  console.log("Reserve ID:", arr.category_id);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="Card-container">
        <p className="heading8">
          {name}, here is your master journey with us so far
        </p>
        <div className="card-section">
          <div className="card-section2">
            {events2.map((arr, index) => (
              <Small6
                key={index}
                props={arr.img}
                title={arr.title}
                catName={arr.category_name}
                category_id={arr.category_id}
                saved_status={arr.saved_status}
              />
            ))}
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
