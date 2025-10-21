// Importações serão adicionadas depois quando tivermos os dados mock
import type { Product } from '@/data/products';
import type { Professional } from '@/data/professionals';
import type { Post } from '@/data/posts';

export function globalSearch(query: string, products: Product[] = [], pros: Professional[] = [], posts: Post[] = []) {
  const q = query.toLowerCase();
  const filteredProducts = products.filter(p => 
    [p.name, p.category, p.tags?.join(' ')].join(' ').toLowerCase().includes(q)
  );
  const filteredPros = pros.filter(p => 
    [p.name, p.specialty, p.city, p.state].join(' ').toLowerCase().includes(q)
  );
  const filteredPosts = posts.filter(p => 
    [p.title, p.tags?.join(' ')].join(' ').toLowerCase().includes(q)
  );
  return { products: filteredProducts, pros: filteredPros, posts: filteredPosts };
}

export function formatSearchQuery(query: string): string {
  return query.trim().toLowerCase();
}