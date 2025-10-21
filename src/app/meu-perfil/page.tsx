'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Camera, 
  Trophy, 
  Target, 
  Calendar,
  Zap,
  Star,
  Award,
  TrendingUp,
  Edit,
  Save,
  X,
  CheckCircle,
  Clock,
  Activity
} from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { usePointsStore } from '@/store/usePointsStore';

export default function MeuPerfil() {
  const { user } = useAuthStore();
  const { points, level, nextLevelPoints } = usePointsStore();
  const [editando, setEditando] = useState(false);
  const [salvo, setSalvo] = useState(false);
  
  const [perfil, setPerfil] = useState({
    nome: user?.name || 'João Silva',
    email: user?.email || 'joao@exemplo.com',
    telefone: '(11) 99999-9999',
    dataNascimento: '1990-05-15',
    altura: '175',
    peso: '80',
    objetivo: 'Ganho de massa muscular',
    bio: 'Apaixonado por fitness e vida saudável. Sempre em busca de novos desafios!'
  });

  // Mock data para estatísticas
  const stats = {
    diasAtivos: 45,
    treinosCompletos: 32,
    pontosTotal: points,
    nivel: level,
    proximoNivel: nextLevelPoints,
    medalhas: 8,
    sequenciaAtual: 7,
    melhorSequencia: 15
  };

  const medalhas = [
    { id: 1, nome: 'Primeira Compra', icone: Trophy, cor: 'text-yellow-500', conquistada: true },
    { id: 2, nome: 'Treino Consistente', icone: Target, cor: 'text-blue-500', conquistada: true },
    { id: 3, nome: 'Fitness Guru', icone: Star, cor: 'text-purple-500', conquistada: true },
    { id: 4, nome: 'Maratonista', icone: Award, cor: 'text-green-500', conquistada: false },
    { id: 5, nome: 'Influencer', icone: Zap, cor: 'text-orange-500', conquistada: false },
    { id: 6, nome: 'Meta Atingida', icone: CheckCircle, cor: 'text-indigo-500', conquistada: true }
  ];

  const atividadesRecentes = [
    { tipo: 'treino', texto: 'Completou treino de Peito e Tríceps', data: '2025-10-21', pontos: 50 },
    { tipo: 'compra', texto: 'Comprou Whey Protein Premium', data: '2025-10-20', pontos: 100 },
    { tipo: 'meta', texto: 'Atingiu meta semanal de treinos', data: '2025-10-19', pontos: 200 },
    { tipo: 'sequencia', texto: 'Manteve sequência de 7 dias', data: '2025-10-18', pontos: 75 }
  ];

  const handleSalvar = () => {
    // Aqui você salvaria o perfil
    setSalvo(true);
    setEditando(false);
    setTimeout(() => setSalvo(false), 3000);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Acesso Restrito</h2>
          <p className="text-gray-500">Faça login para ver seu perfil</p>
        </div>
      </div>
    );
  }

  const progressoNivel = ((stats.pontosTotal % 1000) / 1000) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Meu Perfil</h1>
          <p className="text-gray-600">Gerencie suas informações e acompanhe seu progresso</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Informações do Perfil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Informações Pessoais</h2>
              {!editando ? (
                <button
                  onClick={() => setEditando(true)}
                  className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Editar
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSalvar}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Salvar
                  </button>
                  <button
                    onClick={() => setEditando(false)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Cancelar
                  </button>
                </div>
              )}
            </div>

            {/* Foto e Info Básica */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {perfil.nome.charAt(0)}
                </div>
                {editando && (
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    {editando ? (
                      <input
                        type="text"
                        value={perfil.nome}
                        onChange={(e) => setPerfil(prev => ({ ...prev, nome: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium">{perfil.nome}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    {editando ? (
                      <input
                        type="email"
                        value={perfil.email}
                        onChange={(e) => setPerfil(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{perfil.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    {editando ? (
                      <input
                        type="tel"
                        value={perfil.telefone}
                        onChange={(e) => setPerfil(prev => ({ ...prev, telefone: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{perfil.telefone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
                    {editando ? (
                      <input
                        type="date"
                        value={perfil.dataNascimento}
                        onChange={(e) => setPerfil(prev => ({ ...prev, dataNascimento: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{new Date(perfil.dataNascimento).toLocaleDateString('pt-BR')}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Altura (cm)</label>
                    {editando ? (
                      <input
                        type="number"
                        value={perfil.altura}
                        onChange={(e) => setPerfil(prev => ({ ...prev, altura: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{perfil.altura} cm</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                    {editando ? (
                      <input
                        type="number"
                        value={perfil.peso}
                        onChange={(e) => setPerfil(prev => ({ ...prev, peso: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{perfil.peso} kg</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Objetivo</label>
                  {editando ? (
                    <select
                      value={perfil.objetivo}
                      onChange={(e) => setPerfil(prev => ({ ...prev, objetivo: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Ganho de massa muscular">Ganho de massa muscular</option>
                      <option value="Perda de peso">Perda de peso</option>
                      <option value="Definição muscular">Definição muscular</option>
                      <option value="Melhora do condicionamento">Melhora do condicionamento</option>
                      <option value="Manutenção da forma">Manutenção da forma</option>
                    </select>
                  ) : (
                    <p className="text-gray-900">{perfil.objetivo}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  {editando ? (
                    <textarea
                      value={perfil.bio}
                      onChange={(e) => setPerfil(prev => ({ ...prev, bio: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{perfil.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Estatísticas */}
          <div className="space-y-6">
            {/* Nível e Pontos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-sm p-6 text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Nível {stats.nivel}</h3>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{stats.pontosTotal % 1000} / 1000 pontos</span>
                    <span>{Math.round(progressoNivel)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressoNivel}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  {stats.proximoNivel - (stats.pontosTotal % 1000)} pontos para o próximo nível
                </p>
              </div>
            </motion.div>

            {/* Stats Rápidas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stats.diasAtivos}</p>
                  <p className="text-sm text-gray-600">Dias ativos</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stats.treinosCompletos}</p>
                  <p className="text-sm text-gray-600">Treinos</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stats.sequenciaAtual}</p>
                  <p className="text-sm text-gray-600">Sequência</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stats.medalhas}</p>
                  <p className="text-sm text-gray-600">Medalhas</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Medalhas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Medalhas e Conquistas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {medalhas.map((medalha) => {
                const IconComponent = medalha.icone;
                return (
                  <div
                    key={medalha.id}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      medalha.conquistada
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-dashed border-gray-300 bg-gray-100 opacity-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                        medalha.conquistada ? 'bg-yellow-100' : 'bg-gray-200'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          medalha.conquistada ? medalha.cor : 'text-gray-400'
                        }`} />
                      </div>
                      <p className={`text-sm font-medium ${
                        medalha.conquistada ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {medalha.nome}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Atividades Recentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h3>
            <div className="space-y-3">
              {atividadesRecentes.map((atividade, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Activity className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{atividade.texto}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">
                        {new Date(atividade.data).toLocaleDateString('pt-BR')}
                      </p>
                      <span className="text-xs font-medium text-green-600">
                        +{atividade.pontos} pts
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {salvo && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Perfil salvo com sucesso!
          </motion.div>
        )}
      </div>
    </div>
  );
}