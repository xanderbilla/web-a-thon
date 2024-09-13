"use client";

import * as React from "react";

import axios from "axios";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingSpinner } from "../../../Icons/LoadingSpinner";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const data = {
      username: username,
      email: email,
      password: password,
    };
    
    try {
      const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      data
      );
    } catch (error) {
      setError("Invalid credentials");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  async function handleLogin(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const data = {
      email: email,
      password: password,
    };
    
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      setError("Invalid credentials");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Username"
              type="Username"
              autoCapitalize="none"
              autoComplete="Username"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <LoadingSpinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
          <Button disabled={isLoading} onClick={handleLogin} variant="outline">Sign In</Button>
          {
            error && (
              <div className="flex items-center justify-center bg-slate-200/20 text-md text-red-600 w-full h-12">{error}</div>
            )
          }
        </div>
      </form>
    </div>
  );
}
