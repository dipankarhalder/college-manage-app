import Link from "next/link";
import { Network } from 'lucide-react';

import { auth_router } from "@/router";
import { SigninComponent } from "@/components/pages/signin";
import { SocialComponent } from "@/components/pages/social";

export default function SigninPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-5 sm:w-[400px]">
      <div className="flex flex-col text-center mb-0">
        <div className="flex justify-center items-center mb-12">
          <span className="flex justify-center items-center w-[40px] h-[40px] bg-indigo-700 rounded-full">
            <Network size={20} className="text-white" />
          </span>
          <p className="ml-2 font-bold text-2xl text-indigo-700">Task Manager</p>
        </div>
        <h1 className="text-xl font-semibold tracking-tight mb-0">
          Welcome Back!
        </h1>
      </div>
      <div className="grid gap-6">
        <SigninComponent />
        <div className="text-center text-sm mt-2">
          <p>
            Don&apos;t have an account? &nbsp;
            <Link
              href={auth_router.register_page}
              className="font-medium underline hover:text-indigo-700"
            >
              Create now
            </Link>
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-100 px-2 text-muted-foreground font-semibold text-xs">
              Or continue with
            </span>
          </div>
        </div>
        <SocialComponent />
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground leading-6">
        By clicking continue, you agree to our&nbsp;
        <Link
          className="font-medium underline text-indigo-900 hover:text-indigo-700"
          href={auth_router.login_page}
        >
          Terms of Service
        </Link>
        &nbsp; and &nbsp;
        <Link
          className="font-medium underline text-indigo-900 hover:text-indigo-700"
          href={auth_router.login_page}
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
