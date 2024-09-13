import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SearchIcon } from "lucide-react";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-start justify-start my-8 gap-8">
      <div className="w-full min-h-72 flex flex-col gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-50 p-2 rounded-lg">
          <h1 className="text-5xl font-extrabold">
            This is title
            </h1>
          <div className="flex items-center justify-start gap-2 text-lg">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-medium">Xander</span>
            {" | "}
            <span className="font-base">05 September, 2021</span>
          </div>
        </div>
        <article className="max-w-none prose md:prose-lg lg:prose-xl">
          <h2>Garlic bread with cheese: What the science tells us</h2>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </div>
    </main>
  );
}
