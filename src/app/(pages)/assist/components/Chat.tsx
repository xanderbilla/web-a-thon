// "use client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import React, { useState } from "react";

// export default function Chat() {
//   const messages = [
//     { id: 1, role: "user", content: "Hello!" },
//     { id: 2, role: "assistant", content: "Hi there!" },
//     { id: 3, role: "user", content: "How are you?" },
//     { id: 4, role: "assistant", content: "I'm good, thanks!" },
//   ];

//   const [input, setInput] = useState("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Retrieve the authorization token from local storage
//     const authToken = localStorage.getItem("token");

//     if (!authToken) {
//       console.error("Authorization token is missing.");
//       return;
//     }

//     // Define your API endpoint
//     const apiEndpoint = "http://localhost:5000/api/agent/chat";

//     // Construct the request body
//     const requestBody = {
//       query: input,
//     };

//     try {
//       const response = await fetch(apiEndpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${authToken}`,
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log("Response data:", data);

//       // Optionally handle the response and update UI here

//     } catch (error) {
//       console.error("Error:", error);
//     }

//     // Clear the input field after submission
//     setInput("");
//   };

//   return (
//     <main className="flex flex-col items-center justify-center gap-8">
//       <Card className="w-full border-none shadow-none">
//         <CardHeader>
//           <CardTitle> Chat AI </CardTitle>
//           <CardDescription>
//             Using Vercel SDK to create a chat bot.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <ScrollArea className="h-full w-full pr-4">
//             {messages.map((message) => {
//               return (
//                 <div
//                   key={message.id}
//                   className="flex gap-3 text-slate-600 text-sm mb-4"
//                 >
//                   {message.role === "user" && (
//                     <Avatar>
//                       <AvatarFallback>TP</AvatarFallback>
//                       <AvatarImage src="https://github.com/tamirespatrocinio.png" />
//                     </Avatar>
//                   )}
//                   {message.role === "assistant" && (
//                     <Avatar>
//                       <AvatarImage src="https://github.com/shadcn.png" />
//                     </Avatar>
//                   )}

//                   <p className="leading-relaxed">
//                     <span className="block font-bold text-slate-700">
//                       {message.role === "user" ? "Usuário" : "AI"}
//                     </span>
//                     {message.content}
//                   </p>
//                 </div>
//               );
//             })}
//           </ScrollArea>
//         </CardContent>
//         <CardFooter>
//           <form className="w-full flex gap-2" onSubmit={handleSubmit}>
//             <Input
//               placeholder="How Can I help you?"
//               value={input}
//               onChange={handleInputChange}
//             />
//             <Button type="submit" className="h-auto">Send</Button>
//           </form>
//         </CardFooter>
//       </Card>
//     </main>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import axios from "axios";
type Props = {};
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      .post("http://localhost:5000/api/agent/chat", {
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
    <div className="flex flex-col-reverse">
      <div className="flex flex-col-reverse gap-4">
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Enter the barcode..."
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" className="h-auto">
            Send
          </Button>
        </form>
      </div>
      {message && (
        <div className="w-full mt-4 prose my-4 px-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="w-full leading-relaxed">{message}</p>
        </div>
      )}
    </div>
  );
}
