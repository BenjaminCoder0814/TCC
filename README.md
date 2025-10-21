# Muscle Levels - Aplicação Next.js + TypeScript

## 🚀 URLs de Produção

### **URL Principal do Deploy:**
**https://muscle-levels-q9z94mk1w-benjamins-projects-869ffeff.vercel.app**

### Links de Inspeção:
- **Vercel Dashboard:** https://vercel.com/benjamins-projects-869ffeff/muscle-levels

---

## 📱 Funcionalidades Implementadas

### ✅ Páginas Funcionais:
1. **Home Page (/)** - Landing page com hero carousel e seções de produtos
2. **Loja (/loja)** - Catálogo completo de produtos com filtros
3. **Carrinho (/carrinho)** - Sistema de carrinho de compras funcional
4. **Triagem (/triagem)** - Questionário de avaliação física
5. **Profissionais (/profissionais)** - Listagem de profissionais da saúde

### ✅ Componentes Principais:
- **Header** - Navegação responsiva com carrinho e favoritos
- **Footer** - Links e informações institucionais
- **HeroCarousel** - Carrossel principal com Swiper.js
- **ProductCard** - Cards de produtos com funcionalidades completas
- **ProfessionalCard** - Cards de profissionais
- **Carousels** - Componentes de carrossel reutilizáveis

### ✅ Sistema de Estado:
- **AuthContext** - Gerenciamento de autenticação
- **CartContext** - Carrinho de compras com persistência
- **FavoritesContext** - Sistema de favoritos

---

## 🛠️ Stack Tecnológica

- **Next.js 14.2.5** - App Router
- **TypeScript 5.x** - Tipagem estática
- **Tailwind CSS 3.4.3** - Estilização
- **Swiper.js** - Carrosséis interativos
- **React Context API** - Gerenciamento de estado
- **Vercel** - Deploy e hospedagem

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