import { useState, useEffect } from "react";

const WINDOW_INNER_WIDTH = 0;

export const useWindowResize = (): number => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : WINDOW_INNER_WIDTH
  );

  useEffect(() => {
    const handleResize = (): void => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
