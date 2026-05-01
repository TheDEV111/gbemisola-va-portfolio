import { z } from "zod";

/* ------------------------------------------------------------------ */
/* Schema                                                               */
/* ------------------------------------------------------------------ */
const envSchema = z.object({
  /* Runtime */
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  /* Public (exposed to the browser via NEXT_PUBLIC_) */
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),

  /* Server-only — not required for portfolio deployment */
  API_SECRET_KEY: z.string().min(32).optional(),
  DATABASE_URL: z.string().optional(),

  /* Auth — not required for portfolio deployment */
  AUTH_SECRET: z.string().min(32).optional(),
  AUTH_TOKEN_EXPIRY_SECONDS: z.coerce.number().positive().default(3600),
});

/* ------------------------------------------------------------------ */
/* Parse & export                                                       */
/* ------------------------------------------------------------------ */
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables:");
  console.error(JSON.stringify(_env.error.flatten().fieldErrors, null, 2));
  // Crash early in server context; throw in client context
  if (typeof window === "undefined") {
    process.exit(1);
  }
  throw new Error("Invalid environment variables. Check server logs.");
}

export const env = _env.data;
export type Env = z.infer<typeof envSchema>;
