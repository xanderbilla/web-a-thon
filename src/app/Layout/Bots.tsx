"use client";

import Image from "next/image";
import React from "react";
import Chat from "../(pages)/assist/components/Chat";

type Props = {};

export default function Bots({}: Props) {
  const [showChat, setShowChat] = React.useState(false);

  return (
    <>
      <div className="relative">
        <Image
          className="fixed z-50 bottom-16 right-16 h-16 w-16 bg-black text-white rounded-full cursor-pointer"
          src="/chatbot.png"
          width={80}
          height={80}
          alt="chatbot"
          onClick={() => setShowChat(!showChat)}
        />
      </div>
      {showChat && <Chat />}
    </>
  );
}
