import Footer from "@/app/Layout/Footer";
import Image from "next/image";
import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <main className="">
      <div className="p-2 px-4">
        <h1 className="my-2 text-6xl font-extrabold">Blog</h1>
        <span className="text-xl font-semibold">Everyday is not Sunday so work hard baby!!!</span>
      </div>

      <div className="p-4 grid grid-rows-6 gap-2">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}
