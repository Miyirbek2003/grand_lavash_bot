import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/gr1.jpg";
import img2 from "../../assets/gr2.jpg";
import Bottom from "../../components/Bottom/Bottom";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Search from "../../components/Search/Search";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setChatId } from "../../store/sumSlice";
export default function Main() {
  const [isLoading, setIsLoading] = React.useState(false);
<<<<<<< HEAD
=======
  const telegram = window.Telegram.WebApp;
  const dispatch = useDispatch();
  const telegramData = telegram?.initDataUnsafe;
  const chat_id = telegramData?.user?.id;
  React.useEffect(() => {
    dispatch(setChatId(chat_id));
  }, []);
  telegram.expand();

  const { chat_id: chat_idd } = useSelector((state) => state.sumSlice);
>>>>>>> ed8cab1ff4c520abccc8e99a0521a7d9c493de56

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Header />
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
            {chat_idd}
            <Products />
          </div>
        </div>
      </main>
      <Bottom />
    </>
  );
}
