"use client"

import React, { useEffect, useState } from "react"; // Add this import statement
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useParams } from "next/navigation";

type Props = {}

export default function BlogPage(Props: Props) {

    const [data, setData] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/posts/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

  return (
    <div className="w-full min-h-72 flex flex-col gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-50 p-2 rounded-lg">
          <h1 className="text-5xl font-extrabold">
           {data.title}
            </h1>
          <div className="flex items-center justify-start gap-2 text-lg">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-medium">{data.author}</span>
            {" | "}
            <span className="font-base">05 September, 2021</span>
          </div>
        </div>
        <article className="max-w-none prose md:prose-lg lg:prose-xl">
            {data.content}
        </article>
      </div>
  )
}