import React from "react";
import BlogPage from "../components/BlogPage";

type Props = {};

export default function page({}: Props) {
  
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-start justify-start my-8 gap-8">
      <BlogPage/>
    </main>
  );
}
