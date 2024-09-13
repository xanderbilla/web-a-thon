import Footer from "@/app/Layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col my-6 items-center justify-center min-h-screen bg-gray-100 rounded-xl">
      <section className="w-full h-screen relative overflow-hidden rounded-xl">
        <Image
          src="/fit.gif"
          alt="Animated GIF"
          className="w-full h-full object-cover" 
          height={480}
          width={720}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-5xl font-extrabold p-4 bg-black bg-opacity-60 rounded-lg shadow-lg">
            Live Fit
          </h1>
        </div>
      </section>

      {/* Uncomment if you want to include the Footer */}
      {/* <Footer /> */}
    </main>
  );
}
