"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function SignIn() {
  const [error, setError] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError('Incorrect username and/or password.');
  }

  return (
    <div className="flex justify-center items-center min-h-screen hero-background">
      <div className="bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-crimson mb-6 text-center">Sign In to DarkGPT</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} className="bg-gray-800 text-white border-gray-700" />
                  </FormControl>
                  <FormMessage className="text-crimson" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} className="bg-gray-800 text-white border-gray-700" />
                  </FormControl>
                  <FormMessage className="text-crimson" />
                </FormItem>
              )}
            />
            {error && <p className="text-crimson text-center">{error}</p>}
            <Button 
              type="submit" 
              className="w-full bg-crimson text-white rounded-full transition-all hover:scale-110 active:bg-crimson-dark active:scale-100"
            >
              Log In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}