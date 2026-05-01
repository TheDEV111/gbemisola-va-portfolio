/**
 * Auth API service
 *
 * All functions return strongly-typed, Zod-validated data.
 * Throw HttpError on non-2xx responses; callers decide how to handle them.
 */

import { httpClient } from "@/core/api/http-client";

import {
  authSessionSchema,
  authTokenPairSchema,
  type ForgotPasswordInput,
  type LoginInput,
  type RegisterInput,
  type ResetPasswordInput,
} from "../schemas";

import type { AuthSession, AuthTokenPair, User } from "../types";

/* ------------------------------------------------------------------ */
/* Login                                                                */
/* ------------------------------------------------------------------ */
export async function login(credentials: LoginInput): Promise<AuthSession> {
  const raw = await httpClient.post<unknown>("/auth/login", {
    email: credentials.email,
    password: credentials.password,
    rememberMe: credentials.rememberMe,
  });

  return authSessionSchema.parse(raw);
}

/* ------------------------------------------------------------------ */
/* Register                                                             */
/* ------------------------------------------------------------------ */
export async function register(payload: RegisterInput): Promise<AuthSession> {
  const raw = await httpClient.post<unknown>("/auth/register", {
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });

  return authSessionSchema.parse(raw);
}

/* ------------------------------------------------------------------ */
/* Logout                                                               */
/* ------------------------------------------------------------------ */
export async function logout(refreshToken: string): Promise<void> {
  await httpClient.post<void>("/auth/logout", { refreshToken });
}

/* ------------------------------------------------------------------ */
/* Refresh tokens                                                       */
/* ------------------------------------------------------------------ */
export async function refreshTokens(refreshToken: string): Promise<AuthTokenPair> {
  const raw = await httpClient.post<unknown>("/auth/refresh", { refreshToken });
  return authTokenPairSchema.parse(raw);
}

/* ------------------------------------------------------------------ */
/* Current user                                                         */
/* ------------------------------------------------------------------ */
export async function getMe(options?: { token: string }): Promise<User> {
  const requestOptions = options?.token
    ? { headers: { Authorization: `Bearer ${options.token}` } }
    : {};
  const raw = await httpClient.get<unknown>("/auth/me", requestOptions);

  return authSessionSchema.shape.user.parse(raw);
}

/* ------------------------------------------------------------------ */
/* Password recovery                                                    */
/* ------------------------------------------------------------------ */
export async function forgotPassword(payload: ForgotPasswordInput): Promise<void> {
  await httpClient.post<void>("/auth/forgot-password", payload);
}

export async function resetPassword(payload: ResetPasswordInput): Promise<void> {
  await httpClient.post<void>("/auth/reset-password", {
    token: payload.token,
    password: payload.password,
  });
}
