import "../../styles/favourite.scss"
import Smal from "../../components/SmallCards/Small";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
import Recomedation from "../../components/Recommedation/Recommendation";
//import Button1 from "../../components/Button1";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
//import Button2 from "../../components/Button2";
import Small3 from "../../components/SmallCards/Small3";
import { useEffect, useState } from "react";
const imgarr2=[img1,img2,img3,img4,img5]
const heading="Explore the deep Sea";
const date="from Nov 10 to 29, 2022";
const para="10:30 AM -7:40 PM";


const Favourite=()=>{

  const[name,setName]=useState("");
  useEffect(()=>{
    const savedData=sessionStorage.getItem('user');
    if(savedData){
      const user=JSON.parse(savedData);
      setName(user.name);
    }
  },[]);
  

  const[favourite,setFavourite]=useState([]);
  const[buttonClicked,setButtonClicked]=useState(true);
  //callback Function
  const handleDataFromChild = (data) => {
    console.log("Received from child:", data);
    setButtonClicked(data); // Update the state with the data received from the child
  }
  useEffect(()=>{
    fetch('http://localhost:5000/categories/favourite')
    .then(response=>response.json())
    .then(data=>setFavourite(data))
    .catch(error=>console.error('Error',error));
  },[buttonClicked]);
    console.log(favourite,"favvvvvvvvvvvv");
    const [events2, setEvents2] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/event/events')
      .then(response => response.json())
      .then(data => setEvents2(data))
      .catch(error => console.error('Error:', error));
  }, []);
  sessionStorage.setItem('events', JSON.stringify(events2));
    return (
        <>
        <div className="favourite">
       {/* When the favourite list is empty */}
{favourite.length === 0 && <p className="para">You have shortlisted 0 events to join later.</p>}

{/* When the favourite list has items */}
{favourite.length > 0 && (
  <p className="para">You have shortlisted {favourite.length} events to join later.</p>
)}
        <div className="card-section">
  <div className="card-section2">
  {
    favourite.map((arr,index)=>(
    <Small3 key={index} props={arr.img} catName={arr.category_name} category_id={arr.category_id} title={arr.title} saved_status={arr.saved_status} sendDatatoParent={handleDataFromChild}/>
    ))
  }
  </div>
     </div>
  
     <p className="heading">{name}, we have founds some recomedation for You</p>
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
        
        </>
    )
}
export default Favourite;