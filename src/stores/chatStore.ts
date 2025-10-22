import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  toggleChat: () => void;
  sendMessage: (text: string) => void;
  clearMessages: () => void;
}

const BOT_RESPONSES = [
  "Olá! Como posso te ajudar hoje?",
  "Entendi sua dúvida. Que tal darmos uma olhada nos nossos profissionais?",
  "Interessante! Você já fez nossa avaliação física?",
  "Ótima pergunta! Nossos produtos podem te ajudar com isso.",
  "Vou conectar você com um especialista em breve.",
  "Que tal conferir nossos artigos sobre esse assunto?",
  "Posso te ajudar a encontrar a academia ideal na sua região.",
  "Seus pontos Muscle Levels podem ser usados para descontos!",
  "Temos várias opções que podem atender sua necessidade.",
  "Quer que eu agende uma consulta com um profissional?"
];

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      isOpen: false,
      messages: [
        {
          id: 'welcome',
          text: 'Olá! Sou o assistente virtual da Muscle Levels. Como posso te ajudar hoje?',
          isUser: false,
          timestamp: new Date().toISOString()
        }
      ],
      isTyping: false,

      toggleChat: () => {
        set({ isOpen: !get().isOpen });
      },

      sendMessage: (text: string) => {
        const userMessage: ChatMessage = {
          id: `msg-${Date.now()}`,
          text,
          isUser: true,
          timestamp: new Date().toISOString()
        };

        set({ 
          messages: [...get().messages, userMessage],
          isTyping: true 
        });

        // Simular resposta do bot
        setTimeout(() => {
          const randomResponse = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
          const botMessage: ChatMessage = {
            id: `bot-${Date.now()}`,
            text: randomResponse,
            isUser: false,
            timestamp: new Date().toISOString()
          };

          set({ 
            messages: [...get().messages, botMessage],
            isTyping: false 
          });
        }, 1000 + Math.random() * 2000); // 1-3 segundos de delay
      },

      clearMessages: () => {
        set({ 
          messages: [
            {
              id: 'welcome',
              text: 'Olá! Sou o assistente virtual da Muscle Levels. Como posso te ajudar hoje?',
              isUser: false,
              timestamp: new Date().toISOString()
            }
          ] 
        });
      }
    }),
    {
      name: 'chat-storage',
      partialize: (state) => ({ 
        messages: state.messages 
      })
    }
  )
);