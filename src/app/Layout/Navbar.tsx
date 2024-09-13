import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const nav = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "User", path: "/user" },
  ];

  return (
    <header className="w-full h-20 flex items-center justify-between px-4">
      <ProjectLogo onlyProjectLogo />
      <nav className="flex items-center gap-4">
        {nav.map((item, index) => (
          <Link key={index} href={item.path} className="text-lg font-medium">
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
