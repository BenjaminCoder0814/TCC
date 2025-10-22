import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  loading: boolean;
  notifications: Notification[];
  searchQuery: string;
  currentPage: string;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  setLoading: (loading: boolean) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: string) => void;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  autoHide?: boolean;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      sidebarOpen: false,
      loading: false,
      notifications: [],
      searchQuery: '',
      currentPage: '/',

      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme });
        
        // Aplicar tema no document
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
      },

      toggleSidebar: () => {
        set({ sidebarOpen: !get().sidebarOpen });
      },

      setLoading: (loading: boolean) => {
        set({ loading });
      },

      addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => {
        const newNotification: Notification = {
          ...notification,
          id: `notif-${Date.now()}`,
          timestamp: new Date().toISOString()
        };

        set({ 
          notifications: [newNotification, ...get().notifications] 
        });

        // Auto-hide notifications
        if (notification.autoHide !== false) {
          setTimeout(() => {
            get().removeNotification(newNotification.id);
          }, 5000);
        }
      },

      removeNotification: (id: string) => {
        set({ 
          notifications: get().notifications.filter(n => n.id !== id) 
        });
      },

      clearNotifications: () => {
        set({ notifications: [] });
      },

      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
      },

      setCurrentPage: (page: string) => {
        set({ currentPage: page });
      }
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({ 
        theme: state.theme,
        sidebarOpen: state.sidebarOpen 
      })
    }
  )
);

// Initialize theme on load
if (typeof window !== 'undefined') {
  const storedTheme = localStorage.getItem('ui-storage');
  if (storedTheme) {
    try {
      const { state } = JSON.parse(storedTheme);
      if (state?.theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {
      // Ignore parsing errors
    }
  }
}