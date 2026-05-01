"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { login, logout, refreshTokens, register } from "../services/auth-api";
import { useAuthStore } from "../store/auth-store";

import type { LoginInput, RegisterInput } from "../schemas";

/* ------------------------------------------------------------------ */
/* Query keys — colocated with the feature that owns them              */
/* ------------------------------------------------------------------ */
export const authKeys = {
  all: ["auth"] as const,
  session: () => [...authKeys.all, "session"] as const,
  user: () => [...authKeys.all, "user"] as const,
};

/* ------------------------------------------------------------------ */
/* Hooks                                                                */
/* ------------------------------------------------------------------ */
export function useLogin() {
  const queryClient = useQueryClient();
  const setSession = useAuthStore((s) => s.setSession);

  return useMutation({
    mutationFn: (credentials: LoginInput) => login(credentials),
    onSuccess: (session) => {
      setSession(session);
      queryClient.setQueryData(authKeys.session(), session);
    },
  });
}

export function useRegister() {
  const queryClient = useQueryClient();
  const setSession = useAuthStore((s) => s.setSession);

  return useMutation({
    mutationFn: (payload: RegisterInput) => register(payload),
    onSuccess: (session) => {
      setSession(session);
      queryClient.setQueryData(authKeys.session(), session);
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const { session, clearSession } = useAuthStore();

  return useMutation({
    mutationFn: () => logout(session?.refreshToken ?? ""),
    onSettled: () => {
      clearSession();
      queryClient.clear();
    },
  });
}

export function useRefreshTokens() {
  const { session, setSession } = useAuthStore();

  return useMutation({
    mutationFn: () => refreshTokens(session?.refreshToken ?? ""),
    onSuccess: (tokens) => {
      if (session) {
        setSession({ ...session, ...tokens });
      }
    },
  });
}

export function useCurrentUser() {
  const session = useAuthStore((s) => s.session);

  return useQuery({
    queryKey: authKeys.user(),
    queryFn: () =>
      import("../services/auth-api").then(({ getMe }) =>
        getMe({ token: session?.accessToken ?? "" }),
      ),
    enabled: !!session?.accessToken,
    staleTime: 5 * 60 * 1000, // 5 min
  });
}
