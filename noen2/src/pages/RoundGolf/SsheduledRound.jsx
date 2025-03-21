import { FaStar } from "react-icons/fa6";
import "../../styles/roundgolf.scss"
import AddReview from "../../components/AddReview";
import { GrAppsRounded } from "react-icons/gr";
import Reserve from "../../components/Reserve";
import Scheduled from "../../components/Scheduled";
import { CiLocationOn } from "react-icons/ci";
import { FaGrinHearts } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import ReviewCard from "../../components/ReviewCard";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import Small3 from "../../components/Small3";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
import { useState,useEffect } from "react";
import { blur } from "d3";
import ShowImg from "../../components/ShowImg";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
const imgarr2 = [img1, img2, img3, img4, img5]



const ScheduledRoundGolf = () => {
          const [eventId,setEventId]=useState(0);
           
            useEffect(()=>{
                const savedId=sessionStorage.getItem('reserved');
        
           if(savedId){
            setEventId(parseInt(savedId)); 
           }
           
            },[]);
            const { id } = useParams(); 
            console.log(id,"id")
    
            const [eventData,setEventData]=useState([]);
            //fetching the event data and vibes whose event id=given id
     useEffect(()=>{
        fetch(`http://localhost:5000/event/round?id=${id}`)
        .then(response=>response.json())
        .then(data=>setEventData(data.round))
        .catch(error=>console.error('Error:',error));
     },[eventId]);
     console.log(eventData,"eeeeeeeeeee0000000")
     const[state,setState]=useState(false);
     const handleChild=(data)=>{
        setState(data);
     }
     const [review2,setReview2]=useState([]);
    // const [review2, setReview2] = useState([]);

useEffect(() => {
    if (id) {  // Ensure id is available before making the request
        fetch(`http://localhost:5000/reviews/getreview/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Reviews:", data);
            setReview2(data);
        })
        .catch(error => console.error("Error fetching reviews:", error));
    }
    else{console.log("no id")}
}, [id]); // ✅ Fix: Added id to the dependency array

     setTimeout(()=>{console.log(review2,"reviewwwww0000");},8000)
  
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
     
    return (
        <>
           {eventData.map((arr,index)=>(
             <div className="roundGolf">

             <div className="round-heading">
                 <div className="main-heading">
                     {arr.title}
                 </div>
                 <div className="down">
                   {parseInt(arr.occurrence_count)>0 && [...Array(arr.rating)].map((_, index) => (
                                                          <div className="star">
                                                          <FaStar />
                                                      </div>
                                                  ))}

                  {console.log(arr.occurrence_count,eventData,"5555555")}


                    {parseInt(arr.occurrence_count)>0 &&  <p className="paraa paraa2">{arr.rating}</p> }
                    {parseInt(arr.occurrence_count)>0 &&  <p className="paraa">.</p> }
                     <p className="paraa paraa2">{arr.occurrence_count} reviews</p>
                     <p className="paraa">.</p>
                     <p className="paraa">{arr.location}</p>

                 </div>


             </div>
             {state && (
             <div className="modal-overlay" style={{backdropFilter:blur}}>
                 <div className="showimg"> <ShowImg parentPass={handleChild}/></div>
                 </div>
          )}

             <div className="carasoul">
                 <div className="carasoul-left">
                     <div className="up">
                         <div className="photo1" style={{  backgroundImage: `url(${arr.img})`}}>

                         </div>
                         <div className="photo2" style={{  backgroundImage: `url(${arr.img})`}}>


                         </div>
                     </div>
                     <div className="down">
                         <div className="photo1" style={{  backgroundImage: `url(${arr.img})`}}>

                         </div>
                         <div className="photo2" style={{  backgroundImage: `url(${arr.img})`}}>


                         </div>
                     </div>

                 </div>
                 <div className="carasoul-right" style={{  backgroundImage: `url(${arr.img})`}}>

                 </div>

             </div>

             <div style={{ display: "flex", gap: "80px" }}>
                 <div className="about-event">

                     <div className="about-event-heading">
                         About the Event

                     </div>


                     <div className="helper-div">
                         <div className="about-left">
                             <div className="about-left1">
                                 <div className="left-icon">
                                     <GrAppsRounded style={{ fontSize: "20px", }} />
                                 </div>

                                 <div className="left-content">
                                     <div className="left-content-heading">
                                        {arr.title}
                                     </div>
                                     <div className="left-content-down">
                                         This is one of many famous event Catagory comes under Golf Catagory
                                     </div>

                                 </div>

                             </div>
                             <div className="about-left1">
                                 <div className="left-icon">
                                     <FaGrinHearts style={{ fontSize: "20px" }} />
                                 </div>

                                 <div className="left-content">
                                     <div className="left-content-heading">
                                         Great Location
                                     </div>
                                     <div className="left-content-down">
                                         Every guest has given 5 star location on this
                                     </div>

                                 </div>

                             </div>
                             <div className="about-left1">
                                 <div className="left-icon">
                                     <CiLocationOn style={{ fontSize: "20px" }} />
                                 </div>

                                 <div className="left-content">
                                     <div className="left-content-heading">
                                         Invigorating & uplifting experience

                                     </div>
                                     <div className="left-content-down">
                                         This event has a rating of 5.0 that make this event overwhelemed
                                     </div>

                                 </div>

                             </div>

                         </div>


                     </div>
                     <hr className='divider' />
                     <div className="para-div">
                         <div className="para-div-1">Lorem
                            {arr.description}

                         </div>
                         <div className="para-div-2">
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                         </div>
                     </div>
                     <hr className='divider' />

                     <div className="river-home">
                         <div className="river-home-heading">
                             Operator River Stone
                         </div>
                         <div className="river-home-star">
                             <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                             <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                             <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                             <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                             <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                             <span className="span">4.9</span>
                         </div>
                         <div className="river-home-para">
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.

                         </div>

                     </div>
                 </div>

                 <div className="left-section" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                     <Scheduled guests={arr.guests} from={arr.from_date} to={arr.to_date} />
                 </div>
             </div>
             <div className="review-cards">
                 {review2.map((arr,index)=>(
                    <div>
                       <ReviewCard cmmt={arr.comment} rating={arr.rating} user={arr.user_name} img={arr.avatar_url} />

                    </div>
                 ))
                }
              
             </div>
             <div className="arrow">
                 <PiArrowCircleLeftThin style={{ color: "grey", fontSize: "48px" }} />
                 <PiArrowCircleRightThin style={{ color: "black", fontSize: "48px" }} />


             </div>

             <div className="recommed-section">
                 <div className="recommed-section-heading">
                     See More Recommedation for you, Shane
                     </div>
                  
                     <div className="card-section">
                         {
                             favourite.map((arr, index) => (
                                <Small3 key={index} props={arr.img} catName={arr.category_name} category_id={arr.category_id} title={arr.title} saved_status={arr.saved_status} sendDatatoParent={handleDataFromChild}/>
                             ))
                         }
                     </div>
                

             </div>



         </div>
           ))}

        </>
    )
}

export default ScheduledRoundGolf;