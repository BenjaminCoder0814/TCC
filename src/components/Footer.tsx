'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              MUSCLE LEVELS
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Sua plataforma completa para transformação física. Conectamos você aos melhores profissionais, produtos e conhecimento do mundo fitness.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/assessment" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Avaliação Física
                </Link>
              </li>
              <li>
                <Link 
                  href="/professionals" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Profissionais
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Loja
                </Link>
              </li>
              <li>
                <Link 
                  href="/gyms" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Academias Parceiras
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/ranking" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Ranking
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/help" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Entrega e Frete
                </Link>
              </li>
              <li>
                <Link 
                  href="/returns" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link 
                  href="/warranty" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Garantia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Engenheiro Coelho, SP<br />
                  Brasil
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  (19) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  contato@musclelevels.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Receba dicas e ofertas exclusivas
              </p>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <p>
                © {currentYear} Muscle Levels. Todos os direitos reservados.
              </p>
              <p className="flex items-center justify-center lg:justify-start mt-1">
                Feito com <Heart className="w-4 h-4 text-red-500 mx-1" /> para transformar vidas
              </p>
            </div>

            {/* Links Legais */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Selo de Segurança e Certificações */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Site 100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  🔒
                </div>
                <span>SSL Certificado</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  ⭐
                </div>
                <span>Avaliação 4.9/5</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-500">
              Muscle Levels - CNPJ: 00.000.000/0001-00
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}