/* ------------------------------------------------------------------ */
/* Domain models (plain data — no Zod here)                            */
/* ------------------------------------------------------------------ */
export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
  role: UserRole;
  createdAt: string; // ISO-8601
  updatedAt: string;
}

export type UserRole = "admin" | "member" | "viewer";

export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: number; // Unix timestamp (seconds)
}

export interface AuthTokenPair {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}
