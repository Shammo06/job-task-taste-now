import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay} from "swiper/modules";


const Card = () => {
    return (
        <div>
            <Swiper
                showThumbs={true}
                spaceBetween={10}
                freeMode={true}
                loop={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                
                modules={[FreeMode, Autoplay]}
                className="mySwiper  "
                breakpoints={{
                    // For small device
                    640: {
                    slidesPerView: 1,
                    },
                    // For medium device
                    768: {
                    slidesPerView: 2,
                    },
                    // For larger screens 
                    1024: {
                    slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                <h1>hello</h1>
                </SwiperSlide>

                <SwiperSlide>
                <h1>hello2</h1>
                </SwiperSlide>

                <SwiperSlide>
                <h2>hello3</h2>
                </SwiperSlide>

                <SwiperSlide>
                <h1>hello</h1>
                </SwiperSlide>

                <SwiperSlide>
                <h1>hello2</h1>
                </SwiperSlide>

                <SwiperSlide>
                <h2>hello3</h2>
                </SwiperSlide>

       
            </Swiper>
        </div>
    );
};

export default Card;