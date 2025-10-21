'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import LoginModal from './LoginModal';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    }
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-dumbbell text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold text-gradient-primary">
                Muscle Levels
              </span>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/loja" className="text-gray-700 hover:text-primary-500 transition-colors">
                Loja
              </Link>
              <Link href="/profissionais" className="text-gray-700 hover:text-primary-500 transition-colors">
                Profissionais
              </Link>
              <Link href="/triagem" className="text-gray-700 hover:text-primary-500 transition-colors">
                Avaliação
              </Link>
              <Link href="/ranking" className="text-gray-700 hover:text-primary-500 transition-colors">
                Ranking
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary-500 transition-colors">
                Blog
              </Link>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>

              {/* Cart */}
              <Link href="/carrinho" className="relative">
                <i className="fas fa-shopping-cart text-gray-700 text-xl hover:text-primary-500 transition-colors"></i>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Favorites */}
              <Link href="/favoritos" className="hidden md:block">
                <i className="fas fa-heart text-gray-700 text-xl hover:text-primary-500 transition-colors"></i>
              </Link>

              {/* User Menu */}
              {isAuthenticated && user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-2 focus:outline-none"
                  >
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <span className="hidden md:block text-gray-700 font-medium">
                      {user.name}
                    </span>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                      {user.points} pts
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                      <Link
                        href="/perfil"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <i className="fas fa-user mr-2"></i>
                        Meu Perfil
                      </Link>
                      <Link
                        href="/meus-pedidos"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <i className="fas fa-box mr-2"></i>
                        Meus Pedidos
                      </Link>
                      <Link
                        href="/configuracoes"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <i className="fas fa-cog mr-2"></i>
                        Configurações
                      </Link>
                      <hr className="my-1" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                      >
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        Sair
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Entrar
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars text-gray-700 text-xl"></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/loja"
                  className="text-gray-700 hover:text-primary-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Loja
                </Link>
                <Link
                  href="/profissionais"
                  className="text-gray-700 hover:text-primary-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profissionais
                </Link>
                <Link
                  href="/triagem"
                  className="text-gray-700 hover:text-primary-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Avaliação
                </Link>
                <Link
                  href="/ranking"
                  className="text-gray-700 hover:text-primary-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ranking
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-primary-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}