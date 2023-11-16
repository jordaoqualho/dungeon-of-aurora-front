/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;

export function useDebounce<Func extends SomeFunction>(
  func: Func,
  delay = 1000
) {
  const [timer, setTimer] = useState<Timer>();

  const debouncedFunction = ((...args: Parameters<Func>) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    if (timer) clearTimeout(timer);
    setTimer(newTimer);
  }) as Func;

  return debouncedFunction;
}
