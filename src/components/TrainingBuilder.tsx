'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Dumbbell,
  Clock,
  Target,
  TrendingUp,
  Calendar,
  Award,
  Download,
  Share2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Star,
  Zap
} from 'lucide-react'
import { fakeDelay } from '@/lib/fakeDelay'

interface Exercise {
  id: string
  name: string
  muscleGroup: string[]
  equipment: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  sets: number
  reps: string
  rest: number
  instructions: string[]
  tips: string[]
  videoUrl?: string
  image: string
}

interface Workout {
  id: string
  name: string
  type: 'strength' | 'cardio' | 'flexibility' | 'functional'
  duration: number
  exercises: Exercise[]
  calories: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  muscleGroups: string[]
  equipment: string[]
}

interface TrainingPlan {
  id: string
  name: string
  description: string
  duration: number // weeks
  level: 'beginner' | 'intermediate' | 'advanced'
  goal: string
  workouts: Workout[]
  schedule: {
    day: number
    workoutId: string
    type: 'workout' | 'rest'
  }[]
  progress: {
    week: number
    completed: boolean
    workoutsCompleted: number
    totalWorkouts: number
  }[]
}

interface AssessmentData {
  personalInfo: any
  goals: any
  experience: any
  bodyComposition: any
}

// Mock exercises database
const exercisesDatabase: Exercise[] = [
  {
    id: 'push-ups',
    name: 'Flexões',
    muscleGroup: ['chest', 'shoulders', 'triceps'],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    sets: 3,
    reps: '8-12',
    rest: 60,
    instructions: [
      'Posicione-se em prancha com as mãos na largura dos ombros',
      'Desça o corpo mantendo uma linha reta',
      'Empurre de volta à posição inicial'
    ],
    tips: [
      'Mantenha o core contraído',
      'Não deixe os quadris caírem',
      'Controle o movimento na descida'
    ],
    image: '/images/exercises/push-ups.jpg'
  },
  {
    id: 'squats',
    name: 'Agachamento',
    muscleGroup: ['legs', 'glutes'],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    sets: 3,
    reps: '12-15',
    rest: 60,
    instructions: [
      'Fique em pé com os pés na largura dos ombros',
      'Agache como se fosse sentar em uma cadeira',
      'Volte à posição inicial empurrando pelos calcanhares'
    ],
    tips: [
      'Mantenha o peito erguido',
      'Não deixe os joelhos passarem dos pés',
      'Desça até as coxas ficarem paralelas ao chão'
    ],
    image: '/images/exercises/squats.jpg'
  },
  {
    id: 'plank',
    name: 'Prancha',
    muscleGroup: ['core', 'shoulders'],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    sets: 3,
    reps: '30-60 seg',
    rest: 60,
    instructions: [
      'Apoie antebraços e pés no chão',
      'Mantenha o corpo em linha reta',
      'Segure a posição pelo tempo determinado'
    ],
    tips: [
      'Não deixe os quadris caírem',
      'Mantenha a respiração constante',
      'Contraia o abdômen'
    ],
    image: '/images/exercises/plank.jpg'
  }
]

