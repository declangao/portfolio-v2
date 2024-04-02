import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function VideoCarousel() {
  const videos = [
    {
      url: 'https://tecdn.b-cdn.net/img/video/Tropical.mp4',
      mime: 'video/mp4',
      title: 'Video Title',
      description: 'Video description',
    },
    {
      url: 'https://tecdn.b-cdn.net/img/video/forest.mp4',
      mime: 'video/mp4',
      title: 'Video Title',
      description: 'Video description',
    },
  ];

  return (
    <div className="w-full mx-auto my-4 cursor-pointer">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <video className="w-full" autoPlay loop muted>
              <source src={video.url} type={video.mime} />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{video.title}</h5>
              <p>{video.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
