"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import axios from "axios";
type Props = {};

export default function ScanQR({}: Props) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState(
    "Scan the QR code to get the information about the food you are about to eat."
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/agent/scan", {
        query: input,
      })
      .then((response) => {
        setMessage(response.data.data.answer);
      })
      .catch((error) => {
        setMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="">
      <div className="flex flex-col-reverse gap-4">
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Enter the barcode..."
            type="number"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" className="h-auto">
            Send
          </Button>
        </form>
      </div>
      <div className="w-full mt-4 prose">
        <p className="leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
