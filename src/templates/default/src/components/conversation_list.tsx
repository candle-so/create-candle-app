// components/conversation_list.tsx
import React from "react";
import { Conversation } from "@/store/conversations.store";
import { Button } from "@/components/ui/button";

type ConversationListProps = {
  conversations: Conversation[];
  onSelectConversation: (conversation: Conversation) => void;
};

export default function ConversationList({
  conversations,
  onSelectConversation,
}: ConversationListProps) {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold mb-4">Inbox</h2>
      <Button className="mt-4 w-full">New Conversation</Button>
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className="p-2 border-b cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectConversation(conversation)}
        >
          <p className="font-semibold">{conversation.plantName}</p>
          <p className="text-sm text-gray-600">
            {conversation.messages[conversation.messages.length - 1]?.content}
          </p>
        </div>
      ))}
    </div>
  );
}
