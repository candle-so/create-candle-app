import React from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface ContextDrawerProps {
  open: boolean;
  title: any;
  onCloseDraw: any;

  children: React.ReactNode;
}

export function ContextDrawer({ open, title, onCloseDraw, children }: ContextDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onCloseDraw}>
      <SheetContent className="w-4/5 sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {children}
        <SheetFooter className="bottom-0 absolute left-0 w-full p-4">
          <SheetClose className="w-full" asChild>
            {/* <Button>{submitButtonText}</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
