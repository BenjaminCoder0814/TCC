import { BlogPost } from '../lib/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'A Verdade Sobre Suplementos que as Empresas Não Querem que Você Saiba',
    excerpt: 'Descubra quais suplementos realmente funcionam e quais são apenas marketing caro.',
    content: 'A indústria de suplementos movimenta bilhões, mas será que todos esses produtos realmente fazem diferença? Neste artigo polêmico, revelamos dados científicos que mostram como 80% dos suplementos no mercado são desnecessários para a maioria das pessoas. Proteína em pó? Talvez você não precise tanto quanto pensa. Creatina? Essa sim tem respaldo científico sólido. Prepare-se para descobrir verdades inconvenientes sobre o que realmente funciona.',
    author: 'Dr. Ricardo Silva',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    category: 'Nutrição',
    tags: ['suplementos', 'ciência', 'dinheiro'],
    date: '2024-01-15',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'blog-2',
    title: 'Por Que 90% das Dietas Falham (e Como Ser dos 10% que Conseguem)',
    excerpt: 'A estatística é brutal: apenas 1 em cada 10 pessoas mantém o peso perdido após 2 anos.',
    content: 'As estatísticas são devastadoras. Estudos mostram que 90% das pessoas que fazem dieta voltam ao peso original ou ficam ainda mais pesadas em 2 anos. Por quê? A resposta vai muito além de "força de vontade". Neste artigo controverso, exploramos como a indústria das dietas lucra com o fracasso, por que métodos restritivos são contraproducentes e qual a única abordagem cientificamente comprovada para mudança corporal sustentável.',
    author: 'Dra. Marina Costa',
    authorImage: 'https://images.unsplash.com/photo-1594824694996-8cc9a98b0c8b?auto=format&fit=crop&w=100&q=80',
    category: 'Emagrecimento',
    tags: ['dieta', 'psicologia', 'mudança'],
    date: '2024-01-20',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'blog-3',
    title: 'Cardio em Jejum: Mito Perigoso ou Método Eficaz?',
    excerpt: 'A prática de fazer cardio em jejum divide opiniões. Vamos aos fatos científicos.',
    content: 'Fazer cardio em jejum virou quase uma religião no mundo fitness. Influencers juram por essa prática, mas a ciência conta uma história diferente. Estudos recentes mostram que, para a maioria das pessoas, cardio em jejum pode ser contraproducente, causando perda muscular e redução do metabolismo. Mas há exceções. Neste artigo controverso, analisamos quando essa prática pode funcionar e quando é pura perda de tempo.',
    author: 'Prof. Carlos Mendes',
    authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=100&q=80',
    category: 'Treino',
    tags: ['cardio', 'jejum', 'queima de gordura'],
    date: '2024-01-25',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1571019613914-85a26eb6b2ca?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-4',
    title: 'A Máfia das Academias: Como te Enganam para Você Gastar Mais',
    excerpt: 'Descubra as táticas psicológicas que academias usam para drenar sua carteira.',
    content: 'Você já se perguntou por que academias insistem em contratos anuais? Por que empurram personal trainers caros? Por que vendem suplementos superfaturados? Neste exposé revelador, ex-funcionários de grandes redes confessam as táticas manipuladoras usadas para maximizar lucros. Desde psicologia reversa até criação artificial de escassez, descubra como se proteger dessa indústria predatória.',
    author: 'Investigação ML',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    category: 'Denúncia',
    tags: ['academia', 'negócios', 'manipulação'],
    date: '2024-02-01',
    readTime: 15,
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'blog-5',
    title: 'Muscle Memory: Por Que Você Nunca Realmente Perde Músculos',
    excerpt: 'A ciência por trás da memória muscular vai mudar como você vê os treinos.',
    content: 'Parou de treinar por meses e acha que perdeu tudo? Pense novamente. A ciência da memória muscular mostra que seus músculos "lembram" do que já conquistaram por décadas. Células satélites permanecem ativadas, mionúcleos são preservados e a readaptação acontece muito mais rápido do que você imagina. Este conhecimento pode revolucionar sua abordagem aos treinos.',
    author: 'Dr. Fernando Alves',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    category: 'Ciência',
    tags: ['músculos', 'ciência', 'treino'],
    date: '2024-02-05',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-6',
    title: 'Overtraining: O Mal Secreto que Está Sabotando Seus Resultados',
    excerpt: 'Mais treino nem sempre significa melhores resultados. Às vezes, menos é mais.',
    content: 'A cultura fitness glorifica o "no pain, no gain", mas e se eu te disser que você pode estar treinando demais? Overtraining é uma epidemia silenciosa que afeta 30% dos praticantes de musculação. Sintomas incluem estagnação, irritabilidade, insônia e queda da libido. Neste artigo, exploramos sinais de alerta e como o descanso estratégico pode acelerar seus ganhos.',
    author: 'Dra. Ana Beatriz',
    authorImage: 'https://images.unsplash.com/photo-1594824694996-8cc9a98b0c8b?auto=format&fit=crop&w=100&q=80',
    category: 'Recuperação',
    tags: ['overtraining', 'descanso', 'performance'],
    date: '2024-02-10',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1571019613914-85a26eb6b2ca?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-7',
    title: 'Testosterona: O Hormônio que Todo Homem Deveria Monitorar',
    excerpt: 'Níveis baixos de testosterona afetam 40% dos homens após os 30. Saiba como agir.',
    content: 'A testosterona masculina está em queda livre há décadas. Estudos mostram redução de 1% ao ano desde 1980. As consequências? Perda muscular, ganho de gordura, depressão e baixa libido. Fatores como estresse, sono inadequado e xenoestrógenos estão criando uma epidemia silenciosa. Neste artigo polêmico, discutimos estratégias naturais e médicas para otimizar seus níveis hormonais.',
    author: 'Dr. Roberto Machado',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    category: 'Hormônios',
    tags: ['testosterona', 'homens', 'hormônios'],
    date: '2024-02-15',
    readTime: 14,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'blog-8',
    title: 'Mulheres e Musculação: Quebrando Mitos Que Atrapalham Resultados',
    excerpt: 'Por que mulheres têm medo de pesos pesados e como isso sabota seus objetivos.',
    content: 'Medo de ficar "musculosa demais" impede milhões de mulheres de alcançar seus objetivos. A realidade? Mulheres têm 10-15x menos testosterona que homens, tornando impossível ganhar massa muscular excessiva naturalmente. Treinar pesado acelera queima de gordura, melhora densidade óssea e esculpe um corpo feminino invejável. Chega de cardio infinito e pesos de 2kg!',
    author: 'Personal Trainer Laura',
    authorImage: 'https://images.unsplash.com/photo-1594824694996-8cc9a98b0c8b?auto=format&fit=crop&w=100&q=80',
    category: 'Mulheres',
    tags: ['mulheres', 'musculação', 'mitos'],
    date: '2024-02-20',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-9',
    title: 'Jejum Intermitente: Milagre ou Moda Perigosa?',
    excerpt: 'A prática que divide médicos e nutricionistas. Benefícios reais ou riscos ignorados?',
    content: 'Jejum intermitente virou mania mundial, mas poucos discutem os riscos. Enquanto estudos mostram benefícios para autofagia e longevidade, outros alertam para distúrbios alimentares, perda muscular e desequilíbrios hormonais. Quem pode fazer? Quem deve evitar? Este artigo analisa evidências científicas atuais e apresenta protocolos seguros para diferentes perfis.',
    author: 'Nutricionista Patricia',
    authorImage: 'https://images.unsplash.com/photo-1594824694996-8cc9a98b0c8b?auto=format&fit=crop&w=100&q=80',
    category: 'Nutrição',
    tags: ['jejum', 'nutrição', 'saúde'],
    date: '2024-02-25',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-10',
    title: 'Anabolizantes: A Verdade Nua e Crua Sobre Esteroides',
    excerpt: 'O tabu que ninguém quer discutir abertamente no mundo fitness.',
    content: 'Vamos falar do elefante na sala: anabolizantes. Estimativas sugerem que 30% dos frequentadores de academia usam algum tipo de substância. Este artigo não promove uso, mas apresenta informações médicas precisas sobre riscos, efeitos colaterais e monitoramento. Ignorar o assunto não o faz desaparecer. Educação salva vidas.',
    author: 'Dr. Endocrinologista',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    category: 'Medicina',
    tags: ['anabolizantes', 'medicina', 'riscos'],
    date: '2024-03-01',
    readTime: 18,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'blog-11',
    title: 'Sono e Ganho Muscular: Por Que Você Cresce Dormindo',
    excerpt: 'Dormir mal pode anular completamente seus esforços na academia.',
    content: 'Você treina pesado, come certinho, mas se esquece do fator mais importante: sono. Durante o sono profundo, seu corpo libera 70% do hormônio do crescimento diário. Dormir menos de 6 horas reduz síntese proteica em 20% e aumenta cortisol, catabolizando músculos. Neste artigo, exploramos como otimizar seu sono para maximizar ganhos.',
    author: 'Dr. Medicina do Sono',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    category: 'Recuperação',
    tags: ['sono', 'crescimento', 'hormônios'],
    date: '2024-03-05',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1520206183501-b80df61c7b39?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-12',
    title: 'Metabolismo Lento: Mito ou Realidade Científica?',
    excerpt: 'Será que seu metabolismo é realmente lento ou você está comendo mais do que pensa?',
    content: 'Milhões de pessoas culpam o "metabolismo lento" por não conseguir emagrecer. Mas estudos mostram que variações metabólicas representam apenas 200-300 calorias diárias entre pessoas do mesmo peso. O verdadeiro problema? Subestimação calórica em até 40% e superestimação do gasto energético. Este artigo desmistifica o metabolismo e apresenta soluções práticas.',
    author: 'Nutricionista Carlos',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    category: 'Metabolismo',
    tags: ['metabolismo', 'calorias', 'emagrecimento'],
    date: '2024-03-10',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-13',
    title: 'Personal Trainers: Como Escolher e Não Ser Enganado',
    excerpt: 'O mercado está cheio de profissionais não qualificados. Saiba identificar os bons.',
    content: 'O mercado de personal trainers explodiu, mas a qualidade despencou. Cursos de fim de semana formam "especialistas" que podem prejudicar sua saúde. Neste guia controverso, revelamos red flags para evitar, perguntas essenciais para fazer e como identificar profissionais realmente capacitados. Sua segurança vale mais que economia.',
    author: 'CREF Fiscalização',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    category: 'Profissionais',
    tags: ['personal', 'qualificação', 'escolha'],
    date: '2024-03-15',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1571019613914-85a26eb6b2ca?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-14',
    title: 'Nutrição Peritreno: O Timing que Pode Fazer Diferença',
    excerpt: 'Quando comer pode ser tão importante quanto o que comer para seus resultados.',
    content: 'Durante anos, o timing nutricional foi considerado irrelevante. Novos estudos sugerem o contrário. Consumir carboidratos e proteínas em janelas específicas pode otimizar performance, recuperação e composição corporal. Mas cuidado: a diferença é marginal e só vale para atletas avançados. Este artigo separa ciência de marketing.',
    author: 'Esportiva Nutrition',
    authorImage: 'https://images.unsplash.com/photo-1594824694996-8cc9a98b0c8b?auto=format&fit=crop&w=100&q=80',
    category: 'Nutrição',
    tags: ['timing', 'performance', 'carboidratos'],
    date: '2024-03-20',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-15',
    title: 'Lesões Comuns na Academia: Como Prevenir e Quando Parar',
    excerpt: 'Ego lifting está machucando mais pessoas que você imagina.',
    content: 'Lesões na academia aumentaram 300% na última década. Lombalgias, lesões no ombro e joelhos lideram as estatísticas. O culpado? Ego lifting, técnica inadequada e progressão acelerada. Neste artigo, fisioterapeutas experientes compartilham sinais de alerta, exercícios de prevenção e quando procurar ajuda médica. Sua saúde é insubstituível.',
    author: 'Fisioterapeuta Marina',
    authorImage: 'https://images.unsplash.com/photo-1594824694996-8cc9a98b0c8b?auto=format&fit=crop&w=100&q=80',
    category: 'Prevenção',
    tags: ['lesões', 'prevenção', 'fisioterapia'],
    date: '2024-03-25',
    readTime: 13,
    image: 'https://images.unsplash.com/photo-1571019613914-85a26eb6b2ca?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-16',
    title: 'Veganismo e Músculos: É Possível Ser Strong e Plant-Based?',
    excerpt: 'Atletas veganos quebram paradigmas sobre proteína animal e performance.',
    content: 'Veganos não conseguem ganhar músculos? Conte isso para fisiculturistas plant-based que desafiam essa crença. Proteínas vegetais completas, suplementação inteligente e planejamento nutricional permitem resultados impressionantes. Este artigo analisa casos reais, desafios únicos e estratégias comprovadas para quem quer conciliar ética animal com objetivos estéticos.',
    author: 'Nutricionista Vegana',
    authorImage: 'https://images.unsplash.com/photo-1594824694996-8cc9a98b0c8b?auto=format&fit=crop&w=100&q=80',
    category: 'Veganismo',
    tags: ['vegano', 'proteína', 'músculos'],
    date: '2024-03-30',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-17',
    title: 'Genética: Por Que Alguns Ganham Músculos Mais Fácil',
    excerpt: 'A injusta loteria genética que determina facilidade para ganhar massa muscular.',
    content: 'Você treina igual a um amigo, mas ele cresce 3x mais rápido? Bem-vindo à realidade da genética. Variações nos genes ACTN3, MSTN e IGF-1 determinam potencial de crescimento muscular. Mesomorfos naturais existem e têm vantagens óbvias. Mas calma: genética não é destino. Este artigo mostra como maximizar seu potencial único.',
    author: 'Dr. Genética Esportiva',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    category: 'Genética',
    tags: ['genética', 'músculos', 'potencial'],
    date: '2024-04-01',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-18',
    title: 'Termogênicos: Milagre para Queimar Gordura ou Placebo Caro?',
    excerpt: 'A indústria de termogênicos fatura milhões, mas funcionam de verdade?',
    content: 'Termogênicos prometem acelerar metabolismo e derreter gordura. A realidade é bem diferente. Cafeína funciona, mas oferece apenas 3-5% de aumento metabólico. Outras substâncias têm evidências fracas ou efeitos colaterais perigosos. Este artigo analisa ingredientes comuns, separa fatos de marketing e apresenta alternativas naturais mais eficazes.',
    author: 'Farmacêutica Esportiva',
    authorImage: 'https://images.unsplash.com/photo-1594824694996-8cc9a98b0c8b?auto=format&fit=crop&w=100&q=80',
    category: 'Suplementos',
    tags: ['termogênico', 'gordura', 'metabolismo'],
    date: '2024-04-05',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'blog-19',
    title: 'Idosos e Musculação: Por Que é Mais Importante Após os 60',
    excerpt: 'Sarcopenia rouba 3-8% de massa muscular por década após os 30. Reaja!',
    content: 'Após os 30, perdemos massa muscular gradualmente. Após os 60, essa perda acelera dramaticamente. Consequências incluem fragilidade, quedas e perda de independência. Musculação é o antídoto mais poderoso contra o envelhecimento. Este artigo apresenta adaptações necessárias, exercícios seguros e histórias inspiradoras de transformação na terceira idade.',
    author: 'Geriatra do Esporte',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    category: 'Terceira Idade',
    tags: ['idosos', 'sarcopenia', 'longevidade'],
    date: '2024-04-10',
    readTime: 14,
    image: 'https://images.unsplash.com/photo-1571019613914-85a26eb6b2ca?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'blog-20',
    title: 'Motivação vs Disciplina: Por Que Contar Só com Motivação Falha',
    excerpt: 'Motivação é como clima: muda constantemente. Disciplina é sua roupa.',
    content: 'Motivação é temporária e emocional. Disciplina é permanente e racional. Pessoas que confiam apenas em motivação falham em 6 meses. Este artigo explora psicologia comportamental, formação de hábitos e sistemas que funcionam independente de humor. Transforme exercício de obrigação em estilo de vida usando ciência comportamental.',
    author: 'Psicólogo do Esporte',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    category: 'Psicologia',
    tags: ['motivação', 'disciplina', 'hábitos'],
    date: '2024-04-15',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1520206183501-b80df61c7b39?auto=format&fit=crop&w=1000&q=80',
    featured: false
  }
];

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.featured);
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.id === id);
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return BLOG_POSTS
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}