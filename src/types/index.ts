export interface User {
  id: string;
  name: string;
  email: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  points: number;
  avatar?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'suplementos' | 'equipamentos' | 'roupas' | 'acessorios';
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
  featured: boolean;
}

export interface Professional {
  id: string;
  name: string;
  specialties: string[];
  rating: number;
  reviews: number;
  image: string;
  location: string;
  price: number;
  description: string;
  experience: number;
  certifications: string[];
  availability: boolean;
}

export interface Gym {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  price: number;
  description: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: Date;
  category: string;
  readTime: number;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  type: 'radio' | 'checkbox' | 'scale' | 'text';
  options?: string[];
  required: boolean;
}

export interface AssessmentResult {
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  recommendations: {
    exercises: string[];
    nutrition: string[];
    professionals: string[];
  };
  points: number;
}

export interface RankingUser {
  id: string;
  name: string;
  level: string;
  points: number;
  avatar?: string;
  position: number;
}