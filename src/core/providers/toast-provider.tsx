"use client";

import { Toaster } from "@/shared/components/ui/sonner";

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster richColors closeButton />
    </>
  );
}
