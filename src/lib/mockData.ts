import type { Product, Professional, Gym, BlogPost, AssessmentQuestion, RankingUser } from '@/types';

// Gerar 50+ produtos
export const generateMockProducts = (): Product[] => {
  const categories = ['suplementos', 'equipamentos', 'roupas', 'acessorios'] as const;
  const suplementos = [
    'Whey Protein Concentrado', 'Whey Protein Isolado', 'Caseína', 'Creatina Monohidratada',
    'BCAA', 'Glutamina', 'Pré-Treino', 'Hipercalórico', 'Albumina', 'Colágeno',
    'Ômega 3', 'Multivitamínico', 'ZMA', 'Termogênico', 'Beta Alanina'
  ];
  
  const equipamentos = [
    'Halteres Ajustáveis', 'Barra Olímpica', 'Anilhas', 'Banco Regulável',
    'Estação de Musculação', 'Elásticos de Resistência', 'Kettlebell',
    'Medicine Ball', 'TRX', 'Barras Paralelas', 'Puxador para Cabo',
    'Corda Naval', 'Bosu', 'Step', 'Colchonete'
  ];
  
  const roupas = [
    'Camiseta Dry Fit', 'Regata Masculina', 'Top Feminino', 'Legging',
    'Shorts Masculino', 'Shorts Feminino', 'Calça de Moletom', 'Jaqueta',
    'Tênis de Treino', 'Tênis de Corrida', 'Meia Esportiva', 'Luvas de Treino'
  ];
  
  const acessorios = [
    'Garrafa de Água', 'Shaker', 'Cinto de Musculação', 'Munhequeira',
    'Joelheira', 'Straps', 'Toalha de Treino', 'Mochila Esportiva',
    'Relógio Esportivo', 'Fone Bluetooth', 'Porta Suplementos'
  ];

  const products: Product[] = [];

  // Gerar suplementos
  suplementos.forEach((name, index) => {
    products.push({
      id: `sup-${index + 1}`,
      name,
      price: Math.floor(Math.random() * 200) + 30,
      originalPrice: Math.floor(Math.random() * 100) + 200,
      image: `https://images.unsplash.com/photo-${1500000000000 + index}?w=300&h=300&fit=crop`,
      category: 'suplementos',
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 500) + 50,
      description: `${name} de alta qualidade para potencializar seus resultados no treino.`,
      inStock: Math.random() > 0.1,
      featured: Math.random() > 0.7
    });
  });

  // Gerar equipamentos
  equipamentos.forEach((name, index) => {
    products.push({
      id: `eq-${index + 1}`,
      name,
      price: Math.floor(Math.random() * 500) + 100,
      originalPrice: Math.floor(Math.random() * 200) + 600,
      image: `https://images.unsplash.com/photo-${1500000000000 + index + 100}?w=300&h=300&fit=crop`,
      category: 'equipamentos',
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 300) + 30,
      description: `${name} profissional para treinos intensos e duradouros.`,
      inStock: Math.random() > 0.15,
      featured: Math.random() > 0.8
    });
  });

  // Gerar roupas
  roupas.forEach((name, index) => {
    products.push({
      id: `rou-${index + 1}`,
      name,
      price: Math.floor(Math.random() * 150) + 50,
      originalPrice: Math.floor(Math.random() * 50) + 180,
      image: `https://images.unsplash.com/photo-${1500000000000 + index + 200}?w=300&h=300&fit=crop`,
      category: 'roupas',
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 400) + 40,
      description: `${name} com tecnologia premium para máximo conforto e performance.`,
      inStock: Math.random() > 0.05,
      featured: Math.random() > 0.75
    });
  });

  // Gerar acessórios
  acessorios.forEach((name, index) => {
    products.push({
      id: `acc-${index + 1}`,
      name,
      price: Math.floor(Math.random() * 100) + 20,
      originalPrice: Math.floor(Math.random() * 30) + 120,
      image: `https://images.unsplash.com/photo-${1500000000000 + index + 300}?w=300&h=300&fit=crop`,
      category: 'acessorios',
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 200) + 20,
      description: `${name} essencial para complementar seus treinos com estilo.`,
      inStock: Math.random() > 0.08,
      featured: Math.random() > 0.8
    });
  });

  return products;
};

