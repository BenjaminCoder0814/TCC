'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Minus, 
  Plus,
  Truck,
  Shield,
  RotateCcw,
  Award,
  Check,
  X,
  Zap,
  MessageCircle
} from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { Product } from '@/lib/types'
import { useCartStore } from '@/stores/cartStore'
import { useFavoritesStore } from '@/stores/favoritesStore'
import ProductCard from '@/components/ProductCard'
import InfiniteCarousel from '@/components/InfiniteCarousel'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  
  const addToCart = useCartStore(state => state.addItem)
  const { products: favorites, addProduct: addToFavorites, removeProduct: removeFromFavorites, isProductFavorited } = useFavoritesStore()
  
  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === productId)
    if (foundProduct) {
      setProduct(foundProduct)
      if (foundProduct.variants?.length) {
        setSelectedVariant(foundProduct.variants[0])
      }
      if (foundProduct.sizes?.length) {
        setSelectedSize(foundProduct.sizes[0])
      }
    }
  }, [productId])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  const isFavorite = isProductFavorited(product.id)
  const relatedProducts = PRODUCTS.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 8)

  const handleAddToCart = () => {
    addToCart(product, quantity, {
      variant: selectedVariant,
      size: selectedSize
    })
  }

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/shop" className="hover:text-blue-600">Loja</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="capitalize"><a href={`/shop?category=${product.category}`} className="hover:text-blue-600">{product.category}</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NOVO
                  </span>
                )}
                {product.featured && (
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    DESTAQUE
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                      selectedImageIndex === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviewCount} avaliações)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Installments */}
              <p className="text-green-600 mb-6">
                ou 12x de R$ {(product.price / 12).toFixed(2)} sem juros
              </p>
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Sabor/Variação:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedVariant === variant
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tamanho:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantidade:</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="text-gray-600">
                  {product.stock > 0 ? `${product.stock} em estoque` : 'Fora de estoque'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                {product.stock > 0 ? 'Adicionar ao Carrinho' : 'Fora de Estoque'}
              </button>

              <div className="flex gap-4">
                <button
                  onClick={handleToggleFavorite}
                  className={`flex-1 border-2 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                    isFavorite
                      ? 'border-red-500 text-red-500 bg-red-50'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                  {isFavorite ? 'Favoritado' : 'Favoritar'}
                </button>

                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
                  <Share2 size={20} />
                  Compartilhar
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Truck size={16} />
                  <span className="text-sm">Frete grátis acima de R$ 99</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield size={16} />
                  <span className="text-sm">Compra segura</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <RotateCcw size={16} />
                  <span className="text-sm">7 dias para trocar</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Award size={16} />
                  <span className="text-sm">Produto original</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-16">
          <div className="border-b">
            <nav className="flex">
              {[
                { id: 'description', label: 'Descrição' },
                { id: 'specifications', label: 'Especificações' },
                { id: 'reviews', label: 'Avaliações' },
                { id: 'shipping', label: 'Frete' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                
                {product.benefits && product.benefits.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefícios:</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check size={16} className="text-green-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Informações do Produto:</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Marca:</dt>
                      <dd className="font-medium">{product.brand}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Categoria:</dt>
                      <dd className="font-medium capitalize">{product.category}</dd>
                    </div>
                    {product.variants && (
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Variações:</dt>
                        <dd className="font-medium">{product.variants.length} opções</dd>
                      </div>
                    )}
                    {product.sizes && (
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Tamanhos:</dt>
                        <dd className="font-medium">{product.sizes.join(', ')}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Avaliações ({product.reviewCount})
                  </h3>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Escrever Avaliação
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Mock reviews */}
                  {[
                    {
                      name: 'João Silva',
                      rating: 5,
                      date: '2024-01-15',
                      comment: 'Produto excelente! Chegou rapidinho e a qualidade é perfeita.'
                    },
                    {
                      name: 'Maria Santos',
                      rating: 4,
                      date: '2024-01-10',
                      comment: 'Muito bom produto, recomendo. Só achei o frete um pouco caro.'
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <span className="font-medium">{review.name}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações de Frete:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Frete Grátis:</h4>
                    <p className="text-gray-600 mb-4">Para compras acima de R$ 99,00</p>
                    
                    <h4 className="font-medium text-gray-900 mb-2">Prazo de Entrega:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Sul/Sudeste: 2-4 dias úteis</li>
                      <li>• Centro-Oeste/Nordeste: 3-6 dias úteis</li>
                      <li>• Norte: 5-8 dias úteis</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Política de Troca:</h4>
                    <p className="text-gray-600">7 dias para trocas e devoluções</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}