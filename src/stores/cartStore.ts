import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../lib/types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getShippingCost: () => number;
  getFinalTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.product.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          });
        } else {
          set({ items: [...items, { product, quantity }] });
        }
      },

      removeItem: (productId: string) => {
        const { items } = get();
        set({ items: items.filter(item => item.product.id !== productId) });
      },

      updateQuantity: (productId: string, quantity: number) => {
        const { items } = get();
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set({
          items: items.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          const price = item.product.salePrice || item.product.price;
          return total + (price * item.quantity);
        }, 0);
      },

      getShippingCost: () => {
        const { items } = get();
        const totalWeight = items.reduce((total, item) => 
          total + (item.product.weight * item.quantity), 0
        );
        
        // Cálculo simplificado de frete baseado no peso
        if (totalWeight === 0) return 0;
        if (totalWeight <= 1) return 15;
        if (totalWeight <= 3) return 25;
        if (totalWeight <= 5) return 35;
        return 50;
      },

      getFinalTotal: () => {
        const { getTotalPrice, getShippingCost } = get();
        return getTotalPrice() + getShippingCost();
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);