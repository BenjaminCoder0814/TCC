'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { PRODUCTS } from '@/data/products'
import { Product } from '@/lib/types'

interface InfiniteCarouselProps {
  title: string
  category?: string
  featured?: boolean
  limit?: number
  className?: string
}

export default function InfiniteCarousel({ 
  title, 
  category, 
  featured = false, 
  limit = 12,
  className = '' 
}: InfiniteCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  })
  
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Filter products based on props
  const filteredProducts = PRODUCTS
    .filter(product => {
      if (category && product.category !== category) return false
      if (featured && !product.featured) return false
      return true
    })
    .slice(0, limit)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  // Auto scroll
  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)

    return () => clearInterval(autoScroll)
  }, [emblaApi])

  if (filteredProducts.length === 0) {
    return null
  }

  return (
    <div className={`relative py-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Carousel */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] pr-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard 
                product={product} 
                className="h-full"
                showQuickActions={true}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {filteredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-blue-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="h-full w-full bg-gradient-to-r from-blue-100 to-purple-100"></div>
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  )
}

// Specialized carousel components
export function FeaturedProductsCarousel() {
  return (
    <InfiniteCarousel
      title="Produtos em Destaque"
      featured={true}
      limit={8}
      className="bg-gradient-to-r from-blue-50 to-purple-50"
    />
  )
}

export function SupplementsCarousel() {
  return (
    <InfiniteCarousel
      title="Suplementos Premium"
      category="suplementos"
      limit={10}
    />
  )
}

export function EquipmentCarousel() {
  return (
    <InfiniteCarousel
      title="Equipamentos Profissionais"
      category="equipamentos"
      limit={8}
    />
  )
}

export function ApparelCarousel() {
  return (
    <InfiniteCarousel
      title="Roupas Esportivas"
      category="roupas"
      limit={12}
    />
  )
}

export function AccessoriesCarousel() {
  return (
    <InfiniteCarousel
      title="Acessórios Fitness"
      category="acessorios"
      limit={10}
    />
  )
}