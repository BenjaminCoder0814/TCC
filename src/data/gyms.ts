export type Gym = { 
  id: string; 
  name: string; 
  address: string; 
  city: string; 
  state: string; 
  benefits: string[]; 
  rating: number; 
  cep: string;
  phone?: string;
  email?: string;
  amenities?: string[];
};

export const GYMS: Gym[] = [
  // São Paulo - SP (01xxx-xxx)
  { id: 'g1', name: 'Power Fit Academy', address: 'Av. Paulista, 1000', city: 'São Paulo', state: 'SP', benefits: ['15% off membros', 'Aulas gratuitas'], rating: 4.6, cep: '01311-000', phone: '(11) 3456-7890', amenities: ['Musculação', 'Aeróbicos', 'Piscina'] },
  { id: 'g2', name: 'Strong Life Gym', address: 'Rua Augusta, 500', city: 'São Paulo', state: 'SP', benefits: ['20% off planos anuais', 'Personal grátis'], rating: 4.8, cep: '01305-000', phone: '(11) 2345-6789', amenities: ['CrossFit', '24h', 'Nutricionista'] },
  { id: 'g3', name: 'Mega Fitness Center', address: 'Av. Brigadeiro Faria Lima, 2000', city: 'São Paulo', state: 'SP', benefits: ['10% desconto suplementos'], rating: 4.4, cep: '01451-000', amenities: ['Spinning', 'Yoga', 'Pilates'] },
  { id: 'g4', name: 'Iron Temple Gym', address: 'Rua da Consolação, 300', city: 'São Paulo', state: 'SP', benefits: ['Avaliação física grátis'], rating: 4.7, cep: '01302-000', amenities: ['Powerlifting', 'Loja suplementos'] },
  { id: 'g5', name: 'Fitness Revolution', address: 'Av. Ibirapuera, 1500', city: 'São Paulo', state: 'SP', benefits: ['Primeira semana grátis'], rating: 4.5, cep: '04029-000', amenities: ['Funcional', 'Dança', 'Spa'] },

  // Rio de Janeiro - RJ (20xxx-xxx, 21xxx-xxx, 22xxx-xxx)
  { id: 'g6', name: 'Copacabana Fitness', address: 'Av. Copacabana, 800', city: 'Rio de Janeiro', state: 'RJ', benefits: ['Vista para o mar', '25% off verão'], rating: 4.9, cep: '22070-000', phone: '(21) 3456-7890', amenities: ['Beach training', 'Funcional', 'Surf fit'] },
  { id: 'g7', name: 'Barra Strong Academy', address: 'Av. das Américas, 3000', city: 'Rio de Janeiro', state: 'RJ', benefits: ['Estacionamento grátis'], rating: 4.6, cep: '22631-000', amenities: ['Crossfit', 'MMA', 'Piscina olímpica'] },
  { id: 'g8', name: 'Zona Sul Fitness', address: 'Rua Visconde de Pirajá, 400', city: 'Rio de Janeiro', state: 'RJ', benefits: ['Happy hour fitness'], rating: 4.3, cep: '22410-000', amenities: ['Pilates', 'Yoga', 'Massagem'] },
  { id: 'g9', name: 'Muscle Beach RJ', address: 'Praia de Ipanema s/n', city: 'Rio de Janeiro', state: 'RJ', benefits: ['Treino na praia'], rating: 4.8, cep: '22420-000', amenities: ['Outdoor', 'Vôlei', 'Funcional'] },
  { id: 'g10', name: 'Elite Gym Tijuca', address: 'Rua Conde de Bonfim, 200', city: 'Rio de Janeiro', state: 'RJ', benefits: ['Nutricionista incluso'], rating: 4.4, cep: '20520-000', amenities: ['Musculação', 'Cardio', 'Sauna'] },

  // Belo Horizonte - MG (30xxx-xxx, 31xxx-xxx)
  { id: 'g11', name: 'BH Power Gym', address: 'Av. Afonso Pena, 1200', city: 'Belo Horizonte', state: 'MG', benefits: ['Desconto funcionário público'], rating: 4.5, cep: '30130-000', phone: '(31) 3456-7890', amenities: ['Musculação', 'Grupo', 'Luta'] },
  { id: 'g12', name: 'Minas Fitness Club', address: 'Rua da Bahia, 800', city: 'Belo Horizonte', state: 'MG', benefits: ['Acompanhante grátis'], rating: 4.7, cep: '30160-000', amenities: ['Piscina', 'Tênis', 'Squash'] },
  { id: 'g13', name: 'Strong Mountain Gym', address: 'Av. do Contorno, 5000', city: 'Belo Horizonte', state: 'MG', benefits: ['Cerveja pós-treino'], rating: 4.2, cep: '30110-000', amenities: ['Crossfit', 'Escalada', 'Bike'] },
  { id: 'g14', name: 'Academia Savassi', address: 'Rua Pernambuco, 600', city: 'Belo Horizonte', state: 'MG', benefits: ['Valet parking'], rating: 4.6, cep: '30112-000', amenities: ['Pilates', 'Dança', 'Spa'] },

  // Brasília - DF (70xxx-xxx, 71xxx-xxx, 72xxx-xxx)
  { id: 'g15', name: 'Capital Fitness', address: 'SCS Quadra 1', city: 'Brasília', state: 'DF', benefits: ['Desconto servidor'], rating: 4.4, cep: '70304-000', phone: '(61) 3456-7890', amenities: ['24h', 'Cardio', 'Grupo'] },
  { id: 'g16', name: 'Planalto Strong', address: 'CLN 203 Bloco A', city: 'Brasília', state: 'DF', benefits: ['Crianças grátis'], rating: 4.8, cep: '70832-000', amenities: ['Kids', 'Natação', 'Judô'] },
  { id: 'g17', name: 'BSB Power Academy', address: 'CLS 402 Bloco B', city: 'Brasília', state: 'DF', benefits: ['Congressista VIP'], rating: 4.3, cep: '70236-000', amenities: ['Executive', 'Sauna', 'Massagem'] },

  // Porto Alegre - RS (90xxx-xxx, 91xxx-xxx)
  { id: 'g18', name: 'Gaúcho Fitness', address: 'Av. Ipiranga, 1500', city: 'Porto Alegre', state: 'RS', benefits: ['Chimarrão grátis'], rating: 4.7, cep: '90160-000', phone: '(51) 3456-7890', amenities: ['Tradicional', 'Cardio', 'Musculação'] },
  { id: 'g19', name: 'Sul Strong Gym', address: 'Rua dos Andradas, 800', city: 'Porto Alegre', state: 'RS', benefits: ['Desconto Grêmio/Inter'], rating: 4.5, cep: '90020-000', amenities: ['Futebol', 'Funcional', 'Luta'] },
  { id: 'g20', name: 'POA CrossFit Box', address: 'Av. Protásio Alves, 2000', city: 'Porto Alegre', state: 'RS', benefits: ['Competições inclusas'], rating: 4.9, cep: '90410-000', amenities: ['CrossFit', 'Olympic lifting', 'Mobility'] },

  // Salvador - BA (40xxx-xxx, 41xxx-xxx)
  { id: 'g21', name: 'Bahia Beach Fitness', address: 'Av. Oceânica, 1000', city: 'Salvador', state: 'BA', benefits: ['Axé fitness'], rating: 4.6, cep: '40140-000', phone: '(71) 3456-7890', amenities: ['Dança', 'Capoeira', 'Beach'] },
  { id: 'g22', name: 'Salvador Strong', address: 'Rua Chile, 200', city: 'Salvador', state: 'BA', benefits: ['Acarajé pós-treino'], rating: 4.3, cep: '40020-000', amenities: ['Cultural', 'Musculação', 'Cardio'] },

  // Fortaleza - CE (60xxx-xxx)
  { id: 'g23', name: 'Ceará Fitness Club', address: 'Av. Beira Mar, 500', city: 'Fortaleza', state: 'CE', benefits: ['Forró fitness'], rating: 4.5, cep: '60165-000', phone: '(85) 3456-7890', amenities: ['Praia', 'Dança', 'Kitesurf'] },
  { id: 'g24', name: 'Dragão do Mar Gym', address: 'Centro Dragão do Mar', city: 'Fortaleza', state: 'CE', benefits: ['Cultural fitness'], rating: 4.4, cep: '60025-000', amenities: ['Arte', 'Cultura', 'Funcional'] },

  // Recife - PE (50xxx-xxx, 51xxx-xxx, 52xxx-xxx)
  { id: 'g25', name: 'Pernambuco Power', address: 'Av. Boa Viagem, 1200', city: 'Recife', state: 'PE', benefits: ['Frevo fitness'], rating: 4.7, cep: '51020-000', phone: '(81) 3456-7890', amenities: ['Praia', 'Dança', 'Surf'] },
  { id: 'g26', name: 'Marco Zero Fitness', address: 'Rua do Bom Jesus, 100', city: 'Recife', state: 'PE', benefits: ['História fitness'], rating: 4.2, cep: '50030-000', amenities: ['Centro histórico', 'Cultural', 'Caminhada'] },

  // Curitiba - PR (80xxx-xxx, 81xxx-xxx)
  { id: 'g27', name: 'Curitiba Eco Fit', address: 'Rua XV de Novembro, 800', city: 'Curitiba', state: 'PR', benefits: ['Bike grátis'], rating: 4.8, cep: '80020-000', phone: '(41) 3456-7890', amenities: ['Ecológico', 'Bike', 'Sustentável'] },
  { id: 'g28', name: 'Paraná Strong Academy', address: 'Av. Marechal Deodoro, 600', city: 'Curitiba', state: 'PR', benefits: ['Mate gelado'], rating: 4.5, cep: '80010-000', amenities: ['Tradicional', 'Funcional', 'Outdoor'] },

  // Goiânia - GO (74xxx-xxx)
  { id: 'g29', name: 'Goiás Power Gym', address: 'Av. T-9, 1000', city: 'Goiânia', state: 'GO', benefits: ['Sertanejo fitness'], rating: 4.4, cep: '74140-000', phone: '(62) 3456-7890', amenities: ['Country', 'Dança', 'Rodeio fit'] },
  { id: 'g30', name: 'Centro-Oeste Fitness', address: 'Setor Bueno, Quadra A', city: 'Goiânia', state: 'GO', benefits: ['Pequi protein'], rating: 4.3, cep: '74210-000', amenities: ['Regional', 'Funcional', 'Nutri'] },

  // Belém - PA (66xxx-xxx)
  { id: 'g31', name: 'Amazônia Fitness', address: 'Av. Presidente Vargas, 800', city: 'Belém', state: 'PA', benefits: ['Açaí pós-treino'], rating: 4.6, cep: '66017-000', phone: '(91) 3456-7890', amenities: ['Amazônico', 'Natural', 'Açaí bar'] },
  { id: 'g32', name: 'Pará Strong Nature', address: 'Rua dos Mundurucus, 400', city: 'Belém', state: 'PA', benefits: ['Trilha inclusa'], rating: 4.5, cep: '66050-000', amenities: ['Natureza', 'Trilha', 'Aventura'] },

  // Manaus - AM (69xxx-xxx)
  { id: 'g33', name: 'Manaus Jungle Gym', address: 'Av. Eduardo Ribeiro, 600', city: 'Manaus', state: 'AM', benefits: ['Guaraná natural'], rating: 4.7, cep: '69010-000', phone: '(92) 3456-7890', amenities: ['Jungle', 'Aventura', 'Guaraná'] },
  { id: 'g34', name: 'Amazonas Power', address: 'Rua 10 de Julho, 300', city: 'Manaus', state: 'AM', benefits: ['Peixe grelhado'], rating: 4.4, cep: '69005-000', amenities: ['Regional', 'Pesca esportiva', 'Grill'] },

  // Maceió - AL (57xxx-xxx)
  { id: 'g35', name: 'Alagoas Beach Fit', address: 'Av. Dr. Antônio Gouveia, 500', city: 'Maceió', state: 'AL', benefits: ['Sururu fitness'], rating: 4.5, cep: '57035-000', phone: '(82) 3456-7890', amenities: ['Praia', 'Frutos do mar', 'Beach volley'] },

  // João Pessoa - PB (58xxx-xxx)
  { id: 'g36', name: 'Paraíba Sunset Gym', address: 'Av. Cabo Branco, 200', city: 'João Pessoa', state: 'PB', benefits: ['Pôr do sol'], rating: 4.8, cep: '58045-000', phone: '(83) 3456-7890', amenities: ['Pôr do sol', 'Praia', 'Romântico'] },

  // Natal - RN (59xxx-xxx)
  { id: 'g37', name: 'Rio Grande Fitness', address: 'Av. Engenheiro Roberto Freire, 1000', city: 'Natal', state: 'RN', benefits: ['Dunas training'], rating: 4.6, cep: '59090-000', phone: '(84) 3456-7890', amenities: ['Dunas', 'Aventura', 'Sand workout'] },

  // Teresina - PI (64xxx-xxx)
  { id: 'g38', name: 'Piauí Fitness Center', address: 'Av. Frei Serafim, 800', city: 'Teresina', state: 'PI', benefits: ['Baião de dois'], rating: 4.3, cep: '64001-000', phone: '(86) 3456-7890', amenities: ['Regional', 'Tradicional', 'Culinária'] },

  // São Luís - MA (65xxx-xxx)
  { id: 'g39', name: 'Maranhão Reggae Fit', address: 'Rua Grande, 400', city: 'São Luís', state: 'MA', benefits: ['Reggae fitness'], rating: 4.7, cep: '65010-000', phone: '(98) 3456-7890', amenities: ['Reggae', 'Dança', 'Cultural'] },

  // Aracaju - SE (49xxx-xxx)
  { id: 'g40', name: 'Sergipe Beach Club', address: 'Av. Ivo do Prado, 600', city: 'Aracaju', state: 'SE', benefits: ['Caranguejo fit'], rating: 4.4, cep: '49010-000', phone: '(79) 3456-7890', amenities: ['Praia', 'Frutos do mar', 'Beach soccer'] },

  // Vitória - ES (29xxx-xxx)
  { id: 'g41', name: 'Espírito Santo Fitness', address: 'Av. Princesa Isabel, 300', city: 'Vitória', state: 'ES', benefits: ['Moqueca pós-treino'], rating: 4.5, cep: '29010-000', phone: '(27) 3456-7890', amenities: ['Capixaba', 'Moqueca', 'Praia'] },

  // Campo Grande - MS (79xxx-xxx)
  { id: 'g42', name: 'Mato Grosso Sul Pantanal Gym', address: 'Av. Afonso Pena, 2000', city: 'Campo Grande', state: 'MS', benefits: ['Pantanal adventure'], rating: 4.6, cep: '79002-000', phone: '(67) 3456-7890', amenities: ['Pantanal', 'Natureza', 'Pescaria'] },

  // Cuiabá - MT (78xxx-xxx)
  { id: 'g43', name: 'Mato Grosso Arena Fitness', address: 'Av. Miguel Sutil, 1500', city: 'Cuiabá', state: 'MT', benefits: ['Pacu assado'], rating: 4.7, cep: '78048-000', phone: '(65) 3456-7890', amenities: ['Arena', 'Pesca', 'Pantanal'] },

  // Florianópolis - SC (88xxx-xxx)
  { id: 'g44', name: 'Ilha da Magia Fitness', address: 'Av. Beira Mar Norte, 800', city: 'Florianópolis', state: 'SC', benefits: ['Surf incluso'], rating: 4.9, cep: '88015-000', phone: '(48) 3456-7890', amenities: ['Surf', 'Ilha', 'Magia'] },
  { id: 'g45', name: 'Santa Catarina Beach Gym', address: 'Lagoa da Conceição, 200', city: 'Florianópolis', state: 'SC', benefits: ['Stand up paddle'], rating: 4.8, cep: '88062-000', amenities: ['Lagoa', 'SUP', 'Natureza'] },

  // Palmas - TO (77xxx-xxx)
  { id: 'g46', name: 'Tocantins Cerrado Fitness', address: 'Quadra 104 Norte', city: 'Palmas', state: 'TO', benefits: ['Pequi smoothie'], rating: 4.2, cep: '77001-000', phone: '(63) 3456-7890', amenities: ['Cerrado', 'Pequi', 'Natureza'] },

  // Rio Branco - AC (69900-xxx)
  { id: 'g47', name: 'Acre Floresta Gym', address: 'Rua Benjamin Constant, 400', city: 'Rio Branco', state: 'AC', benefits: ['Castanha do Pará'], rating: 4.3, cep: '69900-000', phone: '(68) 3456-7890', amenities: ['Floresta', 'Castanha', 'Amazônia'] },

  // Boa Vista - RR (69300-xxx)
  { id: 'g48', name: 'Roraima Fronteira Fitness', address: 'Av. Capitão Ene Garcês, 600', city: 'Boa Vista', state: 'RR', benefits: ['Tacacá energy'], rating: 4.4, cep: '69301-000', phone: '(95) 3456-7890', amenities: ['Fronteira', 'Tacacá', 'Energia'] },

  // Macapá - AP (68900-xxx)
  { id: 'g49', name: 'Amapá Equinox Gym', address: 'Av. Presidente Vargas, 1000', city: 'Macapá', state: 'AP', benefits: ['Marco zero fitness'], rating: 4.5, cep: '68900-000', phone: '(96) 3456-7890', amenities: ['Equinox', 'Marco zero', 'Geografia'] },

  // Porto Velho - RO (76800-xxx)
  { id: 'g50', name: 'Rondônia Madeira Fitness', address: 'Av. Carlos Gomes, 800', city: 'Porto Velho', state: 'RO', benefits: ['Tambaqui grelhado'], rating: 4.6, cep: '76801-000', phone: '(69) 3456-7890', amenities: ['Madeira', 'Tambaqui', 'Rio'] }
];

export function findGymsByCep(cep: string): Gym[] {
  // Simula por "faixa" de CEP - primeiros 2 dígitos
  const cepPrefix = (cep || '').replace(/\D/g, '').slice(0, 2);
  return GYMS.filter(g => g.cep.slice(0, 2) === cepPrefix);
}