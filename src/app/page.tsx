import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col my-6 items-center justify-center min-h-screen bg-white">
      {/* Hero Section Box */}
      <section className="w-full h-screen relative overflow-hidden rounded-xl shadow-lg mb-12 border-2 border-gray-300 bg-white">
        <img
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
          <h1 className="text-white text-5xl font-League Spartan text-center p-4 bg-opacity-60 rounded-lg">
            Live Fit, Live Strong
          </h1>
        </div>
      </section>

      {/* Healthy Meals Box with Hover Transition */}
      <section className="relative w-full mb-12 h-[600px] rounded-xl shadow-lg overflow-hidden border-2 border-gray-300 bg-white">
        {/* Background Image Grid (Merged Images) */}
        <div className="relative w-full h-full group">
          {/* Background Images */}
          <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-0">
            <div className="relative overflow-hidden group">
              <img
                src="/salad.avif"
                alt="Healthy Meal 1"
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg text-center p-4">Fresh and vibrant salad with a blend of healthy greens and vegetables.</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src="/soup.jpg"
                alt="Healthy Meal 2"
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg text-center p-4">Hearty vegetable soup packed with nutrients and flavor.</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src="/salad.jpg"
                alt="Healthy Meal 3"
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg text-center p-4">Colorful and delicious fruit salad that boosts your energy.</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src="/salad2.avif"
                alt="Healthy Meal 4"
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg text-center p-4">Nutritious quinoa salad with a mix of fresh veggies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Box */}
      <section className="w-full mb-12 px-6 lg:px-12 py-6 bg-gray-100 shadow-lg rounded-xl border-2 border-gray-300">
        {/* Workout Image Gallery with Alternating Layout */}
        <div className="space-y-12">
          {/* First Workout Image (Left) */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-1/3 rounded-xl shadow-lg overflow-hidden">
              <img
                src="/dance.webp"
                alt="Dance"
                className="w-full h-64 object-cover transition-transform transform hover:scale-110 duration-300 ease-in-out"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-2xl text-center lg:text-left">
                Dance to Stay Fit! Keep moving and live your best life.
              </p>
            </div>
          </div>

          {/* Second Workout Image (Right) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
            <div className="w-full lg:w-1/3 rounded-xl shadow-lg overflow-hidden">
              <img
                src="/gym.webp"
                alt="Gym"
                className="w-full h-64 object-cover transition-transform transform hover:scale-110 duration-300 ease-in-out"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-2xl text-center lg:text-right">
                Hit the Gym! Achieve your fitness goals, one step at a time.
              </p>
            </div>
          </div>

          {/* Third Workout Image (Left) */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-1/3 rounded-xl shadow-lg overflow-hidden">
              <img
                src="/yoga.webp"
                alt="Yoga"
                className="w-full h-64 object-cover transition-transform transform hover:scale-110 duration-300 ease-in-out"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-2xl text-center lg:text-left">
                Find your balance with Yoga. Stay calm, stay fit.
              </p>
            </div>
          </div>

          {/* Fourth Workout Image (Right) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
            <div className="w-full lg:w-1/3 rounded-xl shadow-lg overflow-hidden">
              <img
                src="/yoo.webp"
                alt="Outdoor Workout"
                className="w-full h-64 object-cover transition-transform transform hover:scale-110 duration-300 ease-in-out"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-2xl text-center lg:text-right">
                Outdoor workouts. Refresh your mind and body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uncomment if you want to include the Footer */}
      {/* <Footer /> */}
    </main>
  );
}
