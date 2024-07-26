"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

export function SignInForm() {
  const [error, setError] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically check the credentials against your system
    setError('Incorrect username and/or password.');
  }

  return (
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
        {error && (
          <Textarea 
            value={error} 
            readOnly 
            className="bg-red-900/50 text-white border-red-700 resize-none" 
          />
        )}
        <Button 
          type="submit" 
          className="w-full bg-crimson text-white rounded-full transition-all hover:scale-110 active:bg-crimson-dark active:scale-100"
        >
          Log In
        </Button>
      </form>
    </Form>
  );
}