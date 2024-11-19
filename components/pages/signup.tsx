"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"

import { auth_router } from "@/router";
import { SignupSchema } from "@/validate";

export const SignupComponent = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignupSchema>) => {
    if (data) {
      console.log(data);
    } else {
      toast({
        title: "You submitted the following values:",
        description:
          "The first name, last name, email or password you entered is incorrect.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First name"
                      {...field}
                      className="h-12 px-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      {...field}
                      className="h-12 px-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="example@example.com"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Phone no."
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
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
        <div className="items-top flex space-x-2 mb-10">
          <Checkbox id="terms" className="mt-1" />
          <div className="grid gap-2 leading-none">
            <label
              htmlFor="terms"
              className="text-sm leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Yes, I understand and agree to the SpringWorks&nbsp;
              <Link
                className="font-medium underline hover:text-indigo-700"
                href={auth_router.login_page}
              >
                Terms of Service
              </Link>
              , including the&nbsp;
              <Link
                className="font-medium underline hover:text-indigo-700"
                href={auth_router.login_page}
              >
                User Agreement & Privacy Policy
              </Link>
              .
            </label>
          </div>
        </div>
        <Button className="w-full h-11" type="submit">
          Register
        </Button>
      </form>
    </Form>
  );
};
