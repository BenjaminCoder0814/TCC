'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-dumbbell text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold text-white">
                Muscle Levels
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Sua jornada fitness começa aqui. Encontre produtos, profissionais e 
              conquiste seus objetivos com nossa plataforma completa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/loja" className="text-gray-400 hover:text-white transition-colors">
                  Loja
                </Link>
              </li>
              <li>
                <Link href="/profissionais" className="text-gray-400 hover:text-white transition-colors">
                  Profissionais
                </Link>
              </li>
              <li>
                <Link href="/triagem" className="text-gray-400 hover:text-white transition-colors">
                  Avaliação Física
                </Link>
              </li>
              <li>
                <Link href="/ranking" className="text-gray-400 hover:text-white transition-colors">
                  Ranking
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/loja?categoria=suplementos" className="text-gray-400 hover:text-white transition-colors">
                  Suplementos
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=equipamentos" className="text-gray-400 hover:text-white transition-colors">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=roupas" className="text-gray-400 hover:text-white transition-colors">
                  Roupas Esportivas
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=acessorios" className="text-gray-400 hover:text-white transition-colors">
                  Acessórios
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <i className="fas fa-phone text-primary-500"></i>
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <i className="fas fa-envelope text-primary-500"></i>
                <span>contato@musclelevels.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <i className="fas fa-map-marker-alt text-primary-500"></i>
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">
                Receba nossas novidades
              </h3>
              <p className="text-gray-400">
                Fique por dentro das últimas tendências em fitness
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-primary-500 text-white"
              />
              <button className="bg-primary-500 text-white px-6 py-2 rounded-r-lg hover:bg-primary-600 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Muscle Levels. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <img src="/icons/payment-visa.png" alt="Visa" className="h-8 opacity-60" />
            <img src="/icons/payment-mastercard.png" alt="Mastercard" className="h-8 opacity-60" />
            <img src="/icons/payment-pix.png" alt="PIX" className="h-8 opacity-60" />
            <img src="/icons/payment-boleto.png" alt="Boleto" className="h-8 opacity-60" />
          </div>
        </div>
      </div>
    </footer>
  );
}