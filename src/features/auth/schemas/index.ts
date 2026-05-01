import { z } from "zod";

/* ------------------------------------------------------------------ */
/* Shared field validators                                              */
/* ------------------------------------------------------------------ */
const emailSchema = z.string().email("Please enter a valid email address");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[0-9]/, "Must contain at least one number");

/* ------------------------------------------------------------------ */
/* Form schemas (used by react-hook-form + Zod resolver)               */
/* ------------------------------------------------------------------ */
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean(),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(64),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z
  .object({
    token: z.string().min(1),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

/* ------------------------------------------------------------------ */
/* API response schemas (runtime validation at the boundary)           */
/* ------------------------------------------------------------------ */
export const userSchema = z.object({
  id: z.string().uuid(),
  email: emailSchema,
  name: z.string(),
  avatarUrl: z.string().url().nullable(),
  role: z.enum(["admin", "member", "viewer"]),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const authSessionSchema = z.object({
  user: userSchema,
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresAt: z.number().int().positive(),
});

export const authTokenPairSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresAt: z.number().int().positive(),
});

/* ------------------------------------------------------------------ */
/* Inferred types                                                       */
/* ------------------------------------------------------------------ */
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
