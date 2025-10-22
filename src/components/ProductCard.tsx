'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Eye, 
  Zap, 
  Award,
  TrendingUp,
  Timer,
  Shield
} from 'lucide-react'
import { Product } from '@/lib/types'
import { useCartStore } from '@/stores/cartStore'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useUIStore } from '@/stores/uiStore'

interface ProductCardProps {
  product: Product
  className?: string
  showQuickActions?: boolean
  variant?: 'default' | 'compact' | 'featured'
}

export default function ProductCard({ 
  product, 
  className = '',
  showQuickActions = true,
  variant = 'default'
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const addToCart = useCartStore(state => state.addItem)
  const { products: favoriteProducts, addProduct: addToFavorites, removeProduct: removeFromFavorites, isProductFavorited } = useFavoritesStore()
  const setQuickViewProduct = useUIStore(state => state.setQuickViewProduct)
  
  const isFavorite = isProductFavorited(product.id)
  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isFavorite) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuickViewProduct(product)
  }

  const getCardClasses = () => {
    const baseClasses = "group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    
    switch (variant) {
      case 'compact':
        return `${baseClasses} h-80`
      case 'featured':
        return `${baseClasses} h-96 bg-gradient-to-br from-blue-50 to-purple-50`
      default:
        return `${baseClasses} h-[420px]`
    }
  }

  return (
    <motion.div
      className={`${getCardClasses()} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      layout
    >
      <Link href={`/shop/product/${product.id}`} className="block h-full">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                NOVO
              </span>
            )}
            {product.featured && (
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                <Award size={12} />
                DESTAQUE
              </span>
            )}
            {product.trending && (
              <span className="bg-purple-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                <TrendingUp size={12} />
                TRENDING
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Quick Actions */}
          {showQuickActions && (
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute top-3 right-3 flex flex-col gap-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleToggleFavorite}
                    className={`p-2 rounded-full shadow-md transition-colors ${
                      isFavorite 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleQuickView}
                    className="p-2 bg-white text-gray-600 hover:text-blue-500 rounded-full shadow-md transition-colors"
                  >
                    <Eye size={16} />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Stock Status */}
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute bottom-3 left-3">
              <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                <Timer size={12} />
                Últimas {product.stock} unidades
              </span>
            </div>
          )}

          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                ESGOTADO
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <div className="mb-3">
            {/* Category */}
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              {product.category}
            </p>

            {/* Name */}
            <h3 className="font-semibold text-gray-900 line-clamp-2 leading-5 mb-2">
              {product.name}
            </h3>

            {/* Brand */}
            {product.brand && (
              <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                R$ {product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Installments */}
            <p className="text-xs text-green-600">
              em 12x de R$ {(product.price / 12).toFixed(2)} sem juros
            </p>
          </div>

          {/* Add to Cart Button */}
          <AnimatePresence>
            {isHovered && product.stock > 0 && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <ShoppingCart size={16} />
                Adicionar ao Carrinho
              </motion.button>
            )}
          </AnimatePresence>

          {/* Product Benefits */}
          {product.benefits && product.benefits.length > 0 && variant === 'featured' && (
            <div className="mt-3 flex flex-wrap gap-1">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1"
                >
                  <Zap size={10} />
                  {benefit}
                </span>
              ))}
            </div>
          )}

          {/* Free Shipping */}
          {product.freeShipping && (
            <div className="mt-2 flex items-center gap-1 text-green-600">
              <Shield size={14} />
              <span className="text-xs font-medium">Frete Grátis</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}