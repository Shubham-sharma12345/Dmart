import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    id: 1,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1aug24-crsl-kitchenmela.jpg&w=1080&q=75",
  },
  {
    id: 2,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd%2Fbanners%2Fhmpg%2F1may24-crsl-beautystore.jpg&w=1080&q=75",
  },
  {
    id: 3,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd-mobile%2Fbanners%2Fhmpg%2F10jan25-crsl-gujrat-ds.jpg&w=1200&q=75",
  },
  {
    id: 4,
    link: "https://www.dmart.in/_next/image?url=https%3A%2F%2Fcdn.dmart.in%2Fimages%2Frwd-mobile%2Fbanners%2Fhmpg%2F1dec24-crsl-dg-guj.jpg&w=1200&q=75",
  },
];

const ImageCrouser = () => {
  return (
    <div className=" mt-0 pt-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-xl shadow-lg"
      >
        {images.map(({ id, link }) => (
          <SwiperSlide key={id}>
            <img
              src={link}
              alt={`Slide ${id}`}
              className="w-screen  sm:h-[40vh] object-center  rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCrouser;
