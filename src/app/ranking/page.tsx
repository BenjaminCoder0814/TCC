'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Award,
  TrendingUp,
  Star,
  Filter,
  Crown,
  Medal,
  Trophy,
  Target,
  Zap,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

const mockRankings = [
  {
    id: 1,
    rank: 1,
    previousRank: 1,
    user: {
      name: 'João Silva',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      level: 'Elite',
      location: 'São Paulo - SP'
    },
    points: 15420,
    weeklyPoints: 850,
    achievements: 24,
    streak: 45,
    category: 'overall'
  },
  {
    id: 2,
    rank: 2,
    previousRank: 3,
    user: {
      name: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      level: 'Avançado',
      location: 'Rio de Janeiro - RJ'
    },
    points: 14830,
    weeklyPoints: 920,
    achievements: 22,
    streak: 38,
    category: 'overall'
  },
  {
    id: 3,
    rank: 3,
    previousRank: 2,
    user: {
      name: 'Carlos Oliveira',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      level: 'Avançado',
      location: 'Belo Horizonte - MG'
    },
    points: 14650,
    weeklyPoints: 780,
    achievements: 21,
    streak: 52,
    category: 'overall'
  },
  {
    id: 4,
    rank: 4,
    previousRank: 4,
    user: {
      name: 'Ana Costa',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      level: 'Intermediário',
      location: 'Porto Alegre - RS'
    },
    points: 13920,
    weeklyPoints: 650,
    achievements: 19,
    streak: 29,
    category: 'overall'
  },
  {
    id: 5,
    rank: 5,
    previousRank: 6,
    user: {
      name: 'Pedro Lima',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      level: 'Avançado',
      location: 'Curitiba - PR'
    },
    points: 13540,
    weeklyPoints: 890,
    achievements: 18,
    streak: 31,
    category: 'overall'
  }
]

const categories = [
  { id: 'overall', name: 'Geral', icon: Trophy },
  { id: 'weekly', name: 'Semanal', icon: Calendar },
  { id: 'strength', name: 'Força', icon: Award },
  { id: 'cardio', name: 'Cardio', icon: TrendingUp },
  { id: 'consistency', name: 'Consistência', icon: Target }
]

const achievements = [
  {
    title: 'Primeira Semana',
    description: '7 dias consecutivos de treino',
    icon: Calendar,
    rarity: 'common',
    count: 1250
  },
  {
    title: 'Maratonista',
    description: '30 dias consecutivos',
    icon: Target,
    rarity: 'rare',
    count: 340
  },
  {
    title: 'Lenda',
    description: '100 dias consecutivos',
    icon: Crown,
    rarity: 'legendary',
    count: 45
  },
  {
    title: 'Força Bruta',
    description: 'Meta de força atingida',
    icon: Award,
    rarity: 'epic',
    count: 180
  }
]

export default function RankingPage() {
  const [selectedCategory, setSelectedCategory] = useState('overall')
  const [period, setPeriod] = useState('monthly')
  const [showAchievements, setShowAchievements] = useState(false)

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="text-yellow-500" size={24} />
      case 2: return <Medal className="text-gray-400" size={24} />
      case 3: return <Medal className="text-orange-500" size={24} />
      default: return <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-sm font-bold">{rank}</div>
    }
  }

  const getRankChange = (current: number, previous: number) => {
    if (current < previous) {
      return <ArrowUp className="text-green-500" size={16} />
    } else if (current > previous) {
      return <ArrowDown className="text-red-500" size={16} />
    }
    return <span className="text-gray-400">-</span>
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Elite': return 'text-purple-600 bg-purple-100'
      case 'Avançado': return 'text-blue-600 bg-blue-100'
      case 'Intermediário': return 'text-green-600 bg-green-100'
      case 'Iniciante': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ranking de Atletas
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Veja sua posição e compare seu progresso com outros atletas da comunidade.
            </p>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Trophy className="mx-auto mb-3 text-yellow-400" size={32} />
                <div className="text-2xl font-bold">15,420</div>
                <div className="text-purple-100">Sua Pontuação</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Target className="mx-auto mb-3 text-green-400" size={32} />
                <div className="text-2xl font-bold">#47</div>
                <div className="text-purple-100">Sua Posição</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <TrendingUp className="mx-auto mb-3 text-blue-400" size={32} />
                <div className="text-2xl font-bold">+5</div>
                <div className="text-purple-100">Esta Semana</div>
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
                    ? 'bg-purple-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon size={18} />
                {category.name}
              </button>
            ))}
          </div>

          {/* Period Filter */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Período:</span>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="weekly">Esta Semana</option>
              <option value="monthly">Este Mês</option>
              <option value="quarterly">Trimestre</option>
              <option value="yearly">Ano</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ranking List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">
                  Top Atletas - {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">Classificação atualizada em tempo real</p>
              </div>

              <div className="divide-y divide-gray-200">
                {mockRankings.map((ranking, index) => (
                  <motion.div
                    key={ranking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank */}
                      <div className="flex items-center gap-2">
                        {getRankIcon(ranking.rank)}
                        {getRankChange(ranking.rank, ranking.previousRank)}
                      </div>

                      {/* User Info */}
                      <div className="flex items-center gap-3 flex-1">
                        <img
                          src={ranking.user.avatar}
                          alt={ranking.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        
                        <div>
                          <h3 className="font-semibold text-gray-900">{ranking.user.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(ranking.user.level)}`}>
                              {ranking.user.level}
                            </span>
                            <span>{ranking.user.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">
                          {ranking.points.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          +{ranking.weeklyPoints} esta semana
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Award size={16} />
                        <span>{ranking.achievements}</span>
                        <Target size={16} />
                        <span>{ranking.streak} dias</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="p-6 text-center border-t border-gray-200">
                <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                  Ver Mais Atletas
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Your Position Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sua Posição</h3>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-purple-600">#47</span>
                </div>
                <p className="text-gray-600">de 2.847 atletas</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pontos</span>
                  <span className="font-semibold">15,420</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nível</span>
                  <span className="font-semibold text-purple-600">Elite</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sequência</span>
                  <span className="font-semibold">45 dias</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Ver Meu Perfil
              </button>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Conquistas Populares</h3>
                <button
                  onClick={() => setShowAchievements(!showAchievements)}
                  className="text-purple-600 hover:text-purple-700 text-sm"
                >
                  Ver Todas
                </button>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      achievement.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-600' :
                      achievement.rarity === 'epic' ? 'bg-purple-100 text-purple-600' :
                      achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      <achievement.icon size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                    
                    <span className="text-xs text-gray-500">{achievement.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Challenge */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-yellow-300" size={24} />
                <h3 className="text-lg font-semibold">Desafio Semanal</h3>
              </div>
              
              <p className="mb-4 text-orange-100">
                Complete 5 treinos esta semana e ganhe pontos extras!
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progresso</span>
                  <span>3/5 treinos</span>
                </div>
                <div className="w-full bg-orange-400 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <button className="w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
                Participar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}