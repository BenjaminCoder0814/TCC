'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/data/products'
import { Product } from '@/lib/types'
import { searchProducts } from '@/lib/search'

const categories = [
  { value: 'all', label: 'Todas as Categorias', count: PRODUCTS.length },
  { value: 'supplements', label: 'Suplementos', count: PRODUCTS.filter(p => p.category === 'suplementos').length },
  { value: 'equipment', label: 'Equipamentos', count: PRODUCTS.filter(p => p.category === 'equipamentos').length },
  { value: 'apparel', label: 'Roupas', count: PRODUCTS.filter(p => p.category === 'roupas').length },
  { value: 'accessories', label: 'Acessórios', count: PRODUCTS.filter(p => p.category === 'acessorios').length }
]

const brands = [
  'Optimum Nutrition', 'Integralmedica', 'Growth', 'Max Titanium', 
  'Universal', 'Dymatize', 'BSN', 'MuscleTech', 'ProCorp'
]

const priceRanges = [
  { min: 0, max: 50, label: 'Até R$ 50' },
  { min: 50, max: 100, label: 'R$ 50 - R$ 100' },
  { min: 100, max: 200, label: 'R$ 100 - R$ 200' },
  { min: 200, max: 500, label: 'R$ 200 - R$ 500' },
  { min: 500, max: Infinity, label: 'Acima de R$ 500' }
]

const sortOptions = [
  { value: 'relevance', label: 'Relevância' },
  { value: 'price_asc', label: 'Menor Preço' },
  { value: 'price_desc', label: 'Maior Preço' },
  { value: 'rating', label: 'Melhor Avaliação' },
  { value: 'newest', label: 'Mais Recentes' },
  { value: 'popularity', label: 'Mais Populares' }
]

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<{min: number, max: number} | null>(null)
  const [sortBy, setSortBy] = useState('relevance')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [filtersExpanded, setFiltersExpanded] = useState({
    category: true,
    brand: false,
    price: false,
    rating: false
  })

  useEffect(() => {
    let filtered = [...PRODUCTS]

    // Search filter
    if (searchQuery) {
      filtered = searchProducts(filtered, searchQuery)
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        product.brand && selectedBrands.includes(product.brand)
      )
    }

    // Price range filter
    if (selectedPriceRange) {
      filtered = filtered.filter(product => 
        product.price >= selectedPriceRange.min && 
        product.price <= selectedPriceRange.max
      )
    }

    // Sort
    switch (sortBy) {
      case 'price_asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case 'popularity':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
    }

    setFilteredProducts(filtered)
  }, [searchQuery, selectedCategory, selectedBrands, selectedPriceRange, sortBy])

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedBrands([])
    setSelectedPriceRange(null)
    setSortBy('relevance')
  }

  const toggleFilterSection = (section: keyof typeof filtersExpanded) => {
    setFiltersExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Loja Muscle Levels</h1>
              <p className="text-gray-600">Encontre os melhores produtos para seus treinos</p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 bg-white rounded-lg shadow-sm p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Limpar tudo
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <button
                onClick={() => toggleFilterSection('category')}
                className="flex items-center justify-between w-full mb-3"
              >
                <h3 className="font-semibold text-gray-900">Categoria</h3>
                {filtersExpanded.category ? (
                  <ChevronUp size={20} className="text-gray-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              
              {filtersExpanded.category && (
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-3"
                      />
                      <span className="text-gray-700">{category.label}</span>
                      <span className="ml-auto text-gray-500 text-sm">({category.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <button
                onClick={() => toggleFilterSection('brand')}
                className="flex items-center justify-between w-full mb-3"
              >
                <h3 className="font-semibold text-gray-900">Marca</h3>
                {filtersExpanded.brand ? (
                  <ChevronUp size={20} className="text-gray-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              
              {filtersExpanded.brand && (
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="mr-3"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <button
                onClick={() => toggleFilterSection('price')}
                className="flex items-center justify-between w-full mb-3"
              >
                <h3 className="font-semibold text-gray-900">Preço</h3>
                {filtersExpanded.price ? (
                  <ChevronUp size={20} className="text-gray-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              
              {filtersExpanded.price && (
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <label key={index} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPriceRange?.min === range.min && selectedPriceRange?.max === range.max}
                        onChange={() => setSelectedPriceRange(range)}
                        className="mr-3"
                      />
                      <span className="text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <button
                onClick={() => toggleFilterSection('rating')}
                className="flex items-center justify-between w-full mb-3"
              >
                <h3 className="font-semibold text-gray-900">Avaliação</h3>
                {filtersExpanded.rating ? (
                  <ChevronUp size={20} className="text-gray-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              
              {filtersExpanded.rating && (
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-3" />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        ))}
                        <span className="ml-2 text-gray-700">& acima</span>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Filter size={16} />
                    Filtros
                  </button>
                  
                  <span className="text-gray-600">
                    {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'all' || selectedBrands.length > 0 || selectedPriceRange || searchQuery) && (
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium text-gray-600">Filtros ativos:</span>
                  
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Busca: "{searchQuery}"
                      <button onClick={() => setSearchQuery('')}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {categories.find(c => c.value === selectedCategory)?.label}
                      <button onClick={() => setSelectedCategory('all')}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  
                  {selectedBrands.map(brand => (
                    <span key={brand} className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {brand}
                      <button onClick={() => toggleBrand(brand)}>
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                  
                  {selectedPriceRange && (
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {priceRanges.find(r => r.min === selectedPriceRange.min && r.max === selectedPriceRange.max)?.label}
                      <button onClick={() => setSelectedPriceRange(null)}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1'
                }`}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard 
                      product={product} 
                      variant={viewMode === 'list' ? 'compact' : 'default'}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-gray-600 mb-6">
                  Tente ajustar seus filtros ou termo de busca
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Limpar filtros
                </button>
              </div>
            )}

            {/* Load More Button (if needed) */}
            {filteredProducts.length > 20 && (
              <div className="text-center mt-8">
                <button className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  Carregar mais produtos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}