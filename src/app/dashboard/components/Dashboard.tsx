import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full h-auto px-8 py-6">
      
      {/* User Info Card */}
      <section className="w-full flex items-center justify-between p-6 mb-12 rounded-xl shadow-lg bg-white border-2 border-gray-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-lg font-medium text-gray-500">San Francisco, CA</p>
        </div>
      </section>

      {/* BMI and Calories Display Cards */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* BMI Card */}
        <div className="w-full p-6 rounded-xl shadow-lg bg-white border-2 border-gray-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-xl font-semibold mb-4">Body Mass Index (BMI)</h2>
          <p className="text-lg font-medium text-gray-700">
            Here is your BMI value: <span className="font-bold">24.5</span>
          </p>
        </div>

        {/* Calories Burned Card */}
        <div className="w-full p-6 rounded-xl shadow-lg bg-white border-2 border-gray-300 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-xl font-semibold mb-4">Calories Burned</h2>
          <p className="text-lg font-medium text-gray-700">
            Here is your daily burned calories: <span className="font-bold">2200 kcal</span>
          </p>
        </div>
      </section>

      {/* Meals Section */}
      <section className="w-full mb-12">
        <h1 className="text-3xl font-semibold mb-4">Fit Meals</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Meal Card 1 */}
          <div className="relative w-full h-48 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="./sala1d.jpg"
              alt="Healthy Salad"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-lg font-extrabold text-white">Healthy Salad</p>
            </div>
          </div>

          {/* Meal Card 2 */}
          <div className="relative w-full h-48 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="./protien_bowl.webp"
              alt="Protein Bowl"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-lg font-extrabold text-white">Protein Bowl</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workouts Section */}
      <section className="w-full mb-12">
        <h1 className="text-3xl font-semibold mb-4">Fit Workouts</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Workout Card 1 */}
          <div className="relative w-full h-48 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="./yoga.avif"
              alt="Morning Yoga"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-lg font-extrabold text-white">Morning Yoga</p>
            </div>
          </div>

          {/* Workout Card 2 */}
          <div className="relative w-full h-48 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="./strength.webp"
              alt="Strength Training"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-lg font-extrabold text-white">Strength Training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Schedule */}
      <section className="w-full">
        <h1 className="text-3xl font-semibold mb-4">Workout Schedule</h1>
        <div className="w-full h-auto rounded-xl shadow-lg bg-white flex flex-col p-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <p className="text-lg font-medium mb-4">Monday - Full Body Workout</p>
          <p className="text-lg font-medium mb-4">Tuesday - Cardio & Core</p>
          <p className="text-lg font-medium mb-4">Wednesday - Upper Body Strength</p>
          <p className="text-lg font-medium mb-4">Thursday - Lower Body Strength</p>
          <p className="text-lg font-medium mb-4">Friday - Yoga & Stretching</p>
          <p className="text-lg font-medium mb-4">Saturday - HIIT (High-Intensity Interval Training)</p>
          <p className="text-lg font-medium">Sunday - Rest Day</p>
        </div>
      </section>
    </div>
  );
}
