import { Arrow } from "@/Icons/Arrow";
import React from "react";

type Props = {};

export default function BlogCard({}: Props) {
  return (
    <div className="h-32 flex items-center justify-between px-4 border-b border-slate-400 shadow-sm rounded-xl gap-4 transition-transform transform hover:scale-105">
      <div className="">
        <h1 className="text-4xl font-medium my-2">Tittle</h1>
        <span className="text-slate-800/80 font-medium">
          This is a caption{" "}
        </span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="my-4 font-medium">Read More</span>
        <Arrow className="my-2" />
      </div>
    </div>
  );
}
