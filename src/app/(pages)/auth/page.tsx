import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "./user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative max-w-none grid h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Black Background Section */}
        <div className="relative hidden h-full flex-col bg-black text-white p-10 lg:flex lg:items-center lg:justify-center lg:rounded-l-lg lg:overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <img
              src="/fit.gif" // Path to your GIF
              alt="Background Animation"
              className="absolute inset-0 object-cover w-full h-full opacity-60" // Adjust opacity if needed
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Live.fit</h2>
            <p className="text-lg mb-6">
              Elevate your fitness journey with personalized workouts and meal plans.
            </p>
            {/* Removed Get Started Button */}
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:p-8 flex items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Authentication
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login or create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
