export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: 'apparel' | 'accessory' | 'equipment' | 'supplement' | 'elite';
  rating: number;
  reviews: number;
  discountPct?: number;
  tags?: string[];
  sizes?: string[];
  weight?: number; // p/ frete simulado
  description: string;
};

export const PRODUCTS: Product[] = [
  // Apparel (Roupas)
  { id: 'p1', slug: 'camiseta-muscle-levels', name: 'Camiseta Muscle Levels', price: 99.9, image: '/placeholders/shirt1.jpg', category: 'apparel', rating: 4.7, reviews: 123, discountPct: 20, sizes: ['P', 'M', 'G', 'GG'], tags: ['dry-fit'], description: 'Tecido dry-fit premium com tecnologia anti-suor.' },
  { id: 'p2', slug: 'regata-performance-pro', name: 'Regata Performance Pro', price: 79.9, image: '/placeholders/tank1.jpg', category: 'apparel', rating: 4.5, reviews: 89, sizes: ['P', 'M', 'G', 'GG'], tags: ['respirável'], description: 'Regata ultra respirável para treinos intensos.' },
  { id: 'p3', slug: 'shorts-training-flex', name: 'Shorts Training Flex', price: 129.9, image: '/placeholders/shorts1.jpg', category: 'apparel', rating: 4.8, reviews: 156, sizes: ['P', 'M', 'G', 'GG'], tags: ['elástico'], description: 'Shorts com elasticidade superior e secagem rápida.' },
  { id: 'p4', slug: 'legging-power-feminina', name: 'Legging Power Feminina', price: 159.9, image: '/placeholders/legging1.jpg', category: 'apparel', rating: 4.9, reviews: 234, discountPct: 15, sizes: ['PP', 'P', 'M', 'G'], tags: ['modeladora'], description: 'Legging modeladora com compressão graduada.' },
  { id: 'p5', slug: 'conjunto-moletom-winter', name: 'Conjunto Moletom Winter', price: 299.9, image: '/placeholders/tracksuit1.jpg', category: 'apparel', rating: 4.6, reviews: 78, sizes: ['M', 'G', 'GG'], tags: ['inverno'], description: 'Conjunto completo para treinos no inverno.' },
  { id: 'p6', slug: 'top-feminino-sport', name: 'Top Feminino Sport', price: 89.9, image: '/placeholders/top1.jpg', category: 'apparel', rating: 4.4, reviews: 112, sizes: ['PP', 'P', 'M', 'G'], tags: ['suporte'], description: 'Top com suporte médio e design ergonômico.' },
  { id: 'p7', slug: 'bermuda-masculina-compress', name: 'Bermuda Masculina Compress', price: 149.9, image: '/placeholders/compression1.jpg', category: 'apparel', rating: 4.7, reviews: 145, sizes: ['P', 'M', 'G', 'GG'], tags: ['compressão'], description: 'Bermuda de compressão para melhor performance.' },
  { id: 'p8', slug: 'jaqueta-windproof', name: 'Jaqueta Windproof', price: 249.9, image: '/placeholders/jacket1.jpg', category: 'apparel', rating: 4.5, reviews: 67, discountPct: 25, sizes: ['M', 'G', 'GG'], tags: ['corta-vento'], description: 'Jaqueta corta-vento para atividades ao ar livre.' },
  { id: 'p9', slug: 'meia-performance-kit', name: 'Kit 3 Meias Performance', price: 59.9, image: '/placeholders/socks1.jpg', category: 'apparel', rating: 4.3, reviews: 198, sizes: ['35-38', '39-42', '43-46'], tags: ['kit'], description: 'Kit com 3 pares de meias anti-bolhas.' },
  { id: 'p10', slug: 'bone-muscle-classic', name: 'Boné Muscle Classic', price: 69.9, image: '/placeholders/cap1.jpg', category: 'apparel', rating: 4.6, reviews: 87, tags: ['proteção'], description: 'Boné com proteção UV e design clássico.' },

  // Accessories (Acessórios)
  { id: 'p11', slug: 'shaker-protein-700', name: 'Shaker Protein 700ml', price: 49.9, image: '/placeholders/shaker1.jpg', category: 'accessory', rating: 4.6, reviews: 234, tags: ['compartimentos'], description: 'Shaker com divisórias internas e medidor.' },
  { id: 'p12', slug: 'luvas-treino-grip', name: 'Luvas Treino Grip', price: 79.9, image: '/placeholders/gloves1.jpg', category: 'accessory', rating: 4.5, reviews: 156, sizes: ['P', 'M', 'G'], tags: ['aderência'], description: 'Luvas com máxima aderência e proteção.' },
  { id: 'p13', slug: 'cinto-musculacao-pro', name: 'Cinto Musculação Pro', price: 189.9, image: '/placeholders/belt1.jpg', category: 'accessory', rating: 4.8, reviews: 89, sizes: ['P', 'M', 'G', 'GG'], tags: ['suporte'], description: 'Cinto de couro legítimo para levantamento pesado.' },
  { id: 'p14', slug: 'toalha-microfibra-xl', name: 'Toalha Microfibra XL', price: 39.9, image: '/placeholders/towel1.jpg', category: 'accessory', rating: 4.4, reviews: 178, discountPct: 30, tags: ['absorvente'], description: 'Toalha de secagem rápida e alta absorção.' },
  { id: 'p15', slug: 'relogio-smartfit-hr', name: 'Relógio SmartFit HR', price: 299.9, image: '/placeholders/watch1.jpg', category: 'accessory', rating: 4.7, reviews: 267, tags: ['tecnologia'], description: 'Monitor cardíaco e contador de passos integrado.' },
  { id: 'p16', slug: 'mochila-gym-premium', name: 'Mochila Gym Premium', price: 159.9, image: '/placeholders/backpack1.jpg', category: 'accessory', rating: 4.6, reviews: 134, tags: ['compartimentos'], description: 'Mochila com compartimento para tênis e roupas.' },
  { id: 'p17', slug: 'garrafa-termica-steel', name: 'Garrafa Térmica Steel 750ml', price: 89.9, image: '/placeholders/bottle1.jpg', category: 'accessory', rating: 4.8, reviews: 312, discountPct: 20, tags: ['térmica'], description: 'Mantém temperatura por até 12 horas.' },
  { id: 'p18', slug: 'munhequeira-elastica-par', name: 'Par Munhequeiras Elásticas', price: 29.9, image: '/placeholders/wristband1.jpg', category: 'accessory', rating: 4.2, reviews: 145, tags: ['proteção'], description: 'Proteção e suporte para punhos durante o treino.' },
  { id: 'p19', slug: 'head-phone-bluetooth-sport', name: 'Headphone Bluetooth Sport', price: 199.9, image: '/placeholders/headphone1.jpg', category: 'accessory', rating: 4.5, reviews: 203, tags: ['wireless'], description: 'Fone resistente ao suor com cancelamento de ruído.' },
  { id: 'p20', slug: 'porta-celular-braco', name: 'Porta Celular Braço', price: 34.9, image: '/placeholders/armband1.jpg', category: 'accessory', rating: 4.3, reviews: 189, tags: ['corrida'], description: 'Suporte ajustável para smartphones até 6.5 polegadas.' },

  // Equipment (Equipamentos)
  { id: 'p21', slug: 'halter-ajustavel-24kg', name: 'Halter Ajustável 24kg', price: 459.9, image: '/placeholders/dumbbell1.jpg', category: 'equipment', rating: 4.8, reviews: 145, tags: ['ajustável'], description: 'Halter com placas removíveis de 2kg a 24kg.' },
  { id: 'p22', slug: 'barra-fixa-porta', name: 'Barra Fixa Porta', price: 129.9, image: '/placeholders/pullupbar1.jpg', category: 'equipment', rating: 4.5, reviews: 234, discountPct: 15, tags: ['instalação'], description: 'Instalação sem furos, suporta até 120kg.' },
  { id: 'p23', slug: 'kettlebell-cast-iron-16kg', name: 'Kettlebell Cast Iron 16kg', price: 189.9, image: '/placeholders/kettlebell1.jpg', category: 'equipment', rating: 4.7, reviews: 98, tags: ['ferro'], description: 'Kettlebell de ferro fundido com acabamento premium.' },
  { id: 'p24', slug: 'banco-musculacao-ajustavel', name: 'Banco Musculação Ajustável', price: 799.9, image: '/placeholders/bench1.jpg', category: 'equipment', rating: 4.9, reviews: 67, tags: ['ajustável'], description: 'Banco com 7 posições de inclinação.' },
  { id: 'p25', slug: 'elastico-kit-resistencia', name: 'Kit Elásticos Resistência', price: 89.9, image: '/placeholders/resistance1.jpg', category: 'equipment', rating: 4.4, reviews: 187, discountPct: 25, tags: ['kit'], description: 'Kit com 5 níveis de resistência e acessórios.' },
  { id: 'p26', slug: 'colchonete-yoga-premium', name: 'Colchonete Yoga Premium', price: 119.9, image: '/placeholders/mat1.jpg', category: 'equipment', rating: 4.6, reviews: 156, tags: ['yoga'], description: 'Colchonete antiderrapante de 6mm de espessura.' },
  { id: 'p27', slug: 'corda-naval-battle-rope', name: 'Corda Naval Battle Rope 15m', price: 249.9, image: '/placeholders/rope1.jpg', category: 'equipment', rating: 4.8, reviews: 89, tags: ['funcional'], description: 'Corda naval para treino funcional intenso.' },
  { id: 'p28', slug: 'medicine-ball-8kg', name: 'Medicine Ball 8kg', price: 159.9, image: '/placeholders/medicineball1.jpg', category: 'equipment', rating: 4.5, reviews: 123, tags: ['funcional'], description: 'Bola medicinal com textura antiderrapante.' },
  { id: 'p29', slug: 'step-aerobico-3-niveis', name: 'Step Aeróbico 3 Níveis', price: 179.9, image: '/placeholders/step1.jpg', category: 'equipment', rating: 4.3, reviews: 134, tags: ['aeróbico'], description: 'Step com altura ajustável em 3 níveis.' },
  { id: 'p30', slug: 'rack-organizador-pesos', name: 'Rack Organizador Pesos', price: 399.9, image: '/placeholders/rack1.jpg', category: 'equipment', rating: 4.7, reviews: 78, discountPct: 20, tags: ['organização'], description: 'Suporte para organizar halteres e anilhas.' },

  // Supplements (Suplementos)
  { id: 'p31', slug: 'whey-protein-chocolate-1kg', name: 'Whey Protein Chocolate 1kg', price: 159.9, image: '/placeholders/whey1.jpg', category: 'supplement', rating: 4.8, reviews: 456, tags: ['proteína'], description: 'Whey concentrado sabor chocolate premium.' },
  { id: 'p32', slug: 'creatina-monohidratada-300g', name: 'Creatina Monohidratada 300g', price: 89.9, image: '/placeholders/creatine1.jpg', category: 'supplement', rating: 4.9, reviews: 278, discountPct: 15, tags: ['força'], description: 'Creatina pura para ganho de força e massa.' },
  { id: 'p33', slug: 'bcaa-2-1-1-tabletes', name: 'BCAA 2:1:1 120 Tabletes', price: 79.9, image: '/placeholders/bcaa1.jpg', category: 'supplement', rating: 4.6, reviews: 234, tags: ['recuperação'], description: 'Aminoácidos essenciais para recuperação muscular.' },
  { id: 'p34', slug: 'pre-treino-explosive-300g', name: 'Pré-Treino Explosive 300g', price: 119.9, image: '/placeholders/preworkout1.jpg', category: 'supplement', rating: 4.7, reviews: 189, tags: ['energia'], description: 'Fórmula explosiva para máxima energia no treino.' },
  { id: 'p35', slug: 'glutamina-powder-300g', name: 'Glutamina Powder 300g', price: 69.9, image: '/placeholders/glutamine1.jpg', category: 'supplement', rating: 4.5, reviews: 167, discountPct: 20, tags: ['recuperação'], description: 'Glutamina pura para recuperação e imunidade.' },
  { id: 'p36', slug: 'omega-3-1000mg-capsulas', name: 'Ômega 3 1000mg 60 Cápsulas', price: 49.9, image: '/placeholders/omega1.jpg', category: 'supplement', rating: 4.8, reviews: 312, tags: ['saúde'], description: 'Óleo de peixe purificado rico em EPA e DHA.' },
  { id: 'p37', slug: 'multivitaminico-complete', name: 'Multivitamínico Complete', price: 59.9, image: '/placeholders/multi1.jpg', category: 'supplement', rating: 4.4, reviews: 198, tags: ['vitaminas'], description: 'Complexo vitamínico completo para atletas.' },
  { id: 'p38', slug: 'colageno-hidrolisado-250g', name: 'Colágeno Hidrolisado 250g', price: 79.9, image: '/placeholders/collagen1.jpg', category: 'supplement', rating: 4.6, reviews: 145, tags: ['articulações'], description: 'Colágeno tipo 1 para articulações e pele.' },
  { id: 'p39', slug: 'zma-zinco-magnesio', name: 'ZMA Zinco Magnésio 90 Caps', price: 39.9, image: '/placeholders/zma1.jpg', category: 'supplement', rating: 4.7, reviews: 234, discountPct: 25, tags: ['sono'], description: 'Fórmula para melhora do sono e recuperação.' },
  { id: 'p40', slug: 'cafeina-200mg-tabletes', name: 'Cafeína 200mg 60 Tabletes', price: 29.9, image: '/placeholders/caffeine1.jpg', category: 'supplement', rating: 4.5, reviews: 289, tags: ['energia'], description: 'Cafeína anidra para foco e energia.' },

  // Elite (Produtos Premium)
  { id: 'p41', slug: 'suplemento-elite-platinum', name: 'Elite Platinum Formula', price: 899.9, image: '/placeholders/elite1.jpg', category: 'elite', rating: 4.9, reviews: 45, tags: ['premium'], description: 'Fórmula exclusiva com ingredientes raros importados.' },
  { id: 'p42', slug: 'kit-elite-gold-collection', name: 'Kit Elite Gold Collection', price: 1299.9, image: '/placeholders/elite2.jpg', category: 'elite', rating: 5.0, reviews: 23, discountPct: 10, tags: ['exclusivo'], description: 'Coleção limitada para atletas de elite.' },
  { id: 'p43', slug: 'personal-trainer-premium', name: 'Personal Trainer Premium 30 dias', price: 1999.9, image: '/placeholders/elite3.jpg', category: 'elite', rating: 4.8, reviews: 67, tags: ['serviço'], description: 'Acompanhamento personalizado com especialista.' },
  { id: 'p44', slug: 'nutricao-elite-consulting', name: 'Nutrição Elite Consulting', price: 1499.9, image: '/placeholders/elite4.jpg', category: 'elite', rating: 4.9, reviews: 34, tags: ['consultoria'], description: 'Consultoria nutricional personalizada premium.' },
  { id: 'p45', slug: 'equipamento-elite-titanium', name: 'Equipamento Elite Titanium', price: 2499.9, image: '/placeholders/elite5.jpg', category: 'elite', rating: 5.0, reviews: 12, tags: ['titânio'], description: 'Equipamento de última geração em titânio.' },
  { id: 'p46', slug: 'membership-elite-club', name: 'Membership Elite Club Anual', price: 3999.9, image: '/placeholders/elite6.jpg', category: 'elite', rating: 4.8, reviews: 89, tags: ['membership'], description: 'Acesso exclusivo ao clube de membros elite.' },
  { id: 'p47', slug: 'suplemento-elite-diamond', name: 'Elite Diamond Series', price: 1599.9, image: '/placeholders/elite7.jpg', category: 'elite', rating: 4.9, reviews: 56, discountPct: 15, tags: ['diamond'], description: 'Linha diamante com ingredientes únicos.' },
  { id: 'p48', slug: 'coaching-elite-master', name: 'Coaching Elite Master', price: 2999.9, image: '/placeholders/elite8.jpg', category: 'elite', rating: 5.0, reviews: 28, tags: ['coaching'], description: 'Coaching completo com metodologia exclusiva.' },
  { id: 'p49', slug: 'kit-elite-platinum-box', name: 'Kit Elite Platinum Box', price: 1899.9, image: '/placeholders/elite9.jpg', category: 'elite', rating: 4.8, reviews: 41, tags: ['kit'], description: 'Box mensal com produtos premium selecionados.' },
  { id: 'p50', slug: 'experiencia-elite-retreat', name: 'Experiência Elite Retreat', price: 4999.9, image: '/placeholders/elite10.jpg', category: 'elite', rating: 5.0, reviews: 15, tags: ['experiência'], description: 'Retiro exclusivo de 7 dias com especialistas.' }
];