import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Message = { 
  id: string; 
  from: string; 
  to: string; 
  text: string; 
  ts: number 
};

export type Thread = { 
  id: string; 
  title: string; 
  avatar?: string; 
  unread: number; 
  participants: string[]; 
  messages: Message[]; 
  type: 'amigo' | 'profissional' | 'suporte' | 'entregador' 
};

type ChatState = {
  threads: Thread[];
  send: (threadId: string, text: string, from: string, to: string) => void;
  markRead: (threadId: string) => void;
  addThread: (t: Thread) => void;
};

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      threads: [],
      addThread: (t) => set({ threads: [...get().threads, t] }),
      send: (threadId, text, from, to) => {
        const msg: Message = { id: crypto.randomUUID(), from, to, text, ts: Date.now() };
        set({
          threads: get().threads.map(t =>
            t.id === threadId
              ? { ...t, messages: [...t.messages, msg], unread: t.unread + 1 }
              : t
          )
        });
      },
      markRead: (threadId) => {
        set({ threads: get().threads.map(t => t.id === threadId ? { ...t, unread: 0 } : t) });
      }
    }),
    { name: 'ml_chat' }
  )
);