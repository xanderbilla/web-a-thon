import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full h-auto px-8 py-6">
      
      {/* User Info Card */}
      <section className="w-full flex items-center justify-between p-6 mb-12 rounded-xl shadow-lg bg-white border-2 border-gray-300">
        <div className="flex items-center gap-6">
          <img
            src="/path-to-user-image.jpg"
            alt="User Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-lg font-medium text-gray-500">San Francisco, CA</p>
          </div>
        </div>
      </section>

      {/* Meals Section */}
      <section className="w-full mb-12">
        <h1 className="text-3xl font-semibold mb-4">Fit Meals</h1>
        <div className="grid grid-cols-2 gap-6">
          {/* Meal Card 1 */}
          <div className="relative w-full h-48 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <img
              src="/path-to-healthy-salad.jpg"
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
              src="/path-to-protein-bowl.jpg"
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
              src="/path-to-morning-yoga.jpg"
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
              src="/path-to-strength-training.jpg"
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
        <div className="relative w-full h-48 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
          <p className="text-lg font-medium">Monday - Full Body Workout</p>
        </div>
      </section>
    </div>
  );
}
