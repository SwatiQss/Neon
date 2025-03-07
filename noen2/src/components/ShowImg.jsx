import "../styles/modalrescheduleImg.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import golf from "../img/golf.jpg";
import island from "../img/island.jpg";
import swim from "../img/swim.jpg"
import swim1 from "../img/swim2.jpg"
import swim2 from "../img/swim3.jpg"
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules"; // Import Navigation module
import { Link } from "react-router-dom";



const ShowImg = ({parentPass}) => {
    const images=[
        golf,island
    ]
const cards=[
  {
  img:swim1,
  title:"Round of Golf",
  location:"Sindalh city",
  date:"Jan 01, 2025",
  time:"07:00 AM|12:00 AM|05:00 AM"
},
{
  img:swim2,
  title:"Island Surfing",
  location:"Sindalh City",
  date:"Jan 02, 2025",
  time:"07:00 AM|12:00 AM|05:00 AM"
},{
  img:swim,
  title:"Swimming",
  location:"Sindalh City",
  date:"Jan 03, 2025",
  time:"07:00 AM|12:00 AM|05:00 AM"
}
]
    images.map((img)=>(
        console.log(img)
    ))
     
    const [message,setMessage]=useState(true);

    const handleSubmit=()=>{
      setMessage(false);
      parentPass(message);
    }
   
    return (
        <>
            <div className="img-section">
            <Swiper
          modules={[Navigation]} // Use Navigation instead of Autoplay
          navigation={true} // Enables next/prev arrows
          loop={true}
          grabCursor={true} // Makes cursor look like it's draggable
          simulateTouch={true} 
          className="slider-container"
        >
        
      

               {
                cards.map((card,index)=>(
                  <SwiperSlide key={index}>
                    <div className="slide">
                     
                    <img src={`${card.img}`} className="img"></img>
                    <div className="overlay-content">
             

               
                <div className="section-content-4" onClick={handleSubmit}>
                <button className="section-8-btn"  >
                        X
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
export default ShowImg;