'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCarousel from '@/components/ProductCarousel';
import ProfessionalCarousel from '@/components/ProfessionalCarousel';
import { generateMockProducts, generateMockProfessionals } from '@/lib/mockData';
import type { Product, Professional } from '@/types';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Gerar dados mock
    const mockProducts = generateMockProducts();
    const mockProfessionals = generateMockProfessionals();
    
    setProducts(mockProducts);
    setProfessionals(mockProfessionals);
    setFeaturedProducts(mockProducts.filter(p => p.featured));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroCarousel />

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Produtos em Destaque
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubra os produtos mais vendidos e bem avaliados da nossa loja
              </p>
            </div>
            
            <ProductCarousel products={featuredProducts} />
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore por Categoria
              </h2>
              <p className="text-gray-600">
                Encontre exatamente o que você precisa
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Suplementos', icon: 'fas fa-pills', color: 'bg-blue-500', count: products.filter(p => p.category === 'suplementos').length },
                { name: 'Equipamentos', icon: 'fas fa-dumbbell', color: 'bg-green-500', count: products.filter(p => p.category === 'equipamentos').length },
                { name: 'Roupas', icon: 'fas fa-tshirt', color: 'bg-purple-500', count: products.filter(p => p.category === 'roupas').length },
                { name: 'Acessórios', icon: 'fas fa-watch', color: 'bg-orange-500', count: products.filter(p => p.category === 'acessorios').length }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <i className={`${category.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count} produtos</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Professionals */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Profissionais Recomendados
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conecte-se com os melhores profissionais da área fitness
              </p>
            </div>
            
            <ProfessionalCarousel professionals={professionals.slice(0, 8)} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-orange-100">Produtos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-orange-100">Profissionais</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-orange-100">Usuários</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8</div>
                <div className="text-orange-100">Avaliação</div>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Por que escolher o Muscle Levels?
              </h2>
              <p className="text-gray-600">
                Tudo que você precisa para sua jornada fitness em um só lugar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-trophy text-primary-500 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sistema de Gamificação</h3>
                <p className="text-gray-600">
                  Ganhe pontos, suba de nível e compete com outros usuários
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-md text-primary-500 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Profissionais Qualificados</h3>
                <p className="text-gray-600">
                  Conecte-se com personal trainers e nutricionistas certificados
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-primary-500 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Avaliação Personalizada</h3>
                <p className="text-gray-600">
                  Receba recomendações baseadas no seu perfil e objetivos
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}