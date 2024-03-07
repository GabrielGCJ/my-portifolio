import { SliderComponentContainer, SliderAndTextComponent, SliderComponentGlobalContainer } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import 'swiper/less/navigation';
// import "swiper/swiper-bundle.min.css"
export const SliderComponent = () => {
  return (
    <SliderComponentGlobalContainer>
      <h1>Projetos</h1>
    <SliderAndTextComponent>
    <SliderComponentContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://github.com/GabrielGCJ/d-02-react-js-rocketseat-coffee-delivery/assets/91347602/deaa5363-4397-4a03-82e2-66b8974336d6"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://github.com/GabrielGCJ/ignite-02-timer/assets/91347602/7d171ff9-87ba-4ba9-8d56-e039498c5a89"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://github.com/GabrielGCJ/desafio-01-react-js-rocketseat/assets/91347602/96cad20c-8c79-4fb0-b372-9a8b0031e496"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://github.com/GabrielGCJ/d-03-react-js-ts-rocketseat-git-hub-blog/assets/91347602/292b40e4-667a-4958-b00d-d5da2c697a96"
            alt=""
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            src="https://github.com/GabrielGCJ/d-03-react-js-ts-rocketseat-git-hub-blog/assets/91347602/292b40e4-667a-4958-b00d-d5da2c697a96"
            alt=""
          />
        </SwiperSlide> */}
        {/* ... */}
      </Swiper>
      {/* //{" "} */}
    </SliderComponentContainer>
            </SliderAndTextComponent>
            </SliderComponentGlobalContainer>
  );
};
