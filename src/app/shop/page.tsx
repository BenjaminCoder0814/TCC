'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Filter, 
  Star, 
  Heart, 
  ShoppingCart,
  Grid3X3,
  List,
  SlidersHorizontal
} from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { useCartStore } from '@/store/useCartStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';

// Tipo do produto
type Product = {
  id: number;
  slug: string;
  nome: string;
  categoria: string;
  marca: string;
  preco: number;
  precoAntigo?: number;
  desconto?: number;
  promocao: boolean;
  descricao: string;
  imagem: string;
  sabores: string[];
  tamanhos: { peso: string; preco: number }[];
  pontos?: number;
  estoque: number;
  avaliacoes: number;
};

const categories = [
  { id: 'todos', name: 'Todos os Produtos', count: 0 },
  { id: 'suplementos', name: 'Suplementos', count: 0 },
  { id: 'equipamentos', name: 'Equipamentos', count: 0 },
  { id: 'roupas', name: 'Roupas', count: 0 },
  { id: 'tenis', name: 'Tênis', count: 0 },
  { id: 'acessorios', name: 'Acessórios', count: 0 }
];

const sortOptions = [
  { value: 'relevancia', label: 'Mais Relevantes' },
  { value: 'preco-menor', label: 'Menor Preço' },
  { value: 'preco-maior', label: 'Maior Preço' },
  { value: 'nome', label: 'Nome A-Z' },
  { value: 'avaliacao', label: 'Melhor Avaliação' },
  { value: 'lancamento', label: 'Lançamentos' }
];

export default function ShopPage() {
  const router = useRouter();
  const { user } = useAuthStore();
  const { addItem } = useCartStore();
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sortBy, setSortBy] = useState('relevancia');
  const [showPromotions, setShowPromotions] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Carregar produtos
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/data/produtos.json');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let filtered = [...products];

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por categoria
    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(product => product.categoria === selectedCategory);
    }

    // Filtro por promoções
    if (showPromotions) {
      filtered = filtered.filter(product => product.promocao);
    }

    // Filtro por faixa de preço
    filtered = filtered.filter(product => 
      product.preco >= priceRange[0] && product.preco <= priceRange[1]
    );

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'preco-menor':
          return a.preco - b.preco;
        case 'preco-maior':
          return b.preco - a.preco;
        case 'nome':
          return a.nome.localeCompare(b.nome);
        case 'avaliacao':
          return b.avaliacoes - a.avaliacoes;
        case 'lancamento':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, searchTerm, selectedCategory, sortBy, showPromotions, priceRange]);

  const handleAddToCart = (product: Product) => {
    if (!user) {
      alert('Faça login para adicionar ao carrinho');
      return;
    }

    addItem({
      productId: product.id.toString(),
      name: product.nome,
      price: product.preco,
      image: product.imagem,
      size: product.tamanhos[0]?.peso || '',
      flavor: product.sabores[0] || '',
      quantity: 1
    });
  };

  const handleToggleFavorite = (productId: number) => {
    if (!user) {
      alert('Faça login para favoritar produtos');
      return;
    }

    const isFavorited = favorites.includes(productId.toString());
    if (isFavorited) {
      removeFavorite(productId.toString());
    } else {
      addFavorite(productId.toString());
    }
  };

  // Paginação
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Contar produtos por categoria
  const categoriesWithCount = categories.map(cat => ({
    ...cat,
    count: cat.id === 'todos' 
      ? products.length 
      : products.filter(p => p.categoria === cat.id).length
  }));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Loja
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os melhores produtos para sua jornada fitness. 
            Suplementos, equipamentos, roupas e acessórios de qualidade premium.
          </p>
        </motion.div>

        <div className="flex gap-8">
          {/* Sidebar com Filtros */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-80 flex-shrink-0"
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h2>

              {/* Busca */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar produtos
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Digite para buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categorias */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Categorias
                </label>
                <div className="space-y-2">
                  {categoriesWithCount.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Faixa de Preço */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Faixa de Preço
                </label>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Promoções */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showPromotions}
                    onChange={(e) => setShowPromotions(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Apenas promoções</span>
                </label>
              </div>

              {/* Limpar Filtros */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('todos');
                  setShowPromotions(false);
                  setPriceRange([0, 500]);
                }}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          </motion.div>

          {/* Área Principal */}
          <div className="flex-1">
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    {filteredProducts.length} produtos encontrados
                  </span>
                  {selectedCategory !== 'todos' && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                      {categoriesWithCount.find(c => c.id === selectedCategory)?.name}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {/* Ordenação */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* Modo de Visualização */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lista de Produtos */}
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-gray-500">
                  Tente ajustar os filtros para encontrar mais produtos
                </p>
              </motion.div>
            ) : (
              <>
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {paginatedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      {/* Imagem */}
                      <div className={`relative ${
                        viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'
                      }`}>
                        <img
                          src={product.imagem}
                          alt={product.nome}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() => router.push(`/shop/${product.slug}`)}
                        />
                        
                        {/* Badges */}
                        <div className="absolute top-2 left-2 space-y-1">
                          {product.promocao && (
                            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
                              Promoção
                            </span>
                          )}
                          {product.desconto && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
                              -{product.desconto}%
                            </span>
                          )}
                        </div>

                        {/* Favoritar */}
                        <button
                          onClick={() => handleToggleFavorite(product.id)}
                          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                        >
                          <Heart 
                            className={`w-5 h-5 ${
                              favorites.includes(product.id.toString()) 
                                ? 'text-red-500 fill-current' 
                                : 'text-gray-400'
                            }`} 
                          />
                        </button>
                      </div>

                      {/* Conteúdo */}
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex-1">
                          <p className="text-sm text-blue-600 font-medium mb-1">
                            {product.marca}
                          </p>
                          <h3 
                            className="font-semibold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600"
                            onClick={() => router.push(`/shop/${product.slug}`)}
                          >
                            {product.nome}
                          </h3>
                          
                          {/* Avaliações */}
                          <div className="flex items-center gap-1 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">({product.avaliacoes})</span>
                          </div>

                          {/* Preços */}
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold text-gray-900">
                              R$ {product.preco.toFixed(2).replace('.', ',')}
                            </span>
                            {product.precoAntigo && (
                              <span className="text-sm text-gray-500 line-through">
                                R$ {product.precoAntigo.toFixed(2).replace('.', ',')}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Ações */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => router.push(`/shop/${product.slug}`)}
                            className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            Ver Detalhes
                          </button>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Paginação */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Anterior
                      </button>
                      
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 border rounded-lg ${
                              currentPage === page
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Próximo
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}