'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Plus,
  Minus,
  Share2,
  Check,
  MapPin
} from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { useCartStore } from '@/store/useCartStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';

// Tipos
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

const mockRelatedProducts = [
  {
    id: 101,
    nome: "BCAA Premium 240 Cáps",
    preco: 69.90,
    precoAntigo: 89.90,
    imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
    rating: 4.6
  },
  {
    id: 102,
    nome: "Glutamina 300g",
    preco: 79.90,
    imagem: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=200&h=200&fit=crop",
    rating: 4.4
  },
  {
    id: 103,
    nome: "Albumina 500g",
    preco: 49.90,
    precoAntigo: 58.90,
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
    rating: 4.5
  },
  {
    id: 104,
    nome: "Vitamina D3 60 Cáps",
    preco: 39.90,
    imagem: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
    rating: 4.7
  },
  {
    id: 105,
    nome: "Ômega 3 120 Cáps",
    preco: 89.90,
    imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
    rating: 4.8
  }
];

const mockReviews = [
  {
    id: 1,
    user: "João Silva",
    rating: 5,
    comment: "Excelente produto! Resultados visíveis já na primeira semana. Recomendo muito!",
    date: "2025-10-15",
    verified: true
  },
  {
    id: 2,
    user: "Ana Costa",
    rating: 4,
    comment: "Boa qualidade, sabor agradável. Chegou rápido e bem embalado.",
    date: "2025-10-10",
    verified: true
  },
  {
    id: 3,
    user: "Carlos Oliveira",
    rating: 5,
    comment: "Melhor custo-benefício do mercado. Já é minha terceira compra!",
    date: "2025-10-08",
    verified: false
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuthStore();
  const { addItem } = useCartStore();
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [shippingData, setShippingData] = useState<any>(null);
  const [loadingShipping, setLoadingShipping] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Carregar produto
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch('/data/produtos.json');
        const products = await response.json();
        const foundProduct = products.find((p: Product) => p.slug === params.slug);
        
        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedSize(foundProduct.tamanhos[0]?.peso || '');
          setSelectedFlavor(foundProduct.sabores[0] || '');
        } else {
          router.push('/shop');
        }
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
        router.push('/shop');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      loadProduct();
    }
  }, [params.slug, router]);

  const handleAddToCart = () => {
    if (!user) {
      alert('Faça login para adicionar ao carrinho');
      return;
    }

    if (!product) return;

    addItem({
      productId: product.id.toString(),
      name: product.nome,
      price: getSelectedPrice(),
      image: product.imagem,
      size: selectedSize,
      flavor: selectedFlavor,
      quantity
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleToggleFavorite = () => {
    if (!user) {
      alert('Faça login para favoritar produtos');
      return;
    }

    if (!product) return;

    const isFavorited = favorites.includes(product.id.toString());
    if (isFavorited) {
      removeFavorite(product.id.toString());
    } else {
      addFavorite(product.id.toString());
    }
  };

  const calculateShipping = async () => {
    if (!cep) return;
    
    setLoadingShipping(true);
    
    // Simulação de cálculo de frete
    setTimeout(() => {
      const mockShipping = {
        sedex: { price: 14.90, days: '2-3 dias úteis' },
        pac: { price: 9.90, days: '5-7 dias úteis' },
        express: { price: 24.90, days: '1-2 dias úteis' }
      };
      setShippingData(mockShipping);
      setLoadingShipping(false);
    }, 1500);
  };

  const getSelectedPrice = () => {
    if (!product) return 0;
    const selectedSizeObj = product.tamanhos.find(t => t.peso === selectedSize);
    return selectedSizeObj?.preco || product.preco;
  };

  const isFavorited = product ? favorites.includes(product.id.toString()) : false;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Produto não encontrado</h2>
          <button
            onClick={() => router.push('/shop')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Voltar para a loja
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-8">
          <span 
            onClick={() => router.push('/')}
            className="hover:text-blue-600 cursor-pointer"
          >
            Home
          </span>
          <span className="mx-2">/</span>
          <span 
            onClick={() => router.push('/shop')}
            className="hover:text-blue-600 cursor-pointer"
          >
            Loja
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.nome}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Imagem do Produto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <img
                src={product.imagem}
                alt={product.nome}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badges */}
            <div className="flex gap-2">
              {product.promocao && (
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full">
                  Promoção
                </span>
              )}
              {product.desconto && (
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                  {product.desconto}% OFF
                </span>
              )}
              {product.pontos && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-sm font-medium rounded-full">
                  +{product.pontos} pontos
                </span>
              )}
            </div>
          </motion.div>

          {/* Informações do Produto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">
                {product.marca}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.nome}
              </h1>
              
              {/* Avaliações */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  4.6 ({product.avaliacoes} avaliações)
                </span>
              </div>

              {/* Preços */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  R$ {getSelectedPrice().toFixed(2).replace('.', ',')}
                </span>
                {product.precoAntigo && (
                  <span className="text-xl text-gray-500 line-through">
                    R$ {product.precoAntigo.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
            </div>

            {/* Seleções */}
            <div className="space-y-4">
              {/* Tamanhos */}
              {product.tamanhos.length > 1 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tamanho
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {product.tamanhos.map((tamanho) => (
                      <button
                        key={tamanho.peso}
                        onClick={() => setSelectedSize(tamanho.peso)}
                        className={`p-3 border rounded-lg text-center transition-colors ${
                          selectedSize === tamanho.peso
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="font-medium">{tamanho.peso}</div>
                        <div className="text-sm text-gray-500">
                          R$ {tamanho.preco.toFixed(2).replace('.', ',')}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sabores */}
              {product.sabores.length > 1 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sabor
                  </label>
                  <select
                    value={selectedFlavor}
                    onChange={(e) => setSelectedFlavor(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {product.sabores.map((sabor) => (
                      <option key={sabor} value={sabor}>
                        {sabor}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantidade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantidade
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    Estoque: {product.estoque} unidades
                  </span>
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Adicionado!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Adicionar ao Carrinho
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleToggleFavorite}
                  className={`p-3 border rounded-lg transition-colors ${
                    isFavorited
                      ? 'border-red-600 bg-red-50 text-red-600'
                      : 'border-gray-300 hover:border-gray-400 text-gray-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>

                <button className="p-3 border border-gray-300 rounded-lg hover:border-gray-400 text-gray-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Cálculo de Frete */}
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">Calcular Frete</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={calculateShipping}
                    disabled={loadingShipping || cep.length !== 8}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loadingShipping ? 'Calculando...' : 'Calcular'}
                  </button>
                </div>

                {shippingData && (
                  <div className="mt-4 space-y-2">
                    {Object.entries(shippingData).map(([type, data]: [string, any]) => (
                      <div key={type} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <div>
                          <span className="font-medium capitalize">{type}</span>
                          <div className="text-sm text-gray-500">{data.days}</div>
                        </div>
                        <span className="font-medium">R$ {data.price.toFixed(2).replace('.', ',')}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Garantias */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Truck className="w-4 h-4" />
                  <span>Frete grátis acima de R$ 199</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-4 h-4" />
                  <span>Compra 100% segura</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <RotateCcw className="w-4 h-4" />
                  <span>7 dias para trocar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Descrição e Avaliações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Descrição</h2>
              <p className="text-gray-600 leading-relaxed">{product.descricao}</p>
            </div>

            {/* Avaliações */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Avaliações ({mockReviews.length})
              </h2>
              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.user}</span>
                          {review.verified && (
                            <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                              Compra verificada
                            </span>
                          )}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Produtos Relacionados */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Você também pode gostar
              </h2>
              <div className="space-y-4">
                {mockRelatedProducts.slice(0, 4).map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="flex gap-3 p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => router.push(`/shop/produto-${relatedProduct.id}`)}
                  >
                    <img
                      src={relatedProduct.imagem}
                      alt={relatedProduct.nome}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-gray-900 line-clamp-2">
                        {relatedProduct.nome}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-500">{relatedProduct.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm font-bold text-gray-900">
                          R$ {relatedProduct.preco.toFixed(2).replace('.', ',')}
                        </span>
                        {relatedProduct.precoAntigo && (
                          <span className="text-xs text-gray-500 line-through">
                            R$ {relatedProduct.precoAntigo.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carrossel: Produtos Similares */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Produtos Similares</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mockRelatedProducts.map((relatedProduct) => (
              <div
                key={`similar-${relatedProduct.id}`}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => router.push(`/shop/produto-${relatedProduct.id}`)}
              >
                <img
                  src={relatedProduct.imagem}
                  alt={relatedProduct.nome}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <h3 className="font-medium text-sm text-gray-900 line-clamp-2 mb-2">
                  {relatedProduct.nome}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-500">{relatedProduct.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">
                    R$ {relatedProduct.preco.toFixed(2).replace('.', ',')}
                  </span>
                  {relatedProduct.precoAntigo && (
                    <span className="text-xs text-gray-500 line-through">
                      R$ {relatedProduct.precoAntigo.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}