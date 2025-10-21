import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  name: string;
  slug: string;
  price: number;
  qty: number;
  image: string;
  size?: string;     // p/ tênis/camiseta
  variant?: string;  // cor etc.
  isPlan?: boolean;  // plano não exige endereço
  discountPct?: number; // % desconto
};

type CartState = {
  items: CartItem[];
  coupon?: { code: string; valuePct: number } | null;
  add: (item: CartItem) => void;
  remove: (id: string, size?: string) => void;
  updateQty: (id: string, qty: number, size?: string) => void;
  setCoupon: (code: string, valuePct: number) => void;
  clearCoupon: () => void;
  clear: () => void;
  subtotal: () => number;
  discount: () => number;
  total: (shipping?: number) => number;
  count: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      coupon: null,
      add: (item) => {
        const items = [...get().items];
        const key = (i: CartItem) => `${i.id}__${i.size ?? ''}`;
        const idx = items.findIndex(i => key(i) === key(item));
        if (idx >= 0 && items[idx]) {
          items[idx].qty += item.qty;
        } else {
          items.push(item);
        }
        set({ items });
      },
      remove: (id, size) => {
        set({ items: get().items.filter(i => !(i.id === id && i.size === size)) });
      },
      updateQty: (id, qty, size) => {
        set({
          items: get().items.map(i =>
            i.id === id && i.size === size ? { ...i, qty: Math.max(1, qty) } : i
          ),
        });
      },
      setCoupon: (code, valuePct) => set({ coupon: { code, valuePct } }),
      clearCoupon: () => set({ coupon: null }),
      clear: () => set({ items: [], coupon: null }),
      subtotal: () => get().items.reduce((s, i) => s + i.price * i.qty, 0),
      discount: () => {
        const c = get().coupon;
        return c ? (get().subtotal() * c.valuePct) / 100 : 0;
      },
      total: (shipping = 0) => get().subtotal() - get().discount() + shipping,
      count: () => get().items.reduce((s, i) => s + i.qty, 0),
    }),
    { name: 'ml_cart' }
  )
);