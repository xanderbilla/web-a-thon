"use client"

import React, { useEffect, useState } from "react"; // Add this import statement

import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

export default function GridCard() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/posts/");
            setPosts(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, []);

  return (
    <main className="">
      <div className="flex items-center justify-between">
        <div className="p-2 px-4">
          <h1 className="my-2 text-6xl font-extrabold">Blog</h1>
          <span className="text-xl opacity-70 font-semibold">
            Everyday is not Sunday so work hard baby!!!
          </span>
        </div>
        <Link href="/post" className="m-4 px-4 py-2 bg-black rounded-md text-white">Create a Blog</Link>
      </div>

      <div className="p-4 grid grid-rows-6 gap-8">
        {posts?.map((post: any, index: number) => 
          <BlogCard key={index} data={post} />
        )}
      </div>
    </main>
  );
}
