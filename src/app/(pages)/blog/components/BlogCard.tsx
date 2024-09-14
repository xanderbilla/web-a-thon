import { Arrow } from "@/Icons/Arrow";
import React from "react";

type Props = {
  userPhoto?: string;
  username?: string;
};

export default function BlogCard({ userPhoto, username }: Props) {
  return (
    <div className="h-32 flex items-center justify-between px-6 py-4 border-b border-slate-400 shadow-sm rounded-xl gap-4 transition-transform transform hover:scale-105">
      <div className="flex items-center gap-4">
        {/* User Photo */}
        {userPhoto && (
          <div className="relative flex items-center justify-center w-14 h-14 p-1">
            <img
              src={userPhoto}
              alt="User Photo"
              className="w-full h-full rounded-full border-2 border-white shadow-md object-cover"
            />
          </div>
        )}
        
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-medium my-2">Title</h1>
          <span className="text-slate-800/80 font-medium">This is a caption</span>
          
          {/* Username */}
          {username && (
            <p className="text-sm text-gray-500 mt-2">{username}</p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="my-4 text-blue-500 font-medium hover:underline">Read More</span>
        <Arrow className="my-2 text-blue-500" />
      </div>
    </div>
  );
}
