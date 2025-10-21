# Muscle Levels - Plataforma Fitness Completa

🏋️‍♂️ **Sua jornada fitness começa aqui!**

## 🚀 Deploy Ativo

**URL de Produção:** [Em breve - será atualizado após deploy]

## 📋 Sobre o Projeto

Plataforma completa de fitness e bem-estar desenvolvida em Next.js 14 + TypeScript com:

- ✅ **Sistema de Login Obrigatório** - Modal de autenticação
- ✅ **Loja Completa** - 50+ produtos com filtros e carrinho
- ✅ **Sistema de Avaliação** - Triagem personalizada com recomendações
- ✅ **Gamificação** - Pontos, níveis e ranking
- ✅ **Profissionais** - Conecte-se com personal trainers
- ✅ **Carrosséis Interativos** - Swiper.js para navegação fluida

## 🛠️ Tecnologias

- **Next.js 14.2.5** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (design responsivo)
- **Swiper React** (carrosséis)
- **Context API** (gerenciamento de estado)
- **Font Awesome** (ícones)

## 🏃‍♂️ Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Executar em modo desenvolvimento
npm run dev

# 3. Abrir no navegador
http://localhost:3001
```

## 📱 Rotas Principais

- `/` - Home com carrosséis e produtos em destaque
- `/loja` - Loja com filtros por categoria
- `/carrinho` - Carrinho de compras com checkout PIX
- `/triagem` - Avaliação fitness personalizada
- `/profissionais` - Lista de personal trainers
- `/favoritos` - Produtos salvos
- `/ranking` - Sistema de pontuação

## 🎮 Funcionalidades de Gamificação

- **Pontos por ações:** Login (+50), Avaliação (+50-150), Navegação (+10/5min)
- **Níveis:** Iniciante → Intermediário → Avançado
- **Ranking:** Competição entre usuários

## 🛒 Sistema de E-commerce

- **Carrinho persistente** (localStorage)
- **Filtros avançados** por categoria, preço, avaliação
- **Sistema de favoritos**
- **Checkout simulado** com PIX
- **Cupons de desconto:** MUSCLE10 (10%), BULK20 (20% > R$200)

## 👤 Fluxo de Login

Para testar, use qualquer nome e email - o sistema aceita credenciais simuladas para demonstração.

## 📦 Estrutura do Projeto

```
src/
├── app/                 # Páginas (App Router)
├── components/          # Componentes reutilizáveis
├── contexts/           # Context API (Auth, Cart, Favorites)
├── lib/                # Dados mock e utilitários
└── types/              # Definições TypeScript
```

## 🚀 Scripts Disponíveis

- `npm run dev` - Desenvolvimento (porta 3001)
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

---

**Desenvolvido com 💪 para transformar sua jornada fitness!**