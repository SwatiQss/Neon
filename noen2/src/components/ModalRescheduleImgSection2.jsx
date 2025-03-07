import "../styles/modalrescheduleImg.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import golf from "../img/golf.jpg";
import island from "../img/island.jpg";
import swim from "../img/swim.jpg"
import { Navigation } from "swiper/modules"; // Import Navigation module




const ModalRescheduleImg2 = () => {
    const images=[
        golf,island
    ]
const cards=[
  {
  img:golf,
  title:"Round of Golf",
  location:"Sindalh city",
  date:"Jan 01, 2025",
  time:"07:00 AM|12:00 AM|05:00 AM"
},
{
  img:island,
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
                <div className="section-content-1">
                    {card.title}
                </div>

                <div className="section-content-2">
                  {card.location}
                </div>
                <div className="section-content-3">
                    <div className="content3-one">
                    {card.date}
                    </div>
                    <div className="content3-two">
                   {card.time}
                    </div>
                  
                </div>
                <div className="section-content-4">
                    <button className="section-4-btn">
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