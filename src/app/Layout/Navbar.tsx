import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const nav = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "User", path: "/user" },
  ];

  return (
    <div className="w-full h-20 flex items-center justify-between gap-4">
      <ProjectLogo onlyProjectLogo />
      <div className="flex items-center justify-center gap-4">
        {nav.map((item, index) => (
          <Link key={index} href={item.path} className="text-lg font-medium">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