// Gerar profissionais
export const generateMockProfessionals = (): Professional[] => {
  const names = [
    'Dr. Carlos Silva', 'Dra. Ana Costa', 'Prof. João Santos', 'Dra. Maria Oliveira',
    'Dr. Pedro Lima', 'Dra. Julia Ferreira', 'Prof. Lucas Almeida', 'Dra. Carla Souza',
    'Dr. Bruno Martins', 'Dra. Fernanda Ribeiro', 'Prof. Rafael Pereira', 'Dra. Camila Santos',
    'Dr. Diego Costa', 'Dra. Beatriz Lima', 'Prof. Gabriel Silva'
  ];

  const specialties = [
    ['Musculação', 'Hipertrofia'], ['Emagrecimento', 'Cardio'], ['Funcional', 'CrossFit'],
    ['Yoga', 'Pilates'], ['Natação', 'Aquaeróbica'], ['Nutrição Esportiva', 'Suplementação'],
    ['Fisioterapia', 'Reabilitação'], ['Personal Trainer', 'Treino Individual'],
    ['Dança', 'Ritmos'], ['Artes Marciais', 'Defesa Pessoal']
  ];

  const locations = [
    'São Paulo - SP', 'Rio de Janeiro - RJ', 'Belo Horizonte - MG', 'Salvador - BA',
    'Brasília - DF', 'Fortaleza - CE', 'Recife - PE', 'Porto Alegre - RS',
    'Curitiba - PR', 'Goiânia - GO'
  ];

  return names.map((name, index) => ({
    id: `prof-${index + 1}`,
    name,
    specialties: specialties[index % specialties.length] || ['Fitness'],
    rating: Math.floor(Math.random() * 2) + 4,
    reviews: Math.floor(Math.random() * 200) + 50,
    image: `https://images.unsplash.com/photo-${1600000000000 + index}?w=300&h=300&fit=crop&crop=face`,
    location: locations[index % locations.length] || 'São Paulo - SP',
    price: Math.floor(Math.random() * 100) + 80,
    description: `Profissional experiente em ${(specialties[index % specialties.length] || ['Fitness']).join(' e ')} com foco em resultados.`,
    experience: Math.floor(Math.random() * 15) + 3,
    certifications: ['CREF', 'ACSM', 'NSCA'].slice(0, Math.floor(Math.random() * 3) + 1),
    availability: Math.random() > 0.3
  }));
};

// Gerar academias
export const generateMockGyms = (): Gym[] => {
  const gymNames = [
    'Smart Fit', 'Bio Ritmo', 'Bodytech', 'Bluefit', 'Academia Corpo e Mente',
    'Fit House', 'Power Gym', 'Studio Fitness', 'Mega Fitness', 'Elite Gym',
    'Iron Gym', 'Fitness Club', 'Strong Gym', 'Vital Fitness', 'Top Gym'
  ];

  const amenities = [
    'Musculação', 'Cardio', 'Piscina', 'Sauna', 'Vestiário', 'Estacionamento',
    'Personal Trainer', 'Aulas em Grupo', 'Spinning', 'Pilates', 'Yoga',
    'Lanchonete', 'Loja de Suplementos', 'Wi-Fi', 'Ar Condicionado'
  ];

  return gymNames.map((name, index) => ({
    id: `gym-${index + 1}`,
    name,
    location: `Bairro ${['Centro', 'Zona Sul', 'Zona Norte', 'Zona Oeste', 'Zona Leste'][index % 5]} - São Paulo`,
    rating: Math.floor(Math.random() * 2) + 4,
    reviews: Math.floor(Math.random() * 500) + 100,
    image: `https://images.unsplash.com/photo-${1550000000000 + index}?w=400&h=300&fit=crop`,
    amenities: amenities.slice(0, Math.floor(Math.random() * 8) + 5),
    price: Math.floor(Math.random() * 100) + 50,
    description: `${name} oferece a melhor estrutura e equipamentos para seus treinos.`,
    featured: Math.random() > 0.7
  }));
};

