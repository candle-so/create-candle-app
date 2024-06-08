// components/conversation_detail.tsx
import React, { useState } from "react";
import { Conversation, Message } from "@/store/conversations.store";
import { useConversationsStore } from "@/store/conversations.store";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Textarea } from "./ui/textarea";

type ConversationDetailProps = {
  conversation: Conversation;
};

export default function ConversationDetail({
  conversation,
}: ConversationDetailProps) {
  const addMessage = useConversationsStore((state) => state.addMessage);
  const [messageContent, setMessageContent] = useState("");
  const [isBuyer, setIsBuyer] = useState(true); // Assume user is buyer for simplicity

  const handleSendMessage = () => {
    const newMessage: Message = {
      id: Date.now(),
      sender: isBuyer ? "buyer" : "seller",
      content: messageContent,
      timestamp: new Date().toISOString(),
    };
    addMessage(conversation.id, newMessage);
    setMessageContent("");
  };

  return (
    <div className="w-full bg-slate-100 rounded p-4 overflow-auto">
      <div className="overflow-y-auto max-h-96">
        {conversation.messages.map((message) => (
          <div
            key={message.id}
            className={`p-2 my-2 ${
              message.sender === "buyer" ? "text-right" : "text-left"
            }`}
          >
            <p className="text-sm text-gray-600">{message.timestamp}</p>
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === "buyer" ? "bg-green-200" : "bg-blue-200"
              }`}
            >
              <p>{message.content}</p>
              {message.files &&
                message.files.map((file, index) => (
                  <Image
                    key={index}
                    src={file}
                    alt={`file-${index}`}
                    width={200}
                    height={200}
                    className="mt-2 rounded"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Textarea
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage} className="mt-2">
          Send
        </Button>
      </div>
    </div>
  );
}
