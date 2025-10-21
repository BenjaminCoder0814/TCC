import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create<{ 
  ids: string[]; 
  toggle: (id: string) => void; 
  has: (id: string) => boolean 
}>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => {
        const setIds = new Set(get().ids);
        setIds.has(id) ? setIds.delete(id) : setIds.add(id);
        set({ ids: Array.from(setIds) });
      },
      has: (id) => get().ids.includes(id),
    }),
    { name: 'ml_favs' }
  )
);