"use client";

// Re-export sonner's imperative toast API as the project's unified toast primitive.
// Usage: import { toast } from '@/shared/hooks/use-toast'
//        toast.success('Saved!') | toast.error('Failed') | toast('Message')
export { toast } from "sonner";
