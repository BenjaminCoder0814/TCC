'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Settings, 
  Target, 
  Trophy, 
  Calendar,
  TrendingUp,
  Star,
  Award,
  BarChart3,
  Activity,
  Clock,
  Heart
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { usePointsStore } from '@/stores/pointsStore'

const mockUserData = {
  name: 'João Silva',
  email: 'joao@email.com',
  joinDate: '2024-01-15',
  level: 'Intermediário',
  currentStreak: 7,
  totalWorkouts: 45,
  totalPoints: 2450,
  achievements: [
    { id: 1, name: 'Primeira Semana', description: '7 dias consecutivos', icon: Calendar, earned: true },
    { id: 2, name: 'Consistente', description: '30 treinos completos', icon: Trophy, earned: true },
    { id: 3, name: 'Dedicado', description: '100 pontos ganhos', icon: Star, earned: true },
    { id: 4, name: 'Campeão', description: '50 treinos completos', icon: Award, earned: false }
  ],
  recentActivity: [
    { date: '2024-01-20', type: 'workout', description: 'Treino de Peito e Tríceps', points: 50 },
    { date: '2024-01-19', type: 'assessment', description: 'Avaliação mensal completa', points: 100 },
    { date: '2024-01-18', type: 'workout', description: 'Treino de Pernas', points: 60 },
    { date: '2024-01-17', type: 'achievement', description: 'Conquista: Primeira Semana', points: 150 }
  ]
}

export default function ProfilePage() {
  const { user } = useAuthStore()
  const { points, level, rank } = usePointsStore()
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BarChart3 },
    { id: 'progress', label: 'Progresso', icon: TrendingUp },
    { id: 'achievements', label: 'Conquistas', icon: Trophy },
    { id: 'settings', label: 'Configurações', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl text-white p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User size={48} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{mockUserData.name}</h1>
              <p className="text-blue-100 mb-4">{mockUserData.email}</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold">{mockUserData.totalPoints}</div>
                  <div className="text-blue-100 text-sm">Pontos Totais</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold">{mockUserData.level}</div>
                  <div className="text-blue-100 text-sm">Nível Atual</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold">{mockUserData.currentStreak}</div>
                  <div className="text-blue-100 text-sm">Dias Consecutivos</div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-colors">
                Editar Perfil
              </button>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg transition-colors">
                Compartilhar
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <Activity className="mx-auto mb-3 text-blue-600" size={32} />
                    <div className="text-2xl font-bold text-gray-900">{mockUserData.totalWorkouts}</div>
                    <div className="text-gray-600">Treinos Completos</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <Calendar className="mx-auto mb-3 text-green-600" size={32} />
                    <div className="text-2xl font-bold text-gray-900">{mockUserData.currentStreak}</div>
                    <div className="text-gray-600">Dias Consecutivos</div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6 text-center">
                    <Star className="mx-auto mb-3 text-purple-600" size={32} />
                    <div className="text-2xl font-bold text-gray-900">{mockUserData.totalPoints}</div>
                    <div className="text-gray-600">Pontos Ganhos</div>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-6 text-center">
                    <Trophy className="mx-auto mb-3 text-orange-600" size={32} />
                    <div className="text-2xl font-bold text-gray-900">
                      {mockUserData.achievements.filter(a => a.earned).length}
                    </div>
                    <div className="text-gray-600">Conquistas</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Atividade Recente</h2>
                  <div className="space-y-4">
                    {mockUserData.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          {activity.type === 'workout' && <Activity size={20} className="text-blue-600" />}
                          {activity.type === 'assessment' && <Target size={20} className="text-green-600" />}
                          {activity.type === 'achievement' && <Trophy size={20} className="text-yellow-600" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.description}</p>
                          <p className="text-gray-600 text-sm">{activity.date}</p>
                        </div>
                        <div className="text-blue-600 font-semibold">+{activity.points} pts</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-gray-900">Seu Progresso</h2>
                
                {/* Progress Charts Placeholder */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Treinos por Semana</h3>
                    <div className="h-64 bg-white rounded flex items-center justify-center">
                      <p className="text-gray-500">Gráfico de treinos</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Pontos Ganhos</h3>
                    <div className="h-64 bg-white rounded flex items-center justify-center">
                      <p className="text-gray-500">Gráfico de pontos</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-gray-900">Conquistas</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockUserData.achievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        achievement.earned
                          ? 'border-yellow-200 bg-yellow-50'
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                          achievement.earned
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <achievement.icon size={32} />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{achievement.name}</h3>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                        {achievement.earned && (
                          <span className="inline-block mt-3 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                            Conquistado!
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-gray-900">Configurações</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Informações Pessoais</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                        <input
                          type="text"
                          defaultValue={mockUserData.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                        <input
                          type="email"
                          defaultValue={mockUserData.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Preferências</h3>
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-gray-700">Receber notificações por e-mail</span>
                      </label>
                      
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-gray-700">Lembretes de treino</span>
                      </label>
                      
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-gray-700">Compartilhar progresso</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Salvar Alterações
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}