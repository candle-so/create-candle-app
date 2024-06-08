// components/inbox.tsx
import React, { useState } from "react";
import {
  useConversationsStore,
  Conversation,
} from "@/store/conversations.store";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import ConversationList from "@/components/conversation_list";
import ConversationDetail from "@/components/conversation_detail";
import useWindowSize from "@/hooks/use_window_size.hook";

export default function Inbox() {
  const conversations = useConversationsStore((state) => state.conversations);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  const isMobile = width && width <= 768;

  const handleBack = () => {
    setSelectedConversation(null);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4">
        <Button onClick={() => setIsOpen(true)}>Open Inbox</Button>
      </div>

      {isMobile ? (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button className="hidden">Open Inbox</Button>
          </DrawerTrigger>
          <DrawerContent>
            {selectedConversation ? (
              <div>
                <Button onClick={handleBack}>Back</Button>
                <ConversationDetail conversation={selectedConversation} />
              </div>
            ) : (
              <ConversationList
                conversations={conversations}
                onSelectConversation={(conversation) =>
                  setSelectedConversation(conversation)
                }
              />
            )}
          </DrawerContent>
        </Drawer>
      ) : (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="hidden">Open Inbox</Button>
          </SheetTrigger>
          <SheetContent side="aboveButton" className="bottom-16 right-4 min-h-[600px] w-96 rounded">
            {selectedConversation ? (
              <div className="space-y-4">
                <Button variant="ghost" onClick={handleBack}> {"<-"} Back to Inbox</Button>
                <ConversationDetail conversation={selectedConversation} />
              </div>
            ) : (
              <ConversationList
                conversations={conversations}
                onSelectConversation={(conversation) =>
                  setSelectedConversation(conversation)
                }
              />
            )}
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
