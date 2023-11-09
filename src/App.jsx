import logo from "./assets/logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "./assets/gr1.jpg";
import img2 from "./assets/gr2.jpg";
import { Autoplay } from "swiper/modules";
import Search from "./components/Search/Search";
import Products from "./components/Products/Products";
import Bottom from "./components/Bottom/Bottom";
export default function App() {
  return (
    <>
      <header>
        <div className="container">
          <img src={logo} alt="" />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="inner">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              autoPlay={true}
              spaceBetween={30}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
            </Swiper>
            <Search />
            <Products />
          </div>
        </div>

        <Bottom />
      </main>
    </>
  );
}
