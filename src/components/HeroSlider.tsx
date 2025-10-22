'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  ctaAction: () => void
  badge?: string
  gradient: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Maximize Seus Resultados",
    subtitle: "Treinos Personalizados com IA",
    description: "Sistema inteligente que adapta seus treinos baseado no seu nível muscular e objetivos",
    image: "/images/hero/hero1.jpg",
    cta: "Faça Sua Avaliação",
    ctaAction: () => window.location.href = '/assessment',
    badge: "NOVO",
    gradient: "from-blue-600/90 to-purple-600/90"
  },
  {
    id: 2,
    title: "Profissionais Elite",
    subtitle: "Treinadores Certificados",
    description: "Conecte-se com os melhores profissionais da sua região e alcance seus objetivos mais rápido",
    image: "/images/hero/hero2.jpg",
    cta: "Encontrar Treinador",
    ctaAction: () => window.location.href = '/professionals',
    gradient: "from-green-600/90 to-teal-600/90"
  },
  {
    id: 3,
    title: "Academias Premium",
    subtitle: "Parceiros Verificados",
    description: "Descubra academias de qualidade com equipamentos de ponta e ambiente motivador",
    image: "/images/hero/hero3.jpg",
    cta: "Ver Academias",
    ctaAction: () => window.location.href = '/gyms',
    gradient: "from-orange-600/90 to-red-600/90"
  },
  {
    id: 4,
    title: "Loja Especializada",
    subtitle: "Suplementos & Equipamentos",
    description: "Produtos selecionados pelos melhores profissionais para maximizar seus resultados",
    image: "/images/hero/hero4.jpg",
    cta: "Explorar Loja",
    ctaAction: () => window.location.href = '/shop',
    badge: "OFERTA",
    gradient: "from-purple-600/90 to-pink-600/90"
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlideData.image}
            alt={currentSlideData.title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient}`} />
          
          {/* Particle Effect */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {currentSlideData.badge && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold mb-4"
                  >
                    {currentSlideData.badge}
                  </motion.span>
                )}
                
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  {currentSlideData.title}
                </h1>
                
                <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-medium">
                  {currentSlideData.subtitle}
                </h2>
                
                <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
                  {currentSlideData.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={currentSlideData.ctaAction}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {currentSlideData.cta}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-6 right-6 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        {isPlaying ? (
          <div className="w-4 h-4 flex gap-1">
            <div className="w-1 h-full bg-white"></div>
            <div className="w-1 h-full bg-white"></div>
          </div>
        ) : (
          <Play size={16} />
        )}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          key={currentSlide}
        />
      </div>
    </div>
  )
}