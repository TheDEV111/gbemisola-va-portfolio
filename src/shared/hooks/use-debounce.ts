"use client";

import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(timerRef.current);
  }, [value, delayMs]);

  return debouncedValue;
}
