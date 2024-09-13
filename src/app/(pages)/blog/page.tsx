import BlogCard from "./components/BlogCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-between">
      <div className="p-2 px-4">
        <h1 className="my-2 text-6xl font-extrabold">Blog</h1>
        <span className="text-xl opacity-70 font-semibold">Everyday is not Sunday so work hard baby!!!</span>
      </div>
      <Button className="m-4">Create a Blog</Button>
      </div>

      <div className="p-4 grid grid-rows-6 gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}
