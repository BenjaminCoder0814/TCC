import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, Professional, BlogPost } from '../lib/types';

interface FavoritesState {
  products: Product[];
  professionals: Professional[];
  blogPosts: BlogPost[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  isProductFavorited: (productId: string) => boolean;
  addProfessional: (professional: Professional) => void;
  removeProfessional: (professionalId: string) => void;
  isProfessionalFavorited: (professionalId: string) => boolean;
  addBlogPost: (post: BlogPost) => void;
  removeBlogPost: (postId: string) => void;
  isBlogPostFavorited: (postId: string) => boolean;
  clearAll: () => void;
  getFavoritesCount: () => number;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      products: [],
      professionals: [],
      blogPosts: [],

      addProduct: (product: Product) => {
        const { products } = get();
        if (!products.find(p => p.id === product.id)) {
          set({ products: [...products, product] });
        }
      },

      removeProduct: (productId: string) => {
        const { products } = get();
        set({ products: products.filter(p => p.id !== productId) });
      },

      isProductFavorited: (productId: string) => {
        const { products } = get();
        return products.some(p => p.id === productId);
      },

      addProfessional: (professional: Professional) => {
        const { professionals } = get();
        if (!professionals.find(p => p.id === professional.id)) {
          set({ professionals: [...professionals, professional] });
        }
      },

      removeProfessional: (professionalId: string) => {
        const { professionals } = get();
        set({ professionals: professionals.filter(p => p.id !== professionalId) });
      },

      isProfessionalFavorited: (professionalId: string) => {
        const { professionals } = get();
        return professionals.some(p => p.id === professionalId);
      },

      addBlogPost: (post: BlogPost) => {
        const { blogPosts } = get();
        if (!blogPosts.find(p => p.id === post.id)) {
          set({ blogPosts: [...blogPosts, post] });
        }
      },

      removeBlogPost: (postId: string) => {
        const { blogPosts } = get();
        set({ blogPosts: blogPosts.filter(p => p.id !== postId) });
      },

      isBlogPostFavorited: (postId: string) => {
        const { blogPosts } = get();
        return blogPosts.some(p => p.id === postId);
      },

      clearAll: () => {
        set({ products: [], professionals: [], blogPosts: [] });
      },

      getFavoritesCount: () => {
        const { products, professionals, blogPosts } = get();
        return products.length + professionals.length + blogPosts.length;
      }
    }),
    {
      name: 'favorites-storage'
    }
  )
);