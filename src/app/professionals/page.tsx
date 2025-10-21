'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  Award,
  Phone,
  Video,
  Calendar,
  CheckCircle,
  X,
  MessageCircle
} from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';

// Tipos
type Professional = {
  id: string;
  nome: string;
  especialidade: string;
  registro: string;
  nota: number;
  preco: number;
  preco_online?: number;
  cidade: string;
  estado: string;
  foto: string;
  bio: string;
  formacoes: string[];
  certificacoes?: string[];
  especialidades: string[];
  atendimento: string[];
  casos_sucesso: number;
  tempo_experiencia: number;
  avaliacao_detalhes?: {
    total: number;
    conhecimento: number;
    pontualidade: number;
    comunicacao: number;
    resultados: number;
  };
};

const specialtyOptions = [
  'Todos',
  'Nutricionista Esportivo',
  'Personal Trainer', 
  'Fisioterapeuta Esportivo',
  'Psicólogo do Esporte',
  'Endocrinologista'
];

const stateOptions = [
  'Todos',
  'SP',
  'RJ',
  'MG',
  'RS',
  'PR',
  'SC',
  'BA',
  'DF'
];

export default function ProfessionalsPage() {
  const { user } = useAuthStore();
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todos');
  const [selectedState, setSelectedState] = useState('Todos');
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sortBy, setSortBy] = useState('rating');
  
  // Modal
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // Carregar profissionais
  useEffect(() => {
    const loadProfessionals = async () => {
      try {
        const response = await fetch('/data/profissionais.json');
        const data = await response.json();
        setProfessionals(data);
        setFilteredProfessionals(data);
      } catch (error) {
        console.error('Erro ao carregar profissionais:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfessionals();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let filtered = [...professionals];

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(prof => 
        prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.especialidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.especialidades.some(esp => esp.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtro por especialidade
    if (selectedSpecialty !== 'Todos') {
      filtered = filtered.filter(prof => prof.especialidade === selectedSpecialty);
    }

    // Filtro por estado
    if (selectedState !== 'Todos') {
      filtered = filtered.filter(prof => prof.estado === selectedState);
    }

    // Filtro por avaliação
    filtered = filtered.filter(prof => prof.nota >= minRating);

    // Filtro por preço
    filtered = filtered.filter(prof => prof.preco <= maxPrice);

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.nota - a.nota;
        case 'price':
          return a.preco - b.preco;
        case 'experience':
          return b.tempo_experiencia - a.tempo_experiencia;
        case 'name':
          return a.nome.localeCompare(b.nome);
        default:
          return 0;
      }
    });

    setFilteredProfessionals(filtered);
  }, [professionals, searchTerm, selectedSpecialty, selectedState, minRating, maxPrice, sortBy]);

  const handleScheduleAppointment = (professional: Professional) => {
    if (!user) {
      alert('Faça login para agendar uma consulta');
      return;
    }
    setSelectedProfessional(professional);
    setShowScheduleModal(true);
  };

  const handleContactProfessional = (professional: Professional) => {
    if (!user) {
      alert('Faça login para entrar em contato');
      return;
    }
    alert(`Entrando em contato com ${professional.nome}... (Simulação)`);
  };

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
            Encontre o Profissional Ideal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se com nutricionistas, personal trainers e outros especialistas 
            certificados para acelerar seus resultados
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nome ou especialidade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Especialidade */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {specialtyOptions.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>

            {/* Estado */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {stateOptions.map(state => (
                <option key={state} value={state}>{state === 'Todos' ? 'Todos os Estados' : state}</option>
              ))}
            </select>

            {/* Ordenação */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="rating">Melhor Avaliação</option>
              <option value="price">Menor Preço</option>
              <option value="experience">Mais Experiência</option>
              <option value="name">Nome A-Z</option>
            </select>
          </div>

          {/* Filtros adicionais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Avaliação mínima: {minRating.toFixed(1)} ⭐
              </label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preço máximo: R$ {maxPrice}
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProfessionals.length} profissionais encontrados
          </p>
        </div>

        {/* Lista de Profissionais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProfessionals.map((professional, index) => (
            <motion.div
              key={professional.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2) }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                {/* Header do Card */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={professional.foto}
                    alt={professional.nome}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {professional.nome}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {professional.especialidade}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{professional.nota}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{professional.cidade}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{professional.tempo_experiencia} anos</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {professional.bio}
                </p>

                {/* Especialidades */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {professional.especialidades.slice(0, 4).map((esp, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {esp}
                      </span>
                    ))}
                    {professional.especialidades.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{professional.especialidades.length - 4} mais
                      </span>
                    )}
                  </div>
                </div>

                {/* Preços e Ações */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      R$ {professional.preco}
                    </div>
                    {professional.preco_online && (
                      <div className="text-sm text-gray-500">
                        Online: R$ {professional.preco_online}
                      </div>
                    )}
                    <div className="text-xs text-gray-400">por consulta</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleContactProfessional(professional)}
                      className="flex items-center gap-2 px-3 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contato
                    </button>
                    <button
                      onClick={() => handleScheduleAppointment(professional)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      Agendar
                    </button>
                  </div>
                </div>

                {/* Indicadores */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{professional.casos_sucesso} casos de sucesso</span>
                    <div className="flex items-center gap-3">
                      {professional.atendimento.includes('presencial') && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          Presencial
                        </span>
                      )}
                      {professional.atendimento.includes('online') && (
                        <span className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          Online
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sem resultados */}
        {filteredProfessionals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Nenhum profissional encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros para encontrar mais opções
            </p>
          </motion.div>
        )}

        {/* Modal de Agendamento */}
        {showScheduleModal && selectedProfessional && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Agendar Consulta</h3>
                  <button
                    onClick={() => setShowScheduleModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="text-center mb-6">
                  <img
                    src={selectedProfessional.foto}
                    alt={selectedProfessional.nome}
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                  <h4 className="font-semibold">{selectedProfessional.nome}</h4>
                  <p className="text-blue-600">{selectedProfessional.especialidade}</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Atendimento
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      {selectedProfessional.atendimento.map(tipo => (
                        <option key={tipo} value={tipo}>
                          {tipo === 'presencial' ? 'Presencial' : 'Online'} - 
                          R$ {tipo === 'presencial' ? selectedProfessional.preco : selectedProfessional.preco_online || selectedProfessional.preco}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data Preferencial
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horário Preferencial
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Observações (opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Descreva brevemente seus objetivos ou questões específicas..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setShowScheduleModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Solicitação de agendamento enviada! O profissional entrará em contato em breve.');
                        setShowScheduleModal(false);
                      }}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Confirmar
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}