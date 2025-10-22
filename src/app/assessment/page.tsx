'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AssessmentWizard from '@/components/AssessmentWizard'
import TrainingBuilder from '@/components/TrainingBuilder'
import { useRouter } from 'next/navigation'
import { 
  CheckCircle, 
  Download, 
  Share2, 
  Play,
  Star,
  Trophy,
  Zap,
  Target
} from 'lucide-react'

interface AssessmentData {
  personalInfo: any
  goals: any
  experience: any
  bodyComposition: any
}

interface TrainingPlan {
  id: string
  name: string
  description: string
  duration: number
  level: string
  goal: string
  workouts: any[]
  schedule: any[]
  progress: any[]
}

export default function AssessmentPage() {
  const [currentPhase, setCurrentPhase] = useState<'assessment' | 'building' | 'complete'>('assessment')
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null)
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | null>(null)
  const router = useRouter()

  const handleAssessmentComplete = (data: AssessmentData) => {
    setAssessmentData(data)
    setCurrentPhase('building')
  }

  const handlePlanGenerated = (plan: TrainingPlan) => {
    setTrainingPlan(plan)
    setCurrentPhase('complete')
  }

  const handleStartTraining = () => {
    router.push('/training')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Avaliação Muscle Levels</h1>
              <p className="text-gray-600">Crie seu plano de treino personalizado</p>
            </div>
            
            {/* Progress Indicator */}
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${
                currentPhase === 'assessment' ? 'text-blue-600' : 'text-green-600'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentPhase === 'assessment' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {currentPhase === 'assessment' ? '1' : <CheckCircle size={20} />}
                </div>
                <span className="font-medium">Avaliação</span>
              </div>
              
              <div className={`w-8 h-0.5 ${
                currentPhase === 'building' || currentPhase === 'complete' ? 'bg-green-500' : 'bg-gray-300'
              }`} />
              
              <div className={`flex items-center gap-2 ${
                currentPhase === 'building' ? 'text-blue-600' : 
                currentPhase === 'complete' ? 'text-green-600' : 'text-gray-400'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentPhase === 'building' ? 'bg-blue-100' : 
                  currentPhase === 'complete' ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {currentPhase === 'complete' ? <CheckCircle size={20} /> : '2'}
                </div>
                <span className="font-medium">Criação do Plano</span>
              </div>
              
              <div className={`w-8 h-0.5 ${
                currentPhase === 'complete' ? 'bg-green-500' : 'bg-gray-300'
              }`} />
              
              <div className={`flex items-center gap-2 ${
                currentPhase === 'complete' ? 'text-green-600' : 'text-gray-400'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentPhase === 'complete' ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {currentPhase === 'complete' ? <CheckCircle size={20} /> : '3'}
                </div>
                <span className="font-medium">Plano Pronto</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {currentPhase === 'assessment' && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AssessmentWizard onComplete={handleAssessmentComplete} />
            </motion.div>
          )}

          {currentPhase === 'building' && assessmentData && (
            <motion.div
              key="building"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TrainingBuilder 
                assessmentData={assessmentData}
                onPlanGenerated={handlePlanGenerated}
              />
            </motion.div>
          )}

          {currentPhase === 'complete' && trainingPlan && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Success Message */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-8 mb-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Trophy size={32} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">Parabéns! Seu plano está pronto!</h2>
                <p className="text-green-100 text-lg">
                  Criamos um plano de treino personalizado especialmente para você
                </p>
              </div>

              {/* Plan Summary */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{trainingPlan.name}</h3>
                    <p className="text-gray-600 mb-6">{trainingPlan.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Target size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Objetivo Principal</div>
                          <div className="text-gray-600 capitalize">{trainingPlan.goal.replace('_', ' ')}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Zap size={20} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Nível</div>
                          <div className="text-gray-600 capitalize">{trainingPlan.level}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Star size={20} className="text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Duração</div>
                          <div className="text-gray-600">{trainingPlan.duration} semanas</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Seus Resultados da Avaliação</h4>
                    
                    {assessmentData && (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">IMC:</span>
                          <span className="font-semibold text-gray-900">
                            {assessmentData.personalInfo.height > 0 && assessmentData.personalInfo.weight > 0
                              ? (assessmentData.personalInfo.weight / 
                                  Math.pow(assessmentData.personalInfo.height / 100, 2)).toFixed(1)
                              : '-'}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nível de Atividade:</span>
                          <span className="font-semibold text-gray-900 capitalize">
                            {assessmentData.personalInfo.activityLevel 
                              ? assessmentData.personalInfo.activityLevel.replace('_', ' ')
                              : '-'}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Experiência:</span>
                          <span className="font-semibold text-gray-900 capitalize">
                            {assessmentData.experience.level || '-'}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Treinos por Semana:</span>
                          <span className="font-semibold text-gray-900">
                            {assessmentData.experience.daysPerWeek > 0 
                              ? `${assessmentData.experience.daysPerWeek} dias`
                              : '-'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleStartTraining}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  <Play size={24} />
                  Começar Treinos Agora
                </button>
                
                <button className="flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
                  <Download size={24} />
                  Baixar Plano (PDF)
                </button>
                
                <button className="flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={24} />
                  Compartilhar
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">O que vem agora?</h4>
                <ul className="text-blue-800 space-y-2">
                  <li>• Seu plano foi salvo automaticamente na sua conta</li>
                  <li>• Você pode acessar e modificar seus treinos a qualquer momento</li>
                  <li>• Acompanhe seu progresso com gráficos detalhados</li>
                  <li>• Conecte-se com profissionais quando precisar de orientação</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}