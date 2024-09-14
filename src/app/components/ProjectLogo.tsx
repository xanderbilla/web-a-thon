import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  onlyProjectLogo?: boolean;
}

export default function ProjectLogo({ onlyProjectLogo }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Link href="/">
        {!onlyProjectLogo && (
          <>
            <Image src="/logo.jpeg" alt="AWS Logo" width={40} height={40} />
            <Image
              src="/icons/v_bar.png"
              alt="Vertical bar"
              width={10}
              height={40}
            />
          </>
        )}
        <Image
          src="/logo.jpeg"
          alt="AWS Amplify Logo"
          width={160}
          height={40}
          className="object-contain"
        />
      </Link>
    </div>
  );
}