// Gerar posts do blog
export const generateMockBlogPosts = (): BlogPost[] => {
  const titles = [
    'Como Ganhar Massa Muscular Rapidamente',
    'Guia Completo de Suplementação',
    'Os Melhores Exercícios para Iniciantes',
    'Dieta para Hipertrofia: O que Comer',
    'Treino em Casa: Equipamentos Essenciais',
    'Como Manter a Motivação nos Treinos',
    'Importância do Descanso na Musculação',
    'Exercícios Funcionais vs Tradicionais',
    'Nutrição Pré e Pós-Treino',
    'Como Escolher o Personal Ideal'
  ];

  const authors = ['Dr. Carlos Silva', 'Dra. Ana Costa', 'Prof. João Santos', 'Dra. Maria Oliveira'];
  const categories = ['Treino', 'Nutrição', 'Suplementação', 'Lifestyle', 'Saúde'];

  return titles.map((title, index) => ({
    id: `post-${index + 1}`,
    title,
    excerpt: `${title.substring(0, 100)}... Descubra dicas importantes para alcançar seus objetivos.`,
    content: `Conteúdo completo sobre ${title.toLowerCase()}. Este artigo aborda os principais pontos que você precisa saber para ter sucesso em sua jornada fitness.`,
    image: `https://images.unsplash.com/photo-${1580000000000 + index}?w=600&h=400&fit=crop`,
    author: authors[index % authors.length] || 'Dr. Muscle Levels',
    publishedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
    category: categories[index % categories.length] || 'Fitness',
    readTime: Math.floor(Math.random() * 10) + 3,
    tags: ['fitness', 'treino', 'saúde', 'dicas'].slice(0, Math.floor(Math.random() * 3) + 2)
  }));
};

// Questões da avaliação
export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'experience',
    question: 'Qual seu nível de experiência com exercícios?',
    type: 'radio',
    options: ['Nunca pratiquei', 'Iniciante (até 6 meses)', 'Intermediário (6 meses - 2 anos)', 'Avançado (mais de 2 anos)'],
    required: true
  },
  {
    id: 'frequency',
    question: 'Com que frequência você pretende treinar?',
    type: 'radio',
    options: ['1-2 vezes por semana', '3-4 vezes por semana', '5-6 vezes por semana', 'Todos os dias'],
    required: true
  },
  {
    id: 'goals',
    question: 'Quais são seus objetivos? (pode marcar mais de um)',
    type: 'checkbox',
    options: ['Perder peso', 'Ganhar massa muscular', 'Melhorar condicionamento', 'Manter a saúde', 'Competir'],
    required: true
  },
  {
    id: 'time',
    question: 'Quanto tempo você tem disponível por treino?',
    type: 'radio',
    options: ['30 minutos', '45 minutos', '1 hora', 'Mais de 1 hora'],
    required: true
  },
  {
    id: 'motivation',
    question: 'De 1 a 10, qual seu nível de motivação atual?',
    type: 'scale',
    required: true
  }
];

// Gerar ranking de usuários
export const generateMockRanking = (): RankingUser[] => {
  const names = [
    'João Silva', 'Maria Santos', 'Pedro Costa', 'Ana Oliveira', 'Carlos Lima',
    'Julia Ferreira', 'Lucas Almeida', 'Carla Souza', 'Bruno Martins', 'Fernanda Ribeiro',
    'Rafael Pereira', 'Camila Santos', 'Diego Costa', 'Beatriz Lima', 'Gabriel Silva',
    'Amanda Costa', 'Rodrigo Santos', 'Leticia Oliveira', 'Felipe Lima', 'Natalia Ferreira'
  ];

  const levels = ['Iniciante', 'Intermediário', 'Avançado'];

  return names.map((name, index) => ({
    id: `user-${index + 1}`,
    name,
    level: levels[Math.floor(Math.random() * levels.length)] || 'Iniciante',
    points: Math.floor(Math.random() * 5000) + 500,
    avatar: `https://images.unsplash.com/photo-${1600000000000 + index + 50}?w=100&h=100&fit=crop&crop=face`,
    position: index + 1
  })).sort((a, b) => b.points - a.points).map((user, index) => ({ ...user, position: index + 1 }));
};