import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProfile } from '../lib/types';

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<UserProfile>) => Promise<boolean>;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        // Simulação de login - substituir por API real
        if (email === 'admin@musclelevels.com' && password === '123456') {
          const user: UserProfile = {
            id: 'user-admin',
            name: 'Admin User',
            email: email,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
            level: 'Bronze',
            points: 2500,
            assessments: [],
            preferences: {
              notifications: true,
              theme: 'light',
              language: 'pt-BR'
            },
            createdAt: new Date().toISOString()
          };
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      register: async (userData: Partial<UserProfile>) => {
        // Simulação de registro - substituir por API real
        const newUser: UserProfile = {
          id: `user-${Date.now()}`,
          name: userData.name || '',
          email: userData.email || '',
          avatar: userData.avatar || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80`,
          level: 'Bronze',
          points: 0,
          assessments: [],
          preferences: {
            notifications: true,
            theme: 'light',
            language: 'pt-BR'
          },
          createdAt: new Date().toISOString()
        };
        set({ user: newUser, isAuthenticated: true });
        return true;
      },

      updateProfile: (updates: Partial<UserProfile>) => {
        const { user } = get();
        if (user) {
          set({ user: { ...user, ...updates } });
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      })
    }
  )
);