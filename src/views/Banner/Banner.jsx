import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Banner.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";

const Banner = () => {
  return (
    <div>
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <img className="w-full" src={banner1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img className="w-full" src={banner2} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
