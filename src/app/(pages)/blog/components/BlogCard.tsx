import { Arrow } from "@/Icons/Arrow";
import Link from "next/link";
import React from "react";

type Props = {};

export default function BlogCard({}: Props) {
  return (
    <Link href="/blog/blog1" className="h-32 bg-slate-200 flex items-center rounded-md justify-between px-4">
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
    </Link>
  );
}
