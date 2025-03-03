import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionsTitle from "../../../Components/SectionTitles/SectionsTitle";

const Category = () => {
  return (
    <section>
      <SectionsTitle
        heading={"Order Online"}
        subHeading={"From 11.00am to 10.00pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper my-20'
      >
        <SwiperSlide>
          <img src={slide1} alt='slider1' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt='slider2' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt='slider3' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt='slider4' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt='slider5' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
