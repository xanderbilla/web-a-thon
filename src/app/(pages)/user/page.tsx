"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function page() {
  const messages = [
    { id: 1, role: "user", content: "Hello!" },
    { id: 2, role: "assistant", content: "Hi there!" },
    { id: 3, role: "user", content: "How are you?" },
    { id: 4, role: "assistant", content: "I'm good, thanks!" },
  ];

  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <Card className="w-[440px] ">
        <CardHeader>
          <CardTitle> Chat AI </CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-full w-full pr-4">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className="flex gap-3 text-slate-600 text-sm mb-4"
                >
                  {message.role === "user" && (
                    <Avatar>
                      <AvatarFallback>TP</AvatarFallback>
                      <AvatarImage src="https://github.com/tamirespatrocinio.png" />
                    </Avatar>
                  )}
                  {message.role === "assistant" && (
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                  )}

                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role === "user" ? "Usuário" : "AI"}
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="How Can I help you?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit" className="h-auto">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </main>
  );
}
