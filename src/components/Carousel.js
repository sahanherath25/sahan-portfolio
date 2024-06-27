import React, {useEffect} from "react";
import "./Carousel.module.scss"
// import Swiper from "swiper";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Mousewheel, Keyboard,EffectFade } from 'swiper/modules';

const Carousel=()=>{

    return(

        <Swiper
            effect={"fade"}
            navigation={true}
            pagination={{clickable:true}}
            mousewheel={true}
            loop={true}
            centeredSlides={true}
            spaceBetween={30}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard,EffectFade]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
           </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
           </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            </SwiperSlide>

        </Swiper>



    )
}

export default Carousel