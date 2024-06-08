// store/conversations.store.ts
import { create } from "zustand";

export type Message = {
  id: number;
  sender: "buyer" | "seller";
  content: string;
  timestamp: string;
  files?: string[];
};

export type Conversation = {
  id: number;
  plantId: number;
  plantName: string;
  messages: Message[];
};

type ConversationsStore = {
  conversations: Conversation[];
  addMessage: (conversationId: number, message: Message) => void;
  addConversation: (conversation: Conversation) => void;
};

const initialConversations: Conversation[] = [
  {
    id: 1,
    plantId: 101,
    plantName: "Aloe Vera",
    messages: [
      {
        id: 1,
        sender: "buyer",
        content: "Hi, can you send me a recent photo of the Aloe Vera?",
        timestamp: "2023-06-01T12:00:00Z",
      },
      {
        id: 2,
        sender: "seller",
        content: "Sure, here it is.",
        timestamp: "2023-06-01T12:05:00Z",
        files: ["https://source.unsplash.com/random/600x400?aloe-vera"],
      },
    ],
  },
  {
    id: 2,
    plantId: 102,
    plantName: "Bonsai Tree",
    messages: [
      {
        id: 1,
        sender: "buyer",
        content: "Is the Bonsai Tree still available?",
        timestamp: "2023-06-02T14:00:00Z",
      },
      {
        id: 2,
        sender: "seller",
        content: "Yes, it is.",
        timestamp: "2023-06-02T14:10:00Z",
      },
    ],
  },
];

export const useConversationsStore = create<ConversationsStore>((set) => ({
  conversations: initialConversations,
  addMessage: (conversationId: number, message: Message) =>
    set((state) => ({
      conversations: state.conversations.map((conversation) =>
        conversation.id === conversationId
          ? { ...conversation, messages: [...conversation.messages, message] }
          : conversation
      ),
    })),
  addConversation: (conversation: Conversation) =>
    set((state) => ({
      conversations: [...state.conversations, conversation],
    })),
}));
