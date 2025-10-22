import { Product } from '../lib/types';

export const PRODUCTS: Product[] = [
  {
    id: 'p-shirt-ml',
    slug: 'camiseta-muscle-levels-dry',
    title: 'Camiseta Muscle Levels Dry-Fit',
    description: 'Tecido dry-fit premium, respirável e leve.',
    price: 99.9,
    discountPrice: 79.9,
    category: 'roupas',
    rating: 4.6,
    reviewsCount: 48,
    badges: ['-20%'],
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.3,
    options: { sizes: ['P','M','G','GG'], colors: ['Preta','Azul'] }
  },
  {
    id: 'p-tank-ml',
    slug: 'regata-muscle-levels-pro',
    title: 'Regata Muscle Levels Pro',
    description: 'Regata masculina para treino intenso, tecido respirável.',
    price: 79.9,
    discountPrice: 59.9,
    category: 'roupas',
    rating: 4.5,
    reviewsCount: 32,
    badges: ['-25%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.2,
    options: { sizes: ['P','M','G','GG'], colors: ['Cinza','Preta'] }
  },
  {
    id: 'p-shorts-ml',
    slug: 'shorts-muscle-levels-training',
    title: 'Shorts Muscle Levels Training',
    description: 'Shorts para treino com tecnologia anti-odor.',
    price: 89.9,
    category: 'roupas',
    rating: 4.7,
    reviewsCount: 67,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1506629905607-89b8e8171b73?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.25,
    options: { sizes: ['P','M','G','GG'], colors: ['Preta','Azul marinho'] }
  },
  {
    id: 'p-legging-ml',
    slug: 'legging-muscle-levels-fit',
    title: 'Legging Muscle Levels Fit',
    description: 'Legging feminina de alta compressão para máximo desempenho.',
    price: 129.9,
    discountPrice: 99.9,
    category: 'roupas',
    rating: 4.8,
    reviewsCount: 89,
    badges: ['-23%'],
    images: [
      'https://images.unsplash.com/photo-1506629905607-89b8e8171b73?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.3,
    options: { sizes: ['P','M','G'], colors: ['Preta','Grafite','Rosa'] }
  },
  {
    id: 'p-top-ml',
    slug: 'top-muscle-levels-sport',
    title: 'Top Muscle Levels Sport',
    description: 'Top esportivo com suporte médio, ideal para treinos.',
    price: 79.9,
    category: 'roupas',
    rating: 4.4,
    reviewsCount: 54,
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.15,
    options: { sizes: ['P','M','G'], colors: ['Preta','Branca','Rosa'] }
  },
  {
    id: 'p-garrafa-ml',
    slug: 'garrafa-muscle-levels-1l',
    title: 'Garrafa Muscle Levels 1L',
    description: 'Garrafa térmica de aço inoxidável, mantém temperatura por 12h.',
    price: 159.9,
    discountPrice: 119.9,
    category: 'acessorios',
    rating: 4.9,
    reviewsCount: 156,
    badges: ['-25%', 'BESTSELLER'],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.8,
    options: { colors: ['Preta','Azul','Rosa'] }
  },
  {
    id: 'p-luva-ml',
    slug: 'luva-muscle-levels-grip',
    title: 'Luva Muscle Levels Grip',
    description: 'Luvas para musculação com aderência superior e proteção.',
    price: 69.9,
    category: 'acessorios',
    rating: 4.3,
    reviewsCount: 78,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.2,
    options: { sizes: ['P','M','G'], colors: ['Preta','Azul'] }
  },
  {
    id: 'p-faixa-ml',
    slug: 'faixa-resistencia-muscle-levels',
    title: 'Faixa de Resistência Muscle Levels',
    description: 'Kit com 3 faixas de resistência diferentes para treino em casa.',
    price: 89.9,
    discountPrice: 69.9,
    category: 'equipamentos',
    rating: 4.6,
    reviewsCount: 234,
    badges: ['-22%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.5,
    options: { colors: ['Kit Colorido'] }
  },
  {
    id: 'p-halter-5kg',
    slug: 'halter-muscle-levels-5kg',
    title: 'Halter Muscle Levels 5kg (Par)',
    description: 'Par de halteres de 5kg com revestimento emborrachado.',
    price: 189.9,
    category: 'equipamentos',
    rating: 4.7,
    reviewsCount: 123,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 10.0,
    options: { colors: ['Preto','Azul'] }
  },
  {
    id: 'p-whey-ml',
    slug: 'whey-protein-muscle-levels-900g',
    title: 'Whey Protein Muscle Levels 900g',
    description: 'Whey protein concentrado com 25g de proteína por dose.',
    price: 179.9,
    discountPrice: 149.9,
    category: 'suplementos',
    rating: 4.8,
    reviewsCount: 567,
    badges: ['-17%', 'NOVO'],
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 1.0,
    options: { colors: ['Chocolate','Baunilha','Morango'] }
  },
  {
    id: 'p-creatina-ml',
    slug: 'creatina-muscle-levels-300g',
    title: 'Creatina Muscle Levels 300g',
    description: 'Creatina monoidratada pura, sem sabor, alta qualidade.',
    price: 89.9,
    category: 'suplementos',
    rating: 4.9,
    reviewsCount: 345,
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.4,
  },
  {
    id: 'p-bcaa-ml',
    slug: 'bcaa-muscle-levels-120caps',
    title: 'BCAA Muscle Levels 120 Cápsulas',
    description: 'BCAA 2:1:1 em cápsulas para recuperação muscular.',
    price: 119.9,
    discountPrice: 99.9,
    category: 'suplementos',
    rating: 4.5,
    reviewsCount: 234,
    badges: ['-17%'],
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.3,
  },
  {
    id: 'p-tapete-yoga',
    slug: 'tapete-yoga-muscle-levels',
    title: 'Tapete de Yoga Muscle Levels',
    description: 'Tapete antiderrapante para yoga e alongamento, 6mm de espessura.',
    price: 149.9,
    discountPrice: 119.9,
    category: 'equipamentos',
    rating: 4.4,
    reviewsCount: 89,
    badges: ['-20%'],
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 1.2,
    options: { colors: ['Roxo','Azul','Verde'] }
  },
  {
    id: 'p-mochila-ml',
    slug: 'mochila-muscle-levels-gym',
    title: 'Mochila Muscle Levels Gym',
    description: 'Mochila esportiva com compartimento para tênis e garrafa.',
    price: 199.9,
    category: 'acessorios',
    rating: 4.6,
    reviewsCount: 167,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.8,
    options: { colors: ['Preta','Cinza','Azul'] }
  },
  {
    id: 'p-corda-pular',
    slug: 'corda-pular-muscle-levels',
    title: 'Corda de Pular Muscle Levels',
    description: 'Corda de pular profissional com cabo de aço e punhos ergonômicos.',
    price: 59.9,
    discountPrice: 39.9,
    category: 'equipamentos',
    rating: 4.7,
    reviewsCount: 198,
    badges: ['-33%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.3,
    options: { colors: ['Preta','Vermelha'] }
  },
  {
    id: 'p-bola-suica',
    slug: 'bola-suica-muscle-levels-65cm',
    title: 'Bola Suíça Muscle Levels 65cm',
    description: 'Bola de pilates anti-burst, suporta até 300kg.',
    price: 89.9,
    category: 'equipamentos',
    rating: 4.5,
    reviewsCount: 112,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 1.5,
    options: { colors: ['Azul','Cinza','Rosa'] }
  },
  {
    id: 'p-straps-ml',
    slug: 'straps-muscle-levels-lifting',
    title: 'Straps Muscle Levels Lifting',
    description: 'Straps para levantamento de peso, material resistente.',
    price: 49.9,
    category: 'acessorios',
    rating: 4.8,
    reviewsCount: 76,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.2,
    options: { colors: ['Preto','Azul'] }
  },
  {
    id: 'p-cinto-ml',
    slug: 'cinto-muscle-levels-powerlifting',
    title: 'Cinto Muscle Levels Powerlifting',
    description: 'Cinto de couro legítimo para levantamento pesado.',
    price: 299.9,
    discountPrice: 249.9,
    category: 'acessorios',
    rating: 4.9,
    reviewsCount: 89,
    badges: ['-17%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 1.0,
    options: { sizes: ['P','M','G','GG'], colors: ['Preto','Marrom'] }
  },
  {
    id: 'p-tenis-ml',
    slug: 'tenis-muscle-levels-training',
    title: 'Tênis Muscle Levels Training',
    description: 'Tênis para treino funcional com amortecimento e estabilidade.',
    price: 399.9,
    discountPrice: 319.9,
    category: 'acessorios',
    rating: 4.6,
    reviewsCount: 145,
    badges: ['-20%'],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.8,
    options: { sizes: ['37','38','39','40','41','42','43','44'], colors: ['Preto','Branco','Azul'] }
  },
  {
    id: 'p-glutamina-ml',
    slug: 'glutamina-muscle-levels-300g',
    title: 'Glutamina Muscle Levels 300g',
    description: 'L-Glutamina pura para recuperação e sistema imunológico.',
    price: 79.9,
    category: 'suplementos',
    rating: 4.4,
    reviewsCount: 167,
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.4,
  },
  {
    id: 'p-multivitaminico',
    slug: 'multivitaminico-muscle-levels',
    title: 'Multivitamínico Muscle Levels',
    description: 'Complexo vitamínico completo para atletas, 60 cápsulas.',
    price: 99.9,
    discountPrice: 79.9,
    category: 'suplementos',
    rating: 4.7,
    reviewsCount: 234,
    badges: ['-20%'],
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.2,
  },
  {
    id: 'p-termogenico',
    slug: 'termogenico-muscle-levels-60caps',
    title: 'Termogênico Muscle Levels 60 Cápsulas',
    description: 'Termogênico natural para acelerar o metabolismo.',
    price: 149.9,
    discountPrice: 119.9,
    category: 'suplementos',
    rating: 4.3,
    reviewsCount: 198,
    badges: ['-20%'],
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.2,
  },
  {
    id: 'p-toalha-ml',
    slug: 'toalha-muscle-levels-gym',
    title: 'Toalha Muscle Levels Gym',
    description: 'Toalha de microfibra para academia, absorção rápida.',
    price: 39.9,
    category: 'acessorios',
    rating: 4.5,
    reviewsCount: 89,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.3,
    options: { colors: ['Azul','Cinza','Preta'] }
  },
  {
    id: 'p-kit-elastico',
    slug: 'kit-elasticos-muscle-levels',
    title: 'Kit Elásticos Muscle Levels',
    description: 'Kit completo com 5 elásticos de resistência variada.',
    price: 129.9,
    discountPrice: 99.9,
    category: 'equipamentos',
    rating: 4.8,
    reviewsCount: 156,
    badges: ['-23%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 1.0,
  },
  {
    id: 'p-shaker-ml',
    slug: 'shaker-muscle-levels-600ml',
    title: 'Shaker Muscle Levels 600ml',
    description: 'Shaker com misturador em mola, livre de BPA.',
    price: 49.9,
    discountPrice: 34.9,
    category: 'acessorios',
    rating: 4.6,
    reviewsCount: 234,
    badges: ['-30%'],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.3,
    options: { colors: ['Preto','Azul','Vermelho'] }
  },
  {
    id: 'p-booster-pre',
    slug: 'pre-treino-muscle-levels-300g',
    title: 'Pré-Treino Muscle Levels 300g',
    description: 'Pré-treino com cafeína, beta-alanina e arginina.',
    price: 159.9,
    discountPrice: 129.9,
    category: 'suplementos',
    rating: 4.7,
    reviewsCount: 287,
    badges: ['-19%'],
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.4,
    options: { colors: ['Frutas Vermelhas','Limão','Uva'] }
  },
  {
    id: 'p-coqueteleira',
    slug: 'coqueteleira-muscle-levels-smart',
    title: 'Coqueteleira Muscle Levels Smart',
    description: 'Coqueteleira elétrica para shakes perfeitos.',
    price: 189.9,
    category: 'acessorios',
    rating: 4.4,
    reviewsCount: 67,
    badges: ['NOVO'],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.8,
    options: { colors: ['Preto','Branco'] }
  },
  {
    id: 'p-proteina-vegana',
    slug: 'proteina-vegana-muscle-levels-600g',
    title: 'Proteína Vegana Muscle Levels 600g',
    description: 'Proteína vegetal de ervilha e arroz, sabor chocolate.',
    price: 199.9,
    discountPrice: 159.9,
    category: 'suplementos',
    rating: 4.5,
    reviewsCount: 123,
    badges: ['-20%', 'VEGANO'],
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.7,
    options: { colors: ['Chocolate','Baunilha'] }
  },
  {
    id: 'p-omega3-ml',
    slug: 'omega3-muscle-levels-120caps',
    title: 'Ômega 3 Muscle Levels 120 Cápsulas',
    description: 'Ômega 3 concentrado, rico em EPA e DHA.',
    price: 89.9,
    category: 'suplementos',
    rating: 4.8,
    reviewsCount: 178,
    images: [
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.3,
  },
  {
    id: 'p-munhequeira',
    slug: 'munhequeira-muscle-levels-neoprene',
    title: 'Munhequeira Muscle Levels Neoprene',
    description: 'Par de munhequeiras de neoprene para suporte e proteção.',
    price: 59.9,
    discountPrice: 39.9,
    category: 'acessorios',
    rating: 4.3,
    reviewsCount: 89,
    badges: ['-33%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.2,
    options: { sizes: ['P','M','G'], colors: ['Preto','Azul'] }
  },
  {
    id: 'p-joelheira',
    slug: 'joelheira-muscle-levels-compressao',
    title: 'Joelheira Muscle Levels Compressão',
    description: 'Joelheira de compressão para suporte durante exercícios.',
    price: 79.9,
    category: 'acessorios',
    rating: 4.6,
    reviewsCount: 134,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.3,
    options: { sizes: ['P','M','G'], colors: ['Preto','Azul'] }
  },
  {
    id: 'p-step-ml',
    slug: 'step-muscle-levels-aerobico',
    title: 'Step Muscle Levels Aeróbico',
    description: 'Step regulável para exercícios aeróbicos e funcionais.',
    price: 179.9,
    discountPrice: 139.9,
    category: 'equipamentos',
    rating: 4.5,
    reviewsCount: 67,
    badges: ['-22%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 3.5,
    options: { colors: ['Azul','Cinza'] }
  },
  {
    id: 'p-kettlebell-8kg',
    slug: 'kettlebell-muscle-levels-8kg',
    title: 'Kettlebell Muscle Levels 8kg',
    description: 'Kettlebell de ferro fundido com acabamento premium.',
    price: 229.9,
    category: 'equipamentos',
    rating: 4.9,
    reviewsCount: 89,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 8.0,
    options: { colors: ['Preto'] }
  },
  {
    id: 'p-barras-paralelas',
    slug: 'barras-paralelas-muscle-levels',
    title: 'Barras Paralelas Muscle Levels',
    description: 'Par de barras paralelas para flexões e exercícios funcionais.',
    price: 159.9,
    discountPrice: 119.9,
    category: 'equipamentos',
    rating: 4.7,
    reviewsCount: 98,
    badges: ['-25%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 2.0,
    options: { colors: ['Preto','Cinza'] }
  },
  {
    id: 'p-colchonete-ml',
    slug: 'colchonete-muscle-levels-pilates',
    title: 'Colchonete Muscle Levels Pilates',
    description: 'Colchonete de NBR 10mm para pilates e alongamento.',
    price: 99.9,
    discountPrice: 79.9,
    category: 'equipamentos',
    rating: 4.4,
    reviewsCount: 145,
    badges: ['-20%'],
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.8,
    options: { colors: ['Azul','Rosa','Verde'] }
  },
  {
    id: 'p-disco-5kg',
    slug: 'disco-muscle-levels-5kg',
    title: 'Disco Muscle Levels 5kg',
    description: 'Disco de ferro fundido com revestimento emborrachado.',
    price: 149.9,
    category: 'equipamentos',
    rating: 4.8,
    reviewsCount: 67,
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 5.0,
    options: { colors: ['Preto'] }
  },
  {
    id: 'p-rolo-massagem',
    slug: 'rolo-massagem-muscle-levels',
    title: 'Rolo de Massagem Muscle Levels',
    description: 'Rolo de espuma para automassagem e liberação miofascial.',
    price: 119.9,
    discountPrice: 89.9,
    category: 'acessorios',
    rating: 4.6,
    reviewsCount: 178,
    badges: ['-25%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 0.8,
    options: { colors: ['Azul','Preto','Verde'] }
  },
  {
    id: 'p-bicicleta-ergometrica',
    slug: 'bicicleta-ergometrica-muscle-levels',
    title: 'Bicicleta Ergométrica Muscle Levels',
    description: 'Bicicleta ergométrica dobrável com 8 níveis de resistência.',
    price: 1299.9,
    discountPrice: 999.9,
    category: 'equipamentos',
    rating: 4.5,
    reviewsCount: 45,
    badges: ['-23%', 'FRETE GRÁTIS'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 25.0,
    options: { colors: ['Preto','Branco'] }
  },
  {
    id: 'p-esteira-eletrica',
    slug: 'esteira-eletrica-muscle-levels',
    title: 'Esteira Elétrica Muscle Levels',
    description: 'Esteira elétrica dobrável com inclinação e velocidade ajustáveis.',
    price: 2499.9,
    discountPrice: 1999.9,
    category: 'equipamentos',
    rating: 4.7,
    reviewsCount: 67,
    badges: ['-20%', 'FRETE GRÁTIS'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 50.0,
    options: { colors: ['Preto'] }
  },
  {
    id: 'p-banco-supino',
    slug: 'banco-supino-muscle-levels',
    title: 'Banco de Supino Muscle Levels',
    description: 'Banco regulável para supino e exercícios com halteres.',
    price: 899.9,
    discountPrice: 699.9,
    category: 'equipamentos',
    rating: 4.8,
    reviewsCount: 89,
    badges: ['-22%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 35.0,
    options: { colors: ['Preto','Azul'] }
  },
  {
    id: 'p-rack-agachamento',
    slug: 'rack-agachamento-muscle-levels',
    title: 'Rack de Agachamento Muscle Levels',
    description: 'Rack para agachamento e exercícios com barra livre.',
    price: 1899.9,
    discountPrice: 1499.9,
    category: 'equipamentos',
    rating: 4.9,
    reviewsCount: 34,
    badges: ['-21%', 'FRETE GRÁTIS'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 80.0,
    options: { colors: ['Preto'] }
  },
  {
    id: 'p-barra-olimpica',
    slug: 'barra-olimpica-muscle-levels-20kg',
    title: 'Barra Olímpica Muscle Levels 20kg',
    description: 'Barra olímpica profissional de 2,2m, peso 20kg.',
    price: 799.9,
    discountPrice: 599.9,
    category: 'equipamentos',
    rating: 4.9,
    reviewsCount: 78,
    badges: ['-25%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 20.0,
    options: { colors: ['Cromado'] }
  },
  {
    id: 'p-power-tower',
    slug: 'power-tower-muscle-levels',
    title: 'Power Tower Muscle Levels',
    description: 'Estação de exercícios para barra fixa, paralelas e flexões.',
    price: 1599.9,
    discountPrice: 1199.9,
    category: 'equipamentos',
    rating: 4.6,
    reviewsCount: 56,
    badges: ['-25%', 'FRETE GRÁTIS'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 45.0,
    options: { colors: ['Preto'] }
  },
  {
    id: 'p-medicina-ball',
    slug: 'medicine-ball-muscle-levels-6kg',
    title: 'Medicine Ball Muscle Levels 6kg',
    description: 'Medicine ball de borracha para exercícios funcionais.',
    price: 179.9,
    discountPrice: 139.9,
    category: 'equipamentos',
    rating: 4.7,
    reviewsCount: 123,
    badges: ['-22%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 6.0,
    options: { colors: ['Preto','Azul'] }
  },
  {
    id: 'p-ab-wheel',
    slug: 'ab-wheel-muscle-levels',
    title: 'Ab Wheel Muscle Levels',
    description: 'Roda abdominal com suporte para joelhos, exercício core.',
    price: 89.9,
    discountPrice: 69.9,
    category: 'equipamentos',
    rating: 4.5,
    reviewsCount: 167,
    badges: ['-22%'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 1.2,
    options: { colors: ['Preto','Azul'] }
  },
  {
    id: 'p-multifuncional',
    slug: 'aparelho-multifuncional-muscle-levels',
    title: 'Aparelho Multifuncional Muscle Levels',
    description: 'Estação multifuncional com polia alta, baixa e crossover.',
    price: 3999.9,
    discountPrice: 2999.9,
    category: 'equipamentos',
    rating: 4.8,
    reviewsCount: 23,
    badges: ['-25%', 'FRETE GRÁTIS'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
    ],
    weightKg: 120.0,
    options: { colors: ['Preto'] }
  }
];