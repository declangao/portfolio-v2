'use client';

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={50}
      loop
      className="w-full h-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image} className="">
          <Image
            className="w-full h-full object-contain object-center"
            src={image}
            alt={`Image slide ${index + 1}`}
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
