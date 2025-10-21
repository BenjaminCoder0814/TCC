import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  city?: string;
  state?: string;
  country?: string;
  avatar?: string; // emoji ou ícone
  elite?: boolean; // tema elite
};

type AuthState = {
  user: UserProfile | null;
  login: (u: UserProfile) => void;
  logout: () => void;
  update: (p: Partial<UserProfile>) => void;
  isAuthenticated: () => boolean;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      login: (u) => set({ user: u }),
      logout: () => set({ user: null }),
      update: (p) => set({ user: { ...(get().user as UserProfile), ...p } }),
      isAuthenticated: () => !!get().user,
    }),
    { name: 'ml_auth' }
  )
);