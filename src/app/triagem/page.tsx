'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { assessmentQuestions } from '@/lib/mockData';
import type { AssessmentResult } from '@/types';

export default function TriagemPage() {
  const router = useRouter();
  const { isAuthenticated, user, addPoints } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateResult = async () => {
    setIsCalculating(true);

    // Simular cálculo da avaliação
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Lógica simples de avaliação baseada nas respostas
    let level: 'Iniciante' | 'Intermediário' | 'Avançado' = 'Iniciante';
    let points = 50;

    const experience = answers.experience;
    const frequency = answers.frequency;
    const goals = answers.goals || [];

    if (experience === 'Avançado (mais de 2 anos)' || frequency === 'Todos os dias') {
      level = 'Avançado';
      points = 150;
    } else if (experience === 'Intermediário (6 meses - 2 anos)' || frequency === '5-6 vezes por semana') {
      level = 'Intermediário';
      points = 100;
    }

    const assessmentResult: AssessmentResult = {
      level,
      recommendations: {
        exercises: getExerciseRecommendations(level, goals),
        nutrition: getNutritionRecommendations(level, goals),
        professionals: getProfessionalRecommendations(level)
      },
      points
    };

    setResult(assessmentResult);
    setIsCompleted(true);
    setIsCalculating(false);

    // Adicionar pontos ao usuário
    if (isAuthenticated) {
      addPoints(points);
    }
  };

  const getExerciseRecommendations = (level: string, goals: string[]) => {
    const exercises = {
      'Iniciante': [
        'Caminhada 20-30 minutos',
        'Exercícios com peso corporal',
        'Alongamento e mobilidade',
        'Treino funcional básico'
      ],
      'Intermediário': [
        'Treino de força 3-4x por semana',
        'Cardio moderado 2-3x por semana',
        'Exercícios compostos',
        'Treino intervalado'
      ],
      'Avançado': [
        'Periodização de treinos',
        'Treinos específicos por grupo muscular',
        'HIIT avançado',
        'Técnicas avançadas de intensidade'
      ]
    };
    return exercises[level as keyof typeof exercises] || exercises['Iniciante'];
  };

  const getNutritionRecommendations = (level: string, goals: string[]) => {
    const hasWeightLoss = goals.includes('Perder peso');
    const hasMuscleGain = goals.includes('Ganhar massa muscular');

    const base = [
      'Hidratação adequada (2-3L água/dia)',
      'Refeições balanceadas a cada 3-4h',
      'Incluir proteínas em todas as refeições'
    ];

    if (hasWeightLoss) {
      base.push('Déficit calórico controlado', 'Aumentar consumo de fibras');
    }

    if (hasMuscleGain) {
      base.push('Superávit calórico moderado', 'Proteína 2g/kg peso corporal');
    }

    return base;
  };

  const getProfessionalRecommendations = (level: string) => {
    return [
      'Personal Trainer especializado',
      'Nutricionista esportivo',
      'Fisioterapeuta (prevenção)',
      'Acompanhamento médico regular'
    ];
  };

  const currentQuestion = assessmentQuestions[currentStep];
  const progress = ((currentStep + 1) / assessmentQuestions.length) * 100;

  if (!currentQuestion) {
    return null;
  }

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-cog fa-spin text-primary-500 text-3xl"></i>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Calculando seu perfil...
              </h2>
              
              <p className="text-gray-600 mb-6">
                Analisando suas respostas para criar um plano personalizado
              </p>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (isCompleted && result) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-trophy text-green-500 text-3xl"></i>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Avaliação Concluída!
              </h1>
              
              <p className="text-gray-600">
                Seu perfil fitness foi analisado com sucesso
              </p>

              {isAuthenticated && (
                <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full mt-4">
                  <i className="fas fa-star mr-2"></i>
                  +{result.points} pontos adicionados!
                </div>
              )}
            </div>

            {/* Level Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Seu Nível Fitness
                </h2>
                
                <div className={`inline-block px-8 py-4 rounded-full text-white text-xl font-bold ${
                  result.level === 'Iniciante' ? 'bg-green-500' :
                  result.level === 'Intermediário' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>
                  {result.level}
                </div>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  {result.level === 'Iniciante' && 'Você está começando sua jornada fitness! Foque em criar hábitos saudáveis e movimentos básicos.'}
                  {result.level === 'Intermediário' && 'Você já tem uma base sólida! É hora de intensificar e variar seus treinos.'}
                  {result.level === 'Avançado' && 'Parabéns! Você tem experiência avançada. Continue desafiando seus limites com técnicas específicas.'}
                </p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Exercise Recommendations */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="fas fa-dumbbell text-blue-500 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Exercícios Recomendados
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {result.recommendations.exercises.map((exercise, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span className="text-gray-700">{exercise}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutrition Recommendations */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="fas fa-apple-alt text-green-500 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Nutrição
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {result.recommendations.nutrition.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Recommendations */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="fas fa-user-md text-purple-500 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Profissionais
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {result.recommendations.professionals.map((professional, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                      <span className="text-gray-700">{professional}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/profissionais')}
                className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <i className="fas fa-user-md mr-2"></i>
                Encontrar Profissionais
              </button>
              
              <button
                onClick={() => router.push('/loja')}
                className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <i className="fas fa-store mr-2"></i>
                Ver Produtos Recomendados
              </button>

              <button
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({});
                  setIsCompleted(false);
                  setResult(null);
                }}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <i className="fas fa-redo mr-2"></i>
                Refazer Avaliação
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Avaliação Fitness Personalizada
            </h1>
            <p className="text-gray-600">
              Responda algumas perguntas para receber recomendações personalizadas
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Questão {currentStep + 1} de {assessmentQuestions.length}</span>
              <span>{Math.round(progress)}% concluído</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQuestion.question}
            </h2>

            {/* Question Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.type === 'radio' && currentQuestion.options?.map((option, index) => (
                <label key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option}
                    checked={answers[currentQuestion.id] === option}
                    onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                    className="mr-3 text-primary-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}

              {currentQuestion.type === 'checkbox' && currentQuestion.options?.map((option, index) => (
                <label key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    value={option}
                    checked={answers[currentQuestion.id]?.includes(option) || false}
                    onChange={(e) => {
                      const currentAnswers = answers[currentQuestion.id] || [];
                      if (e.target.checked) {
                        handleAnswer(currentQuestion.id, [...currentAnswers, option]);
                      } else {
                        handleAnswer(currentQuestion.id, currentAnswers.filter((a: string) => a !== option));
                      }
                    }}
                    className="mr-3 text-primary-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}

              {currentQuestion.type === 'scale' && (
                <div className="flex justify-between items-center p-4">
                  <span className="text-gray-600">1 (Baixo)</span>
                  <div className="flex space-x-2">
                    {[...Array(10)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handleAnswer(currentQuestion.id, index + 1)}
                        className={`w-10 h-10 rounded-full border-2 font-semibold transition-colors ${
                          answers[currentQuestion.id] === index + 1
                            ? 'bg-primary-500 text-white border-primary-500'
                            : 'border-gray-300 text-gray-600 hover:border-primary-300'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <span className="text-gray-600">10 (Alto)</span>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Anterior
              </button>

              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id] || (currentQuestion.type === 'checkbox' && (!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0))}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {currentStep === assessmentQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
                <i className={`fas ${currentStep === assessmentQuestions.length - 1 ? 'fa-check' : 'fa-arrow-right'} ml-2`}></i>
              </button>
            </div>
          </div>

          {/* Benefits */}
          {!isAuthenticated && (
            <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <i className="fas fa-info-circle text-primary-500 mr-2"></i>
                <h3 className="font-semibold text-primary-800">Dica</h3>
              </div>
              <p className="text-primary-700">
                Faça login para salvar seus resultados e ganhar pontos no ranking!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}