import { useState, useEffect } from "react";

const DEFAULT_VALUE = 0;

export function useWindowResize(): number {
  const [width, setWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : DEFAULT_VALUE
  );

  useEffect((): (() => void) => {
    if (typeof window === "undefined") {
      return () => {};
    }

    const handleResize = (): void => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
