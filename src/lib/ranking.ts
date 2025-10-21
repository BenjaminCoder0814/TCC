export type RankItem = { 
  name: string; 
  points: number; 
  city?: string; 
  state?: string; 
  country?: string; 
  you?: boolean;
  avatar?: string;
};

export function getRanking(scope: 'world' | 'country' | 'state' | 'city' | 'friends', you: RankItem): RankItem[] {
  // Simulado: gerar lista fake com você no meio
  const mockNames = [
    'Carlos Silva', 'Ana Santos', 'João Oliveira', 'Maria Costa', 'Pedro Lima',
    'Julia Martins', 'Bruno Alves', 'Camila Rocha', 'Diego Ferreira', 'Leticia Souza',
    'Rafael Mendes', 'Gabriela Castro', 'Lucas Pereira', 'Fernanda Ribeiro', 'Thiago Barbosa',
    'Amanda Cardoso', 'Gustavo Araujo', 'Beatriz Nascimento', 'Rodrigo Gomes', 'Vanessa Dias'
  ];
  
  const base = mockNames.map((name, i) => ({
    name,
    points: Math.floor(Math.random() * 3000 + 500),
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    avatar: `🏋️‍${i % 2 === 0 ? '♂️' : '♀️'}`,
    you: false
  }));
  
  const withYou = [...base.slice(0, 8), you, ...base.slice(8)];
  return withYou.sort((a, b) => b.points - a.points).map((x, i) => ({ ...x, position: i + 1 }));
}

export function getLeaderboardByScope(scope: string): RankItem[] {
  // Mock data baseado no escopo
  const mockData: Record<string, RankItem[]> = {
    world: [
      { name: 'Muscle King 🏆', points: 15420, country: 'Brasil', avatar: '👑' },
      { name: 'Iron Beast', points: 14890, country: 'USA', avatar: '🦾' },
      { name: 'Fitness Guru', points: 13675, country: 'Canada', avatar: '🧘‍♂️' },
    ],
    country: [
      { name: 'BrasilStrong', points: 12340, state: 'SP', avatar: '🇧🇷' },
      { name: 'Carioca Fit', points: 11280, state: 'RJ', avatar: '🏖️' },
      { name: 'Gaúcho Power', points: 10950, state: 'RS', avatar: '🌾' },
    ],
    state: [
      { name: 'SP Warrior', points: 9870, city: 'São Paulo', avatar: '🏙️' },
      { name: 'Campinas Beast', points: 8900, city: 'Campinas', avatar: '🚀' },
      { name: 'Santos Strong', points: 8450, city: 'Santos', avatar: '⚓' },
    ],
  };
  
  return mockData[scope] || [];
}