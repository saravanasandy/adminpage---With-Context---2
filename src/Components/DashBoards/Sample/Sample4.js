import React from "react";
import  './Sample4.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const Sample4 = () => {


  return (
  
  <div className="App">
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/661/371/png-transparent-core-abdominal-exercise-physical-exercise-exercise-equipment-physical-fitness-fit-miscellaneous-physical-fitness-sport-thumbnail.png" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/91/921/png-transparent-elliptical-trainers-exercise-equipment-physical-fitness-exercise-bikes-bicycle-bicycle-frame-indoor-cycling-racing-bicycle-thumbnail.png" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/811/891/png-transparent-cybex-international-treadmill-exercise-equipment-elliptical-trainers-fitness-centre-fitness-treadmill-physical-fitness-united-states-sports-equipment-thumbnail.png" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/595/412/png-transparent-man-lifting-up-a-barbell-smith-machine-fitness-centre-spotting-exercise-equipment-physical-exercise-gym-physical-fitness-arm-sports-thumbnail.png" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/104/828/png-transparent-leg-press-squat-exercise-equipment-leg-extension-others-miscellaneous-physical-fitness-gym-thumbnail.png" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/145/124/png-transparent-bowflex-treadmill-exercise-equipment-exercise-bikes-others-miscellaneous-physical-fitness-fitness-thumbnail.png" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/913/795/png-transparent-exercise-balls-physical-exercise-leg-curl-exercise-equipment-core-stability-excersice-miscellaneous-physical-fitness-arm-thumbnail.png" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/941/434/png-transparent-treadmill-exercise-equipment-fitness-centre-endurance-others-physical-fitness-sports-equipment-arm-thumbnail.png" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w7.pngwing.com/pngs/764/861/png-transparent-suspension-training-exercise-equipment-strength-training-exercise-bands-workout-anytime-physical-fitness-suspension-arm-thumbnail.png" />

        </SwiperSlide>
      </Swiper>
     
    
  </div>




          
   
  );
};

export default Sample4;
