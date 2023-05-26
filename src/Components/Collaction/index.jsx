import React from "react";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
// import SwiperCore, {Autoplay} from 'swiper';
// SwiperCore.use([Autoplay]);
import "swiper/css";
import './style.css';


import earorange from '../../assets/images/earorange.png';
import earblue from '../../assets/images/earblue.png';
import earred from '../../assets/images/earred.png';



const Collaction = () => {
    return (
        <section className="collaction">
            <div className="container">
                    <Title text={"Our Latest  colour collection 2021"} />
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{delay:1000}}
                        navigation={true}
                        modules={[ Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="swiper-slide"><img src={earorange} alt="orange" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide blue"><img src={earblue} alt="blue" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={earred} alt="red" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={earblue} alt="blue" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={earorange} alt="orange" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={earred} alt="red" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={earorange} alt="orange" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={earred} alt="red" /></SwiperSlide>
                        <SwiperSlide className="swiper-slide"><img src={earblue} alt="blue" /></SwiperSlide>
                    </Swiper>
                </div>
        </section>
    )
}
export default Collaction;