export default function TrainingBuilder({ assessmentData, onPlanGenerated }: {
  assessmentData: AssessmentData
  onPlanGenerated: (plan: TrainingPlan) => void
}) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [generatedPlan, setGeneratedPlan] = useState<TrainingPlan | null>(null)
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null)

  const steps = [
    'Analisando dados',
    'Selecionando exercícios',
    'Criando cronograma',
    'Personalizando intensidade',
    'Finalizando plano'
  ]

  const generateTrainingPlan = async () => {
    setIsGenerating(true)
    
    // Simular processo de geração
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i)
      await fakeDelay(800)
    }

    // Gerar plano baseado na avaliação
    const plan = createPersonalizedPlan(assessmentData)
    setGeneratedPlan(plan)
    setIsGenerating(false)
    onPlanGenerated(plan)
  }

  const createPersonalizedPlan = (data: AssessmentData): TrainingPlan => {
    const { personalInfo, goals, experience, bodyComposition } = data
    
    // Determinar nível baseado na experiência
    const level = experience.level
    
    // Criar exercícios baseados no objetivo principal
    const selectedExercises = exercisesDatabase.filter(exercise => {
      if (goals.primary === 'gain_muscle') {
        return exercise.muscleGroup.some(mg => 
          Object.keys(bodyComposition.muscleGroups).includes(mg)
        )
      }
      return true // Para outros objetivos, incluir todos por enquanto
    })

    // Criar workouts
    const workouts: Workout[] = [
      {
        id: 'workout-1',
        name: 'Treino A - Upper Body',
        type: 'strength',
        duration: experience.availableTime,
        exercises: selectedExercises.slice(0, 4),
        calories: 250,
        difficulty: level,
        muscleGroups: ['chest', 'shoulders', 'arms'],
        equipment: ['bodyweight', 'dumbbells']
      },
      {
        id: 'workout-2',
        name: 'Treino B - Lower Body',
        type: 'strength',
        duration: experience.availableTime,
        exercises: selectedExercises.slice(1, 5),
        calories: 300,
        difficulty: level,
        muscleGroups: ['legs', 'glutes'],
        equipment: ['bodyweight', 'dumbbells']
      },
      {
        id: 'workout-3',
        name: 'Treino C - Full Body',
        type: 'functional',
        duration: experience.availableTime,
        exercises: selectedExercises,
        calories: 350,
        difficulty: level,
        muscleGroups: ['full_body'],
        equipment: ['bodyweight']
      }
    ]

    // Criar cronograma
    const schedule = Array.from({ length: 7 }, (_, day) => {
      if (day < experience.daysPerWeek) {
        return {
          day: day + 1,
          workoutId: workouts[day % workouts.length].id,
          type: 'workout' as const
        }
      }
      return {
        day: day + 1,
        workoutId: '',
        type: 'rest' as const
      }
    })

    return {
      id: 'generated-plan-1',
      name: `Plano Personalizado - ${goals.primary.replace('_', ' ').toUpperCase()}`,
      description: `Plano criado especialmente para você baseado em seus objetivos de ${goals.primary.replace('_', ' ')} com intensidade ${goals.intensity}.`,
      duration: parseInt(goals.timeline.split('_')[0]) || 12,
      level,
      goal: goals.primary,
      workouts,
      schedule,
      progress: Array.from({ length: 12 }, (_, week) => ({
        week: week + 1,
        completed: false,
        workoutsCompleted: 0,
        totalWorkouts: experience.daysPerWeek
      }))
    }
  }

  useEffect(() => {
    generateTrainingPlan()
  }, [])

  if (isGenerating) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-8">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Criando Seu Plano Personalizado</h2>
            <p className="text-gray-600">Isso pode levar alguns momentos...</p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: index <= currentStep ? 1 : 0.3,
                  x: 0
                }}
                className={`flex items-center p-4 rounded-lg ${
                  index <= currentStep ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  index < currentStep ? 'bg-green-500 text-white' : 
                  index === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300'
                }`}>
                  {index < currentStep ? (
                    <CheckCircle size={20} />
                  ) : index === currentStep ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`font-medium ${
                  index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!generatedPlan) return null

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{generatedPlan.name}</h1>
            <p className="text-blue-100 mb-4">{generatedPlan.description}</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{generatedPlan.duration} semanas</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={20} />
                <span className="capitalize">{generatedPlan.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Dumbbell size={20} />
                <span>{generatedPlan.workouts.length} treinos diferentes</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold mb-2">
              {Math.round(generatedPlan.workouts.reduce((acc, w) => acc + w.calories, 0) / generatedPlan.workouts.length)}
            </div>
            <div className="text-blue-100">Calorias/treino</div>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cronograma Semanal</h2>
        <div className="grid grid-cols-7 gap-4">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => {
            const scheduleItem = generatedPlan.schedule[index]
            const workout = scheduleItem.type === 'workout' 
              ? generatedPlan.workouts.find(w => w.id === scheduleItem.workoutId)
              : null

            return (
              <div
                key={day}
                className={`p-4 rounded-lg border-2 text-center cursor-pointer transition-all ${
                  workout
                    ? 'border-blue-200 bg-blue-50 hover:border-blue-300'
                    : 'border-gray-200 bg-gray-50'
                }`}
                onClick={() => workout && setSelectedWorkout(workout)}
              >
                <div className="font-semibold text-gray-900 mb-2">{day}</div>
                {workout ? (
                  <>
                    <div className="text-sm font-medium text-blue-700 mb-1">
                      {workout.name.split(' - ')[1]}
                    </div>
                    <div className="text-xs text-gray-600">
                      {workout.duration}min
                    </div>
                  </>
                ) : (
                  <div className="text-sm text-gray-500">Descanso</div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Workouts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {generatedPlan.workouts.map((workout) => (
          <motion.div
            key={workout.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedWorkout(workout)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{workout.name}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  workout.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                  workout.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {workout.difficulty.toUpperCase()}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duração:</span>
                  <span className="font-semibold">{workout.duration} min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Exercícios:</span>
                  <span className="font-semibold">{workout.exercises.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Calorias:</span>
                  <span className="font-semibold">{workout.calories}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {workout.muscleGroups.slice(0, 3).map((group) => (
                  <span
                    key={group}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                  >
                    {group}
                  </span>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Ver Detalhes
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
          <Play size={20} />
          Começar Plano
        </button>
        <button className="flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          <Download size={20} />
          Baixar PDF
        </button>
        <button className="flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          <Share2 size={20} />
          Compartilhar
        </button>
      </div>

      {/* Workout Detail Modal */}
      <AnimatePresence>
        {selectedWorkout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedWorkout(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedWorkout.name}</h2>
                  <button
                    onClick={() => setSelectedWorkout(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Clock size={24} className="mx-auto mb-2 text-blue-600" />
                    <div className="font-semibold">{selectedWorkout.duration} min</div>
                    <div className="text-sm text-gray-600">Duração</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Zap size={24} className="mx-auto mb-2 text-green-600" />
                    <div className="font-semibold">{selectedWorkout.calories}</div>
                    <div className="text-sm text-gray-600">Calorias</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Dumbbell size={24} className="mx-auto mb-2 text-purple-600" />
                    <div className="font-semibold">{selectedWorkout.exercises.length}</div>
                    <div className="text-sm text-gray-600">Exercícios</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Award size={24} className="mx-auto mb-2 text-orange-600" />
                    <div className="font-semibold capitalize">{selectedWorkout.difficulty}</div>
                    <div className="text-sm text-gray-600">Nível</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Exercícios</h3>
                  {selectedWorkout.exercises.map((exercise, index) => (
                    <div key={exercise.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{exercise.name}</h4>
                        <span className="text-sm text-gray-600">
                          {exercise.sets} x {exercise.reps}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Instruções:</h5>
                          <ol className="text-sm text-gray-600 space-y-1">
                            {exercise.instructions.map((instruction, i) => (
                              <li key={i}>{i + 1}. {instruction}</li>
                            ))}
                          </ol>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Dicas:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {exercise.tips.map((tip, i) => (
                              <li key={i}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}