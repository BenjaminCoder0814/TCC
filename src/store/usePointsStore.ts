import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PointsState = {
  points: number;
  lastAwardAt?: number;
  award: (value: number, reason?: string) => void;
  reset: () => void;
};

export const usePointsStore = create<PointsState>()(
  persist(
    (set, get) => ({
      points: 0,
      award: (value) => set({ points: get().points + value, lastAwardAt: Date.now() }),
      reset: () => set({ points: 0 }),
    }),
    { name: 'ml_points' }
  )
);