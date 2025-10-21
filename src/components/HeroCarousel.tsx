'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const heroSlides = [
  {
    id: 1,
    title: 'Transforme seu Corpo',
    subtitle: 'Sua Jornada Fitness Começa Aqui',
    description: 'Descubra produtos premium, conecte-se com profissionais qualificados e alcance seus objetivos fitness.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
    buttonText: 'Começar Agora',
    buttonLink: '/triagem'
  },
  {
    id: 2,
    title: 'Produtos Premium',
    subtitle: 'Qualidade que Faz a Diferença',
    description: 'Suplementos, equipamentos e acessórios das melhores marcas para potencializar seus resultados.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop',
    buttonText: 'Ver Produtos',
    buttonLink: '/loja'
  },
  {
    id: 3,
    title: 'Profissionais Qualificados',
    subtitle: 'Orientação Especializada',
    description: 'Conecte-se com personal trainers e nutricionistas certificados para alcançar seus objetivos.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
    buttonText: 'Encontrar Profissional',
    buttonLink: '/profissionais'
  }
];

export default function HeroCarousel() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-orange-200 mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                      {slide.description}
                    </p>
                    <a
                      href={slide.buttonLink}
                      className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {slide.buttonText}
                      <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}