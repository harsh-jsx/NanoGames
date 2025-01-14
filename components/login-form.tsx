"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { SocialLoginButtons } from "@/components/social-login-buttons";
import { handleLogin } from "@/lib/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      console.log("Login attempt recorded");
      // Reset form fields
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className=" w-full flex items-center justify-center ">
      <Card className="w-full max-w-md bg-transparent border-0 shadow-none">
        {/* Header Section */}
        <div className="relative mb-8  bg-[#4CAF50] p-6 text-white overflow-hidden">
          <div className="absolute right-3 top-3 cursor-pointer z-10">
            <button className="text-white/80 hover:text-white">✕</button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0">
            <div className="relative w-32 h-32">
              <div className="absolute top-4 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" />
              <div
                className="absolute top-8 right-12 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
              <div className="absolute top-6 right-16 w-2 h-2 text-white">
                ✨
              </div>
            </div>
          </div>

          <div className="mb-16 relative z-[1]">
            <Image
              src="https://static.nanogames.io/assets/logo2.cc188584.png"
              alt="NANOGAMES.IO"
              width={150}
              height={30}
              className="mb-4"
              priority
            />
            <h1 className="text-2xl font-bold leading-tight">
              BUILD THE BEST
              <br />
              CRYPTO CASINO
              <br />
              TOGETHER
            </h1>
          </div>

          <div className="relative h-24">
            <Image
              src="https://static.nanogames.io/assets/login_coco.1855b11e.png"
              alt="Casino illustration with panda"
              width={300}
              height={50}
              className="absolute m-0 p-0 bottom-0 right-0"
              priority
            />
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-4 py-2 px-2" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-400">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="h-12 py-2 px-2 bg-[#2C2C2E] border-0 text-white placeholder:text-gray-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm text-gray-400">
                Login Password
              </label>
              <button
                type="button"
                className="text-sm text-gray-400 hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle forgot password
                }}
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Login Password"
                className="h-12 bg-[#2C2C2E] border-0 text-white placeholder:text-gray-500 pr-10"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 h-12 bg-[#7F3FFC] hover:bg-[#7F3FFC]/90 text-white rounded-full px-8"
            >
              Sign in
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="h-12 bg-[#2C2C2E] hover:bg-[#2C2C2E]/90 text-white rounded-full px-6 flex items-center gap-2"
              onClick={() => {
                // Handle sign up
              }}
            >
              Sign up
              <span className="text-lg">›</span>
            </Button>
          </div>

          <SocialLoginButtons />
        </form>
      </Card>
    </div>
  );
}
