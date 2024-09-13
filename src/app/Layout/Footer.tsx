import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full bg-white text-gray-800 py-6 rounded-t-xl ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Branding / Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <ProjectLogo onlyProjectLogo />
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">Web-A-Thon</h3>
          <p className="text-sm md:text-base mb-1">&copy; 2024, Sponsored by On-Demand</p>
          <p className="text-sm md:text-base opacity-75">
            Developed by <Link className="underline text-gray-700 text-center" href="/">UNDEFINED-TEAM</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
