import "../../styles/modalrescheduleImg.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import golf from "../../img/golf.jpg";
import island from "../../img/island.jpg";
import music from "../../img/music.jpg"
import music2 from "../../img/music.png"
import music3 from "../../img/music3.jpg"
import { useNavigate } from "react-router-dom";
//import swim from "../img/swim.jpg"
import { Navigation } from "swiper/modules"; // Import Navigation module
import { useEffect, useState } from "react";
import { filter } from "d3";




const ModalRescheduleImg2 = () => {
  const time="07:00 AM|12:00 AM|05:00 AM"

const [data,setData]=useState([]);
const[date,setDate]=useState(null);
 useEffect(()=>{
  const events=sessionStorage.getItem("events");
 const eventData=JSON.parse(events);
 const filter=eventData.filter((arr) => {
  const eventDate = new Date(arr.from_date);
  const formattedDate = eventDate.toISOString().split('T')[0]; 
  setDate(formattedDate);
  return formattedDate === "2025-03-31"; 
})
 setData(filter);
 
 },[]);
 
 console.log(data, "00000000");



    const navigate=useNavigate();
    return (
        <>
            <div className="img-section">
            <Swiper
          modules={[Navigation]} 
          navigation={true} 
          loop={true}
          grabCursor={true} 
          simulateTouch={true} 
          className="slider-container"
        >
        
      

               {
                data.map((card,index)=>(
                  <SwiperSlide key={index}>
                    <div className="slide">
                    <img src={`${card.img}`} className="img"></img>
                    <div className="overlay-content">
                <div className="section-content-1">
                    {card.title}
                </div>

                <div className="section-content-2">
                  {card.location}
                </div>
                <div className="section-content-3">
                    <div className="content3-one">
                    {date}
                    </div>
                    <div className="content3-two">
                   {time}
                    </div>
                  
                </div>
                <div className="section-content-4">
                    <button className="section-4-btn" onClick={()=>navigate(`/roundgolf/${card.id}`)}>
Yes I'm in
                    </button>
                </div>

                </div>

                    </div>

                  </SwiperSlide>
                ))
               }
                 </Swiper>

               

            </div>
            

        </>
    )
}
export default ModalRescheduleImg2;