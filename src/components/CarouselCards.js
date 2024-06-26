import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import"./CarouselCards.module.scss"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Navigation, Pagination, Mousewheel, Keyboard, EffectFade, EffectCoverflow} from 'swiper/modules';

const CarouselCards=()=>{
    return(
        <div className={"cards-wrapper "}>
            <h2 className={"h2-title"}>Languages </h2>
            <Swiper
                // effect={"fade"}
                navigation={true}
                pagination={{clickable:true}}
                creativeEffect={"feSpecularLighting"}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination,Navigation,Pagination]}
                className="mySwiper cards-swiper"
            >
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-DW_HRN0h9p0HU7tkiKE4PiuryqmVH6X9w&s" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ds8kFGAmoDYTtSKil8AkhEChbxMhjZ7Z8A&s" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eUzBm4h2DowyzjQjie6JtLaKLr9K0DStuA&s" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://assets.website-files.com/60da18e0504ac34bc54c5afa/62ec007bc60a5c24d76050c2_Big%20Qlo03JjedHjQkokQgptsWRWJUHOsc6rtWeqgVO0E.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://logowik.com/content/uploads/images/java1655.logowik.com.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://logowik.com/content/uploads/images/nodejs.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default CarouselCards