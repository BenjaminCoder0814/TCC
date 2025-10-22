'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  Gift, 
  TrendingUp, 
  Target,
  Award,
  ChevronDown,
  Clock
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { usePointsStore } from '../stores/pointsStore';

export default function PointsHUD() {
  const { user, isAuthenticated } = useAuthStore();
  const { 
    totalPoints, 
    level, 
    getPointsForNextLevel, 
    getLevelProgress,
    getRecentTransactions 
  } = usePointsStore();

  const [isExpanded, setIsExpanded] = useState(false);

  if (!isAuthenticated || !user) return null;

  const pointsForNext = getPointsForNextLevel();
  const progress = getLevelProgress();
  const recentTransactions = getRecentTransactions(3);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Bronze': return 'from-orange-400 to-orange-600';
      case 'Silver': return 'from-gray-400 to-gray-600';
      case 'Gold': return 'from-yellow-400 to-yellow-600';
      case 'Platinum': return 'from-purple-400 to-purple-600';
      case 'Diamond': return 'from-blue-400 to-blue-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Bronze': return <Award className="w-4 h-4" />;
      case 'Silver': return <Star className="w-4 h-4" />;
      case 'Gold': return <Trophy className="w-4 h-4" />;
      case 'Platinum': return <Target className="w-4 h-4" />;
      case 'Diamond': return <Gift className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed top-20 right-4 z-40">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Header compacto */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getLevelColor(level)} flex items-center justify-center text-white`}>
                {getLevelIcon(level)}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {totalPoints.toLocaleString()} pts
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Nível {level}
                </div>
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* Conteúdo expandido */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <div className="p-4 space-y-4">
                
                {/* Progresso do nível */}
                {level !== 'Diamond' && (
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Progresso para próximo nível</span>
                      <span>{pointsForNext} pts restantes</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(level)} transition-all duration-300`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Transações recentes */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Atividade Recente
                  </h4>
                  <div className="space-y-2">
                    {recentTransactions.length > 0 ? (
                      recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-400 truncate mr-2">
                            {transaction.description}
                          </span>
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            +{transaction.points}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                        Nenhuma atividade recente
                      </div>
                    )}
                  </div>
                </div>

                {/* Dicas para ganhar pontos */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <h5 className="text-xs font-medium text-blue-900 dark:text-blue-300 mb-2">
                    💡 Ganhe mais pontos:
                  </h5>
                  <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1">
                    <li>• Complete sua avaliação (+100 pts)</li>
                    <li>• Faça uma compra (+5 pts por R$ 1)</li>
                    <li>• Leia artigos do blog (+10 pts)</li>
                    <li>• Login diário (+5 pts)</li>
                  </ul>
                </div>

                {/* Botões de ação */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Ver Ranking
                  </button>
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center">
                    <Gift className="w-3 h-3 mr-1" />
                    Resgatar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}