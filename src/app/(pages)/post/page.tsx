import React from "react";
import ContentForm from "./components/ContentForm";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex flex-col items-start justify-start my-8 gap-8">
      <h1 className="font-bold text-5xl my-4">Create a Post!</h1>
      <ContentForm />
    </main>
  );
}
