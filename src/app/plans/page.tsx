'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Crown, 
  Star, 
  CheckCircle, 
  X,
  Zap,
  Target,
  Trophy,
  Users,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

const plans = [
  {
    id: 'basic',
    name: 'Básico',
    price: 0,
    period: 'Grátis',
    description: 'Ideal para começar sua jornada fitness',
    features: [
      'Avaliação inicial gratuita',
      'Acesso a treinos básicos',
      'Acompanhamento de progresso',
      'Suporte por e-mail',
      'Comunidade básica'
    ],
    limitations: [
      'Máximo 3 treinos por semana',
      'Sem personal trainer',
      'Sem planos personalizados',
      'Sem suporte prioritário'
    ],
    color: 'gray',
    icon: Target,
    popular: false
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 49.90,
    period: '/mês',
    description: 'Perfeito para resultados consistentes',
    features: [
      'Todos os recursos do Básico',
      'Treinos ilimitados',
      'Planos personalizados com IA',
      'Acompanhamento nutricional',
      'Suporte prioritário',
      'Biblioteca completa de exercícios',
      'Estatísticas avançadas',
      'Comunidade premium'
    ],
    limitations: [],
    color: 'blue',
    icon: Star,
    popular: true
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 99.90,
    period: '/mês',
    description: 'Máximo desempenho com acompanhamento exclusivo',
    features: [
      'Todos os recursos do Premium',
      'Personal trainer dedicado',
      'Consultas 1:1 semanais',
      'Plano nutricional personalizado',
      'Acesso antecipado a novos recursos',
      'Suporte 24/7',
      'Análise biomecânica',
      'Grupo VIP exclusivo',
      'Desconto em produtos da loja'
    ],
    limitations: [],
    color: 'purple',
    icon: Crown,
    popular: false
  }
]

const features = [
  {
    title: 'Treinos Personalizados',
    description: 'IA avançada cria treinos únicos baseados no seu perfil',
    icon: Target
  },
  {
    title: 'Acompanhamento 24/7',
    description: 'Monitore seu progresso em tempo real',
    icon: Clock
  },
  {
    title: 'Comunidade Ativa',
    description: 'Conecte-se com outros atletas e profissionais',
    icon: Users
  },
  {
    title: 'Resultados Garantidos',
    description: 'Metodologia comprovada para atingir seus objetivos',
    icon: Trophy
  }
]

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState('premium')
  const [billingCycle, setBillingCycle] = useState('monthly')
  const { user } = useAuthStore()

  const getDiscountedPrice = (price: number) => {
    return billingCycle === 'yearly' ? price * 10 : price // 2 meses grátis no anual
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Escolha Seu Plano Ideal
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Transforme seu corpo e mente com nossos planos personalizados. 
              Resultados garantidos ou seu dinheiro de volta.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={billingCycle === 'monthly' ? 'text-white' : 'text-blue-200'}>
                Mensal
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={billingCycle === 'yearly' ? 'text-white' : 'text-blue-200'}>
                Anual
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  20% OFF
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  🔥 Mais Popular
                </div>
              )}

              <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    plan.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    plan.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    <plan.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.price === 0 ? (
                      <div className="text-3xl font-bold text-gray-900">Grátis</div>
                    ) : (
                      <div>
                        <div className="text-3xl font-bold text-gray-900">
                          R$ {getDiscountedPrice(plan.price).toFixed(2)}
                          <span className="text-lg text-gray-600">{plan.period}</span>
                        </div>
                        {billingCycle === 'yearly' && plan.price > 0 && (
                          <div className="text-sm text-gray-500 line-through">
                            R$ {(plan.price * 12).toFixed(2)}/ano
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start gap-3">
                      <X className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-500 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.color === 'blue'
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : plan.color === 'purple'
                      ? 'bg-purple-500 text-white hover:bg-purple-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.price === 0 ? 'Começar Grátis' : 'Escolher Plano'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por que escolher o Muscle Levels?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Nossa plataforma oferece as ferramentas mais avançadas para você alcançar seus objetivos fitness.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600 text-sm">
                Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Há garantia de resultados?</h3>
              <p className="text-gray-600 text-sm">
                Oferecemos garantia de 30 dias. Se não estiver satisfeito, devolvemos seu dinheiro.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Posso alterar meu plano?</h3>
              <p className="text-gray-600 text-sm">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Que formas de pagamento aceitem?</h3>
              <p className="text-gray-600 text-sm">
                Aceitamos cartão de crédito, PIX, boleto bancário e PayPal.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl text-white p-8">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para transformar seu corpo?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já alcançaram seus objetivos com nossa plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Começar Agora
              </button>
              <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}