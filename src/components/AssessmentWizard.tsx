'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  User,
  Target,
  Activity,
  Zap,
  Trophy,
  Calendar,
  Scale,
  Ruler,
  Heart,
  Brain,
  Clock
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { fakeDelay } from '@/lib/fakeDelay'

interface AssessmentData {
  personalInfo: {
    age: number
    gender: 'male' | 'female' | 'other'
    height: number
    weight: number
    activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
  }
  goals: {
    primary: 'lose_weight' | 'gain_muscle' | 'improve_endurance' | 'general_health' | 'strength'
    timeline: '1_month' | '3_months' | '6_months' | '1_year' | 'long_term'
    intensity: 'low' | 'moderate' | 'high'
  }
  experience: {
    level: 'beginner' | 'intermediate' | 'advanced'
    injuries: string[]
    preferences: string[]
    availableTime: number
    daysPerWeek: number
  }
  bodyComposition: {
    muscleGroups: {
      chest: number
      back: number
      shoulders: number
      arms: number
      legs: number
      core: number
    }
    bodyFat: number
    flexibility: number
  }
}

interface AssessmentStep {
  id: string
  title: string
  icon: any
  component: React.ComponentType<any>
}

// Step Components
function PersonalInfoStep({ data, onChange }: any) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Informações Pessoais</h2>
        <p className="text-gray-600">Vamos conhecer você melhor</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
          <input
            type="number"
            value={data.personalInfo.age}
            onChange={(e) => onChange('personalInfo', { ...data.personalInfo, age: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ex: 25"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gênero</label>
          <select
            value={data.personalInfo.gender}
            onChange={(e) => onChange('personalInfo', { ...data.personalInfo, gender: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Selecione...</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Outro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Altura (cm)</label>
          <input
            type="number"
            value={data.personalInfo.height}
            onChange={(e) => onChange('personalInfo', { ...data.personalInfo, height: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ex: 175"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Peso (kg)</label>
          <input
            type="number"
            value={data.personalInfo.weight}
            onChange={(e) => onChange('personalInfo', { ...data.personalInfo, weight: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ex: 70"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Nível de Atividade Atual</label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { value: 'sedentary', label: 'Sedentário', desc: 'Pouco ou nenhum exercício' },
            { value: 'light', label: 'Leve', desc: '1-3 dias por semana' },
            { value: 'moderate', label: 'Moderado', desc: '3-5 dias por semana' },
            { value: 'active', label: 'Ativo', desc: '6-7 dias por semana' },
            { value: 'very_active', label: 'Muito Ativo', desc: 'Exercício intenso diário' }
          ].map((level) => (
            <button
              key={level.value}
              onClick={() => onChange('personalInfo', { ...data.personalInfo, activityLevel: level.value })}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                data.personalInfo.activityLevel === level.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-semibold">{level.label}</div>
              <div className="text-sm text-gray-600">{level.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function GoalsStep({ data, onChange }: any) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Seus Objetivos</h2>
        <p className="text-gray-600">O que você quer alcançar?</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Objetivo Principal</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { value: 'lose_weight', label: 'Perder Peso', icon: Scale, color: 'bg-red-500' },
            { value: 'gain_muscle', label: 'Ganhar Massa', icon: Zap, color: 'bg-blue-500' },
            { value: 'improve_endurance', label: 'Melhorar Resistência', icon: Activity, color: 'bg-green-500' },
            { value: 'general_health', label: 'Saúde Geral', icon: Heart, color: 'bg-purple-500' },
            { value: 'strength', label: 'Força', icon: Trophy, color: 'bg-orange-500' }
          ].map((goal) => (
            <button
              key={goal.value}
              onClick={() => onChange('goals', { ...data.goals, primary: goal.value })}
              className={`p-6 rounded-lg border-2 transition-all ${
                data.goals.primary === goal.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`${goal.color} text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                <goal.icon size={24} />
              </div>
              <div className="font-semibold text-center">{goal.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Prazo para Resultados</label>
          <select
            value={data.goals.timeline}
            onChange={(e) => onChange('goals', { ...data.goals, timeline: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Selecione...</option>
            <option value="1_month">1 mês</option>
            <option value="3_months">3 meses</option>
            <option value="6_months">6 meses</option>
            <option value="1_year">1 ano</option>
            <option value="long_term">Longo prazo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Intensidade Desejada</label>
          <select
            value={data.goals.intensity}
            onChange={(e) => onChange('goals', { ...data.goals, intensity: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Selecione...</option>
            <option value="low">Baixa</option>
            <option value="moderate">Moderada</option>
            <option value="high">Alta</option>
          </select>
        </div>
      </div>
    </div>
  )
}

function ExperienceStep({ data, onChange }: any) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Experiência e Preferências</h2>
        <p className="text-gray-600">Conte-nos sobre sua jornada fitness</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Nível de Experiência</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { value: 'beginner', label: 'Iniciante', desc: 'Menos de 6 meses' },
            { value: 'intermediate', label: 'Intermediário', desc: '6 meses - 2 anos' },
            { value: 'advanced', label: 'Avançado', desc: 'Mais de 2 anos' }
          ].map((level) => (
            <button
              key={level.value}
              onClick={() => onChange('experience', { ...data.experience, level: level.value })}
              className={`p-6 rounded-lg border-2 text-center transition-all ${
                data.experience.level === level.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-semibold mb-2">{level.label}</div>
              <div className="text-sm text-gray-600">{level.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tempo Disponível por Treino (minutos)</label>
          <input
            type="number"
            value={data.experience.availableTime}
            onChange={(e) => onChange('experience', { ...data.experience, availableTime: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ex: 60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dias por Semana</label>
          <select
            value={data.experience.daysPerWeek}
            onChange={(e) => onChange('experience', { ...data.experience, daysPerWeek: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Selecione...</option>
            <option value="2">2 dias</option>
            <option value="3">3 dias</option>
            <option value="4">4 dias</option>
            <option value="5">5 dias</option>
            <option value="6">6 dias</option>
            <option value="7">7 dias</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Preferências de Treino</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Musculação',
            'Cardio',
            'Funcional',
            'Yoga',
            'Pilates',
            'Crossfit',
            'Natação',
            'Corrida',
            'Ciclismo'
          ].map((preference) => (
            <button
              key={preference}
              onClick={() => {
                const current = data.experience.preferences || []
                const updated = current.includes(preference)
                  ? current.filter((p: string) => p !== preference)
                  : [...current, preference]
                onChange('experience', { ...data.experience, preferences: updated })
              }}
              className={`p-3 rounded-lg border transition-all ${
                (data.experience.preferences || []).includes(preference)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {preference}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function BodyCompositionStep({ data, onChange }: any) {
  const muscleGroups = [
    { key: 'chest', label: 'Peito' },
    { key: 'back', label: 'Costas' },
    { key: 'shoulders', label: 'Ombros' },
    { key: 'arms', label: 'Braços' },
    { key: 'legs', label: 'Pernas' },
    { key: 'core', label: 'Core/Abdômen' }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Avaliação Corporal</h2>
        <p className="text-gray-600">Avalie seu nível atual em cada grupo muscular</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Nível Muscular (1-10)</label>
        <div className="space-y-4">
          {muscleGroups.map((group) => (
            <div key={group.key} className="flex items-center justify-between">
              <span className="font-medium">{group.label}</span>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                  <button
                    key={level}
                    onClick={() => onChange('bodyComposition', {
                      ...data.bodyComposition,
                      muscleGroups: {
                        ...data.bodyComposition.muscleGroups,
                        [group.key]: level
                      }
                    })}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      data.bodyComposition.muscleGroups[group.key] >= level
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">% de Gordura Corporal (estimado)</label>
          <input
            type="number"
            value={data.bodyComposition.bodyFat}
            onChange={(e) => onChange('bodyComposition', { ...data.bodyComposition, bodyFat: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ex: 15"
            min="5"
            max="50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Flexibilidade (1-10)</label>
          <input
            type="number"
            value={data.bodyComposition.flexibility}
            onChange={(e) => onChange('bodyComposition', { ...data.bodyComposition, flexibility: parseInt(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="1-10"
            min="1"
            max="10"
          />
        </div>
      </div>
    </div>
  )
}

export default function AssessmentWizard({ onComplete }: { onComplete: (data: AssessmentData) => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuthStore()

  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    personalInfo: {
      age: 0,
      gender: 'male',
      height: 0,
      weight: 0,
      activityLevel: 'moderate'
    },
    goals: {
      primary: 'gain_muscle',
      timeline: '3_months',
      intensity: 'moderate'
    },
    experience: {
      level: 'beginner',
      injuries: [],
      preferences: [],
      availableTime: 60,
      daysPerWeek: 3
    },
    bodyComposition: {
      muscleGroups: {
        chest: 5,
        back: 5,
        shoulders: 5,
        arms: 5,
        legs: 5,
        core: 5
      },
      bodyFat: 15,
      flexibility: 5
    }
  })

  const steps: AssessmentStep[] = [
    {
      id: 'personal',
      title: 'Informações Pessoais',
      icon: User,
      component: PersonalInfoStep
    },
    {
      id: 'goals',
      title: 'Objetivos',
      icon: Target,
      component: GoalsStep
    },
    {
      id: 'experience',
      title: 'Experiência',
      icon: Brain,
      component: ExperienceStep
    },
    {
      id: 'body',
      title: 'Composição Corporal',
      icon: Activity,
      component: BodyCompositionStep
    }
  ]

  const updateData = (section: string, newData: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [section]: newData
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleComplete = async () => {
    setIsLoading(true)
    await fakeDelay(2000) // Simular processamento
    onComplete(assessmentData)
    setIsLoading(false)
  }

  const CurrentStepComponent = steps[currentStep].component
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Avaliação Muscle Levels</h1>
          <span className="text-sm text-gray-600">{currentStep + 1} de {steps.length}</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                index <= currentStep
                  ? 'bg-blue-500 border-blue-500 text-white'
                  : 'border-gray-300 text-gray-400'
              }`}>
                {index < currentStep ? (
                  <CheckCircle size={20} />
                ) : (
                  <step.icon size={20} />
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${
                  index < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <CurrentStepComponent
            data={assessmentData}
            onChange={updateData}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={20} />
          Anterior
        </button>

        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleComplete}
            disabled={isLoading}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Processando...
              </>
            ) : (
              <>
                <Trophy size={20} />
                Finalizar Avaliação
              </>
            )}
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Próximo
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  )
}