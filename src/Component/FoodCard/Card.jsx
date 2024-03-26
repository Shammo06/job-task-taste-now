/* eslint-disable react/prop-types */
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import  { FreeMode, Autoplay, Pagination} from "swiper/modules";
import CardItem from "./CardItem";


const Card = ({ data }) => {
    const renderBullet = (index, className) => {
        if (index === 0) {
          return '<span class="' + className + '"> &lt; </span>';
        } else if (index === 1) {
          return '<span class="' + className + '"> . </span>';
        } else if (index === 2) {
          return '<span class="' + className + '"> . </span>';
        } else if (index === 3) {
          return '<span class="' + className + '"> . </span>';
        }else if (index === 4) {
          return '<span class="' + className + '"> &gt; </span>';
        }
      };
    return (
        <div>
            <Swiper
            spaceBetween={10}
            freeMode={true}
            loop={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            
            modules={[FreeMode, Autoplay, Pagination]}
            className="mySwiper  "
            pagination= {{
                clickable : true,
                renderBullet: renderBullet,
            }}
           
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
                {
                  data.map(item => (
                    <SwiperSlide className='slider active' key={item.id}>
                      <CardItem data={item} />
                    </SwiperSlide>
                  ))
                }
                

       
            </Swiper>
        </div>
    );
};

export default Card;