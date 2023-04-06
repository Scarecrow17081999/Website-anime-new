// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarouselMultipleCards.module.css";

const cards = [
  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",
  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",

  "https://thumbs.dreamstime.com/b/square-sized-banner-publishing-social-network-multicolored-textured-paper-square-sized-banner-publishing-social-154357246.jpg",
];

export default function CarouselMultipleCards() {
  return (
    <>
      <Swiper
        style={{ width: "80%" }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {cards.map((e) => {
          return (
            <SwiperSlide>
              <img src={e} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
