
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import "./Carousel.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/react-slider/React%20Image%20Slider%20%281%29.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/react-slider/React%20Image%20Slider%20%281%29.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/react-slider/React%20Image%20Slider%20%281%29.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
