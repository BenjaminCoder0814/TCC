import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PointsState = {
  points: number;
  level: number;
  nextLevelPoints: number;
  lastAwardAt?: number;
  award: (value: number, reason?: string) => void;
  reset: () => void;
  calculateLevel: () => number;
  calculateNextLevelPoints: () => number;
};

export const usePointsStore = create<PointsState>()(
  persist(
    (set, get) => ({
      points: 0,
      level: 1,
      nextLevelPoints: 1000,
      
      calculateLevel: () => Math.floor(get().points / 1000) + 1,
      
      calculateNextLevelPoints: () => {
        const currentLevel = Math.floor(get().points / 1000) + 1;
        return currentLevel * 1000;
      },
      
      award: (value) => {
        const newPoints = get().points + value;
        const newLevel = Math.floor(newPoints / 1000) + 1;
        const nextLevelPoints = newLevel * 1000;
        
        set({ 
          points: newPoints, 
          level: newLevel,
          nextLevelPoints,
          lastAwardAt: Date.now() 
        });
      },
      
      reset: () => set({ 
        points: 0, 
        level: 1,
        nextLevelPoints: 1000 
      }),
    }),
    { name: 'ml_points' }
  )
);