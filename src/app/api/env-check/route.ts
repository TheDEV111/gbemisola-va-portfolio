import { NextResponse } from "next/server";

export async function GET() {
  const vars = {
    KEYSTATIC_GITHUB_CLIENT_ID: {
      exists: !!process.env["KEYSTATIC_GITHUB_CLIENT_ID"],
      length: process.env["KEYSTATIC_GITHUB_CLIENT_ID"]?.length || 0,
      prefix: process.env["KEYSTATIC_GITHUB_CLIENT_ID"] ? process.env["KEYSTATIC_GITHUB_CLIENT_ID"].substring(0, 8) + "..." : "none",
    },
    KEYSTATIC_GITHUB_CLIENT_SECRET: {
      exists: !!process.env["KEYSTATIC_GITHUB_CLIENT_SECRET"],
      length: process.env["KEYSTATIC_GITHUB_CLIENT_SECRET"]?.length || 0,
      prefix: process.env["KEYSTATIC_GITHUB_CLIENT_SECRET"] ? process.env["KEYSTATIC_GITHUB_CLIENT_SECRET"].substring(0, 8) + "..." : "none",
    },
    KEYSTATIC_SECRET: {
      exists: !!process.env["KEYSTATIC_SECRET"],
      length: process.env["KEYSTATIC_SECRET"]?.length || 0,
      prefix: process.env["KEYSTATIC_SECRET"] ? process.env["KEYSTATIC_SECRET"].substring(0, 8) + "..." : "none",
    },
    NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: {
      exists: !!process.env["NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"],
      length: process.env["NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"]?.length || 0,
      value: process.env["NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"] || "none",
    },
    KEYSTATIC_ALLOWED_GITHUB_USERS: {
      exists: !!process.env["KEYSTATIC_ALLOWED_GITHUB_USERS"],
      length: process.env["KEYSTATIC_ALLOWED_GITHUB_USERS"]?.length || 0,
      value: process.env["KEYSTATIC_ALLOWED_GITHUB_USERS"] || "none",
    },
    NODE_ENV: process.env["NODE_ENV"] || "none",
  };

  return NextResponse.json(vars);
}
