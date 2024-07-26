"use client"

import React from 'react';
import { SignInForm } from '@/components/SignInForm';
import { useTheme } from '@/components/ui/ThemeProvider';
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const { baseColor } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen hero-background" style={{ backgroundColor: baseColor }}>
      <div className="bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-crimson mb-6 text-center">Sign In to DarkGPT</h2>
        <SignInForm />
        <div className="mt-4">
          <Button className="w-full bg-crimson text-white rounded-full transition-all hover:scale-110 active:bg-crimson-dark active:scale-100">
            Send message
          </Button>
        </div>
      </div>
    </div>
  );
}