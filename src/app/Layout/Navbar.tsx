import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const nav = [
    { name: "Home", path: "/" },
    { name: "Community", path: "/blog" },
    { name: "Assist", path: "/assist" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <header className="top-0 left-0 w-full h-20 flex items-center justify-between px-4 bg-[#FFFF] shadow-sm z-50 rounded-sm">
      <ProjectLogo onlyProjectLogo />
      <nav className="flex items-center gap-6">
        {nav.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="text-xl px-4 font-medium transition duration-300 ease-in-out hover:bg-black hover:text-white py-1 rounded-full"
          >
            <span className="flex-1 text-center">{item.name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
