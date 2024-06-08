"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConversationsStore = void 0;
// store/conversations.store.ts
const zustand_1 = require("zustand");
const initialConversations = [
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
exports.useConversationsStore = (0, zustand_1.create)((set) => ({
    conversations: initialConversations,
    addMessage: (conversationId, message) => set((state) => ({
        conversations: state.conversations.map((conversation) => conversation.id === conversationId
            ? { ...conversation, messages: [...conversation.messages, message] }
            : conversation),
    })),
    addConversation: (conversation) => set((state) => ({
        conversations: [...state.conversations, conversation],
    })),
}));
