// components/email_input.tsx
import { useCounterStore } from "@/store";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface EmailInputProps {
  onEmailSubmit: (email: string) => void;
}

export default function EmailInput({ onEmailSubmit }: EmailInputProps) {
  const [email, setEmail] = useState("");

  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mt-8">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <Button
        type="submit"
        className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Send OTP
      </Button>
    </form>
  );
}
