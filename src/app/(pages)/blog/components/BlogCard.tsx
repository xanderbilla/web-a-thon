import { Arrow } from "@/Icons/Arrow";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  data: {
    _id: string;
    title: string;
    content: string;
    author: string;
  };
};

export default function BlogCard({ data }: Props) {
  return (
    <div className="h-32 flex items-center justify-between px-6 py-4 border-b border-slate-400 shadow-sm rounded-xl gap-4 transition-transform transform hover:scale-105">
      <div className="flex items-center gap-4">
        {/* User Photo */}
        <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-medium my-2">{data.title}</h1>
          <span className="text-slate-800/80 font-medium">
            This is a caption
          </span>

          {/* Username */}
          {data?.author && <p className="text-sm text-gray-500 mt-2">{data?.author}</p>}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Link href={`/blog/${data?._id}`} className="my-4 hover:text-gray-500 font-medium">
          Read More
        </Link>
        <Arrow className="my-2 text-blue-500" />
      </div>
    </div>
  );
}
