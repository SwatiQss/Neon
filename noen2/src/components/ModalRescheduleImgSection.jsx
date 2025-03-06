import "../styles/modalrescheduleImg.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import golf from "../img/golf.jpg";
import island from "../img/island.jpg";




const ModalRescheduleImg = ({state,setState}) => {
    const images=[
        golf,island
    ]

    images.map((img)=>(
        console.log(img)
    ))
    return (
        <>
            <div className="img-section">
            <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3000 }}
          loop={true}
          className="slider-container"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="slide" >
                <img src={`${img}`}></img>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

                <button>--</button>

                <div className="overlay-content">
                <div className="section-content-1">
                    Round of Golf
                </div>

                <div className="section-content-2">
                    Sindalah Island
                </div>
                <div className="section-content-3">
                    <div className="content3-one">
                    Jan 01, 2023 
                    </div>
                    <div className="content3-two">
                    7:00 AM | 11:00 AM | 3:00 PM
                    </div>
                  
                </div>
                <div className="section-content-4">
                    <button className="section-4-btn" onClick={()=>{setState(!state)}}>
Reschedule
                    </button>
                </div>

                </div>

            </div>

        </>
    )
}
export default ModalRescheduleImg;