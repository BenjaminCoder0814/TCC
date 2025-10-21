'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Professional } from '@/types';
import ProfessionalCard from './ProfessionalCard';

interface ProfessionalCarouselProps {
  professionals: Professional[];
}

export default function ProfessionalCarousel({ professionals }: ProfessionalCarouselProps) {
  if (!professionals || professionals.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhum profissional encontrado</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="pb-12"
      >
        {professionals.map((professional) => (
          <SwiperSlide key={professional.id}>
            <ProfessionalCard professional={professional} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}