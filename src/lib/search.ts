// Importações dos tipos de dados
import type { Product } from '../lib/types';

export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) return products;
  
  const q = query.toLowerCase();
  return products.filter(p => 
    [p.title, p.category, p.description, p.tags?.join(' ')].join(' ').toLowerCase().includes(q)
  );
}

export function globalSearch(query: string, products: Product[] = []) {
  const q = query.toLowerCase();
  const filteredProducts = products.filter(p => 
    [p.title, p.category, p.description, p.tags?.join(' ')].join(' ').toLowerCase().includes(q)
  );
  return { products: filteredProducts };
}

export function formatSearchQuery(query: string): string {
  return query.trim().toLowerCase();
}