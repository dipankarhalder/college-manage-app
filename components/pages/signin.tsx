"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"

import { auth_router, admin_router } from "@/router";
import { SigninSchema } from "@/validate";

export const SigninComponent = () => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SigninSchema>) => {
    if (data) {
      console.log(data);
      router.push(admin_router.dashboard);
    } else {
      toast({
        variant: "destructive",
        title: "Opps! Something went wrong.",
        description: "The email or password you entered is incorrect.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end text-sm mb-6">
          <p>
            <Link
              href={auth_router.forgot_page}
              className="font-medium text-xs underline hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
        <Button className="w-full bg-indigo-600 h-11 hover:bg-indigo-700" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};
