import { env } from "@/core/env";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions extends Omit<RequestInit, "method" | "body"> {
  params?: Record<string, string | number | boolean | undefined>;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: unknown;
}

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = "HttpError";
  }

  isUnauthorized() {
    return this.status === 401;
  }

  isForbidden() {
    return this.status === 403;
  }

  isNotFound() {
    return this.status === 404;
  }

  isServerError() {
    return this.status >= 500;
  }
}

/* ------------------------------------------------------------------ */
/* Core fetch wrapper                                                   */
/* ------------------------------------------------------------------ */
async function request<T>(
  method: HttpMethod,
  path: string,
  body?: unknown,
  options: RequestOptions = {},
): Promise<T> {
  const { params, headers: extraHeaders, ...restOptions } = options;

  const url = new URL(`${env.NEXT_PUBLIC_API_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const fetchInit: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...extraHeaders,
    },
    // Next.js 15 fetch cache semantics
    next: { revalidate: 0 },
    ...restOptions,
  };

  if (body !== undefined) {
    fetchInit.body = JSON.stringify(body);
  }

  const response = await fetch(url.toString(), fetchInit);

  if (!response.ok) {
    let errorPayload: ApiError | null = null;
    try {
      errorPayload = (await response.json()) as ApiError;
    } catch {
      // response body was not JSON
    }

    throw new HttpError(
      response.status,
      errorPayload?.code ?? "UNKNOWN_ERROR",
      errorPayload?.message ?? response.statusText,
      errorPayload?.details,
    );
  }

  // 204 No Content
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

/* ------------------------------------------------------------------ */
/* Public API                                                           */
/* ------------------------------------------------------------------ */
export const httpClient = {
  get: <T>(path: string, options?: RequestOptions) =>
    request<T>("GET", path, undefined, options),

  post: <T>(path: string, body: unknown, options?: RequestOptions) =>
    request<T>("POST", path, body, options),

  put: <T>(path: string, body: unknown, options?: RequestOptions) =>
    request<T>("PUT", path, body, options),

  patch: <T>(path: string, body: unknown, options?: RequestOptions) =>
    request<T>("PATCH", path, body, options),

  delete: <T>(path: string, options?: RequestOptions) =>
    request<T>("DELETE", path, undefined, options),
};
