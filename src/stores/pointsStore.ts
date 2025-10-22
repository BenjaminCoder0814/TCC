import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PointsAction = 
  | 'assessment_complete'
  | 'product_purchase'
  | 'blog_read'
  | 'daily_login'
  | 'workout_log'
  | 'referral'
  | 'review_written'
  | 'challenge_complete';

interface PointsTransaction {
  id: string;
  action: PointsAction;
  points: number;
  description: string;
  date: string;
}

interface PointsState {
  totalPoints: number;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  transactions: PointsTransaction[];
  addPoints: (action: PointsAction, points: number, description: string) => void;
  getPointsForNextLevel: () => number;
  getLevelProgress: () => number;
  getRecentTransactions: (limit?: number) => PointsTransaction[];
}

const LEVEL_THRESHOLDS = {
  Bronze: 0,
  Silver: 1000,
  Gold: 2500,
  Platinum: 5000,
  Diamond: 10000
};

const POINTS_VALUES: Record<PointsAction, number> = {
  assessment_complete: 100,
  product_purchase: 50, // por R$ 10 gastos
  blog_read: 10,
  daily_login: 5,
  workout_log: 15,
  referral: 500,
  review_written: 25,
  challenge_complete: 200
};

export const usePointsStore = create<PointsState>()(
  persist(
    (set, get) => ({
      totalPoints: 0,
      level: 'Bronze',
      transactions: [],

      addPoints: (action: PointsAction, points: number, description: string) => {
        const transaction: PointsTransaction = {
          id: `tx-${Date.now()}`,
          action,
          points,
          description,
          date: new Date().toISOString()
        };

        const newTotalPoints = get().totalPoints + points;
        let newLevel = get().level;

        // Calcular novo nível baseado nos pontos
        if (newTotalPoints >= LEVEL_THRESHOLDS.Diamond) {
          newLevel = 'Diamond';
        } else if (newTotalPoints >= LEVEL_THRESHOLDS.Platinum) {
          newLevel = 'Platinum';
        } else if (newTotalPoints >= LEVEL_THRESHOLDS.Gold) {
          newLevel = 'Gold';
        } else if (newTotalPoints >= LEVEL_THRESHOLDS.Silver) {
          newLevel = 'Silver';
        } else {
          newLevel = 'Bronze';
        }

        set({
          totalPoints: newTotalPoints,
          level: newLevel,
          transactions: [transaction, ...get().transactions]
        });
      },

      getPointsForNextLevel: () => {
        const { totalPoints, level } = get();
        
        switch (level) {
          case 'Bronze':
            return LEVEL_THRESHOLDS.Silver - totalPoints;
          case 'Silver':
            return LEVEL_THRESHOLDS.Gold - totalPoints;
          case 'Gold':
            return LEVEL_THRESHOLDS.Platinum - totalPoints;
          case 'Platinum':
            return LEVEL_THRESHOLDS.Diamond - totalPoints;
          case 'Diamond':
            return 0; // Nível máximo
          default:
            return 0;
        }
      },

      getLevelProgress: () => {
        const { totalPoints, level } = get();
        
        let currentLevelMin = LEVEL_THRESHOLDS[level];
        let nextLevelMin: number;
        
        switch (level) {
          case 'Bronze':
            nextLevelMin = LEVEL_THRESHOLDS.Silver;
            break;
          case 'Silver':
            nextLevelMin = LEVEL_THRESHOLDS.Gold;
            break;
          case 'Gold':
            nextLevelMin = LEVEL_THRESHOLDS.Platinum;
            break;
          case 'Platinum':
            nextLevelMin = LEVEL_THRESHOLDS.Diamond;
            break;
          case 'Diamond':
            return 100; // Nível máximo
          default:
            return 0;
        }
        
        const progress = ((totalPoints - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
        return Math.min(100, Math.max(0, progress));
      },

      getRecentTransactions: (limit = 10) => {
        return get().transactions.slice(0, limit);
      }
    }),
    {
      name: 'points-storage'
    }
  )
);