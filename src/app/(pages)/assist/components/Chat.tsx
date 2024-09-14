"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

export default function ScanQR({}: Props) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState(
    "What do you want to eat today???"
  );
  const [displayedMessage, setDisplayedMessage] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisplayedMessage(""); // Reset the displayed message
    axios
      .post("http://localhost:5000/api/agent/chat", {
        query: input,
      })
      .then((response) => {
        const answer = response.data.data.answer;
        simulateTyping(answer);
      })
      .catch((error) => {
        setMessage("An error occurred. Please try again.");
      });
  };

  const simulateTyping = (text: string) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedMessage((prev) => prev + text[index]);
      index++;
      if (index >= text.length) {
        clearInterval(intervalId);
        setMessage(text); // Set the final message to ensure full display
      }
    }, 50); // Adjust typing speed by changing the interval time
  };

  return (
    <div className=" h-96 flex flex-col-reverse">
      <div className="flex w-full p-4 flex-col-reverse gap-4">
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Write your text..."
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" className="h-auto">
            Send
          </Button>
        </form>
      </div>
      
      <div className="flex my-6 items-center justify-center">
          <h1 className="text-xl font-medium">Ask about your fitness issue??</h1>
        </div>
      {displayedMessage && (
        <div className="w-full mt-4 prose my-4 px-4">
          <div className="">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-medium">Shad</span>
          {" | "}
          </div>
          <p className="w-full leading-relaxed">{displayedMessage}</p>
        </div>
      )}
    </div>
  );
}
