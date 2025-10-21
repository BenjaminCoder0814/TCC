import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '/', icon: 'home' },
    { name: 'Análise IA', href: '/triagem', icon: 'analysis' },
    { name: 'Loja', href: '/loja', icon: 'shop' },
    { name: 'Profissionais', href: '/profissionais', icon: 'professionals' },
    { name: 'Blog', href: '/blog', icon: 'blog' },
    { name: 'Planos', href: '/planos', icon: 'plans' }
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      home: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
      analysis: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,
      shop: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>`,
      professionals: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`,
      blog: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
      plans: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`
    };
    return icons[iconName] || '';
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <span className="mr-2">🎯</span>
              <span className="hidden sm:inline">Mais de 250k vidas transformadas</span>
              <span className="sm:hidden">250k+ transformados</span>
            </span>
            <span className="hidden md:flex items-center">
              <span className="mr-2">⚡</span>
              Resultados em 7 dias
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/contato" className="hover:text-blue-200 transition-colors">📞 Suporte 24/7</a>
            <a href="/app" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full text-xs font-semibold transition-colors">
              📱 App Mobile
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-lg shadow-xl border-b border-gray-200' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">ML</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <div className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MUSCLE</span>
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">LEVELS</span>
                </div>
                <div className="text-xs text-gray-500 font-medium">Powered by AI</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    currentPage === item.href
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-md'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <span dangerouslySetInnerHTML={{ __html: getIcon(item.icon) }} />
                  <span>{item.name}</span>
                  {currentPage === item.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  )}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="hidden md:flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl transition-colors text-gray-600 hover:text-gray-800">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm">Buscar</span>
              </button>

              {/* User Actions */}
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="/login"
                  className="text-gray-700 hover:text-blue-600 font-semibold px-4 py-2 rounded-xl transition-colors"
                >
                  Entrar
                </a>
                <a
                  href="/triagem"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  🎯 Começar Grátis
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-6 animate-fadeIn">
              <div className="space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      currentPage === item.href
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span dangerouslySetInnerHTML={{ __html: getIcon(item.icon) }} />
                    <span>{item.name}</span>
                  </a>
                ))}
                
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <a
                    href="/login"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    👤 Entrar na Conta
                  </a>
                  <a
                    href="/triagem"
                    className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    🎯 Começar Análise Grátis
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}