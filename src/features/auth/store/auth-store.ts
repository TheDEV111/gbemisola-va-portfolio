"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import type { AuthSession } from "../types";

/* ------------------------------------------------------------------ */
/* State shape                                                          */
/* ------------------------------------------------------------------ */
interface AuthState {
  session: AuthSession | null;
  isAuthenticated: boolean;
  setSession: (session: AuthSession) => void;
  clearSession: () => void;
}

/* ------------------------------------------------------------------ */
/* Store                                                                */
/* ------------------------------------------------------------------ */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      session: null,
      isAuthenticated: false,

      setSession: (session) =>
        set({
          session,
          isAuthenticated: true,
        }),

      clearSession: () =>
        set({
          session: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-session",
      // sessionStorage clears on tab close; swap for localStorage if needed
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? sessionStorage : ({} as Storage),
      ),
      // Only persist non-sensitive fields — tokens intentionally excluded
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        session: state.session
          ? { user: state.session.user, expiresAt: state.session.expiresAt }
          : null,
      }),
    },
  ),
);
