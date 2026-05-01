import { LoginForm } from "@/features/auth/components/login-form";

import type { Metadata } from "next";


export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-6 px-4">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
          <p className="text-muted-foreground text-sm">Enter your credentials to continue</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
