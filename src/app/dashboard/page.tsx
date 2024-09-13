import React from "react";
import Dashboard from "./components/Dashboard";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-center justify-center my-8 gap-8">
      <Dashboard/>
    </main>
  );
}
