'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Star, 
  Clock, 
  Phone, 
  Globe, 
  Filter,
  Search,
  Dumbbell,
  Waves,
  Heart,
  Users,
  Car,
  Wifi,
  AirVent,
  Shield
} from 'lucide-react'

const mockGyms = [
  {
    id: 1,
    name: 'SmartFit Academia',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    rating: 4.5,
    reviews: 328,
    address: 'Rua Augusta, 1234 - Centro, São Paulo - SP',
    distance: 0.8,
    price: 'R$ 89,90/mês',
    features: ['Musculação', 'Cardio', 'Natação', 'Aulas'],
    amenities: ['Estacionamento', 'Wi-Fi', 'Ar Condicionado', 'Vestiário'],
    hours: '05:00 - 23:00',
    phone: '(11) 99999-9999',
    website: 'smartfit.com.br',
    category: 'tradicional'
  },
  {
    id: 2,
    name: 'Bio Ritmo Premium',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 156,
    address: 'Av. Paulista, 567 - Bela Vista, São Paulo - SP',
    distance: 1.2,
    price: 'R$ 149,90/mês',
    features: ['Musculação', 'Pilates', 'Yoga', 'Personal'],
    amenities: ['Estacionamento', 'Wi-Fi', 'Ar Condicionado', 'Sauna'],
    hours: '06:00 - 22:00',
    phone: '(11) 88888-8888',
    website: 'bioritmo.com.br',
    category: 'premium'
  },
  {
    id: 3,
    name: 'CrossFit Box Elite',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 94,
    address: 'Rua dos Pinheiros, 890 - Pinheiros, São Paulo - SP',
    distance: 2.1,
    price: 'R$ 199,90/mês',
    features: ['CrossFit', 'Funcional', 'Olympic Lifting', 'WOD'],
    amenities: ['Estacionamento', 'Vestiário', 'Equipamentos Premium'],
    hours: '06:00 - 21:00',
    phone: '(11) 77777-7777',
    website: 'crossfitelite.com.br',
    category: 'crossfit'
  },
  {
    id: 4,
    name: 'Academia Corpo & Mente',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    rating: 4.3,
    reviews: 203,
    address: 'Rua Consolação, 445 - Consolação, São Paulo - SP',
    distance: 1.5,
    price: 'R$ 119,90/mês',
    features: ['Musculação', 'Zumba', 'Spinning', 'Boxe'],
    amenities: ['Wi-Fi', 'Ar Condicionado', 'Vestiário', 'Lanchonete'],
    hours: '05:30 - 22:30',
    phone: '(11) 66666-6666',
    website: 'corpoemente.com.br',
    category: 'tradicional'
  }
]

const categories = [
  { id: 'all', name: 'Todas', icon: Dumbbell },
  { id: 'tradicional', name: 'Tradicional', icon: Dumbbell },
  { id: 'premium', name: 'Premium', icon: Star },
  { id: 'crossfit', name: 'CrossFit', icon: Heart },
  { id: 'natacao', name: 'Natação', icon: Waves }
]

const amenityIcons = {
  'Estacionamento': Car,
  'Wi-Fi': Wifi,
  'Ar Condicionado': AirVent,
  'Vestiário': Users,
  'Sauna': Heart,
  'Lanchonete': Users,
  'Equipamentos Premium': Shield
}

export default function GymsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('distance')
  const [selectedGym, setSelectedGym] = useState<number | null>(null)

  const filteredGyms = mockGyms
    .filter(gym => 
      (selectedCategory === 'all' || gym.category === selectedCategory) &&
      gym.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating': return b.rating - a.rating
        case 'price': return parseFloat(a.price.replace(/[^\d,]/g, '').replace(',', '.')) - parseFloat(b.price.replace(/[^\d,]/g, '').replace(',', '.'))
        case 'distance': return a.distance - b.distance
        default: return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Encontre Academias Próximas
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Descubra as melhores academias da sua região e encontre o local perfeito para seus treinos.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por nome ou localização..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon size={18} />
                {category.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="distance">Distância</option>
              <option value="rating">Avaliação</option>
              <option value="price">Preço</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Gyms List */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="text-gray-600">
                Encontradas {filteredGyms.length} academias próximas a você
              </p>
            </div>

            <div className="space-y-6">
              {filteredGyms.map((gym, index) => (
                <motion.div
                  key={gym.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                    selectedGym === gym.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedGym(selectedGym === gym.id ? null : gym.id)}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={gym.image} 
                        alt={gym.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{gym.name}</h3>
                        <div className="flex items-center gap-2">
                          <Star className="text-yellow-400 fill-current" size={18} />
                          <span className="font-semibold">{gym.rating}</span>
                          <span className="text-gray-500">({gym.reviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <MapPin size={16} />
                        <span className="text-sm">{gym.address}</span>
                        <span className="text-blue-600 font-medium">• {gym.distance}km</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {gym.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-600">{gym.price}</span>
                        <div className="flex gap-2">
                          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Ver Detalhes
                          </button>
                          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                            Contato
                          </button>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {selectedGym === gym.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-200"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Informações</h4>
                              <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Clock size={16} />
                                  <span>{gym.hours}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone size={16} />
                                  <span>{gym.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Globe size={16} />
                                  <span>{gym.website}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Comodidades</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {gym.amenities.map((amenity, idx) => {
                                  const IconComponent = amenityIcons[amenity] || Users
                                  return (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                      <IconComponent size={16} />
                                      <span>{amenity}</span>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mapa das Academias</h3>
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Mapa interativo em breve</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Filtros Rápidos</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Aberto agora</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Com estacionamento</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Aceita day use</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Avaliação 4+ estrelas</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}