'use client';

import { useState } from 'react';
import type { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleAddToCart = async () => {
    setIsLoading(true);
    
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addToCart(product);
    setIsLoading(false);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {!product.inStock && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Esgotado
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              -{discountPercentage}%
            </span>
          )}
          {product.featured && (
            <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
              Destaque
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
        >
          <i className={`fas fa-heart ${isFavorite(product.id) ? 'text-red-500' : 'text-gray-400'}`}></i>
        </button>

        {/* Quick View */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <i className="fas fa-eye mr-2"></i>
            Ver Detalhes
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <span className="text-xs text-primary-500 font-medium uppercase tracking-wide">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="font-semibold text-gray-800 mt-1 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fas fa-star ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              ></i>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-gray-800">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isLoading}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              product.inStock
                ? isInCart(product.id)
                  ? 'bg-green-500 text-white'
                  : 'bg-primary-500 text-white hover:bg-primary-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLoading ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : isInCart(product.id) ? (
              <>
                <i className="fas fa-check mr-2"></i>
                Adicionado
              </>
            ) : product.inStock ? (
              <>
                <i className="fas fa-shopping-cart mr-2"></i>
                Comprar
              </>
            ) : (
              'Indisponível'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}