export type Category = 'roupas' | 'acessorios' | 'equipamentos' | 'suplementos';
export type Region = 'BR' | 'SP' | 'MG' | 'RJ' | 'Outros';

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;          // preço cheio
  discountPrice?: number; // preço com desconto (opcional)
  category: Category;
  rating: number;         // 0..5
  reviewsCount: number;
  badges?: string[];      // ['-20%', 'NOVO']
  images: string[];
  weightKg?: number;      // para frete simulado
  featured?: boolean;     // produto em destaque
  options?: {
    sizes?: string[];     // P, M, G, 38, 39, 40...
    colors?: string[];
  };
}

export interface CartItem {
  productId: string;
  qty: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Coupon {
  code: string;
  percentage?: number; // 10 -> 10% off
  freeShipping?: boolean;
  minValue?: number;
}

export interface Professional {
  id: string;
  name: string;
  specialty: 'Nutricionista' | 'Personal Trainer' | 'Fisioterapeuta';
  city: string;
  state: string; // 'SP', 'RJ'...
  rating: number;
  price: number; // consulta/sessão
  bio: string;
  cvHighlights: string[]; // currículo resumido
  avatar: string;
  tags: string[];
  modalities: string[]; // 'online', 'presencial'
  languages?: string[];
}

export interface Gym {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;  // 'SP'
  cepPrefix: string; // ex.: '13165' para ENG COELHO (simulação)
  rating: number;
  perks?: string[];   // '15% off para membros Muscle Levels'
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  publishedAt: string;
  tags: string[];
}

export interface AssessmentAnswer {
  questionId: string;
  answer: string | number | string[];
}

export interface AssessmentPlan {
  goal: 'hipertrofia' | 'emagrecimento' | 'condicionamento' | 'definicao';
  trainingDays: number;
  location: 'casa' | 'academia';
  equipment: string[];
  dietFocus: 'hiperproteica' | 'lowcarb' | 'equilibrada' | 'vegetariana';
  notes: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string; // emoji/url
  city?: string;
  state?: string;
  points: number;
  savedPlans: AssessmentPlan[];
  favorites: string[]; // product ids
}

export interface RankEntry {
  userId: string;
  userName: string;
  city: string;
  state: string;
  country: string;
  points: number;
}