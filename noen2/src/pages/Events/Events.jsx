import "../../styles/events.scss";
import Button1 from "../../components/Button1";
import Button2 from "../../components/Button2";
import Smal from "../../components/Small";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg";
import img5 from "../../img/yoga.jpg";
import Button3 from "../../components/Button3";
import Button4 from "../../components/Button4";
import { useEffect, useState } from "react";

const imgarr2 = [img1, img2, img3, img4, img5];

const Events = () => {
  const [selecCategory, setSelectCategory] = useState(null);
  const [changeFilter, setChangeFilter] = useState(null);  // For Button1
  const [messageChild, setMessageChild] = useState(null);  // For Button4
  const [messageChild3, setMessageChild3] = useState(null);  // For Button4
  const [filtered, setFiltered] = useState([]);
  const [clickedButton, setClickedButton] = useState(null); // State to track clicked button
  
  const handleDataChild = (data) => {
    setClickedButton("btn1");  // Track Button1 click
    setChangeFilter(data);  // For Button1
  };

  const handleDataChild2 = (data) => {
    setClickedButton("btn4");  // Track Button4 click
    setFiltered(data); 
    console.log("cate clicked") // For Button4
  };
  const handleDataChild3 = (data) => {
    setClickedButton("btn3");  // Track Button4 click
    setFiltered(data); 
    console.log(data,"location clicked") // For Button4
  };
  
  const handleDataChild4=(data)=>{
    setFiltered(data);
    console.log("walkdata")
  }

  const locationOptions = [
    "Sindhu",
    "London, UK",
    "Tokyo, Japan",
    "Berlin, Germany",
    "Paris, France",
    "Sydney, Australia"
];

  useEffect(() => {
    // First useEffect logic, triggered when Button1 is clicked (changeFilter changes)
    if (clickedButton === "btn1") {
      const savedData = sessionStorage.getItem("filtered");
      const event = savedData ? JSON.parse(savedData) : [];
      setFiltered(event);
    }
  }, [changeFilter, clickedButton]);

  useEffect(() => {
    // Second useEffect logic, triggered when Button4 is clicked (messageChild changes)
    if (clickedButton === "btn4") {
      const savedData = sessionStorage.getItem("catFiltered");
      const event = savedData ? JSON.parse(savedData) : [];
      setFiltered(event);
    }
  }, [messageChild, clickedButton]);

  return (
    <>
      <div className="events">
        <div className="heading">Hey Charlie,</div>
        <div className="para">Let's find something exciting for you.</div>
        <div className="btns">
          <div className="upper">
            <div className="left">
              <div className="up">
                <p>What suits your Schedule?</p>
              </div>
              <div className="down">
                <div className="btn1">
                  <Button1 sendDataParent={handleDataChild} />
                </div>
                <div className="btn2">
                  <Button3 locations={locationOptions} sendDataParent3={handleDataChild3} />
                </div>
              </div>
            </div>
            <div className="mid1">
              <div className="up">
                <p>How far are you willing to travel?</p>
              </div>
              <div className="down">
                <Button2 sendDataParent4={handleDataChild4} />
              </div>
            </div>
            <div className="mid2">
              <div className="down">
                <div className="btn1">
                  <Button2 sendDataParent4={handleDataChild4}/>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="down">
                <div className="btn1">
                  <Button4 props={"No limits"} />
                </div>
              </div>
            </div>
          </div>

          <div className="down2">
            <div className="up">
              <p className="para">
                Yes, we can always filter out the events by category wise
              </p>
            </div>
            <div className="down">
              <Button4 props={"Stand up comedy"} sendDataParent={handleDataChild2} />
              <Button4 props={"Ramp Walk"} sendDataParent={handleDataChild2} />
              <Button4 props={"Box Cricketer"} sendDataParent={handleDataChild2} />
              <Button4 props={"Swimming"} sendDataParent={handleDataChild2} />
              <Button4 props={"Golf Tournament"} sendDataParent={handleDataChild2} />
              <Button4 props={"Singing"} sendDataParent={handleDataChild2} />
              <Button4 props={"Talk Shows"} sendDataParent={handleDataChild2} />
              <Button4 props={"Kite surfing"} sendDataParent={handleDataChild2} />
              <Button4 props={"Book exhibitions"} sendDataParent={handleDataChild2} />
            </div>
          </div>
        </div>

        <div className="card-section">
          {filtered &&
            filtered.map((arr, index) => (
              <Smal key={index} props={arr.img} title={arr.title} catName={arr.category_name} />
            ))}
        </div>

        <button className="btn5">Load more</button>
      </div>
    </>
  );
};

export default Events;
