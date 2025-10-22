'use client'

import HeroSlider from '@/components/HeroSlider'
import { 
  FeaturedProductsCarousel,
  SupplementsCarousel,
  EquipmentCarousel,
  ApparelCarousel
} from '@/components/InfiniteCarousel'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Zap, 
  Users, 
  Trophy, 
  Star,
  ArrowRight,
  Play,
  Award,
  Target,
  Dumbbell,
  Heart
} from 'lucide-react'

const statsData = [
  {
    icon: Users,
    value: "50K+",
    label: "Usuários Ativos",
    color: "text-blue-500"
  },
  {
    icon: Trophy,
    value: "1M+",
    label: "Treinos Realizados",
    color: "text-purple-500"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Avaliação Média",
    color: "text-yellow-500"
  },
  {
    icon: Award,
    value: "500+",
    label: "Profissionais Certificados",
    color: "text-green-500"
  }
]

const featuresData = [
  {
    icon: Target,
    title: "Avaliação Precisa",
    description: "Sistema de IA analisa seu nível muscular e cria treinos personalizados para seus objetivos específicos."
  },
  {
    icon: Dumbbell,
    title: "Treinos Inteligentes",
    description: "Programas adaptativos que evoluem com seu progresso, garantindo resultados constantes."
  },
  {
    icon: Users,
    title: "Profissionais Elite",
    description: "Conecte-se com treinadores certificados e nutricionistas especializados em sua região."
  },
  {
    icon: Heart,
    title: "Acompanhamento Total",
    description: "Monitore seu progresso, medidas corporais e evolução com gráficos detalhados."
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  <stat.icon size={48} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Muscle Levels?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A plataforma mais completa para transformar seu corpo e alcançar seus objetivos fitness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <FeaturedProductsCarousel />
        </div>
      </section>

      {/* CTA Section - Assessment */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Descubra Seu Nível Muscular
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Faça nossa avaliação gratuita e receba um plano de treino personalizado em 5 minutos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/assessment"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Zap size={24} />
                Fazer Avaliação Gratuita
              </Link>
              <Link 
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Play size={24} />
                Ver Demo
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,100 100,0 100,100" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          <SupplementsCarousel />
          <EquipmentCarousel />
          <ApparelCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 50.000 pessoas já transformaram seus corpos conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Empresário",
                image: "/images/testimonials/user1.jpg",
                text: "Em 6 meses consegui definir meu corpo como nunca imaginei. O sistema de avaliação é incrível!",
                rating: 5
              },
              {
                name: "Ana Paula",
                role: "Nutricionista",
                image: "/images/testimonials/user2.jpg",
                text: "Uso o Muscle Levels com meus clientes. A precisão dos treinos personalizados é impressionante.",
                rating: 5
              },
              {
                name: "Rafael Costa",
                role: "Personal Trainer",
                image: "/images/testimonials/user3.jpg",
                text: "A melhor plataforma para profissionais. Meus alunos adoram o acompanhamento detalhado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já alcançaram seus objetivos com nossa plataforma
          </p>
          <Link 
            href="/register"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Começar Agora Grátis
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </main>
  )
}