# 💪 MUSCLE LEVELS - Next.js 14 Fitness Platform

> **Plataforma profissional de fitness construída com Next.js 14, TypeScript e Tailwind CSS**

## 🚀 URLs de Produção

### **URL Principal:**
**https://muscle-levels-q9z94mk1w-benjamins-projects-869ffeff.vercel.app**

### **Acesso Local:**
**http://localhost:3001** (quando rodando localmente)

---

## ✨ Funcionalidades Implementadas

### 🏪 **E-commerce Completo:**
- **Loja (/shop)** - Catálogo com filtros por categoria
- **Produtos individuais** - Páginas detalhadas com variações
- **Carrinho** - Sistema completo com persistência
- **Favoritos** - Lista de produtos salvos
- **Checkout** - Processo de compra simulado

### 🏋️ **Fitness & Wellness:**
- **Assessment (/assessment)** - Avaliação física personalizada
- **Academias (/gyms)** - Directory com localização e serviços
- **Profissionais (/professionals)** - Perfis especializados
- **Ranking** - Sistema de pontuação e conquistas
- **Blog** - Artigos e dicas especializadas

### 👤 **Sistema de Usuário:**
- **Login (/login)** - Autenticação
- **Perfil (/profile)** - Dashboard pessoal
- **Planos** - Assinaturas e benefícios
- **Pontos** - Sistema de gamificação

---

## 🛠️ Stack Tecnológica

- **Next.js 14.2.5** - App Router com Server Components
- **TypeScript 5.x** - Tipagem estática completa
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Zustand** - Gerenciamento de estado moderno
- **Framer Motion** - Animações fluidas e performáticas
- **Embla Carousel** - Carrosséis nativos otimizados
- **Lucide React** - Ícones SVG modernos
- **Fuse.js** - Busca inteligente e fuzzy search

---

## 📁 Arquitetura do Projeto

```
src/
├── app/                    # Next.js 14 App Router
│   ├── shop/              # 🛒 E-commerce
│   │   ├── page.tsx       # Lista de produtos
│   │   └── product/[id]/  # Produto individual
│   ├── gyms/              # 🏋️ Academias
│   ├── assessment/        # 📊 Avaliação física
│   ├── profile/           # 👤 Perfil do usuário
│   ├── login/             # 🔐 Autenticação
│   └── ranking/           # 🏆 Sistema de ranking
├── components/            # Componentes React
│   ├── ProductCard.tsx    # Card de produto avançado
│   ├── InfiniteCarousel.tsx # Carrossel infinito
│   ├── AssessmentWizard.tsx # Wizard de avaliação
│   ├── HeroSlider.tsx     # Slider principal
│   └── TrainingBuilder.tsx # Construtor de treinos
├── stores/               # Zustand State Management
│   ├── cartStore.ts      # 🛒 Carrinho de compras
│   ├── authStore.ts      # 🔐 Autenticação
│   ├── favoritesStore.ts # ❤️ Favoritos
│   ├── pointsStore.ts    # 🎯 Sistema de pontos
│   └── chatStore.ts      # � Chat integrado
├── data/                 # Dados estruturados
│   ├── products.ts       # 🏷️ Catálogo de produtos
│   ├── gyms.ts          # 🏢 Base de academias
│   ├── professionals.ts  # 👨‍⚕️ Profissionais
│   └── blog.ts          # 📝 Artigos do blog
└── lib/                  # Utilitários e tipos
    ├── types.ts         # 📋 Definições TypeScript
    ├── search.ts        # 🔍 Engine de busca
    └── utils.ts         # 🛠️ Funções auxiliares
```

---

## 📦 Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
```

---

## 🗂️ Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── carrinho/          # Página do carrinho
│   ├── loja/              # Página da loja
│   ├── profissionais/     # Página de profissionais
│   ├── triagem/           # Página de triagem
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroCarousel.tsx
│   ├── ProductCard.tsx
│   ├── ProfessionalCard.tsx
│   └── Carousels.tsx
├── contexts/              # Context providers
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   └── FavoritesContext.tsx
└── lib/                   # Utilitários e dados
    └── mockData.ts        # Dados de exemplo
```

---

## 🎯 Recursos Avançados

### Responsividade:
- Design mobile-first
- Breakpoints otimizados
- Navegação adaptativa

### Performance:
- Build otimizado do Next.js
- Componentes com lazy loading
- Imagens otimizadas

### UX/UI:
- Animações com Tailwind
- Feedback visual em ações
- Estados de loading

---

## 📋 Checklist de Deploy

- ✅ Build de produção bem-sucedido
- ✅ Deploy no Vercel finalizado
- ✅ URLs públicas funcionais
- ✅ Todas as páginas carregando
- ✅ Navegação entre páginas
- ✅ Responsividade testada
- ✅ Carrosséis funcionando
- ✅ Sistema de carrinho ativo
- ✅ TypeScript sem erros

---

## 🔧 Comandos Úteis

```bash
# Verificar build
npm run build

# Análise de tipos
npm run type-check

# Deploy no Vercel
vercel --prod

# Conectar ao GitHub
git remote add origin <URL_DO_REPO>
git push -u origin main
```

---

## 📞 Contato e Suporte

Para dúvidas ou suporte técnico, consulte a documentação do projeto ou entre em contato com a equipe de desenvolvimento.

**Última atualização:** 21 de outubro de 2025